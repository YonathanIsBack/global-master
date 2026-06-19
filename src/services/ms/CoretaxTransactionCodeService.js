import { CoretaxTransactionCode } from '../../models/ms/Coretax.js';
import StandardService from '../StandardService.js';

class CoretaxTransactionCodeService extends StandardService {
  columnOrder = ['', 'coretax_transaction_code', 'coretax_transaction_number', 'isactive'];
  columnSearch = ['coretax_transaction_code', 'coretax_transaction_number'];

  constructor() {
    super(CoretaxTransactionCode);
  }
}

export default CoretaxTransactionCodeService;
