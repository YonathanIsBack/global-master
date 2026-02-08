import { BackDatedDto, BackDatedLogsDto, BackDatedUserDto } from '../dto/BackdatedDto.js';
import StandardController from './StandardController.js';

class BackdatedController extends StandardController {
  constructor(backdatedService) {
    super(backdatedService);
    this.create = this.create.bind(this);
    this.restore = this.restore.bind(this);
    this.delete = this.delete.bind(this);
  }

  async create(request, response) {
    const { body } = request;
    const backdatedDto = new BackDatedDto(body);

    return await super.insertTransaction(request, response, backdatedDto);
  }

  async restore(request, response) {
    const { body } = request;
    const backdatedDto = new BackDatedDto(body);

    return await super.restore(request, response, backdatedDto);
  }

  async delete(request, response) {
    const { body } = request;
    const backdatedDto = new BackDatedDto(body);

    return await super.delete(request, response, backdatedDto);
  }
}

class BackdatedLogsController extends StandardController {
  constructor(backdatedLogsService) {
    super(backdatedLogsService);
    this.create = this.create.bind(this);
    this.restore = this.restore.bind(this);
    this.delete = this.delete.bind(this);
  }

  async create(request, response) {
    const { body } = request;
    const backdatedLogsDto = new BackDatedLogsDto(body);

    return await super.create(request, response, backdatedLogsDto);
  }

  async restore(request, response) {
    const { body } = request;
    const backdatedLogsDto = new BackDatedLogsDto(body);

    return await super.restore(request, response, backdatedLogsDto);
  }

  async delete(request, response) {
    const { body } = request;
    const backdatedLogsDto = new BackDatedLogsDto(body);

    return await super.delete(request, response, backdatedLogsDto);
  }
}

class BackdatedUserController extends StandardController {
  constructor(backdatedUserService) {
    super(backdatedUserService);
    this.create = this.create.bind(this);
    this.restore = this.restore.bind(this);
    this.delete = this.delete.bind(this);
  }

  async create(request, response) {
    const { body } = request;
    const backdatedUserDto = new BackDatedUserDto(body);

    return await super.create(request, response, backdatedUserDto);
  }

  async restore(request, response) {
    const { body } = request;
    const backdatedUserDto = new BackDatedUserDto(body);

    return await super.restore(request, response, backdatedUserDto);
  }

  async delete(request, response) {
    const { body } = request;
    const backdatedUserDto = new BackDatedUserDto(body);

    return await super.delete(request, response, backdatedUserDto);
  }
}

export { BackdatedController, BackdatedLogsController, BackdatedUserController };
