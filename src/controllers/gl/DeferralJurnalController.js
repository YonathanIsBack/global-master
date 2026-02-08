import { DeferralDto } from '../../dto/gl/DeferralDto.js';
import StandardController from '../StandardController.js';
import StandardTransactionController from '../StandardTransactionController.js';

class DeferralController extends StandardTransactionController {
  constructor(deferralController) {
    super(deferralController);
    this.create = this.create.bind(this);
    this.restore = this.restore.bind(this);
    this.delete = this.delete.bind(this);
    this.changeStatus = this.changeStatus.bind(this);
    this.changeStatusRequest = this.changeStatusRequest.bind(this);
  }

  async create(request, response) {
    const { body } = request;
    const deferralDto = new DeferralDto(body);

    return await super.insertTransaction(request, response, deferralDto);
  }

  async restore(request, response) {
    const { body } = request;
    const deferralDto = new DeferralDto(body);

    return await super.restore(request, response, deferralDto);
  }

  async delete(request, response) {
    const { body } = request;
    const deferralDto = new DeferralDto(body);

    return await super.delete(request, response, deferralDto);
  }

  async changeStatus(request, response) {
    const {body} = request;
    const deferralDto = new DeferralDto(body);

    return await super.changeStatus(request, response, deferralDto);
  }

  async changeStatusRequest(request, response) {
    const { body } = request;
    const deferralDto = new DeferralDto(body);

    return await super.changeStatusRequest(request, response, deferralDto);
  }
}

export default DeferralController;
