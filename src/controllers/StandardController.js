import { StatusCodes } from 'http-status-codes';
import Constant from '../constants/Constant.js';
import buildResponse from '../util/buildResponse.js';
import ObjectUtil from '../util/ObjectUtil.js';

class StandardController {
  service;
  constructor(service) {
    this.service = service;
    this.count = this.count.bind(this);
    this.getAll = this.getAll.bind(this);
    this.getAllDataAPI = this.getAllDataAPI.bind(this);
  }

  async create(request, response, dto) {
    const { data, isUpdated, details } = await this.service.createOrUpdate(dto);
    const statusCode = isUpdated ? StatusCodes.OK : StatusCodes.CREATED;
    const message = isUpdated ? Constant.UPDATED : Constant.CREATED;

    return response
      .status(statusCode)
      .json(buildResponse(statusCode, message, { ...data, details }));
  }

  async insertTransaction(request, response, dto) {
    const { data, isUpdated, details } = await this.service.insertTransaction(dto);
    const statusCode = isUpdated ? StatusCodes.OK : StatusCodes.CREATED;
    const message = isUpdated ? Constant.UPDATED : Constant.CREATED;

    return response
      .status(statusCode)
      .json(buildResponse(statusCode, message, { ...data, details }));
  }

  async delete(request, response, dto) {
    const data = await this.service.delete(dto);

    return response
      .status(StatusCodes.OK)
      .json(buildResponse(StatusCodes.OK, Constant.DELETED, data));
  }

  async restore(request, response, dto) {
    const { data } = await this.service.createOrUpdate(dto);

    return response
      .status(StatusCodes.OK)
      .json(buildResponse(StatusCodes.OK, Constant.RESTORED, data));
  }

  async count(request, response) {
    const totalRows = await this.service.count();

    return response
      .status(StatusCodes.OK)
      .json(buildResponse(StatusCodes.OK, "Success", totalRows));
  }

  async getAll(request, response) {
    const requestBody = request.body;
    const searchClause = this.service.buildSearchClause(this.service.columnSearch, requestBody.search.value);
    const data = await this.service.getAll({ whereClause: searchClause, limit: requestBody.length, offset: requestBody.start, orderIndex: requestBody.order[0].column, orderDirection: requestBody.order[0].dir });
    const totalRows = await this.service.count();

    const payload = {
      result: data.map(currency => ObjectUtil.toSnakeCase(currency)),
      total_rows: totalRows,
    }

    return response
      .status(StatusCodes.OK)
      .json(buildResponse(StatusCodes.OK, "Success", payload));
  }

  async getAllDataAPI(request, response) {
    const requestBody = request.body;
    const primaryKey = this.service.model.primaryKeyAttributes[0];
    const whereClause = {
      [primaryKey]: requestBody.where_in
    }

    const data = await this.service.getAll({ whereClause });

    const payload = {
      result: data.map(currency => ObjectUtil.toSnakeCase(currency)),
      total_rows: data.length
    }

    return response
      .status(StatusCodes.OK)
      .json(buildResponse(StatusCodes.OK, "Success", payload));
  }
}

export default StandardController;
