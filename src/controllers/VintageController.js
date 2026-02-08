import VintageDto from '../dto/VintageDto.js';
import StandardController from './StandardController.js';

class VintageController extends StandardController {
  constructor(vintageService) {
    super(vintageService);
    this.create = this.create.bind(this);
    this.restore = this.restore.bind(this);
    this.delete = this.delete.bind(this);
  }

  async create(request, response) {
    const { body } = request;
    const vintageDto = new VintageDto(body);

    return await super.create(request, response, vintageDto);
  }

  async restore(request, response) {
    const { body } = request;
    const vintageDto = new VintageDto(body);

    return await super.restore(request, response, vintageDto);
  }

  async delete(request, response) {
    const { body } = request;
    const vintageDto = new VintageDto(body);

    return await super.delete(request, response, vintageDto);
  }
}

export default VintageController;
