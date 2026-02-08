import OffshoreSalesPaymentDto from '../../../dto/tr/offshore/OffshoreSalesPaymentDto.js';
import StandardTransactionController from '../../StandardTransactionController.js';

class OffshoreSalesPaymentController extends StandardTransactionController {
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
    const offshoreSalesPaymentDto = new OffshoreSalesPaymentDto(body);

    return await super.insertTransaction(request, response, offshoreSalesPaymentDto);
  }

  async restore(request, response) {
    const { body } = request;
    const offshoreSalesPaymentDto = new OffshoreSalesPaymentDto(body);

    return await super.restore(request, response, offshoreSalesPaymentDto);
  }

  async delete(request, response) {
    const { body } = request;
    const offshoreSalesPaymentDto = new OffshoreSalesPaymentDto(body);

    return await super.delete(request, response, offshoreSalesPaymentDto);
  }

  async changeStatus(request, response) {
    const { body } = request;
    const offshoreSalesPaymentDto = new OffshoreSalesPaymentDto(body);

    return await super.changeStatus(request, response, offshoreSalesPaymentDto);
  }

  async changeStatusRequest(request, response) {
    const { body } = request;
    const offshoreSalesPaymentDto = new OffshoreSalesPaymentDto(body);

    return await super.changeStatusRequest(request, response, offshoreSalesPaymentDto);
  }
}

export default OffshoreSalesPaymentController;
