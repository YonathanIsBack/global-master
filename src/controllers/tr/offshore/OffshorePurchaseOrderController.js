import OffshorePurchaseOrderDto from '../../../dto/tr/offshore/OffshorePurchaseOrderDto.js';
import StandardTransactionController from '../../StandardTransactionController.js';

class OffshorePurchaseOrderController extends StandardTransactionController {
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
    const offshorePurchaseOrderDto = new OffshorePurchaseOrderDto(body);

    return await super.insertTransaction(request, response, offshorePurchaseOrderDto);
  }

  async restore(request, response) {
    const { body } = request;
    const offshorePurchaseOrderDto = new OffshorePurchaseOrderDto(body);

    return await super.restore(request, response, offshorePurchaseOrderDto);
  }

  async delete(request, response) {
    const { body } = request;
    const offshorePurchaseOrderDto = new OffshorePurchaseOrderDto(body);

    return await super.delete(request, response, offshorePurchaseOrderDto);
  }

  async changeStatus(request, response) {
    const { body } = request;
    const offshorePurchaseOrderDto = new OffshorePurchaseOrderDto(body);

    return await super.changeStatus(request, response, offshorePurchaseOrderDto);
  }

  async changeStatusRequest(request, response) {
    const { body } = request;
    const offshorePurchaseOrderDto = new OffshorePurchaseOrderDto(body);

    return await super.changeStatusRequest(request, response, offshorePurchaseOrderDto);
  }
}

export default OffshorePurchaseOrderController;
