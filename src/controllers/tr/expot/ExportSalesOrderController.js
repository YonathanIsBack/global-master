import {
  ExportSalesOrderAdvanceDto,
  ExportSalesOrderBc16Dto,
  ExportSalesOrderDtDto,
  ExportSalesOrderDto,
  ExportSalesOrderItemDtDto,
  ExportSalesOrderRejectDto,
  ExportSalesOrderRequestDto
} from '../../../dto/tr/export/ExportSalesOrderDto.js';
import StandardController from '../../StandardController.js';
import StandardTransactionController from '../../StandardTransactionController.js';

class ExportSalesOrderController extends StandardTransactionController {
  constructor(exportSalesOrder) {
    super(exportSalesOrder);
    this.create = this.create.bind(this);
    this.restore = this.restore.bind(this);
    this.delete = this.delete.bind(this);
    this.changeStatus = this.changeStatus.bind(this);
    this.changeStatusRequest = this.changeStatusRequest.bind(this);
  }

  async create(request, response) {
    const { body } = request;
    const exportSalesOrderDto = new ExportSalesOrderDto(body);

    return await super.insertTransaction(request, response, this.#handleExportSalesOrderBc16PrimaryKey(exportSalesOrderDto));
  }

  #handleExportSalesOrderBc16PrimaryKey(exportSalesOrderDto) {
    const { detailsData } = exportSalesOrderDto;

    if (detailsData.tr_export_sales_order_bc16 == null) {
      return exportSalesOrderDto;
    }

    detailsData.tr_export_sales_order_bc16 = detailsData.tr_export_sales_order_bc16.map((data) => {
      return {
        ...data,
        export_sales_order_bc_16_id: data.export_sales_order_bc16_id
      };
    });

    return exportSalesOrderDto;
  }

  async restore(request, response) {
    const { body } = request;
    const exportSalesOrderDto = new ExportSalesOrderDto(body);

    return await super.restore(request, response, exportSalesOrderDto);
  }

  async delete(request, response) {
    const { body } = request;
    const exportSalesOrderDto = new ExportSalesOrderDto(body);

    return await super.delete(request, response, exportSalesOrderDto);
  }
  async changeStatus(request, response) {
    const { body } = request;
    const exportSalesOrderDto = new ExportSalesOrderDto(body);

    return await super.changeStatus(request, response, exportSalesOrderDto);
  }

  async changeStatusRequest(request, response) {
    const { body } = request;
    const exportSalesOrderDto = new ExportSalesOrderDto(body);

    return await super.changeStatusRequest(request, response, exportSalesOrderDto);
  }
}

class ExportSalesOrderAdvanceController extends StandardController {
  constructor(exportSalesOrderAdvance) {
    super(exportSalesOrderAdvance);
    this.create = this.create.bind(this);
    this.restore = this.restore.bind(this);
    this.delete = this.delete.bind(this);
  }

  async create(request, response) {
    const { body } = request;
    const exportSalesOrderAdvanceDto = new ExportSalesOrderAdvanceDto(body);

    return await super.create(request, response, exportSalesOrderAdvanceDto);
  }

  async restore(request, response) {
    const { body } = request;
    const exportSalesOrderAdvanceDto = new ExportSalesOrderAdvanceDto(body);

    return await super.restore(request, response, exportSalesOrderAdvanceDto);
  }

  async delete(request, response) {
    const { body } = request;
    const exportSalesOrderAdvanceDto = new ExportSalesOrderAdvanceDto(body);

    return await super.delete(request, response, exportSalesOrderAdvanceDto);
  }
}

class ExportSalesOrderBc16DController extends StandardController {
  constructor(exportSalesOrderBc16D) {
    super(exportSalesOrderBc16D);
    this.create = this.create.bind(this);
    this.restore = this.restore.bind(this);
    this.delete = this.delete.bind(this);
  }

  async create(request, response) {
    const { body } = request;
    const exportSalesOrderBc16Dto = new ExportSalesOrderBc16Dto(body);

    return await super.create(request, response, exportSalesOrderBc16Dto);
  }

  async restore(request, response) {
    const { body } = request;
    const exportSalesOrderBc16Dto = new ExportSalesOrderBc16Dto(body);

    return await super.restore(request, response, exportSalesOrderBc16Dto);
  }

