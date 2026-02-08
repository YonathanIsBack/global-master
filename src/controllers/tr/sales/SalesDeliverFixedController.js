import {
  SalesDeliveryFixedDtDto,
  SalesDeliveryFixedDto,
  SalesDeliveryFixeditemDtDto,
  SalesDeliveryFixedRejectDto,
  SalesDeliveryFixedRequestDto
} from '../../../dto/tr/sales/SalesDeliveryFixedDto.js';
import StandardController from '../../StandardController.js';
import StandardTransactionController from '../../StandardTransactionController.js';

class SalesDeliveryFixedController extends StandardTransactionController {
  constructor(salesDeliveryFixed) {
    super(salesDeliveryFixed);
    this.create = this.create.bind(this);
    this.restore = this.restore.bind(this);
    this.delete = this.delete.bind(this);
    this.changeStatus = this.changeStatus.bind(this);
    this.changeStatusRequest = this.changeStatusRequest.bind(this);
  }

  async create(request, response) {
    const { body } = request;
    const salesDeliveryFixedDto = new SalesDeliveryFixedDto(body);

    return await super.insertTransaction(request, response, salesDeliveryFixedDto);
  }

  async restore(request, response) {
    const { body } = request;
    const salesDeliveryFixedDto = new SalesDeliveryFixedDto(body);

    return await super.restore(request, response, salesDeliveryFixedDto);
  }

  async delete(request, response) {
    const { body } = request;
    const salesDeliveryFixedDto = new SalesDeliveryFixedDto(body);

    return await super.delete(request, response, salesDeliveryFixedDto);
  }
  async changeStatus(request, response) {
    const {body} = request;
    const salesDeliveryFixedDto = new SalesDeliveryFixedDto(body);

    return await super.changeStatus(request, response, salesDeliveryFixedDto);
  }

  async changeStatusRequest(request, response) {
    const { body } = request;
    const salesDeliveryFixedDto = new SalesDeliveryFixedDto(body);

    return await super.changeStatusRequest(request, response, salesDeliveryFixedDto);
  }
}

class SalesDeliveryFixedDtController extends StandardController {
  constructor(salesDeliveryFixedDt) {
    super(salesDeliveryFixedDt);
    this.create = this.create.bind(this);
    this.restore = this.restore.bind(this);
    this.delete = this.delete.bind(this);
  }

  async create(request, response) {
    const { body } = request;
    const salesDeliveryFixedDtDto = new SalesDeliveryFixedDtDto(body);

    return await super.create(request, response, salesDeliveryFixedDtDto);
  }

  async restore(request, response) {
    const { body } = request;
    const salesDeliveryFixedDtDto = new SalesDeliveryFixedDtDto(body);

    return await super.restore(request, response, salesDeliveryFixedDtDto);
  }

  async delete(request, response) {
    const { body } = request;
    const salesDeliveryFixedDtDto = new SalesDeliveryFixedDtDto(body);

    return await super.delete(request, response, salesDeliveryFixedDtDto);
  }
}
class SalesDeliveryFixeditemDtController extends StandardController {
  constructor(salesDeliveryFixeditemDt) {
    super(salesDeliveryFixeditemDt);
    this.create = this.create.bind(this);
    this.restore = this.restore.bind(this);
    this.delete = this.delete.bind(this);
  }

  async create(request, response) {
    const { body } = request;
    const salesDeliveryFixeditemDt = new SalesDeliveryFixeditemDtDto(body);

    return await super.create(request, response, salesDeliveryFixeditemDt);
  }

  async restore(request, response) {
    const { body } = request;
    const salesDeliveryFixeditemDt = new SalesDeliveryFixeditemDtDto(body);

    return await super.restore(request, response, salesDeliveryFixeditemDt);
  }

  async delete(request, response) {
    const { body } = request;
    const salesDeliveryFixeditemDt = new SalesDeliveryFixeditemDtDto(body);

    return await super.delete(request, response, salesDeliveryFixeditemDt);
  }
}

class SalesDeliveryFixedRejectController extends StandardController {
  constructor(salesDeliveryFixedReject) {
    super(salesDeliveryFixedReject);
    this.create = this.create.bind(this);
    this.restore = this.restore.bind(this);
    this.delete = this.delete.bind(this);
  }

  async create(request, response) {
    const { body } = request;
    const salesDeliveryFixedRejectDto = new SalesDeliveryFixedRejectDto(body);

    return await super.create(request, response, salesDeliveryFixedRejectDto);
  }

  async restore(request, response) {
    const { body } = request;
    const salesDeliveryFixedRejectDto = new SalesDeliveryFixedRejectDto(body);

    return await super.restore(request, response, salesDeliveryFixedRejectDto);
  }

  async delete(request, response) {
    const { body } = request;
    const salesDeliveryFixedRejectDto = new SalesDeliveryFixedRejectDto(body);

    return await super.delete(request, response, salesDeliveryFixedRejectDto);
  }
}

class SalesDeliveryFixedRequestController extends StandardController {
  constructor(salesDeliveryFixedRequest) {
    super(salesDeliveryFixedRequest);
    this.create = this.create.bind(this);
    this.restore = this.restore.bind(this);
    this.delete = this.delete.bind(this);
  }

  async create(request, response) {
    const { body } = request;
    const salesDeliveryFixedRequestDto = new SalesDeliveryFixedRequestDto(body);

    return await super.create(request, response, salesDeliveryFixedRequestDto);
  }

  async restore(request, response) {
    const { body } = request;
    const salesDeliveryFixedRequestDto = new SalesDeliveryFixedRequestDto(body);

    return await super.restore(request, response, salesDeliveryFixedRequestDto);
  }

  async delete(request, response) {
    const { body } = request;
    const salesDeliveryFixedRequestDto = new SalesDeliveryFixedRequestDto(body);

    return await super.delete(request, response, salesDeliveryFixedRequestDto);
  }
}

export {
  SalesDeliveryFixedController,
  SalesDeliveryFixedDtController,
  SalesDeliveryFixeditemDtController,
  SalesDeliveryFixedRejectController,
  SalesDeliveryFixedRequestController
};
