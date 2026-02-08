import FixedAssetPaymentDto from '../../../dto/tr/fixedasset/FixedAssetPaymentDto.js';
import StandardTransactionController from '../../StandardTransactionController.js';

class FixedAssetPaymentController extends StandardTransactionController {
  constructor(fixedAssetPurchaseService) {
    super(fixedAssetPurchaseService);
    this.create = this.create.bind(this);
    this.restore = this.restore.bind(this);
    this.delete = this.delete.bind(this);
    this.changeStatus = this.changeStatus.bind(this);
    this.changeStatusRequest = this.changeStatusRequest.bind(this);
  }

  async create(request, response) {
    const { body } = request;
    const fixedAssetPaymentDto = new FixedAssetPaymentDto(body);

    return await super.insertTransaction(request, response, fixedAssetPaymentDto);
  }

  async restore(request, response) {
    const { body } = request;
    const fixedAssetPaymentDto = new FixedAssetPaymentDto(body);

    return await super.restore(request, response, fixedAssetPaymentDto);
  }

  async delete(request, response) {
    const { body } = request;
    const fixedAssetPaymentDto = new FixedAssetPaymentDto(body);

    return await super.delete(request, response, fixedAssetPaymentDto);
  }

  async changeStatus(request, response) {
    const { body } = request;
    const fixedAssetPaymentDto = new FixedAssetPaymentDto(body);

    return await super.changeStatus(request, response, fixedAssetPaymentDto);
  }

  async changeStatusRequest(request, response) {
    const { body } = request;
    const fixedAssetPaymentDto = new FixedAssetPaymentDto(body);

    return await super.changeStatusRequest(request, response, fixedAssetPaymentDto);
  }
}
export default FixedAssetPaymentController;
