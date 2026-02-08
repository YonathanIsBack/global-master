import PeriodeDto from '../dto/PeriodeDto.js';
import StandardController from './StandardController.js';

class PeriodeController extends StandardController {
  constructor(periodeService) {
    super(periodeService);
    this.create = this.create.bind(this);
    this.restore = this.restore.bind(this);
    this.delete = this.delete.bind(this);
  }

  async create(request, response) {
    const { body } = request;
    const periodeDto = new PeriodeDto(body);

    return await super.create(request, response, periodeDto);
  }

  async delete(request, response) {
    const { body } = request;
    const periodeDto = new PeriodeDto(body);

    return await super.delete(request, response, periodeDto);
  }

  async restore(request, response) {
    const { body } = request;
    const periodeDto = new PeriodeDto(body);

    return await super.restore(request, response, periodeDto);
  }
}

export default PeriodeController;
