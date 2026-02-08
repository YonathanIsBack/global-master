import {
  ExportSalesPaymentAdvanceDto,
  ExportSalesPaymentCoaDto,
  ExportSalesPaymentCoaSDto,
  ExportSalesPaymentCoaTDto,
  ExportSalesPaymentCoaTotalDto,
  ExportSalesPaymentDepositDto,
  ExportSalesPaymentDtDto,
  ExportSalesPaymentDto,
  ExportSalesPaymentRejectDto,
  ExportSalesPaymentRequestDto
} from '../../../dto/tr/export/ExportSalesPaymentDto.js';
import StandardController from '../../StandardController.js';
import StandardTransactionController from '../../StandardTransactionController.js';

class ExportSalesPaymentController extends StandardTransactionController {
  constructor(exportSalesPayment) {
    super(exportSalesPayment);
    this.create = this.create.bind(this);
    this.restore = this.restore.bind(this);
    this.delete = this.delete.bind(this);
    this.changeStatus = this.changeStatus.bind(this);
    this.changeStatusRequest = this.changeStatusRequest.bind(this);
  }

  async create(request, response) {
    const { body } = request;
    const exportSalesPaymentDto = new ExportSalesPaymentDto(body);

    return await super.insertTransaction(request, response, exportSalesPaymentDto);
  }

  async restore(request, response) {
    const { body } = request;
    const exportSalesPaymentDto = new ExportSalesPaymentDto(body);

    return await super.restore(request, response, exportSalesPaymentDto);
  }

  async delete(request, response) {
    const { body } = request;
    const exportSalesPaymentDto = new ExportSalesPaymentDto(body);

    return await super.delete(request, response, exportSalesPaymentDto);
  }

  async changeStatus(request, response) {
    const {body} = request;
    const exportSalesPaymentDto = new ExportSalesPaymentDto(body);

    return await super.changeStatus(request, response, exportSalesPaymentDto);
  }

  async changeStatusRequest(request, response) {
    const { body } = request;
    const exportSalesPaymentDto = new ExportSalesPaymentDto(body);

    return await super.changeStatusRequest(request, response, exportSalesPaymentDto);
  }
}

class ExportSalesPaymentAdvanceController extends StandardController {
  constructor(exportSalesPaymentAdvance) {
    super(exportSalesPaymentAdvance);
    this.create = this.create.bind(this);
    this.restore = this.restore.bind(this);
    this.delete = this.delete.bind(this);
  }

  async create(request, response) {
    const { body } = request;
    const exportSalesPaymentAdvanceDto = new ExportSalesPaymentAdvanceDto(body);

    return await super.create(request, response, exportSalesPaymentAdvanceDto);
  }

  async restore(request, response) {
    const { body } = request;
    const exportSalesPaymentAdvanceDto = new ExportSalesPaymentAdvanceDto(body);

    return await super.restore(request, response, exportSalesPaymentAdvanceDto);
  }

  async delete(request, response) {
    const { body } = request;
    const exportSalesPaymentAdvanceDto = new ExportSalesPaymentAdvanceDto(body);

    return await super.delete(request, response, exportSalesPaymentAdvanceDto);
  }
}

class ExportSalesPaymentCoaController extends StandardController {
  constructor(exportSalesPaymentCoa) {
    super(exportSalesPaymentCoa);
    this.create = this.create.bind(this);
    this.restore = this.restore.bind(this);
    this.delete = this.delete.bind(this);
  }

  async create(request, response) {
    const { body } = request;
    const exportSalesPaymentCoaDto = new ExportSalesPaymentCoaDto(body);

    return await super.create(request, response, exportSalesPaymentCoaDto);
  }

  async restore(request, response) {
    const { body } = request;
    const exportSalesPaymentCoaDto = new exportSalesPaymentCoaDto(body);

    return await super.restore(request, response, exportSalesPaymentCoaDto);
  }

  async delete(request, response) {
    const { body } = request;
    const exportSalesPaymentCoaDto = new ExportSalesPaymentCoaDto(body);

    return await super.delete(request, response, exportSalesPaymentCoaDto);
  }
}

class ExportSalesPaymentCoaSController extends StandardController {
  constructor(exportSalesPaymentCoaS) {
    super(exportSalesPaymentCoaS);
    this.create = this.create.bind(this);
    this.restore = this.restore.bind(this);
    this.delete = this.delete.bind(this);
  }

  async create(request, response) {
    const { body } = request;
    const exportSalesPaymentCoaSDto = new ExportSalesPaymentCoaSDto(body);

    return await super.create(request, response, exportSalesPaymentCoaSDto);
  }

  async restore(request, response) {
    const { body } = request;
    const exportSalesPaymentCoaSDto = new ExportSalesPaymentCoaSDto(body);

    return await super.restore(request, response, exportSalesPaymentCoaSDto);
  }

  async delete(request, response) {
    const { body } = request;
    const exportSalesPaymentCoaSDto = new ExportSalesPaymentCoaSDto(body);

    return await super.delete(request, response, exportSalesPaymentCoaSDto);
  }
}

class ExportSalesPaymentCoaTController extends StandardController {
  constructor(exportSalesPaymentCoaT) {
    super(exportSalesPaymentCoaT);
    this.create = this.create.bind(this);
    this.restore = this.restore.bind(this);
    this.delete = this.delete.bind(this);
  }

  async create(request, response) {
    const { body } = request;
    const exportSalesPaymentCoaTDto = new ExportSalesPaymentCoaTDto(body);

    return await super.create(request, response, exportSalesPaymentCoaTDto);
  }

