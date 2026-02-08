import PaymentTermDto from '../dto/PaymentTermDto.js';
import StandardController from './StandardController.js';

class PaymentTermController extends StandardController {
  constructor(paymentTermService) {
    super(paymentTermService);
    this.create = this.create.bind(this);
    this.restore = this.restore.bind(this);
    this.delete = this.delete.bind(this);
  }

  async create(request, response) {
    const { body } = request;
    const paymentTermDto = new PaymentTermDto(body);

    return await super.create(request, response, paymentTermDto);
  }

  async restore(request, response) {
    const { body } = request;
    const paymentTermDto = new PaymentTermDto(body);

    return await super.restore(request, response, paymentTermDto);
  }

  async delete(request, response) {
    const { body } = request;
    const paymentTermDto = new PaymentTermDto(body);

    return await super.delete(request, response, paymentTermDto);
  }
}

export default PaymentTermController;
