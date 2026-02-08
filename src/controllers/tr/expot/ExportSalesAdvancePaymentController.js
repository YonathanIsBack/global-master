import {
  ExportSalesAdvancePaymentDto,
  ExportSalesAdvancePaymentRejectDto,
  ExportSalesAdvancePaymentRequestDto
} from '../../../dto/tr/export/ExportSalesAdvancePaymentDto.js';
import StandardController from '../../StandardController.js';
import StandardTransactionController from '../../StandardTransactionController.js';

class ExportSalesAdvancePaymentController extends StandardTransactionController {
  constructor(exportSalesAdvPay) {
    super(exportSalesAdvPay);
    this.create = this.create.bind(this);
    this.restore = this.restore.bind(this);
    this.delete = this.delete.bind(this);
    this.changeStatus = this.changeStatus.bind(this);
    this.changeStatusRequest = this.changeStatusRequest.bind(this);
  }

  async create(request, response) {
    const { body } = request;
    const exportSalesAdvancePaymentDto = new ExportSalesAdvancePaymentDto(body);

    return await super.insertTransaction(request, response, exportSalesAdvancePaymentDto);
  }

  async restore(request, response) {
    const { body } = request;
    const exportSalesAdvancePaymentDto = new ExportSalesAdvancePaymentDto(body);

    return await super.restore(request, response, exportSalesAdvancePaymentDto);
  }

  async delete(request, response) {
    const { body } = request;
    const exportSalesAdvancePaymentDto = new ExportSalesAdvancePaymentDto(body);

    return await super.delete(request, response, exportSalesAdvancePaymentDto);
  }
  async changeStatus(request, response) {
    const {body} = request;
    const exportSalesAdvancePaymentDto = new ExportSalesAdvancePaymentDto(body);

    return await super.changeStatus(request, response, exportSalesAdvancePaymentDto);
  }

  async changeStatusRequest(request, response) {
    const { body } = request;
    const exportSalesAdvancePaymentDto = new ExportSalesAdvancePaymentDto(body);

    return await super.changeStatusRequest(request, response, exportSalesAdvancePaymentDto);
  }
}

class ExportSalesAdvancePaymentRejectController extends StandardController {
  constructor(exportSalesAdvPayReject) {
    super(exportSalesAdvPayReject);
    this.create = this.create.bind(this);
    this.restore = this.restore.bind(this);
    this.delete = this.delete.bind(this);
  }

  async create(request, response) {
    const { body } = request;
    const exportSalesAdvanceRejectDto = new ExportSalesAdvancePaymentRejectDto(body);

    return await super.create(request, response, exportSalesAdvanceRejectDto);
  }

  async restore(request, response) {
    const { body } = request;
    const exportSalesAdvanceRejectDto = new ExportSalesAdvancePaymentRejectDto(body);

    return await super.restore(request, response, exportSalesAdvanceRejectDto);
  }

  async delete(request, response) {
    const { body } = request;
    const exportSalesAdvanceRejectDto = new ExportSalesAdvancePaymentRejectDto(body);

    return await super.delete(request, response, exportSalesAdvanceRejectDto);
  }
}

class ExportSalesAdvancePaymentRequestController extends StandardController {
  constructor(exportSalesAdvPayRequest) {
    super(exportSalesAdvPayRequest);
    this.create = this.create.bind(this);
    this.restore = this.restore.bind(this);
    this.delete = this.delete.bind(this);
  }

  async create(request, response) {
    const { body } = request;
    const exportSalesAdvanceRequestDto = new ExportSalesAdvancePaymentRequestDto(body);

    return await super.create(request, response, exportSalesAdvanceRequestDto);
  }

  async restore(request, response) {
    const { body } = request;
    const exportSalesAdvanceRequestDto = new ExportSalesAdvancePaymentRequestDto(body);

    return await super.restore(request, response, exportSalesAdvanceRequestDto);
  }

  async delete(request, response) {
    const { body } = request;
    const exportSalesAdvanceRequestDto = new ExportSalesAdvancePaymentRequestDto(body);

    return await super.delete(request, response, exportSalesAdvanceRequestDto);
  }
}

export { ExportSalesAdvancePaymentController, ExportSalesAdvancePaymentRejectController, ExportSalesAdvancePaymentRequestController };
