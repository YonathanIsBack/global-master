import { MemoJurnalDto } from '../../dto/gl/MemoJurnalDto.js';
import StandardTransactionController from '../StandardTransactionController.js';

class MemoJurnalController extends StandardTransactionController {
  constructor(memoJurnalService) {
    super(memoJurnalService);
    this.create = this.create.bind(this);
    this.restore = this.restore.bind(this);
    this.delete = this.delete.bind(this);
    this.changeStatus = this.changeStatus.bind(this);
    this.changeStatusRequest = this.changeStatusRequest.bind(this);
  }

  async create(request, response) {
    const { body } = request;
    const memoJurnalDto = new MemoJurnalDto(body);

    return await super.insertTransaction(request, response, memoJurnalDto);
  }

  async restore(request, response) {
    const { body } = request;
    const memoJurnalDto = new MemoJurnalDto(body);

    return await super.restore(request, response, memoJurnalDto);
  }

  async delete(request, response) {
    const { body } = request;
    const memoJurnalDto = new MemoJurnalDto(body);

    return await super.delete(request, response, memoJurnalDto);
  }

  async changeStatus(request, response) {
    const {body} = request;
    const memoJurnalDto = new MemoJurnalDto(body);

    return await super.changeStatus(request, response, memoJurnalDto);
  }

  async changeStatusRequest(request, response) {
    const { body } = request;
    const memoJurnalDto = new MemoJurnalDto(body);

    return await super.changeStatusRequest(request, response, memoJurnalDto);
  }
}

export default MemoJurnalController;
