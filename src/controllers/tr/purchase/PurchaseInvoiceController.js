import {
  PurchaseInvoiceAdvanceDto,
  PurchaseInvoiceDtDto,
  PurchaseInvoiceDto,
  PurchaseInvoiceImgDto,
  PurchaseInvoiceItemDtDto,
  PurchaseInvoicePaymentDto,
  PurchaseInvoiceRejectDto,
  PurchaseInvoiceRequestDto
} from '../../../dto/tr/purchase/PurchaseInvoiceDto.js';
import StandardController from '../../StandardController.js';
import StandardTransactionController from '../../StandardTransactionController.js';

class PurchaseInvoiceController extends StandardTransactionController {
  constructor(purchaseInvoice) {
    super(purchaseInvoice);
    this.create = this.create.bind(this);
    this.restore = this.restore.bind(this);
    this.delete = this.delete.bind(this);
    this.changeStatus = this.changeStatus.bind(this);
    this.changeStatusRequest = this.changeStatusRequest.bind(this);
  }

  async create(request, response) {
    const { body } = request;
    const purchaseInvoiceDto = new PurchaseInvoiceDto(body);

    return await super.insertTransaction(request, response, purchaseInvoiceDto);
  }

  async restore(request, response) {
    const { body } = request;
    const purchaseInvoiceDto = new PurchaseInvoiceDto(body);

    return await super.restore(request, response, purchaseInvoiceDto);
  }

  async delete(request, response) {
    const { body } = request;
    const purchaseInvoiceDto = new PurchaseInvoiceDto(body);

    return await super.delete(request, response, purchaseInvoiceDto);
  }

  async changeStatus(request, response) {
    const {body} = request;
    const purchaseInvoiceDto = new PurchaseInvoiceDto(body);

    return await super.changeStatus(request, response, purchaseInvoiceDto);
  }

  async changeStatusRequest(request, response) {
    const { body } = request;
    const purchaseInvoiceDto = new PurchaseInvoiceDto(body);

    return await super.changeStatusRequest(request, response, purchaseInvoiceDto);
  }
}

class PurchaseInvoiceAdvanceController extends StandardController {
  constructor(purchaseInvoiceAdvance) {
    super(purchaseInvoiceAdvance);
    this.create = this.create.bind(this);
    this.restore = this.restore.bind(this);
    this.delete = this.delete.bind(this);
  }

  async create(request, response) {
    const { body } = request;
    const purchaseInvoiceAdvanceDto = new PurchaseInvoiceAdvanceDto(body);

    return await super.create(request, response, purchaseInvoiceAdvanceDto);
  }

  async restore(request, response) {
    const { body } = request;
    const purchaseInvoiceAdvanceDto = new PurchaseInvoiceAdvanceDto(body);

    return await super.restore(request, response, purchaseInvoiceAdvanceDto);
  }

  async delete(request, response) {
    const { body } = request;
    const purchaseInvoiceAdvanceDto = new PurchaseInvoiceAdvanceDto(body);

    return await super.delete(request, response, purchaseInvoiceAdvanceDto);
  }
}

class PurchaseInvoiceDtController extends StandardController {
  constructor(purchaseAdvancedPaymentImg) {
    super(purchaseAdvancedPaymentImg);
    this.create = this.create.bind(this);
    this.restore = this.restore.bind(this);
    this.delete = this.delete.bind(this);
  }

  async create(request, response) {
    const { body } = request;
    const purchaseInvoiceDtDto = new PurchaseInvoiceDtDto(body);

    return await super.create(request, response, purchaseInvoiceDtDto);
  }

  async restore(request, response) {
    const { body } = request;
    const purchaseInvoiceDtDto = new PurchaseInvoiceDtDto(body);

    return await super.restore(request, response, purchaseInvoiceDtDto);
  }

  async delete(request, response) {
    const { body } = request;
    const purchaseInvoiceDtDto = new PurchaseInvoiceDtDto(body);

    return await super.delete(request, response, purchaseInvoiceDtDto);
  }
}

class PurchaseInvoiceImgController extends StandardController {
  constructor(purchaseInvoiceImg) {
    super(purchaseInvoiceImg);
    this.create = this.create.bind(this);
    this.restore = this.restore.bind(this);
    this.delete = this.delete.bind(this);
  }

  async create(request, response) {
    const { body } = request;
    const purchaseInvoiceImgDto = new PurchaseInvoiceImgDto(body);

    return await super.create(request, response, purchaseInvoiceImgDto);
  }

