import {
  ExportSalesQuoteBc16Dto,
  ExportSalesQuoteDtDto,
  ExportSalesQuoteDto,
  ExportSalesQuoteItemDtDto,
  ExportSalesQuoteRejectDto,
  ExportSalesQuoteRequestDto
} from '../../../dto/tr/export/ExportSalesQuoteDto.js';
import StandardController from '../../StandardController.js';
import StandardTransactionController from '../../StandardTransactionController.js';

class ExportSalesQuoteController extends StandardTransactionController {
  constructor(exportSalesQuote) {
    super(exportSalesQuote);
    this.create = this.create.bind(this);
    this.restore = this.restore.bind(this);
    this.delete = this.delete.bind(this);
    this.changeStatus = this.changeStatus.bind(this);
    this.changeStatusRequest = this.changeStatusRequest.bind(this);
  }

  async create(request, response) {
    const { body } = request;
    const exportSalesQuoteDto = new ExportSalesQuoteDto(body);

    return await super.insertTransaction(request, response, this.#handleExportSalesQuoteBc16PrimaryKey(exportSalesQuoteDto));
  }

  #handleExportSalesQuoteBc16PrimaryKey(exportSalesQuoteDto) {
    const { detailsData } = exportSalesQuoteDto;

    if (detailsData.tr_export_sales_quote_bc16 == null) {
      return exportSalesQuoteDto;
    }

    detailsData.tr_export_sales_quote_bc16 = detailsData.tr_export_sales_quote_bc16.map((data) => {
      return {
        ...data,
        export_sales_quote_bc_16_id: data.export_sales_quote_bc16_id
      };
    });

    return exportSalesQuoteDto;
  }

  async restore(request, response) {
    const { body } = request;
    const exportSalesQuoteDto = new ExportSalesQuoteDto(body);

    return await super.restore(request, response, exportSalesQuoteDto);
  }

  async delete(request, response) {
    const { body } = request;
    const exportSalesQuoteDto = new ExportSalesQuoteDto(body);

    return await super.delete(request, response, exportSalesQuoteDto);
  }

  async changeStatus(request, response) {
    const {body} = request;
    const exportSalesQuoteDto = new ExportSalesQuoteDto(body);

    return await super.changeStatus(request, response, exportSalesQuoteDto);
  }

  async changeStatusRequest(request, response) {
    const { body } = request;
    const exportSalesQuoteDto = new ExportSalesQuoteDto(body);

    return await super.changeStatusRequest(request, response, exportSalesQuoteDto);
  }
}

class ExportSalesQuoteBc16Controller extends StandardController {
  constructor(exportSalesQuoteBc16) {
    super(exportSalesQuoteBc16);
    this.create = this.create.bind(this);
    this.restore = this.restore.bind(this);
    this.delete = this.delete.bind(this);
  }

  async create(request, response) {
    const { body } = request;
    const exportSalesQuoteBc16Dto = new ExportSalesQuoteBc16Dto(body);

    return await super.create(request, response, exportSalesQuoteBc16Dto);
  }

  async restore(request, response) {
    const { body } = request;
    const exportSalesQuoteBc16Dto = new ExportSalesQuoteBc16Dto(body);

    return await super.restore(request, response, exportSalesQuoteBc16Dto);
  }

  async delete(request, response) {
    const { body } = request;
    const exportSalesQuoteBc16Dto = new ExportSalesQuoteBc16Dto(body);

    return await super.delete(request, response, exportSalesQuoteBc16Dto);
  }
}

class ExportSalesQuoteDtController extends StandardController {
  constructor(exportSalesQuoteDt) {
    super(exportSalesQuoteDt);
    this.create = this.create.bind(this);
    this.restore = this.restore.bind(this);
    this.delete = this.delete.bind(this);
  }

  async create(request, response) {
    const { body } = request;
    const exportSalesQuoteDtDto = new ExportSalesQuoteDtDto(body);

    return await super.create(request, response, exportSalesQuoteDtDto);
  }

  async restore(request, response) {
    const { body } = request;
    const exportSalesQuoteDtDto = new ExportSalesQuoteDtDto(body);

    return await super.restore(request, response, exportSalesQuoteDtDto);
  }

  async delete(request, response) {
    const { body } = request;
    const exportSalesQuoteDtDto = new ExportSalesQuoteDtDto(body);

    return await super.delete(request, response, exportSalesQuoteDtDto);
  }
}

class ExportSalesQuoteItemDtController extends StandardController {
  constructor(exportSalesQuoteItemDt) {
    super(exportSalesQuoteItemDt);
    this.create = this.create.bind(this);
    this.restore = this.restore.bind(this);
    this.delete = this.delete.bind(this);
  }

  async create(request, response) {
    const { body } = request;
    const exportSalesQuoteItemDtDto = new ExportSalesQuoteItemDtDto(body);

    return await super.create(request, response, exportSalesQuoteItemDtDto);
  }

  async restore(request, response) {
    const { body } = request;
    const exportSalesQuoteItemDtDto = new ExportSalesQuoteItemDtDto(body);

    return await super.restore(request, response, exportSalesQuoteItemDtDto);
  }

  async delete(request, response) {
    const { body } = request;
    const exportSalesQuoteItemDtDto = new ExportSalesQuoteItemDtDto(body);

    return await super.delete(request, response, exportSalesQuoteItemDtDto);
  }
}

class ExportSalesQuoteRejectController extends StandardController {
  constructor(exportSalesQuoteReject) {
    super(exportSalesQuoteReject);
    this.create = this.create.bind(this);
    this.restore = this.restore.bind(this);
    this.delete = this.delete.bind(this);
  }

  async create(request, response) {
    const { body } = request;
    const exportSalesQuoteRejectDto = new ExportSalesQuoteRejectDto(body);

    return await super.create(request, response, exportSalesQuoteRejectDto);
  }

  async restore(request, response) {
    const { body } = request;
    const exportSalesQuoteRejectDto = new ExportSalesQuoteRejectDto(body);

    return await super.restore(request, response, exportSalesQuoteRejectDto);
  }

  async delete(request, response) {
    const { body } = request;
    const exportSalesQuoteRejectDto = new ExportSalesQuoteRejectDto(body);

    return await super.delete(request, response, exportSalesQuoteRejectDto);
  }
}

class ExportSalesQuoteRequestController extends StandardController {
  constructor(exportSalesQuoteRequest) {
    super(exportSalesQuoteRequest);
    this.create = this.create.bind(this);
    this.restore = this.restore.bind(this);
    this.delete = this.delete.bind(this);
  }

  async create(request, response) {
    const { body } = request;
    const exportSalesQuoteRequestDto = new ExportSalesQuoteRequestDto(body);

    return await super.create(request, response, exportSalesQuoteRequestDto);
  }

  async restore(request, response) {
    const { body } = request;
    const exportSalesQuoteRequestDto = new ExportSalesQuoteRequestDto(body);

    return await super.restore(request, response, exportSalesQuoteRequestDto);
  }

  async delete(request, response) {
    const { body } = request;
    const exportSalesQuoteRequestDto = new ExportSalesQuoteRequestDto(body);

    return await super.delete(request, response, exportSalesQuoteRequestDto);
  }
}

export {
  ExportSalesQuoteController,
  ExportSalesQuoteBc16Controller,
  ExportSalesQuoteDtController,
  ExportSalesQuoteItemDtController,
  ExportSalesQuoteRejectController,
  ExportSalesQuoteRequestController
};
