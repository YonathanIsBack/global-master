import FixedAssetPurchaseDto from '../../../dto/tr/fixedasset/FixedAssetPurchaseDto.js';
import StandardController from '../../StandardController.js';
import StandardTransactionController from '../../StandardTransactionController.js';

class FixedAssetPurchaseController extends StandardTransactionController {
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
    const fixedAssetPurchaseDto = new FixedAssetPurchaseDto(body);

    return await super.insertTransaction(request, response, fixedAssetPurchaseDto);
  }

  async restore(request, response) {
    const { body } = request;
    const fixedAssetPurchaseDto = new FixedAssetPurchaseDto(body);

    return await super.restore(request, response, fixedAssetPurchaseDto);
  }

  async delete(request, response) {
    const { body } = request;
    const fixedAssetPurchaseDto = new FixedAssetPurchaseDto(body);

    return await super.delete(request, response, fixedAssetPurchaseDto);
  }

  async changeStatus(request, response) {
    const {body} = request;
    const fixedAssetPurchaseDto = new FixedAssetPurchaseDto(body);

    return await super.changeStatus(request, response, fixedAssetPurchaseDto);
  }

  async changeStatusRequest(request, response) {
    const { body } = request;
    const fixedAssetPurchaseDto = new FixedAssetPurchaseDto(body);

    return await super.changeStatusRequest(request, response, fixedAssetPurchaseDto);
  }
}
export default FixedAssetPurchaseController;
