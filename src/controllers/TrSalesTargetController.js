import { TrSalesTargetDtDto, TrSalesTargetDto } from '../dto/TrSalesTargetDto.js';
import StandardController from './StandardController.js';

class TrSalesTargetController extends StandardController {
  constructor(trSalesTargetService) {
    super(trSalesTargetService);
    this.create = this.create.bind(this);
    this.restore = this.restore.bind(this);
    this.delete = this.delete.bind(this);
  }

  async create(request, response) {
    const { body } = request;
    const trSalesTargetDto = new TrSalesTargetDto(body);

    return await super.insertTransaction(request, response, trSalesTargetDto);
  }

  async restore(request, response) {
    const { body } = request;
    const trSalesTargetDto = new TrSalesTargetDto(body);

    return await super.restore(request, response, trSalesTargetDto);
  }

  async delete(request, response) {
    const { body } = request;
    const trSalesTargetDto = new TrSalesTargetDto(body);

    return await super.delete(request, response, trSalesTargetDto);
  }
}

class TrSalesTargetDtController extends StandardController {
  constructor(trSalesTargetDtService) {
    super(trSalesTargetDtService);
    this.create = this.create.bind(this);
    this.restore = this.restore.bind(this);
    this.delete = this.delete.bind(this);
  }

  async create(request, response) {
    const { body } = request;
    const trSalesTargetDtDto = new TrSalesTargetDtDto(body);

    return await super.create(request, response, trSalesTargetDtDto);
  }

  async restore(request, response) {
    const { body } = request;
    const trSalesTargetDtDto = new TrSalesTargetDtDto(body);

    return await super.restore(request, response, trSalesTargetDtDto);
  }

  async delete(request, response) {
    const { body } = request;
    const trSalesTargetDtDto = new TrSalesTargetDtDto(body);

    return await super.delete(request, response, trSalesTargetDtDto);
  }
}

export { TrSalesTargetController, TrSalesTargetDtController };

