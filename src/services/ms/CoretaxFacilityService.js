import { CoretaxFacility } from '../../models/ms/Coretax.js';
import StandardService from '../StandardService.js';

class CoretaxFacilityService extends StandardService {
  columnOrder = ['', 'coretax_facility_code', 'coretax_facility_number', 'isactive'];
  columnSearch = ['coretax_facility_code', 'coretax_facility_number'];

  constructor() {
    super(CoretaxFacility);
  }
}

export default CoretaxFacilityService;
