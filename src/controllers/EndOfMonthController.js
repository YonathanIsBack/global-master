import EndOfMonthDto from '../dto/EndOfMonthDto.js';
import StandardController from './StandardController.js';

class EndOfMonthController extends StandardController {
  constructor(endOfMonthService) {
    super(endOfMonthService);
    this.create = this.create.bind(this);
    this.restore = this.restore.bind(this);
    this.delete = this.delete.bind(this);
  }

  async create(request, response) {
    const { body } = request;
    const endOfMonthDto = new EndOfMonthDto(body);

    return await super.create(request, response, endOfMonthDto);
  }

  async delete(request, response) {
    const { body } = request;
    const endOfMonthDto = new EndOfMonthDto(body);

    return await super.delete(request, response, endOfMonthDto);
  }

  async restore(request, response) {
    const { body } = request;
    const endOfMonthDto = new EndOfMonthDto(body);

    return await super.restore(request, response, endOfMonthDto);
  }
}

export default EndOfMonthController;
