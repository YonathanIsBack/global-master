import { SalesReceiveDtDto, SalesReceiveDto } from '../../../dto/tr/sales/SalesReceiveDto.js';
import StandardController from '../../StandardController.js';
import StandardTransactionController from '../../StandardTransactionController.js';

class SalesReceiveController extends StandardTransactionController {
  constructor(salesReceive) {
    super(salesReceive);
    this.create = this.create.bind(this);
    this.restore = this.restore.bind(this);
    this.delete = this.delete.bind(this);
    this.changeStatus = this.changeStatus.bind(this);
    this.changeStatusRequest = this.changeStatusRequest.bind(this);
  }

  async create(request, response) {
    const { body } = request;
    const salesReceiveDto = new SalesReceiveDto(body);

    return await super.create(request, response, salesReceiveDto);
  }

  async restore(request, response) {
    const { body } = request;
    const salesReceiveDto = new SalesReceiveDto(body);

    return await super.restore(request, response, salesReceiveDto);
  }

  async delete(request, response) {
    const { body } = request;
    const salesReceiveDto = new SalesReceiveDto(body);

    return await super.delete(request, response, salesReceiveDto);
  }

  async changeStatus(request, response) {
    const {body} = request;
    const salesReceiveDto = new SalesReceiveDto(body);

    return await super.changeStatus(request, response, salesReceiveDto);
  }

  async changeStatusRequest(request, response) {
    const { body } = request;
    const salesReceiveDto = new SalesReceiveDto(body);

    return await super.changeStatusRequest(request, response, salesReceiveDto);
  }
}

class SalesReceiveDtController extends StandardController {
  constructor(salesReceiveDt) {
    super(salesReceiveDt);
    this.create = this.create.bind(this);
    this.restore = this.restore.bind(this);
    this.delete = this.delete.bind(this);
  }

  async create(request, response) {
    const { body } = request;
    const salesReceiveDtDto = new SalesReceiveDtDto(body);

    return await super.create(request, response, salesReceiveDtDto);
  }

  async restore(request, response) {
    const { body } = request;
    const salesReceiveDtDto = new SalesReceiveDtDto(body);

    return await super.restore(request, response, salesReceiveDtDto);
  }

  async delete(request, response) {
    const { body } = request;
    const salesReceiveDtDto = new SalesReceiveDtDto(body);

    return await super.delete(request, response, salesReceiveDtDto);
  }
}

export { SalesReceiveController, SalesReceiveDtController };
