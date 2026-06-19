import { CoretaxTax } from '../../models/ms/Coretax.js';
import StandardService from '../StandardService.js';

class CoretaxTaxService extends StandardService {
  columnOrder = ['', 'coretax_tax_name', 'percentage', 'isactive'];
  columnSearch = ['coretax_tax_name', 'percentage'];

  constructor() {
    super(CoretaxTax);
  }
}

export default CoretaxTaxService;
