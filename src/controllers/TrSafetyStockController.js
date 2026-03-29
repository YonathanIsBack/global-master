import { StatusCodes } from 'http-status-codes';
import AccessDto from '../dto/AccessDto.js';
import TrSafetyStockDto from '../dto/TrSafetyStockDto.js';
import { Item } from '../models/Item.js';
import StandardController from './StandardController.js';
import buildResponse from '../util/buildResponse.js';
import ObjectUtil from '../util/ObjectUtil.js';

class TrSafetyStockController extends StandardController {
  constructor(trSafetyStockService) {
    super(trSafetyStockService);
    this.create = this.create.bind(this);
    this.restore = this.restore.bind(this);
    this.delete = this.delete.bind(this);
  }

  async create(request, response) {
    const { body } = request;
    const trSafetyStockDto = new TrSafetyStockDto(body);

    return await super.create(request, response, trSafetyStockDto);
  }

  async restore(request, response) {
    const { body } = request;
    const trSafetyStockDto = new TrSafetyStockDto(body);

    return await super.restore(request, response, trSafetyStockDto);
  }

  async delete(request, response) {
    const { body } = request;
    const trSafetyStockDto = new TrSafetyStockDto(body);

    return await super.delete(request, response, trSafetyStockDto);
  }

  async getAll(request, response) {
    const requestBody = request.body;
    const searchClause = this.service.buildSearchClause(this.service.columnSearch, requestBody.search.value);
    const include = [
      {
        model: Item,
        required: false
      }
    ];
    const data = await this.service.getAll({
      whereClause: searchClause,
      limit: requestBody.length,
      offset: requestBody.start,
      orderIndex: requestBody.order[0].column,
      orderDirection: requestBody.order[0].dir,
      include,
      nest: true,
      raw: false
    });
    const totalRows = await this.service.count({ whereClause: searchClause });

    const dataRemapped = data.map((data) => {
      const plainData = data.get({ plain: true });

      const item = ObjectUtil.toSnakeCase(plainData.Item);
      delete plainData.Item;

      return { ...ObjectUtil.toSnakeCase(plainData), ...item };
    });

    const payload = {
      result: dataRemapped,
      total_rows: totalRows
    };

    return response.status(StatusCodes.OK).json(buildResponse(StatusCodes.OK, 'Success', payload));
  }

  async getAllDataAPI(request, response) {
    const requestBody = request.body;
    const primaryKey = this.service.model.primaryKeyAttributes[0];
    const whereClause = {
      [primaryKey]: requestBody.where_in
    };
    const include = [
      {
        model: Item,
        required: false
      }
    ];

    const datas = await this.service.getAll({ whereClause, limit: requestBody.where_in.length, include });

    const payload = {
      result: datas.map((data) => ObjectUtil.toSnakeCase(data)),
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
        model: Item,
        required: false
      }
    ];

    const datas = await this.service.getAll({ whereClause, include });

    return response.status(StatusCodes.OK).json(buildResponse(StatusCodes.OK, 'Success', ObjectUtil.toSnakeCase(datas[0])));
  }
}

export default TrSafetyStockController;
