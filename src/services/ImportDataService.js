import LogEvent from "../constants/LogEvent.js";
import LoggerUtilSingleton from "../util/LoggerUtils.js";
import ObjectUtil from "../util/ObjectUtil.js";
import SchemaValidation from "../util/SchemaValidation.js";
import SequelizeUtil from "../util/SequelizeUtil.js";

class ImportDataService {
  async importData(body, databaseOption) {
    const reservedKeyword = ["user_id", "user_ip", "creby_log",];
    const tableNames = Object.keys(body).filter(tableName => !reservedKeyword.includes(tableName));

    const insertPromises = tableNames.map(tableName => {
      return new Promise((resolve, reject) => {
        const model = SequelizeUtil.getModelByTableName(tableName);
        const deleteDataPromises = this.#deleteData(model, body[tableName].delete, databaseOption);
        const upsertDataPromises = this.#upsertData(model, body[tableName].insert, databaseOption);

        resolve(Promise.all([...deleteDataPromises, ...upsertDataPromises]).catch(error => { throw error }));
      }).then((result) => ({ [tableName]: result }))
        .catch((error) => {
          throw error;
        });
    });

    return Promise.all(insertPromises)
      .catch((error) => {
        throw error;
      });
  }

  #upsertData(model, datas, databaseOption) {
    const { transaction } = databaseOption;
    if (datas == null) {
      return [];
    }

    const upsertPromises = datas.map(data => {
      return new Promise((resolve, reject) => {
        SchemaValidation.validateDataByModel(data, model);
        LoggerUtilSingleton.info(LogEvent.MIGRATION, { message: `Insert ${JSON.stringify(data)}` });
        resolve(model.upsert(ObjectUtil.sanitizeObject(ObjectUtil.toCamelCase(data)), { lock: transaction.LOCK.UPDATE, transaction }));
      }).then((result) => ({ insert: result[0] }))
        .catch((error) => {
          throw error;
        });
    });

    return upsertPromises;
  }

  #deleteData(model, datas, databaseOption) {
    const { transaction } = databaseOption;
    if (datas == null) {
      return [];
    }

    const deletePromises = datas.map(data => {
      return new Promise((resolve, reject) => {
        LoggerUtilSingleton.info("MIGRATION", { message: `Delete ${JSON.stringify(data)}` });
        if (ObjectUtil.isObjectEmpty(data)) {
          resolve({ result: "FAILED. PARAMETER CANNOT BE EMPTY" });
          return;
        }

        resolve(model.destroy({ where: ObjectUtil.sanitizeObject(ObjectUtil.toCamelCase(data)), lock: transaction.LOCK.UPDATE, transaction }));
      }).then((result) => ({ delete: data, result }))
        .catch((error) => {
          throw error;
        });
    })

    return deletePromises;
  }
}

export default ImportDataService;