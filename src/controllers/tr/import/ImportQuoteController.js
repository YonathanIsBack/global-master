import {
  ImportQuoteAdvancePayDto,
  ImportQuoteCreditNoteDto,
  ImportQuoteDtDto,
  ImportQuoteDto,
  ImportQuoteItemDtDto,
  ImportQuoteRejectDto,
  ImportQuoteRequestDto
} from '../../../dto/tr/imports/ImportQuoteDto.js';
import StandardController from '../../StandardController.js';
import StandardTransactionController from '../../StandardTransactionController.js';

class ImportQuoteController extends StandardTransactionController {
  constructor(importPayment) {
    super(importPayment);
    this.create = this.create.bind(this);
    this.restore = this.restore.bind(this);
    this.delete = this.delete.bind(this);
    this.changeStatus = this.changeStatus.bind(this);
    this.changeStatusRequest = this.changeStatusRequest.bind(this);
  }

  async create(request, response) {
    const { body } = request;
    const importQuoteDto = new ImportQuoteDto(body);

    return await super.insertTransaction(request, response, importQuoteDto);
  }

  async restore(request, response) {
    const { body } = request;
    const importQuoteDto = new ImportQuoteDto(body);

    return await super.restore(request, response, importQuoteDto);
  }

  async delete(request, response) {
    const { body } = request;
    const importQuoteDto = new ImportQuoteDto(body);

    return await super.delete(request, response, importQuoteDto);
  }

  async changeStatus(request, response) {
    const {body} = request;
    const importQuoteDto = new ImportQuoteDto(body);

    return await super.changeStatus(request, response, importQuoteDto);
  }

  async changeStatusRequest(request, response) {
    const { body } = request;
    const importQuoteDto = new ImportQuoteDto(body);

    return await super.changeStatusRequest(request, response, importQuoteDto);
  }
}

class ImportQuoteAdvancePayController extends StandardController {
  constructor(importQuoteAdvancePay) {
    super(importQuoteAdvancePay);
    this.create = this.create.bind(this);
    this.restore = this.restore.bind(this);
    this.delete = this.delete.bind(this);
  }

  async create(request, response) {
    const { body } = request;
    const importQuoteAdvancePayDto = new ImportQuoteAdvancePayDto(body);

    return await super.create(request, response, importQuoteAdvancePayDto);
  }

  async restore(request, response) {
    const { body } = request;
    const importQuoteAdvancePayDto = new ImportQuoteAdvancePayDto(body);

    return await super.restore(request, response, importQuoteAdvancePayDto);
  }

  async delete(request, response) {
    const { body } = request;
    const importQuoteAdvancePayDto = new ImportQuoteAdvancePayDto(body);

    return await super.delete(request, response, importQuoteAdvancePayDto);
  }
}

class ImportQuoteCreditNoteController extends StandardController {
  constructor(importQuoteCreditNote) {
    super(importQuoteCreditNote);
    this.create = this.create.bind(this);
    this.restore = this.restore.bind(this);
    this.delete = this.delete.bind(this);
  }

  async create(request, response) {
    const { body } = request;
    const importQuoteCreditNoteDto = new ImportQuoteCreditNoteDto(body);

    return await super.create(request, response, importQuoteCreditNoteDto);
  }

  async restore(request, response) {
    const { body } = request;
    const importQuoteCreditNoteDto = new ImportQuoteCreditNoteDto(body);

    return await super.restore(request, response, importQuoteCreditNoteDto);
  }

  async delete(request, response) {
    const { body } = request;
    const importQuoteCreditNoteDto = new ImportQuoteCreditNoteDto(body);

    return await super.delete(request, response, importQuoteCreditNoteDto);
  }
}

class ImportQuoteDtController extends StandardController {
  constructor(importQuoteDt) {
    super(importQuoteDt);
    this.create = this.create.bind(this);
    this.restore = this.restore.bind(this);
    this.delete = this.delete.bind(this);
  }

  async create(request, response) {
    const { body } = request;
    const importQuoteDtDto = new ImportQuoteDtDto(body);

    return await super.create(request, response, importQuoteDtDto);
  }

  async restore(request, response) {
    const { body } = request;
    const importQuoteDtDto = new importQuoteDtDto(body);

    return await super.restore(request, response, importQuoteDtDto);
  }

  async delete(request, response) {
    const { body } = request;
    const importQuoteDtDto = new ImportQuoteDtDto(body);

    return await super.delete(request, response, importQuoteDtDto);
  }
}
class ImportQuoteItemDtController extends StandardController {
  constructor(importOrderItemDt) {
    super(importOrderItemDt);
    this.create = this.create.bind(this);
    this.restore = this.restore.bind(this);
    this.delete = this.delete.bind(this);
  }

  async create(request, response) {
    const { body } = request;
    const importQuoteItemDtDto = new ImportQuoteItemDtDto(body);

    return await super.create(request, response, importQuoteItemDtDto);
  }

  async restore(request, response) {
    const { body } = request;
    const importQuoteItemDtDto = new ImportQuoteItemDtDto(body);

    return await super.restore(request, response, importQuoteItemDtDto);
  }

  async delete(request, response) {
    const { body } = request;
    const importQuoteItemDtDto = new ImportQuoteItemDtDto(body);

    return await super.delete(request, response, importQuoteItemDtDto);
  }
}

class ImportQuoteRejectController extends StandardController {
  constructor(importOrderItemDt) {
    super(importOrderItemDt);
    this.create = this.create.bind(this);
    this.restore = this.restore.bind(this);
    this.delete = this.delete.bind(this);
  }

  async create(request, response) {
    const { body } = request;
    const importQuoteRejectDto = new ImportQuoteRejectDto(body);

    return await super.create(request, response, importQuoteRejectDto);
  }

  async restore(request, response) {
    const { body } = request;
    const importQuoteRejectDto = new ImportQuoteRejectDto(body);

    return await super.restore(request, response, importQuoteRejectDto);
  }

  async delete(request, response) {
    const { body } = request;
    const importQuoteRejectDto = new ImportQuoteRejectDto(body);

    return await super.delete(request, response, importQuoteRejectDto);
  }
}

class ImportQuoteRequestController extends StandardController {
  constructor(importOrderItemDt) {
    super(importOrderItemDt);
    this.create = this.create.bind(this);
    this.restore = this.restore.bind(this);
    this.delete = this.delete.bind(this);
  }

  async create(request, response) {
    const { body } = request;
    const importQuoteRequestDto = new ImportQuoteRequestDto(body);

    return await super.create(request, response, importQuoteRequestDto);
  }

  async restore(request, response) {
    const { body } = request;
    const importQuoteRequestDto = new ImportQuoteRequestDto(body);

    return await super.restore(request, response, importQuoteRequestDto);
  }

  async delete(request, response) {
    const { body } = request;
    const importQuoteRequestDto = new ImportQuoteRequestDto(body);

    return await super.delete(request, response, importQuoteRequestDto);
  }
}

export {
  ImportQuoteController,
  ImportQuoteAdvancePayController,
  ImportQuoteCreditNoteController,
  ImportQuoteDtController,
  ImportQuoteItemDtController,
  ImportQuoteRejectController,
  ImportQuoteRequestController
};
