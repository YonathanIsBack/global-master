import {
  BuyingPriceLisImportDetailDto,
  BuyingPriceLisImportDto
} from '../dto/BuyingPriceListImportDto.js';
import StandardController from './StandardController.js';

class BuyingPriceListImportController extends StandardController {
  constructor(BuyingPriceListImportService) {
    super(BuyingPriceListImportService);
    this.create = this.create.bind(this);
    this.restore = this.restore.bind(this);
    this.delete = this.delete.bind(this);
  }

  async create(request, response) {
    const { body } = request;
    const buyingPriceLisImportDto = new BuyingPriceLisImportDto(body);

    return await super.create(request, response, buyingPriceLisImportDto);
  }

  async restore(request, response) {
    const { body } = request;
    const buyingPriceLisImportDto = new BuyingPriceLisImportDto(body);

    return await super.restore(request, response, buyingPriceLisImportDto);
  }

  async delete(request, response) {
    const { body } = request;
    const buyingPriceLisImportDto = new BuyingPriceLisImportDto(body);

    return await super.delete(request, response, buyingPriceLisImportDto);
  }
}

class BuyingPriceListImportDetailController extends StandardController {
  constructor(BuyingPriceListImportDetailService) {
    super(BuyingPriceListImportDetailService);
    this.create = this.create.bind(this);
    this.restore = this.restore.bind(this);
    this.delete = this.delete.bind(this);
  }

  async create(request, response) {
    const { body } = request;
    const buyingPriceLisImportDetailDto = new BuyingPriceLisImportDetailDto(body);

    return await super.create(request, response, buyingPriceLisImportDetailDto);
  }

  async restore(request, response) {
    const { body } = request;
    const buyingPriceLisImportDetailDto = new BuyingPriceLisImportDetailDto(body);

    return await super.restore(request, response, buyingPriceLisImportDetailDto);
  }

  async delete(request, response) {
    const { body } = request;
    const buyingPriceLisImportDetailDto = new BuyingPriceLisImportDetailDto(body);
    const { data } = await this.service.deleteRow(buyingPriceLisImportDetailDto);

    return response
      .status(StatusCodes.OK)
      .json(buildResponse(StatusCodes.OK, Constant.DELETED, data));
  }
}

export { BuyingPriceListImportController, BuyingPriceListImportDetailController };
