import { StatusCodes } from 'http-status-codes';
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
import buildResponse from '../util/buildResponse.js';
import ObjectUtil from '../util/ObjectUtil.js';
import { Country } from '../models/Country.js';
import Province from '../models/Province.js';
import { CustomerBilling, CustomerContact, CustomerDelivery, CustomerSales, CustomerTax } from '../models/Customer.js';
import Endpoint from '../constants/Endpoint.js';

class CustomerController extends StandardController {
  constructor(customerService) {
    super(customerService);
    this.create = this.create.bind(this);
    this.restore = this.restore.bind(this);
    this.delete = this.delete.bind(this);
    this.getAll = this.getAll.bind(this);
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

  async count(request, response) {
    const customerClass = request.originalUrl.includes(Endpoint.CUSTOMER_PERSONAL) ? '2' : '1';
    const totalRows = await this.service.count({ whereClause: { customerClass } });

    return response.status(StatusCodes.OK).json(buildResponse(StatusCodes.OK, 'Success', totalRows));
  }

  async getAll(request, response) {
    const requestBody = request.body;
    const searchClause = this.service.buildSearchClause(this.service.columnSearch, requestBody.search.value);
    const customerClass = request.originalUrl.includes(Endpoint.CUSTOMER_PERSONAL) ? '2' : '1';
    const include = [
      {
        model: Country,
        required: false
      },
      {
        model: Province,
        required: false
      },
      // { model: CustomerContact, required: false },
      // { model: CustomerBilling, required: false },
      // { model: CustomerTax, required: false },
      // { model: CustomerDelivery, required: false },
      // { model: CustomerSales, required: false }
    ];
    const data = await this.service.getAll({
      whereClause: { ...searchClause, customerClass },
      limit: requestBody.length,
      offset: requestBody.start,
      orderIndex: requestBody.order[0].column,
      orderDirection: requestBody.order[0].dir,
      include,
      nest: true,
      raw: false
    });
    const totalRows = await this.service.count({ whereClause: { ...searchClause, customerClass } });

    const payload = {
      result: data.map((data) => {
        const plainData = data.get({ plain: true });

        const country = ObjectUtil.toSnakeCase(plainData.Country);
        const province = ObjectUtil.toSnakeCase(plainData.Province);
        delete plainData.Country;
        delete plainData.Province;

        return {
          ...ObjectUtil.toSnakeCase(plainData),
          ms_country: country,
          ms_province: province
        };
      }),
      total_rows: totalRows
    };

    return response.status(StatusCodes.OK).json(buildResponse(StatusCodes.OK, 'Success', payload));
  }

  async getAllDataAPI(request, response) {
    const requestBody = request.body;
    const primaryKey = this.service.model.primaryKeyAttributes[0];
    const customerClass = request.originalUrl.includes(Endpoint.CUSTOMER_PERSONAL) ? '2' : '1';
    const whereClause = {
      [primaryKey]: requestBody.where_in,
      customerClass
    };
    const include = [
      {
        model: Country,
        required: false
      },
      {
        model: Country,
        required: false,
        as: 'Country2'
      },
      {
        model: Province,
        required: false
      },
      { model: CustomerContact, required: false },
      { model: CustomerBilling, required: false },
      { model: CustomerTax, required: false },
      { model: CustomerDelivery, required: false },
      { model: CustomerSales, required: false }
    ];

    const datas = await this.service.getAll({
      whereClause,
      limit: requestBody.where_in.length,
      include,
      nest: true,
      raw: false
    });

    const payload = {
      result: datas.map((data) => {
        const plainData = data.get({ plain: true });

        const country = ObjectUtil.toSnakeCase(plainData.Country);
        const province = ObjectUtil.toSnakeCase(plainData.Province);
        const country2 = ObjectUtil.toSnakeCase(plainData.Country2);
        const province2 = ObjectUtil.toSnakeCase(plainData.Province2);
        const customerContact = ObjectUtil.toSnakeCase(plainData.CustomerContact);
        const customerBilling = ObjectUtil.toSnakeCase(plainData.CustomerBilling);
        const customerTax = ObjectUtil.toSnakeCase(plainData.CustomerTax);
        const customerDelivery = ObjectUtil.toSnakeCase(plainData.CustomerDelivery);
        const customerSales = ObjectUtil.toSnakeCase(plainData.CustomerSale);
        delete plainData.Country;
        delete plainData.Province;
        delete plainData.Country2;
        delete plainData.Province2;
        delete plainData.CustomerContact;
        delete plainData.CustomerBilling;
        delete plainData.CustomerTax;
        delete plainData.CustomerDelivery;
        delete plainData.CustomerSale;

        return {
          ...ObjectUtil.toSnakeCase(plainData),
          ms_country: country,
          ms_province: province,
          ms_country_2: country2,
          ms_province_2: province2,
          ms_customer_contact: customerContact,
          ms_customer_billing: customerBilling,
          ms_customer_tax: customerTax,
          ms_customer_delivery: customerDelivery,
          ms_customer_sales: customerSales
        };
      }),
      total_rows: datas.length
    };

    return response.status(StatusCodes.OK).json(buildResponse(StatusCodes.OK, 'Success', payload));
  }

  async getDataApi(request, response) {
    const requestBody = request.body;
    const primaryKey = this.service.model.primaryKeyAttributes[0];
    const whereClause = {
      [primaryKey]: requestBody.id
    };
    const include = [
      {
        model: Country,
        required: false
      },
      {
        model: Country,
        required: false,
        as: 'Country2'
      },
      {
        model: Province,
        required: false
      },
      { model: CustomerContact, required: false },
      { model: CustomerBilling, required: false },
      { model: CustomerTax, required: false },
      { model: CustomerDelivery, required: false },
      { model: CustomerSales, required: false }
    ];

    const data = await this.service.getOne({ whereClause, include, nest: true, raw: false });

    if (data == null) {
      return response.status(StatusCodes.OK).json(buildResponse(StatusCodes.OK, 'Success', null));
    }
    const plainData = data.get({ plain: true });

    const country = ObjectUtil.toSnakeCase(plainData.Country);
    const province = ObjectUtil.toSnakeCase(plainData.Province);
    const country2 = ObjectUtil.toSnakeCase(plainData.Country2);
    const province2 = ObjectUtil.toSnakeCase(plainData.Province2);
    const customerContact = ObjectUtil.toSnakeCase(plainData.CustomerContact);
    const customerBilling = ObjectUtil.toSnakeCase(plainData.CustomerBilling);
    const customerTax = ObjectUtil.toSnakeCase(plainData.CustomerTax);
    const customerDelivery = ObjectUtil.toSnakeCase(plainData.CustomerDelivery);
    const customerSales = ObjectUtil.toSnakeCase(plainData.CustomerSale);
    delete plainData.Country;
    delete plainData.Province;
    delete plainData.Country2;
    delete plainData.Province2;
    delete plainData.CustomerContact;
    delete plainData.CustomerBilling;
    delete plainData.CustomerTax;
    delete plainData.CustomerDelivery;
    delete plainData.CustomerSale;

    const payload = {
      ...ObjectUtil.toSnakeCase(plainData),
      ms_country: country,
      ms_province: province,
      ms_country_2: country2,
      ms_province_2: province2,
      ms_customer_contact: customerContact,
      ms_customer_billing: customerBilling,
      ms_customer_tax: customerTax,
      ms_customer_delivery: customerDelivery,
      ms_customer_sales: customerSales
    };

    return response.status(StatusCodes.OK).json(buildResponse(StatusCodes.OK, 'Success', payload));
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

  async count(request, response) {
    const totalRows = await this.service.count({ whereClause: { parentId: 0 } });

    return response.status(StatusCodes.OK).json(buildResponse(StatusCodes.OK, 'Success', totalRows));
  }

  async getAll(request, response) {
    const requestBody = request.body;
    const searchClause = this.service.buildSearchClause(this.service.columnSearch, requestBody.search.value);
    const data = await this.service.getAll({
      whereClause: { ...searchClause, parentId: 0 },
      limit: requestBody.length,
      offset: requestBody.start,
      orderIndex: requestBody.order[0].column,
      orderDirection: requestBody.order[0].dir
    });
    const totalRows = await this.service.count({ whereClause: searchClause });

    const payload = {
      result: data.map((currency) => ObjectUtil.toSnakeCase(currency)),
      total_rows: totalRows
    };

    return response.status(StatusCodes.OK).json(buildResponse(StatusCodes.OK, 'Success', payload));
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
