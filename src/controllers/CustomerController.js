import {
  CustomerBillingDto,
  CustomerCartDto,
  CustomerCodeDto,
  CustomerContactDto,
  CustomerDeliveryDto,
  CustomerDocumentDto,
  CustomerDto,
  CustomerGroupDto,
  CustomerImgDto,
  CustomerRegionDto,
  CustomerSalesDto,
  CustomerSegmentationDto,
  CustomerTaxDto,
  CustomerTypeDto
} from '../dto/CustomerDto.js';
import StandardController from './StandardController.js';

class CustomerController extends StandardController {
  constructor(customerService) {
    super(customerService);
    this.create = this.create.bind(this);
    this.restore = this.restore.bind(this);
    this.delete = this.delete.bind(this);
  }

  async create(request, response) {
    const { body } = request;
    const customerDto = new CustomerDto(body);

    return await super.insertTransaction(request, response, customerDto);
  }

  async restore(request, response) {
    const { body } = request;
    const customerDto = new CustomerDto(body);

    return await super.restore(request, response, customerDto);
  }

  async delete(request, response) {
    const { body } = request;
    const customerDto = new CustomerDto(body);

    return await super.delete(request, response, customerDto);
  }
}

class CustomerBillingController extends StandardController {
  constructor(customerBillingService) {
    super(customerBillingService);
    this.create = this.create.bind(this);
    this.restore = this.restore.bind(this);
    this.delete = this.delete.bind(this);
  }

  async create(request, response) {
    const { body } = request;
    const customerBillingDto = new CustomerBillingDto(body);

    return await super.create(request, response, customerBillingDto);
  }

  async restore(request, response) {
    const { body } = request;
    const customerBillingDto = new CustomerBillingDto(body);

    return await super.restore(request, response, customerBillingDto);
  }

  async delete(request, response) {
    const { body } = request;
    const customerBillingDto = new CustomerBillingDto(body);

    return await super.delete(request, response, customerBillingDto);
  }
}

class CustomerCartController extends StandardController {
  constructor(customerCartService) {
    super(customerCartService);
    this.create = this.create.bind(this);
    this.restore = this.restore.bind(this);
    this.delete = this.delete.bind(this);
  }

  async create(request, response) {
    const { body } = request;
    const customerCartDto = new CustomerCartDto(body);

    return await super.create(request, response, customerCartDto);
  }

  async restore(request, response) {
    const { body } = request;
    const customerCartDto = new CustomerCartDto(body);

    return await super.restore(request, response, customerCartDto);
  }

  async delete(request, response) {
    const { body } = request;
    const customerCartDto = new CustomerCartDto(body);

    return await super.delete(request, response, customerCartDto);
  }
}

class CustomerCodeController extends StandardController {
  constructor(customerCodeService) {
    super(customerCodeService);
    this.create = this.create.bind(this);
    this.restore = this.restore.bind(this);
    this.delete = this.delete.bind(this);
  }

  async create(request, response) {
    const { body } = request;
    const customerCodeDtov = new CustomerCodeDto(body);

    return await super.create(request, response, customerCodeDtov);
  }

  async restore(request, response) {
    const { body } = request;
    const customerCodeDtov = new CustomerCodeDto(body);

    return await super.restore(request, response, customerCodeDtov);
  }

  async delete(request, response) {
    const { body } = request;
    const customerCodeDtov = new CustomerCodeDto(body);

    return await super.delete(request, response, customerCodeDtov);
  }
}

class CustomerContactController extends StandardController {
  constructor(customerContactService) {
    super(customerContactService);
    this.create = this.create.bind(this);
    this.restore = this.restore.bind(this);
    this.delete = this.delete.bind(this);
  }

  async create(request, response) {
    const { body } = request;
    const customerContactDto = new CustomerContactDto(body);

    return await super.create(request, response, customerContactDto);
  }

  async restore(request, response) {
    const { body } = request;
    const customerContactDto = new CustomerContactDto(body);

    return await super.restore(request, response, customerContactDto);
  }

  async delete(request, response) {
    const { body } = request;
    const customerContactDto = new CustomerContactDto(body);

    return await super.delete(request, response, customerContactDto);
  }
}

class CustomerDeliveryController extends StandardController {
  constructor(customerDeliveryService) {
    super(customerDeliveryService);
    this.create = this.create.bind(this);
    this.restore = this.restore.bind(this);
    this.delete = this.delete.bind(this);
  }

  async create(request, response) {
    const { body } = request;
    const customerDeliveryDto = new CustomerDeliveryDto(body);

    return await super.create(request, response, customerDeliveryDto);
  }

  async restore(request, response) {
    const { body } = request;
    const customerDeliveryDto = new CustomerDeliveryDto(body);

    return await super.restore(request, response, customerDeliveryDto);
  }

  async delete(request, response) {
    const { body } = request;
    const customerDeliveryDto = new CustomerDeliveryDto(body);

    return await super.delete(request, response, customerDeliveryDto);
  }
}

class CustomerDocumentController extends StandardController {
  constructor(customerDocumentService) {
    super(customerDocumentService);
    this.create = this.create.bind(this);
    this.restore = this.restore.bind(this);
    this.delete = this.delete.bind(this);
  }

  async create(request, response) {
    const { body } = request;
    const customerDocumentDto = new CustomerDocumentDto(body);

    return await super.create(request, response, customerDocumentDto);
  }

  async restore(request, response) {
    const { body } = request;
    const customerDocumentDto = new CustomerDocumentDto(body);

    return await super.restore(request, response, customerDocumentDto);
  }

