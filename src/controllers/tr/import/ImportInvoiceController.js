import {
  ImportInvoiceAdvancePayDto,
  ImportInvoiceCreditNoteDto,
  ImportInvoiceDtDto,
  ImportInvoiceDto,
  ImportInvoiceItemDtDto,
  ImportInvoicePaymentDto,
  ImportInvoiceRejectDto,
  ImportInvoiceRequestDto
} from '../../../dto/tr/imports/ImportInvoiceDto.js';
import StandardController from '../../StandardController.js';
import StandardTransactionController from '../../StandardTransactionController.js';

class ImportInvoiceController extends StandardTransactionController {
  constructor(importInvoice) {
    super(importInvoice);
    this.create = this.create.bind(this);
    this.restore = this.restore.bind(this);
    this.delete = this.delete.bind(this);
    this.changeStatus = this.changeStatus.bind(this);
    this.changeStatusRequest = this.changeStatusRequest.bind(this);
  }

  async create(request, response) {
    const { body } = request;
    const importInvoiceDto = new ImportInvoiceDto(body);

    return await super.insertTransaction(request, response, importInvoiceDto);
  }

  async restore(request, response) {
    const { body } = request;
    const importInvoiceDto = new ImportInvoiceDto(body);

    return await super.restore(request, response, importInvoiceDto);
  }

  async delete(request, response) {
    const { body } = request;
    const importInvoiceDto = new ImportInvoiceDto(body);

    return await super.delete(request, response, importInvoiceDto);
  }

  async changeStatus(request, response) {
    const {body} = request;
    const importInvoiceDto = new ImportInvoiceDto(body);

    return await super.changeStatus(request, response, importInvoiceDto);
  }

  async changeStatusRequest(request, response) {
    const { body } = request;
    const importInvoiceDto = new ImportInvoiceDto(body);

    return await super.changeStatusRequest(request, response, importInvoiceDto);
  }
}

class ImportInvoiceAdvancePayController extends StandardController {
  constructor(importInvoiceAdvancePay) {
    super(importInvoiceAdvancePay);
    this.create = this.create.bind(this);
    this.restore = this.restore.bind(this);
    this.delete = this.delete.bind(this);
  }

  async create(request, response) {
    const { body } = request;
    const importInvoiceAdvancePayDto = new ImportInvoiceAdvancePayDto(body);

    return await super.create(request, response, importInvoiceAdvancePayDto);
  }

  async restore(request, response) {
    const { body } = request;
    const importInvoiceAdvancePayDto = new ImportInvoiceAdvancePayDto(body);

    return await super.restore(request, response, importInvoiceAdvancePayDto);
  }

  async delete(request, response) {
    const { body } = request;
    const importInvoiceAdvancePayDto = new ImportInvoiceAdvancePayDto(body);

    return await super.delete(request, response, importInvoiceAdvancePayDto);
  }
}

class ImportInvoiceCreditNoteController extends StandardController {
  constructor(importInvoiceCreditNote) {
    super(importInvoiceCreditNote);
    this.create = this.create.bind(this);
    this.restore = this.restore.bind(this);
    this.delete = this.delete.bind(this);
  }

  async create(request, response) {
    const { body } = request;
    const importInvoiceCreditNoteDto = new ImportInvoiceCreditNoteDto(body);

    return await super.create(request, response, importInvoiceCreditNoteDto);
  }

  async restore(request, response) {
    const { body } = request;
    const importInvoiceCreditNoteDto = new ImportInvoiceCreditNoteDto(body);

    return await super.restore(request, response, importInvoiceCreditNoteDto);
  }

  async delete(request, response) {
    const { body } = request;
    const importInvoiceCreditNoteDto = new ImportInvoiceCreditNoteDto(body);

    return await super.delete(request, response, importInvoiceCreditNoteDto);
  }
}

class ImportInvoiceDtController extends StandardController {
  constructor(importInvoiceDt) {
    super(importInvoiceDt);
    this.create = this.create.bind(this);
    this.restore = this.restore.bind(this);
    this.delete = this.delete.bind(this);
  }

  async create(request, response) {
    const { body } = request;
    const importInvoiceDtDto = new ImportInvoiceDtDto(body);

    return await super.create(request, response, importInvoiceDtDto);
  }

