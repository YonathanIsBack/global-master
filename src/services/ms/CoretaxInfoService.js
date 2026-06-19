import { CoretaxInfo } from '../../models/ms/Coretax.js';
import StandardService from '../StandardService.js';

class CoretaxInfoService extends StandardService {
  columnOrder = ['', 'coretax_info_code', 'coretax_info_number', 'isactive'];
  columnSearch = ['coretax_info_code', 'coretax_info_number'];

  constructor() {
    super(CoretaxInfo);
  }
}

export default CoretaxInfoService;
