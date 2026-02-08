import { CountryCodeDto, CountryDto } from '../dto/CountryDto.js';
import StandardController from './StandardController.js';

class CountryController extends StandardController {
  constructor(countryService) {
    super(countryService);
    this.create = this.create.bind(this);
    this.restore = this.restore.bind(this);
    this.delete = this.delete.bind(this);
  }

  async create(request, response) {
    const { body } = request;
    const countryDto = new CountryDto(body);

    return await super.create(request, response, countryDto);
  }

  async restore(request, response) {
    const { body } = request;
    const countryDto = new CountryDto(body);

    return await super.restore(request, response, countryDto);
  }

  async delete(request, response) {
    const { body } = request;
    const countryDto = new CountryDto(body);

    return await super.delete(request, response, countryDto);
  }
}

class CountryCodeController extends StandardController {
  constructor(countryCodeService) {
    super(countryCodeService);
    this.create = this.create.bind(this);
    this.restore = this.restore.bind(this);
    this.delete = this.delete.bind(this);
  }

  async create(request, response) {
    const { body } = request;
    const countryCodeDto = new CountryCodeDto(body);

    return await super.create(request, response, countryCodeDto);
  }

  async restore(request, response) {
    const { body } = request;
    const countryCodeDto = new CountryCodeDto(body);

    return await super.restore(request, response, countryCodeDto);
  }

  async delete(request, response) {
    const { body } = request;
    const countryCodeDto = new CountryCodeDto(body);

    return await super.delete(request, response, countryCodeDto);
  }
}

export { CountryCodeController, CountryController };

