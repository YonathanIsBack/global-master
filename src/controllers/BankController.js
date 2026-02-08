import { StatusCodes } from 'http-status-codes';
import Constant from '../constants/Constant.js';
import BankDto from '../dto/BankDto.js';
import buildResponse from '../util/buildResponse.js';
import StandardController from './StandardController.js';

class BankController extends StandardController {
  #bankService;
  constructor(bankService) {
    super(bankService);
    this.create = this.create.bind(this);
    this.restore = this.restore.bind(this);
    this.delete = this.delete.bind(this);
  }

  async create(request, response, next) {
    const { body } = request;
    const bankDto = new BankDto(body);

    return await super.create(request, response, bankDto);
  }

  async restore(request, response) {
    const { body } = request;
    const bankDto = new BankDto(body);

    return await super.restore(request, response, bankDto);
  }

  async delete(request, response) {
    const { body } = request;
    const bankDto = new BankDto(body);

    return await super.delete(request, response, bankDto);
  }
}

export default BankController;
