import { StatusCodes } from 'http-status-codes';
import { Op } from 'sequelize';
import { CustomerSegmentationDto } from '../../dto/CustomerDto.js';
import buildResponse from '../../util/buildResponse.js';
import StandardController from '../StandardController.js';
import ObjectUtil from '../../util/ObjectUtil.js';

class CustomerSubSubSegmentationController extends StandardController {
  constructor(customerService) {
    super(customerService);
    this.create = this.create.bind(this);
    this.restore = this.restore.bind(this);
    this.delete = this.delete.bind(this);
    this.getAll = this.getAll.bind(this);
  }

  async create(request, response) {
    const { body } = request;
    const customerSegmentationDto = new CustomerSegmentationDto(body);

    return await super.insertTransaction(request, response, customerSegmentationDto);
  }

  async restore(request, response) {
    const { body } = request;
    const customerSegmentationDto = new CustomerSegmentationDto(body);

    return await super.restore(request, response, customerSegmentationDto);
  }

  async delete(request, response) {
    const { body } = request;
    const customerSegmentationDto = new CustomerSegmentationDto(body);

    return await super.delete(request, response, customerSegmentationDto);
  }

  async count(request, response) {
    const totalRows = await this.service.count({
      whereClause: { parentId: { [Op.gt]: 0 }, levelSegmentation: { [Op.eq]: 2 } }
    });

    return response.status(StatusCodes.OK).json(buildResponse(StatusCodes.OK, 'Success', totalRows));
  }

  async getAll(request, response) {
    const requestBody = request.body;
    const searchClause = this.service.buildSearchClause(this.service.columnSearch, requestBody.search.value);
    const data = await this.service.getAll({
      whereClause: { ...searchClause, parentId: { [Op.gt]: 0 }, levelSegmentation: { [Op.eq]: 2 } },
      limit: requestBody.length,
      offset: requestBody.start,
      orderIndex: requestBody.order[0].column,
      orderDirection: requestBody.order[0].dir
    });
    const totalRows = await this.service.count({ whereClause: { ...searchClause, parentId: { [Op.gt]: 0 }, levelSegmentation: { [Op.eq]: 2 } } });

    const payload = {
      result: data.map((currency) => ObjectUtil.toSnakeCase(currency)),
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

    const datas = await this.service.getAll({
      whereClause: { ...whereClause, parentId: { [Op.gt]: 0 }, levelSegmentation: { [Op.eq]: 2 } },
      limit: requestBody.where_in.length
    });

    const payload = {
      result: datas.map((data) => ObjectUtil.toSnakeCase(data)),
      total_rows: datas.length
    };

    return response.status(StatusCodes.OK).json(buildResponse(StatusCodes.OK, 'Success', payload));
  }
}
export default CustomerSubSubSegmentationController;
