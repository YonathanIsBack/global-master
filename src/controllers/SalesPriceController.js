import { SalesPriceDtDto, SalesPriceDto } from '../dto/SalesPriceDto.js';
import StandardController from './StandardController.js';

class SalesPriceController extends StandardController {
  constructor(salesTargetService) {
    super(salesTargetService);
    this.create = this.create.bind(this);
    this.restore = this.restore.bind(this);
    this.delete = this.delete.bind(this);
  }

  async create(request, response) {
    const { body } = request;
    const salesTargetDto = new SalesPriceDto(body);

    return await super.create(request, response, salesTargetDto);
  }

  async restore(request, response) {
    const { body } = request;
    const salesTargetDto = new SalesPriceDto(body);

    return await super.restore(request, response, salesTargetDto);
  }

  async delete(request, response) {
    const { body } = request;
    const salesTargetDto = new SalesPriceDto(body);

    return await super.delete(request, response, salesTargetDto);
  }
}

class SalesPriceDetailController extends StandardController {
  constructor(salesTargetDetailService) {
    super(salesTargetDetailService);
    this.create = this.create.bind(this);
    this.restore = this.restore.bind(this);
    this.delete = this.delete.bind(this);
  }

  async create(request, response) {
    const { body } = request;
    const buyingPriceListDetailDto = new SalesPriceDtDto(body);

    return await super.create(request, response, buyingPriceListDetailDto);
  }

  async restore(request, response) {
    const { body } = request;
    const buyingPriceListDetailDto = new SalesPriceDtDto(body);

    return await super.restore(request, response, buyingPriceListDetailDto);
  }

  async delete(request, response) {
    const { body } = request;
    const buyingPriceListDetailDto = new SalesPriceDtDto(body);

    const data = await this.service.deleteRow(buyingPriceListDetailDto);

    return response
      .status(StatusCodes.OK)
      .json(buildResponse(StatusCodes.OK, Constant.DELETED, data));
  }
}

export { SalesPriceController, SalesPriceDetailController };
