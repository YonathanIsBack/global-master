import {
  PurchaseQuoteAdvanceDto,
  PurchaseQuoteDto,
  PurchaseQuoteImgDto,
  PurchaseQuoteItemDtDto,
  PurchaseQuoteRejectDto,
  PurchaseQuoteRequestDto
} from '../../../dto/tr/purchase/PurchaseQuoteDto.js';
import StandardController from '../../StandardController.js';
import StandardTransactionController from '../../StandardTransactionController.js';

class PurchaseQuoteController extends StandardTransactionController {
  constructor(purchaseQuote) {
    super(purchaseQuote);
    this.create = this.create.bind(this);
    this.restore = this.restore.bind(this);
    this.delete = this.delete.bind(this);
    this.changeStatus = this.changeStatus.bind(this);
    this.changeStatusRequest = this.changeStatusRequest.bind(this);
  }

  async create(request, response) {
    const { body } = request;
    const purchaseQuoteDto = new PurchaseQuoteDto(body);

    return await super.insertTransaction(request, response, purchaseQuoteDto);
  }

  async restore(request, response) {
    const { body } = request;
    const purchaseQuoteDto = new PurchaseQuoteDto(body);

    return await super.restore(request, response, purchaseQuoteDto);
  }

  async delete(request, response) {
    const { body } = request;
    const purchaseQuoteDto = new PurchaseQuoteDto(body);

    return await super.delete(request, response, purchaseQuoteDto);
  }

  async changeStatus(request, response) {
    const {body} = request;
    const purchaseQuoteDto = new PurchaseQuoteDto(body);

    return await super.changeStatus(request, response, purchaseQuoteDto);
  }

  async changeStatusRequest(request, response) {
    const { body } = request;
    const purchaseQuoteDto = new PurchaseQuoteDto(body);

    return await super.changeStatusRequest(request, response, purchaseQuoteDto);
  }
}

class PurchaseQuoteAdvanceController extends StandardController {
  constructor(purchaseQuoteAdvance) {
    super(purchaseQuoteAdvance);
    this.create = this.create.bind(this);
    this.restore = this.restore.bind(this);
    this.delete = this.delete.bind(this);
  }

  async create(request, response) {
    const { body } = request;
    const purchaseQuoteAdvanceDto = new PurchaseQuoteAdvanceDto(body);

    return await super.create(request, response, purchaseQuoteAdvanceDto);
  }

  async restore(request, response) {
    const { body } = request;
    const purchaseQuoteAdvanceDto = new PurchaseQuoteAdvanceDto(body);

    return await super.restore(request, response, purchaseQuoteAdvanceDto);
  }

  async delete(request, response) {
    const { body } = request;
    const purchaseQuoteAdvanceDto = new PurchaseQuoteAdvanceDto(body);

    return await super.delete(request, response, purchaseQuoteAdvanceDto);
  }
}

class PurchaseQuoteImgController extends StandardController {
  constructor(purchaseQuoteImg) {
    super(purchaseQuoteImg);
    this.create = this.create.bind(this);
    this.restore = this.restore.bind(this);
    this.delete = this.delete.bind(this);
  }

  async create(request, response) {
    const { body } = request;
    const purchaseQuoteImgDto = new PurchaseQuoteImgDto(body);

    return await super.create(request, response, purchaseQuoteImgDto);
  }

  async restore(request, response) {
    const { body } = request;
    const purchaseQuoteImgDto = new PurchaseQuoteImgDto(body);

    return await super.restore(request, response, purchaseQuoteImgDto);
  }

  async delete(request, response) {
    const { body } = request;
    const purchaseQuoteImgDto = new PurchaseQuoteImgDto(body);

    return await super.delete(request, response, purchaseQuoteImgDto);
  }
}

class PurchaseQuoteItemDtController extends StandardController {
  constructor(purchaseInvoiceImg) {
    super(purchaseInvoiceImg);
    this.create = this.create.bind(this);
    this.restore = this.restore.bind(this);
    this.delete = this.delete.bind(this);
  }

  async create(request, response) {
    const { body } = request;
    const purchaseQuoteItemDtDto = new PurchaseQuoteItemDtDto(body);

    return await super.create(request, response, purchaseQuoteItemDtDto);
  }

  async restore(request, response) {
    const { body } = request;
    const purchaseQuoteItemDtDto = new PurchaseQuoteItemDtDto(body);

    return await super.restore(request, response, purchaseQuoteItemDtDto);
  }

  async delete(request, response) {
    const { body } = request;
    const purchaseQuoteItemDtDto = new PurchaseQuoteItemDtDto(body);

    return await super.delete(request, response, purchaseQuoteItemDtDto);
  }
}

class PurchaseQuoteRejectController extends StandardController {
  constructor(purchaseQuoteReject) {
    super(purchaseQuoteReject);
    this.create = this.create.bind(this);
    this.restore = this.restore.bind(this);
    this.delete = this.delete.bind(this);
  }

  async create(request, response) {
    const { body } = request;
    const purchaseQuoteRejectDto = new PurchaseQuoteRejectDto(body);

    return await super.create(request, response, purchaseQuoteRejectDto);
  }

  async restore(request, response) {
    const { body } = request;
    const purchaseQuoteRejectDto = new PurchaseQuoteRejectDto(body);

    return await super.restore(request, response, purchaseQuoteRejectDto);
  }

  async delete(request, response) {
    const { body } = request;
    const purchaseQuoteRejectDto = new PurchaseQuoteRejectDto(body);

    return await super.delete(request, response, purchaseQuoteRejectDto);
  }
}
class PurchaseQuoteRequestController extends StandardController {
  constructor(purchaseQuoteRequest) {
    super(purchaseQuoteRequest);
    this.create = this.create.bind(this);
    this.restore = this.restore.bind(this);
    this.delete = this.delete.bind(this);
  }

  async create(request, response) {
    const { body } = request;
    const purchaseQuoteRequestDto = new PurchaseQuoteRequestDto(body);

    return await super.create(request, response, purchaseQuoteRequestDto);
  }

  async restore(request, response) {
    const { body } = request;
    const purchaseQuoteRequestDto = new PurchaseQuoteRequestDto(body);

    return await super.restore(request, response, purchaseQuoteRequestDto);
  }

  async delete(request, response) {
    const { body } = request;
    const purchaseQuoteRequestDto = new PurchaseQuoteRequestDto(body);

    return await super.delete(request, response, purchaseQuoteRequestDto);
  }
}

export {
  PurchaseQuoteController,
  PurchaseQuoteAdvanceController,
  PurchaseQuoteItemDtController,
  PurchaseQuoteImgController,
  PurchaseQuoteRejectController,
  PurchaseQuoteRequestController
};
