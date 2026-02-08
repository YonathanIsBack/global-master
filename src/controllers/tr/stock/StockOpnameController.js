import { StatusCodes } from 'http-status-codes';
import { StockOpnameDto } from '../../../dto/tr/stock/StockOpnameDto.js';
import StandardTransactionController from '../../StandardTransactionController.js';
import Constant from '../../../constants/Constant.js';
import buildResponse from '../../../util/buildResponse.js';

class StockOpnameController extends StandardTransactionController {
  constructor(stockOpnameService) {
    super(stockOpnameService);
    this.create = this.create.bind(this);
    this.restore = this.restore.bind(this);
    this.delete = this.delete.bind(this);
    this.changeStatus = this.changeStatus.bind(this);
    this.changeStatusRequest = this.changeStatusRequest.bind(this);
    this.opnameProcess = this.opnameProcess.bind(this);
  }

  async create(request, response) {
    const { body } = request;
    const stockOpnameDto = new StockOpnameDto(body);

    return await super.insertTransaction(request, response, stockOpnameDto);
  }

  async restore(request, response) {
    const { body } = request;
    const stockOpnameDto = new StockOpnameDto(body);

    return await super.restore(request, response, stockOpnameDto);
  }

  async delete(request, response) {
    const { body } = request;
    const stockOpnameDto = new StockOpnameDto(body);

    return await super.delete(request, response, stockOpnameDto);
  }

  async changeStatus(request, response) {
    const { body } = request;
    const stockOpnameDto = new StockOpnameDto(body);

    return await super.changeStatus(request, response, stockOpnameDto);
  }

  async changeStatusRequest(request, response) {
    const { body } = request;
    const stockOpnameDto = new StockOpnameDto(body);

    return await super.changeStatusRequest(request, response, stockOpnameDto);
  }

  async opnameProcess(request, response) {
    const { body } = request;
    const stockOpnameDto = new StockOpnameDto(body);
    const { data, isUpdated, details } = await this.service.opnameProcess(stockOpnameDto);
    const statusCode = isUpdated ? StatusCodes.OK : StatusCodes.CREATED;
    const message = isUpdated ? Constant.UPDATED : Constant.CREATED;

    return response
      .status(statusCode)
      .json(buildResponse(statusCode, message, { ...data, details }));
  }
}

export default StockOpnameController;
