import DistrictDto from '../dto/DistrictDto.js';
import ProvinceDto from '../dto/ProvinceDto.js';
import StandardController from './StandardController.js';

class DistrictController extends StandardController {
  constructor(districtService) {
    super(districtService);
    this.create = this.create.bind(this);
    this.restore = this.restore.bind(this);
    this.delete = this.delete.bind(this);
  }

  async create(request, response, next) {
    const { body } = request;
    const districtDto = new DistrictDto(body);

    return await super.create(request, response, districtDto);
  }

  async delete(request, response) {
    const { body } = request;
    const districtDto = new DistrictDto(body);

    return await super.delete(request, response, districtDto);
  }

  async restore(request, response) {
    const { body } = request;
    const districtDto = new DistrictDto(body);

    return await super.restore(request, response, districtDto);
  }
}

export default DistrictController;
