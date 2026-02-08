import OffshorePurchaseAdvancedPaymentDto from '../../../dto/tr/offshore/OffshorePurchaseAdvancedPaymentDto.js';
import StandardTransactionController from '../../StandardTransactionController.js';

class OffshorePurchaseAdvancedPaymentController extends StandardTransactionController {
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
    const offshorePurchaseAdvancedPaymentDto = new OffshorePurchaseAdvancedPaymentDto(body);

    return await super.insertTransaction(request, response, offshorePurchaseAdvancedPaymentDto);
  }

  async restore(request, response) {
    const { body } = request;
    const offshorePurchaseAdvancedPaymentDto = new OffshorePurchaseAdvancedPaymentDto(body);

    return await super.restore(request, response, offshorePurchaseAdvancedPaymentDto);
  }

  async delete(request, response) {
    const { body } = request;
    const offshorePurchaseAdvancedPaymentDto = new OffshorePurchaseAdvancedPaymentDto(body);

    return await super.delete(request, response, offshorePurchaseAdvancedPaymentDto);
  }

  async changeStatus(request, response) {
    const { body } = request;
    const offshorePurchaseAdvancedPaymentDto = new OffshorePurchaseAdvancedPaymentDto(body);

    return await super.changeStatus(request, response, offshorePurchaseAdvancedPaymentDto);
  }

  async changeStatusRequest(request, response) {
    const { body } = request;
    const offshorePurchaseAdvancedPaymentDto = new OffshorePurchaseAdvancedPaymentDto(body);

    return await super.changeStatusRequest(request, response, offshorePurchaseAdvancedPaymentDto);
  }
}

export default OffshorePurchaseAdvancedPaymentController;
