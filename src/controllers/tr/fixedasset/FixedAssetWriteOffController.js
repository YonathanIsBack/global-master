import FixedAssetWriteOffDto from '../../../dto/tr/fixedasset/FixedAssetWriteOffDto.js';
import StandardTransactionController from '../../StandardTransactionController.js';

class FixedAssetWriteOffController extends StandardTransactionController {
  constructor(fixedAssetWriteOffService) {
    super(fixedAssetWriteOffService);
    this.create = this.create.bind(this);
    this.restore = this.restore.bind(this);
    this.delete = this.delete.bind(this);
    this.changeStatus = this.changeStatus.bind(this);
    this.changeStatusRequest = this.changeStatusRequest.bind(this);
  }

  async create(request, response) {
    const { body } = request;
    const fixedAssetWriteOffDto = new FixedAssetWriteOffDto(body);

    return await super.insertTransaction(request, response, fixedAssetWriteOffDto);
  }

  async restore(request, response) {
    const { body } = request;
    const fixedAssetWriteOffDto = new FixedAssetWriteOffDto(body);

    return await super.restore(request, response, fixedAssetWriteOffDto);
  }

  async delete(request, response) {
    const { body } = request;
    const fixedAssetWriteOffDto = new FixedAssetWriteOffDto(body);

    return await super.delete(request, response, fixedAssetWriteOffDto);
  }

  async changeStatus(request, response) {
    const {body} = request;
    const fixedAssetWriteOffDto = new FixedAssetWriteOffDto(body);

    return await super.changeStatus(request, response, fixedAssetWriteOffDto);
  }

  async changeStatusRequest(request, response) {
    const { body } = request;
    const fixedAssetWriteOffDto = new FixedAssetWriteOffDto(body);

    return await super.changeStatusRequest(request, response, fixedAssetWriteOffDto);
  }
}
export default FixedAssetWriteOffController;
