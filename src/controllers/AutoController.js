import { StatusCodes } from 'http-status-codes';
import { AutoCodeCountDto, AutoCodeDto, AutoJurnalDto } from '../dto/AutoDto.js';
import VintageDto from '../dto/VintageDto.js';
import { Coa } from '../models/Coa.js';
import StandardController from './StandardController.js';
import buildResponse from '../util/buildResponse.js';
import ObjectUtil from '../util/ObjectUtil.js';

class AutoCodeController extends StandardController {
  constructor(autoCodeService) {
    super(autoCodeService);
    this.create = this.create.bind(this);
    this.restore = this.restore.bind(this);
    this.delete = this.delete.bind(this);
  }

  async create(request, response) {
    const { body } = request;
    const autoCodeDto = new AutoCodeDto(body);

    return await super.create(request, response, autoCodeDto);
  }

  async restore(request, response) {
    const { body } = request;
    const autoCodeDto = new AutoCodeDto(body);

    return await super.restore(request, response, autoCodeDto);
  }

  async delete(request, response) {
    const { body } = request;
    const autoCodeDto = new AutoCodeDto(body);

    return await super.delete(request, response, autoCodeDto);
  }
}

class AutoCodeCountController extends StandardController {
  constructor(autoCodeCountService) {
    super(autoCodeCountService);
    this.create = this.create.bind(this);
    this.restore = this.restore.bind(this);
    this.delete = this.delete.bind(this);
  }

  async create(request, response) {
    const { body } = request;
    const autoCodeCountDto = new AutoCodeCountDto(body);

    return await super.create(request, response, autoCodeCountDto);
  }

  async restore(request, response) {
    const { body } = request;
    const autoCodeCountDto = new AutoCodeCountDto(body);

    return await super.restore(request, response, autoCodeCountDto);
  }

  async delete(request, response) {
    const { body } = request;
    const autoCodeCountDto = new AutoCodeCountDto(body);

    return await super.delete(request, response, autoCodeCountDto);
  }
}

class AutoJurnalController extends StandardController {
  constructor(autoJurnalService) {
    super(autoJurnalService);
    this.create = this.create.bind(this);
    this.restore = this.restore.bind(this);
    this.delete = this.delete.bind(this);
  }

  async create(request, response) {
    const { body } = request;
    const autoJurnalDto = new AutoJurnalDto(body);

    return await super.create(request, response, autoJurnalDto);
  }

  async restore(request, response) {
    const { body } = request;
    const autoJurnalDto = new AutoJurnalDto(body);

    return await super.restore(request, response, autoJurnalDto);
  }

  async delete(request, response) {
    const { body } = request;
    const autoJurnalDto = new AutoJurnalDto(body);

    return await super.delete(request, response, autoJurnalDto);
  }
  
  async getAll(request, response) {
    const requestBody = request.body;
    const searchClause = this.service.buildSearchClause(this.service.columnSearch, requestBody.search.value);
    const include = [
      {
        model: Coa,
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

      const coa = ObjectUtil.toSnakeCase(plainData.Coa);

      return { ...ObjectUtil.toSnakeCase(plainData), ...coa };
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
        model: Coa,
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
        model: Coa,
        required: false
      }
    ];

    const datas = await this.service.getAll({ whereClause, include });

    return response.status(StatusCodes.OK).json(buildResponse(StatusCodes.OK, 'Success', ObjectUtil.toSnakeCase(datas[0])));
  }
}

export { AutoCodeController, AutoCodeCountController, AutoJurnalController };