  async delete(request, response) {
    const { body } = request;
    const customerDocumentDto = new CustomerDocumentDto(body);

    return await super.delete(request, response, customerDocumentDto);
  }
}
class CustomerGroupController extends StandardController {
  constructor(customerGroupController) {
    super(customerGroupController);
    this.create = this.create.bind(this);
    this.restore = this.restore.bind(this);
    this.delete = this.delete.bind(this);
  }

  async create(request, response) {
    const { body } = request;
    const customerGroupDto = new CustomerGroupDto(body);

    return await super.create(request, response, customerGroupDto);
  }

  async restore(request, response) {
    const { body } = request;
    const customerGroupDto = new CustomerGroupDto(body);

    return await super.restore(request, response, customerGroupDto);
  }

  async delete(request, response) {
    const { body } = request;
    const customerGroupDto = new CustomerGroupDto(body);

    return await super.delete(request, response, customerGroupDto);
  }
}
class CustomerImgController extends StandardController {
  constructor(customerImgService) {
    super(customerImgService);
    this.create = this.create.bind(this);
    this.restore = this.restore.bind(this);
    this.delete = this.delete.bind(this);
  }

  async create(request, response) {
    const { body } = request;
    const customerImgDto = new CustomerImgDto(body);

    return await super.create(request, response, customerImgDto);
  }

  async restore(request, response) {
    const { body } = request;
    const customerImgDto = new CustomerImgDto(body);

    return await super.restore(request, response, customerImgDto);
  }

  async delete(request, response) {
    const { body } = request;
    const customerImgDto = new CustomerImgDto(body);

    return await super.delete(request, response, customerImgDto);
  }
}
class CustomerRegionController extends StandardController {
  constructor(customerRegionService) {
    super(customerRegionService);
    this.create = this.create.bind(this);
    this.restore = this.restore.bind(this);
    this.delete = this.delete.bind(this);
  }

  async create(request, response) {
    const { body } = request;
    const customerRegionDto = new CustomerRegionDto(body);

    return await super.create(request, response, customerRegionDto);
  }

  async restore(request, response) {
    const { body } = request;
    const customerRegionDto = new CustomerRegionDto(body);

    return await super.restore(request, response, customerRegionDto);
  }

  async delete(request, response) {
    const { body } = request;
    const customerRegionDto = new CustomerRegionDto(body);

    return await super.delete(request, response, customerRegionDto);
  }
}
class CustomerSalesController extends StandardController {
  constructor(customerDeliveryService) {
    super(customerDeliveryService);
    this.create = this.create.bind(this);
    this.restore = this.restore.bind(this);
    this.delete = this.delete.bind(this);
  }

  async create(request, response) {
    const { body } = request;
    const customerSalesDto = new CustomerSalesDto(body);

    return await super.create(request, response, customerSalesDto);
  }

  async restore(request, response) {
    const { body } = request;
    const customerSalesDto = new CustomerSalesDto(body);

    return await super.restore(request, response, customerSalesDto);
  }

  async delete(request, response) {
    const { body } = request;
    const customerSalesDto = new CustomerSalesDto(body);

    return await super.delete(request, response, customerSalesDto);
  }
}
class CustomerSegmentationController extends StandardController {
  constructor(customerSegmentationService) {
    super(customerSegmentationService);
    this.create = this.create.bind(this);
    this.restore = this.restore.bind(this);
    this.delete = this.delete.bind(this);
  }

  async create(request, response) {
    const { body } = request;
    const customerSegmentationDto = new CustomerSegmentationDto(body);

    return await super.create(request, response, customerSegmentationDto);
  }

  async restore(request, response) {
    const { body } = request;
    const customerSegmentationDto = new CustomerSegmentationDto(body);

    return await super.restore(request, response, customerSegmentationDto);
  }

  async delete(request, response) {
    const { body } = request;
    const customerSegmentationDto = new CustomerSegmentationDto(body);

    return await super.delete(request, response, customerSegmentationDto);
  }
}
class CustomerTaxController extends StandardController {
  constructor(customerTaxService) {
    super(customerTaxService);
    this.create = this.create.bind(this);
    this.restore = this.restore.bind(this);
    this.delete = this.delete.bind(this);
  }

  async create(request, response) {
    const { body } = request;
    const customerTaxDto = new CustomerTaxDto(body);

    return await super.create(request, response, customerTaxDto);
  }

  async restore(request, response) {
    const { body } = request;
    const customerTaxDto = new CustomerTaxDto(body);

    return await super.restore(request, response, customerTaxDto);
  }

  async delete(request, response) {
    const { body } = request;
    const customerTaxDto = new CustomerTaxDto(body);

    return await super.delete(request, response, customerTaxDto);
  }
}
class CustomerTypeController extends StandardController {
  constructor(customerTypeService) {
    super(customerTypeService);
    this.create = this.create.bind(this);
    this.restore = this.restore.bind(this);
    this.delete = this.delete.bind(this);
  }

  async create(request, response) {
    const { body } = request;
    const customerTypeDto = new CustomerTypeDto(body);

    return await super.create(request, response, customerTypeDto);
  }

  async restore(request, response) {
    const { body } = request;
    const customerTypeDto = new CustomerTypeDto(body);

    return await super.restore(request, response, customerTypeDto);
  }

  async delete(request, response) {
    const { body } = request;
    const customerTypeDto = new CustomerTypeDto(body);

    return await super.delete(request, response, customerTypeDto);
  }
}
export {
  CustomerBillingController,
  CustomerCartController,
  CustomerContactController,
  CustomerController,
  CustomerDeliveryController,
  CustomerDocumentController,
  CustomerGroupController,
  CustomerImgController,
  CustomerRegionController,
  CustomerSalesController,
  CustomerSegmentationController,
  CustomerTaxController,
  CustomerTypeController,
  CustomerCodeController
};
