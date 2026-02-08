import {
  ImportClearanceDtDto,
  ImportClearanceDto,
  ImportClearanceItemDtDto,
  ImportClearanceRejectDto,
  ImportClearanceRequestDto
} from '../../../dto/tr/imports/ImportClearanceDto.js';
import StandardController from '../../StandardController.js';
import StandardTransactionController from '../../StandardTransactionController.js';

class ImportClearanceController extends StandardTransactionController {
  constructor(importClearance) {
    super(importClearance);
    this.create = this.create.bind(this);
    this.restore = this.restore.bind(this);
    this.delete = this.delete.bind(this);
    this.changeStatus = this.changeStatus.bind(this);
    this.changeStatusRequest = this.changeStatusRequest.bind(this);
  }

  async create(request, response) {
    const { body } = request;
    const importClearanceDto = new ImportClearanceDto(body);

    return await super.insertTransaction(request, response, importClearanceDto);
  }

  async restore(request, response) {
    const { body } = request;
    const importClearanceDto = new ImportClearanceDto(body);

    return await super.restore(request, response, importClearanceDto);
  }

  async delete(request, response) {
    const { body } = request;
    const importClearanceDto = new ImportClearanceDto(body);

    return await super.delete(request, response, importClearanceDto);
  }

  async changeStatus(request, response) {
    const {body} = request;
    const importClearanceDto = new ImportClearanceDto(body);

    return await super.changeStatus(request, response, importClearanceDto);
  }

  async changeStatusRequest(request, response) {
    const { body } = request;
    const importClearanceDto = new ImportClearanceDto(body);

    return await super.changeStatusRequest(request, response, importClearanceDto);
  }
}

class ImportClearanceDtController extends StandardController {
  constructor(importClearanceDtController) {
    super(importClearanceDtController);
    this.create = this.create.bind(this);
    this.restore = this.restore.bind(this);
    this.delete = this.delete.bind(this);
  }

  async create(request, response) {
    const { body } = request;
    const importClearanceDtDto = new ImportClearanceDtDto(body);

    return await super.create(request, response, importClearanceDtDto);
  }

  async restore(request, response) {
    const { body } = request;
    const importClearanceDtDto = new ImportClearanceDtDto(body);

    return await super.restore(request, response, importClearanceDtDto);
  }

  async delete(request, response) {
    const { body } = request;
    const importClearanceDtDto = new ImportClearanceDtDto(body);

    return await super.delete(request, response, importClearanceDtDto);
  }
}

class ImportClearanceItemDtController extends StandardController {
  constructor(importClearanceItemDt) {
    super(importClearanceItemDt);
    this.create = this.create.bind(this);
    this.restore = this.restore.bind(this);
    this.delete = this.delete.bind(this);
  }

  async create(request, response) {
    const { body } = request;
    const importClearanceItemDtDto = new ImportClearanceItemDtDto(body);

    return await super.create(request, response, importClearanceItemDtDto);
  }

  async restore(request, response) {
    const { body } = request;
    const importClearanceItemDtDto = new ImportClearanceItemDtDto(body);

    return await super.restore(request, response, importClearanceItemDtDto);
  }

  async delete(request, response) {
    const { body } = request;
    const importClearanceItemDtDto = new ImportClearanceItemDtDto(body);

    return await super.delete(request, response, importClearanceItemDtDto);
  }
}

class ImportClearanceRejectController extends StandardController {
  constructor(importClearanceReject) {
    super(importClearanceReject);
    this.create = this.create.bind(this);
    this.restore = this.restore.bind(this);
    this.delete = this.delete.bind(this);
  }

  async create(request, response) {
    const { body } = request;
    const importClearanceRejectDto = new ImportClearanceRejectDto(body);

    return await super.create(request, response, importClearanceRejectDto);
  }

  async restore(request, response) {
    const { body } = request;
    const importClearanceRejectDto = new ImportClearanceRejectDto(body);

    return await super.restore(request, response, importClearanceRejectDto);
  }

  async delete(request, response) {
    const { body } = request;
    const importClearanceRejectDto = new ImportClearanceRejectDto(body);

    return await super.delete(request, response, importClearanceRejectDto);
  }
}

class ImportClearanceRequestController extends StandardController {
  constructor(importAdvancedPaymentRequest) {
    super(importAdvancedPaymentRequest);
    this.create = this.create.bind(this);
    this.restore = this.restore.bind(this);
    this.delete = this.delete.bind(this);
  }

  async create(request, response) {
    const { body } = request;
    const importClearanceRequestDto = new ImportClearanceRequestDto(body);

    return await super.create(request, response, importClearanceRequestDto);
  }

  async restore(request, response) {
    const { body } = request;
    const importClearanceRequestDto = new ImportClearanceRequestDto(body);

    return await super.restore(request, response, importClearanceRequestDto);
  }

  async delete(request, response) {
    const { body } = request;
    const importClearanceRequestDto = new ImportClearanceRequestDto(body);

    return await super.delete(request, response, importClearanceRequestDto);
  }
}

export {
  ImportClearanceController,
  ImportClearanceDtController,
  ImportClearanceItemDtController,
  ImportClearanceRejectController,
  ImportClearanceRequestController
};
