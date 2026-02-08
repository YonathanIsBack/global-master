import OffshorePurchaseCreditNoteDto from '../../../dto/tr/offshore/OffshorePurchaseCreditNoteDto.js';
import StandardTransactionController from '../../StandardTransactionController.js';

class OffshorePurchaseCreditNoteController extends StandardTransactionController {
  constructor(offshorePurchaseOrderService) {
    super(offshorePurchaseOrderService);
    this.create = this.create.bind(this);
    this.restore = this.restore.bind(this);
    this.delete = this.delete.bind(this);
    this.changeStatus = this.changeStatus.bind(this);
    this.changeStatusRequest = this.changeStatusRequest.bind(this);
  }

  async create(request, response) {
    const { body } = request;
    const offshorePurchaseCreditNoteDto = new OffshorePurchaseCreditNoteDto(body);

    return await super.insertTransaction(request, response, offshorePurchaseCreditNoteDto);
  }

  async restore(request, response) {
    const { body } = request;
    const offshorePurchaseCreditNoteDto = new OffshorePurchaseCreditNoteDto(body);

    return await super.restore(request, response, offshorePurchaseCreditNoteDto);
  }

  async delete(request, response) {
    const { body } = request;
    const offshorePurchaseCreditNoteDto = new OffshorePurchaseCreditNoteDto(body);

    return await super.delete(request, response, offshorePurchaseCreditNoteDto);
  }

  async changeStatus(request, response) {
    const { body } = request;
    const offshorePurchaseCreditNoteDto = new OffshorePurchaseCreditNoteDto(body);

    return await super.changeStatus(request, response, offshorePurchaseCreditNoteDto);
  }

  async changeStatusRequest(request, response) {
    const { body } = request;
    const offshorePurchaseCreditNoteDto = new OffshorePurchaseCreditNoteDto(body);

    return await super.changeStatusRequest(request, response, offshorePurchaseCreditNoteDto);
  }
}

export default OffshorePurchaseCreditNoteController;
