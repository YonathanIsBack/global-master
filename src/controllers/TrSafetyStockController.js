import AccessDto from '../dto/AccessDto.js';
import TrSafetyStockDto from '../dto/TrSafetyStockDto.js';
import StandardController from './StandardController.js';

class TrSafetyStockController extends StandardController {
  constructor(trSafetyStockService) {
    super(trSafetyStockService);
    this.create = this.create.bind(this);
    this.restore = this.restore.bind(this);
    this.delete = this.delete.bind(this);
  }

  async create(request, response) {
    const { body } = request;
    const trSafetyStockDto = new TrSafetyStockDto(body);

    return await super.create(request, response, trSafetyStockDto);
  }

  async restore(request, response) {
    const { body } = request;
    const trSafetyStockDto = new TrSafetyStockDto(body);

    return await super.restore(request, response, trSafetyStockDto);
  }

  async delete(request, response) {
    const { body } = request;
    const trSafetyStockDto = new TrSafetyStockDto(body);

    return await super.delete(request, response, trSafetyStockDto);
  }
}

export default TrSafetyStockController;
