import { StatusCodes } from 'http-status-codes';
import { BuyingPriceListDetailDto, BuyingPriceListDto } from '../dto/BuyingPriceListDto.js';
import { BuyingPriceListDetail } from '../models/BuyingPriceList.js';
import StandardController from './StandardController.js';
import ObjectUtil from '../util/ObjectUtil.js';
import buildResponse from '../util/buildResponse.js';

class BuyingPriceListController extends StandardController {
  constructor(BuyingPriceListService) {
    super(BuyingPriceListService);
    this.create = this.create.bind(this);
    this.restore = this.restore.bind(this);
    this.delete = this.delete.bind(this);
  }

  async create(request, response) {
    const { body } = request;
    const buyingPriceListDto = new BuyingPriceListDto(body);

    return await super.create(request, response, buyingPriceListDto);
  }

  async restore(request, response) {
    const { body } = request;
    const buyingPriceListDto = new BuyingPriceListDto(body);

    return await super.restore(request, response, buyingPriceListDto);
  }

  async delete(request, response) {
    const { body } = request;
    const buyingPriceListDto = new BuyingPriceListDto(body);

    return await super.delete(request, response, buyingPriceListDto);
  }

  async getAllDataAPI(request, response) {
    const requestBody = request.body;
    const primaryKey = this.service.model.primaryKeyAttributes[0];
    const whereClause = {
      [primaryKey]: requestBody.where_in
    };
    const include = [
      {
        model: BuyingPriceListDetail,
        required: false
      }
    ];

    const datas = await this.service.getAll({ whereClause, limit: requestBody.where_in.length, include });

    const payload = {
      result: datas.map((data) => {
        return {
          ...ObjectUtil.toSnakeCase(data),
          buying_price_list_details: data.BuyingPriceListDetails.map((buyingPriceListDetail) => ({
            ...ObjectUtil.toSnakeCase(buyingPriceListDetail)
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
        model: BuyingPriceListDetail,
        required: false
      }
    ];

    const data = await this.service.getAll({ whereClause, include });

    if(data[0] == null) {
      return response.status(StatusCodes.OK).json(buildResponse(StatusCodes.OK, 'Success', {}));
    }

    const foundData = data[0]; 
    const buyingPriceListDt = foundData.BuyingPriceListDetails.map(detail => ObjectUtil.toSnakeCase(detail));
    delete foundData.BuyingPriceListDetails;
    const formattedData = {
      ...ObjectUtil.toSnakeCase(foundData),
      tr_purchase_price_dt: buyingPriceListDt
    }

    return response.status(StatusCodes.OK).json(buildResponse(StatusCodes.OK, 'Success', formattedData));
  }
}

class BuyingPriceListDetailController extends StandardController {
  constructor(BuyingPriceListDetailService) {
    super(BuyingPriceListDetailService);
    this.create = this.create.bind(this);
    this.restore = this.restore.bind(this);
    this.delete = this.delete.bind(this);
  }

  async create(request, response) {
    const { body } = request;
    const buyingPriceListDetailDto = new BuyingPriceListDetailDto(body);

    return await super.create(request, response, buyingPriceListDetailDto);
  }

  async restore(request, response) {
    const { body } = request;
    const buyingPriceListDetailDto = new BuyingPriceListDetailDto(body);

    return await super.restore(request, response, buyingPriceListDetailDto);
  }

  async delete(request, response) {
    const { body } = request;
    const buyingPriceListDetailDto = new BuyingPriceListDetailDto(body);
    const { data } = await this.service.deleteRow(buyingPriceListDetailDto);

    return response.status(StatusCodes.OK).json(buildResponse(StatusCodes.OK, Constant.DELETED, data));
  }
}

export { BuyingPriceListController, BuyingPriceListDetailController };
