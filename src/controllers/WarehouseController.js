import VintageDto from '../dto/VintageDto.js';
import { WarehouseDto, WarehouseLevelDto } from '../dto/WarehouseDto.js';
import StandardController from './StandardController.js';

class WarehouseController extends StandardController {
  constructor(warehouseService) {
    super(warehouseService);
    this.create = this.create.bind(this);
    this.restore = this.restore.bind(this);
    this.delete = this.delete.bind(this);
  }

  async create(request, response) {
    const { body } = request;
    const warehouseDto = new WarehouseDto(body);

    return await super.create(request, response, warehouseDto);
  }

  async restore(request, response) {
    const { body } = request;
    const warehouseDto = new WarehouseDto(body);

    return await super.restore(request, response, warehouseDto);
  }

  async delete(request, response) {
    const { body } = request;
    const warehouseDto = new WarehouseDto(body);

    return await super.delete(request, response, warehouseDto);
  }
}

class WarehouseLevelController extends StandardController {
  constructor(warehouseLevelService) {
    super(warehouseLevelService);
    this.create = this.create.bind(this);
    this.restore = this.restore.bind(this);
    this.delete = this.delete.bind(this);
  }

  async create(request, response) {
    const { body } = request;
    const warehouseLevelDto = new WarehouseLevelDto(body);

    return await super.create(request, response, warehouseLevelDto);
  }

  async restore(request, response) {
    const { body } = request;
    const warehouseLevelDto = new WarehouseLevelDto(body);

    return await super.restore(request, response, warehouseLevelDto);
  }

  async delete(request, response) {
    const { body } = request;
    const warehouseLevelDto = new WarehouseLevelDto(body);

    return await super.delete(request, response, warehouseLevelDto);
  }
}

export { WarehouseController, WarehouseLevelController };
