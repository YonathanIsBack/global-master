import {
  PurchasePaymentAdvanceDto,
  PurchasePaymentCoaDto,
  PurchasePaymentCoaTotalDto,
  PurchasePaymentCreditNoteDto,
  PurchasePaymentDtDto,
  PurchasePaymentDto,
  PurchasePaymentImgDto,
  PurchasePaymentInvoiceDto,
  PurchasePaymentRejectDto,
  PurchasePaymentRequestDto
} from '../../../dto/tr/purchase/PurchasePaymentDto.js';
import StandardController from '../../StandardController.js';
import StandardTransactionController from '../../StandardTransactionController.js';

class PurchasePaymentController extends StandardTransactionController {
  constructor(purchasePayment) {
    super(purchasePayment);
    this.create = this.create.bind(this);
    this.restore = this.restore.bind(this);
    this.delete = this.delete.bind(this);
    this.changeStatus = this.changeStatus.bind(this);
    this.changeStatusRequest = this.changeStatusRequest.bind(this);
  }

  async create(request, response) {
    const { body } = request;
    const purchasePaymentDto = new PurchasePaymentDto(body);

    return await super.insertTransaction(request, response, purchasePaymentDto);
  }

  async restore(request, response) {
    const { body } = request;
    const purchasePaymentDto = new PurchasePaymentDto(body);

    return await super.restore(request, response, purchasePaymentDto);
  }

  async delete(request, response) {
    const { body } = request;
    const purchasePaymentDto = new PurchasePaymentDto(body);

    return await super.delete(request, response, purchasePaymentDto);
  }

  async changeStatus(request, response) {
    const {body} = request;
    const purchasePaymentDto = new PurchasePaymentDto(body);

    return await super.changeStatus(request, response, purchasePaymentDto);
  }

  async changeStatusRequest(request, response) {
    const { body } = request;
    const purchasePaymentDto = new PurchasePaymentDto(body);

    return await super.changeStatusRequest(request, response, purchasePaymentDto);
  }
}

class PurchasePaymentAdvanceController extends StandardController {
  constructor(purchasePaymentAdvance) {
    super(purchasePaymentAdvance);
    this.create = this.create.bind(this);
    this.restore = this.restore.bind(this);
    this.delete = this.delete.bind(this);
  }

  async create(request, response) {
    const { body } = request;
    const purchasePaymentAdvanceDto = new PurchasePaymentAdvanceDto(body);

    return await super.create(request, response, purchasePaymentAdvanceDto);
  }

  async restore(request, response) {
    const { body } = request;
    const purchasePaymentAdvanceDto = new PurchasePaymentAdvanceDto(body);

    return await super.restore(request, response, purchasePaymentAdvanceDto);
  }

  async delete(request, response) {
    const { body } = request;
    const purchasePaymentAdvanceDto = new PurchasePaymentAdvanceDto(body);

    return await super.delete(request, response, purchasePaymentAdvanceDto);
  }
}

class PurchasePaymentCoaController extends StandardController {
  constructor(purchasePaymentCoa) {
    super(purchasePaymentCoa);
    this.create = this.create.bind(this);
    this.restore = this.restore.bind(this);
    this.delete = this.delete.bind(this);
  }

  async create(request, response) {
    const { body } = request;
    const purchasePaymentCoaDto = new PurchasePaymentCoaDto(body);

    return await super.create(request, response, purchasePaymentCoaDto);
  }

  async restore(request, response) {
    const { body } = request;
    const purchasePaymentCoaDto = new PurchasePaymentCoaDto(body);

    return await super.restore(request, response, purchasePaymentCoaDto);
  }

  async delete(request, response) {
    const { body } = request;
    const purchasePaymentCoaDto = new PurchasePaymentCoaDto(body);

    return await super.delete(request, response, purchasePaymentCoaDto);
  }
}

class PurchasePaymentCoaTotalController extends StandardController {
  constructor(purchasePaymentCoaTotal) {
    super(purchasePaymentCoaTotal);
    this.create = this.create.bind(this);
    this.restore = this.restore.bind(this);
    this.delete = this.delete.bind(this);
  }

  async create(request, response) {
    const { body } = request;
    const purchasePaymentCoaTotalDto = new PurchasePaymentCoaTotalDto(body);

    return await super.create(request, response, purchasePaymentCoaTotalDto);
  }

  async restore(request, response) {
    const { body } = request;
    const purchasePaymentCoaTotalDto = new PurchasePaymentCoaTotalDto(body);

    return await super.restore(request, response, purchasePaymentCoaTotalDto);
  }

  async delete(request, response) {
    const { body } = request;
    const purchasePaymentCoaTotalDto = new PurchasePaymentCoaTotalDto(body);

    return await super.delete(request, response, purchasePaymentCoaTotalDto);
  }
}
class PurchasePaymentCreditNoteController extends StandardController {
  constructor(purchaseInvoiceItemDt) {
    super(purchaseInvoiceItemDt);
    this.create = this.create.bind(this);
    this.restore = this.restore.bind(this);
    this.delete = this.delete.bind(this);
  }

  async create(request, response) {
    const { body } = request;
    const purchasePaymentCreditNoteDto = new PurchasePaymentCreditNoteDto(body);

    return await super.create(request, response, purchasePaymentCreditNoteDto);
  }

