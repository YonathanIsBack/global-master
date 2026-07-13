import { DataTypes } from 'sequelize';
import DatabaseConnectionSingleton from '../configs/DatabaseConnection.js';
import StandardModel from './StandardModel.js';
import { Country } from './Country.js';
import Province from './Province.js';
const sequelize = DatabaseConnectionSingleton.getConnection();

class Customer extends StandardModel {}
class CustomerBilling extends StandardModel {}
class CustomerCart extends StandardModel {}
class CustomerCode extends StandardModel {}
class CustomerContact extends StandardModel {}
class CustomerDelivery extends StandardModel {}
class CustomerDocument extends StandardModel {}
class CustomerGroup extends StandardModel {}
class CustomerImg extends StandardModel {}
class CustomerRegion extends StandardModel {}
class CustomerSales extends StandardModel {}
class CustomerSegmentation extends StandardModel {}
class CustomerTax extends StandardModel {}
class CustomerType extends StandardModel {}

Customer.init(
  StandardModel.buildPropertyWithOptions(
    {
      ...StandardModel.buildPrimaryKey('customerId', DataTypes.BIGINT),
      coretaxTransactionCodeId: DataTypes.BIGINT,
      companyParentId: DataTypes.INTEGER,
      // companyId: DataTypes.INTEGER,
      type: DataTypes.STRING(200),
      customerGroupId: DataTypes.INTEGER,
      coretaxJenisPembeliId: DataTypes.BIGINT,
      customerTypeId: DataTypes.INTEGER,
      customerSegmentationId: DataTypes.INTEGER,
      customerRegionId: DataTypes.INTEGER,
      customerCodeXt: DataTypes.STRING(25),
      customerCode: DataTypes.STRING(50),
      customerName: DataTypes.STRING(50),
      outlateName: DataTypes.STRING(50),
      customerNickName: DataTypes.STRING(50),
      customerClass: DataTypes.STRING(50),
      hubunganUsaha: DataTypes.TINYINT,
      hubunganUsahaDetail: DataTypes.STRING(50),
      lamaUsahaType: DataTypes.TINYINT,
      lamaUsaha: DataTypes.STRING(150),
      lamaHubungan: DataTypes.STRING(150),
      bidangUsaha: DataTypes.STRING(100),
      tempatLahir: DataTypes.STRING(250),
      tanggalLahir: DataTypes.DATE,
      gender: DataTypes.TINYINT,
      marriedStatus: DataTypes.TINYINT,
      citizenship: DataTypes.TINYINT,
      citizenshipDetail: DataTypes.STRING(50),
      ktpPassport: DataTypes.STRING(50),
      ktpPassportValidDate: DataTypes.DATE,
      customerAddr: DataTypes.TEXT,
      customerCountryId: DataTypes.INTEGER,
      customerProvinceId: DataTypes.INTEGER,
      customerCityId: DataTypes.INTEGER,
      customerDistrictId: DataTypes.INTEGER,
      customerSubdistrictId: DataTypes.INTEGER,
      customerPostalCode: DataTypes.STRING(7),
      customerPhone: DataTypes.TEXT,
      countryCode: DataTypes.TEXT,
      customerAddr2: { type: DataTypes.TEXT, field: 'customer_addr_2' },
      customerCountryId2: { type: DataTypes.INTEGER, field: 'customer_country_id_2' },
      customerProvinceId2: { type: DataTypes.INTEGER, field: 'customer_province_id_2' },
      customerCityId2: { type: DataTypes.INTEGER, field: 'customer_city_id_2' },
      customerDistrictId2: { type: DataTypes.INTEGER, field: 'customer_district_id_2' },
      customerSubdistrictId2: { type: DataTypes.INTEGER, field: 'customer_subdistrict_id_2' },
      customerPostalCode2: { type: DataTypes.STRING(50), field: 'customer_postal_code_2' },
      customerCitizenshipCountryId: DataTypes.BIGINT,
      customerOwner: DataTypes.STRING(50),
      note: DataTypes.TEXT,
      status: DataTypes.TINYINT,
      typeCustomer: DataTypes.TINYINT
    },
    { withDbId: true, withIsactive: true, withIsdel: true, withIsused: true, withCreate: true, withModify: true }
  ),
  StandardModel.buildStandardModelInformation('ms_customer', 'Customer', sequelize)
);

