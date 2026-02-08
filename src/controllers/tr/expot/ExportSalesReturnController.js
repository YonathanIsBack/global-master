import {
  ExportSalesReturnBc16Dto,
  ExportSalesReturnCoaDto,
  ExportSalesReturnDtDto,
  ExportSalesReturnDto,
  ExportSalesReturnItemDtDto,
  ExportSalesReturnRejectDto,
  ExportSalesReturnRequestDto
} from '../../../dto/tr/export/ExportSalesReturnDto.js';
import StandardController from '../../StandardController.js';
import StandardTransactionController from '../../StandardTransactionController.js';

class ExportSalesReturnController extends StandardTransactionController {
  constructor(exportSalesReturn) {
    super(exportSalesReturn);
    this.create = this.create.bind(this);
    this.restore = this.restore.bind(this);
    this.delete = this.delete.bind(this);
    this.changeStatus = this.changeStatus.bind(this);
    this.changeStatusRequest = this.changeStatusRequest.bind(this);
  }

  async create(request, response) {
    const { body } = request;
    const exportSalesReturnDto = new ExportSalesReturnDto(body);

    return await super.insertTransaction(request, response, this.#handleExportReturnBc16PrimaryKey(exportSalesReturnDto));
  }

  #handleExportReturnBc16PrimaryKey(exportSalesReturnDto) {
    const { detailsData } = exportSalesReturnDto;

    if (detailsData.tr_export_sales_return_bc16 == null) {
      return exportSalesReturnDto;
    }

    detailsData.tr_export_sales_return_bc16 = detailsData.tr_export_sales_return_bc16.map((data) => {
      return {
        ...data,
        export_sales_return_bc_16_id: data.export_sales_return_bc16_id
      };
    });

    return exportSalesReturnDto;
  }

  async restore(request, response) {
    const { body } = request;
    const exportSalesReturnDto = new ExportSalesReturnDto(body);

    return await super.restore(request, response, exportSalesReturnDto);
  }

  async delete(request, response) {
    const { body } = request;
    const exportSalesReturnDto = new ExportSalesReturnDto(body);

    return await super.delete(request, response, exportSalesReturnDto);
  }

  async changeStatus(request, response) {
    const {body} = request;
    const exportSalesReturnDto = new ExportSalesReturnDto(body);

    return await super.changeStatus(request, response, exportSalesReturnDto);
  }

  async changeStatusRequest(request, response) {
    const { body } = request;
    const exportSalesReturnDto = new ExportSalesReturnDto(body);

    return await super.changeStatusRequest(request, response, exportSalesReturnDto);
  }
}

class ExportSalesReturnBc16DController extends StandardController {
  constructor(exportSalesReturnBc16) {
    super(exportSalesReturnBc16);
    this.create = this.create.bind(this);
    this.restore = this.restore.bind(this);
    this.delete = this.delete.bind(this);
  }

  async create(request, response) {
    const { body } = request;
    const exportSalesReturnBc16Dto = new ExportSalesReturnBc16Dto(body);

    return await super.create(request, response, exportSalesReturnBc16Dto);
  }

  async restore(request, response) {
    const { body } = request;
    const exportSalesReturnBc16Dto = new ExportSalesReturnBc16Dto(body);

    return await super.restore(request, response, exportSalesReturnBc16Dto);
  }

  async delete(request, response) {
    const { body } = request;
    const exportSalesReturnBc16Dto = new ExportSalesReturnBc16Dto(body);

    return await super.delete(request, response, exportSalesReturnBc16Dto);
  }
}

class ExportSalesReturnCoaController extends StandardController {
  constructor(exportSalesReturnCoa) {
    super(exportSalesReturnCoa);
    this.create = this.create.bind(this);
    this.restore = this.restore.bind(this);
    this.delete = this.delete.bind(this);
  }

  async create(request, response) {
    const { body } = request;
    const exportSalesReturnCoaDto = new ExportSalesReturnCoaDto(body);

    return await super.create(request, response, exportSalesReturnCoaDto);
  }

  async restore(request, response) {
    const { body } = request;
    const exportSalesReturnCoaDto = new ExportSalesReturnCoaDto(body);

    return await super.restore(request, response, exportSalesReturnCoaDto);
  }

