import { StatusCodes } from 'http-status-codes';
import KasbonPotonganDto from '../dto/KasbonPotonganDto.js';
import StandardController from './StandardController.js';

class KasbonPotonganController extends StandardController {
  constructor(kasbonPotonganService) {
    super(kasbonPotonganService);
    this.create = this.create.bind(this);
    this.restore = this.restore.bind(this);
    this.delete = this.delete.bind(this);
  }

  async create(request, response) {
    const { body } = request;
    const kasbonPotonganDto = new KasbonPotonganDto(body);

    return await super.create(request, response, kasbonPotonganDto);
  }

  async restore(request, response) {
    const { body } = request;
    const kasbonPotonganDto = new KasbonPotonganDto(body);

    return await super.restore(request, response, kasbonPotonganDto);
  }

  async delete(request, response) {
    const { body } = request;
    const kasbonPotonganDto = new KasbonPotonganDto(body);

    const { data } = await this.service.deleteRow(kasbonPotonganDto);

    return response
      .status(StatusCodes.OK)
      .json(buildResponse(StatusCodes.OK, Constant.DELETED, data));
  }
}

export default KasbonPotonganController;