CustomerBilling.init(
  StandardModel.buildPropertyWithOptions(
    {
      ...StandardModel.buildPrimaryKey('customerBillingId', DataTypes.INTEGER),
      companyParentId: DataTypes.INTEGER,
      customerId: DataTypes.INTEGER,
      customerVirtualNo: DataTypes.STRING(25),
      bankId: DataTypes.INTEGER,
      accountName: DataTypes.STRING(250),
      accountNo: DataTypes.STRING(50),
      branch: DataTypes.STRING(25),
      isshow: DataTypes.TINYINT,
      customerBillingAddr: DataTypes.TEXT,
      customerBillingCountryId: DataTypes.INTEGER,
      customerBillingProvinceId: DataTypes.INTEGER,
      customerBillingCityId: DataTypes.BIGINT,
      customerBillingDistrictId: DataTypes.BIGINT,
      customerBillingSubdistrictId: DataTypes.BIGINT,
      customerBillingPostalCode: DataTypes.STRING(7),
      customerBillingPhone: DataTypes.TEXT,
      countryCode: DataTypes.TEXT,
      pic: DataTypes.STRING(100),
      isdefault: DataTypes.TINYINT
    },
    { withDbId: true, withIsdel: true, withModify: true }
  ),
  StandardModel.buildStandardModelInformation('ms_customer_billing', 'CustomerBilling', sequelize)
);

CustomerCart.init(
  StandardModel.buildPropertyWithOptions(
    {
      ...StandardModel.buildPrimaryKey('customerCartId', DataTypes.BIGINT),
      customerId: DataTypes.BIGINT,
      itemId: DataTypes.BIGINT,
      itemVariantId: DataTypes.BIGINT,
      qty: DataTypes.INTEGER
    },
    { withCreate: true }
  ),
  StandardModel.buildStandardModelInformation('ms_customer_cart', 'CustomerCart', sequelize)
);

CustomerCode.init(
  StandardModel.buildPropertyWithOptions(
    {
      ...StandardModel.buildPrimaryKey('customerCodeId', DataTypes.BIGINT),
      resetType: DataTypes.INTEGER,
      year: DataTypes.INTEGER,
      month: DataTypes.INTEGER,
      segmentationCode: DataTypes.STRING(5),
      currentNumber: DataTypes.INTEGER
    },
    {}
  ),
  StandardModel.buildStandardModelInformation('ms_customer_code', 'CustomerCode', sequelize)
);

CustomerContact.init(
  StandardModel.buildPropertyWithOptions(
    {
      ...StandardModel.buildPrimaryKey('customerContactId', DataTypes.BIGINT),
      companyParentId: DataTypes.INTEGER,
      customerId: DataTypes.INTEGER,
      customerContact: DataTypes.STRING(50),
      customerContactName: DataTypes.STRING(50),
      customerContactPosition: DataTypes.STRING(50),
      customerContactEmail: DataTypes.STRING(50),
      phoneType: DataTypes.TEXT,
      countryCode: DataTypes.TEXT,
      customerContactPhone: DataTypes.TEXT,
      status: DataTypes.TINYINT,
      note: DataTypes.TEXT,
      isdefault: DataTypes.TINYINT
    },
    { withDbId: true, withIsdel: true, withModify: true }
  ),
  StandardModel.buildStandardModelInformation('ms_customer_contact', 'CustomerContact', sequelize)
);

CustomerDelivery.init(
  StandardModel.buildPropertyWithOptions(
    {
      ...StandardModel.buildPrimaryKey('customerDeliveryId', DataTypes.BIGINT),
      companyParentId: DataTypes.INTEGER,
      customerId: DataTypes.INTEGER,
      customerDeliveryAddr: DataTypes.TEXT,
      warehouseStatus: DataTypes.STRING(150),
      customerDeliveryCountryId: DataTypes.INTEGER,
      customerDeliveryProvinceId: DataTypes.INTEGER,
      customerDeliveryCityId: DataTypes.BIGINT,
      customerDeliveryDistrictId: DataTypes.BIGINT,
      customerDeliverySubdistrictId: DataTypes.BIGINT,
      customerDeliveryPostalCode: DataTypes.STRING(7),
      countryCode: DataTypes.TEXT,
      customerDeliveryPhone: DataTypes.TEXT,
      pic: DataTypes.STRING(250),
      isdefault: DataTypes.TINYINT
    },
    { withDbId: true, withIsactive: true, withIsdel: true, withModify: true }
  ),
  StandardModel.buildStandardModelInformation('ms_customer_delivery', 'CustomerDelivery', sequelize)
);

