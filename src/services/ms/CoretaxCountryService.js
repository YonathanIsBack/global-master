import { CoretaxCountry } from '../../models/ms/Coretax.js';
import StandardService from '../StandardService.js';

class CoretaxCountryService extends StandardService {
  columnOrder = ['', 'coretax_country_code', 'coretax_country_name', 'isactive'];
  columnSearch = ['coretax_country_code', 'coretax_country_name'];

  constructor() {
    super(CoretaxCountry);
  }
}

export default CoretaxCountryService;