  async restore(request, response) {
    const { body } = request;
    const purchasePaymentCreditNoteDto = new PurchasePaymentCreditNoteDto(body);

    return await super.restore(request, response, purchasePaymentCreditNoteDto);
  }

  async delete(request, response) {
    const { body } = request;
    const purchasePaymentCreditNoteDto = new PurchasePaymentCreditNoteDto(body);

    return await super.delete(request, response, purchasePaymentCreditNoteDto);
  }
}

class PurchasePaymentDtController extends StandardController {
  constructor(purchasePaymentDt) {
    super(purchasePaymentDt);
    this.create = this.create.bind(this);
    this.restore = this.restore.bind(this);
    this.delete = this.delete.bind(this);
  }

  async create(request, response) {
    const { body } = request;
    const purchasePaymentDtDto = new PurchasePaymentDtDto(body);

    return await super.create(request, response, purchasePaymentDtDto);
  }

  async restore(request, response) {
    const { body } = request;
    const purchasePaymentDtDto = new PurchasePaymentDtDto(body);

    return await super.restore(request, response, purchasePaymentDtDto);
  }

  async delete(request, response) {
    const { body } = request;
    const purchasePaymentDtDto = new PurchasePaymentDtDto(body);

    return await super.delete(request, response, purchasePaymentDtDto);
  }
}
class PurchasePaymentImgController extends StandardController {
  constructor(purchaseInvoiceImg) {
    super(purchaseInvoiceImg);
    this.create = this.create.bind(this);
    this.restore = this.restore.bind(this);
    this.delete = this.delete.bind(this);
  }

  async create(request, response) {
    const { body } = request;
    const purchasePaymentImgDto = new PurchasePaymentImgDto(body);

    return await super.create(request, response, purchasePaymentImgDto);
  }

  async restore(request, response) {
    const { body } = request;
    const purchasePaymentImgDto = new PurchasePaymentImgDto(body);

    return await super.restore(request, response, purchasePaymentImgDto);
  }

  async delete(request, response) {
    const { body } = request;
    const purchasePaymentImgDto = new PurchasePaymentImgDto(body);

    return await super.delete(request, response, purchasePaymentImgDto);
  }
}
class PurchasePaymentInvoiceController extends StandardController {
  constructor(purchaseInvoiceItemDt) {
    super(purchaseInvoiceItemDt);
    this.create = this.create.bind(this);
    this.restore = this.restore.bind(this);
    this.delete = this.delete.bind(this);
  }

  async create(request, response) {
    const { body } = request;
    const purchasePaymentInvoiceDto = new PurchasePaymentInvoiceDto(body);

    return await super.create(request, response, purchasePaymentInvoiceDto);
  }

  async restore(request, response) {
    const { body } = request;
    const purchasePaymentInvoiceDto = new PurchasePaymentInvoiceDto(body);

    return await super.restore(request, response, purchasePaymentInvoiceDto);
  }

  async delete(request, response) {
    const { body } = request;
    const purchasePaymentInvoiceDto = new PurchasePaymentInvoiceDto(body);

    return await super.delete(request, response, purchasePaymentInvoiceDto);
  }
}

class PurchasePaymentRejectController extends StandardController {
  constructor(purchasePaymentReject) {
    super(purchasePaymentReject);
    this.create = this.create.bind(this);
    this.restore = this.restore.bind(this);
    this.delete = this.delete.bind(this);
  }

  async create(request, response) {
    const { body } = request;
    const purchasePaymentRejectDto = new PurchasePaymentRejectDto(body);

    return await super.create(request, response, purchasePaymentRejectDto);
  }

  async restore(request, response) {
    const { body } = request;
    const purchasePaymentRejectDto = new PurchasePaymentRejectDto(body);

    return await super.restore(request, response, purchasePaymentRejectDto);
  }

  async delete(request, response) {
    const { body } = request;
    const purchasePaymentRejectDto = new PurchasePaymentRejectDto(body);

    return await super.delete(request, response, purchasePaymentRejectDto);
  }
}
class PurchasePaymentRequestController extends StandardController {
  constructor(purchaseOrderRequest) {
    super(purchaseOrderRequest);
    this.create = this.create.bind(this);
    this.restore = this.restore.bind(this);
    this.delete = this.delete.bind(this);
  }

  async create(request, response) {
    const { body } = request;
    const purchasePaymentRequestDto = new PurchasePaymentRequestDto(body);

    return await super.create(request, response, purchasePaymentRequestDto);
  }

  async restore(request, response) {
    const { body } = request;
    const purchasePaymentRequestDto = new PurchasePaymentRequestDto(body);

    return await super.restore(request, response, purchasePaymentRequestDto);
  }

  async delete(request, response) {
    const { body } = request;
    const purchasePaymentRequestDto = new PurchasePaymentRequestDto(body);

    return await super.delete(request, response, purchasePaymentRequestDto);
  }
}

export {
  PurchasePaymentController,
  PurchasePaymentAdvanceController,
  PurchasePaymentCoaController,
  PurchasePaymentCreditNoteController,
  PurchasePaymentDtController,
  PurchasePaymentImgController,
  PurchasePaymentInvoiceController,
  PurchasePaymentRejectController,
  PurchasePaymentRequestController
};
