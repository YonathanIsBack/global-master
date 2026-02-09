import Currency from '../models/Currency.js';
import StandardService from './StandardService.js';

class CurrencyService extends StandardService {
  #columnOrder = ["", "currency_code", "currency_name", , "currency_symbol", "kurs", "kurs_local"];
  constructor() {
    super(Currency);
  }

  async count() {
    return await this.model.count();
  }

  async getAll(params) {
    const { whereClause, limit = 1, offset = 0, orderIndex, orderDirection } = params;
    
    return await this.model.findAll({ where: whereClause, raw: true, limit: Number(limit), offset: Number(offset), order: this.#buildOrderClause(orderIndex, orderDirection) });
  }

  #buildOrderClause(orderIndex = 0, orderDirection) {
    if(orderIndex == 0) return [] ;
4
    const orderClause = [this.#columnOrder[Number(orderIndex)], orderDirection];

    return [orderClause];
  }
}

export default CurrencyService;