  async restore(request, response) {
    const { body } = request;
    const exportSalesPaymentCoaTDto = new ExportSalesPaymentCoaTDto(body);

    return await super.restore(request, response, exportSalesPaymentCoaTDto);
  }

  async delete(request, response) {
    const { body } = request;
    const exportSalesPaymentCoaTDto = new ExportSalesPaymentCoaTDto(body);

    return await super.delete(request, response, exportSalesPaymentCoaTDto);
  }
}

class ExportSalesPaymentCoaTotalController extends StandardController {
  constructor(exportSalesPaymentCoaTotal) {
    super(exportSalesPaymentCoaTotal);
    this.create = this.create.bind(this);
    this.restore = this.restore.bind(this);
    this.delete = this.delete.bind(this);
  }

  async create(request, response) {
    const { body } = request;
    const exportSalesPaymentCoaTotalDto = new ExportSalesPaymentCoaTotalDto(body);

    return await super.create(request, response, exportSalesPaymentCoaTotalDto);
  }

  async restore(request, response) {
    const { body } = request;
    const exportSalesPaymentCoaTotalDto = new ExportSalesPaymentCoaTotalDto(body);

    return await super.restore(request, response, exportSalesPaymentCoaTotalDto);
  }

  async delete(request, response) {
    const { body } = request;
    const exportSalesPaymentCoaTotalDto = new ExportSalesPaymentCoaTotalDto(body);

    return await super.delete(request, response, exportSalesPaymentCoaTotalDto);
  }
}
class ExportSalesPaymentDepositController extends StandardController {
  constructor(exportSalesPaymentDeposit) {
    super(exportSalesPaymentDeposit);
    this.create = this.create.bind(this);
    this.restore = this.restore.bind(this);
    this.delete = this.delete.bind(this);
  }

  async create(request, response) {
    const { body } = request;
    const exportSalesPaymentDepositDto = new ExportSalesPaymentDepositDto(body);

    return await super.create(request, response, exportSalesPaymentDepositDto);
  }

  async restore(request, response) {
    const { body } = request;
    const exportSalesPaymentDepositDto = new ExportSalesPaymentDepositDto(body);

    return await super.restore(request, response, exportSalesPaymentDepositDto);
  }

  async delete(request, response) {
    const { body } = request;
    const exportSalesPaymentDepositDto = new ExportSalesPaymentDepositDto(body);

    return await super.delete(request, response, exportSalesPaymentDepositDto);
  }
}
class ExportSalesPaymentDtController extends StandardController {
  constructor(exportSalesPaymentDt) {
    super(exportSalesPaymentDt);
    this.create = this.create.bind(this);
    this.restore = this.restore.bind(this);
    this.delete = this.delete.bind(this);
  }

  async create(request, response) {
    const { body } = request;
    const exportSalesPaymentDtDto = new ExportSalesPaymentDtDto(body);

    return await super.create(request, response, exportSalesPaymentDtDto);
  }

  async restore(request, response) {
    const { body } = request;
    const exportSalesPaymentDtDto = new ExportSalesPaymentDtDto(body);

    return await super.restore(request, response, exportSalesPaymentDtDto);
  }

  async delete(request, response) {
    const { body } = request;
    const exportSalesPaymentDtDto = new ExportSalesPaymentDtDto(body);

    return await super.delete(request, response, exportSalesPaymentDtDto);
  }
}
class ExportSalesPaymentRejectController extends StandardController {
  constructor(exportSalesPaymentReject) {
    super(exportSalesPaymentReject);
    this.create = this.create.bind(this);
    this.restore = this.restore.bind(this);
    this.delete = this.delete.bind(this);
  }

  async create(request, response) {
    const { body } = request;
    const exportSalesPaymentRejectDto = new ExportSalesPaymentRejectDto(body);

    return await super.create(request, response, exportSalesPaymentRejectDto);
  }

  async restore(request, response) {
    const { body } = request;
    const exportSalesPaymentRejectDto = new ExportSalesPaymentRejectDto(body);

    return await super.restore(request, response, exportSalesPaymentRejectDto);
  }

  async delete(request, response) {
    const { body } = request;
    const exportSalesPaymentRejectDto = new ExportSalesPaymentRejectDto(body);

    return await super.delete(request, response, exportSalesPaymentRejectDto);
  }
}
class ExportSalesPaymentRequestController extends StandardController {
  constructor(exportSalesPaymentRequest) {
    super(exportSalesPaymentRequest);
    this.create = this.create.bind(this);
    this.restore = this.restore.bind(this);
    this.delete = this.delete.bind(this);
  }

  async create(request, response) {
    const { body } = request;
    const exportSalesPaymentRequestDto = new ExportSalesPaymentRequestDto(body);

    return await super.create(request, response, exportSalesPaymentRequestDto);
  }

  async restore(request, response) {
    const { body } = request;
    const exportSalesPaymentRequestDto = new ExportSalesPaymentRequestDto(body);

    return await super.restore(request, response, exportSalesPaymentRequestDto);
  }

  async delete(request, response) {
    const { body } = request;
    const exportSalesPaymentRequestDto = new ExportSalesPaymentRequestDto(body);

    return await super.delete(request, response, exportSalesPaymentRequestDto);
  }
}

export {
  ExportSalesPaymentController,
  ExportSalesPaymentAdvanceController,
  ExportSalesPaymentCoaController,
  ExportSalesPaymentCoaSController,
  ExportSalesPaymentCoaTController,
  ExportSalesPaymentCoaTotalController,
  ExportSalesPaymentDepositController,
  ExportSalesPaymentDtController,
  ExportSalesPaymentRejectController,
  ExportSalesPaymentRequestController
};
