import {
  PurchaseCreditNoteDtDto,
  PurchaseCreditNoteDto
} from '../../../dto/tr/purchase/PurchaseCreditNoteDto.js';
import StandardController from '../../StandardController.js';
import StandardTransactionController from '../../StandardTransactionController.js';

class PurchaseCreditNoteController extends StandardTransactionController {
  constructor(purchaseCreditNote) {
    super(purchaseCreditNote);
    this.create = this.create.bind(this);
    this.restore = this.restore.bind(this);
    this.delete = this.delete.bind(this);
    this.changeStatus = this.changeStatus.bind(this);
    this.changeStatusRequest = this.changeStatusRequest.bind(this);
  }

  async create(request, response) {
    const { body } = request;
    const purchaseCreditNoteDto = new PurchaseCreditNoteDto(body);

    return await super.create(request, response, purchaseCreditNoteDto);
  }

  async restore(request, response) {
    const { body } = request;
    const purchaseCreditNoteDto = new PurchaseCreditNoteDto(body);

    return await super.restore(request, response, purchaseCreditNoteDto);
  }

  async delete(request, response) {
    const { body } = request;
    const purchaseCreditNoteDto = new PurchaseCreditNoteDto(body);

    return await super.delete(request, response, purchaseCreditNoteDto);
  }

  async changeStatus(request, response) {
    const {body} = request;
    const purchaseCreditNoteDto = new PurchaseCreditNoteDto(body);

    return await super.changeStatus(request, response, purchaseCreditNoteDto);
  }

  async changeStatusRequest(request, response) {
    const { body } = request;
    const purchaseCreditNoteDto = new PurchaseCreditNoteDto(body);

    return await super.changeStatusRequest(request, response, purchaseCreditNoteDto);
  }
}

class PurchaseCreditNoteDtController extends StandardController {
  constructor(purchaseAdvancedPaymentDt) {
    super(purchaseAdvancedPaymentDt);
    this.create = this.create.bind(this);
    this.restore = this.restore.bind(this);
    this.delete = this.delete.bind(this);
  }

  async create(request, response) {
    const { body } = request;
    const purchaseCreditNoteDtDto = new PurchaseCreditNoteDtDto(body);

    return await super.create(request, response, purchaseCreditNoteDtDto);
  }

  async restore(request, response) {
    const { body } = request;
    const purchaseCreditNoteDtDto = new PurchaseCreditNoteDtDto(body);

    return await super.restore(request, response, purchaseCreditNoteDtDto);
  }

  async delete(request, response) {
    const { body } = request;
    const purchaseCreditNoteDtDto = new PurchaseCreditNoteDtDto(body);

    return await super.delete(request, response, purchaseCreditNoteDtDto);
  }
}

export { PurchaseCreditNoteController, PurchaseCreditNoteDtController };
