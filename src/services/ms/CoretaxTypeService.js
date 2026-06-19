import { CoretaxType } from '../../models/ms/Coretax.js';
import StandardService from '../StandardService.js';

class CoretaxTypeService extends StandardService {
  columnOrder = ['', 'coretax_type_code', 'coretax_type_name', 'isactive'];
  columnSearch = ['coretax_type_code', 'coretax_type_name'];

  constructor() {
    super(CoretaxType);
  }
}

export default CoretaxTypeService;
