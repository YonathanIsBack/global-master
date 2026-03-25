import { StatusCodes } from 'http-status-codes';
import { SalesPriceDtDto, SalesPriceDto } from '../dto/SalesPriceDto.js';
import { SalesPriceDt } from '../models/SalesPrice.js';
import buildResponse from '../util/buildResponse.js';
import ObjectUtil from '../util/ObjectUtil.js';
import StandardController from './StandardController.js';

class SalesPriceController extends StandardController {
  constructor(salesTargetService) {
    super(salesTargetService);
    this.create = this.create.bind(this);
    this.restore = this.restore.bind(this);
    this.delete = this.delete.bind(this);
  }

  async create(request, response) {
    const { body } = request;
    const salesTargetDto = new SalesPriceDto(body);

    return await super.create(request, response, salesTargetDto);
  }

  async restore(request, response) {
    const { body } = request;
    const salesTargetDto = new SalesPriceDto(body);

    return await super.restore(request, response, salesTargetDto);
  }

  async delete(request, response) {
    const { body } = request;
    const salesTargetDto = new SalesPriceDto(body);

    return await super.delete(request, response, salesTargetDto);
  }

  async getAllDataAPI(request, response) {
    const requestBody = request.body;
    const primaryKey = this.service.model.primaryKeyAttributes[0];
    const whereClause = {
      [primaryKey]: requestBody.where_in
    };
    const include = [
      {
        model: SalesPriceDt,
        required: false
      }
    ];

    const datas = await this.service.getAll({ whereClause, limit: requestBody.where_in.length, include });

    const payload = {
      result: datas.map((data) => {
        return {
          ...ObjectUtil.toSnakeCase(data),
          sales_price_dts: data.SalesPriceDts.map((SalesPriceDt) => ({
            ...ObjectUtil.toSnakeCase(SalesPriceDt)
          }))
        };
      }),
      total_rows: datas.length
    };

    return response.status(StatusCodes.OK).json(buildResponse(StatusCodes.OK, 'Success', payload));
  }

  async getDataApi(request, response) {
    const requestBody = request.body;
    const primaryKey = this.service.model.primaryKeyAttributes[0];
    const whereClause = {
      [primaryKey]: requestBody.id
    };
    const include = [
      {
        model: SalesPriceDt,
        required: false
      }
    ];

    const datas = await this.service.getAll({ whereClause, include });

    let payload = {};
    if (datas.length != 0) {
      payload = {
        ...ObjectUtil.toSnakeCase(datas[0]),
        sales_price_dts: datas[0].SalesPriceDts.map((SalesPriceDt) => ({
          ...ObjectUtil.toSnakeCase(SalesPriceDt)
        }))
      };
    }

    return response.status(StatusCodes.OK).json(buildResponse(StatusCodes.OK, 'Success', payload));
  }
}

class SalesPriceDetailController extends StandardController {
  constructor(salesTargetDetailService) {
    super(salesTargetDetailService);
    this.create = this.create.bind(this);
    this.restore = this.restore.bind(this);
    this.delete = this.delete.bind(this);
  }

  async create(request, response) {
    const { body } = request;
    const buyingPriceListDetailDto = new SalesPriceDtDto(body);

    return await super.create(request, response, buyingPriceListDetailDto);
  }

  async restore(request, response) {
    const { body } = request;
    const buyingPriceListDetailDto = new SalesPriceDtDto(body);

    return await super.restore(request, response, buyingPriceListDetailDto);
  }

  async delete(request, response) {
    const { body } = request;
    const buyingPriceListDetailDto = new SalesPriceDtDto(body);

    const data = await this.service.deleteRow(buyingPriceListDetailDto);

    return response.status(StatusCodes.OK).json(buildResponse(StatusCodes.OK, Constant.DELETED, data));
  }
}

export { SalesPriceController, SalesPriceDetailController };
