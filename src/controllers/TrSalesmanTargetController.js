import { TrSalesmanTargetDtDto, TrSalesmanTargetDto } from '../dto/TrSalesmanTargetDto.js';
import StandardController from './StandardController.js';

class TrSalesmanTargetController extends StandardController {
  constructor(trSalesTargetService) {
    super(trSalesTargetService);
    this.create = this.create.bind(this);
    this.restore = this.restore.bind(this);
    this.delete = this.delete.bind(this);
  }

  async create(request, response) {
    const { body } = request;
    const trSalesmanTargetDto = new TrSalesmanTargetDto(body);

    return await super.create(request, response, trSalesmanTargetDto);
  }

  async restore(request, response) {
    const { body } = request;
    const trSalesmanTargetDto = new TrSalesmanTargetDto(body);

    return await super.restore(request, response, trSalesmanTargetDto);
  }

  async delete(request, response) {
    const { body } = request;
    const trSalesmanTargetDto = new TrSalesmanTargetDto(body);

    return await super.delete(request, response, trSalesmanTargetDto);
  }
}

class TrSalesmanTargetDtController extends StandardController {
  constructor(trSalesTargetDtService) {
    super(trSalesTargetDtService);
    this.create = this.create.bind(this);
    this.restore = this.restore.bind(this);
    this.delete = this.delete.bind(this);
  }

  async create(request, response) {
    const { body } = request;
    const trSalesmanTargetDtDto = new TrSalesmanTargetDtDto(body);

    return await super.create(request, response, trSalesmanTargetDtDto);
  }

  async restore(request, response) {
    const { body } = request;
    const trSalesmanTargetDtDto = new TrSalesmanTargetDtDto(body);

    return await super.restore(request, response, trSalesmanTargetDtDto);
  }

  async delete(request, response) {
    const { body } = request;
    const trSalesmanTargetDtDto = new TrSalesmanTargetDtDto(body);

    return await super.delete(request, response, trSalesmanTargetDtDto);
  }
}

export { TrSalesmanTargetController, TrSalesmanTargetDtController };

