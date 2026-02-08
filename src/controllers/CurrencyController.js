import CurrencyDto from '../dto/CurrencyDto.js';
import StandardController from './StandardController.js';

class CurrencyController extends StandardController {
  constructor(currencyService) {
    super(currencyService);
    this.create = this.create.bind(this);
    this.restore = this.restore.bind(this);
    this.delete = this.delete.bind(this);
  }

  async create(request, response) {
    const { body } = request;
    const currencyDto = new CurrencyDto(body);

    return await super.create(request, response, currencyDto);
  }

  async delete(request, response) {
    const { body } = request;
    const currencyDto = new CurrencyDto(body);

    return await super.delete(request, response, currencyDto);
  }

  async restore(request, response) {
    const { body } = request;
    const currencyDto = new CurrencyDto(body);

    return await super.restore(request, response, currencyDto);
  }
}

export default CurrencyController;
