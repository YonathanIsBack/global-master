import OffshorePurchaseInvoiceDto from '../../../dto/tr/offshore/OffshorePurchaseInvoiceDto.js';
import StandardTransactionController from '../../StandardTransactionController.js';

class OffshorePurchaseInvoiceController extends StandardTransactionController {
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
    const offshorePurchaseInvoiceDto = new OffshorePurchaseInvoiceDto(body);

    return await super.insertTransaction(request, response, offshorePurchaseInvoiceDto);
  }

  async restore(request, response) {
    const { body } = request;
    const offshorePurchaseInvoiceDto = new OffshorePurchaseInvoiceDto(body);

    return await super.restore(request, response, offshorePurchaseInvoiceDto);
  }

  async delete(request, response) {
    const { body } = request;
    const offshorePurchaseInvoiceDto = new OffshorePurchaseInvoiceDto(body);

    return await super.delete(request, response, offshorePurchaseInvoiceDto);
  }

  async changeStatus(request, response) {
    const { body } = request;
    const offshorePurchaseInvoiceDto = new OffshorePurchaseInvoiceDto(body);

    return await super.changeStatus(request, response, offshorePurchaseInvoiceDto);
  }

  async changeStatusRequest(request, response) {
    const { body } = request;
    const offshorePurchaseInvoiceDto = new OffshorePurchaseInvoiceDto(body);

    return await super.changeStatusRequest(request, response, offshorePurchaseInvoiceDto);
  }
}

export default OffshorePurchaseInvoiceController;
