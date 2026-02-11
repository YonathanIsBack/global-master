import Transaction from '../models/Transaction.js';
import StandardService from './StandardService.js';

class TransactionService extends StandardService {
  columnOrder = ["", "no_transaction_name", "no_transaction_prefix", "digit", "reset_time", "isactive"];
  columnSearch = ["cretime", "no_transaction_name", "no_transaction_prefix", "digit", "reset_time"];

  constructor() {
    super(Transaction);
  }
}

export default TransactionService;
