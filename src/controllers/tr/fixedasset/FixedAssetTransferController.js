import FixedAssetTransferDto from '../../../dto/tr/fixedasset/FixedAssetTransferDto.js';
import StandardController from '../../StandardController.js';
import StandardTransactionController from '../../StandardTransactionController.js';

class FixedAssetTransferController extends StandardTransactionController {
  constructor(fixedAssetTransferService) {
    super(fixedAssetTransferService);
    this.create = this.create.bind(this);
    this.restore = this.restore.bind(this);
    this.delete = this.delete.bind(this);
    this.changeStatus = this.changeStatus.bind(this);
    this.changeStatusRequest = this.changeStatusRequest.bind(this);
  }

  async create(request, response) {
    const { body } = request;
    const fixedAssetTransferDto = new FixedAssetTransferDto(body);

    return await super.insertTransaction(request, response, fixedAssetTransferDto);
  }

  async restore(request, response) {
    const { body } = request;
    const fixedAssetTransferDto = new FixedAssetTransferDto(body);

    return await super.restore(request, response, fixedAssetTransferDto);
  }

  async delete(request, response) {
    const { body } = request;
    const fixedAssetTransferDto = new FixedAssetTransferDto(body);

    return await super.delete(request, response, fixedAssetTransferDto);
  }

  async changeStatus(request, response) {
    const {body} = request;
    const fixedAssetTransferDto = new FixedAssetTransferDto(body);

    return await super.changeStatus(request, response, fixedAssetTransferDto);
  }

  async changeStatusRequest(request, response) {
    const { body } = request;
    const fixedAssetTransferDto = new FixedAssetTransferDto(body);

    return await super.changeStatusRequest(request, response, fixedAssetTransferDto);
  }
}
export default FixedAssetTransferController;
