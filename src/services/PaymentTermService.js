import PaymentTerm from '../models/PaymentTerm.js';
import StandardService from './StandardService.js';

class PaymentTermService extends StandardService {
  constructor() {
    super(PaymentTerm);
  }
}

export default PaymentTermService;
