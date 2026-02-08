import { SalesmanCommisionDto, SalesmanDto, SalesmanTargetDto } from '../dto/SalesmanDto.js';
import StandardController from './StandardController.js';

class SalesmanController extends StandardController {
  constructor(salesmanService) {
    super(salesmanService);
    this.create = this.create.bind(this);
    this.restore = this.restore.bind(this);
    this.delete = this.delete.bind(this);
  }

  async create(request, response) {
    const { body } = request;
    const salesmanDto = new SalesmanDto(body);

    return await super.create(request, response, salesmanDto);
  }

  async restore(request, response) {
    const { body } = request;
    const salesmanDto = new SalesmanDto(body);

    return await super.restore(request, response, salesmanDto);
  }

  async delete(request, response) {
    const { body } = request;
    const salesmanDto = new SalesmanDto(body);

    return await super.delete(request, response, salesmanDto);
  }
}

class SalesmanCommissionController extends StandardController {
  constructor(salesmanCommissionService) {
    super(salesmanCommissionService);
    this.create = this.create.bind(this);
    this.restore = this.restore.bind(this);
    this.delete = this.delete.bind(this);
  }

  async create(request, response) {
    const { body } = request;
    const salesmanCommissionDto = new SalesmanCommisionDto(body);

    return await super.create(request, response, salesmanCommissionDto);
  }

  async restore(request, response) {
    const { body } = request;
    const salesmanCommissionDto = new SalesmanCommisionDto(body);

    return await super.restore(request, response, salesmanCommissionDto);
  }

  async delete(request, response) {
    const { body } = request;
    const salesmanCommissionDto = new SalesmanCommisionDto(body);

    return await super.delete(request, response, salesmanCommissionDto);
  }
}

class SalesmanTargetController extends StandardController {
  constructor(salesmanTargetService) {
    super(salesmanTargetService);
    this.create = this.create.bind(this);
    this.restore = this.restore.bind(this);
    this.delete = this.delete.bind(this);
  }

  async create(request, response) {
    const { body } = request;
    const salesmanTargetDto = new SalesmanTargetDto(body);

    return await super.create(request, response, salesmanTargetDto);
  }

  async restore(request, response) {
    const { body } = request;
    const salesmanTargetDto = new SalesmanTargetDto(body);

    return await super.restore(request, response, salesmanTargetDto);
  }

  async delete(request, response) {
    const { body } = request;
    const salesmanTargetDto = new SalesmanTargetDto(body);

    return await super.delete(request, response, salesmanTargetDto);
  }
}

export { SalesmanCommissionController, SalesmanController, SalesmanTargetController };

