import Province from '../models/Province.js';
import StandardService from './StandardService.js';

class ProvinceService extends StandardService {
  constructor() {
    super(Province);
  }
}

export default ProvinceService;
