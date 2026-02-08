import AccessDto from '../dto/AccessDto.js';
import StandardController from './StandardController.js';

class AccessController extends StandardController {
  constructor(accessService) {
    super(accessService);
    this.create = this.create.bind(this);
    this.restore = this.restore.bind(this);
    this.delete = this.delete.bind(this);
  }

  async create(request, response) {
    const { body } = request;
    const accessDto = new AccessDto(body);

    return await super.create(request, response, accessDto);
  }

  async restore(request, response) {
    const { body } = request;
    const accessDto = new AccessDto(body);

    return await super.restore(request, response, accessDto);
  }

  async delete(request, response) {
    const { body } = request;
    const accessDto = new AccessDto(body);

    return await super.delete(request, response, accessDto);
  }
}

export default AccessController;
