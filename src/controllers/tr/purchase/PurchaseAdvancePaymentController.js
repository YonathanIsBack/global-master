import { PurchaseAdvancePaymentDtDto, PurchaseAdvancePaymentDto, PurchaseAdvancePaymentImgDto, PurchaseAdvancePaymentRejectDto, PurchaseAdvancePaymentRequestDto } from '../../../dto/tr/purchase/PurchaseAdvancePaymentDto.js';
import StandardController from '../../StandardController.js';
import StandardTransactionController from '../../StandardTransactionController.js';

class PurchaseAdvancePaymentController extends StandardTransactionController {
  constructor(purchaseAdvancedPayment) {
    super(purchaseAdvancedPayment);
    this.create = this.create.bind(this);
    this.restore = this.restore.bind(this);
    this.delete = this.delete.bind(this);
    this.changeStatus = this.changeStatus.bind(this);
    this.changeStatusRequest = this.changeStatusRequest.bind(this);
  }

  async create(request, response) {
    const { body } = request;
    const purchaseAdvancePaymentDto = new PurchaseAdvancePaymentDto(body);

    return await super.insertTransaction(request, response, purchaseAdvancePaymentDto);
  }

  async restore(request, response) {
    const { body } = request;
    const purchaseAdvancePaymentDto = new PurchaseAdvancePaymentDto(body);

    return await super.restore(request, response, purchaseAdvancePaymentDto);
  }

  async delete(request, response) {
    const { body } = request;
    const purchaseAdvancePaymentDto = new PurchaseAdvancePaymentDto(body);

    return await super.delete(request, response, purchaseAdvancePaymentDto);
  }

  async changeStatus(request, response) {
    const {body} = request;
    const purchaseAdvancePaymentDto = new PurchaseAdvancePaymentDto(body);

    return await super.changeStatus(request, response, purchaseAdvancePaymentDto);
  }

  async changeStatusRequest(request, response) {
    const { body } = request;
    const purchaseAdvancePaymentDto = new PurchaseAdvancePaymentDto(body);

    return await super.changeStatusRequest(request, response, purchaseAdvancePaymentDto);
  }
}

class PurchaseAdvancePaymentDtController extends StandardController {
  constructor(purchaseAdvancedPaymentDt) {
    super(purchaseAdvancedPaymentDt);
    this.create = this.create.bind(this);
    this.restore = this.restore.bind(this);
    this.delete = this.delete.bind(this);
  }

  async create(request, response) {
    const { body } = request;
    const purchaseAdvancePaymentDtDto = new PurchaseAdvancePaymentDtDto(body);

    return await super.create(request, response, purchaseAdvancePaymentDtDto);
  }

  async restore(request, response) {
    const { body } = request;
    const purchaseAdvancePaymentDtDto = new PurchaseAdvancePaymentDtDto(body);

    return await super.restore(request, response, purchaseAdvancePaymentDtDto);
  }

  async delete(request, response) {
    const { body } = request;
    const purchaseAdvancePaymentDtDto = new PurchaseAdvancePaymentDtDto(body);

    return await super.delete(request, response, purchaseAdvancePaymentDtDto);
  }
}

class PurchaseAdvancePaymentImgController extends StandardController {
  constructor(purchaseAdvancedPaymentImg) {
    super(purchaseAdvancedPaymentImg);
    this.create = this.create.bind(this);
    this.restore = this.restore.bind(this);
    this.delete = this.delete.bind(this);
  }

  async create(request, response) {
    const { body } = request;
    const purchaseAdvancePaymentImgDto = new PurchaseAdvancePaymentImgDto(body);

    return await super.create(request, response, purchaseAdvancePaymentImgDto);
  }

  async restore(request, response) {
    const { body } = request;
    const purchaseAdvancePaymentImgDto = new PurchaseAdvancePaymentImgDto(body);

    return await super.restore(request, response, purchaseAdvancePaymentImgDto);
  }

  async delete(request, response) {
    const { body } = request;
    const purchaseAdvancePaymentImgDto = new PurchaseAdvancePaymentImgDto(body);

    return await super.delete(request, response, purchaseAdvancePaymentImgDto);
  }
}
class PurchaseAdvancePaymentRejectController extends StandardController {
  constructor(purchaseAdvancedPaymentReject) {
    super(purchaseAdvancedPaymentReject);
    this.create = this.create.bind(this);
    this.restore = this.restore.bind(this);
    this.delete = this.delete.bind(this);
  }

  async create(request, response) {
    const { body } = request;
    const purchaseAdvancePaymentRejectDto = new PurchaseAdvancePaymentRejectDto(body);

    return await super.create(request, response, purchaseAdvancePaymentRejectDto);
  }

  async restore(request, response) {
    const { body } = request;
    const purchaseAdvancePaymentRejectDto = new PurchaseAdvancePaymentRejectDto(body);

    return await super.restore(request, response, purchaseAdvancePaymentRejectDto);
  }

  async delete(request, response) {
    const { body } = request;
    const purchaseAdvancePaymentRejectDto = new PurchaseAdvancePaymentRejectDto(body);

    return await super.delete(request, response, purchaseAdvancePaymentRejectDto);
  }
}
class PurchaseAdvancePaymentRequestController extends StandardController {
  constructor(purchaseAdvancedPaymentRequest) {
    super(purchaseAdvancedPaymentRequest);
    this.create = this.create.bind(this);
    this.restore = this.restore.bind(this);
    this.delete = this.delete.bind(this);
  }

  async create(request, response) {
    const { body } = request;
    const purchaseAdvancePaymentRequestDto = new PurchaseAdvancePaymentRequestDto(body);

    return await super.create(request, response, purchaseAdvancePaymentRequestDto);
  }

  async restore(request, response) {
    const { body } = request;
    const purchaseAdvancePaymentRequestDto = new PurchaseAdvancePaymentRequestDto(body);

    return await super.restore(request, response, purchaseAdvancePaymentRequestDto);
  }

  async delete(request, response) {
    const { body } = request;
    const purchaseAdvancePaymentRequestDto = new PurchaseAdvancePaymentRequestDto(body);

    return await super.delete(request, response, purchaseAdvancePaymentRequestDto);
  }
}

export {
  PurchaseAdvancePaymentController,
  PurchaseAdvancePaymentDtController,
  PurchaseAdvancePaymentImgController,
  PurchaseAdvancePaymentRejectController,
  PurchaseAdvancePaymentRequestController
};
