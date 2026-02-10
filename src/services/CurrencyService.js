import Currency from '../models/Currency.js';
import StandardService from './StandardService.js';

class CurrencyService extends StandardService {
  columnOrder = ["", "currency_code", "currency_name", "currency_symbol", "kurs_local", "kurs", "isactive"];
  constructor() {
    super(Currency);
  }
}

export default CurrencyService;
