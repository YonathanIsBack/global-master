import {
  SalesInvoiceAdvanceDto,
  SalesInvoiceDepositDto,
  SalesInvoiceDtDto,
  SalesInvoiceDto,
  SalesInvoiceExportLogDto,
  SalesInvoiceItemDtDto,
  SalesInvoiceRejectDto
} from '../../../dto/tr/sales/SalesInvoiceDto.js';
import StandardController from '../../StandardController.js';
import StandardTransactionController from '../../StandardTransactionController.js';

class SalesInvoiceController extends StandardTransactionController {
  constructor(salesInvoice) {
    super(salesInvoice);
    this.create = this.create.bind(this);
    this.restore = this.restore.bind(this);
    this.delete = this.delete.bind(this);
    this.changeStatus = this.changeStatus.bind(this);
    this.changeStatusRequest = this.changeStatusRequest.bind(this);
  }

  async create(request, response) {
    const { body } = request;
    const salesInvoiceDto = new SalesInvoiceDto(body);

    return await super.insertTransaction(request, response, salesInvoiceDto);
  }

  async restore(request, response) {
    const { body } = request;
    const salesInvoiceDto = new SalesInvoiceDto(body);

    return await super.restore(request, response, salesInvoiceDto);
  }

  async delete(request, response) {
    const { body } = request;
    const salesInvoiceDto = new SalesInvoiceDto(body);

    return await super.delete(request, response, salesInvoiceDto);
  }

  async changeStatus(request, response) {
    const {body} = request;
    const salesInvoiceDto = new SalesInvoiceDto(body);

    return await super.changeStatus(request, response, salesInvoiceDto);
  }

  async changeStatusRequest(request, response) {
    const { body } = request;
    const salesInvoiceDto = new SalesInvoiceDto(body);

    return await super.changeStatusRequest(request, response, salesInvoiceDto);
  }
}

class SalesInvoiceAdvanceController extends StandardController {
  constructor(salesDeliveryFixedDt) {
    super(salesDeliveryFixedDt);
    this.create = this.create.bind(this);
    this.restore = this.restore.bind(this);
    this.delete = this.delete.bind(this);
  }

  async create(request, response) {
    const { body } = request;
    const salesInvoiceAdvanceDto = new SalesInvoiceAdvanceDto(body);

    return await super.create(request, response, salesInvoiceAdvanceDto);
  }

  async restore(request, response) {
    const { body } = request;
    const salesInvoiceAdvanceDto = new SalesInvoiceAdvanceDto(body);

    return await super.restore(request, response, salesInvoiceAdvanceDto);
  }

  async delete(request, response) {
    const { body } = request;
    const salesInvoiceAdvanceDto = new SalesInvoiceAdvanceDto(body);

    return await super.delete(request, response, salesInvoiceAdvanceDto);
  }
}
class SalesInvoiceDepositController extends StandardController {
  constructor(salesDeliveryFixeditemDt) {
    super(salesDeliveryFixeditemDt);
    this.create = this.create.bind(this);
    this.restore = this.restore.bind(this);
    this.delete = this.delete.bind(this);
  }

  async create(request, response) {
    const { body } = request;
    const salesInvoiceDepositDto = new SalesInvoiceDepositDto(body);

    return await super.create(request, response, salesInvoiceDepositDto);
  }

  async restore(request, response) {
    const { body } = request;
    const salesInvoiceDepositDto = new SalesInvoiceDepositDto(body);

    return await super.restore(request, response, salesInvoiceDepositDto);
  }

  async delete(request, response) {
    const { body } = request;
    const salesInvoiceDepositDto = new SalesInvoiceDepositDto(body);

    return await super.delete(request, response, salesInvoiceDepositDto);
  }
}
class SalesInvoiceDtController extends StandardController {
  constructor(salesInvoiceDt) {
    super(salesInvoiceDt);
    this.create = this.create.bind(this);
    this.restore = this.restore.bind(this);
    this.delete = this.delete.bind(this);
  }

  async create(request, response) {
    const { body } = request;
    const salesInvoiceDtDto = new SalesInvoiceDtDto(body);

    return await super.create(request, response, salesInvoiceDtDto);
  }

