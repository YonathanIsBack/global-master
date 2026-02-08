import { StockComboDto, StockComboReverseDto } from '../../../dto/tr/stock/StockComboDto.js';
import StandardController from '../../StandardController.js';
import StandardTransactionController from '../../StandardTransactionController.js';

class StockComboController extends StandardTransactionController {
  constructor(stockComboService) {
    super(stockComboService);
    this.create = this.create.bind(this);
    this.restore = this.restore.bind(this);
    this.delete = this.delete.bind(this);
    this.changeStatus = this.changeStatus.bind(this);
    this.changeStatusRequest = this.changeStatusRequest.bind(this);
  }

  async create(request, response) {
    const { body } = request;
    const stockComboDto = new StockComboDto(body);

    return await super.insertTransaction(request, response, stockComboDto);
  }

  async restore(request, response) {
    const { body } = request;
    const stockComboDto = new StockComboDto(body);

    return await super.restore(request, response, stockComboDto);
  }

  async delete(request, response) {
    const { body } = request;
    const stockComboDto = new StockComboDto(body);

    return await super.delete(request, response, stockComboDto);
  }

  async changeStatus(request, response) {
    const {body} = request;
    const stockComboDto = new StockComboDto(body);

    return await super.changeStatus(request, response, stockComboDto);
  }

  async changeStatusRequest(request, response) {
    const { body } = request;

    const stockComboDto = new StockComboDto(body);

    return await super.changeStatusRequest(request, response, stockComboDto);
  }
}

class StockComboReverseController extends StandardTransactionController {
  constructor(stockComboService) {
    super(stockComboService);
    this.create = this.create.bind(this);
    this.restore = this.restore.bind(this);
    this.delete = this.delete.bind(this);
    this.changeStatus = this.changeStatus.bind(this);
    this.changeStatusRequest = this.changeStatusRequest.bind(this);
  }

  async create(request, response) {
    const { body } = request;
    const stockComboReverseDto = new StockComboReverseDto(body);

    return await super.insertTransaction(request, response, stockComboReverseDto);
  }

  async restore(request, response) {
    const { body } = request;
    const stockComboReverseDto = new StockComboReverseDto(body);

    return await super.restore(request, response, stockComboReverseDto);
  }

  async delete(request, response) {
    const { body } = request;
    const stockComboReverseDto = new StockComboReverseDto(body);

    return await super.delete(request, response, stockComboReverseDto);
  }

  async changeStatus(request, response) {
    const {body} = request;
    const stockComboReverseDto = new StockComboReverseDto(body);

    return await super.changeStatus(request, response, stockComboReverseDto);
  }

  async changeStatusRequest(request, response) {
    const { body } = request;

    const stockComboReverseDto = new StockComboReverseDto(body);

    return await super.changeStatusRequest(request, response, stockComboReverseDto);
  }
}

export { StockComboController, StockComboReverseController };
