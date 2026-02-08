import Transaction from '../models/Transaction.js';
import StandardService from './StandardService.js';

class TransactionService extends StandardService {
  constructor() {
    super(Transaction);
  }
}

export default TransactionService;
