import lodash from 'lodash';
import DatabaseConnectionSingleton from '../configs/DatabaseConnection.js';
import LogMaster from '../models/LogMaster.js';
import { Supplier } from '../models/Supplier.js';
import LoggerUtilSingleton from '../util/LoggerUtils.js';
import SchemaValidation from '../util/SchemaValidation.js';
import SequelizeUtil from '../util/SequelizeUtil.js';
import StandardService from './StandardService.js';
import { Op } from 'sequelize';
import LogEvent from '../constants/LogEvent.js';

class SupplierService extends StandardService {
  constructor() {
    super(Supplier);
  }

  async createOrUpdate(modelDto) {
    return DatabaseConnectionSingleton.getConnection().transaction(async (transaction) => {
      const existingData = await this.model.findByPk(this.getPrimaryKeyValue(modelDto));
      const requestData = modelDto.toModel();
      const { detailsData } = modelDto;

      const { logMasterDto } = modelDto;
      this.#insertMasterLog(logMasterDto, transaction);

      if (existingData === undefined || existingData === null) {
        const newHeaderData = await this.insert(requestData, transaction);
        const newDetailsData = await this.#upsertDetails(detailsData, transaction);

        return { data: newHeaderData.dataValues, isUpdated: false, details: newDetailsData };
      }

      const updatedHeaderData = await this.update(requestData, transaction);
      const updatedDetailsData = await this.#upsertDetails(detailsData, transaction);

      return { data: updatedHeaderData.dataValues, isUpdated: true, details: updatedDetailsData };
    });
  }

  async #insertMasterLog(logMasterDto, transaction) {
    if (logMasterDto == null) {
      return;
    }

    LoggerUtilSingleton.info(LogEvent.LOG_MASTER, { ...logMasterDto });
    await LogMaster.upsert({ ...logMasterDto.toModel() }, { transaction });
  }

  async #upsertDetails(detailsData, transaction) {
    if (detailsData == null) {
      return;
    }

    const tableNames = Object.keys(detailsData);
    const insertDetailsQueries = tableNames.map((tableName) => {
      return new Promise((resolve, reject) => {
        const detailModel = SequelizeUtil.getModelByTableName(tableName);
        const insertQueries = this.#upsertRows(detailModel, detailsData[tableName], transaction);

        resolve(Promise.all(insertQueries)).catch((error) => {
          throw error;
        });
      })
        .then((result) => ({ [tableName]: result }))
        .catch((error) => {
          throw error;
        });
    });

    return Promise.all(insertDetailsQueries).catch((error) => {
      LoggerUtilSingleton.error(LogEvent.API, error);
      throw error;
    });
  }

  #upsertRows(detailModel, detailRows, transaction) {
    Promise.resolve(this.#deleteRowsByHeader(detailModel, detailRows, transaction));

    const insertQueries = detailRows.map((data) => {
      return new Promise((resolve, reject) => {
        SchemaValidation.validateDataByModel(data, detailModel);
        const freshData = {};
        const keys = Object.keys(data);
        keys.forEach((key) => {
          freshData[lodash.camelCase(key)] = data[key];
        });
        resolve(detailModel.upsert({ ...freshData }, { transaction }));
      })
        .then((result) => {
          const [data] = result;
          return { data: data.dataValues, isUpdated: data.isNewRecord };
        })
        .catch((error) => {
          throw error;
        });
    });

    return insertQueries;
  }

  async #deleteRowsByHeader(detailModel, detailRows, transaction) {
    const primaryKey = detailModel.primaryKeyAttributes[0];
    const notIn = detailRows.map((detail) => {
      return detail[lodash.snakeCase(primaryKey)];
    });

    const parentKey = this.model.primaryKeyAttributes[0];
    const parentValue = detailRows[0][lodash.snakeCase(parentKey)];

    if (Object.keys(detailModel.getAttributes()).includes('isdel')) {
      return new Promise((resolve, reject) => {
        resolve(
          detailModel.update(
            { isdel: 1 },
            {
              where: { [primaryKey]: { [Op.notIn]: notIn }, [parentKey]: parentValue },
              transaction
            }
          )
        );
      })
        .then((result) => {
          const [data] = result;
          return { data: data.dataValues, isUpdated: data.isNewRecord };
        })
        .catch((error) => {
          throw error;
        });
    }

    return new Promise((resolve, reject) => {
      resolve(
        detailModel.destroy({
          where: { [primaryKey]: { [Op.notIn]: notIn }, [parentKey]: parentValue },
          transaction
        })
      );
    });
  }
}

export default SupplierService;
