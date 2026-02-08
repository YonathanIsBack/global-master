import {
  ImportReceiveDtDto,
  ImportReceiveDto,
  ImportReceiveItemDtDto,
  ImportReceiveRejectDto,
  ImportReceiveRequestDto
} from '../../../dto/tr/imports/ImportReceiveDto.js';
import StandardController from '../../StandardController.js';
import StandardTransactionController from '../../StandardTransactionController.js';

class ImportReceiveController extends StandardTransactionController {
  constructor(importReceive) {
    super(importReceive);
    this.create = this.create.bind(this);
    this.restore = this.restore.bind(this);
    this.delete = this.delete.bind(this);
    this.changeStatus = this.changeStatus.bind(this);
    this.changeStatusRequest = this.changeStatusRequest.bind(this);
  }

  async create(request, response) {
    const { body } = request;
    const importQuoteDto = new ImportReceiveDto(body);

    return await super.insertTransaction(request, response, importQuoteDto);
  }

  async restore(request, response) {
    const { body } = request;
    const importQuoteDto = new ImportReceiveDto(body);

    return await super.restore(request, response, importQuoteDto);
  }

  async delete(request, response) {
    const { body } = request;
    const importQuoteDto = new ImportReceiveDto(body);

    return await super.delete(request, response, importQuoteDto);
  }

  async changeStatus(request, response) {
    const {body} = request;
    const importQuoteDto = new ImportReceiveDto(body);

    return await super.changeStatus(request, response, importQuoteDto);
  }

  async changeStatusRequest(request, response) {
    const { body } = request;
    const importQuoteDto = new ImportReceiveDto(body);

    return await super.changeStatusRequest(request, response, importQuoteDto);
  }
}

class ImportReceiveDtController extends StandardController {
  constructor(importReceiveDt) {
    super(importReceiveDt);
    this.create = this.create.bind(this);
    this.restore = this.restore.bind(this);
    this.delete = this.delete.bind(this);
  }

  async create(request, response) {
    const { body } = request;
    const importReceiveDtDto = new ImportReceiveDtDto(body);

    return await super.create(request, response, importReceiveDtDto);
  }

  async restore(request, response) {
    const { body } = request;
    const importReceiveDtDto = new ImportReceiveDtDto(body);

    return await super.restore(request, response, importReceiveDtDto);
  }

  async delete(request, response) {
    const { body } = request;
    const importReceiveDtDto = new ImportReceiveDtDto(body);

    return await super.delete(request, response, importReceiveDtDto);
  }
}

class ImportReceiveItemDtController extends StandardController {
  constructor(importReceiveItemDt) {
    super(importReceiveItemDt);
    this.create = this.create.bind(this);
    this.restore = this.restore.bind(this);
    this.delete = this.delete.bind(this);
  }

  async create(request, response) {
    const { body } = request;
    const importReceiveItemDtDto = new ImportReceiveItemDtDto(body);

    return await super.create(request, response, importReceiveItemDtDto);
  }

  async restore(request, response) {
    const { body } = request;
    const importReceiveItemDtDto = new ImportReceiveItemDtDto(body);

    return await super.restore(request, response, importReceiveItemDtDto);
  }

  async delete(request, response) {
    const { body } = request;
    const importReceiveItemDtDto = new ImportReceiveItemDtDto(body);

    return await super.delete(request, response, importReceiveItemDtDto);
  }
}

class ImportReceiveRejectController extends StandardController {
  constructor(importReceiveReject) {
    super(importReceiveReject);
    this.create = this.create.bind(this);
    this.restore = this.restore.bind(this);
    this.delete = this.delete.bind(this);
  }

  async create(request, response) {
    const { body } = request;
    const importReceiveRejectDto = new ImportReceiveRejectDto(body);

    return await super.create(request, response, importReceiveRejectDto);
  }

  async restore(request, response) {
    const { body } = request;
    const importReceiveRejectDto = new ImportReceiveRejectDto(body);

    return await super.restore(request, response, importReceiveRejectDto);
  }

  async delete(request, response) {
    const { body } = request;
    const importReceiveRejectDto = new ImportReceiveRejectDto(body);

    return await super.delete(request, response, importReceiveRejectDto);
  }
}

class ImportReceiveRequestController extends StandardController {
  constructor(importReceiveRequest) {
    super(importReceiveRequest);
    this.create = this.create.bind(this);
    this.restore = this.restore.bind(this);
    this.delete = this.delete.bind(this);
  }

  async create(request, response) {
    const { body } = request;
    const importReceiveRequestDto = new ImportReceiveRequestDto(body);

    return await super.create(request, response, importReceiveRequestDto);
  }

  async restore(request, response) {
    const { body } = request;
    const importReceiveRequestDto = new ImportReceiveRequestDto(body);

    return await super.restore(request, response, importReceiveRequestDto);
  }

  async delete(request, response) {
    const { body } = request;
    const importReceiveRequestDto = new ImportReceiveRequestDto(body);

    return await super.delete(request, response, importReceiveRequestDto);
  }
}

export {
  ImportReceiveController,
  ImportReceiveDtController,
  ImportReceiveItemDtController,
  ImportReceiveRejectController,
  ImportReceiveRequestController
};
