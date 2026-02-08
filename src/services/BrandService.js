import Brand from '../models/Brand.js';
import StandardService from './StandardService.js';

class BrandService extends StandardService {
  constructor() {
    super(Brand);
  }
}

export default BrandService;
