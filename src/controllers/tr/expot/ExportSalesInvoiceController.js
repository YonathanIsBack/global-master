import {
  ExportSalesInvDto,
  ExportSalesInvoiceAdvanceDto,
  ExportSalesInvoiceBc16Dto,
  ExportSalesInvoiceDtDto,
  ExportSalesInvoiceItemDtDto,
  ExportSalesInvoiceRejectDto,
  ExportSalesInvoiceRequestDto
} from '../../../dto/tr/export/ExportSalesInvDto.js';
import StandardController from '../../StandardController.js';
import StandardTransactionController from '../../StandardTransactionController.js';

class ExportSalesInvoiceController extends StandardTransactionController {
  constructor(exportSalesAdvPay) {
    super(exportSalesAdvPay);
    this.create = this.create.bind(this);
    this.restore = this.restore.bind(this);
    this.delete = this.delete.bind(this);
    this.changeStatus = this.changeStatus.bind(this);
    this.changeStatusRequest = this.changeStatusRequest.bind(this);
  }

  async create(request, response) {
    const { body } = request;
    const exportSalesInvoiceDto = new ExportSalesInvDto(body);

    return await super.insertTransaction(request, response, this.#handleExportSalesInvBc16PrimaryKey(exportSalesInvoiceDto));
  }

  #handleExportSalesInvBc16PrimaryKey(exportSalesInvoiceDto) {
    const { detailsData } = exportSalesInvoiceDto;

    if (detailsData.tr_export_sales_inv_bc16 == null) {
      return exportSalesInvoiceDto;
    }

    detailsData.tr_export_sales_inv_bc16 = detailsData.tr_export_sales_inv_bc16.map((data) => {
      return {
        ...data,
        export_sales_inv_bc_16_id: data.export_sales_inv_bc16_id
      };
    });

    return exportSalesInvoiceDto;
  }

  async restore(request, response) {
    const { body } = request;
    const exportSalesInvoiceDto = new ExportSalesInvDto(body);

    return await super.restore(request, response, exportSalesInvoiceDto);
  }