  async restore(request, response) {
    const { body } = request;
    const purchaseInvoiceImgDto = new PurchaseInvoiceImgDto(body);

    return await super.restore(request, response, purchaseInvoiceImgDto);
  }

  async delete(request, response) {
    const { body } = request;
    const purchaseInvoiceImgDto = new PurchaseInvoiceImgDto(body);

    return await super.delete(request, response, purchaseInvoiceImgDto);
  }
}
class PurchaseInvoiceItemDtController extends StandardController {
  constructor(PurchaseInvoiceItemDt) {
    super(PurchaseInvoiceItemDt);
    this.create = this.create.bind(this);
    this.restore = this.restore.bind(this);
    this.delete = this.delete.bind(this);
  }

  async create(request, response) {
    const { body } = request;
    const purchaseInvoiceItemDtDto = new PurchaseInvoiceItemDtDto(body);

    return await super.create(request, response, purchaseInvoiceItemDtDto);
  }

  async restore(request, response) {
    const { body } = request;
    const purchaseInvoiceItemDtDto = new PurchaseInvoiceItemDtDto(body);

    return await super.restore(request, response, purchaseInvoiceItemDtDto);
  }

  async delete(request, response) {
    const { body } = request;
    const purchaseInvoiceItemDtDto = new PurchaseInvoiceItemDtDto(body);

    return await super.delete(request, response, purchaseInvoiceItemDtDto);
  }
}
class PurchaseInvoicePaymentController extends StandardController {
  constructor(purchaseInvoicePayment) {
    super(purchaseInvoicePayment);
    this.create = this.create.bind(this);
    this.restore = this.restore.bind(this);
    this.delete = this.delete.bind(this);
  }

  async create(request, response) {
    const { body } = request;
    const purchaseInvoicePaymentDto = new PurchaseInvoicePaymentDto(body);

    return await super.create(request, response, purchaseInvoicePaymentDto);
  }

  async restore(request, response) {
    const { body } = request;
    const purchaseInvoicePaymentDto = new PurchaseInvoicePaymentDto(body);

    return await super.restore(request, response, purchaseInvoicePaymentDto);
  }

  async delete(request, response) {
    const { body } = request;
    const purchaseInvoicePaymentDto = new PurchaseInvoicePaymentDto(body);

    return await super.delete(request, response, purchaseInvoicePaymentDto);
  }
}
class PurchaseInvoiceRejectController extends StandardController {
  constructor(purchaseInvoiceReject) {
    super(purchaseInvoiceReject);
    this.create = this.create.bind(this);
    this.restore = this.restore.bind(this);
    this.delete = this.delete.bind(this);
  }

  async create(request, response) {
    const { body } = request;
    const purchaseAdvancedPaymentRejectDto = new PurchaseInvoiceRejectDto(body);

    return await super.create(request, response, purchaseAdvancedPaymentRejectDto);
  }

  async restore(request, response) {
    const { body } = request;
    const PurchaseAdvancedPaymentRejectDto = new PurchaseInvoiceRejectDto(body);

    return await super.restore(request, response, PurchaseAdvancedPaymentRejectDto);
  }

  async delete(request, response) {
    const { body } = request;
    const PurchaseAdvancedPaymentRejectDto = new PurchaseInvoiceRejectDto(body);

    return await super.delete(request, response, PurchaseAdvancedPaymentRejectDto);
  }
}
class PurchaseInvoiceRequestController extends StandardController {
  constructor(purchaseInvoiceRequest) {
    super(purchaseInvoiceRequest);
    this.create = this.create.bind(this);
    this.restore = this.restore.bind(this);
    this.delete = this.delete.bind(this);
  }

  async create(request, response) {
    const { body } = request;
    const purchaseInvoiceRequestDto = new PurchaseInvoiceRequestDto(body);

    return await super.create(request, response, purchaseInvoiceRequestDto);
  }

  async restore(request, response) {
    const { body } = request;
    const purchaseInvoiceRequestDto = new PurchaseInvoiceRequestDto(body);

    return await super.restore(request, response, purchaseInvoiceRequestDto);
  }

  async delete(request, response) {
    const { body } = request;
    const purchaseInvoiceRequestDto = new PurchaseInvoiceRequestDto(body);

    return await super.delete(request, response, purchaseInvoiceRequestDto);
  }
}

export {
  PurchaseInvoiceController,
  PurchaseInvoiceAdvanceController,
  PurchaseInvoiceDtController,
  PurchaseInvoiceImgController,
  PurchaseInvoiceItemDtController,
  PurchaseInvoicePaymentController,
  PurchaseInvoiceRejectController,
  PurchaseInvoiceRequestController
};
