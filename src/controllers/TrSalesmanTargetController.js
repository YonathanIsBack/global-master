import { StatusCodes } from 'http-status-codes';
import { TrSalesmanTargetDtDto, TrSalesmanTargetDto } from '../dto/TrSalesmanTargetDto.js';
import { TrSalesmanTargetDt } from '../models/tr/salesman/TrSalesmanTarget.js';
import ObjectUtil from '../util/ObjectUtil.js';
import StandardController from './StandardController.js';
import buildResponse from '../util/buildResponse.js';

class TrSalesmanTargetController extends StandardController {
  constructor(trSalesTargetService) {
    super(trSalesTargetService);
    this.create = this.create.bind(this);
    this.restore = this.restore.bind(this);
    this.delete = this.delete.bind(this);
  }

  async create(request, response) {
    const { body } = request;
    const trSalesmanTargetDto = new TrSalesmanTargetDto(body);

    return await super.create(request, response, trSalesmanTargetDto);
  }

  async restore(request, response) {
    const { body } = request;
    const trSalesmanTargetDto = new TrSalesmanTargetDto(body);

    return await super.restore(request, response, trSalesmanTargetDto);
  }

  async delete(request, response) {
    const { body } = request;
    const trSalesmanTargetDto = new TrSalesmanTargetDto(body);

    return await super.delete(request, response, trSalesmanTargetDto);
  }

  async getAllDataAPI(request, response) {
    const requestBody = request.body;
    const primaryKey = this.service.model.primaryKeyAttributes[0];
    const whereClause = { [primaryKey]: requestBody.where_in };
    const include = [
      {
        model: TrSalesmanTargetDt,
        required: false
      }
    ];

    const datas = await this.service.getAll({ whereClause, limit: requestBody.where_in.length, include });

    const payload = {
      result: datas.map((data) => {
        return {
          ...ObjectUtil.toSnakeCase(data),
          tr_salesman_target_dt:
            data.TrSalesmanTargetDts == null
              ? []
              : data.TrSalesmanTargetDts.map((trSalesmanTargetDt) => ({
                  ...ObjectUtil.toSnakeCase(trSalesmanTargetDt)
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
        model: TrSalesmanTargetDt,
        required: false
      }
    ];

    const data = await this.service.getOne({ whereClause, include });
    let payload = {};

    if (data != null) {
      const plainData = data.get({ plain: true });
      const TrSalesmanTargetDts = plainData.TrSalesmanTargetDts.map((trSalesmanTargetDt) => ObjectUtil.toSnakeCase(trSalesmanTargetDt));
      delete plainData.TrSalesmanTargetDts;

      Object.assign(payload, ObjectUtil.toSnakeCase(plainData));
      payload.tr_salesman_target_dt = TrSalesmanTargetDts;
    }

    return response.status(StatusCodes.OK).json(buildResponse(StatusCodes.OK, 'Success', ObjectUtil.toSnakeCase(payload)));
  }
}

class TrSalesmanTargetDtController extends StandardController {
  constructor(trSalesTargetDtService) {
    super(trSalesTargetDtService);
    this.create = this.create.bind(this);
    this.restore = this.restore.bind(this);
    this.delete = this.delete.bind(this);
  }

  async create(request, response) {
    const { body } = request;
    const trSalesmanTargetDtDto = new TrSalesmanTargetDtDto(body);

    return await super.create(request, response, trSalesmanTargetDtDto);
  }

  async restore(request, response) {
    const { body } = request;
    const trSalesmanTargetDtDto = new TrSalesmanTargetDtDto(body);

    return await super.restore(request, response, trSalesmanTargetDtDto);
  }

  async delete(request, response) {
    const { body } = request;
    const trSalesmanTargetDtDto = new TrSalesmanTargetDtDto(body);

    return await super.delete(request, response, trSalesmanTargetDtDto);
  }
}

export { TrSalesmanTargetController, TrSalesmanTargetDtController };
