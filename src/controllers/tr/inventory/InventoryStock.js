import {
  InventoryStockOpnameDtDto,
  InventoryStockOpnameDto
} from '../../../dto/tr/inventory/InventoryStockDto.js';
import StandardController from '../../StandardController.js';

class InventoryStockOpnameController extends StandardController {
  constructor(inventoryStockOpname) {
    super(inventoryStockOpname);
    this.create = this.create.bind(this);
    this.restore = this.restore.bind(this);
    this.delete = this.delete.bind(this);
  }

  async create(request, response) {
    const { body } = request;
    const inventoryStockOpnameDto = new InventoryStockOpnameDto(body);

    return await super.create(request, response, inventoryStockOpnameDto);
  }

  async restore(request, response) {
    const { body } = request;
    const inventoryStockOpnameDto = new InventoryStockOpnameDto(body);

    return await super.restore(request, response, inventoryStockOpnameDto);
  }

  async delete(request, response) {
    const { body } = request;
    const inventoryStockOpnameDto = new InventoryStockOpnameDto(body);

    return await super.delete(request, response, inventoryStockOpnameDto);
  }
}

class InventoryStockOpnameDtController extends StandardController {
  constructor(inventoryStockOpnameDt) {
    super(inventoryStockOpnameDt);
    this.create = this.create.bind(this);
    this.restore = this.restore.bind(this);
    this.delete = this.delete.bind(this);
  }

  async create(request, response) {
    const { body } = request;
    const inventoryStockOpnameDtDto = new InventoryStockOpnameDtDto(body);

    return await super.create(request, response, inventoryStockOpnameDtDto);
  }

  async restore(request, response) {
    const { body } = request;
    const inventoryStockOpnameDtDto = new InventoryStockOpnameDtDto(body);

    return await super.restore(request, response, inventoryStockOpnameDtDto);
  }

  async delete(request, response) {
    const { body } = request;
    const inventoryStockOpnameDtDto = new InventoryStockOpnameDtDto(body);

    return await super.delete(request, response, inventoryStockOpnameDtDto);
  }
}

class InventoryStockOpnameItemDtController extends StandardController {
  constructor(inventoryStockOpnameItemDt) {
    super(inventoryStockOpnameItemDt);
    this.create = this.create.bind(this);
    this.restore = this.restore.bind(this);
    this.delete = this.delete.bind(this);
  }

  async create(request, response) {
    const { body } = request;
    const inventoryStockOpnameDtDto = new InventoryStockOpnameDtDto(body);

    return await super.create(request, response, inventoryStockOpnameDtDto);
  }

  async restore(request, response) {
    const { body } = request;
    const inventoryStockOpnameDtDto = new InventoryStockOpnameDtDto(body);

    return await super.restore(request, response, inventoryStockOpnameDtDto);
  }

  async delete(request, response) {
    const { body } = request;
    const inventoryStockOpnameDtDto = new InventoryStockOpnameDtDto(body);

    return await super.delete(request, response, inventoryStockOpnameDtDto);
  }
}

export {
  InventoryStockOpnameController,
  InventoryStockOpnameDtController,
  InventoryStockOpnameItemDtController
};
