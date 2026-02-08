import { AutoCodeCountDto, AutoCodeDto, AutoJurnalDto } from '../dto/AutoDto.js';
import VintageDto from '../dto/VintageDto.js';
import StandardController from './StandardController.js';

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
}

export { AutoCodeController, AutoCodeCountController, AutoJurnalController };
