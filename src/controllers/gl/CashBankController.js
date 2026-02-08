import { CashBankDto } from '../../dto/gl/CashBankDto.js';
import StandardController from '../StandardController.js';
import StandardTransactionController from '../StandardTransactionController.js';

class CashBankController extends StandardTransactionController {
  constructor(cashBankService) {
    super(cashBankService);
    this.create = this.create.bind(this);
    this.restore = this.restore.bind(this);
    this.delete = this.delete.bind(this);
    this.changeStatus = this.changeStatus.bind(this);
    this.changeStatusRequest = this.changeStatusRequest.bind(this);
  }

  async create(request, response) {
    const { body } = request;
    const cashBankDto = new CashBankDto(body);

    return await super.insertTransaction(request, response, cashBankDto);
  }

  async restore(request, response) {
    const { body } = request;
    const cashBankDto = new CashBankDto(body);

    return await super.restore(request, response, cashBankDto);
  }

  async delete(request, response) {
    const { body } = request;
    const cashBankDto = new CashBankDto(body);

    return await super.delete(request, response, cashBankDto);
  }

  async changeStatus(request, response) {
    const {body} = request;
    const cashBankDto = new CashBankDto(body);

    return await super.changeStatus(request, response, cashBankDto);
  }

  async changeStatusRequest(request, response) {
    const { body } = request;
    const cashBankDto = new CashBankDto(body);

    return await super.changeStatusRequest(request, response, cashBankDto);
  }
}

export default CashBankController;
