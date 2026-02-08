import {
  ImportReturnDtDto,
  ImportReturnDto,
  ImportReturnItemDtDto,
  ImportReturnRejectDto,
  ImportReturnRequestDto
} from '../../../dto/tr/imports/ImportReturnDto.js';
import StandardController from '../../StandardController.js';
import StandardTransactionController from '../../StandardTransactionController.js';

class ImportReturnController extends StandardTransactionController {
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
    const importReturnDto = new ImportReturnDto(body);

    return await super.insertTransaction(request, response, importReturnDto);
  }

  async restore(request, response) {
    const { body } = request;
    const importReturnDto = new ImportReturnDto(body);

    return await super.restore(request, response, importReturnDto);
  }

  async delete(request, response) {
    const { body } = request;
    const importReturnDto = new ImportReturnDto(body);

    return await super.delete(request, response, importReturnDto);
  }

  async changeStatus(request, response) {
    const {body} = request;
    const importReturnDto = new ImportReturnDto(body);

    return await super.changeStatus(request, response, importReturnDto);
  }

  async changeStatusRequest(request, response) {
    const { body } = request;
    const importReturnDto = new ImportReturnDto(body);

    return await super.changeStatusRequest(request, response, importReturnDto);
  }
}

class ImportReturnDtController extends StandardController {
  constructor(importReturnDtDto) {
    super(importReturnDtDto);
    this.create = this.create.bind(this);
    this.restore = this.restore.bind(this);
    this.delete = this.delete.bind(this);
  }

  async create(request, response) {
    const { body } = request;
    const importReturnDtDto = new ImportReturnDtDto(body);

    return await super.create(request, response, importReturnDtDto);
  }

  async restore(request, response) {
    const { body } = request;
    const importReturnDtDto = new ImportReturnDtDto(body);

    return await super.restore(request, response, importReturnDtDto);
  }

  async delete(request, response) {
    const { body } = request;
    const importReturnDtDto = new ImportReturnDtDto(body);

    return await super.delete(request, response, importReturnDtDto);
  }
}

class ImportReturnItemDtController extends StandardController {
  constructor(importReturnItemDt) {
    super(importReturnItemDt);
    this.create = this.create.bind(this);
    this.restore = this.restore.bind(this);
    this.delete = this.delete.bind(this);
  }

  async create(request, response) {
    const { body } = request;
    const importReturnItemDtDto = new ImportReturnItemDtDto(body);

    return await super.create(request, response, importReturnItemDtDto);
  }

  async restore(request, response) {
    const { body } = request;
    const importReturnItemDtDto = new ImportReturnItemDtDto(body);

    return await super.restore(request, response, importReturnItemDtDto);
  }

  async delete(request, response) {
    const { body } = request;
    const importReturnItemDtDto = new ImportReturnItemDtDto(body);

    return await super.delete(request, response, importReturnItemDtDto);
  }
}

class ImportReturnRejectController extends StandardController {
  constructor(importReturnRejectDto) {
    super(importReturnRejectDto);
    this.create = this.create.bind(this);
    this.restore = this.restore.bind(this);
    this.delete = this.delete.bind(this);
  }

  async create(request, response) {
    const { body } = request;
    const importReturnRejectDto = new ImportReturnRejectDto(body);

    return await super.create(request, response, importReturnRejectDto);
  }

  async restore(request, response) {
    const { body } = request;
    const importReturnRejectDto = new ImportReturnRejectDto(body);

    return await super.restore(request, response, importReturnRejectDto);
  }

  async delete(request, response) {
    const { body } = request;
    const importReturnRejectDto = new ImportReturnRejectDto(body);

    return await super.delete(request, response, importReturnRejectDto);
  }
}

class ImportReturnRequestController extends StandardController {
  constructor(importReturnRequest) {
    super(importReturnRequest);
    this.create = this.create.bind(this);
    this.restore = this.restore.bind(this);
    this.delete = this.delete.bind(this);
  }

  async create(request, response) {
    const { body } = request;
    const importReturnRequestDto = new ImportReturnRequestDto(body);

    return await super.create(request, response, importReturnRequestDto);
  }

  async restore(request, response) {
    const { body } = request;
    const importReturnRequestDto = new ImportReturnRequestDto(body);

    return await super.restore(request, response, importReturnRequestDto);
  }

  async delete(request, response) {
    const { body } = request;
    const importReturnRequestDto = new ImportReturnRequestDto(body);

    return await super.delete(request, response, importReturnRequestDto);
  }
}

export {
  ImportReturnController,
  ImportReturnDtController,
  ImportReturnItemDtController,
  ImportReturnRejectController,
  ImportReturnRequestController
};
