import {
  SalesContractDtDto,
  SalesContractDto,
  SalesContractItemDtDto,
  SalesContractRejectDto,
  SalesContractRequestDto
} from '../../../dto/tr/sales/SalesContactDto.js';
import StandardController from '../../StandardController.js';
import StandardTransactionController from '../../StandardTransactionController.js';

class SalesContractController extends StandardTransactionController {
  constructor(salesContract) {
    super(salesContract);
    this.create = this.create.bind(this);
    this.restore = this.restore.bind(this);
    this.delete = this.delete.bind(this);
    this.changeStatus = this.changeStatus.bind(this);
    this.changeStatusRequest = this.changeStatusRequest.bind(this);
  }

  async create(request, response) {
    const { body } = request;
    const salesContractDto = new SalesContractDto(body);

    return await super.insertTransaction(request, response, salesContractDto);
  }

  async restore(request, response) {
    const { body } = request;
    const salesContractDto = new SalesContractDto(body);

    return await super.restore(request, response, salesContractDto);
  }

  async delete(request, response) {
    const { body } = request;
    const salesContractDto = new SalesContractDto(body);

    return await super.delete(request, response, salesContractDto);
  }

  async changeStatus(request, response) {
    const {body} = request;
    const salesContractDto = new SalesContractDto(body);

    return await super.changeStatus(request, response, salesContractDto);
  }

  async changeStatusRequest(request, response) {
    const { body } = request;
    const salesContractDto = new SalesContractDto(body);

    return await super.changeStatusRequest(request, response, salesContractDto);
  }
}

class SalesContractDtController extends StandardController {
  constructor(salesContractDt) {
    super(salesContractDt);
    this.create = this.create.bind(this);
    this.restore = this.restore.bind(this);
    this.delete = this.delete.bind(this);
  }

  async create(request, response) {
    const { body } = request;
    const salesContractDtDto = new SalesContractDtDto(body);

    return await super.create(request, response, salesContractDtDto);
  }

  async restore(request, response) {
    const { body } = request;
    const salesContractDtDto = new SalesContractDtDto(body);

    return await super.restore(request, response, salesContractDtDto);
  }

  async delete(request, response) {
    const { body } = request;
    const salesContractDtDto = new SalesContractDtDto(body);

    return await super.delete(request, response, salesContractDtDto);
  }
}
class SalesContractItemDtController extends StandardController {
  constructor(salesContractItemDt) {
    super(salesContractItemDt);
    this.create = this.create.bind(this);
    this.restore = this.restore.bind(this);
    this.delete = this.delete.bind(this);
  }

  async create(request, response) {
    const { body } = request;
    const salesContractItemDt = new SalesContractItemDtDto(body);

    return await super.create(request, response, salesContractItemDt);
  }

  async restore(request, response) {
    const { body } = request;
    const salesContractItemDt = new SalesContractItemDtDto(body);

    return await super.restore(request, response, salesContractItemDt);
  }

  async delete(request, response) {
    const { body } = request;
    const salesContractItemDt = new SalesContractItemDtDto(body);

    return await super.delete(request, response, salesContractItemDt);
  }
}

class SalesContractRejectController extends StandardController {
  constructor(SalesContractReject) {
    super(SalesContractReject);
    this.create = this.create.bind(this);
    this.restore = this.restore.bind(this);
    this.delete = this.delete.bind(this);
  }

  async create(request, response) {
    const { body } = request;
    const salesContractReject = new SalesContractRejectDto(body);

    return await super.create(request, response, salesContractReject);
  }

  async restore(request, response) {
    const { body } = request;
    const salesContractReject = new SalesContractRejectDto(body);

    return await super.restore(request, response, salesContractReject);
  }

  async delete(request, response) {
    const { body } = request;
    const salesContractReject = new SalesContractRejectDto(body);

    return await super.delete(request, response, salesContractReject);
  }
}

class SalesContractRequestController extends StandardController {
  constructor(salesContractRequest) {
    super(salesContractRequest);
    this.create = this.create.bind(this);
    this.restore = this.restore.bind(this);
    this.delete = this.delete.bind(this);
  }

  async create(request, response) {
    const { body } = request;
    const salesContractRequestDto = new SalesContractRequestDto(body);

    return await super.create(request, response, salesContractRequestDto);
  }

  async restore(request, response) {
    const { body } = request;
    const salesContractRequestDto = new SalesContractRequestDto(body);

    return await super.restore(request, response, salesContractRequestDto);
  }

  async delete(request, response) {
    const { body } = request;
    const salesContractRequestDto = new SalesContractRequestDto(body);

    return await super.delete(request, response, salesContractRequestDto);
  }
}

export {
  SalesContractController,
  SalesContractDtController,
  SalesContractItemDtController,
  SalesContractRejectController,
  SalesContractRequestController
};
