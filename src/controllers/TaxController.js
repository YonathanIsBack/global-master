import { TaxDto, TaxFormDto } from '../dto/TaxDto.js';
import StandardController from './StandardController.js';

class TaxController extends StandardController {
  constructor(taxService) {
    super(taxService);
    this.create = this.create.bind(this);
    this.restore = this.restore.bind(this);
    this.delete = this.delete.bind(this);
  }

  async create(request, response) {
    const { body } = request;
    const taxDto = new TaxDto(body);

    return await super.create(request, response, taxDto);
  }

  async restore(request, response) {
    const { body } = request;
    const taxDto = new TaxDto(body);

    return await super.restore(request, response, taxDto);
  }

  async delete(request, response) {
    const { body } = request;
    const taxDto = new TaxDto(body);

    return await super.delete(request, response, taxDto);
  }
}

class TaxFormController extends StandardController {
  constructor(taxFormService) {
    super(taxFormService);
    this.create = this.create.bind(this);
    this.restore = this.restore.bind(this);
    this.delete = this.delete.bind(this);
  }

  async create(request, response) {
    const { body } = request;
    const taxFormDto = new TaxFormDto(body);

    return await super.create(request, response, taxFormDto);
  }

  async restore(request, response) {
    const { body } = request;
    const taxFormDto = new TaxFormDto(body);

    return await super.restore(request, response, taxFormDto);
  }

  async delete(request, response) {
    const { body } = request;
    const taxFormDto = new TaxFormDto(body);

    return await super.delete(request, response, taxFormDto);
  }
}

export { TaxController, TaxFormController };
