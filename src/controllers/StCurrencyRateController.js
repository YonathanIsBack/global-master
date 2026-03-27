import { StatusCodes } from 'http-status-codes';
import StCurrencyRateDto from '../dto/StCurrencyRateDto.js';
import StCurrencyRateDetail from '../models/StCurrencyRateDetail.js';
import ObjectUtil from '../util/ObjectUtil.js';
import StandardController from './StandardController.js';
import buildResponse from '../util/buildResponse.js';

class StCurrencyRateController extends StandardController {
  constructor(stCurrencyRateService) {
    super(stCurrencyRateService);
    this.create = this.create.bind(this);
    this.restore = this.restore.bind(this);
    this.delete = this.delete.bind(this);
  }

  async create(request, response) {
    const { body } = request;
    const stCurrencyRateDto = new StCurrencyRateDto(body);

    return await super.create(request, response, stCurrencyRateDto);
  }

  async delete(request, response) {
    const { body } = request;
    const stCurrencyRateDto = new StCurrencyRateDto(body);

    return await super.delete(request, response, stCurrencyRateDto);
  }

  async restore(request, response) {
    const { body } = request;
    const stCurrencyRateDto = new StCurrencyRateDto(body);

    return await super.restore(request, response, stCurrencyRateDto);
  }

  async getAllDataAPI(request, response) {
    const requestBody = request.body;
    const primaryKey = this.service.model.primaryKeyAttributes[0];
    const whereClause = { [primaryKey]: requestBody.where_in };
    const include = [
      {
        model: StCurrencyRateDetail,
        required: false
      }
    ];

    const datas = await this.service.getAll({ whereClause, limit: requestBody.where_in.length, include, raw: false, nest: true });

    const payload = {
      result: datas.map((data) => {
        return {
          ...ObjectUtil.toSnakeCase(data.get({ plain: true })),
          st_currency_rate_dt:
            data.get({ plain: true }).StCurrencyRateDetails == null
              ? []
              : data.get({ plain: true }).StCurrencyRateDetails.map((stCurrencyRateDetail) => ({
                  ...ObjectUtil.toSnakeCase(stCurrencyRateDetail)
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
        model: StCurrencyRateDetail,
        required: false
      }
    ];

    const data = await this.service.getOne({ whereClause, include });
    let payload = {};

    if (data != null) {
      const plainData = data.get({ plain: true });
      const StCurrencyRateDetails = plainData.StCurrencyRateDetails.map((stCurrencyRateDetail) =>
        ObjectUtil.toSnakeCase(stCurrencyRateDetail)
      );
      delete plainData.StCurrencyRateDetails;

      Object.assign(payload, ObjectUtil.toSnakeCase(plainData));
      payload.tr_salesman_target_dt = StCurrencyRateDetails;
    }

    return response.status(StatusCodes.OK).json(buildResponse(StatusCodes.OK, 'Success', ObjectUtil.toSnakeCase(payload)));
  }
}

export default StCurrencyRateController;
