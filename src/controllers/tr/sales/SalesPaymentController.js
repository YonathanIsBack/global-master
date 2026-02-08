import {
  SalesPaymentAdvanceDto,
  SalesPaymentCoaDto,
  SalesPaymentCoaTotalDto,
  SalesPaymentDepositDto,
  SalesPaymentDtDto,
  SalesPaymentDto,
  SalesPaymentInvoiceDto,
  SalesPaymentRejectDto,
  SalesPaymentRequestDto
} from '../../../dto/tr/sales/SalesPaymentDto.js';
import StandardController from '../../StandardController.js';
import StandardTransactionController from '../../StandardTransactionController.js';

class SalesPaymentController extends StandardTransactionController {
  constructor(salesPayment) {
    super(salesPayment);
    this.create = this.create.bind(this);
    this.restore = this.restore.bind(this);
    this.delete = this.delete.bind(this);
    this.changeStatus = this.changeStatus.bind(this);
    this.changeStatusRequest = this.changeStatusRequest.bind(this);
  }

  async create(request, response) {
    const { body } = request;
    const salesPaymentDto = new SalesPaymentDto(body);

    return await super.insertTransaction(request, response, salesPaymentDto);
  }

  async restore(request, response) {
    const { body } = request;
    const salesPaymentDto = new SalesPaymentDto(body);

    return await super.restore(request, response, salesPaymentDto);
  }

  async delete(request, response) {
    const { body } = request;
    const salesPaymentDto = new SalesPaymentDto(body);

    return await super.delete(request, response, salesPaymentDto);
  }

  async changeStatus(request, response) {
    const {body} = request;
    const salesPaymentDto = new SalesPaymentDto(body);

    return await super.changeStatus(request, response, salesPaymentDto);
  }

  async changeStatusRequest(request, response) {
    const { body } = request;
    const salesPaymentDto = new SalesPaymentDto(body);

    return await super.changeStatusRequest(request, response, salesPaymentDto);
  }
}

class SalesPaymentAdvanceController extends StandardController {
  constructor(salesPaymentAdvance) {
    super(salesPaymentAdvance);
    this.create = this.create.bind(this);
    this.restore = this.restore.bind(this);
    this.delete = this.delete.bind(this);
  }

  async create(request, response) {
    const { body } = request;
    const salesPaymentAdvanceDto = new SalesPaymentAdvanceDto(body);

    return await super.create(request, response, salesPaymentAdvanceDto);
  }

  async restore(request, response) {
    const { body } = request;
    const salesPaymentAdvanceDto = new SalesPaymentAdvanceDto(body);

    return await super.restore(request, response, salesPaymentAdvanceDto);
  }

  async delete(request, response) {
    const { body } = request;
    const salesPaymentAdvanceDto = new SalesPaymentAdvanceDto(body);

    return await super.delete(request, response, salesPaymentAdvanceDto);
  }
}
class SalesPaymentCoaController extends StandardController {
  constructor(salesPaymentCoa) {
    super(salesPaymentCoa);
    this.create = this.create.bind(this);
    this.restore = this.restore.bind(this);
    this.delete = this.delete.bind(this);
  }

  async create(request, response) {
    const { body } = request;
    const salesPaymentCoaDto = new SalesPaymentCoaDto(body);

    return await super.create(request, response, salesPaymentCoaDto);
  }

  async restore(request, response) {
    const { body } = request;
    const salesPaymentCoaDto = new SalesPaymentCoaDto(body);

    return await super.restore(request, response, salesPaymentCoaDto);
  }

  async delete(request, response) {
    const { body } = request;
    const salesPaymentCoaDto = new SalesPaymentCoaDto(body);

    return await super.delete(request, response, salesPaymentCoaDto);
  }
}
class SalesPaymentCoaTotalController extends StandardController {
  constructor(salesPaymentCoaTotal) {
    super(salesPaymentCoaTotal);
    this.create = this.create.bind(this);
    this.restore = this.restore.bind(this);
    this.delete = this.delete.bind(this);
  }

  async create(request, response) {
    const { body } = request;
    const salesPaymentCoaTotalDto = new SalesPaymentCoaTotalDto(body);

    return await super.create(request, response, salesPaymentCoaTotalDto);
  }

  async restore(request, response) {
    const { body } = request;
    const salesPaymentCoaTotalDto = new SalesPaymentCoaTotalDto(body);

    return await super.restore(request, response, salesPaymentCoaTotalDto);
  }

