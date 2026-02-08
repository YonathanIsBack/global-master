import Bank from '../models/Bank.js';
import City from '../models/City.js';
import StandardService from './StandardService.js';

class CityService extends StandardService {
  constructor() {
    super(City);
  }
}

export default CityService;
