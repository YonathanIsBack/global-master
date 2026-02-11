import Bank from '../models/Bank.js';
import StandardService from './StandardService.js';

class BankService extends StandardService {
  columnOrder = ["", "bank_code", "bank_name", "isactive"];
  columnSearch = [ "bank_code", "bank_name"];

  constructor() {
    super(Bank);
  }
}

export default BankService;
