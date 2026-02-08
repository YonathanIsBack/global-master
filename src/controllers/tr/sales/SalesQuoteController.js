import {
  SalesQuoteDtDto,
  SalesQuoteDto,
  SalesQuoteItemDtDto,
  SalesQuoteRejectDto,
  SalesQuoteRequestDto
} from '../../../dto/tr/sales/SalesQuoteDto.js';
import StandardController from '../../StandardController.js';
import StandardTransactionController from '../../StandardTransactionController.js';

class SalesQuoteController extends StandardTransactionController {
  constructor(salesQuote) {
    super(salesQuote);
    this.create = this.create.bind(this);
    this.restore = this.restore.bind(this);
    this.delete = this.delete.bind(this);
    this.changeStatus = this.changeStatus.bind(this);
    this.changeStatusRequest = this.changeStatusRequest.bind(this);
  }

  async create(request, response) {
    const { body } = request;
    const salesQuoteDto = new SalesQuoteDto(body);

    return await super.insertTransaction(request, response, salesQuoteDto);
  }

  async restore(request, response) {
    const { body } = request;
    const salesQuoteDto = new SalesQuoteDto(body);

    return await super.restore(request, response, salesQuoteDto);
  }

  async delete(request, response) {
    const { body } = request;
    const salesQuoteDto = new SalesQuoteDto(body);

    return await super.delete(request, response, salesQuoteDto);
  }

  async changeStatus(request, response) {
    const {body} = request;
    const salesQuoteDto = new SalesQuoteDto(body);

    return await super.changeStatus(request, response, salesQuoteDto);
  }

  async changeStatusRequest(request, response) {
    const { body } = request;
    const salesQuoteDto = new SalesQuoteDto(body);

    return await super.changeStatusRequest(request, response, salesQuoteDto);
  }
}

class SalesQuoteDtController extends StandardController {
  constructor(salesQuoteDt) {
    super(salesQuoteDt);
    this.create = this.create.bind(this);
    this.restore = this.restore.bind(this);
    this.delete = this.delete.bind(this);
  }

  async create(request, response) {
    const { body } = request;
    const salesQuoteDtDto = new SalesQuoteDtDto(body);

    return await super.create(request, response, salesQuoteDtDto);
  }

  async restore(request, response) {
    const { body } = request;
    const salesQuoteDtDto = new SalesQuoteDtDto(body);

    return await super.restore(request, response, salesQuoteDtDto);
  }

  async delete(request, response) {
    const { body } = request;
    const salesQuoteDtDto = new SalesQuoteDtDto(body);

    return await super.delete(request, response, salesQuoteDtDto);
  }
}
class SalesQuoteItemDtController extends StandardController {
  constructor(salesPaymentCoa) {
    super(salesPaymentCoa);
    this.create = this.create.bind(this);
    this.restore = this.restore.bind(this);
    this.delete = this.delete.bind(this);
  }

  async create(request, response) {
    const { body } = request;
    const salesQuoteItemDtDto = new SalesQuoteItemDtDto(body);

    return await super.create(request, response, salesQuoteItemDtDto);
  }

  async restore(request, response) {
    const { body } = request;
    const salesQuoteItemDtDto = new SalesQuoteItemDtDto(body);

    return await super.restore(request, response, salesQuoteItemDtDto);
  }

  async delete(request, response) {
    const { body } = request;
    const salesQuoteItemDtDto = new SalesQuoteItemDtDto(body);

    return await super.delete(request, response, salesQuoteItemDtDto);
  }
}

class SalesQuoteRejectController extends StandardController {
  constructor(salesQuoteReject) {
    super(salesQuoteReject);
    this.create = this.create.bind(this);
    this.restore = this.restore.bind(this);
    this.delete = this.delete.bind(this);
  }

  async create(request, response) {
    const { body } = request;
    const salesQuoteRejectDto = new SalesQuoteRejectDto(body);

    return await super.create(request, response, salesQuoteRejectDto);
  }

  async restore(request, response) {
    const { body } = request;
    const salesQuoteRejectDto = new SalesQuoteRejectDto(body);

    return await super.restore(request, response, salesQuoteRejectDto);
  }

  async delete(request, response) {
    const { body } = request;
    const salesQuoteRejectDto = new SalesQuoteRejectDto(body);

    return await super.delete(request, response, salesQuoteRejectDto);
  }
}

class SalesQuoteRequestController extends StandardController {
  constructor(salesQuoteRequest) {
    super(salesQuoteRequest);
    this.create = this.create.bind(this);
    this.restore = this.restore.bind(this);
    this.delete = this.delete.bind(this);
  }

  async create(request, response) {
    const { body } = request;
    const salesQuoteRequestDto = new SalesQuoteRequestDto(body);

    return await super.create(request, response, salesQuoteRequestDto);
  }

  async restore(request, response) {
    const { body } = request;
    const salesQuoteRequestDto = new SalesQuoteRequestDto(body);

    return await super.restore(request, response, salesQuoteRequestDto);
  }

  async delete(request, response) {
    const { body } = request;
    const salesQuoteRequestDto = new SalesQuoteRequestDto(body);

    return await super.delete(request, response, salesQuoteRequestDto);
  }
}

export {
  SalesQuoteController,
  SalesQuoteDtController,
  SalesQuoteItemDtController,
  SalesQuoteRejectController,
  SalesQuoteRequestController
};
