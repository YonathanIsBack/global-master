import { StatusCodes } from 'http-status-codes';
import Constant from '../constants/Constant.js';
import buildResponse from '../util/buildResponse.js';
import LocationDto from '../dto/LocationDto.js';
import StandardController from './StandardController.js';

class LocationController extends StandardController {
  constructor(locationService) {
    super(locationService);
    this.create = this.create.bind(this);
    this.restore = this.restore.bind(this);
    this.delete = this.delete.bind(this);
  }

  async create(request, response, next) {
    const { body } = request;
    const locationDto = new LocationDto(body);

    return await super.create(request, response, locationDto);
  }

  async delete(request, response) {
    const { body } = request;
    const locationDto = new LocationDto(body);

    return await super.delete(request, response, locationDto);
  }

  async restore(request, response) {
    const { body } = request;
    const locationDto = new LocationDto(body);

    return await super.restore(request, response, locationDto);
  }
}

export default LocationController;
