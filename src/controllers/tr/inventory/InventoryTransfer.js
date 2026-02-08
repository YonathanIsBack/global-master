import {
  InventoryTransferDtDto,
  InventoryTransferDto,
  InventoryTransferItemDtDto
} from '../../../dto/tr/inventory/InventoryTransferDto.js';
import StandardController from '../../StandardController.js';

class InventoryTransferController extends StandardController {
  constructor(inventoryTransfer) {
    super(inventoryTransfer);
    this.create = this.create.bind(this);
    this.restore = this.restore.bind(this);
    this.delete = this.delete.bind(this);
  }

  async create(request, response) {
    const { body } = request;
    const inventoryTransferDto = new InventoryTransferDto(body);

    return await super.create(request, response, inventoryTransferDto);
  }

  async restore(request, response) {
    const { body } = request;
    const inventoryTransferDto = new InventoryTransferDto(body);

    return await super.restore(request, response, inventoryTransferDto);
  }

  async delete(request, response) {
    const { body } = request;
    const inventoryTransferDto = new InventoryTransferDto(body);

    return await super.delete(request, response, inventoryTransferDto);
  }
}

class InventoryTransferDtController extends StandardController {
  constructor(inventoryTransferDt) {
    super(inventoryTransferDt);
    this.create = this.create.bind(this);
    this.restore = this.restore.bind(this);
    this.delete = this.delete.bind(this);
  }

  async create(request, response) {
    const { body } = request;
    const inventoryTransferDtDto = new InventoryTransferDtDto(body);

    return await super.create(request, response, inventoryTransferDtDto);
  }

  async restore(request, response) {
    const { body } = request;
    const inventoryTransferDtDto = new InventoryTransferDtDto(body);

    return await super.restore(request, response, inventoryTransferDtDto);
  }

  async delete(request, response) {
    const { body } = request;
    const inventoryTransferDtDto = new InventoryTransferDtDto(body);

    return await super.delete(request, response, inventoryTransferDtDto);
  }
}

class InventoryTransferItemDtController extends StandardController {
  constructor(inventoryTransferItemDt) {
    super(inventoryTransferItemDt);
    this.create = this.create.bind(this);
    this.restore = this.restore.bind(this);
    this.delete = this.delete.bind(this);
  }

  async create(request, response) {
    const { body } = request;
    const inventoryTransferItemDtDto = new InventoryTransferItemDtDto(body);

    return await super.create(request, response, inventoryTransferItemDtDto);
  }

  async restore(request, response) {
    const { body } = request;
    const inventoryTransferItemDtDto = new InventoryTransferItemDtDto(body);

    return await super.restore(request, response, inventoryTransferItemDtDto);
  }

  async delete(request, response) {
    const { body } = request;
    const inventoryTransferItemDtDto = new InventoryTransferItemDtDto(body);

    return await super.delete(request, response, inventoryTransferItemDtDto);
  }
}

export {
  InventoryTransferController,
  InventoryTransferDtController,
  InventoryTransferItemDtController
};
