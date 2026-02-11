import PaymentTerm from '../models/PaymentTerm.js';
import StandardService from './StandardService.js';

class PaymentTermService extends StandardService {
  columnOrder = ["", "payment_term_name", "due_date", "early_payment_days", "early_payment_disc", "ispay", "isdefault", "isactive"];
  columnSearch = ["cretime", "payment_term_name", "due_date", "early_payment_days", "early_payment_disc"];

  constructor() {
    super(PaymentTerm);
  }
}

export default PaymentTermService;
