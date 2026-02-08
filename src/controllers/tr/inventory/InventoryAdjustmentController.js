import {
  InventoryAdjustmentDto,
  InventoryAdjustmentHppDtDto,
  InventoryAdjustmentHppDto,
  InventoryAdjustmentHppItemDtDto,
  InventoryAdjustmentItemDtDto,
  InventoryAdjustmentRejectDto,
  InventoryAdjustmentRequestDto
} from '../../../dto/tr/inventory/InventoryAdjustmentDto.js';
import StandardController from '../../StandardController.js';
import StandardTransactionController from '../../StandardTransactionController.js';

class InventoryAdjustmentController extends StandardTransactionController {
  constructor(inventoryAdjustment) {
    super(inventoryAdjustment);
    this.create = this.create.bind(this);
    this.restore = this.restore.bind(this);
    this.delete = this.delete.bind(this);
    this.changeStatus = this.changeStatus.bind(this);
    this.changeStatusRequest = this.changeStatusRequest.bind(this);
  }

  async create(request, response) {
    const { body } = request;
    const inventoryAdjustmentDto = new InventoryAdjustmentDto(body);

    return await super.insertTransaction(request, response, inventoryAdjustmentDto);
  }

  async changeStatus(request, response) {
    const {body} = request;
    const inventoryAdjustmentDto = new InventoryAdjustmentDto(body);

    return await super.changeStatus(request, response, inventoryAdjustmentDto);
  }

  async changeStatusRequest(request, response) {
    const { body } = request;

    const inventoryAdjustmentDto = new InventoryAdjustmentDto(body);

    return await super.changeStatusRequest(request, response, inventoryAdjustmentDto);
  }
}

class InventoryAdjustmentDtController extends StandardController {
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

class InventoryAdjustmentHppController extends StandardController {
  constructor(inventoryAdjustmentHpp) {
    super(inventoryAdjustmentHpp);
    this.create = this.create.bind(this);
    this.restore = this.restore.bind(this);
    this.delete = this.delete.bind(this);
  }

  async create(request, response) {
    const { body } = request;
    const inventoryAdjustmentHppDto = new InventoryAdjustmentHppDto(body);

    return await super.create(request, response, inventoryAdjustmentHppDto);
  }

  async restore(request, response) {
    const { body } = request;
    const inventoryAdjustmentHppDto = new InventoryAdjustmentHppDto(body);

    return await super.restore(request, response, inventoryAdjustmentHppDto);
  }

  async delete(request, response) {
    const { body } = request;
    const inventoryAdjustmentHppDto = new InventoryAdjustmentHppDto(body);

    return await super.delete(request, response, inventoryAdjustmentHppDto);
  }
}

class InventoryAdjustmentHppDtController extends StandardController {
  constructor(inventoryAdjustmentHppDt) {
    super(inventoryAdjustmentHppDt);
    this.create = this.create.bind(this);
    this.restore = this.restore.bind(this);
    this.delete = this.delete.bind(this);
  }

  async create(request, response) {
    const { body } = request;
    const inventoryAdjustmentHppDtDto = new InventoryAdjustmentHppDtDto(body);

    return await super.create(request, response, inventoryAdjustmentHppDtDto);
  }

  async restore(request, response) {
    const { body } = request;
    const inventoryAdjustmentHppDtDto = new InventoryAdjustmentHppDtDto(body);

    return await super.restore(request, response, inventoryAdjustmentHppDtDto);
  }

  async delete(request, response) {
    const { body } = request;
    const inventoryAdjustmentHppDtDto = new InventoryAdjustmentHppDtDto(body);

    return await super.delete(request, response, inventoryAdjustmentHppDtDto);
  }
}

class InventoryAdjustmentHppItemDtController extends StandardController {
  constructor(inventoryAdjustmentHppItemDt) {
    super(inventoryAdjustmentHppItemDt);
    this.create = this.create.bind(this);
    this.restore = this.restore.bind(this);
    this.delete = this.delete.bind(this);
  }

