import StAutoApproveDto from '../dto/StAutoApproveDto.js';
import StandardController from './StandardController.js';

class StAutoApproveController extends StandardController {
  constructor(stAutoApproveService) {
    super(stAutoApproveService);
    this.create = this.create.bind(this);
    this.restore = this.restore.bind(this);
    this.delete = this.delete.bind(this);
  }

  async create(request, response) {
    const { body } = request;
    const stAutoApproveDto = new StAutoApproveDto(body);

    return await super.create(request, response, stAutoApproveDto);
  }

  async restore(request, response) {
    const { body } = request;
    const stAutoApproveDto = new StAutoApproveDto(body);

    return await super.restore(request, response, stAutoApproveDto);
  }

  async delete(request, response) {
    const { body } = request;
    const stAutoApproveDto = new StAutoApproveDto(body);

    return await super.delete(request, response, stAutoApproveDto);
  }
}

export default StAutoApproveController;