  async delete(request, response) {
    const { body } = request;
    const salesPaymentCoaTotalDto = new SalesPaymentCoaTotalDto(body);

    return await super.delete(request, response, salesPaymentCoaTotalDto);
  }
}
class SalesPaymentDepositController extends StandardController {
  constructor(salesPaymentDeposit) {
    super(salesPaymentDeposit);
    this.create = this.create.bind(this);
    this.restore = this.restore.bind(this);
    this.delete = this.delete.bind(this);
  }

  async create(request, response) {
    const { body } = request;
    const salesPaymentDepositDto = new SalesPaymentDepositDto(body);

    return await super.create(request, response, salesPaymentDepositDto);
  }

  async restore(request, response) {
    const { body } = request;
    const salesPaymentDepositDto = new SalesPaymentDepositDto(body);

    return await super.restore(request, response, salesPaymentDepositDto);
  }

  async delete(request, response) {
    const { body } = request;
    const salesPaymentDepositDto = new SalesPaymentDepositDto(body);

    return await super.delete(request, response, salesPaymentDepositDto);
  }
}
class SalesPaymentDtController extends StandardController {
  constructor(salesPaymentDt) {
    super(salesPaymentDt);
    this.create = this.create.bind(this);
    this.restore = this.restore.bind(this);
    this.delete = this.delete.bind(this);
  }

  async create(request, response) {
    const { body } = request;
    const salesPaymentDtDto = new SalesPaymentDtDto(body);

    return await super.create(request, response, salesPaymentDtDto);
  }

  async restore(request, response) {
    const { body } = request;
    const salesPaymentDtDto = new SalesPaymentDtDto(body);

    return await super.restore(request, response, salesPaymentDtDto);
  }

  async delete(request, response) {
    const { body } = request;
    const salesPaymentDtDto = new SalesPaymentDtDto(body);

    return await super.delete(request, response, salesPaymentDtDto);
  }
}
class SalesPaymentInvoiceController extends StandardController {
  constructor(SalesPaymentInvoice) {
    super(SalesPaymentInvoice);
    this.create = this.create.bind(this);
    this.restore = this.restore.bind(this);
    this.delete = this.delete.bind(this);
  }

  async create(request, response) {
    const { body } = request;
    const salesPaymentInvoiceDto = new SalesPaymentInvoiceDto(body);

    return await super.create(request, response, salesPaymentInvoiceDto);
  }

  async restore(request, response) {
    const { body } = request;
    const salesPaymentInvoiceDto = new SalesPaymentInvoiceDto(body);

    return await super.restore(request, response, salesPaymentInvoiceDto);
  }

  async delete(request, response) {
    const { body } = request;
    const salesPaymentInvoiceDto = new SalesPaymentInvoiceDto(body);

    return await super.delete(request, response, salesPaymentInvoiceDto);
  }
}

class SalesPaymentRejectController extends StandardController {
  constructor(salesPaymentRejectDto) {
    super(salesPaymentRejectDto);
    this.create = this.create.bind(this);
    this.restore = this.restore.bind(this);
    this.delete = this.delete.bind(this);
  }

  async create(request, response) {
    const { body } = request;
    const salesPaymentRejectDto = new SalesPaymentRejectDto(body);

    return await super.create(request, response, salesPaymentRejectDto);
  }

  async restore(request, response) {
    const { body } = request;
    const salesPaymentRejectDto = new SalesPaymentRejectDto(body);

    return await super.restore(request, response, salesPaymentRejectDto);
  }

  async delete(request, response) {
    const { body } = request;
    const salesPaymentRejectDto = new SalesPaymentRejectDto(body);

    return await super.delete(request, response, salesPaymentRejectDto);
  }
}

class SalesPaymentRequestController extends StandardController {
  constructor(salesPaymentRequest) {
    super(salesPaymentRequest);
    this.create = this.create.bind(this);
    this.restore = this.restore.bind(this);
    this.delete = this.delete.bind(this);
  }

  async create(request, response) {
    const { body } = request;
    const salesPaymentRequestDto = new SalesPaymentRequestDto(body);

    return await super.create(request, response, salesPaymentRequestDto);
  }

  async restore(request, response) {
    const { body } = request;
    const salesPaymentRequestDto = new SalesPaymentRequestDto(body);

    return await super.restore(request, response, salesPaymentRequestDto);
  }

  async delete(request, response) {
    const { body } = request;
    const salesPaymentRequestDto = new SalesPaymentRequestDto(body);

    return await super.delete(request, response, salesPaymentRequestDto);
  }
}

export {
  SalesPaymentController,
  SalesPaymentAdvanceController,
  SalesPaymentCoaController,
  SalesPaymentCoaTotalController,
  SalesPaymentDepositController,
  SalesPaymentDtController,
  SalesPaymentInvoiceController,
  SalesPaymentRejectController,
  SalesPaymentRequestController
};
