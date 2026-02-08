import {
  SalesOrderDto,
  SalesOrderAdvanceDto,
  SalesOrderDepositDto,
  SalesOrderDtDto,
  SalesOrderItemDtDto,
  SalesOrderRejectDto,
  SalesOrderRequestDto
} from '../../../dto/tr/sales/SalesOrderDto.js';
import StandardController from '../../StandardController.js';
import StandardTransactionController from '../../StandardTransactionController.js';

class SalesOrderController extends StandardTransactionController {
  constructor(salesOrder) {
    super(salesOrder);
    this.create = this.create.bind(this);
    this.restore = this.restore.bind(this);
    this.delete = this.delete.bind(this);
    this.changeStatus = this.changeStatus.bind(this);
    this.changeStatusRequest = this.changeStatusRequest.bind(this);
  }

  async create(request, response) {
    const { body } = request;
    const salesOrderDto = new SalesOrderDto(body);

    return await super.insertTransaction(request, response, salesOrderDto);
  }

  async restore(request, response) {
    const { body } = request;
    const salesOrderDto = new SalesOrderDto(body);

    return await super.restore(request, response, salesOrderDto);
  }

  async delete(request, response) {
    const { body } = request;
    const salesOrderDto = new SalesOrderDto(body);

    return await super.delete(request, response, salesOrderDto);
  }

  async changeStatus(request, response) {
    const {body} = request;
    const salesOrderDto = new SalesOrderDto(body);

    return await super.changeStatus(request, response, salesOrderDto);
  }

  async changeStatusRequest(request, response) {
    const { body } = request;
    const salesOrderDto = new SalesOrderDto(body);

    return await super.changeStatusRequest(request, response, salesOrderDto);
  }
}

class SalesOrderAdvanceController extends StandardController {
  constructor(salesOrderAdvance) {
    super(salesOrderAdvance);
    this.create = this.create.bind(this);
    this.restore = this.restore.bind(this);
    this.delete = this.delete.bind(this);
  }

  async create(request, response) {
    const { body } = request;
    const salesOrderAdvanceDto = new SalesOrderAdvanceDto(body);

    return await super.create(request, response, salesOrderAdvanceDto);
  }

  async restore(request, response) {
    const { body } = request;
    const salesOrderAdvanceDto = new SalesOrderAdvanceDto(body);

    return await super.restore(request, response, salesOrderAdvanceDto);
  }

  async delete(request, response) {
    const { body } = request;
    const salesOrderAdvanceDto = new SalesOrderAdvanceDto(body);

    return await super.delete(request, response, salesOrderAdvanceDto);
  }
}
class SalesOrderDepositController extends StandardController {
  constructor(salesOrderDeposit) {
    super(salesOrderDeposit);
    this.create = this.create.bind(this);
    this.restore = this.restore.bind(this);
    this.delete = this.delete.bind(this);
  }

  async create(request, response) {
    const { body } = request;
    const salesOrderDepositDto = new SalesOrderDepositDto(body);

    return await super.create(request, response, salesOrderDepositDto);
  }

  async restore(request, response) {
    const { body } = request;
    const salesOrderDepositDto = new SalesOrderDepositDto(body);

    return await super.restore(request, response, salesOrderDepositDto);
  }

  async delete(request, response) {
    const { body } = request;
    const salesOrderDepositDto = new SalesOrderDepositDto(body);

    return await super.delete(request, response, salesOrderDepositDto);
  }
}
class SalesOrderDtController extends StandardController {
  constructor(salesOrderDt) {
    super(salesOrderDt);
    this.create = this.create.bind(this);
    this.restore = this.restore.bind(this);
    this.delete = this.delete.bind(this);
  }

  async create(request, response) {
    const { body } = request;
    const salesOrderDtDto = new SalesOrderDtDto(body);

    return await super.create(request, response, salesOrderDtDto);
  }

  async restore(request, response) {
    const { body } = request;
    const salesOrderDtDto = new SalesOrderDtDto(body);

    return await super.restore(request, response, salesOrderDtDto);
  }

  async delete(request, response) {
    const { body } = request;
    const salesOrderDtDto = new SalesOrderDtDto(body);

    return await super.delete(request, response, salesOrderDtDto);
  }
}
class SalesOrderItemDtController extends StandardController {
  constructor(salesOrderItemDt) {
    super(salesOrderItemDt);
    this.create = this.create.bind(this);
    this.restore = this.restore.bind(this);
    this.delete = this.delete.bind(this);
  }

  async create(request, response) {
    const { body } = request;
    const salesOrderItemDtDto = new SalesOrderItemDtDto(body);

    return await super.create(request, response, salesOrderItemDtDto);
  }

  async restore(request, response) {
    const { body } = request;
    const salesOrderItemDtDto = new SalesOrderItemDtDto(body);

    return await super.restore(request, response, salesOrderItemDtDto);
  }

  async delete(request, response) {
    const { body } = request;
    const salesOrderItemDtDto = new SalesOrderItemDtDto(body);

    return await super.delete(request, response, salesOrderItemDtDto);
  }
}

class SalesOrderRejectController extends StandardController {
  constructor(salesOrderReject) {
    super(salesOrderReject);
    this.create = this.create.bind(this);
    this.restore = this.restore.bind(this);
    this.delete = this.delete.bind(this);
  }

  async create(request, response) {
    const { body } = request;
    const salesOrderRejectDto = new SalesOrderRejectDto(body);

    return await super.create(request, response, salesOrderRejectDto);
  }

  async restore(request, response) {
    const { body } = request;
    const salesOrderRejectDto = new SalesOrderRejectDto(body);

    return await super.restore(request, response, salesOrderRejectDto);
  }

  async delete(request, response) {
    const { body } = request;
    const salesOrderRejectDto = new SalesOrderRejectDto(body);

    return await super.delete(request, response, salesOrderRejectDto);
  }
}

class SalesOrderRequestController extends StandardController {
  constructor(salesOrderRequestDto) {
    super(salesOrderRequestDto);
    this.create = this.create.bind(this);
    this.restore = this.restore.bind(this);
    this.delete = this.delete.bind(this);
  }

  async create(request, response) {
    const { body } = request;
    const salesOrderRequestDto = new SalesOrderRequestDto(body);

    return await super.create(request, response, salesOrderRequestDto);
  }

  async restore(request, response) {
    const { body } = request;
    const salesOrderRequestDto = new SalesOrderRequestDto(body);

    return await super.restore(request, response, salesOrderRequestDto);
  }

  async delete(request, response) {
    const { body } = request;
    const salesOrderRequestDto = new SalesOrderRequestDto(body);

    return await super.delete(request, response, salesOrderRequestDto);
  }
}

export {
  SalesOrderController,
  SalesOrderAdvanceController,
  SalesOrderDepositController,
  SalesOrderDtController,
  SalesOrderItemDtController,
  SalesOrderRejectController,
  SalesOrderRequestController
};
