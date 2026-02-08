import { StatusCodes } from 'http-status-codes';
import Constant from '../constants/Constant.js';
import TransactionDto from '../dto/TransactionDto.js';
import buildResponse from '../util/buildResponse.js';
import StandardController from './StandardController.js';

class TransactionController extends StandardController {
  constructor(transactionService) {
    super(transactionService);
    this.create = this.create.bind(this);
    this.restore = this.restore.bind(this);
    this.delete = this.delete.bind(this);
  }

  async create(request, response) {
    const { body } = request;
    const transactionDto = new TransactionDto(body);

    return await super.create(request, response, transactionDto);
  }

  async delete(request, response) {
    const { body } = request;
    const transactionDto = new TransactionDto(body);

    return await super.delete(request, response, transactionDto);
  }

  async restore(request, response) {
    const { body } = request;
    const transactionDto = new TransactionDto(body);
    
    return await super.restore(request, response, transactionDto);
  }
}

export default TransactionController;
