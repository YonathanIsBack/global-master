import { StatusCodes } from 'http-status-codes';
import Constant from '../constants/Constant.js';
import FakturPajakDto from '../dto/FakturPajakDto.js';
import buildResponse from '../util/buildResponse.js';
import StandardController from './StandardController.js';

class FakturPajakController extends StandardController {
  constructor(fakturPajakService) {
    super(fakturPajakService);
    this.create = this.create.bind(this);
    this.restore = this.restore.bind(this);
    this.delete = this.delete.bind(this);
  }

  async create(request, response) {
    const { body } = request;
    const fakturPajakDto = new FakturPajakDto(body);

    return await super.create(request, response, fakturPajakDto);
  }

  async delete(request, response) {
    const { body } = request;
    const fakturPajakDto = new FakturPajakDto(body);

    return await super.delete(request, response, fakturPajakDto);
  }

  async restore(request, response) {
    const { body } = request;
    const fakturPajakDto = new FakturPajakDto(body);

    return await super.restore(request, response, fakturPajakDto);
  }
}

export default FakturPajakController;