  async create(request, response) {
    const { body } = request;
    const inventoryAdjustmentHppItemDtDto = new InventoryAdjustmentHppItemDtDto(body);

    return await super.create(request, response, inventoryAdjustmentHppItemDtDto);
  }

  async restore(request, response) {
    const { body } = request;
    const inventoryAdjustmentHppItemDtDto = new InventoryAdjustmentHppItemDtDto(body);

    return await super.restore(request, response, inventoryAdjustmentHppItemDtDto);
  }

  async delete(request, response) {
    const { body } = request;
    const inventoryAdjustmentHppItemDtDto = new InventoryAdjustmentHppItemDtDto(body);

    return await super.delete(request, response, inventoryAdjustmentHppItemDtDto);
  }
}

class InventoryAdjustmentItemDtController extends StandardController {
  constructor(inventoryAdjustmentItemDt) {
    super(inventoryAdjustmentItemDt);
    this.create = this.create.bind(this);
    this.restore = this.restore.bind(this);
    this.delete = this.delete.bind(this);
  }

  async create(request, response) {
    const { body } = request;
    const inventoryAdjustmentItemDtDto = new InventoryAdjustmentItemDtDto(body);

    return await super.create(request, response, inventoryAdjustmentItemDtDto);
  }

  async restore(request, response) {
    const { body } = request;
    const inventoryAdjustmentItemDtDto = new InventoryAdjustmentItemDtDto(body);

    return await super.restore(request, response, inventoryAdjustmentItemDtDto);
  }

  async delete(request, response) {
    const { body } = request;
    const inventoryAdjustmentItemDtDto = new InventoryAdjustmentItemDtDto(body);

    return await super.delete(request, response, inventoryAdjustmentItemDtDto);
  }
}

class InventoryAdjustmentRejectController extends StandardController {
  constructor(exportSalesReturnReject) {
    super(exportSalesReturnReject);
    this.create = this.create.bind(this);
    this.restore = this.restore.bind(this);
    this.delete = this.delete.bind(this);
  }

  async create(request, response) {
    const { body } = request;
    const inventoryAdjustmentRejectDto = new InventoryAdjustmentRejectDto(body);

    return await super.create(request, response, inventoryAdjustmentRejectDto);
  }

  async restore(request, response) {
    const { body } = request;
    const inventoryAdjustmentRejectDto = new InventoryAdjustmentRejectDto(body);

    return await super.restore(request, response, inventoryAdjustmentRejectDto);
  }

  async delete(request, response) {
    const { body } = request;
    const inventoryAdjustmentRejectDto = new InventoryAdjustmentRejectDto(body);

    return await super.delete(request, response, inventoryAdjustmentRejectDto);
  }
}

class InventoryAdjustmentRequestController extends StandardController {
  constructor(exportSalesReturnRequest) {
    super(exportSalesReturnRequest);
    this.create = this.create.bind(this);
    this.restore = this.restore.bind(this);
    this.delete = this.delete.bind(this);
  }

  async create(request, response) {
    const { body } = request;
    const inventoryAdjustmentRequestDto = new InventoryAdjustmentRequestDto(body);

    return await super.create(request, response, inventoryAdjustmentRequestDto);
  }

  async restore(request, response) {
    const { body } = request;
    const inventoryAdjustmentRequestDto = new InventoryAdjustmentRequestDto(body);

    return await super.restore(request, response, inventoryAdjustmentRequestDto);
  }

  async delete(request, response) {
    const { body } = request;
    const inventoryAdjustmentRequestDto = new InventoryAdjustmentRequestDto(body);

    return await super.delete(request, response, inventoryAdjustmentRequestDto);
  }
}

export {
  InventoryAdjustmentController,
  InventoryAdjustmentDtController,
  InventoryAdjustmentHppController,
  InventoryAdjustmentHppDtController,
  InventoryAdjustmentHppItemDtController,
  InventoryAdjustmentItemDtController,
  InventoryAdjustmentRejectController,
  InventoryAdjustmentRequestController
};

