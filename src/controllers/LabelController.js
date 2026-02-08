import { LabelDto, LabelSettinganPrintDto } from '../dto/LabelDto.js';
import StandardController from './StandardController.js';

class LabelController extends StandardController {
  constructor(labelService) {
    super(labelService);
    this.create = this.create.bind(this);
    this.restore = this.restore.bind(this);
    this.delete = this.delete.bind(this);
  }

  async create(request, response) {
    const { body } = request;
    const labelDto = new LabelDto(body);

    return await super.create(request, response, labelDto);
  }

  async restore(request, response) {
    const { body } = request;
    const labelDto = new LabelDto(body);

    return await super.restore(request, response, labelDto);
  }

  async delete(request, response) {
    const { body } = request;
    const labelDto = new LabelDto(body);

    return await super.delete(request, response, labelDto);
  }
}

class LabelSettinganPrintController extends StandardController {
  constructor(labelSettinganPrintService) {
    super(labelSettinganPrintService);
    this.create = this.create.bind(this);
    this.restore = this.restore.bind(this);
    this.delete = this.delete.bind(this);
  }

  async create(request, response) {
    const { body } = request;
    const labelSettinganPrintDto = new LabelSettinganPrintDto(body);

    return await super.create(request, response, labelSettinganPrintDto);
  }

  async restore(request, response) {
    const { body } = request;
    const labelSettinganPrintDto = new LabelSettinganPrintDto(body);

    return await super.restore(request, response, labelSettinganPrintDto);
  }

  async delete(request, response) {
    const { body } = request;
    const labelSettinganPrintDto = new LabelSettinganPrintDto(body);

    return await super.delete(request, response, labelSettinganPrintDto);
  }
}

export { LabelController, LabelSettinganPrintController };

