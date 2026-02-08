import EndOfMonthSettingDto from '../dto/EndOfMonthSettingDto.js';
import StandardController from './StandardController.js';

class EndOfMonthSettingController extends StandardController {
  constructor(endOfMonthSettingService) {
    super(endOfMonthSettingService);
    this.create = this.create.bind(this);
    this.restore = this.restore.bind(this);
    this.delete = this.delete.bind(this);
  }

  async create(request, response) {
    const { body } = request;
    const endOfMonthSettingDto = new EndOfMonthSettingDto(body);

    return await super.create(request, response, endOfMonthSettingDto);
  }

  async delete(request, response) {
    const { body } = request;
    const endOfMonthSettingDto = new EndOfMonthSettingDto(body);

    return await super.delete(request, response, endOfMonthSettingDto);
  }

  async restore(request, response) {
    const { body } = request;
    const endOfMonthSettingDto = new EndOfMonthSettingDto(body);

    return await super.restore(request, response, endOfMonthSettingDto);
  }
}

export default EndOfMonthSettingController;
