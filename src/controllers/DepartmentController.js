import DepartmentDto from '../dto/DepartmentDto.js';
import StandardController from './StandardController.js';

class DepartmentController extends StandardController {
  constructor(departmentService) {
    super(departmentService);
    this.create = this.create.bind(this);
    this.restore = this.restore.bind(this);
    this.delete = this.delete.bind(this);
  }

  async create(request, response) {
    const { body } = request;
    const departmentDto = new DepartmentDto(body);

    return await super.create(request, response, departmentDto);
  }

  async delete(request, response) {
    const { body } = request;
    const departmentDto = new DepartmentDto(body);

    return await super.delete(request, response, departmentDto);
  }

  async restore(request, response) {
    const { body } = request;
    const departmentDto = new DepartmentDto(body);

    return await super.restore(request, response, departmentDto);
  }
}

export default DepartmentController;
