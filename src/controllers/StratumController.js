import StratumDto from '../dto/StratumDto.js';
import StandardController from './StandardController.js';

class StratumController extends StandardController {
  constructor(stratumService) {
    super(stratumService);
    this.create = this.create.bind(this);
    this.restore = this.restore.bind(this);
    this.delete = this.delete.bind(this);
  }

  async create(request, response) {
    const { body } = request;
    const stratumDto = new StratumDto(body);

    return await super.create(request, response, stratumDto);
  }

  async delete(request, response) {
    const { body } = request;
    const stratumDto = new StratumDto(body);

    return await super.delete(request, response, stratumDto);
  }

  async restore(request, response) {
    const { body } = request;
    const stratumDto = new StratumDto(body);

    return await super.restore(request, response, stratumDto);
  }
}

export default StratumController;
