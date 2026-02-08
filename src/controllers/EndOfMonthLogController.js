import EndOfMonthLogDto from '../dto/EndOfMonthLogDto.js';
import StandardController from './StandardController.js';

class EndOfMonthLogController extends StandardController {
  constructor(endOfMonthLogService) {
    super(endOfMonthLogService);
    this.create = this.create.bind(this);
    this.restore = this.restore.bind(this);
    this.delete = this.delete.bind(this);
  }

  async create(request, response) {
    const { body } = request;
    const endOfMonthLogDto = new EndOfMonthLogDto(body);

    return await super.create(request, response, endOfMonthLogDto);
  }

  async delete(request, response) {
    const { body } = request;
    const endOfMonthLogDto = new EndOfMonthLogDto(body);

    return await super.delete(request, response, endOfMonthLogDto);
  }

  async restore(request, response) {
    const { body } = request;
    const endOfMonthLogDto = new EndOfMonthLogDto(body);

    return await super.restore(request, response, endOfMonthLogDto);
  }
}

export default EndOfMonthLogController;
