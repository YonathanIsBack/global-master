import { ExportSalesPriceDtDto, ExportSalesPriceDto } from '../../../dto/tr/export/ExportSalesPriceDto.js';
import StandardController from '../../StandardController.js';
import StandardTransactionController from '../../StandardTransactionController.js';

class ExportSalesPriceController extends StandardTransactionController {
  constructor(exportSalesPrice) {
    super(exportSalesPrice);
    this.create = this.create.bind(this);
    this.restore = this.restore.bind(this);
    this.delete = this.delete.bind(this);
    this.changeStatus = this.changeStatus.bind(this);
    this.changeStatusRequest = this.changeStatusRequest.bind(this);
  }

  async create(request, response) {
    const { body } = request;
    const exportSalesPriceDto = new ExportSalesPriceDto(body);

    return await super.create(request, response, exportSalesPriceDto);
  }

  async restore(request, response) {
    const { body } = request;
    const exportSalesPriceDto = new ExportSalesPriceDto(body);

    return await super.restore(request, response, exportSalesPriceDto);
  }

  async delete(request, response) {
    const { body } = request;
    const exportSalesPriceDto = new ExportSalesPriceDto(body);

    return await super.delete(request, response, exportSalesPriceDto);
  }
  async changeStatus(request, response) {
    const {body} = request;
    const exportSalesPriceDto = new ExportSalesPriceDto(body);

    return await super.changeStatus(request, response, exportSalesPriceDto);
  }

  async changeStatusRequest(request, response) {
    const { body } = request;
    const exportSalesPriceDto = new ExportSalesPriceDto(body);

    return await super.changeStatusRequest(request, response, exportSalesPriceDto);
  }
}

class ExportSalesPriceDtController extends StandardController {
  constructor(exportSalesPriceDt) {
    super(exportSalesPriceDt);
    this.create = this.create.bind(this);
    this.restore = this.restore.bind(this);
    this.delete = this.delete.bind(this);
  }

  async create(request, response) {
    const { body } = request;
    const exportSalesPriceDtDto = new ExportSalesPriceDtDto(body);

    return await super.create(request, response, exportSalesPriceDtDto);
  }

  async restore(request, response) {
    const { body } = request;
    const exportSalesPriceDtDto = new ExportSalesPriceDtDto(body);

    return await super.restore(request, response, exportSalesPriceDtDto);
  }

  async delete(request, response) {
    const { body } = request;
    const exportSalesPriceDtDto = new ExportSalesPriceDtDto(body);

    return await super.delete(request, response, exportSalesPriceDtDto);
  }
}

export { ExportSalesPriceController, ExportSalesPriceDtController };

