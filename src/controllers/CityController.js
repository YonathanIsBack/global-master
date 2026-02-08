import BankDto from '../dto/BankDto.js';
import BrandDto from '../dto/BrandDto.js';
import CityDto from '../dto/CityDto.js';
import StandardController from './StandardController.js';

class CityController extends StandardController {
  constructor(cityService) {
    super(cityService);
    this.create = this.create.bind(this);
    this.restore = this.restore.bind(this);
    this.delete = this.delete.bind(this);
  }

  async create(request, response) {
    const { body } = request;
    const cityDto = new CityDto(body);

    return await super.create(request, response, cityDto);
  }

  async restore(request, response) {
    const { body } = request;
    const cityDto = new CityDto(body);

    return await super.restore(request, response, cityDto);
  }

  async delete(request, response) {
    const { body } = request;
    const cityDto = new CityDto(body);


    return await super.delete(request, response, cityDto);
  }
}

export default CityController;
