import {
  PurchaseRetrunRequestDto,
  PurchaseReturnDtDto,
  PurchaseReturnDto,
  PurchaseReturnImgDto,
  PurchaseReturnItemDtDto,
  PurchaseReturnRejectDto
} from '../../../dto/tr/purchase/PurchaseReturnDto.js';
import StandardController from '../../StandardController.js';
import StandardTransactionController from '../../StandardTransactionController.js';

class PurchaseReturnController extends StandardTransactionController {
  constructor(purchaseReturn) {
    super(purchaseReturn);
    this.create = this.create.bind(this);
    this.restore = this.restore.bind(this);
    this.delete = this.delete.bind(this);
    this.changeStatus = this.changeStatus.bind(this);
    this.changeStatusRequest = this.changeStatusRequest.bind(this);
  }

  async create(request, response) {
    const { body } = request;
    const purchaseReturnDto = new PurchaseReturnDto(body);

    return await super.insertTransaction(request, response, purchaseReturnDto);
  }

  async restore(request, response) {
    const { body } = request;
    const purchaseReturnDto = new PurchaseReturnDto(body);

    return await super.restore(request, response, purchaseReturnDto);
  }

  async delete(request, response) {
    const { body } = request;
    const purchaseReturnDto = new PurchaseReturnDto(body);

    return await super.delete(request, response, purchaseReturnDto);
  }

  async changeStatus(request, response) {
    const {body} = request;
    const purchaseReturnDto = new PurchaseReturnDto(body);

    return await super.changeStatus(request, response, purchaseReturnDto);
  }

  async changeStatusRequest(request, response) {
    const { body } = request;
    const purchaseReturnDto = new PurchaseReturnDto(body);

    return await super.changeStatusRequest(request, response, purchaseReturnDto);
  }
}

class PurchaseReturnDtController extends StandardController {
  constructor(purchaseReturnDt) {
    super(purchaseReturnDt);
    this.create = this.create.bind(this);
    this.restore = this.restore.bind(this);
    this.delete = this.delete.bind(this);
  }

  async create(request, response) {
    const { body } = request;
    const purchaseReturnDtDto = new PurchaseReturnDtDto(body);

    return await super.create(request, response, purchaseReturnDtDto);
  }

  async restore(request, response) {
    const { body } = request;
    const purchaseReturnDtDto = new PurchaseReturnDtDto(body);

    return await super.restore(request, response, purchaseReturnDtDto);
  }

  async delete(request, response) {
    const { body } = request;
    const purchaseReturnDtDto = new PurchaseReturnDtDto(body);

    return await super.delete(request, response, purchaseReturnDtDto);
  }
}

class PurchaseReturnImgController extends StandardController {
  constructor(purchaseReturnImg) {
    super(purchaseReturnImg);
    this.create = this.create.bind(this);
    this.restore = this.restore.bind(this);
    this.delete = this.delete.bind(this);
  }

  async create(request, response) {
    const { body } = request;
    const purchaseReturnImgDto = new PurchaseReturnImgDto(body);

    return await super.create(request, response, purchaseReturnImgDto);
  }

  async restore(request, response) {
    const { body } = request;
    const purchaseReturnImgDto = new PurchaseReturnImgDto(body);

    return await super.restore(request, response, purchaseReturnImgDto);
  }

  async delete(request, response) {
    const { body } = request;
    const purchaseReturnImgDto = new PurchaseReturnImgDto(body);

    return await super.delete(request, response, purchaseReturnImgDto);
  }
}

class PurchaseReturnItemDtController extends StandardController {
  constructor(purchaseReturnItemDt) {
    super(purchaseReturnItemDt);
    this.create = this.create.bind(this);
    this.restore = this.restore.bind(this);
    this.delete = this.delete.bind(this);
  }

  async create(request, response) {
    const { body } = request;
    const purchaseReturnItemDtDto = new PurchaseReturnItemDtDto(body);

    return await super.create(request, response, purchaseReturnItemDtDto);
  }

  async restore(request, response) {
    const { body } = request;
    const purchaseReturnItemDtDto = new PurchaseReturnItemDtDto(body);

    return await super.restore(request, response, purchaseReturnItemDtDto);
  }

  async delete(request, response) {
    const { body } = request;
    const purchaseReturnItemDtDto = new PurchaseReturnItemDtDto(body);

    return await super.delete(request, response, purchaseReturnItemDtDto);
  }
}

class PurchaseReturnRejectController extends StandardController {
  constructor(purchaseReceiveReject) {
    super(purchaseReceiveReject);
    this.create = this.create.bind(this);
    this.restore = this.restore.bind(this);
    this.delete = this.delete.bind(this);
  }

  async create(request, response) {
    const { body } = request;
    const purchaseReturnRejectDto = new PurchaseReturnRejectDto(body);

    return await super.create(request, response, purchaseReturnRejectDto);
  }

  async restore(request, response) {
    const { body } = request;
    const purchaseReturnRejectDto = new PurchaseReturnRejectDto(body);

    return await super.restore(request, response, purchaseReturnRejectDto);
  }

  async delete(request, response) {
    const { body } = request;
    const purchaseReturnRejectDto = new PurchaseReturnRejectDto(body);

    return await super.delete(request, response, purchaseReturnRejectDto);
  }
}
class PurchaseRetrunRequestController extends StandardController {
  constructor(purchaseReceiveRequest) {
    super(purchaseReceiveRequest);
    this.create = this.create.bind(this);
    this.restore = this.restore.bind(this);
    this.delete = this.delete.bind(this);
  }

  async create(request, response) {
    const { body } = request;
    const purchaseRetrunRequestDto = new PurchaseRetrunRequestDto(body);

    return await super.create(request, response, purchaseRetrunRequestDto);
  }

  async restore(request, response) {
    const { body } = request;
    const purchaseRetrunRequestDto = new PurchaseRetrunRequestDto(body);

    return await super.restore(request, response, purchaseRetrunRequestDto);
  }

  async delete(request, response) {
    const { body } = request;
    const purchaseRetrunRequestDto = new PurchaseRetrunRequestDto(body);

    return await super.delete(request, response, purchaseRetrunRequestDto);
  }
}

export {
  PurchaseRetrunRequestController, PurchaseReturnController,
  PurchaseReturnDtController,
  PurchaseReturnImgController,
  PurchaseReturnItemDtController,
  PurchaseReturnRejectController
};

