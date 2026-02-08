import {
  ImportCreditNoteDtDto,
  ImportCreditNoteDto,
  ImportCreditNoteRejectDto,
  ImportCreditNoteRequestDto
} from '../../../dto/tr/imports/ImportCreditNoteDto.js';
import StandardController from '../../StandardController.js';
import StandardTransactionController from '../../StandardTransactionController.js';

class ImportCreditNoteController extends StandardTransactionController {
  constructor(importCreditNote) {
    super(importCreditNote);
    this.create = this.create.bind(this);
    this.restore = this.restore.bind(this);
    this.delete = this.delete.bind(this);
    this.changeStatus = this.changeStatus.bind(this);
    this.changeStatusRequest = this.changeStatusRequest.bind(this);
  }

  async create(request, response) {
    const { body } = request;
    const importCreditNoteDto = new ImportCreditNoteDto(body);

    return await super.create(request, response, importCreditNoteDto);
  }

  async restore(request, response) {
    const { body } = request;
    const importCreditNoteDto = new ImportCreditNoteDto(body);

    return await super.restore(request, response, importCreditNoteDto);
  }

  async delete(request, response) {
    const { body } = request;
    const importCreditNoteDto = new ImportCreditNoteDto(body);

    return await super.delete(request, response, importCreditNoteDto);
  }

  async changeStatus(request, response) {
    const {body} = request;
    const importCreditNoteDto = new ImportCreditNoteDto(body);

    return await super.changeStatus(request, response, importCreditNoteDto);
  }

  async changeStatusRequest(request, response) {
    const { body } = request;
    const importCreditNoteDto = new ImportCreditNoteDto(body);

    return await super.changeStatusRequest(request, response, importCreditNoteDto);
  }
}

class ImportCreditNoteDtController extends StandardController {
  constructor(importCreditNoteDt) {
    super(importCreditNoteDt);
    this.create = this.create.bind(this);
    this.restore = this.restore.bind(this);
    this.delete = this.delete.bind(this);
  }

  async create(request, response) {
    const { body } = request;
    const importCreditNoteDtDto = new importCreditNoteDtDto(body);

    return await super.create(request, response, importClearanceDtDto);
  }

  async restore(request, response) {
    const { body } = request;
    const importCreditNoteDtDto = new ImportCreditNoteDtDto(body);

    return await super.restore(request, response, importCreditNoteDtDto);
  }

  async delete(request, response) {
    const { body } = request;
    const importCreditNoteDtDto = new ImportCreditNoteDtDto(body);

    return await super.delete(request, response, importCreditNoteDtDto);
  }
}

class ImportCreditNoteRejectController extends StandardController {
  constructor(importCreditNoteReject) {
    super(importCreditNoteReject);
    this.create = this.create.bind(this);
    this.restore = this.restore.bind(this);
    this.delete = this.delete.bind(this);
  }

  async create(request, response) {
    const { body } = request;
    const importCreditNoteRejectDto = new ImportCreditNoteRejectDto(body);

    return await super.create(request, response, importCreditNoteRejectDto);
  }

  async restore(request, response) {
    const { body } = request;
    const importCreditNoteRejectDto = new ImportCreditNoteRejectDto(body);

    return await super.restore(request, response, importCreditNoteRejectDto);
  }

  async delete(request, response) {
    const { body } = request;
    const importCreditNoteRejectDto = new ImportCreditNoteRejectDto(body);

    return await super.delete(request, response, importCreditNoteRejectDto);
  }
}

class ImportCreditNoteRequestController extends StandardController {
  constructor(importCreditNoteRequest) {
    super(importCreditNoteRequest);
    this.create = this.create.bind(this);
    this.restore = this.restore.bind(this);
    this.delete = this.delete.bind(this);
  }

  async create(request, response) {
    const { body } = request;
    const importCreditNoteRequestDto = new ImportCreditNoteRequestDto(body);

    return await super.create(request, response, importCreditNoteRequestDto);
  }

  async restore(request, response) {
    const { body } = request;
    const importCreditNoteRequestDto = new ImportCreditNoteRequestDto(body);

    return await super.restore(request, response, importCreditNoteRequestDto);
  }

  async delete(request, response) {
    const { body } = request;
    const importCreditNoteRequestDto = new ImportCreditNoteRequestDto(body);

    return await super.delete(request, response, importCreditNoteRequestDto);
  }
}

export {
  ImportCreditNoteController,
  ImportCreditNoteDtController,
  ImportCreditNoteRejectController,
  ImportCreditNoteRequestController
};
