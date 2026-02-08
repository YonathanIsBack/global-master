import StCurrencyRateDto from '../dto/StCurrencyRateDto.js';
import StandardController from './StandardController.js';

class StCurrencyRateController extends StandardController {
  constructor(stCurrencyRateService) {
    super(stCurrencyRateService);
    this.create = this.create.bind(this);
    this.restore = this.restore.bind(this);
    this.delete = this.delete.bind(this);
  }

  async create(request, response) {
    const { body } = request;
    const stCurrencyRateDto = new StCurrencyRateDto(body);

    return await super.create(request, response, stCurrencyRateDto);
  }

  async delete(request, response) {
    const { body } = request;
    const stCurrencyRateDto = new StCurrencyRateDto(body);

    return await super.delete(request, response, stCurrencyRateDto);
  }

  async restore(request, response) {
    const { body } = request;
    const stCurrencyRateDto = new StCurrencyRateDto(body);

    return await super.restore(request, response, stCurrencyRateDto);
  }
}

export default StCurrencyRateController;
