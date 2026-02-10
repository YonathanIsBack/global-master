import { Transaction } from 'sequelize';
import DatabaseConnectionSingleton from '../configs/DatabaseConnection.js';
import LogEvent from '../constants/LogEvent.js';
import DataNotFoundException from '../exception/DataNotFoundException.js';
import LogMaster from '../models/LogMaster.js';
import LogTransaksi from '../models/LogTransaksi.js';
import TransactionCount from '../models/no/TransactionCount.js';
import LoggerUtilSingleton from '../util/LoggerUtils.js';
import ObjectUtil from '../util/ObjectUtil.js';
import SchemaValidation from '../util/SchemaValidation.js';
import SequelizeUtil from '../util/SequelizeUtil.js';

const defaultOptions = {
  transaction: undefined,
  retry: 0,
  isDeleteDetail: false
};

class StandardService {
  model;
  columnOrder = [];

  constructor(model) {
    this.model = model;
  }

  async withTransaction(callback, data, retry = 0) {
    if (retry > 3) {
      throw new Error('Too much retry transaction. Cannot execute query.');
    }

    return DatabaseConnectionSingleton.getConnection().transaction(async (transaction) => {
      return callback.call(this, data, { transaction, retry: retry + 1 });
    });
  }

  async createOrUpdate(modelDto, { transaction, retry, isDeleteDetail } = defaultOptions) {
    if (transaction == null) {
      return this.withTransaction(this.createOrUpdate, modelDto, retry);
    }

    const existingData = await this.model.findByPk(this.getPrimaryKeyValue(modelDto), { lock: transaction.LOCK.UPDATE, transaction });
    const requestData = modelDto.toModel();
    const { detailsData, logMasterDto } = modelDto;

    this.#insertMasterLog(logMasterDto, transaction);

    if (existingData === undefined || existingData === null) {
      const newHeaderData = await this.insert(requestData, transaction);
      const newDetailsData = await this.upsertDetails(detailsData, transaction, isDeleteDetail);

      return { data: newHeaderData.dataValues, isUpdated: false, details: newDetailsData };
    }

    const updatedHeaderData = await this.update(requestData, transaction);
    const updatedDetailsData = await this.upsertDetails(detailsData, transaction, isDeleteDetail);

    return { data: updatedHeaderData.dataValues, isUpdated: true, details: updatedDetailsData };
  }

