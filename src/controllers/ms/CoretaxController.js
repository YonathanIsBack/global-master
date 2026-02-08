import { CoretaxCategoryDto, CoretaxCountryDto, CoretaxFacilityDto, CoretaxInfoDto, CoretaxJenisPembeliDto, CoretaxTaxDto, CoretaxTransactionCodeDto, CoretaxTypeDto, CoretaxUomDto } from '../../dto/ms/CoretaxDto.js';
import StandardController from '../StandardController.js';

class CoretaxCategoryController extends StandardController {
  constructor(coretaxCategoryService) {
    super(coretaxCategoryService);
    this.create = this.create.bind(this);
    this.restore = this.restore.bind(this);
    this.delete = this.delete.bind(this);
  }

  async create(request, response) {
    const { body } = request;
    const coretaxCategoryDto = new CoretaxCategoryDto(body);

    return await super.insertTransaction(request, response, coretaxCategoryDto);
  }

  async restore(request, response) {
    const { body } = request;
    const coretaxCategoryDto = new CoretaxCategoryDto(body);

    return await super.restore(request, response, coretaxCategoryDto);
  }

  async delete(request, response) {
    const { body } = request;
    const coretaxCategoryDto = new CoretaxCategoryDto(body);

    return await super.delete(request, response, coretaxCategoryDto);
  }
}

class CoretaxCountryController extends StandardController {
  constructor(coretaxCountryService) {
    super(coretaxCountryService);
    this.create = this.create.bind(this);
    this.restore = this.restore.bind(this);
    this.delete = this.delete.bind(this);
  }

  async create(request, response) {
    const { body } = request;
    const coretaxCountryDto = new CoretaxCountryDto(body);

    return await super.insertTransaction(request, response, coretaxCountryDto);
  }

  async restore(request, response) {
    const { body } = request;
    const coretaxCountryDto = new CoretaxCountryDto(body);

    return await super.restore(request, response, coretaxCountryDto);
  }

  async delete(request, response) {
    const { body } = request;
    const coretaxCountryDto = new CoretaxCountryDto(body);

    return await super.delete(request, response, coretaxCountryDto);
  }
}

class CoretaxFacilityController extends StandardController {
  constructor(coretaxFacilityService) {
    super(coretaxFacilityService);
    this.create = this.create.bind(this);
    this.restore = this.restore.bind(this);
    this.delete = this.delete.bind(this);
  }

  async create(request, response) {
    const { body } = request;
    const coretaxFacilityDto = new CoretaxFacilityDto(body);

    return await super.insertTransaction(request, response, coretaxFacilityDto);
  }

  async restore(request, response) {
    const { body } = request;
    const coretaxFacilityDto = new CoretaxFacilityDto(body);

    return await super.restore(request, response, coretaxFacilityDto);
  }

  async delete(request, response) {
    const { body } = request;
    const coretaxFacilityDto = new CoretaxFacilityDto(body);

    return await super.delete(request, response, coretaxFacilityDto);
  }
}

class CoretaxInfoController extends StandardController {
  constructor(coretaxInfoService) {
    super(coretaxInfoService);
    this.create = this.create.bind(this);
    this.restore = this.restore.bind(this);
    this.delete = this.delete.bind(this);
  }

  async create(request, response) {
    const { body } = request;
    const coretaxInfoDto = new CoretaxInfoDto(body);

    return await super.insertTransaction(request, response, coretaxInfoDto);
  }

  async restore(request, response) {
    const { body } = request;
    const coretaxInfoDto = new CoretaxInfoDto(body);

    return await super.restore(request, response, coretaxInfoDto);
  }

  async delete(request, response) {
    const { body } = request;
    const coretaxInfoDto = new CoretaxInfoDto(body);

    return await super.delete(request, response, coretaxInfoDto);
  }
}

class CoretaxJenisPembeliController extends StandardController {
  constructor(coretaxJenisPembeliService) {
    super(coretaxJenisPembeliService);
    this.create = this.create.bind(this);
    this.restore = this.restore.bind(this);
    this.delete = this.delete.bind(this);
  }

  async create(request, response) {
    const { body } = request;
    const coretaxJenisPembeliDto = new CoretaxJenisPembeliDto(body);

    return await super.insertTransaction(request, response, coretaxJenisPembeliDto);
  }

