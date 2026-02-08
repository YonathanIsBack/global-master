import { SalesDepositDto, SalesDepositRejectDto } from '../../../dto/tr/sales/SalesDepositDto.js';
import StandardController from '../../StandardController.js';
import StandardTransactionController from '../../StandardTransactionController.js';

class SalesDepositController extends StandardTransactionController {
  constructor(salesDeposit) {
    super(salesDeposit);
    this.create = this.create.bind(this);
    this.restore = this.restore.bind(this);
    this.delete = this.delete.bind(this);
    this.changeStatus = this.changeStatus.bind(this);
    this.changeStatusRequest = this.changeStatusRequest.bind(this);
  }

  async create(request, response) {
    const { body } = request;
    const salesDepositDto = new SalesDepositDto(body);

    return await super.insertTransaction(request, response, salesDepositDto);
  }

  async restore(request, response) {
    const { body } = request;
    const salesDepositDto = new SalesDepositDto(body);

    return await super.restore(request, response, salesDepositDto);
  }

  async delete(request, response) {
    const { body } = request;
    const salesDepositDto = new SalesDepositDto(body);

    return await super.delete(request, response, salesDepositDto);
  }

  async changeStatus(request, response) {
    const {body} = request;
    const salesDepositDto = new SalesDepositDto(body);

    return await super.changeStatus(request, response, salesDepositDto);
  }

  async changeStatusRequest(request, response) {
    const { body } = request;
    const salesDepositDto = new SalesDepositDto(body);

    return await super.changeStatusRequest(request, response, salesDepositDto);
  }
}

class SalesDepositRejectController extends StandardController {
  constructor(salesDepositReject) {
    super(salesDepositReject);
    this.create = this.create.bind(this);
    this.restore = this.restore.bind(this);
    this.delete = this.delete.bind(this);
  }

  async create(request, response) {
    const { body } = request;
    const salesDepositRejectDto = new SalesDepositRejectDto(body);

    return await super.create(request, response, salesDepositRejectDto);
  }

  async restore(request, response) {
    const { body } = request;
    const salesDepositRejectDto = new SalesDepositRejectDto(body);

    return await super.restore(request, response, salesDepositRejectDto);
  }

  async delete(request, response) {
    const { body } = request;
    const salesDepositRejectDto = new SalesDepositRejectDto(body);

    return await super.delete(request, response, salesDepositRejectDto);
  }
}

class SalesDepositRequestDto extends StandardController {
  constructor(salesDepositRequest) {
    super(salesDepositRequest);
    this.create = this.create.bind(this);
    this.restore = this.restore.bind(this);
    this.delete = this.delete.bind(this);
  }

  async create(request, response) {
    const { body } = request;
    const salesDepositRequestDto = new SalesDepositRequestDto(body);

    return await super.create(request, response, salesDepositRequestDto);
  }

  async restore(request, response) {
    const { body } = request;
    const salesDepositRequestDto = new SalesDepositRequestDto(body);

    return await super.restore(request, response, salesDepositRequestDto);
  }

  async delete(request, response) {
    const { body } = request;
    const salesDepositRequestDto = new SalesDepositRequestDto(body);

    return await super.delete(request, response, salesDepositRequestDto);
  }
}

export { SalesDepositController, SalesDepositRejectController, SalesDepositRequestDto };