  async delete(request, response) {
    const { body } = request;
    const exportSalesInvoiceDto = new ExportSalesInvDto(body);

    return await super.delete(request, response, exportSalesInvoiceDto);
  }
  async changeStatus(request, response) {
    const {body} = request;
    const exportSalesInvoiceDto = new ExportSalesInvDto(body);

    return await super.changeStatus(request, response, this.#handleExportSalesInvBc16PrimaryKey(exportSalesInvoiceDto));
  }

  async changeStatusRequest(request, response) {
    const { body } = request;
    const exportSalesInvoiceDto = new ExportSalesInvDto(body);

    return await super.changeStatusRequest(request, response, this.#handleExportSalesInvBc16PrimaryKey(exportSalesInvoiceDto));
  }
}

class ExportSalesInvoiceAdvanceController extends StandardController {
  constructor(exportSalesInvoiceAdvance) {
    super(exportSalesInvoiceAdvance);
    this.create = this.create.bind(this);
    this.restore = this.restore.bind(this);
    this.delete = this.delete.bind(this);
  }

  async create(request, response) {
    const { body } = request;
    const exportSalesInvoiceAdvanceDto = new ExportSalesInvoiceAdvanceDto(body);

    return await super.create(request, response, exportSalesInvoiceAdvanceDto);
  }

  async restore(request, response) {
    const { body } = request;
    const exportSalesInvoiceAdvanceDto = new ExportSalesInvoiceAdvanceDto(body);

    return await super.restore(request, response, exportSalesInvoiceAdvanceDto);
  }

  async delete(request, response) {
    const { body } = request;
    const exportSalesInvoiceAdvanceDto = new ExportSalesInvoiceAdvanceDto(body);

    return await super.delete(request, response, exportSalesInvoiceAdvanceDto);
  }
}

class ExportSalesInvoiceBc16Controller extends StandardController {
  constructor(exportSalesInvoiceBc16) {
    super(exportSalesInvoiceBc16);
    this.create = this.create.bind(this);
    this.restore = this.restore.bind(this);
    this.delete = this.delete.bind(this);
  }

  async create(request, response) {
    const { body } = request;
    const exportSalesInvoiceBc16Dto = new ExportSalesInvoiceBc16Dto(body);

    return await super.create(request, response, exportSalesInvoiceBc16Dto);
  }

  async restore(request, response) {
    const { body } = request;
    const exportSalesInvoiceBc16Dto = new ExportSalesInvoiceBc16Dto(body);

    return await super.restore(request, response, exportSalesInvoiceBc16Dto);
  }

  async delete(request, response) {
    const { body } = request;
    const exportSalesInvoiceBc16Dto = new ExportSalesInvoiceBc16Dto(body);

    return await super.delete(request, response, exportSalesInvoiceBc16Dto);
  }
}

class ExportSalesInvoiceDtController extends StandardController {
  constructor(exportSalesInvoiceDt) {
    super(exportSalesInvoiceDt);
    this.create = this.create.bind(this);
    this.restore = this.restore.bind(this);
    this.delete = this.delete.bind(this);
  }

  async create(request, response) {
    const { body } = request;
    const exportSalesInvoiceDtDto = new ExportSalesInvoiceDtDto(body);

    return await super.create(request, response, exportSalesInvoiceDtDto);
  }

  async restore(request, response) {
    const { body } = request;
    const exportSalesInvoiceDtDto = new ExportSalesInvoiceDtDto(body);

    return await super.restore(request, response, exportSalesInvoiceDtDto);
  }

  async delete(request, response) {
    const { body } = request;
    const exportSalesInvoiceDtDto = new ExportSalesInvoiceDtDto(body);

    return await super.delete(request, response, exportSalesInvoiceDtDto);
  }
}

class ExportSalesInvoiceItemDtController extends StandardController {
  constructor(exportSalesInvoiceItemDt) {
    super(exportSalesInvoiceItemDt);
    this.create = this.create.bind(this);
    this.restore = this.restore.bind(this);
    this.delete = this.delete.bind(this);
  }

  async create(request, response) {
    const { body } = request;
    const exportSalesInvoiceItemDtDto = new ExportSalesInvoiceItemDtDto(body);

    return await super.create(request, response, exportSalesInvoiceItemDtDto);
  }

  async restore(request, response) {
    const { body } = request;
    const exportSalesInvoiceItemDtDto = new ExportSalesInvoiceItemDtDto(body);

    return await super.restore(request, response, exportSalesInvoiceItemDtDto);
  }

  async delete(request, response) {
    const { body } = request;
    const exportSalesInvoiceItemDtDto = new ExportSalesInvoiceItemDtDto(body);

    return await super.delete(request, response, exportSalesInvoiceItemDtDto);
  }
}

class ExportSalesInvoiceRejectController extends StandardController {
  constructor(exportSalesInvoiceReject) {
    super(exportSalesInvoiceReject);
    this.create = this.create.bind(this);
    this.restore = this.restore.bind(this);
    this.delete = this.delete.bind(this);
  }

  async create(request, response) {
    const { body } = request;
    const exportSalesInvoiceRejectDto = new ExportSalesInvoiceRejectDto(body);

    return await super.create(request, response, exportSalesInvoiceRejectDto);
  }

  async restore(request, response) {
    const { body } = request;
    const exportSalesInvoiceRejectDto = new ExportSalesInvoiceRejectDto(body);

    return await super.restore(request, response, exportSalesInvoiceRejectDto);
  }

  async delete(request, response) {
    const { body } = request;
    const exportSalesInvoiceRejectDto = new ExportSalesInvoiceRejectDto(body);

    return await super.delete(request, response, exportSalesInvoiceRejectDto);
  }
}

class ExportSalesInvoiceRequestController extends StandardController {
  constructor(exportSalesInvoiceRequest) {
    super(exportSalesInvoiceRequest);
    this.create = this.create.bind(this);
    this.restore = this.restore.bind(this);
    this.delete = this.delete.bind(this);
  }

  async create(request, response) {
    const { body } = request;
    const exportSalesInvoiceRequestDto = new ExportSalesInvoiceRequestDto(body);

    return await super.create(request, response, exportSalesInvoiceRequestDto);
  }

  async restore(request, response) {
    const { body } = request;
    const exportSalesInvoiceRequestDto = new ExportSalesInvoiceRequestDto(body);

    return await super.restore(request, response, exportSalesInvoiceRequestDto);
  }

  async delete(request, response) {
    const { body } = request;
    const exportSalesInvoiceRequestDto = new ExportSalesInvoiceRequestDto(body);

    return await super.delete(request, response, exportSalesInvoiceRequestDto);
  }
}

export {
  ExportSalesInvoiceController,
  ExportSalesInvoiceAdvanceController,
  ExportSalesInvoiceBc16Controller,
  ExportSalesInvoiceDtController,
  ExportSalesInvoiceItemDtController,
  ExportSalesInvoiceRejectController,
  ExportSalesInvoiceRequestController
};