  async restore(request, response) {
    const { body } = request;
    const coretaxJenisPembeliDto = new CoretaxJenisPembeliDto(body);

    return await super.restore(request, response, coretaxJenisPembeliDto);
  }

  async delete(request, response) {
    const { body } = request;
    const coretaxJenisPembeliDto = new CoretaxJenisPembeliDto(body);

    return await super.delete(request, response, coretaxJenisPembeliDto);
  }
}

class CoretaxTaxController extends StandardController {
  constructor(coretaxTaxService) {
    super(coretaxTaxService);
    this.create = this.create.bind(this);
    this.restore = this.restore.bind(this);
    this.delete = this.delete.bind(this);
  }

  async create(request, response) {
    const { body } = request;
    const coretaxTaxDto = new CoretaxTaxDto(body);

    return await super.insertTransaction(request, response, coretaxTaxDto);
  }

  async restore(request, response) {
    const { body } = request;
    const coretaxTaxDto = new CoretaxTaxDto(body);

    return await super.restore(request, response, coretaxTaxDto);
  }

  async delete(request, response) {
    const { body } = request;
    const coretaxTaxDto = new CoretaxTaxDto(body);

    return await super.delete(request, response, coretaxTaxDto);
  }
}

class CoretaxTransactionCodeController extends StandardController {
  constructor(coretaxTransactionCodeService) {
    super(coretaxTransactionCodeService);
    this.create = this.create.bind(this);
    this.restore = this.restore.bind(this);
    this.delete = this.delete.bind(this);
  }

  async create(request, response) {
    const { body } = request;
    const coretaxTransactionCodeDto = new CoretaxTransactionCodeDto(body);

    return await super.insertTransaction(request, response, coretaxTransactionCodeDto);
  }

  async restore(request, response) {
    const { body } = request;
    const coretaxTransactionCodeDto = new CoretaxTransactionCodeDto(body);

    return await super.restore(request, response, coretaxTransactionCodeDto);
  }

  async delete(request, response) {
    const { body } = request;
    const coretaxTransactionCodeDto = new CoretaxTransactionCodeDto(body);

    return await super.delete(request, response, coretaxTransactionCodeDto);
  }
}

class CoretaxTypeController extends StandardController {
  constructor(coretaxTypeService) {
    super(coretaxTypeService);
    this.create = this.create.bind(this);
    this.restore = this.restore.bind(this);
    this.delete = this.delete.bind(this);
  }

  async create(request, response) {
    const { body } = request;
    const coretaxTypeDto = new CoretaxTypeDto(body);

    return await super.insertTransaction(request, response, coretaxTypeDto);
  }

  async restore(request, response) {
    const { body } = request;
    const coretaxTypeDto = new CoretaxTypeDto(body);

    return await super.restore(request, response, coretaxTypeDto);
  }

  async delete(request, response) {
    const { body } = request;
    const coretaxTypeDto = new CoretaxTypeDto(body);

    return await super.delete(request, response, coretaxTypeDto);
  }
}

class CoretaxUomController extends StandardController {
  constructor(coretaxUomService) {
    super(coretaxUomService);
    this.create = this.create.bind(this);
    this.restore = this.restore.bind(this);
    this.delete = this.delete.bind(this);
  }

  async create(request, response) {
    const { body } = request;
    const coretaxUomDto = new CoretaxUomDto(body);

    return await super.insertTransaction(request, response, coretaxUomDto);
  }

  async restore(request, response) {
    const { body } = request;
    const coretaxUomDto = new CoretaxUomDto(body);

    return await super.restore(request, response, coretaxUomDto);
  }

  async delete(request, response) {
    const { body } = request;
    const coretaxUomDto = new CoretaxUomDto(body);

    return await super.delete(request, response, coretaxUomDto);
  }
}


export {
  CoretaxCategoryController,
  CoretaxCountryController,
  CoretaxFacilityController,
  CoretaxInfoController,
  CoretaxJenisPembeliController,
  CoretaxTaxController,
  CoretaxTransactionCodeController,
  CoretaxTypeController,
  CoretaxUomController,
};

