
import { Tax } from '../models/Tax.js';
import StandardService from './StandardService.js';

class TaxService extends StandardService {
  columnOrder = ["", "tax_name", "percentage", "note", "defaults", "isactive"];
  columnSearch = ["cretime", "tax_name", "percentage", "note"];

  constructor() {
    super(Tax);
  }
}

export default TaxService;
