import { StatusCodes } from 'http-status-codes';
import {
  SupplierBankDto,
  SupplierBrandDto,
  SupplierContactDto,
  SupplierDto,
  SupplierGroupDto,
  SupplierPaymentDto,
  SupplierPurchaseDto,
  SupplierRegionDto,
  SupplierSegmentationDto,
  SupplierTaxDto,
  SupplierTypeDto
} from '../dto/SupplierDto.js';
import StandardController from './StandardController.js';
import buildResponse from '../util/buildResponse.js';
import ObjectUtil from '../util/ObjectUtil.js';

class SupplierController extends StandardController {
  constructor(supplierService) {
    super(supplierService);
    this.create = this.create.bind(this);
    this.restore = this.restore.bind(this);
    this.delete = this.delete.bind(this);
    this.getDataApi = this.getDataApi.bind(this);
  }

  async create(request, response) {
    const { body } = request;
    const supplierDto = new SupplierDto(body);

    return await super.insertTransaction(request, response, supplierDto);
  }

  async restore(request, response) {
    const { body } = request;
    const supplierDto = new SupplierDto(body);

    return await super.restore(request, response, supplierDto);
  }

  async delete(request, response) {
    const { body } = request;
    const supplierDto = new SupplierDto(body);

    return await super.delete(request, response, supplierDto);
  }

  async getDataApi(request, response) {
    const requestBody = request.body;
    const primaryKey = this.service.model.primaryKeyAttributes[0];
    const whereClause = {
      [primaryKey]: requestBody.where_in
    };

    const data = await this.service.getDataApi({ whereClause, limit: requestBody.where_in.length });

    return response.status(StatusCodes.OK).json(buildResponse(StatusCodes.OK, 'Success', ObjectUtil.toSnakeCase(data)));
  }
}

class SupplierBankController extends StandardController {
  constructor(supplierBankService) {
    super(supplierBankService);
    this.create = this.create.bind(this);
    this.restore = this.restore.bind(this);
    this.delete = this.delete.bind(this);
  }

  async create(request, response) {
    const { body } = request;
    const supplierBankDto = new SupplierBankDto(body);

    return await super.create(request, response, supplierBankDto);
  }

  async restore(request, response) {
    const { body } = request;
    const supplierBankDto = new SupplierBankDto(body);

    return await super.restore(request, response, supplierBankDto);
  }

  async delete(request, response) {
    const { body } = request;
    const supplierBankDto = new SupplierBankDto(body);

    return await super.delete(request, response, supplierBankDto);
  }
}

class SupplierBrandController extends StandardController {
  constructor(supplierBrandService) {
    super(supplierBrandService);
    this.create = this.create.bind(this);
    this.restore = this.restore.bind(this);
    this.delete = this.delete.bind(this);
  }

  async create(request, response) {
    const { body } = request;
    const supplierBrandDto = new SupplierBrandDto(body);

    return await super.create(request, response, supplierBrandDto);
  }

  async restore(request, response) {
    const { body } = request;
    const supplierBrandDto = new SupplierBrandDto(body);

    return await super.restore(request, response, supplierBrandDto);
  }

  async delete(request, response) {
    const { body } = request;
    const supplierBrandDto = new SupplierBrandDto(body);

    return await super.delete(request, response, supplierBrandDto);
  }
}

class SupplierContactController extends StandardController {
  constructor(supplierContactService) {
    super(supplierContactService);
    this.create = this.create.bind(this);
    this.restore = this.restore.bind(this);
    this.delete = this.delete.bind(this);
  }

  async create(request, response) {
    const { body } = request;
    const supplierContactDto = new SupplierContactDto(body);

    return await super.create(request, response, supplierContactDto);
  }

  async restore(request, response) {
    const { body } = request;
    const supplierContactDto = new SupplierContactDto(body);

    return await super.restore(request, response, supplierContactDto);
  }

  async delete(request, response) {
    const { body } = request;
    const supplierContactDto = new SupplierContactDto(body);

    return await super.delete(request, response, supplierContactDto);
  }
}

class SupplierGroupController extends StandardController {
  constructor(supplierGroupService) {
    super(supplierGroupService);
    this.create = this.create.bind(this);
    this.restore = this.restore.bind(this);
    this.delete = this.delete.bind(this);
  }

  async create(request, response) {
    const { body } = request;
    const supplierGroupDto = new SupplierGroupDto(body);

    return await super.create(request, response, supplierGroupDto);
  }

  async restore(request, response) {
    const { body } = request;
    const supplierGroupDto = new SupplierGroupDto(body);

    return await super.restore(request, response, supplierGroupDto);
  }

  async delete(request, response) {
    const { body } = request;
    const supplierGroupDto = new SupplierGroupDto(body);

    return await super.delete(request, response, supplierGroupDto);
  }
}

class SupplierPaymentController extends StandardController {
  constructor(supplierPaymentService) {
    super(supplierPaymentService);
    this.create = this.create.bind(this);
    this.restore = this.restore.bind(this);
    this.delete = this.delete.bind(this);
  }

