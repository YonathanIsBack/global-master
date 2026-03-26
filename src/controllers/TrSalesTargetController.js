import { StatusCodes } from 'http-status-codes';
import { TrSalesTargetDtDto, TrSalesTargetDto } from '../dto/TrSalesTargetDto.js';
import { TrSalesTargetDt } from '../models/TrSalesTarget.js';
import StandardController from './StandardController.js';
import buildResponse from '../util/buildResponse.js';
import ObjectUtil from '../util/ObjectUtil.js';

class TrSalesTargetController extends StandardController {
  constructor(trSalesTargetService) {
    super(trSalesTargetService);
    this.create = this.create.bind(this);
    this.restore = this.restore.bind(this);
    this.delete = this.delete.bind(this);
  }

  async create(request, response) {
    const { body } = request;
    const trSalesTargetDto = new TrSalesTargetDto(body);

    return await super.insertTransaction(request, response, trSalesTargetDto);
  }

  async restore(request, response) {
    const { body } = request;
    const trSalesTargetDto = new TrSalesTargetDto(body);

    return await super.restore(request, response, trSalesTargetDto);
  }

  async delete(request, response) {
    const { body } = request;
    const trSalesTargetDto = new TrSalesTargetDto(body);

    return await super.delete(request, response, trSalesTargetDto);
  }

  async getAllDataAPI(request, response) {
    const requestBody = request.body;
    const primaryKey = this.service.model.primaryKeyAttributes[0];
    const whereClause = { [primaryKey]: requestBody.where_in };
    const include = [
      {
        model: TrSalesTargetDt,
        required: false
      }
    ];

    const datas = await this.service.getAll({ whereClause, limit: requestBody.where_in.length, include });

    const payload = {
      result: datas.map((data) => {
        return {
          ...ObjectUtil.toSnakeCase(data),
          tr_sales_target_dts:
            data.TrSalesTargetDts == null
              ? []
              : data.TrSalesTargetDts.map((TrSalesTargetDt) => ({
                  ...ObjectUtil.toSnakeCase(TrSalesTargetDt)
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
        model: TrSalesTargetDt,
        required: false
      }
    ];

    const data = await this.service.getOne({ whereClause, include });
    let payload = {};

    if (data != null) {
      const plainData = data.get({ plain: true });
      const trSalesTargetDts = plainData.TrSalesTargetDts.map((TrSalesTargetDt) => ObjectUtil.toSnakeCase(TrSalesTargetDt));
      delete plainData.TrSalesTargetDts;

      Object.assign(payload, ObjectUtil.toSnakeCase(plainData));
      payload.tr_sales_target_dt = trSalesTargetDts;
    }

    return response.status(StatusCodes.OK).json(buildResponse(StatusCodes.OK, 'Success', ObjectUtil.toSnakeCase(payload)));
  }
}

class TrSalesTargetDtController extends StandardController {
  constructor(trSalesTargetDtService) {
    super(trSalesTargetDtService);
    this.create = this.create.bind(this);
    this.restore = this.restore.bind(this);
    this.delete = this.delete.bind(this);
  }

  async create(request, response) {
    const { body } = request;
    const trSalesTargetDtDto = new TrSalesTargetDtDto(body);

    return await super.create(request, response, trSalesTargetDtDto);
  }

  async restore(request, response) {
    const { body } = request;
    const trSalesTargetDtDto = new TrSalesTargetDtDto(body);

    return await super.restore(request, response, trSalesTargetDtDto);
  }

  async delete(request, response) {
    const { body } = request;
    const trSalesTargetDtDto = new TrSalesTargetDtDto(body);

    return await super.delete(request, response, trSalesTargetDtDto);
  }
}

export { TrSalesTargetController, TrSalesTargetDtController };
