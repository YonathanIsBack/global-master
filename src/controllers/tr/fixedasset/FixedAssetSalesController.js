import FixedAssetSalesDto from '../../../dto/tr/fixedasset/FixedAssetSalesDto.js';
import StandardTransactionController from '../../StandardTransactionController.js';

class FixedAssetSalesController extends StandardTransactionController {
  constructor(fixedAssetSalesService) {
    super(fixedAssetSalesService);
    this.create = this.create.bind(this);
    this.restore = this.restore.bind(this);
    this.delete = this.delete.bind(this);
    this.changeStatus = this.changeStatus.bind(this);
    this.changeStatusRequest = this.changeStatusRequest.bind(this);
  }

  async create(request, response) {
    const { body } = request;
    const fixedAssetSalesDto = new FixedAssetSalesDto(body);

    return await super.insertTransaction(request, response, fixedAssetSalesDto);
  }

  async restore(request, response) {
    const { body } = request;
    const fixedAssetSalesDto = new FixedAssetSalesDto(body);

    return await super.restore(request, response, fixedAssetSalesDto);
  }

  async delete(request, response) {
    const { body } = request;
    const fixedAssetSalesDto = new FixedAssetSalesDto(body);

    return await super.delete(request, response, fixedAssetSalesDto);
  }

  async changeStatus(request, response) {
    const {body} = request;
    const fixedAssetSalesDto = new FixedAssetSalesDto(body);

    return await super.changeStatus(request, response, fixedAssetSalesDto);
  }

  async changeStatusRequest(request, response) {
    const { body } = request;
    const fixedAssetSalesDto = new FixedAssetSalesDto(body);

    return await super.changeStatusRequest(request, response, fixedAssetSalesDto);
  }
}
export default FixedAssetSalesController;
