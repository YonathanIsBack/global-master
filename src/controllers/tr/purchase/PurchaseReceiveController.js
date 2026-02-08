import {
  PurchaseReceiveDtDto,
  PurchaseReceiveDto,
  PurchaseReceiveItemDtDto,
  PurchaseReceiveRejectDto,
  PurchaseReceiveRequestDto
} from '../../../dto/tr/purchase/PurchaseReceiveDto.js';
import StandardController from '../../StandardController.js';
import StandardTransactionController from '../../StandardTransactionController.js';

class PurchaseReceiveController extends StandardTransactionController {
  constructor(purchaseReceive) {
    super(purchaseReceive);
    this.create = this.create.bind(this);
    this.restore = this.restore.bind(this);
    this.delete = this.delete.bind(this);
    this.changeStatus = this.changeStatus.bind(this);
    this.changeStatusRequest = this.changeStatusRequest.bind(this);
  }

  async create(request, response) {
    const { body } = request;
    const purchaseReceiveDto = new PurchaseReceiveDto(body);

    return await super.insertTransaction(request, response, purchaseReceiveDto);
  }

  async restore(request, response) {
    const { body } = request;
    const purchaseReceiveDto = new PurchaseReceiveDto(body);

    return await super.restore(request, response, purchaseReceiveDto);
  }

  async delete(request, response) {
    const { body } = request;
    const purchaseReceiveDto = new PurchaseReceiveDto(body);

    return await super.delete(request, response, purchaseReceiveDto);
  }

  async changeStatus(request, response) {
    const {body} = request;
    const purchaseReceiveDto = new PurchaseReceiveDto(body);

    return await super.changeStatus(request, response, purchaseReceiveDto);
  }

  async changeStatusRequest(request, response) {
    const { body } = request;
    const purchaseReceiveDto = new PurchaseReceiveDto(body);

    return await super.changeStatusRequest(request, response, purchaseReceiveDto);
  }
}

class PurchaseReceiveDtController extends StandardController {
  constructor(purchaseReceiveDt) {
    super(purchaseReceiveDt);
    this.create = this.create.bind(this);
    this.restore = this.restore.bind(this);
    this.delete = this.delete.bind(this);
  }

  async create(request, response) {
    const { body } = request;
    const purchaseReceiveDtDto = new PurchaseReceiveDtDto(body);

    return await super.create(request, response, purchaseReceiveDtDto);
  }

  async restore(request, response) {
    const { body } = request;
    const purchaseReceiveDtDto = new PurchaseReceiveDtDto(body);

    return await super.restore(request, response, purchaseReceiveDtDto);
  }

  async delete(request, response) {
    const { body } = request;
    const purchaseReceiveDtDto = new PurchaseReceiveDtDto(body);

    return await super.delete(request, response, purchaseReceiveDtDto);
  }
}

class PurchaseReceiveItemDtController extends StandardController {
  constructor(purchaseReceiveItemDt) {
    super(purchaseReceiveItemDt);
    this.create = this.create.bind(this);
    this.restore = this.restore.bind(this);
    this.delete = this.delete.bind(this);
  }

  async create(request, response) {
    const { body } = request;
    const purchaseReceiveItemDtDto = new PurchaseReceiveItemDtDto(body);

    return await super.create(request, response, purchaseReceiveItemDtDto);
  }

  async restore(request, response) {
    const { body } = request;
    const purchaseReceiveItemDtDto = new PurchaseReceiveItemDtDto(body);

    return await super.restore(request, response, purchaseReceiveItemDtDto);
  }

  async delete(request, response) {
    const { body } = request;
    const purchaseReceiveItemDtDto = new PurchaseReceiveItemDtDto(body);

    return await super.delete(request, response, purchaseReceiveItemDtDto);
  }
}
class PurchaseReceiveRejectController extends StandardController {
  constructor(purchaseReceiveReject) {
    super(purchaseReceiveReject);
    this.create = this.create.bind(this);
    this.restore = this.restore.bind(this);
    this.delete = this.delete.bind(this);
  }

  async create(request, response) {
    const { body } = request;
    const purchaseReceiveRejectDto = new PurchaseReceiveRejectDto(body);

    return await super.create(request, response, purchaseReceiveRejectDto);
  }

  async restore(request, response) {
    const { body } = request;
    const purchaseReceiveRejectDto = new PurchaseReceiveRejectDto(body);

    return await super.restore(request, response, purchaseReceiveRejectDto);
  }

  async delete(request, response) {
    const { body } = request;
    const purchaseReceiveRejectDto = new PurchaseReceiveRejectDto(body);

    return await super.delete(request, response, purchaseReceiveRejectDto);
  }
}
class PurchaseReceiveRequestController extends StandardController {
  constructor(purchaseReceiveRequest) {
    super(purchaseReceiveRequest);
    this.create = this.create.bind(this);
    this.restore = this.restore.bind(this);
    this.delete = this.delete.bind(this);
  }

  async create(request, response) {
    const { body } = request;
    const purchaseReceiveRequestDto = new PurchaseReceiveRequestDto(body);

    return await super.create(request, response, purchaseReceiveRequestDto);
  }

  async restore(request, response) {
    const { body } = request;
    const purchaseReceiveRequestDto = new PurchaseReceiveRequestDto(body);

    return await super.restore(request, response, purchaseReceiveRequestDto);
  }

  async delete(request, response) {
    const { body } = request;
    const purchaseReceiveRequestDto = new PurchaseReceiveRequestDto(body);

    return await super.delete(request, response, purchaseReceiveRequestDto);
  }
}

export {
  PurchaseReceiveController,
  PurchaseReceiveDtController,
  PurchaseReceiveItemDtController,
  PurchaseReceiveRejectController,
  PurchaseReceiveRequestController
};
