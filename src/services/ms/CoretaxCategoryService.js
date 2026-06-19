import { CoretaxCategory } from '../../models/ms/Coretax.js';
import StandardService from '../StandardService.js';

class CoretaxCategoryService extends StandardService {
  columnOrder = ['', 'coretax_category_code', 'coretax_category_name', 'isactive'];
  columnSearch = ['coretax_category_code', 'coretax_category_name'];

  constructor() {
    super(CoretaxCategory);
  }
}

export default CoretaxCategoryService;