CustomerDocument.init(
  StandardModel.buildPropertyWithOptions(
    {
      ...StandardModel.buildPrimaryKey('customerDocumentId', DataTypes.INTEGER),
      customerId: DataTypes.INTEGER
    },
    { withIsactive: true, withIsdel: true, withCreate: true, withModify: true }
  ),
  StandardModel.buildStandardModelInformation('ms_customer_document', 'CustomerDocument', sequelize)
);

CustomerGroup.init(
  StandardModel.buildPropertyWithOptions(
    {
      ...StandardModel.buildPrimaryKey('customerGroupId', DataTypes.BIGINT),
      companyParentId: DataTypes.INTEGER,
      customerGroupCode: DataTypes.STRING(5),
      customerGroupName: DataTypes.STRING(25)
    },
    { withDbId: true, withIsactive: true, withIsdel: true, withIsused: true, withCreate: true, withModify: true }
  ),
  StandardModel.buildStandardModelInformation('ms_customer_group', 'CustomerGroup', sequelize)
);

CustomerImg.init(
  StandardModel.buildPropertyWithOptions(
    {
      ...StandardModel.buildPrimaryKey('customerImgId', DataTypes.BIGINT),
      companyParentId: DataTypes.INTEGER,
      customerId: DataTypes.INTEGER,
      urlImg: DataTypes.STRING(50)
    },
    { withDbId: true, withIsdel: true }
  ),
  StandardModel.buildStandardModelInformation('ms_customer_img', 'CustomerImg', sequelize)
);

CustomerRegion.init(
  StandardModel.buildPropertyWithOptions(
    {
      ...StandardModel.buildPrimaryKey('customerRegionId', DataTypes.BIGINT),
      companyParentId: DataTypes.INTEGER,
      customerRegionCode: DataTypes.STRING(5),
      customerRegionName: DataTypes.STRING(25)
    },
    { withDbId: true, withIsactive: true, withIsdel: true, withIsused: true, withCreate: true, withModify: true }
  ),
  StandardModel.buildStandardModelInformation('ms_customer_region', 'CustomerRegion', sequelize)
);

CustomerSales.init(
  StandardModel.buildPropertyWithOptions(
    {
      ...StandardModel.buildPrimaryKey('customerSalesId', DataTypes.BIGINT),
      companyParentId: DataTypes.INTEGER,
      customerId: DataTypes.INTEGER,
      customerTypeId: DataTypes.INTEGER,
      customerGroupId: DataTypes.INTEGER,
      customerSegmentationId: DataTypes.INTEGER,
      customerRegionId: DataTypes.INTEGER,
      paymentTermId: DataTypes.INTEGER,
      paymentTermDays: DataTypes.INTEGER,
      creditLimit: DataTypes.DOUBLE,
      creditLimitUsed: DataTypes.DOUBLE,
      salesmanId: DataTypes.INTEGER,
      isconsignment: DataTypes.TINYINT
    },
    { withDbId: true, withIsdel: true, withModify: true }
  ),
  StandardModel.buildStandardModelInformation('ms_customer_sales', 'CustomerSales', sequelize)
);

CustomerSegmentation.init(
  StandardModel.buildPropertyWithOptions(
    {
      ...StandardModel.buildPrimaryKey('customerSegmentationId', DataTypes.BIGINT),
      companyParentId: DataTypes.INTEGER,
      parentId: DataTypes.BIGINT,
      levelSegmentation: DataTypes.TINYINT,
      customerSegmentationCode: DataTypes.STRING(5),
      customerSegmentationName: DataTypes.STRING(250)
    },
    { withDbId: true, withIsactive: true, withIsdel: true, withIsused: true, withCreate: true, withModify: true }
  ),
  StandardModel.buildStandardModelInformation('ms_customer_segmentation', 'CustomerSegmentation', sequelize)
);

