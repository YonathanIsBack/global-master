import PeriodeLogDto from '../dto/PeriodeLogDto.js';
import StandardController from './StandardController.js';

class PeriodeLogController extends StandardController {
  constructor(periodeLogService) {
    super(periodeLogService);
    this.create = this.create.bind(this);
    this.restore = this.restore.bind(this);
    this.delete = this.delete.bind(this);
  }

  async create(request, response) {
    const { body } = request;
    const periodeLogDto = new PeriodeLogDto(body);

    return await super.create(request, response, periodeLogDto);
  }

  async delete(request, response) {
    const { body } = request;
    const periodeLogDto = new PeriodeLogDto(body);

    return await super.delete(request, response, periodeLogDto);
  }

  async restore(request, response) {
    const { body } = request;
    const periodeLogDto = new PeriodeLogDto(body);

    return await super.restore(request, response, periodeLogDto);
  }
}

export default PeriodeLogController;
