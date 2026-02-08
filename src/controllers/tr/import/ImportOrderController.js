import {
  ImportOrderAdvanceDto,
  ImportOrderCreditNoteDto,
  ImportOrderDtDto,
  ImportOrderDto,
  ImportOrderItemDtDto,
  ImportOrderRejectDto,
  ImportOrderRequestDto
} from '../../../dto/tr/imports/ImportOrderDto.js';
import StandardController from '../../StandardController.js';
import StandardTransactionController from '../../StandardTransactionController.js';

class ImportOrderController extends StandardTransactionController {
  constructor(importOrder) {
    super(importOrder);
    this.create = this.create.bind(this);
    this.restore = this.restore.bind(this);
    this.delete = this.delete.bind(this);
    this.changeStatus = this.changeStatus.bind(this);
    this.changeStatusRequest = this.changeStatusRequest.bind(this);
  }

  async create(request, response) {
    const { body } = request;
    const importOrderDto = new ImportOrderDto(body);

    return await super.insertTransaction(request, response, importOrderDto);
  }

  async restore(request, response) {
    const { body } = request;
    const importOrderDto = new ImportOrderDto(body);

    return await super.restore(request, response, importOrderDto);
  }

  async delete(request, response) {
    const { body } = request;
    const importOrderDto = new ImportOrderDto(body);

    return await super.delete(request, response, importOrderDto);
  }

  async changeStatus(request, response) {
    const {body} = request;
    const importOrderDto = new ImportOrderDto(body);

    return await super.changeStatus(request, response, importOrderDto);
  }

  async changeStatusRequest(request, response) {
    const { body } = request;
    const importOrderDto = new ImportOrderDto(body);

    return await super.changeStatusRequest(request, response, importOrderDto);
  }
}

class ImportOrderAdvanceController extends StandardController {
  constructor(importOrderAdvanceDto) {
    super(importOrderAdvanceDto);
    this.create = this.create.bind(this);
    this.restore = this.restore.bind(this);
    this.delete = this.delete.bind(this);
  }

  async create(request, response) {
    const { body } = request;
    const importOrderAdvanceDto = new ImportOrderAdvanceDto(body);

    return await super.create(request, response, importOrderAdvanceDto);
  }

  async restore(request, response) {
    const { body } = request;
    const importOrderAdvanceDto = new ImportOrderAdvanceDto(body);

    return await super.restore(request, response, importOrderAdvanceDto);
  }

  async delete(request, response) {
    const { body } = request;
    const importOrderAdvanceDto = new ImportOrderAdvanceDto(body);

    return await super.delete(request, response, importOrderAdvanceDto);
  }
}

class ImportOrderCreditNoteController extends StandardController {
  constructor(importOrderCreditNote) {
    super(importOrderCreditNote);
    this.create = this.create.bind(this);
    this.restore = this.restore.bind(this);
    this.delete = this.delete.bind(this);
  }

  async create(request, response) {
    const { body } = request;
    const importOrderCreditNoteDto = new ImportOrderCreditNoteDto(body);

    return await super.create(request, response, importOrderCreditNoteDto);
  }

  async restore(request, response) {
    const { body } = request;
    const importInvoiceCreditNoteDto = new ImportOrderCreditNoteDto(body);

    return await super.restore(request, response, importInvoiceCreditNoteDto);
  }

  async delete(request, response) {
    const { body } = request;
    const importInvoiceCreditNoteDto = new ImportOrderCreditNoteDto(body);

    return await super.delete(request, response, importInvoiceCreditNoteDto);
  }
}

class ImportOrderDtController extends StandardController {
  constructor(importOrderDt) {
    super(importOrderDt);
    this.create = this.create.bind(this);
    this.restore = this.restore.bind(this);
    this.delete = this.delete.bind(this);
  }

  async create(request, response) {
    const { body } = request;
    const importOrderDtDto = new ImportOrderDtDto(body);

    return await super.create(request, response, importOrderDtDto);
  }

  async restore(request, response) {
    const { body } = request;
    const importOrderDtDto = new ImportOrderDtDto(body);

    return await super.restore(request, response, importOrderDtDto);
  }

  async delete(request, response) {
    const { body } = request;
    const importOrderDtDto = new ImportOrderDtDto(body);

    return await super.delete(request, response, importOrderDtDto);
  }
}
class ImportOrderItemDtController extends StandardController {
  constructor(importOrderItemDt) {
    super(importOrderItemDt);
    this.create = this.create.bind(this);
    this.restore = this.restore.bind(this);
    this.delete = this.delete.bind(this);
  }

  async create(request, response) {
    const { body } = request;
    const importOrderItemDtDto = new ImportOrderItemDtDto(body);

    return await super.create(request, response, importOrderItemDtDto);
  }

  async restore(request, response) {
    const { body } = request;
    const importOrderItemDtDto = new ImportOrderItemDtDto(body);

    return await super.restore(request, response, importOrderItemDtDto);
  }

  async delete(request, response) {
    const { body } = request;
    const importOrderItemDtDto = new ImportOrderItemDtDto(body);

    return await super.delete(request, response, importOrderItemDtDto);
  }
}

class ImportOrderRejectController extends StandardController {
  constructor(importOrderReject) {
    super(importOrderReject);
    this.create = this.create.bind(this);
    this.restore = this.restore.bind(this);
    this.delete = this.delete.bind(this);
  }

  async create(request, response) {
    const { body } = request;
    const importOrderRejectDto = new ImportOrderRejectDto(body);

    return await super.create(request, response, importOrderRejectDto);
  }

  async restore(request, response) {
    const { body } = request;
    const importOrderRejectDto = new ImportOrderRejectDto(body);

    return await super.restore(request, response, importOrderRejectDto);
  }

  async delete(request, response) {
    const { body } = request;
    const importOrderRejectDto = new ImportOrderRejectDto(body);

    return await super.delete(request, response, importOrderRejectDto);
  }
}

class ImportOrderRequestController extends StandardController {
  constructor(importOrderRequest) {
    super(importOrderRequest);
    this.create = this.create.bind(this);
    this.restore = this.restore.bind(this);
    this.delete = this.delete.bind(this);
  }

  async create(request, response) {
    const { body } = request;
    const importOrderRequestDto = new ImportOrderRequestDto(body);

    return await super.create(request, response, importOrderRequestDto);
  }

  async restore(request, response) {
    const { body } = request;
    const importOrderRequestDto = new ImportOrderRequestDto(body);

    return await super.restore(request, response, importOrderRequestDto);
  }

  async delete(request, response) {
    const { body } = request;
    const importOrderRequestDto = new ImportOrderRequestDto(body);

    return await super.delete(request, response, importOrderRequestDto);
  }
}

export {
  ImportOrderController,
  ImportOrderAdvanceController,
  ImportOrderCreditNoteController,
  ImportOrderDtController,
  ImportOrderItemDtController,
  ImportOrderRejectController,
  ImportOrderRequestController
};
