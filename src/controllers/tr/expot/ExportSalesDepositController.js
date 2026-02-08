import ExportDepositDto from '../../../dto/tr/export/ExportSalesDepositDto.js';
import StandardController from '../../StandardController.js';
import StandardTransactionController from '../../StandardTransactionController.js';

class ExportDepositController extends StandardTransactionController {
  constructor(exportSalesAdvPay) {
    super(exportSalesAdvPay);
    this.create = this.create.bind(this);
    this.restore = this.restore.bind(this);
    this.delete = this.delete.bind(this);
    this.changeStatus = this.changeStatus.bind(this);
    this.changeStatusRequest = this.changeStatusRequest.bind(this);
  }

  async create(request, response) {
    const { body } = request;
    const exportDepositDto = new ExportDepositDto(body);

    return await super.create(request, response, exportDepositDto);
  }

  async restore(request, response) {
    const { body } = request;
    const exportDepositDto = new ExportDepositDto(body);

    return await super.restore(request, response, exportDepositDto);
  }

  async delete(request, response) {
    const { body } = request;
    const exportDepositDto = new ExportDepositDto(body);

    return await super.delete(request, response, exportDepositDto);
  }

  async changeStatus(request, response) {
    const {body} = request;
    const exportDepositDto = new ExportDepositDto(body);

    return await super.changeStatus(request, response, exportDepositDto);
  }

  async changeStatusRequest(request, response) {
    const { body } = request;
    const exportDepositDto = new ExportDepositDto(body);

    return await super.changeStatusRequest(request, response, exportDepositDto);
  }
}
export default ExportDepositController;
