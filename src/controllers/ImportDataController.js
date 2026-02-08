import { StatusCodes } from "http-status-codes";
import DatabaseConnectionSingleton from "../configs/DatabaseConnection.js";
import buildResponse from "../util/buildResponse.js";
import LoggerUtilSingleton from "../util/LoggerUtils.js";
import LogEvent from "../constants/LogEvent.js";

class ImportDataController {
  #service;

  constructor(service) {
    this.#service = service;
    this.importData = this.importData.bind(this);
  }

  async importData(request, response) {
    const { body } = request;
    const result = await DatabaseConnectionSingleton.getConnection().transaction(async (transaction) => {
      LoggerUtilSingleton.info(LogEvent.MIGRATION, { message: 'MIGRATION START' });
      const results = await this.#service.importData(body, { transaction });

      const response = {};
      results.forEach(result => {
        Object.assign(response, result)
      })
      return { total_table: results.length, results: response };
    });

    return response
      .status(StatusCodes.OK)
      .json(buildResponse(StatusCodes.OK, "IMPORT DATA", result));
  }
}

export default ImportDataController;