import AccessDto from '../dto/AccessDto.js';
import { CompanyBankDto, CompanyDto } from '../dto/CompanyDto.js';
import StandardController from './StandardController.js';

class CompanyController extends StandardController {
  constructor(companyService) {
    super(companyService);
    this.create = this.create.bind(this);
    this.restore = this.restore.bind(this);
    this.delete = this.delete.bind(this);
  }

  async create(request, response) {
    const { body } = request;
    const companyDto = new CompanyDto(body);

    return await super.insertTransaction(request, response, companyDto);
  }

  async restore(request, response) {
    const { body } = request;
    const companyDto = new CompanyDto(body);

    return await super.restore(request, response, companyDto);
  }

  async delete(request, response) {
    const { body } = request;
    const companyDto = new CompanyDto(body);

    return await super.delete(request, response, companyDto);
  }
}

class CompanyBankController extends StandardController {
  constructor(companyBankService) {
    super(companyBankService);
    this.create = this.create.bind(this);
    this.restore = this.restore.bind(this);
    this.delete = this.delete.bind(this);
  }

  async create(request, response) {
    const { body } = request;
    const companyBankDto = new CompanyBankDto(body);

    return await super.create(request, response, companyBankDto);
  }

  async restore(request, response) {
    const { body } = request;
    const companyBankDto = new CompanyBankDto(body);

    return await super.restore(request, response, companyBankDto);
  }

  async delete(request, response) {
    const { body } = request;
    const companyBankDto = new CompanyBankDto(body);

    return await super.delete(request, response, companyBankDto);
  }
}

export { CompanyBankController, CompanyController };
