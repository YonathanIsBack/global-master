import { StatusCodes } from "http-status-codes";
import StandardController from "./StandardController.js";
import Constant from "../constants/Constant.js";
import buildResponse from "../util/buildResponse.js";

class StandardTransactionController extends StandardController {
  constructor(service) {
    super(service);
    this.changeStatus = this.changeStatus.bind(this);
    this.changeStatusRequest = this.changeStatusRequest.bind(this);
  }

  async changeStatus(request, response, dto) {
    const { data, isUpdated, details, deletedTables } = await this.service.changeStatus(dto);
    const statusCode = isUpdated ? StatusCodes.OK : StatusCodes.CREATED;
    const message = isUpdated ? Constant.UPDATED : Constant.CREATED;

    return response
      .status(statusCode)
      .json(buildResponse(statusCode, message, { ...data, deletedTables, details }));
  }

  async changeStatusRequest(request, response, dto) {
    const { data, isUpdated, details } = await this.service.changeStatusRequest(dto);
    const statusCode = isUpdated ? StatusCodes.OK : StatusCodes.CREATED;
    const message = isUpdated ? Constant.UPDATED : Constant.CREATED;

    return response
      .status(statusCode)
      .json(buildResponse(statusCode, message, { ...data, details }));
  }
}

export default StandardTransactionController;