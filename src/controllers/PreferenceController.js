import PreferenceDto from '../dto/PreferenceDto.js';
import VintageDto from '../dto/VintageDto.js';
import StandardController from './StandardController.js';

class PreferenceController extends StandardController {
  constructor(preferenceService) {
    super(preferenceService);
    this.create = this.create.bind(this);
    this.restore = this.restore.bind(this);
    this.delete = this.delete.bind(this);
  }

  async create(request, response) {
    const { body } = request;
    const preferenceDto = new PreferenceDto(body);

    return await super.create(request, response, preferenceDto);
  }

  async restore(request, response) {
    const { body } = request;
    const preferenceDto = new PreferenceDto(body);

    return await super.restore(request, response, preferenceDto);
  }

  async delete(request, response) {
    const { body } = request;
    const preferenceDto = new PreferenceDto(body);

    return await super.delete(request, response, preferenceDto);
  }
}

export default PreferenceController;
