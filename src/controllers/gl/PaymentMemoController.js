import { PaymentMemoDto } from '../../dto/gl/PaymentMemoDto.js';
import StandardController from '../StandardController.js';
import StandardTransactionController from '../StandardTransactionController.js';

class PaymentMemoController extends StandardTransactionController {
  constructor(paymentMemoService) {
    super(paymentMemoService);
    this.create = this.create.bind(this);
    this.restore = this.restore.bind(this);
    this.delete = this.delete.bind(this);
    this.changeStatus = this.changeStatus.bind(this);
    this.changeStatusRequest = this.changeStatusRequest.bind(this);
  }

  async create(request, response) {
    const { body } = request;
    const paymentMemoDto = new PaymentMemoDto(body);

    return await super.insertTransaction(request, response, paymentMemoDto);
  }

  async restore(request, response) {
    const { body } = request;
    const paymentMemoDto = new PaymentMemoDto(body);

    return await super.restore(request, response, paymentMemoDto);
  }

  async delete(request, response) {
    const { body } = request;
    const paymentMemoDto = new PaymentMemoDto(body);

    return await super.delete(request, response, paymentMemoDto);
  }

  async changeStatus(request, response) {
    const {body} = request;
    const paymentMemoDto = new PaymentMemoDto(body);

    return await super.changeStatus(request, response, paymentMemoDto);
  }

  async changeStatusRequest(request, response) {
    const { body } = request;
    const paymentMemoDto = new PaymentMemoDto(body);

    return await super.changeStatusRequest(request, response, paymentMemoDto);
  }
}

export default PaymentMemoController;
