import SubdistrictDto from '../dto/SubdistrictDto.js';
import StandardController from './StandardController.js';

class SubdistrictController extends StandardController {
  constructor(districtService) {
    super(districtService);
    this.create = this.create.bind(this);
    this.restore = this.restore.bind(this);
    this.delete = this.delete.bind(this);
  }

  async create(request, response, next) {
    const { body } = request;
    const subdistrictDto = new SubdistrictDto(body);

    return await super.create(request, response, subdistrictDto);
  }

  async delete(request, response) {
    const { body } = request;
    const subdistrictDto = new SubdistrictDto(body);

    return await super.delete(request, response, subdistrictDto);
  }

  async restore(request, response) {
    const { body } = request;
    const subdistrictDto = new SubdistrictDto(body);

    return await super.restore(request, response, subdistrictDto);
  }
}

export default SubdistrictController;