  async restore(request, response) {
    const { body } = request;
    const importInvoiceDtDto = new ImportInvoiceDtDto(body);

    return await super.restore(request, response, importInvoiceDtDto);
  }

  async delete(request, response) {
    const { body } = request;
    const importInvoiceDtDto = new ImportInvoiceDtDto(body);

    return await super.delete(request, response, importInvoiceDtDto);
  }
}
class ImportInvoiceItemDtController extends StandardController {
  constructor(importInvoiceItemDt) {
    super(importInvoiceItemDt);
    this.create = this.create.bind(this);
    this.restore = this.restore.bind(this);
    this.delete = this.delete.bind(this);
  }

  async create(request, response) {
    const { body } = request;
    const importInvoiceItemDtDto = new ImportInvoiceItemDtDto(body);

    return await super.create(request, response, importInvoiceItemDtDto);
  }

  async restore(request, response) {
    const { body } = request;
    const importInvoiceItemDtDto = new ImportInvoiceItemDtDto(body);

    return await super.restore(request, response, importInvoiceItemDtDto);
  }

  async delete(request, response) {
    const { body } = request;
    const importInvoiceItemDtDto = new ImportInvoiceItemDtDto(body);

    return await super.delete(request, response, importInvoiceItemDtDto);
  }
}
class ImportInvoicePaymentController extends StandardController {
  constructor(importInvoiceAdvancePay) {
    super(importInvoiceAdvancePay);
    this.create = this.create.bind(this);
    this.restore = this.restore.bind(this);
    this.delete = this.delete.bind(this);
  }

  async create(request, response) {
    const { body } = request;
    const importInvoicePaymentDto = new ImportInvoicePaymentDto(body);

    return await super.create(request, response, importInvoicePaymentDto);
  }

  async restore(request, response) {
    const { body } = request;
    const importInvoicePaymentDto = new ImportInvoicePaymentDto(body);

    return await super.restore(request, response, importInvoicePaymentDto);
  }

  async delete(request, response) {
    const { body } = request;
    const importInvoicePaymentDto = new ImportInvoicePaymentDto(body);

    return await super.delete(request, response, importInvoicePaymentDto);
  }
}

class ImportInvoiceRejectController extends StandardController {
  constructor(importCreditNoteReject) {
    super(importCreditNoteReject);
    this.create = this.create.bind(this);
    this.restore = this.restore.bind(this);
    this.delete = this.delete.bind(this);
  }

  async create(request, response) {
    const { body } = request;
    const importInvoiceRejectDto = new ImportInvoiceRejectDto(body);

    return await super.create(request, response, importInvoiceRejectDto);
  }

  async restore(request, response) {
    const { body } = request;
    const importInvoiceRejectDto = new ImportInvoiceRejectDto(body);

    return await super.restore(request, response, importInvoiceRejectDto);
  }

  async delete(request, response) {
    const { body } = request;
    const importInvoiceRejectDto = new ImportInvoiceRejectDto(body);

    return await super.delete(request, response, importInvoiceRejectDto);
  }
}

class ImportInvoiceRequestController extends StandardController {
  constructor(importCreditNoteRequest) {
    super(importCreditNoteRequest);
    this.create = this.create.bind(this);
    this.restore = this.restore.bind(this);
    this.delete = this.delete.bind(this);
  }

  async create(request, response) {
    const { body } = request;
    const importInvoiceRequestDto = new ImportInvoiceRequestDto(body);

    return await super.create(request, response, importInvoiceRequestDto);
  }

  async restore(request, response) {
    const { body } = request;
    const importInvoiceRequestDto = new ImportInvoiceRequestDto(body);

    return await super.restore(request, response, importInvoiceRequestDto);
  }

  async delete(request, response) {
    const { body } = request;
    const importInvoiceRequestDto = new ImportInvoiceRequestDto(body);

    return await super.delete(request, response, importInvoiceRequestDto);
  }
}

export {
  ImportInvoiceController,
  ImportInvoiceAdvancePayController,
  ImportInvoiceCreditNoteController,
  ImportInvoiceDtController,
  ImportInvoiceItemDtController,
  ImportInvoicePaymentController,
  ImportInvoiceRejectController,
  ImportInvoiceRequestController
};
