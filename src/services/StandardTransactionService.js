import DatabaseConnectionSingleton from '../configs/DatabaseConnection.js';
import Constant from '../constants/Constant.js';
import LogEvent from '../constants/LogEvent.js';
import LoggerUtilSingleton from '../util/LoggerUtils.js';
import ObjectUtil from '../util/ObjectUtil.js';
import SequelizeUtil from '../util/SequelizeUtil.js';
import StandardService from "./StandardService.js";

class StandardTransactionService extends StandardService {
  defaultOptions = {
    transaction: undefined,
    retry: 0,
    isDeleteDetail: false
  };

  constructor(model) {
    super(model);
  }

  async insertTransaction(requestDto) {
    return DatabaseConnectionSingleton.getConnection().transaction(async (transaction) => {
      const existingData = await this.model.findByPk(this.getPrimaryKeyValue(requestDto), { lock: transaction.LOCK.UPDATE, transaction });
      const requestData = requestDto.toModel();
      const { detailsData, noTransactionCount, logTransaksi, traceDto, traceDtos } = requestDto;

      await this.upsertTransactionCount(noTransactionCount, transaction);
      await this.upsertLogTransaksi(logTransaksi, transaction);
      await this.upsertTrace(traceDtos, transaction);

      if (existingData === undefined || existingData === null) {
        const newHeaderData = await this.insert(requestData, transaction);
        const newDetailsData = await this.upsertTransactionDetails(detailsData, newHeaderData, transaction);

        return { data: newHeaderData.dataValues, isUpdated: false, details: newDetailsData };
      }

      const updatedHeaderData = await this.update(requestData, transaction);
      const updatedDetailsData = await this.upsertTransactionDetails(detailsData, updatedHeaderData, transaction);

      return { data: updatedHeaderData.dataValues, isUpdated: true, details: updatedDetailsData };
    });
  }

  async upsertTrace(traceDtos, transaction) {
    if (traceDtos == null) {
      return;
    }

    const insertTracePromise = traceDtos.map(traceDto => {
      return new Promise((resolve, reject) => {
        LoggerUtilSingleton.info(LogEvent.TRACE, { ...traceDto.toModel() });
        resolve(traceDto.sequelizeModel.upsert({ ...traceDto.toModel() }, { lock: transaction.LOCK.UPDATE, transaction }));
      })
        .then((result) => result)
        .catch((error) => {
          throw error;
        });
    });

    return Promise.all(insertTracePromise)
      .then((result) => result)
      .catch((error) => {
        throw error;
      });
  }

  async changeStatus(requestDto, { transaction, retry, isDeleteDetail } = this.defaultOptions) {
    if (transaction == null) {
      return this.withTransaction(this.changeStatus, requestDto, retry);
    }

    const existingData = await this.model.findByPk(this.getPrimaryKeyValue(requestDto), { lock: transaction.LOCK.UPDATE, transaction });
    const requestData = requestDto.toModel();
    const { detailsData, logTransaksi, traceDto, deleteDetailsData, traceDtos } = requestDto;
    await this.upsertLogTransaksi(logTransaksi, transaction);
    await this.upsertTrace(traceDtos, transaction);
    const deletedTables = await this.#deleteRowDetails(deleteDetailsData, transaction);

    if (existingData === undefined || existingData === null) {
      const newHeaderData = await this.insert(requestData, transaction);
      const newDetailsData = await this.upsertDetails(detailsData, transaction, isDeleteDetail);

      return { data: newHeaderData.dataValues, isUpdated: false, details: newDetailsData, deletedTables };
    }

    const updatedHeaderData = await this.update(requestData, transaction);
    const updatedDetailsData = await this.upsertDetails(detailsData, transaction, isDeleteDetail);

    return { data: updatedHeaderData.dataValues, isUpdated: true, details: updatedDetailsData, deletedTables };
  }

  async changeStatusRequest(requestDto, { transaction, retry, isDeleteDetail } = this.defaultOptions) {
    if (transaction == null) {
      return this.withTransaction(this.changeStatusRequest, requestDto, retry);
    }

    const existingData = await this.model.findByPk(this.getPrimaryKeyValue(requestDto), { lock: transaction.LOCK.UPDATE, transaction });
    const requestData = requestDto.toModel();
    const { detailsData, logTransaksi, traceDto, traceDtos } = requestDto;
    await this.upsertLogTransaksi(logTransaksi, transaction);
    await this.upsertTrace(traceDtos, transaction);

    if (existingData === undefined || existingData === null) {
      const newHeaderData = await this.insert(requestData, transaction);
      const newDetailsData = await this.upsertDetails(detailsData, transaction, isDeleteDetail);

      return { data: newHeaderData.dataValues, isUpdated: false, details: newDetailsData };
    }

    const updatedHeaderData = await this.update(requestData, transaction);
    const updatedDetailsData = await this.upsertDetails(detailsData, transaction, isDeleteDetail);

    return { data: updatedHeaderData.dataValues, isUpdated: true, details: updatedDetailsData };
  }

  async #deleteRowDetails(deleteDetailsData, transaction) {
    const deletedTables = Object.keys(deleteDetailsData);

    const deleteDetailsQuery = deletedTables.map(deletedTable => new Promise((resolve, reject) => {
      const deleteParameter = deleteDetailsData[deletedTable];
      if (ObjectUtil.isObjectEmpty(deleteParameter)) {
        return;
      }

      LoggerUtilSingleton.info(`DELETD TABLE ${deletedTable.toUpperCase()}`, { parameter: deleteParameter });

      resolve(SequelizeUtil.getModelByTableName(deletedTable).destroy({ where: deleteParameter, lock: transaction.LOCK.UPDATE, transaction }));
    })
      .then((result) => ({ table_name: deletedTable, parameter: deleteDetailsData[deletedTable], status: Constant.SUCCESS, result }))
      .catch((error) => {
        LoggerUtilSingleton.warn(LogEvent.SEQUELIZE_ERROR, error);
        return { table_name: deletedTable, parameter: deleteDetailsData[deletedTable], status: Constant.FAILED, result: error.message }
      })
    );

    return Promise.all(deleteDetailsQuery)
      .then((result) => result)
      .catch((error) => {
        throw error;
      });
  }
}

export default StandardTransactionService;