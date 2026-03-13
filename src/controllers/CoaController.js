import { CoaBankDto, CoaDto, CoaGroupDto, CoaSubGroupDto, CoaTypeDto } from '../dto/CoaDto.js';
import { Coa } from '../models/Coa.js';
import StandardController from './StandardController.js';

class CoaController extends StandardController {
  constructor(coaService) {
    super(coaService);
    this.create = this.create.bind(this);
    this.restore = this.restore.bind(this);
    this.delete = this.delete.bind(this);
  }

  async create(request, response) {
    const { body } = request;
    const coaDto = new CoaDto(body);

    return await super.create(request, response, coaDto);
  }

  async restore(request, response) {
    const { body } = request;
    const coaDto = new CoaDto(body);

    return await super.restore(request, response, coaDto);
  }

  async delete(request, response) {
    const { body } = request;
    const coaDto = new CoaDto(body);

    return await super.delete(request, response, coaDto);
  }
}

class CoaBankController extends StandardController {
  constructor(coaBank) {
    super(coaBank);
    this.create = this.create.bind(this);
    this.restore = this.restore.bind(this);
    this.delete = this.delete.bind(this);
  }

  async create(request, response) {
    const { body } = request;
    const coaBankDto = new CoaBankDto(body);

    return await super.create(request, response, coaBankDto);
  }

  async restore(request, response) {
    const { body } = request;
    const coaBankDto = new CoaBankDto(body);

    return await super.restore(request, response, coaBankDto);
  }

  async delete(request, response) {
    const { body } = request;
    const coaBankDto = new CoaBankDto(body);

    return await super.delete(request, response, coaBankDto);
  }
}

class CoaGroupController extends StandardController {
  constructor(coaGroupService) {
    super(coaGroupService);
    this.create = this.create.bind(this);
    this.restore = this.restore.bind(this);
    this.delete = this.delete.bind(this);
  }

  async create(request, response) {
    const { body } = request;
    const coaDto = new CoaDto(body);

    return await super.create(request, response, coaDto);
  }

  async restore(request, response) {
    const { body } = request;
    const coaDto = new CoaDto(body);

    return await super.restore(request, response, coaDto);
  }

  async delete(request, response) {
    const { body } = request;
    const coaGroupDto = new CoaDto(body);

    return await super.delete(request, response, coaGroupDto);
  }
}

class CoaSubGroupController extends StandardController {
  constructor(coaSubGroupService) {
    super(coaSubGroupService);
    this.create = this.create.bind(this);
    this.restore = this.restore.bind(this);
    this.delete = this.delete.bind(this);
  }

  async create(request, response) {
    const { body } = request;
    const coaSubGroupDto = new CoaDto(body);

    return await super.create(request, response, coaSubGroupDto);
  }

  async restore(request, response) {
    const { body } = request;
    const coaSubGroupDto = new CoaDto(body);

    return await super.restore(request, response, coaSubGroupDto);
  }

  async delete(request, response) {
    const { body } = request;
    const coaSubGroupDto = new CoaDto(body);

    return await super.delete(request, response, coaSubGroupDto);
  }
}

class CoaTypeController extends StandardController {
  constructor(coaTypeService) {
    super(coaTypeService);
    this.create = this.create.bind(this);
    this.restore = this.restore.bind(this);
    this.delete = this.delete.bind(this);
  }

  async create(request, response) {
    const { body } = request;
    const coaDto = new CoaDto(body);

    return await super.create(request, response, coaDto);
  }

  async restore(request, response) {
    const { body } = request;
    const coaDto = new CoaDto(body);

    return await super.restore(request, response, coaDto);
  }

  async delete(request, response) {
    const { body } = request;
    const coaDto = new CoaDto(body);

    return await super.delete(request, response, coaDto);
  }
}

class CoaSubledgerController extends StandardController {
  constructor(coaTypeService) {
    super(coaTypeService);
    this.create = this.create.bind(this);
    this.restore = this.restore.bind(this);
    this.delete = this.delete.bind(this);
  }

  async create(request, response) {
    const { body } = request;
    const coaTypeDto = new CoaDto(body);

    return await super.create(request, response, coaTypeDto);
  }

  async restore(request, response) {
    const { body } = request;
    const coaTypeDto = new CoaDto(body);

    return await super.restore(request, response, coaTypeDto);
  }

  async delete(request, response) {
    const { body } = request;
    const coaTypeDto = new CoaDto(body);

    return await super.delete(request, response, coaTypeDto);
  }
}

export {
  CoaBankController,
  CoaController,
  CoaGroupController,
  CoaSubGroupController,
  CoaTypeController,
  CoaSubledgerController
};
