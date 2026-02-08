import { StatusCodes } from 'http-status-codes';
import Constant from '../constants/Constant.js';
import buildResponse from '../util/buildResponse.js';

class StandardController {
  service;
  constructor(service) {
    this.service = service;
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
}

export default StandardController;
