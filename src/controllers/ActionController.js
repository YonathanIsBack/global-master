import AccessDto from '../dto/AccessDto.js';
import { ActionDto, ActionPageDto } from '../dto/ActionDto.js';
import StandardController from './StandardController.js';

class ActionController extends StandardController {
  constructor(actionService) {
    super(actionService);
    this.create = this.create.bind(this);
    this.restore = this.restore.bind(this);
    this.delete = this.delete.bind(this);
  }

  async create(request, response) {
    const { body } = request;
    const actionDto = new ActionDto(body);

    return await super.create(request, response, actionDto);
  }

  async restore(request, response) {
    const { body } = request;
    const actionDto = new ActionDto(body);

    return await super.restore(request, response, actionDto);
  }

  async delete(request, response) {
    const { body } = request;
    const actionDto = new ActionDto(body);
    const { data } = await this.service.deleteRow(actionDto);

    return response
      .status(StatusCodes.OK)
      .json(buildResponse(StatusCodes.OK, Constant.DELETED, data));
  }
}

class ActionPageController extends StandardController {
  constructor(actionPageService) {
    super(actionPageService);
    this.create = this.create.bind(this);
    this.restore = this.restore.bind(this);
    this.delete = this.delete.bind(this);
  }

  async create(request, response) {
    const { body } = request;
    const actionPageDto = new ActionPageDto(body);

    return await super.create(request, response, actionPageDto);
  }

  async restore(request, response) {
    const { body } = request;
    const actionPageDto = new ActionPageDto(body);

    return await super.restore(request, response, actionPageDto);
  }

  async delete(request, response) {
    const { body } = request;
    const actionPageDto = new ActionPageDto(body);

    return await super.delete(request, response, actionPageDto);
  }
}

export { ActionController, ActionPageController };