  async delete(request, response) {
    const { body } = request;
    const exportSalesReturnCoaDto = new ExportSalesReturnCoaDto(body);

    return await super.delete(request, response, exportSalesReturnCoaDto);
  }
}

class ExportSalesReturnDtController extends StandardController {
  constructor(exportSalesReturnDt) {
    super(exportSalesReturnDt);
    this.create = this.create.bind(this);
    this.restore = this.restore.bind(this);
    this.delete = this.delete.bind(this);
  }

  async create(request, response) {
    const { body } = request;
    const exportSalesReturnDtDto = new ExportSalesReturnDtDto(body);

    return await super.create(request, response, exportSalesReturnDtDto);
  }

  async restore(request, response) {
    const { body } = request;
    const exportSalesReturnDtDto = new ExportSalesReturnDtDto(body);

    return await super.restore(request, response, exportSalesReturnDtDto);
  }

  async delete(request, response) {
    const { body } = request;
    const exportSalesReturnDtDto = new ExportSalesReturnDtDto(body);

    return await super.delete(request, response, exportSalesReturnDtDto);
  }
}

class ExportSalesReturnItemDtController extends StandardController {
  constructor(exportSalesReturnItemDt) {
    super(exportSalesReturnItemDt);
    this.create = this.create.bind(this);
    this.restore = this.restore.bind(this);
    this.delete = this.delete.bind(this);
  }

  async create(request, response) {
    const { body } = request;
    const exportSalesReturnItemDtDto = new ExportSalesReturnItemDtDto(body);

    return await super.create(request, response, exportSalesReturnItemDtDto);
  }

  async restore(request, response) {
    const { body } = request;
    const exportSalesReturnItemDtDto = new ExportSalesReturnItemDtDto(body);

    return await super.restore(request, response, exportSalesReturnItemDtDto);
  }

  async delete(request, response) {
    const { body } = request;
    const exportSalesReturnItemDtDto = new ExportSalesReturnItemDtDto(body);

    return await super.delete(request, response, exportSalesReturnItemDtDto);
  }
}
class ExportSalesReturnRejectController extends StandardController {
  constructor(exportSalesReturnReject) {
    super(exportSalesReturnReject);
    this.create = this.create.bind(this);
    this.restore = this.restore.bind(this);
    this.delete = this.delete.bind(this);
  }

  async create(request, response) {
    const { body } = request;
    const exportSalesReturnRejectDto = new ExportSalesReturnRejectDto(body);

    return await super.create(request, response, exportSalesReturnRejectDto);
  }

  async restore(request, response) {
    const { body } = request;
    const exportSalesReturnRejectDto = new ExportSalesReturnRejectDto(body);

    return await super.restore(request, response, exportSalesReturnRejectDto);
  }

  async delete(request, response) {
    const { body } = request;
    const exportSalesReturnRejectDto = new ExportSalesReturnRejectDto(body);

    return await super.delete(request, response, exportSalesReturnRejectDto);
  }
}

class ExportSalesReturnRequestController extends StandardController {
  constructor(exportSalesReturnRequest) {
    super(exportSalesReturnRequest);
    this.create = this.create.bind(this);
    this.restore = this.restore.bind(this);
    this.delete = this.delete.bind(this);
  }

  async create(request, response) {
    const { body } = request;
    const exportSalesReturnRequestDto = new ExportSalesReturnRequestDto(body);

    return await super.create(request, response, exportSalesReturnRequestDto);
  }

  async restore(request, response) {
    const { body } = request;
    const exportSalesReturnRequestDto = new ExportSalesReturnRequestDto(body);

    return await super.restore(request, response, exportSalesReturnRequestDto);
  }

  async delete(request, response) {
    const { body } = request;
    const exportSalesReturnRequestDto = new ExportSalesReturnRequestDto(body);

    return await super.delete(request, response, exportSalesReturnRequestDto);
  }
}

export {
  ExportSalesReturnController,
  ExportSalesReturnBc16DController,
  ExportSalesReturnCoaController,
  ExportSalesReturnDtController,
  ExportSalesReturnItemDtController,
  ExportSalesReturnRejectController,
  ExportSalesReturnRequestController
};
