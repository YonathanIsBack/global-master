import { StatusCodes } from 'http-status-codes';
import { BuyingPriceListDetailDto, BuyingPriceListDto } from '../dto/BuyingPriceListDto.js';
import StandardController from './StandardController.js';

class BuyingPriceListController extends StandardController {
  constructor(BuyingPriceListService) {
    super(BuyingPriceListService);
    this.create = this.create.bind(this);
    this.restore = this.restore.bind(this);
    this.delete = this.delete.bind(this);
  }

  async create(request, response) {
    const { body } = request;
    const buyingPriceListDto = new BuyingPriceListDto(body);

    return await super.create(request, response, buyingPriceListDto);
  }

  async restore(request, response) {
    const { body } = request;
    const buyingPriceListDto = new BuyingPriceListDto(body);

    return await super.restore(request, response, buyingPriceListDto);
  }

  async delete(request, response) {
    const { body } = request;
    const buyingPriceListDto = new BuyingPriceListDto(body);

    return await super.delete(request, response, buyingPriceListDto);
  }
}

class BuyingPriceListDetailController extends StandardController {
  constructor(BuyingPriceListDetailService) {
    super(BuyingPriceListDetailService);
    this.create = this.create.bind(this);
    this.restore = this.restore.bind(this);
    this.delete = this.delete.bind(this);
  }

  async create(request, response) {
    const { body } = request;
    const buyingPriceListDetailDto = new BuyingPriceListDetailDto(body);

    return await super.create(request, response, buyingPriceListDetailDto);
  }

  async restore(request, response) {
    const { body } = request;
    const buyingPriceListDetailDto = new BuyingPriceListDetailDto(body);

    return await super.restore(request, response, buyingPriceListDetailDto);
  }

  async delete(request, response) {
    const { body } = request;
    const buyingPriceListDetailDto = new BuyingPriceListDetailDto(body);
    const { data } = await this.service.deleteRow(buyingPriceListDetailDto);

    return response
      .status(StatusCodes.OK)
      .json(buildResponse(StatusCodes.OK, Constant.DELETED, data));
  }
}

export { BuyingPriceListController, BuyingPriceListDetailController };

