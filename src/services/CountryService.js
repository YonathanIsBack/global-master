import { Country } from '../models/Country.js';
import StandardService from './StandardService.js';

class CountryService extends StandardService {
  columnOrder = ['', 'country_code', 'country_name', 'isactive'];
  columnSearch = ['cretime', 'country_code', 'country_name'];

  constructor() {
    super(Country);
  }
}

export default CountryService;