  async upsertDetails(detailsData, transaction, isDeleteDetail) {
    if (detailsData == null) {
      return;
    }

    const tableNames = Object.keys(detailsData);

    if (isDeleteDetail) {
    }

    const insertDetailsQueries = tableNames.map((tableName) => {
      return new Promise((resolve, reject) => {
        const detailModel = SequelizeUtil.getModelByTableName(tableName);
        const insertQueries = this.#upsertDetailRows(detailModel, detailsData[tableName], transaction);

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
      LoggerUtilSingleton.error(LogEvent.SEQUELIZE_ERROR, error);
      throw error;
    });
  }

  #upsertDetailRows(detailModel, detailRows, transaction) {
    const insertQueries = detailRows.map((data) => {
      return new Promise((resolve, reject) => {
        SchemaValidation.validateDataByModel(data, detailModel);
        resolve(detailModel.upsert(ObjectUtil.toCamelCase(data), { lock: transaction.LOCK.UPDATE, transaction }));
      })
        .then((result) => {
          const [data] = result;
          return { insert: data.dataValues, isNewRecord: data.isNewRecord };
        })
        .catch((error) => {
          throw error;
        });
    });

    return insertQueries;
  }

  async delete(modelDto) {
    return DatabaseConnectionSingleton.getConnection().transaction(async (transaction) => {
      const { logMasterDto } = modelDto;
      await this.#insertMasterLog(logMasterDto, transaction);

      const modelData = await this.model.findByPk(this.getPrimaryKeyValue(modelDto), {
        lock: transaction.LOCK.UPDATE,
        transaction
      });
      const toModel = modelDto.toModel();
      if (modelData === undefined || modelData === null) {
        throw new DataNotFoundException(this.model.name);
      }

      modelData.delete();
      const updatedData = await this.update(
        {
          ...modelDto.toModel(),
          cretime: toModel.cretime,
          creby: toModel.creby,
          modtime: toModel.modtime,
          modby: toModel.modby
        },
        transaction
      );

      return { data: updatedData.dataValues };
    });
  }

  async restore(modelDto) {
    return DatabaseConnectionSingleton.getConnection().transaction(async (transaction) => {
      const { logMasterDto } = modelDto;
      await this.#insertMasterLog(logMasterDto, transaction);

      const modelData = await this.model.findByPk(this.getPrimaryKeyValue(modelDto), {
        lock: transaction.LOCK.UPDATE,
        transaction
      });
      const toModel = modelDto.toModel();
      if (modelData === undefined || modelData === null) {
        throw new DataNotFoundException(this.model.name);
      }

      modelData.restore();
      const updatedData = await this.update(
        {
          ...modelData.dataValues,
          cretime: toModel.cretime,
          creby: toModel.creby,
          modtime: toModel.modtime,
          modby: toModel.modby
        },
        transaction
      );

      return { data: updatedData.dataValues };
    });
  }

  async insertTransaction(requestDto) {
    return DatabaseConnectionSingleton.getConnection().transaction(async (transaction) => {
      const existingData = await this.model.findByPk(this.getPrimaryKeyValue(requestDto), { lock: transaction.LOCK.UPDATE, transaction });
      const requestData = requestDto.toModel();
      const { detailsData, logMasterDto, noTransactionCount, logTransaksi } = requestDto;

      this.#insertMasterLog(logMasterDto, transaction);
      this.upsertTransactionCount(noTransactionCount, transaction);
      this.upsertLogTransaksi(logTransaksi, transaction);

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

  async upsertTransactionDetails(detailsData, newHeaderData, transaction) {
    if (detailsData == null) {
      return;
    }

    const tableNames = Object.keys(detailsData);
    const insertDetailsQueries = tableNames.map((tableName) => {
      return new Promise((resolve, reject) => {
        const detailModel = SequelizeUtil.getModelByTableName(tableName);
        const detailData = detailsData[tableName];
        const deleteQueries = this.#deleteDetailRows(detailModel, newHeaderData, transaction);
        const insertQueries = this.#upsertDetailRows(detailModel, detailData, transaction);

        resolve(Promise.all([deleteQueries, ...insertQueries])).catch((error) => {
          throw error;
        });
      })
        .then((result) => ({ [tableName]: result }))
        .catch((error) => {
          throw error;
        });
    });

    return Promise.all(insertDetailsQueries).catch((error) => {
      LoggerUtilSingleton.error(LogEvent.SEQUELIZE_ERROR, error);
      throw error;
    });
  }

  async #deleteDetailRows(detailModel, headerData, transaction) {
    const whereClause = this.#getMultiplePrimaryKey(headerData);
    return new Promise((resolve, reject) => {
      return resolve(
        detailModel.destroy({
          where: whereClause,
          lock: transaction.LOCK.UPDATE,
          transaction
        })
      );
    })
      .then((_) => {
        return { deleted: whereClause };
      })
      .catch((error) => {
        LoggerUtilSingleton.warn(LogEvent.SEQUELIZE_ERROR, error);
        return { failedDelete: whereClause }
      });
  }

  async insert(dto, transaction) {
    const newModel = await this.model.create(
      {
        ...dto
      },
      { lock: transaction.LOCK.UPDATE, transaction }
    );

    return newModel;
  }

  async update(data, transaction) {
    const primaryKey = this.#getMultiplePrimaryKey(data);
    await this.model.update(
      {
        ...data
      },
      {
        where: primaryKey,
        lock: transaction.LOCK.UPDATE,
        transaction
      }
    );

    return await this.model.findOne({ where: primaryKey, lock: transaction.LOCK.UPDATE, transaction });
  }

  async deleteRow(modelData) {
    if (modelData == null) {
      return;
    }

    return DatabaseConnectionSingleton.getConnection().transaction(async (transaction) => {
      const { logMasterDto } = modelData;
      this.#insertMasterLog(logMasterDto, transaction);
      const primaryKey = this.#getMultiplePrimaryKey(modelData);
      await this.model.destroy({
        where: primaryKey,
        lock: transaction.LOCK.UPDATE,
        transaction
      });

      return { data: primaryKey }
    });
  }

  async #insertMasterLog(logMasterDto, transaction) {
    if (logMasterDto == null) {
      return;
    }

    if (logMasterDto.logMasterId == null) {
      return;
    }

    LoggerUtilSingleton.info(LogEvent.LOG_MASTER, { ...logMasterDto.toModel() });
    await LogMaster.upsert({ ...logMasterDto.toModel() }, { lock: transaction.LOCK.UPDATE, transaction });
  }

  async upsertTransactionCount(transactionCount, transaction) {
    if (transactionCount.noTransactionCountId == null) {
      return;
    }

    LoggerUtilSingleton.info(LogEvent.TRANSACTION_COUNT, { ...transactionCount.toModel() });
    await TransactionCount.upsert({ ...transactionCount.toModel() }, { lock: transaction.LOCK.UPDATE, transaction });
  }

  async upsertLogTransaksi(logTransaksi, transaction) {
    if (logTransaksi.logTransaksiId == null) {
      return;
    }

    LoggerUtilSingleton.info(LogEvent.LOG_TRANSAKSI, { ...logTransaksi.toModel() });
    await LogTransaksi.upsert({ ...logTransaksi.toModel() }, { lock: transaction.LOCK.UPDATE, transaction });
  }

  getPrimaryKeyValue(dto) {
    const value = dto[this.model.primaryKeyAttributes[0]];
    return value === undefined ? null : value;
  }

  #getMultiplePrimaryKey(dto) {
    const primaryKeys = {};
    this.model.primaryKeyAttributes.map((primaryKey) => {
      primaryKeys[primaryKey] = dto[primaryKey] === undefined ? null : dto[primaryKey];
    });

    return primaryKeys;
  }

  #getMultiplePrimaryKeyByModel(dto, model) {
    const primaryKeys = {};
    model.primaryKeyAttributes.map((primaryKey) => {
      primaryKeys[primaryKey] = dto[primaryKey] === undefined ? null : dto[primaryKey];
    });

    return primaryKeys;
  }

  async count() {
    return await this.model.count();
  }

  async getAll(params) {
    const { whereClause, limit = 1, offset = 0, orderIndex, orderDirection } = params;

    return await this.model.findAll(
      {
        where: whereClause,
        raw: true,
        limit: Number(limit),
        offset: Number(offset),
        order: this.#buildOrderClause(orderIndex, orderDirection)
      });
  }

  #buildOrderClause(orderIndex = 0, orderDirection) {
    if (orderIndex == 0) return [];
    4
    const orderClause = [this.columnOrder[Number(orderIndex)], orderDirection];

    return [orderClause];
  }
}

export default StandardService;
