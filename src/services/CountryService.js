import { Country } from '../models/Country.js';
import StandardService from './StandardService.js';

class CountryService extends StandardService {
  constructor() {
    super(Country);
  }
}

export default CountryService;
