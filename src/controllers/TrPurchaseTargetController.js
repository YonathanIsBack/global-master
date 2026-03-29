import { StatusCodes } from 'http-status-codes';
import { TrPurchaseTargetDtDto, TrPurchaseTargetDto } from '../dto/TrPurchaseTargetDto.js';
import { TrPurchaseTargetDt } from '../models/tr/purchase/TrPurchaseTarget.js';
import ObjectUtil from '../util/ObjectUtil.js';
import StandardController from './StandardController.js';
import buildResponse from '../util/buildResponse.js';

class TrPurchaseTargetController extends StandardController {
  constructor(trSalesTargetService) {
    super(trSalesTargetService);
    this.create = this.create.bind(this);
    this.restore = this.restore.bind(this);
    this.delete = this.delete.bind(this);
  }

  async create(request, response) {
    const { body } = request;
    const trPurchaseTargetDto = new TrPurchaseTargetDto(body);

    return await super.insertTransaction(request, response, trPurchaseTargetDto);
  }

  async restore(request, response) {
    const { body } = request;
    const trPurchaseTargetDto = new TrPurchaseTargetDto(body);

    return await super.restore(request, response, trPurchaseTargetDto);
  }

  async delete(request, response) {
    const { body } = request;
    const trPurchaseTargetDto = new TrPurchaseTargetDto(body);

    return await super.delete(request, response, trPurchaseTargetDto);
  }

  async getAllDataAPI(request, response) {
    const requestBody = request.body;
    const primaryKey = this.service.model.primaryKeyAttributes[0];
    const whereClause = {
      [primaryKey]: requestBody.where_in
    };
    const include = [
      {
        model: TrPurchaseTargetDt,
        required: false
      }
    ];

    const datas = await this.service.getAll({ whereClause, limit: requestBody.where_in.length, include, nest: true, raw: false });

    const payload = {
      result: datas.map((data) => {
        const plainData = data.get({plain: true});
        return {
          ...ObjectUtil.toSnakeCase(plainData),
          tr_purchase_target_dt: plainData.TrPurchaseTargetDts.map((trPurchaseTargetDt) => ({
            ...ObjectUtil.toSnakeCase(trPurchaseTargetDt)
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
        model: TrPurchaseTargetDt,
        required: false
      }
    ];

    const datas = await this.service.getAll({ whereClause, include });

    return response.status(StatusCodes.OK).json(buildResponse(StatusCodes.OK, 'Success', ObjectUtil.toSnakeCase(datas[0])));
  }
}

class TrPurchaseTargetDtController extends StandardController {
  constructor(trSalesTargetDtService) {
    super(trSalesTargetDtService);
    this.create = this.create.bind(this);
    this.restore = this.restore.bind(this);
    this.delete = this.delete.bind(this);
  }

  async create(request, response) {
    const { body } = request;
    const trPurchaseTargetDtDto = new TrPurchaseTargetDtDto(body);

    return await super.create(request, response, trPurchaseTargetDtDto);
  }

  async restore(request, response) {
    const { body } = request;
    const trPurchaseTargetDtDto = new TrPurchaseTargetDtDto(body);

    return await super.restore(request, response, trPurchaseTargetDtDto);
  }

  async delete(request, response) {
    const { body } = request;
    const trPurchaseTargetDtDto = new TrPurchaseTargetDtDto(body);

    return await super.delete(request, response, trPurchaseTargetDtDto);
  }
}

export { TrPurchaseTargetController, TrPurchaseTargetDtController };

