import {
  PurchaseOrderAdvanceDto,
  PurchaseOrderDtDto,
  PurchaseOrderDto,
  PurchaseOrderImgDto,
  PurchaseOrderItemDtDto,
  PurchaseOrderRejectDto,
  PurchaseOrderRequestDto
} from '../../../dto/tr/purchase/PurchaseOrderDto.js';
import StandardController from '../../StandardController.js';
import StandardTransactionController from '../../StandardTransactionController.js';

class PurchaseOrderController extends StandardTransactionController {
  constructor(purchaseOrder) {
    super(purchaseOrder);
    this.create = this.create.bind(this);
    this.restore = this.restore.bind(this);
    this.delete = this.delete.bind(this);
    this.changeStatus = this.changeStatus.bind(this);
    this.changeStatusRequest = this.changeStatusRequest.bind(this);
    this.notGroupedSelection = 3;
  }

  async create(request, response) {
    const { body } = request;
    const purchaseOrderDto = new PurchaseOrderDto(body);

    return await super.insertTransaction(request, response, purchaseOrderDto);
  }

  async restore(request, response) {
    const { body } = request;
    const purchaseOrderDto = new PurchaseOrderDto(body);

    return await super.restore(request, response, purchaseOrderDto);
  }

  async delete(request, response) {
    const { body } = request;
    const purchaseOrderDto = new PurchaseOrderDto(body);

    return await super.delete(request, response, purchaseOrderDto);
  }

  async changeStatus(request, response) {
    const {body} = request;
    const purchaseOrderDto = new PurchaseOrderDto(body);

    return await super.changeStatus(request, response, purchaseOrderDto);
  }

  async changeStatusRequest(request, response) {
    const { body } = request;
    const purchaseOrderDto = new PurchaseOrderDto(body);

    return await super.changeStatusRequest(request, response, purchaseOrderDto);
  }
}

class PurchaseOrderAdvanceController extends StandardController {
  constructor(purchaseOrderAdvance) {
    super(purchaseOrderAdvance);
    this.create = this.create.bind(this);
    this.restore = this.restore.bind(this);
    this.delete = this.delete.bind(this);
  }

  async create(request, response) {
    const { body } = request;
    const purchaseOrderAdvanceDto = new PurchaseOrderAdvanceDto(body);

    return await super.create(request, response, purchaseOrderAdvanceDto);
  }

  async restore(request, response) {
    const { body } = request;
    const purchaseOrderAdvanceDto = new PurchaseOrderAdvanceDto(body);

    return await super.restore(request, response, purchaseOrderAdvanceDto);
  }

  async delete(request, response) {
    const { body } = request;
    const purchaseOrderAdvanceDto = new PurchaseOrderAdvanceDto(body);

    return await super.delete(request, response, purchaseOrderAdvanceDto);
  }
}

class PurchaseOrderDtController extends StandardController {
  constructor(purchaseOrderDt) {
    super(purchaseOrderDt);
    this.create = this.create.bind(this);
    this.restore = this.restore.bind(this);
    this.delete = this.delete.bind(this);
  }

  async create(request, response) {
    const { body } = request;
    const purchaseOrderDtDto = new PurchaseOrderDtDto(body);

    return await super.create(request, response, purchaseOrderDtDto);
  }

  async restore(request, response) {
    const { body } = request;
    const purchaseOrderDtDto = new PurchaseOrderDtDto(body);

    return await super.restore(request, response, purchaseOrderDtDto);
  }

  async delete(request, response) {
    const { body } = request;
    const purchaseOrderDtDto = new PurchaseOrderDtDto(body);

    return await super.delete(request, response, purchaseOrderDtDto);
  }
}

class PurchaseOrderImgController extends StandardController {
  constructor(purchaseOrderImg) {
    super(purchaseOrderImg);
    this.create = this.create.bind(this);
    this.restore = this.restore.bind(this);
    this.delete = this.delete.bind(this);
  }

  async create(request, response) {
    const { body } = request;
    const purchaseOrderImgDto = new PurchaseOrderImgDto(body);

    return await super.create(request, response, purchaseOrderImgDto);
  }

  async restore(request, response) {
    const { body } = request;
    const purchaseOrderImgDto = new PurchaseOrderImgDto(body);

    return await super.restore(request, response, purchaseOrderImgDto);
  }

  async delete(request, response) {
    const { body } = request;
    const purchaseOrderImgDto = new PurchaseOrderImgDto(body);

    return await super.delete(request, response, purchaseOrderImgDto);
  }
}
class PurchaseOrderItemDtController extends StandardController {
  constructor(purchaseInvoiceItemDt) {
    super(purchaseInvoiceItemDt);
    this.create = this.create.bind(this);
    this.restore = this.restore.bind(this);
    this.delete = this.delete.bind(this);
  }

  async create(request, response) {
    const { body } = request;
    const purchaseOrderItemDtDto = new PurchaseOrderItemDtDto(body);

    return await super.create(request, response, purchaseOrderItemDtDto);
  }

  async restore(request, response) {
    const { body } = request;
    const purchaseOrderItemDtDto = new PurchaseOrderItemDtDto(body);

    return await super.restore(request, response, purchaseOrderItemDtDto);
  }

  async delete(request, response) {
    const { body } = request;
    const purchaseOrderItemDtDto = new PurchaseOrderItemDtDto(body);

    return await super.delete(request, response, purchaseOrderItemDtDto);
  }
}

class PurchaseOrderRejectController extends StandardController {
  constructor(purchaseOrderReject) {
    super(purchaseOrderReject);
    this.create = this.create.bind(this);
    this.restore = this.restore.bind(this);
    this.delete = this.delete.bind(this);
  }

  async create(request, response) {
    const { body } = request;
    const purchaseOrderRejectDto = new PurchaseOrderRejectDto(body);

    return await super.create(request, response, purchaseOrderRejectDto);
  }

  async restore(request, response) {
    const { body } = request;
    const purchaseOrderRejectDto = new PurchaseOrderRejectDto(body);

    return await super.restore(request, response, purchaseOrderRejectDto);
  }

  async delete(request, response) {
    const { body } = request;
    const purchaseOrderRejectDto = new PurchaseOrderRejectDto(body);

    return await super.delete(request, response, purchaseOrderRejectDto);
  }
}
class PurchaseOrderRequestController extends StandardController {
  constructor(purchaseOrderRequest) {
    super(purchaseOrderRequest);
    this.create = this.create.bind(this);
    this.restore = this.restore.bind(this);
    this.delete = this.delete.bind(this);
  }

  async create(request, response) {
    const { body } = request;
    const purchaseOrderRequestDto = new PurchaseOrderRequestDto(body);

    return await super.create(request, response, purchaseOrderRequestDto);
  }

  async restore(request, response) {
    const { body } = request;
    const purchaseOrderRequestDto = new PurchaseOrderRequestDto(body);

    return await super.restore(request, response, purchaseOrderRequestDto);
  }

  async delete(request, response) {
    const { body } = request;
    const purchaseOrderRequestDto = new PurchaseOrderRequestDto(body);

    return await super.delete(request, response, purchaseOrderRequestDto);
  }
}

export {
  PurchaseOrderController,
  PurchaseOrderAdvanceController,
  PurchaseOrderDtController,
  PurchaseOrderItemDtController,
  PurchaseOrderRejectController,
  PurchaseOrderRequestController
};
