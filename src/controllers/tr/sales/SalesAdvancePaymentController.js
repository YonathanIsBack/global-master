import { SalesAdvancePaymentDto, SalesAdvancePaymentRejectDto, SalesAdvancePaymentRequestDto } from '../../../dto/tr/sales/SalesAdvancePaymentDto.js';
import StandardController from '../../StandardController.js';
import StandardTransactionController from '../../StandardTransactionController.js';

class SalesAdvancePaymentController extends StandardTransactionController {
  constructor(salesAdvancePayment) {
    super(salesAdvancePayment);
    this.create = this.create.bind(this);
    this.restore = this.restore.bind(this);
    this.delete = this.delete.bind(this);
    this.changeStatus = this.changeStatus.bind(this);
    this.changeStatusRequest = this.changeStatusRequest.bind(this);
  }

  async create(request, response) {
    const { body } = request;
    const salesAdvancePaymentDto = new SalesAdvancePaymentDto(body);

    return await super.insertTransaction(request, response, salesAdvancePaymentDto);
  }

  async restore(request, response) {
    const { body } = request;
    const salesAdvancePaymentDto = new SalesAdvancePaymentDto(body);

    return await super.restore(request, response, salesAdvancePaymentDto);
  }

  async delete(request, response) {
    const { body } = request;
    const salesAdvancePaymentDto = new SalesAdvancePaymentDto(body);

    return await super.delete(request, response, salesAdvancePaymentDto);
  }

  async changeStatus(request, response) {
    const {body} = request;
    const salesAdvancePaymentDto = new SalesAdvancePaymentDto(body);

    return await super.changeStatus(request, response, salesAdvancePaymentDto);
  }

  async changeStatusRequest(request, response) {
    const { body } = request;
    const salesAdvancePaymentDto = new SalesAdvancePaymentDto(body);

    return await super.changeStatusRequest(request, response, salesAdvancePaymentDto);
  }
}

class SalesAdvancePaymentRejectController extends StandardController {
  constructor(salesAdvancePaymentReject) {
    super(salesAdvancePaymentReject);
    this.create = this.create.bind(this);
    this.restore = this.restore.bind(this);
    this.delete = this.delete.bind(this);
  }

  async create(request, response) {
    const { body } = request;
    const salesAdvancePaymentRejectDto = new SalesAdvancePaymentRejectDto(body);

    return await super.create(request, response, salesAdvancePaymentRejectDto);
  }

  async restore(request, response) {
    const { body } = request;
    const salesAdvancePaymentRejectDto = new SalesAdvancePaymentRejectDto(body);

    return await super.restore(request, response, salesAdvancePaymentRejectDto);
  }

  async delete(request, response) {
    const { body } = request;
    const salesAdvancePaymentRejectDto = new SalesAdvancePaymentRejectDto(body);

    return await super.delete(request, response, salesAdvancePaymentRejectDto);
  }
}

class SalesAdvancePaymentRequestController extends StandardController {
  constructor(exportSalesAdvPayRequest) {
    super(exportSalesAdvPayRequest);
    this.create = this.create.bind(this);
    this.restore = this.restore.bind(this);
    this.delete = this.delete.bind(this);
  }

  async create(request, response) {
    const { body } = request;
    const salesAdvancePaymentRequestDto = new SalesAdvancePaymentRequestDto(body);

    return await super.create(request, response, salesAdvancePaymentRequestDto);
  }

  async restore(request, response) {
    const { body } = request;
    const salesAdvancePaymentRequestDto = new SalesAdvancePaymentRequestDto(body);

    return await super.restore(request, response, salesAdvancePaymentRequestDto);
  }

  async delete(request, response) {
    const { body } = request;
    const salesAdvancePaymentRequestDto = new SalesAdvancePaymentRequestDto(body);

    return await super.delete(request, response, salesAdvancePaymentRequestDto);
  }
}

export { SalesAdvancePaymentController, SalesAdvancePaymentRejectController, SalesAdvancePaymentRequestController };
