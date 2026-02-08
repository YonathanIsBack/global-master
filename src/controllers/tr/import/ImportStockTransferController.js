import {
  ImportStockTransferDtDto,
  ImportStockTransferDto,
  ImportStockTransferItemDtDto,
  ImportStockTransferRejectDto,
  ImportStockTransferRequestDto
} from '../../../dto/tr/imports/ImportStockTransferDto.js';
import StandardController from '../../StandardController.js';
import StandardTransactionController from '../../StandardTransactionController.js';

class ImportStockTransferController extends StandardTransactionController {
  constructor(importStockTransfer) {
    super(importStockTransfer);
    this.create = this.create.bind(this);
    this.restore = this.restore.bind(this);
    this.delete = this.delete.bind(this);
    this.changeStatus = this.changeStatus.bind(this);
    this.changeStatusRequest = this.changeStatusRequest.bind(this);
  }

  async create(request, response) {
    const { body } = request;
    const importStockTransferDto = new ImportStockTransferDto(body);

    return await super.insertTransaction(request, response, importStockTransferDto);
  }

  async restore(request, response) {
    const { body } = request;
    const importStockTransferDto = new ImportStockTransferDto(body);

    return await super.restore(request, response, importStockTransferDto);
  }

  async delete(request, response) {
    const { body } = request;
    const importStockTransferDto = new ImportStockTransferDto(body);

    return await super.delete(request, response, importStockTransferDto);
  }

  async changeStatus(request, response) {
    const {body} = request;
    const importStockTransferDto = new ImportStockTransferDto(body);

    return await super.changeStatus(request, response, importStockTransferDto);
  }

  async changeStatusRequest(request, response) {
    const { body } = request;
    const importStockTransferDto = new ImportStockTransferDto(body);

    return await super.changeStatusRequest(request, response, importStockTransferDto);
  }
}

class ImportStockTransferDtController extends StandardController {
  constructor(importStockTransferDt) {
    super(importStockTransferDt);
    this.create = this.create.bind(this);
    this.restore = this.restore.bind(this);
    this.delete = this.delete.bind(this);
  }

  async create(request, response) {
    const { body } = request;
    const importStockTransferDtDto = new ImportStockTransferDtDto(body);

    return await super.create(request, response, importStockTransferDtDto);
  }

  async restore(request, response) {
    const { body } = request;
    const importStockTransferDtDto = new ImportStockTransferDtDto(body);

    return await super.restore(request, response, importStockTransferDtDto);
  }

  async delete(request, response) {
    const { body } = request;
    const importStockTransferDtDto = new ImportStockTransferDtDto(body);

    return await super.delete(request, response, importStockTransferDtDto);
  }
}

class ImportStockTransferItemDtController extends StandardController {
  constructor(importStockTransferItemDt) {
    super(importStockTransferItemDt);
    this.create = this.create.bind(this);
    this.restore = this.restore.bind(this);
    this.delete = this.delete.bind(this);
  }

  async create(request, response) {
    const { body } = request;
    const importStockTransferItemDtDto = new ImportStockTransferItemDtDto(body);

    return await super.create(request, response, importStockTransferItemDtDto);
  }

  async restore(request, response) {
    const { body } = request;
    const importStockTransferItemDtDto = new ImportStockTransferItemDtDto(body);

    return await super.restore(request, response, importStockTransferItemDtDto);
  }

  async delete(request, response) {
    const { body } = request;
    const importStockTransferItemDtDto = new ImportStockTransferItemDtDto(body);

    return await super.delete(request, response, importStockTransferItemDtDto);
  }
}

class ImportStockTransferRejectController extends StandardController {
  constructor(importStockTransferRejectDto) {
    super(importStockTransferRejectDto);
    this.create = this.create.bind(this);
    this.restore = this.restore.bind(this);
    this.delete = this.delete.bind(this);
  }

  async create(request, response) {
    const { body } = request;
    const importStockTransferRejectDto = new ImportStockTransferRejectDto(body);

    return await super.create(request, response, importStockTransferRejectDto);
  }

  async restore(request, response) {
    const { body } = request;
    const importStockTransferRejectDto = new ImportStockTransferRejectDto(body);

    return await super.restore(request, response, importStockTransferRejectDto);
  }

  async delete(request, response) {
    const { body } = request;
    const importStockTransferRejectDto = new ImportStockTransferRejectDto(body);

    return await super.delete(request, response, importStockTransferRejectDto);
  }
}

class ImportStockTransferRequestController extends StandardController {
  constructor(importStockTransferRequest) {
    super(importStockTransferRequest);
    this.create = this.create.bind(this);
    this.restore = this.restore.bind(this);
    this.delete = this.delete.bind(this);
  }

  async create(request, response) {
    const { body } = request;
    const importStockTransferRequestDto = new ImportStockTransferRequestDto(body);

    return await super.create(request, response, importStockTransferRequestDto);
  }

  async restore(request, response) {
    const { body } = request;
    const importStockTransferRequestDto = new ImportStockTransferRequestDto(body);

    return await super.restore(request, response, importStockTransferRequestDto);
  }

  async delete(request, response) {
    const { body } = request;
    const importStockTransferRequestDto = new ImportStockTransferRequestDto(body);

    return await super.delete(request, response, importStockTransferRequestDto);
  }
}

export {
  ImportStockTransferController,
  ImportStockTransferDtController,
  ImportStockTransferItemDtController,
  ImportStockTransferRejectController,
  ImportStockTransferRequestController
};
