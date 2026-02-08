import OffshorePurchaseReceiveDto from '../../../dto/tr/offshore/OffshorePurchaseReceiveDto.js';
import StandardTransactionController from '../../StandardTransactionController.js';

class OffshorePurchaseReceiveController extends StandardTransactionController {
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
    const offshorePurchaseReceiveDto = new OffshorePurchaseReceiveDto(body);

    return await super.insertTransaction(request, response, offshorePurchaseReceiveDto);
  }

  async restore(request, response) {
    const { body } = request;
    const offshorePurchaseReceiveDto = new OffshorePurchaseReceiveDto(body);

    return await super.restore(request, response, offshorePurchaseReceiveDto);
  }

  async delete(request, response) {
    const { body } = request;
    const offshorePurchaseReceiveDto = new OffshorePurchaseReceiveDto(body);

    return await super.delete(request, response, offshorePurchaseReceiveDto);
  }

  async changeStatus(request, response) {
    const { body } = request;
    const offshorePurchaseReceiveDto = new OffshorePurchaseReceiveDto(body);

    return await super.changeStatus(request, response, offshorePurchaseReceiveDto);
  }

  async changeStatusRequest(request, response) {
    const { body } = request;
    const offshorePurchaseReceiveDto = new OffshorePurchaseReceiveDto(body);

    return await super.changeStatusRequest(request, response, offshorePurchaseReceiveDto);
  }
}

export default OffshorePurchaseReceiveController;
