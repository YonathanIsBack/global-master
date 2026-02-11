import Department from '../models/Department.js';
import StandardService from './StandardService.js';

class DepartmentService extends StandardService {
  columnOrder = ["", "department_code", "department_name", "isactive"];
  columnSearch = ["cretime", "department_name", "department_code"];
  
  constructor() {
    super(Department);
  }
}

export default DepartmentService;
