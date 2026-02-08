import StCurrencyDetailDto from '../dto/StCurrencyRateDetailDto.js';
import StandardController from './StandardController.js';

class StCurrencyRateDetailController extends StandardController {
  constructor(stCurrencyRateDetailService) {
    super(stCurrencyRateDetailService);
    this.create = this.create.bind(this);
    this.restore = this.restore.bind(this);
    this.delete = this.delete.bind(this);
  }

  async create(request, response) {
    const { body } = request;
    const stCurrencyRateDetailDto = new StCurrencyDetailDto(body);

    return await super.create(request, response, stCurrencyRateDetailDto);
  }

  async delete(request, response) {
    const { body } = request;
    const stCurrencyRateDetailDto = new StCurrencyDetailDto(body);

    return await super.delete(request, response, stCurrencyRateDetailDto);
  }

  async restore(request, response) {
    const { body } = request;
    const stCurrencyRateDetailDto = new StCurrencyDetailDto(body);

    return await super.restore(request, response, stCurrencyRateDetailDto);
  }
}

export default StCurrencyRateDetailController;
