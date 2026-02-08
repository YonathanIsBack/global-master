import {
  PurchasePriceDtDto,
  PurchasePriceDto,
  PurchasePriceImportDtDto,
  PurchasePriceImportDto
} from '../../../dto/tr/purchase/PurchasePriceDto.js';
import StandardController from '../../StandardController.js';
import StandardTransactionController from '../../StandardTransactionController.js';

class PurchasePriceController extends StandardTransactionController {
  constructor(purchasePrice) {
    super(purchasePrice);
    this.create = this.create.bind(this);
    this.restore = this.restore.bind(this);
    this.delete = this.delete.bind(this);
    this.changeStatus = this.changeStatus.bind(this);
    this.changeStatusRequest = this.changeStatusRequest.bind(this);
  }

  async create(request, response) {
    const { body } = request;
    const purchasePriceDto = new PurchasePriceDto(body);

    return await super.create(request, response, purchasePriceDto);
  }

  async restore(request, response) {
    const { body } = request;
    const purchasePriceDto = new PurchasePriceDto(body);

    return await super.restore(request, response, purchasePriceDto);
  }

  async delete(request, response) {
    const { body } = request;
    const purchasePriceDto = new PurchasePriceDto(body);

    return await super.delete(request, response, purchasePriceDto);
  }

  async changeStatus(request, response) {
    const {body} = request;
    const purchasePriceDto = new PurchasePriceDto(body);

    return await super.changeStatus(request, response, purchasePriceDto);
  }

  async changeStatusRequest(request, response) {
    const { body } = request;
    const purchasePriceDto = new PurchasePriceDto(body);

    return await super.changeStatusRequest(request, response, purchasePriceDto);
  }
}

class PurchasePriceDtController extends StandardController {
  constructor(purchasePriceDt) {
    super(purchasePriceDt);
    this.create = this.create.bind(this);
    this.restore = this.restore.bind(this);
    this.delete = this.delete.bind(this);
  }

  async create(request, response) {
    const { body } = request;
    const purchasePriceDtDto = new PurchasePriceDtDto(body);

    return await super.create(request, response, purchasePriceDtDto);
  }

  async restore(request, response) {
    const { body } = request;
    const purchasePriceDtDto = new PurchasePriceDtDto(body);

    return await super.restore(request, response, purchasePriceDtDto);
  }

  async delete(request, response) {
    const { body } = request;
    const purchasePriceDtDto = new PurchasePriceDtDto(body);

    return await super.delete(request, response, purchasePriceDtDto);
  }
}

class PurchasePriceImportController extends StandardController {
  constructor(purchasePriceImport) {
    super(purchasePriceImport);
    this.create = this.create.bind(this);
    this.restore = this.restore.bind(this);
    this.delete = this.delete.bind(this);
  }

  async create(request, response) {
    const { body } = request;
    const purchasePriceImportDto = new PurchasePriceImportDto(body);

    return await super.create(request, response, purchasePriceImportDto);
  }

  async restore(request, response) {
    const { body } = request;
    const purchasePriceImportDto = new PurchasePriceImportDto(body);

    return await super.restore(request, response, purchasePriceImportDto);
  }

  async delete(request, response) {
    const { body } = request;
    const purchasePriceImportDto = new PurchasePriceImportDto(body);

    return await super.delete(request, response, purchasePriceImportDto);
  }
}
class PurchasePriceImportDtController extends StandardController {
  constructor(purchasePriceImportDt) {
    super(purchasePriceImportDt);
    this.create = this.create.bind(this);
    this.restore = this.restore.bind(this);
    this.delete = this.delete.bind(this);
  }

  async create(request, response) {
    const { body } = request;
    const purchasePriceImportDtDto = new PurchasePriceImportDtDto(body);

    return await super.create(request, response, purchasePriceImportDtDto);
  }

  async restore(request, response) {
    const { body } = request;
    const purchasePriceImportDtDto = new PurchasePriceImportDtDto(body);

    return await super.restore(request, response, purchasePriceImportDtDto);
  }

  async delete(request, response) {
    const { body } = request;
    const purchasePriceImportDtDto = new PurchasePriceImportDtDto(body);

    return await super.delete(request, response, purchasePriceImportDtDto);
  }
}

export {
  PurchasePriceController,
  PurchasePriceImportDtController,
  PurchasePriceDtController,
  PurchasePriceImportController
};
