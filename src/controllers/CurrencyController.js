import { StatusCodes } from 'http-status-codes';
import CurrencyDto from '../dto/CurrencyDto.js';
import buildResponse from '../util/buildResponse.js';
import StandardController from './StandardController.js';

class CurrencyController extends StandardController {
  constructor(currencyService) {
    super(currencyService);
    this.create = this.create.bind(this);
    this.restore = this.restore.bind(this);
    this.delete = this.delete.bind(this);
  }

  async create(request, response) {
    const { body } = request;
    const currencyDto = new CurrencyDto(body);
    const { data, isUpdated, details } = await this.service.createOrUpdate(currencyDto);
    const statusCode = isUpdated ? StatusCodes.OK : StatusCodes.CREATED;
    const res = [{ status: 200 }];

    return response
      .status(statusCode)
      .json(buildResponse(StatusCodes.OK, "Saved", null, res));
  }

  async delete(request, response) {
    const { body } = request;
    const currencyDto = new CurrencyDto(body);

    return await super.delete(request, response, currencyDto);
  }

  async restore(request, response) {
    const { body } = request;
    const currencyDto = new CurrencyDto(body);

    return await super.restore(request, response, currencyDto);
  }
}

export default CurrencyController;
