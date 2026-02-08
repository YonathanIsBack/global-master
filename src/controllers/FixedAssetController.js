import {
  FixedAssetCategoryDto,
  FixedAssetDto,
  FixedAssetGroupDto,
  FixedDepreciationDto
} from '../dto/FixedAssetDto.js';
import StandardController from './StandardController.js';

class FixedAssetController extends StandardController {
  constructor(fixedAssetService) {
    super(fixedAssetService);
    this.create = this.create.bind(this);
    this.restore = this.restore.bind(this);
    this.delete = this.delete.bind(this);
  }

  async create(request, response) {
    const { body } = request;
    const fixedAsset = new FixedAssetDto(body);

    return await super.create(request, response, fixedAsset);
  }

  async restore(request, response) {
    const { body } = request;
    const fixedAsset = new FixedAssetDto(body);

    return await super.restore(request, response, fixedAsset);
  }

  async delete(request, response) {
    const { body } = request;
    const fixedAsset = new FixedAssetDto(body);

    return await super.delete(request, response, fixedAsset);
  }
}

class FixedAssetCategoryController extends StandardController {
  constructor(fixedAssetService) {
    super(fixedAssetService);
    this.create = this.create.bind(this);
    this.restore = this.restore.bind(this);
    this.delete = this.delete.bind(this);
  }

  async create(request, response) {
    const { body } = request;
    const fixedAssetCategoryDto = new FixedAssetCategoryDto(body);

    return await super.create(request, response, fixedAssetCategoryDto);
  }

  async restore(request, response) {
    const { body } = request;
    const fixedAssetCategoryDto = new FixedAssetCategoryDto(body);

    return await super.restore(request, response, fixedAssetCategoryDto);
  }

  async delete(request, response) {
    const { body } = request;
    const fixedAssetCategoryDto = new FixedAssetCategoryDto(body);

    return await super.delete(request, response, fixedAssetCategoryDto);
  }
}

class FixedAssetGroupController extends StandardController {
  constructor(fixedAssetGroupService) {
    super(fixedAssetGroupService);
    this.create = this.create.bind(this);
    this.restore = this.restore.bind(this);
    this.delete = this.delete.bind(this);
  }

  async create(request, response) {
    const { body } = request;
    const fixedAssetGroupDto = new FixedAssetGroupDto(body);

    return await super.create(request, response, fixedAssetGroupDto);
  }

  async restore(request, response) {
    const { body } = request;
    const fixedAssetGroupDto = new FixedAssetGroupDto(body);

    return await super.restore(request, response, fixedAssetGroupDto);
  }

  async delete(request, response) {
    const { body } = request;
    const fixedAssetGroupDto = new FixedAssetGroupDto(body);

    return await super.delete(request, response, fixedAssetGroupDto);
  }
}

class FixedDepreciationController extends StandardController {
  constructor(coaSubGroupService) {
    super(coaSubGroupService);
    this.create = this.create.bind(this);
    this.restore = this.restore.bind(this);
    this.delete = this.delete.bind(this);
  }

  async create(request, response) {
    const { body } = request;
    const fixedDepreciationDto = new FixedDepreciationDto(body);

    return await super.create(request, response, fixedDepreciationDto);
  }

  async restore(request, response) {
    const { body } = request;
    const fixedDepreciationDto = new FixedDepreciationDto(body);

    return await super.restore(request, response, fixedDepreciationDto);
  }

  async delete(request, response) {
    const { body } = request;
    const fixedDepreciationDto = new FixedDepreciationDto(body);

    return await super.delete(request, response, fixedDepreciationDto);
  }
}

export {
  FixedAssetCategoryController,
  FixedAssetController,
  FixedAssetGroupController,
  FixedDepreciationController
};

