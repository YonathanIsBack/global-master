import { StatusCodes } from 'http-status-codes';
import CurrencyDto from '../dto/CurrencyDto.js';
import ObjectUtil from '../util/ObjectUtil.js';
import StandardController from './StandardController.js';
import Constant from '../constants/Constant.js';

class CurrencyController extends StandardController {
  constructor(currencyService) {
    super(currencyService);
    this.create = this.create.bind(this);
    this.restore = this.restore.bind(this);
    this.delete = this.delete.bind(this);
    this.count = this.count.bind(this);
    this.getAll = this.getAll.bind(this);
    this.getAllDataAPI = this.getAllDataAPI.bind(this);
  }

  async create(request, response) {
    const { body } = request;
    const currencyDto = new CurrencyDto(body);
    const { data, isUpdated, details } = await this.service.createOrUpdate(currencyDto);
    const statusCode = isUpdated ? StatusCodes.OK : StatusCodes.CREATED;
    const responseBody = {
      valid: true,
      status: 200,
      res: [
        {
          status: 200
        }
      ]
    };

    return response
      .status(statusCode)
      .json(responseBody);
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

  async count(request, response) {
    const totalRows = await this.service.count();

    const responsedata = {
      valid: true,
      status: 200,
      data: totalRows
    }

    return response
      .status(StatusCodes.OK)
      .json(responsedata);
  }

  async getAll(request, response) {
    const requestBody = request.body;
    const data = await this.service.getAll({ limit: requestBody.length, offset: requestBody.start, orderIndex: requestBody.order[0].column, orderDirection: requestBody.order[0].dir });
    const totalRows = await this.service.count();

    const responsedata = {
      valid: true,
      status: 200,
      data: {
        result: data.map(currency => ObjectUtil.toSnakeCase(currency)),
        total_rows: totalRows,
      }
    }

    return response
      .status(StatusCodes.OK)
      .json(responsedata);
  }

  async getAllDataAPI(request, response) {
    const requestBody = request.body;
    const whereClause = {
      currencyId: requestBody.where_in
    }
    const data = await this.service.getAll({ whereClause });

    const responsedata = {
      valid: true,
      status: 200,
      data: {
        result: data.map(currency => ObjectUtil.toSnakeCase(currency)),
        total_rows: data.length
      }
    }

    return response
      .status(StatusCodes.OK)
      .json(responsedata);
  }
}

export default CurrencyController;
