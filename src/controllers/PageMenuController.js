import { PageMenuDto, PageMenuTerbukaDto } from '../dto/PageMenuDto.js';
import StandardController from './StandardController.js';

class PageMenuController extends StandardController {
  constructor(pageMenuService) {
    super(pageMenuService);
    this.create = this.create.bind(this);
    this.restore = this.restore.bind(this);
    this.delete = this.delete.bind(this);
  }

  async create(request, response) {
    const { body } = request;
    const pageMenuDto = new PageMenuDto(body);

    return await super.insertTransaction(request, response, pageMenuDto);
  }

  async restore(request, response) {
    const { body } = request;
    const pageMenuDto = new PageMenuDto(body);

    return await super.restore(request, response, pageMenuDto);
  }

  async delete(request, response) {
    const { body } = request;
    const pageMenuDto = new PageMenuDto(body);
    const { data } = await this.service.deleteRow(pageMenuDto);

    return response
      .status(StatusCodes.OK)
      .json(buildResponse(StatusCodes.OK, Constant.DELETED, data));
  }
}

class PageMenuTerbukaController extends StandardController {
  constructor(pageMenuTerbukaService) {
    super(pageMenuTerbukaService);
    this.create = this.create.bind(this);
    this.restore = this.restore.bind(this);
    this.delete = this.delete.bind(this);
  }

  async create(request, response) {
    const { body } = request;
    const pageMenuTerbukaDto = new PageMenuTerbukaDto(body);

    return await super.create(request, response, pageMenuTerbukaDto);
  }

  async restore(request, response) {
    const { body } = request;
    const pageMenuTerbukaDto = new PageMenuTerbukaDto(body);

    return await super.restore(request, response, pageMenuTerbukaDto);
  }

  async delete(request, response) {
    const { body } = request;
    const pageMenuTerbukaDto = new PageMenuTerbukaDto(body);

    return await super.delete(request, response, pageMenuTerbukaDto);
  }
}

export { PageMenuController, PageMenuTerbukaController };

