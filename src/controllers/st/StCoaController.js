import { StatusCodes } from 'http-status-codes';
import { StCoaDto, StCoaDtDto } from '../../dto/st/StCoaDto.js';
import StandardController from '../StandardController.js';

class StCoaController extends StandardController {
  constructor(stCoaService) {
    super(stCoaService);
    this.create = this.create.bind(this);
    this.restore = this.restore.bind(this);
    this.delete = this.delete.bind(this);
  }

  async create(request, response) {
    const { body } = request;
    const stCoaDto = new StCoaDto(body);

    return await super.insertTransaction(request, response, stCoaDto);
  }

  async restore(request, response) {
    const { body } = request;
    const stCoaDto = new StCoaDto(body);

    return await super.restore(request, response, stCoaDto);
  }

  async delete(request, response) {
    const { body } = request;
    const stCoaDto = new StCoaDto(body);

    return await super.delete(request, response, stCoaDto);
  }
}

class StCoaDtControler extends StandardController {
  constructor(stCoaDtService) {
    super(stCoaDtService);
    this.create = this.create.bind(this);
    this.restore = this.restore.bind(this);
    this.delete = this.delete.bind(this);
  }

  async create(request, response) {
    const { body } = request;
    const stCoaDtDto = new StCoaDtDto(body);

    return await super.create(request, response, stCoaDtDto);
  }

  async restore(request, response) {
    const { body } = request;
    const stCoaDtDto = new StCoaDtDto(body);

    return await super.restore(request, response, stCoaDtDto);
  }

  async delete(request, response) {
    const { body } = request;
    const stCoaDtDto = new StCoaDtDto(body);
    const { data } = await this.service.deleteRow(stCoaDtDto);

    return response
      .status(StatusCodes.OK)
      .json(buildResponse(StatusCodes.OK, Constant.DELETED, data));
  }
}

export { StCoaController, StCoaDtControler };
