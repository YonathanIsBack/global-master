import KasbonDto from '../../dto/tr/KasbonDto.js';
import StandardTransactionController from '../StandardTransactionController.js';

class KasbonController extends StandardTransactionController {
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
    const kasbonDto = new KasbonDto(body);

    return await super.insertTransaction(request, response, kasbonDto);
  }

  async restore(request, response) {
    const { body } = request;
    const kasbonDto = new KasbonDto(body);

    return await super.restore(request, response, kasbonDto);
  }

  async delete(request, response) {
    const { body } = request;
    const kasbonDto = new KasbonDto(body);

    return await super.delete(request, response, kasbonDto);
  }

  async changeStatus(request, response) {
    const { body } = request;
    const kasbonDto = new KasbonDto(body);

    return await super.changeStatus(request, response, kasbonDto);
  }

  async changeStatusRequest(request, response) {
    const { body } = request;
    const kasbonDto = new KasbonDto(body);

    return await super.changeStatusRequest(request, response, kasbonDto);
  }
}
export default KasbonController;