  async create(request, response) {
    const { body } = request;
    const supplierPaymentDto = new SupplierPaymentDto(body);

    return await super.create(request, response, supplierPaymentDto);
  }

  async restore(request, response) {
    const { body } = request;
    const supplierPaymentDto = new SupplierPaymentDto(body);

    return await super.restore(request, response, supplierPaymentDto);
  }

  async delete(request, response) {
    const { body } = request;
    const supplierPaymentDto = new SupplierPaymentDto(body);

    return await super.delete(request, response, supplierPaymentDto);
  }
}

class SupplierPurchaseController extends StandardController {
  constructor(supplierPurchaseService) {
    super(supplierPurchaseService);
    this.create = this.create.bind(this);
    this.restore = this.restore.bind(this);
    this.delete = this.delete.bind(this);
  }

  async create(request, response) {
    const { body } = request;
    const supplierPurchaseDto = new SupplierPurchaseDto(body);

    return await super.create(request, response, supplierPurchaseDto);
  }

  async restore(request, response) {
    const { body } = request;
    const supplierPurchaseDto = new SupplierPurchaseDto(body);

    return await super.restore(request, response, supplierPurchaseDto);
  }

  async delete(request, response) {
    const { body } = request;
    const supplierPurchaseDto = new SupplierPurchaseDto(body);

    return await super.delete(request, response, supplierPurchaseDto);
  }
}

class SupplierRegionController extends StandardController {
  constructor(supplierRegionService) {
    super(supplierRegionService);
    this.create = this.create.bind(this);
    this.restore = this.restore.bind(this);
    this.delete = this.delete.bind(this);
  }

  async create(request, response) {
    const { body } = request;
    const supplierRegionDto = new SupplierRegionDto(body);

    return await super.create(request, response, supplierRegionDto);
  }

  async restore(request, response) {
    const { body } = request;
    const supplierRegionDto = new SupplierRegionDto(body);

    return await super.restore(request, response, supplierRegionDto);
  }

  async delete(request, response) {
    const { body } = request;
    const supplierRegionDto = new SupplierRegionDto(body);

    return await super.delete(request, response, supplierRegionDto);
  }
}

class SupplierSegmentationController extends StandardController {
  constructor(supplierSegmentationService) {
    super(supplierSegmentationService);
    this.create = this.create.bind(this);
    this.restore = this.restore.bind(this);
    this.delete = this.delete.bind(this);
  }

  async create(request, response) {
    const { body } = request;
    const supplierSegmentationDto = new SupplierSegmentationDto(body);

    return await super.create(request, response, supplierSegmentationDto);
  }

  async restore(request, response) {
    const { body } = request;
    const supplierSegmentationDto = new SupplierSegmentationDto(body);

    return await super.restore(request, response, supplierSegmentationDto);
  }

  async delete(request, response) {
    const { body } = request;
    const supplierSegmentationDto = new SupplierSegmentationDto(body);

    return await super.delete(request, response, supplierSegmentationDto);
  }
}

class SupplierTaxController extends StandardController {
  constructor(supplierTaxService) {
    super(supplierTaxService);
    this.create = this.create.bind(this);
    this.restore = this.restore.bind(this);
    this.delete = this.delete.bind(this);
  }

  async create(request, response) {
    const { body } = request;
    const supplierTaxDto = new SupplierTaxDto(body);

    return await super.create(request, response, supplierTaxDto);
  }

  async restore(request, response) {
    const { body } = request;
    const supplierTaxDto = new SupplierTaxDto(body);

    return await super.restore(request, response, supplierTaxDto);
  }

  async delete(request, response) {
    const { body } = request;
    const supplierTaxDto = new SupplierTaxDto(body);

    return await super.delete(request, response, supplierTaxDto);
  }
}

class SupplierTypeController extends StandardController {
  constructor(supplierTypeService) {
    super(supplierTypeService);
    this.create = this.create.bind(this);
    this.restore = this.restore.bind(this);
    this.delete = this.delete.bind(this);
  }

  async create(request, response) {
    const { body } = request;
    const supplierTypeDto = new SupplierTypeDto(body);

    return await super.create(request, response, supplierTypeDto);
  }

  async restore(request, response) {
    const { body } = request;
    const supplierTypeDto = new SupplierTypeDto(body);

    return await super.restore(request, response, supplierTypeDto);
  }

  async delete(request, response) {
    const { body } = request;
    const supplierTypeDto = new SupplierTypeDto(body);

    return await super.delete(request, response, supplierTypeDto);
  }
}

export {
  SupplierBankController,
  SupplierBrandController,
  SupplierContactController,
  SupplierController,
  SupplierGroupController,
  SupplierPaymentController,
  SupplierPurchaseController,
  SupplierRegionController,
  SupplierSegmentationController,
  SupplierTaxController,
  SupplierTypeController
};
