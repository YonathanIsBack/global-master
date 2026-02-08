import PembayaranSendDto from '../../../dto/tr/memo/PembayaranSendDto.js';
import StandardTransactionController from '../../StandardTransactionController.js';

class PembayaranSendController extends StandardTransactionController {
  constructor(inventoryTransfer) {
    super(inventoryTransfer);
    this.create = this.create.bind(this);
    this.restore = this.restore.bind(this);
    this.delete = this.delete.bind(this);
    this.changeStatus = this.changeStatus.bind(this);
    this.changeStatusRequest = this.changeStatusRequest.bind(this);
  }

  async create(request, response) {
    const { body } = request;
    const pembayaranSendDto = new PembayaranSendDto(body);

    return await super.create(request, response, pembayaranSendDto);
  }

  async restore(request, response) {
    const { body } = request;
    const pembayaranSendDto = new PembayaranSendDto(body);

    return await super.restore(request, response, pembayaranSendDto);
  }

  async delete(request, response) {
    const { body } = request;
    const pembayaranSendDto = new PembayaranSendDto(body);

    return await super.delete(request, response, pembayaranSendDto);
  }
  async changeStatus(request, response) {
    const { body } = request;
    const pembayaranSendDto = new PembayaranSendDto(body);

    return await super.changeStatus(request, response, pembayaranSendDto);
  }

  async changeStatusRequest(request, response) {
    const { body } = request;
    const pembayaranSendDto = new PembayaranSendDto(body);

    return await super.changeStatusRequest(request, response, pembayaranSendDto);
  }
}

export {
  PembayaranSendController
};

