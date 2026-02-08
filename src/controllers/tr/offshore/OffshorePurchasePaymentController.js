import OffshorePurchasePaymentDto from '../../../dto/tr/offshore/OffshorePurchasePaymentDto.js';
import StandardTransactionController from '../../StandardTransactionController.js';

class OffshorePurchasePaymentController extends StandardTransactionController {
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
    const offshorePurchasePaymentDto = new OffshorePurchasePaymentDto(body);

    return await super.insertTransaction(request, response, offshorePurchasePaymentDto);
  }

  async restore(request, response) {
    const { body } = request;
    const offshorePurchasePaymentDto = new OffshorePurchasePaymentDto(body);

    return await super.restore(request, response, offshorePurchasePaymentDto);
  }

  async delete(request, response) {
    const { body } = request;
    const offshorePurchasePaymentDto = new OffshorePurchasePaymentDto(body);

    return await super.delete(request, response, offshorePurchasePaymentDto);
  }

  async changeStatus(request, response) {
    const { body } = request;
    const offshorePurchasePaymentDto = new OffshorePurchasePaymentDto(body);

    return await super.changeStatus(request, response, offshorePurchasePaymentDto);
  }

  async changeStatusRequest(request, response) {
    const { body } = request;
    const offshorePurchasePaymentDto = new OffshorePurchasePaymentDto(body);

    return await super.changeStatusRequest(request, response, offshorePurchasePaymentDto);
  }
}

export default OffshorePurchasePaymentController;
