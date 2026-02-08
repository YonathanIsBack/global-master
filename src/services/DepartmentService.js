import Department from '../models/Department.js';
import StandardService from './StandardService.js';

class DepartmentService extends StandardService {
  constructor() {
    super(Department);
  }
}

export default DepartmentService;
