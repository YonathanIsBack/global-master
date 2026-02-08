import {
  ImportPaymentAdvancePayDto,
  ImportPaymentCoaDto,
  ImportPaymentCoaTotalDto,
  ImportPaymentCreditNoteDto,
  ImportPaymentDtDto,
  ImportPaymentDto,
  ImportPaymentInvoiceDto,
  ImportPaymentRejectDto,
  ImportPaymentRequestDto
} from '../../../dto/tr/imports/ImportPaymentDto.js';
import StandardController from '../../StandardController.js';
import StandardTransactionController from '../../StandardTransactionController.js';

class ImportPaymentController extends StandardTransactionController {
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
    const importPaymentDto = new ImportPaymentDto(body);

    return await super.insertTransaction(request, response, importPaymentDto);
  }

  async restore(request, response) {
    const { body } = request;
    const importPaymentDto = new ImportPaymentDto(body);

    return await super.restore(request, response, importPaymentDto);
  }

  async delete(request, response) {
    const { body } = request;
    const importPaymentDto = new ImportPaymentDto(body);

    return await super.delete(request, response, importPaymentDto);
  }
  async changeStatus(request, response) {
    const {body} = request;
    const importPaymentDto = new ImportPaymentDto(body);

    return await super.changeStatus(request, response, importPaymentDto);
  }

  async changeStatusRequest(request, response) {
    const { body } = request;
    const importPaymentDto = new ImportPaymentDto(body);

    return await super.changeStatusRequest(request, response, importPaymentDto);
  }
}

class ImportPaymentAdvancePayController extends StandardController {
  constructor(importPaymentAdvancePay) {
    super(importPaymentAdvancePay);
    this.create = this.create.bind(this);
    this.restore = this.restore.bind(this);
    this.delete = this.delete.bind(this);
  }

  async create(request, response) {
    const { body } = request;
    const importPaymentAdvancePayDto = new ImportPaymentAdvancePayDto(body);

    return await super.create(request, response, importPaymentAdvancePayDto);
  }

  async restore(request, response) {
    const { body } = request;
    const importPaymentAdvancePayDto = new ImportPaymentAdvancePayDto(body);

    return await super.restore(request, response, importPaymentAdvancePayDto);
  }

  async delete(request, response) {
    const { body } = request;
    const importPaymentAdvancePayDto = new ImportPaymentAdvancePayDto(body);

    return await super.delete(request, response, importPaymentAdvancePayDto);
  }
}

class ImportPaymentCoaController extends StandardController {
  constructor(importPaymentCoa) {
    super(importPaymentCoa);
    this.create = this.create.bind(this);
    this.restore = this.restore.bind(this);
    this.delete = this.delete.bind(this);
  }

  async create(request, response) {
    const { body } = request;
    const importPaymentCoaDto = new ImportPaymentCoaDto(body);

    return await super.create(request, response, importPaymentCoaDto);
  }

  async restore(request, response) {
    const { body } = request;
    const importPaymentCoaDto = new ImportPaymentCoaDto(body);

    return await super.restore(request, response, importPaymentCoaDto);
  }

  async delete(request, response) {
    const { body } = request;
    const importPaymentCoaDto = new ImportPaymentCoaDto(body);

    return await super.delete(request, response, importPaymentCoaDto);
  }
}

class ImportPaymentCoaTotalController extends StandardController {
  constructor(importPaymentCoaTotal) {
    super(importPaymentCoaTotal);
    this.create = this.create.bind(this);
    this.restore = this.restore.bind(this);
    this.delete = this.delete.bind(this);
  }

  async create(request, response) {
    const { body } = request;
    const importPaymentCoaTotalDto = new ImportPaymentCoaTotalDto(body);

    return await super.create(request, response, importPaymentCoaTotalDto);
  }

  async restore(request, response) {
    const { body } = request;
    const importPaymentCoaTotalDto = new ImportPaymentCoaTotalDto(body);

    return await super.restore(request, response, importPaymentCoaTotalDto);
  }

  async delete(request, response) {
    const { body } = request;
    const importPaymentCoaTotalDto = new ImportPaymentCoaTotalDto(body);

    return await super.delete(request, response, importPaymentCoaTotalDto);
  }
}
class ImportPaymentCreditNoteController extends StandardController {
  constructor(importOrderItemDt) {
    super(importOrderItemDt);
    this.create = this.create.bind(this);
    this.restore = this.restore.bind(this);
    this.delete = this.delete.bind(this);
  }