  async delete(request, response) {
    const { body } = request;
    const exportSalesOrderBc16Dto = new ExportSalesOrderBc16Dto(body);

    return await super.delete(request, response, exportSalesOrderBc16Dto);
  }
}

class ExportSalesOrderDtController extends StandardController {
  constructor(exportSalesOrderDt) {
    super(exportSalesOrderDt);
    this.create = this.create.bind(this);
    this.restore = this.restore.bind(this);
    this.delete = this.delete.bind(this);
  }

  async create(request, response) {
    const { body } = request;
    const exportSalesOrderDtDto = new ExportSalesOrderDtDto(body);

    return await super.create(request, response, exportSalesOrderDtDto);
  }

  async restore(request, response) {
    const { body } = request;
    const exportSalesOrderDtDto = new ExportSalesOrderDtDto(body);

    return await super.restore(request, response, exportSalesOrderDtDto);
  }

  async delete(request, response) {
    const { body } = request;
    const exportSalesOrderDtDto = new ExportSalesOrderDtDto(body);

    return await super.delete(request, response, exportSalesOrderDtDto);
  }
}

class ExportSalesOrderItemDtController extends StandardController {
  constructor(exportSalesOrderItemDt) {
    super(exportSalesOrderItemDt);
    this.create = this.create.bind(this);
    this.restore = this.restore.bind(this);
    this.delete = this.delete.bind(this);
  }

  async create(request, response) {
    const { body } = request;
    const exportSalesOrderItemDtDto = new ExportSalesOrderItemDtDto(body);

    return await super.create(request, response, exportSalesOrderItemDtDto);
  }

  async restore(request, response) {
    const { body } = request;
    const exportSalesOrderItemDtDto = new ExportSalesOrderItemDtDto(body);

    return await super.restore(request, response, exportSalesOrderItemDtDto);
  }

  async delete(request, response) {
    const { body } = request;
    const exportSalesOrderItemDtDto = new ExportSalesOrderItemDtDto(body);

    return await super.delete(request, response, exportSalesOrderItemDtDto);
  }
}

class ExportSalesOrderRejectController extends StandardController {
  constructor(exportSalesOrderReject) {
    super(exportSalesOrderReject);
    this.create = this.create.bind(this);
    this.restore = this.restore.bind(this);
    this.delete = this.delete.bind(this);
  }

  async create(request, response) {
    const { body } = request;
    const exportSalesOrderRejectDto = new ExportSalesOrderRejectDto(body);

    return await super.create(request, response, exportSalesOrderRejectDto);
  }

  async restore(request, response) {
    const { body } = request;
    const exportSalesOrderRejectDto = new ExportSalesOrderRejectDto(body);

    return await super.restore(request, response, exportSalesOrderRejectDto);
  }

  async delete(request, response) {
    const { body } = request;
    const exportSalesOrderRejectDto = new ExportSalesOrderRejectDto(body);

    return await super.delete(request, response, exportSalesOrderRejectDto);
  }
}

class ExportSalesOrderRequestController extends StandardController {
  constructor(exportSalesOrderRequest) {
    super(exportSalesOrderRequest);
    this.create = this.create.bind(this);
    this.restore = this.restore.bind(this);
    this.delete = this.delete.bind(this);
  }

  async create(request, response) {
    const { body } = request;
    const exportSalesOrderRequestDto = new ExportSalesOrderRequestDto(body);

    return await super.create(request, response, exportSalesOrderRequestDto);
  }

  async restore(request, response) {
    const { body } = request;
    const exportSalesOrderRequestDto = new ExportSalesOrderRequestDto(body);

    return await super.restore(request, response, exportSalesOrderRequestDto);
  }

  async delete(request, response) {
    const { body } = request;
    const exportSalesOrderRequestDto = new ExportSalesOrderRequestDto(body);

    return await super.delete(request, response, exportSalesOrderRequestDto);
  }
}

export {
  ExportSalesOrderAdvanceController,
  ExportSalesOrderBc16DController, ExportSalesOrderController, ExportSalesOrderDtController,
  ExportSalesOrderItemDtController,
  ExportSalesOrderRejectController,
  ExportSalesOrderRequestController
};

