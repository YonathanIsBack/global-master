import PrincipalDto from '../dto/PrincipalDto.js';
import StandardController from './StandardController.js';

class PrincipalController extends StandardController {
  constructor(principalService) {
    super(principalService);
    this.create = this.create.bind(this);
    this.restore = this.restore.bind(this);
    this.delete = this.delete.bind(this);
  }

  async create(request, response) {
    const { body } = request;
    const principalDto = new PrincipalDto(body);

    return await super.create(request, response, principalDto);
  }

  async restore(request, response) {
    const { body } = request;
    const principalDto = new PrincipalDto(body);

    return await super.restore(request, response, principalDto);
  }

  async delete(request, response) {
    const { body } = request;
    const principalDto = new PrincipalDto(body);

    return await super.delete(request, response, principalDto);
  }
}

export default PrincipalController;