  async create(request, response) {
    const { body } = request;
    const importPaymentCreditNoteDto = new ImportPaymentCreditNoteDto(body);

    return await super.create(request, response, importPaymentCreditNoteDto);
  }

  async restore(request, response) {
    const { body } = request;
    const importPaymentCreditNoteDto = new ImportPaymentCreditNoteDto(body);

    return await super.restore(request, response, importPaymentCreditNoteDto);
  }

  async delete(request, response) {
    const { body } = request;
    const importPaymentCreditNoteDto = new ImportPaymentCreditNoteDto(body);

    return await super.delete(request, response, importPaymentCreditNoteDto);
  }
}

class ImportPaymentDtController extends StandardController {
  constructor(importOrderItemDt) {
    super(importOrderItemDt);
    this.create = this.create.bind(this);
    this.restore = this.restore.bind(this);
    this.delete = this.delete.bind(this);
  }

  async create(request, response) {
    const { body } = request;
    const importPaymentDtDto = new ImportPaymentDtDto(body);

    return await super.create(request, response, importPaymentDtDto);
  }

  async restore(request, response) {
    const { body } = request;
    const importPaymentDtDto = new ImportPaymentDtDto(body);

    return await super.restore(request, response, importPaymentDtDto);
  }

  async delete(request, response) {
    const { body } = request;
    const importPaymentDtDto = new ImportPaymentDtDto(body);

    return await super.delete(request, response, importPaymentDtDto);
  }
}

class ImportPaymentInvoiceController extends StandardController {
  constructor(importOrderItemDt) {
    super(importOrderItemDt);
    this.create = this.create.bind(this);
    this.restore = this.restore.bind(this);
    this.delete = this.delete.bind(this);
  }

  async create(request, response) {
    const { body } = request;
    const importPaymentInvoiceDto = new ImportPaymentInvoiceDto(body);

    return await super.create(request, response, importPaymentInvoiceDto);
  }

  async restore(request, response) {
    const { body } = request;
    const importPaymentInvoiceDto = new ImportPaymentInvoiceDto(body);

    return await super.restore(request, response, importPaymentInvoiceDto);
  }

  async delete(request, response) {
    const { body } = request;
    const importPaymentInvoiceDto = new ImportPaymentInvoiceDto(body);

    return await super.delete(request, response, importPaymentInvoiceDto);
  }
}

class ImportPaymentRejectController extends StandardController {
  constructor(importOrderReject) {
    super(importOrderReject);
    this.create = this.create.bind(this);
    this.restore = this.restore.bind(this);
    this.delete = this.delete.bind(this);
  }

  async create(request, response) {
    const { body } = request;
    const importPaymentRejectDto = new ImportPaymentRejectDto(body);

    return await super.create(request, response, importPaymentRejectDto);
  }

  async restore(request, response) {
    const { body } = request;
    const importPaymentRejectDto = new ImportPaymentRejectDto(body);

    return await super.restore(request, response, importPaymentRejectDto);
  }

  async delete(request, response) {
    const { body } = request;
    const importPaymentRejectDto = new ImportPaymentRejectDto(body);

    return await super.delete(request, response, importPaymentRejectDto);
  }
}

class ImportPaymentRequestController extends StandardController {
  constructor(importOrderRequest) {
    super(importOrderRequest);
    this.create = this.create.bind(this);
    this.restore = this.restore.bind(this);
    this.delete = this.delete.bind(this);
  }

  async create(request, response) {
    const { body } = request;
    const importPaymentRequestDto = new ImportPaymentRequestDto(body);

    return await super.create(request, response, importPaymentRequestDto);
  }

  async restore(request, response) {
    const { body } = request;
    const importPaymentRequestDto = new ImportPaymentRequestDto(body);

    return await super.restore(request, response, importPaymentRequestDto);
  }

  async delete(request, response) {
    const { body } = request;
    const importPaymentRequestDto = new ImportPaymentRequestDto(body);

    return await super.delete(request, response, importPaymentRequestDto);
  }
}

export {
  ImportPaymentController,
  ImportPaymentAdvancePayController,
  ImportPaymentCoaController,
  ImportPaymentCoaTotalController,
  ImportPaymentCreditNoteController,
  ImportPaymentDtController,
  ImportPaymentInvoiceController,
  ImportPaymentRejectController,
  ImportPaymentRequestController
};
