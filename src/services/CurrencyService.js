import Currency from '../models/Currency.js';
import StandardService from './StandardService.js';

class CurrencyService extends StandardService {
  constructor() {
    super(Currency);
  }
}

export default CurrencyService;
