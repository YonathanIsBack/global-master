import ShippingDto from '../dto/ShippingDto.js';
import StandardController from './StandardController.js';

class ShippingController extends StandardController {
  constructor(shippingService) {
    super(shippingService);
    this.create = this.create.bind(this);
    this.restore = this.restore.bind(this);
    this.delete = this.delete.bind(this);
  }

  async create(request, response, next) {
    const { body } = request;
    const shippingDto = new ShippingDto(body);

    return await super.create(request, response, shippingDto);
  }

  async delete(request, response) {
    const { body } = request;
    const shippingDto = new ShippingDto(body);

    return await super.delete(request, response, shippingDto);
  }

  async restore(request, response) {
    const { body } = request;
    const shippingDto = new ShippingDto(body);

    return await super.restore(request, response, shippingDto);
  }
}

export default ShippingController;
