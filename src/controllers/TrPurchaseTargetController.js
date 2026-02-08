import { TrPurchaseTargetDtDto, TrPurchaseTargetDto } from '../dto/TrPurchaseTargetDto.js';
import StandardController from './StandardController.js';

class TrPurchaseTargetController extends StandardController {
  constructor(trSalesTargetService) {
    super(trSalesTargetService);
    this.create = this.create.bind(this);
    this.restore = this.restore.bind(this);
    this.delete = this.delete.bind(this);
  }

  async create(request, response) {
    const { body } = request;
    const trPurchaseTargetDto = new TrPurchaseTargetDto(body);

    return await super.insertTransaction(request, response, trPurchaseTargetDto);
  }

  async restore(request, response) {
    const { body } = request;
    const trPurchaseTargetDto = new TrPurchaseTargetDto(body);

    return await super.restore(request, response, trPurchaseTargetDto);
  }

  async delete(request, response) {
    const { body } = request;
    const trPurchaseTargetDto = new TrPurchaseTargetDto(body);

    return await super.delete(request, response, trPurchaseTargetDto);
  }
}

class TrPurchaseTargetDtController extends StandardController {
  constructor(trSalesTargetDtService) {
    super(trSalesTargetDtService);
    this.create = this.create.bind(this);
    this.restore = this.restore.bind(this);
    this.delete = this.delete.bind(this);
  }

  async create(request, response) {
    const { body } = request;
    const trPurchaseTargetDtDto = new TrPurchaseTargetDtDto(body);

    return await super.create(request, response, trPurchaseTargetDtDto);
  }

  async restore(request, response) {
    const { body } = request;
    const trPurchaseTargetDtDto = new TrPurchaseTargetDtDto(body);

    return await super.restore(request, response, trPurchaseTargetDtDto);
  }

  async delete(request, response) {
    const { body } = request;
    const trPurchaseTargetDtDto = new TrPurchaseTargetDtDto(body);

    return await super.delete(request, response, trPurchaseTargetDtDto);
  }
}

export { TrPurchaseTargetController, TrPurchaseTargetDtController };

