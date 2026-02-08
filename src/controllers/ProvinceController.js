import ProvinceDto from '../dto/ProvinceDto.js';
import StandardController from './StandardController.js';

class ProvinceController extends StandardController {
  constructor(provinceService) {
    super(provinceService);
    this.create = this.create.bind(this);
    this.restore = this.restore.bind(this);
    this.delete = this.delete.bind(this);
  }

  async create(request, response, next) {
    const { body } = request;
    const provinceDto = new ProvinceDto(body);

    return await super.create(request, response, provinceDto);
  }

  async delete(request, response) {
    const { body } = request;
    const provinceDto = new ProvinceDto(body);

    return await super.delete(request, response, provinceDto);
  }

  async restore(request, response) {
    const { body } = request;
    const provinceDto = new ProvinceDto(body);

    return await super.restore(request, response, provinceDto);
  }
}

export default ProvinceController;
