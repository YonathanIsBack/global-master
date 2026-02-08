import Bank from '../models/Bank.js';
import StandardService from './StandardService.js';

class BankService extends StandardService {
  constructor() {
    super(Bank);
  }
}

export default BankService;