  async restore(request, response) {
    const { body } = request;
    const salesInvoiceDtDto = new SalesInvoiceDtDto(body);

    return await super.restore(request, response, salesInvoiceDtDto);
  }

  async delete(request, response) {
    const { body } = request;
    const salesInvoiceDtDto = new SalesInvoiceDtDto(body);

    return await super.delete(request, response, salesInvoiceDtDto);
  }
}
class SalesInvoiceExportLogController extends StandardController {
  constructor(SalesInvoiceExportLog) {
    super(SalesInvoiceExportLog);
    this.create = this.create.bind(this);
    this.restore = this.restore.bind(this);
    this.delete = this.delete.bind(this);
  }

  async create(request, response) {
    const { body } = request;
    const salesInvoiceItemDtDto = new SalesInvoiceExportLogDto(body);

    return await super.create(request, response, salesInvoiceItemDtDto);
  }

  async restore(request, response) {
    const { body } = request;
    const salesInvoiceItemDtDto = new SalesInvoiceExportLogDto(body);

    return await super.restore(request, response, salesInvoiceItemDtDto);
  }

  async delete(request, response) {
    const { body } = request;
    const salesInvoiceItemDtDto = new SalesInvoiceExportLogDto(body);

    return await super.delete(request, response, salesInvoiceItemDtDto);
  }
}
class SalesInvoiceItemDtController extends StandardController {
  constructor(salesInvoiceItemDt) {
    super(salesInvoiceItemDt);
    this.create = this.create.bind(this);
    this.restore = this.restore.bind(this);
    this.delete = this.delete.bind(this);
  }

  async create(request, response) {
    const { body } = request;
    const salesInvoiceItemDtDto = new SalesInvoiceItemDtDto(body);

    return await super.create(request, response, salesInvoiceItemDtDto);
  }

  async restore(request, response) {
    const { body } = request;
    const salesInvoiceItemDtDto = new SalesInvoiceItemDtDto(body);

    return await super.restore(request, response, salesInvoiceItemDtDto);
  }

  async delete(request, response) {
    const { body } = request;
    const salesInvoiceItemDtDto = new SalesInvoiceItemDtDto(body);

    return await super.delete(request, response, salesInvoiceItemDtDto);
  }
}

class SalesInvoiceRejectController extends StandardController {
  constructor(salesInvoiceReject) {
    super(salesInvoiceReject);
    this.create = this.create.bind(this);
    this.restore = this.restore.bind(this);
    this.delete = this.delete.bind(this);
  }

  async create(request, response) {
    const { body } = request;
    const salesInvoiceRejectDto = new SalesInvoiceRejectDto(body);

    return await super.create(request, response, salesInvoiceRejectDto);
  }

  async restore(request, response) {
    const { body } = request;
    const salesInvoiceRejectDto = new SalesInvoiceRejectDto(body);

    return await super.restore(request, response, salesInvoiceRejectDto);
  }

  async delete(request, response) {
    const { body } = request;
    const salesInvoiceRejectDto = new SalesInvoiceRejectDto(body);

    return await super.delete(request, response, salesInvoiceRejectDto);
  }
}

class SalesInvoiceReturnController extends StandardController {
  constructor(salesInvoiceReturn) {
    super(salesInvoiceReturn);
    this.create = this.create.bind(this);
    this.restore = this.restore.bind(this);
    this.delete = this.delete.bind(this);
  }

  async create(request, response) {
    const { body } = request;
    const salesInvoiceReturnDto = new SalesDeliveryFixedRequestDto(body);

    return await super.create(request, response, salesInvoiceReturnDto);
  }

  async restore(request, response) {
    const { body } = request;
    const salesInvoiceReturnDto = new SalesDeliveryFixedRequestDto(body);

    return await super.restore(request, response, salesInvoiceReturnDto);
  }

  async delete(request, response) {
    const { body } = request;
    const salesInvoiceReturnDto = new SalesDeliveryFixedRequestDto(body);

    return await super.delete(request, response, salesInvoiceReturnDto);
  }
}

export {
  SalesInvoiceController,
  SalesInvoiceAdvanceController,
  SalesInvoiceDepositController,
  SalesInvoiceDtController,
  SalesInvoiceExportLogController,
  SalesInvoiceItemDtController,
  SalesInvoiceRejectController,
  SalesInvoiceReturnController
};
