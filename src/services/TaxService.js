
import { Tax } from '../models/Tax.js';
import StandardService from './StandardService.js';

class TaxService extends StandardService {
  constructor() {
    super(Tax);
  }
}

export default TaxService;