CustomerTax.init(
  StandardModel.buildPropertyWithOptions(
    {
      ...StandardModel.buildPrimaryKey('customerTaxId', DataTypes.BIGINT),
      companyParentId: DataTypes.INTEGER,
      customerId: DataTypes.INTEGER,
      npwpNumber: DataTypes.STRING(50),
      npwpName: DataTypes.STRING(50),
      npwpAddr: DataTypes.TEXT,
      pkp: DataTypes.STRING(50),
      ktp: DataTypes.STRING(50),
      nib: DataTypes.STRING(50),
      siup: DataTypes.STRING(50),
      siupDate: DataTypes.DATE,
      nppbkc: DataTypes.STRING(50),
      nppbkcName: DataTypes.STRING(150),
      nppbkcDate: DataTypes.DATE,
      nppbkcAddr: DataTypes.TEXT,
      tdp: DataTypes.STRING(50),
      tdpDate: DataTypes.DATE,
      aktaPendirian: DataTypes.STRING(50),
      aktaPendirianDate: DataTypes.DATE,
      aktaPendirianChanged: DataTypes.STRING(50),
      aktaPendirianChangedDate: DataTypes.DATE,
      directorName: DataTypes.STRING(50),
      directorPhone: DataTypes.TEXT,
      shareholdersName: DataTypes.STRING(50),
      shareholdersPhone: DataTypes.TEXT,
      customerTaxAddr: DataTypes.TEXT,
      customerTaxCountryId: DataTypes.INTEGER,
      customerTaxProvinceId: DataTypes.INTEGER,
      customerTaxCityId: DataTypes.BIGINT,
      customerTaxDistrictId: DataTypes.BIGINT,
      customerTaxSubdistrictId: DataTypes.BIGINT,
      customerTaxPostalCode: DataTypes.STRING(7),
      customerTaxPhone: DataTypes.TEXT,
      countryCode: DataTypes.TEXT,
      pic: DataTypes.TEXT,
      status: DataTypes.TINYINT,
      isdefault: DataTypes.TINYINT
    },
    { withDbId: true, withIsdel: true, withModify: true }
  ),
  StandardModel.buildStandardModelInformation('ms_customer_tax', 'CustomerTax', sequelize)
);

CustomerType.init(
  StandardModel.buildPropertyWithOptions(
    {
      ...StandardModel.buildPrimaryKey('customerTypeId', DataTypes.BIGINT),
      companyParentId: DataTypes.INTEGER,
      customerTypeCode: DataTypes.STRING(5),
      customerTypeName: DataTypes.STRING(25),
      posisi: DataTypes.TINYINT,
      isdefault: DataTypes.TINYINT
    },
    { withDbId: true, withIsactive: true, withIsdel: true, withIsused: true, withCreate: true, withModify: true }
  ),
  StandardModel.buildStandardModelInformation('ms_customer_type', 'CustomerType', sequelize)
);

Customer.hasOne(Country, { sourceKey: 'customerCountryId', foreignKey: 'country_id' });
Customer.hasOne(Country, { sourceKey: 'customerCountryId2', foreignKey: 'country_id', as: 'Country2' });
Customer.hasOne(Province, { sourceKey: 'customerProvinceId', foreignKey: 'province_id' });
Customer.hasOne(Province, { sourceKey: 'customerProvinceId2', foreignKey: 'province_id', as: 'Province2' });
Customer.hasOne(CustomerContact, { foreignKey: 'customer_id', sourceKey: 'customerId' });
Customer.hasOne(CustomerBilling, { foreignKey: 'customer_id', sourceKey: 'customerId' });
Customer.hasOne(CustomerTax, { foreignKey: 'customer_id', sourceKey: 'customerId' });
Customer.hasOne(CustomerDelivery, { foreignKey: 'customer_id', sourceKey: 'customerId' });
Customer.hasOne(CustomerSales, { foreignKey: 'customer_id', sourceKey: 'customerId' });

CustomerContact.hasOne(Customer, { foreignKey: 'customerId' });
CustomerBilling.hasOne(Customer, { foreignKey: 'customerId' });
CustomerTax.hasOne(Customer, { foreignKey: 'customerId' });
CustomerDelivery.hasOne(Customer, { foreignKey: 'customerId' });
CustomerSales.hasOne(Customer, { foreignKey: 'customerId' });

export {
  Customer,
  CustomerBilling,
  CustomerCart,
  CustomerCode,
  CustomerContact,
  CustomerDelivery,
  CustomerDocument,
  CustomerGroup,
  CustomerImg,
  CustomerRegion,
  CustomerSales,
  CustomerSegmentation,
  CustomerTax,
  CustomerType
};
