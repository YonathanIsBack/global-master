import Principal from '../../models/Principal.js';
import StandardService from '../StandardService.js';

class PrincipalService extends StandardService {
  columnOrder = ['', 'principal_code', 'principal_name', 'isactive'];
  columnSearch = ['principal_code', 'principal_name'];

  constructor() {
    super(Principal);
  }
}

export default PrincipalService;
