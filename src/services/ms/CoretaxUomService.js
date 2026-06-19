import { CoretaxUom } from '../../models/ms/Coretax.js';
import StandardService from '../StandardService.js';

class CoretaxUomService extends StandardService {
  columnOrder = ['', 'coretax_uom_code', 'coretax_uom_name', 'isactive'];
  columnSearch = ['coretax_uom_code', 'coretax_uom_name'];

  constructor() {
    super(CoretaxUom);
  }
}

export default CoretaxUomService;
