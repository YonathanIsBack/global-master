import MsCk6GolonganDto from '../dto/ms/MsCk6GolonganDto.js';
import StandardController from './StandardController.js';

class MsCk6GolonganController extends StandardController {
  constructor(brandService) {
    super(brandService);
    this.create = this.create.bind(this);
    this.restore = this.restore.bind(this);
    this.delete = this.delete.bind(this);
  }

  async create(request, response) {
    const { body } = request;
    const msCk6GolonganDto = new MsCk6GolonganDto(body);

    return await super.create(request, response, msCk6GolonganDto);
  }

  async restore(request, response) {
    const { body } = request;
    const msCk6GolonganDto = new MsCk6GolonganDto(body);

    return await super.restore(request, response, msCk6GolonganDto);
  }

  async delete(request, response) {
    const { body } = request;
    const msCk6GolonganDto = new MsCk6GolonganDto(body);

    return await super.delete(request, response, msCk6GolonganDto);
  }
}

export default MsCk6GolonganController;
