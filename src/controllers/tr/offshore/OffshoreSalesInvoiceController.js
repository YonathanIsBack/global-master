import OffshoreSalesInvoiceDto from '../../../dto/tr/offshore/OffshoreSalesInvoiceDto.js';
import StandardTransactionController from '../../StandardTransactionController.js';

class OffshoreSalesInvoiceController extends StandardTransactionController {
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
    const offshoreSalesInvoiceDto = new OffshoreSalesInvoiceDto(body);

    return await super.insertTransaction(request, response, offshoreSalesInvoiceDto);
  }

  async restore(request, response) {
    const { body } = request;
    const offshoreSalesInvoiceDto = new OffshoreSalesInvoiceDto(body);

    return await super.restore(request, response, offshoreSalesInvoiceDto);
  }

  async delete(request, response) {
    const { body } = request;
    const offshoreSalesInvoiceDto = new OffshoreSalesInvoiceDto(body);

    return await super.delete(request, response, offshoreSalesInvoiceDto);
  }

  async changeStatus(request, response) {
    const { body } = request;
    const offshoreSalesInvoiceDto = new OffshoreSalesInvoiceDto(body);

    return await super.changeStatus(request, response, offshoreSalesInvoiceDto);
  }

  async changeStatusRequest(request, response) {
    const { body } = request;
    const offshoreSalesInvoiceDto = new OffshoreSalesInvoiceDto(body);

    return await super.changeStatusRequest(request, response, offshoreSalesInvoiceDto);
  }
}

export default OffshoreSalesInvoiceController;
