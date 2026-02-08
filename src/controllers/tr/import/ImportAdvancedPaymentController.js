import {
  ImportAdvancedPaymentDtDto,
  ImportAdvancedPaymentDto,
  ImportAdvancedPaymentRejectDto,
  ImportAdvancedPaymentRequestDto
} from '../../../dto/tr/imports/ImportAdvancePaymentDto.js';
import StandardController from '../../StandardController.js';
import StandardTransactionController from '../../StandardTransactionController.js';

class ImportAdvancedPaymentController extends StandardTransactionController {
  constructor(importAdvancedPayment) {
    super(importAdvancedPayment);
    this.create = this.create.bind(this);
    this.restore = this.restore.bind(this);
    this.delete = this.delete.bind(this);
    this.changeStatus = this.changeStatus.bind(this);
    this.changeStatusRequest = this.changeStatusRequest.bind(this);
  }

  async create(request, response) {
    const { body } = request;
    const importAdvancedPaymentDto = new ImportAdvancedPaymentDto(body);

    return await super.insertTransaction(request, response, importAdvancedPaymentDto);
  }

  async restore(request, response) {
    const { body } = request;
    const importAdvancedPaymentDto = new ImportAdvancedPaymentDto(body);

    return await super.restore(request, response, importAdvancedPaymentDto);
  }

  async delete(request, response) {
    const { body } = request;
    const importAdvancedPaymentDto = new ImportAdvancedPaymentDto(body);

    return await super.delete(request, response, importAdvancedPaymentDto);
  }
  async changeStatus(request, response) {
    const {body} = request;
    const importAdvancedPaymentDto = new ImportAdvancedPaymentDto(body);

    return await super.changeStatus(request, response, importAdvancedPaymentDto);
  }

  async changeStatusRequest(request, response) {
    const { body } = request;
    const importAdvancedPaymentDto = new ImportAdvancedPaymentDto(body);

    return await super.changeStatusRequest(request, response, importAdvancedPaymentDto);
  }
}

class ImportAdvancedPaymentDtController extends StandardController {
  constructor(importAdvancedPaymentDt) {
    super(importAdvancedPaymentDt);
    this.create = this.create.bind(this);
    this.restore = this.restore.bind(this);
    this.delete = this.delete.bind(this);
  }

  async create(request, response) {
    const { body } = request;
    const importAdvancedPaymentDtDto = new ImportAdvancedPaymentDtDto(body);

    return await super.create(request, response, importAdvancedPaymentDtDto);
  }

  async restore(request, response) {
    const { body } = request;
    const importAdvancedPaymentDtDto = new ImportAdvancedPaymentDtDto(body);

    return await super.restore(request, response, importAdvancedPaymentDtDto);
  }

  async delete(request, response) {
    const { body } = request;
    const importAdvancedPaymentDtDto = new ImportAdvancedPaymentDtDto(body);

    return await super.delete(request, response, importAdvancedPaymentDtDto);
  }
}

class ImportAdvancedPaymentRejectController extends StandardController {
  constructor(exportSalesAdvPayReject) {
    super(exportSalesAdvPayReject);
    this.create = this.create.bind(this);
    this.restore = this.restore.bind(this);
    this.delete = this.delete.bind(this);
  }

  async create(request, response) {
    const { body } = request;
    const importAdvancedPaymentRejectDto = new ImportAdvancedPaymentRejectDto(body);

    return await super.create(request, response, importAdvancedPaymentRejectDto);
  }

  async restore(request, response) {
    const { body } = request;
    const importAdvancedPaymentRejectDto = new ImportAdvancedPaymentRejectDto(body);

    return await super.restore(request, response, importAdvancedPaymentRejectDto);
  }

  async delete(request, response) {
    const { body } = request;
    const importAdvancedPaymentRejectDto = new ImportAdvancedPaymentRejectDto(body);

    return await super.delete(request, response, importAdvancedPaymentRejectDto);
  }
}

class ImportAdvancedPaymentRequestController extends StandardController {
  constructor(importAdvancedPaymentRequest) {
    super(importAdvancedPaymentRequest);
    this.create = this.create.bind(this);
    this.restore = this.restore.bind(this);
    this.delete = this.delete.bind(this);
  }

  async create(request, response) {
    const { body } = request;
    const importAdvancedPaymentRequestDto = new ImportAdvancedPaymentRequestDto(body);

    return await super.create(request, response, importAdvancedPaymentRequestDto);
  }

  async restore(request, response) {
    const { body } = request;
    const importAdvancedPaymentRequestDto = new ImportAdvancedPaymentRequestDto(body);

    return await super.restore(request, response, importAdvancedPaymentRequestDto);
  }

  async delete(request, response) {
    const { body } = request;
    const importAdvancedPaymentRequestDto = new ImportAdvancedPaymentRequestDto(body);

    return await super.delete(request, response, importAdvancedPaymentRequestDto);
  }
}

export {
  ImportAdvancedPaymentController,
  ImportAdvancedPaymentDtController,
  ImportAdvancedPaymentRejectController,
  ImportAdvancedPaymentRequestController
};

