import BankDto from '../dto/BankDto.js';
import BrandDto from '../dto/BrandDto.js';
import StandardController from './StandardController.js';

class BrandController extends StandardController {
  constructor(brandService) {
    super(brandService);
    this.create = this.create.bind(this);
    this.restore = this.restore.bind(this);
    this.delete = this.delete.bind(this);
  }

  async create(request, response) {
    const { body } = request;
    const brandDto = new BrandDto(body);

    return await super.create(request, response, brandDto);
  }

  async restore(request, response) {
    const { body } = request;
    const brandDto = new BrandDto(body);

    return await super.restore(request, response, brandDto);
  }

  async delete(request, response) {
    const { body } = request;
    const brandDto = new BrandDto(body);

    return await super.delete(request, response, brandDto);
  }
}

export default BrandController;
