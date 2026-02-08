import {
  SalesDeliveryNoteDtDto,
  SalesDeliveryNoteDto,
  SalesDeliveryNoteItemDtDto,
  SalesDeliveryNoteRejectDto,
  SalesDeliveryNoteRequestDto
} from '../../../dto/tr/sales/SalesDeliveryNoteDto.js';
import StandardController from '../../StandardController.js';
import StandardTransactionController from '../../StandardTransactionController.js';

class SalesDeliveryNoteController extends StandardTransactionController {
  constructor(salesDeliveryNote) {
    super(salesDeliveryNote);
    this.create = this.create.bind(this);
    this.restore = this.restore.bind(this);
    this.delete = this.delete.bind(this);
  }

  async create(request, response) {
    const { body } = request;
    const salesDeliveryNoteDto = new SalesDeliveryNoteDto(body);

    return await super.insertTransaction(request, response, salesDeliveryNoteDto);
  }

  async restore(request, response) {
    const { body } = request;
    const salesDeliveryNoteDto = new SalesDeliveryNoteDto(body);

    return await super.restore(request, response, salesDeliveryNoteDto);
  }

  async delete(request, response) {
    const { body } = request;
    const salesDeliveryNoteDto = new SalesDeliveryNoteDto(body);

    return await super.delete(request, response, salesDeliveryNoteDto);
  }

  
  async changeStatus(request, response) {
    const {body} = request;
    const salesDeliveryNoteDto = new SalesDeliveryNoteDto(body);

    return await super.changeStatus(request, response, salesDeliveryNoteDto);
  }

  async changeStatusRequest(request, response) {
    const { body } = request;
    const salesDeliveryNoteDto = new SalesDeliveryNoteDto(body);

    return await super.changeStatusRequest(request, response, salesDeliveryNoteDto);
  }
}

class SalesDeliveryNoteDtController extends StandardController {
  constructor(salesDeliveryNoteDt) {
    super(salesDeliveryNoteDt);
    this.create = this.create.bind(this);
    this.restore = this.restore.bind(this);
    this.delete = this.delete.bind(this);
  }

  async create(request, response) {
    const { body } = request;
    const salesDeliveryNoteDtDto = new SalesDeliveryNoteDtDto(body);

    return await super.create(request, response, salesDeliveryNoteDtDto);
  }

  async restore(request, response) {
    const { body } = request;
    const salesDeliveryNoteDtDto = new SalesDeliveryNoteDtDto(body);

    return await super.restore(request, response, salesDeliveryNoteDtDto);
  }

  async delete(request, response) {
    const { body } = request;
    const salesDeliveryNoteDtDto = new SalesDeliveryNoteDtDto(body);

    return await super.delete(request, response, salesDeliveryNoteDtDto);
  }
}
class SalesDeliveryNoteItemDtController extends StandardController {
  constructor(salesDeliveryNoteItemDt) {
    super(salesDeliveryNoteItemDt);
    this.create = this.create.bind(this);
    this.restore = this.restore.bind(this);
    this.delete = this.delete.bind(this);
  }

  async create(request, response) {
    const { body } = request;
    const salesDeliveryNoteItemDtDto = new SalesDeliveryNoteItemDtDto(body);

    return await super.create(request, response, salesDeliveryNoteItemDtDto);
  }

  async restore(request, response) {
    const { body } = request;
    const salesDeliveryNoteItemDtDto = new SalesDeliveryNoteItemDtDto(body);

    return await super.restore(request, response, salesDeliveryNoteItemDtDto);
  }

  async delete(request, response) {
    const { body } = request;
    const salesDeliveryNoteItemDtDto = new SalesDeliveryNoteItemDtDto(body);

    return await super.delete(request, response, salesDeliveryNoteItemDtDto);
  }
}

class SalesDeliveryNoteRejectController extends StandardController {
  constructor(salesDeliveryNoteReject) {
    super(salesDeliveryNoteReject);
    this.create = this.create.bind(this);
    this.restore = this.restore.bind(this);
    this.delete = this.delete.bind(this);
  }

  async create(request, response) {
    const { body } = request;
    const salesDeliveryNoteRejectDto = new SalesDeliveryNoteRejectDto(body);

    return await super.create(request, response, salesDeliveryNoteRejectDto);
  }

  async restore(request, response) {
    const { body } = request;
    const salesDeliveryNoteRejectDto = new SalesDeliveryNoteRejectDto(body);

    return await super.restore(request, response, salesDeliveryNoteRejectDto);
  }

  async delete(request, response) {
    const { body } = request;
    const salesDeliveryNoteRejectDto = new SalesDeliveryNoteRejectDto(body);

    return await super.delete(request, response, salesDeliveryNoteRejectDto);
  }
}

class SalesDeliveryNoteRequestController extends StandardController {
  constructor(salesDeliveryFixedRequest) {
    super(salesDeliveryFixedRequest);
    this.create = this.create.bind(this);
    this.restore = this.restore.bind(this);
    this.delete = this.delete.bind(this);
  }

  async create(request, response) {
    const { body } = request;
    const salesDeliveryNoteRequestDto = new SalesDeliveryNoteRequestDto(body);

    return await super.create(request, response, salesDeliveryNoteRequestDto);
  }

  async restore(request, response) {
    const { body } = request;
    const salesDeliveryNoteRequestDto = new SalesDeliveryNoteRequestDto(body);

    return await super.restore(request, response, salesDeliveryNoteRequestDto);
  }

  async delete(request, response) {
    const { body } = request;
    const salesDeliveryNoteRequestDto = new SalesDeliveryNoteRequestDto(body);

    return await super.delete(request, response, salesDeliveryNoteRequestDto);
  }
}

export {
  SalesDeliveryNoteController,
  SalesDeliveryNoteDtController,
  SalesDeliveryNoteItemDtController,
  SalesDeliveryNoteRejectController,
  SalesDeliveryNoteRequestController
};
