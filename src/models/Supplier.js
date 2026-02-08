import { DataTypes } from 'sequelize';
import DatabaseConnectionSingleton from '../configs/DatabaseConnection.js';
import StandardModel from './StandardModel.js';
const sequelize = DatabaseConnectionSingleton.getConnection();

class Supplier extends StandardModel { }
class SupplierBank extends StandardModel { }
class SupplierBrand extends StandardModel { }
class SupplierContact extends StandardModel { }
class SupplierCurrency extends StandardModel { }
class SupplierGroup extends StandardModel { }
class SupplierPayment extends StandardModel { }
class SupplierPurchase extends StandardModel { }
class SupplierRegion extends StandardModel { }
class SupplierSegmentation extends StandardModel { }
class SupplierTax extends StandardModel { }
class SupplierType extends StandardModel { }

Supplier.init(
  StandardModel.buildPropertyWithOptions(
    {
      ...StandardModel.buildPrimaryKey('supplierId', DataTypes.BIGINT),
      companyId: DataTypes.INTEGER,
      companyParentId: DataTypes.INTEGER,
      supplierCode: DataTypes.STRING(150),
      supplierName: DataTypes.STRING(150),
      supplierNickName: DataTypes.STRING(150),
      supplierClass: DataTypes.STRING(50),
      supplierAddr: DataTypes.TEXT,
      supplierCountryId: DataTypes.INTEGER,
      supplierProvinceId: DataTypes.INTEGER,
      supplierCityId: DataTypes.BIGINT,
      supplierDistrictId: DataTypes.BIGINT,
      supplierSubdistrictId: DataTypes.BIGINT,
      supplierPostalCode: DataTypes.STRING(25),
      supplierPhone: DataTypes.TEXT,
      supplierOwner: DataTypes.STRING(150),
      currencyId: DataTypes.INTEGER,
      nib: DataTypes.STRING(50),
      nppbkc: DataTypes.STRING(50),
      siupmb: DataTypes.STRING(50),
      salesmanId: DataTypes.BIGINT,
      supplierTypeId: DataTypes.BIGINT,
      supplierGroupId: DataTypes.BIGINT,
      supplierSegmentationId: DataTypes.BIGINT,
      supplierRegionId: DataTypes.BIGINT,
      paymentTermId: DataTypes.BIGINT,
      creditLimit: DataTypes.DOUBLE,
      saldo: DataTypes.DOUBLE,
      note: DataTypes.TEXT,
      typeSupplier: DataTypes.TINYINT
    },
    { withDbId: true, withIsactive: true, withIsdel: true, withIsused: true, withCreate: true, withModify: true }
  ),
  StandardModel.buildStandardModelInformation('ms_supplier', 'Supplier', sequelize)
);

SupplierBank.init(
  StandardModel.buildPropertyWithOptions(
    {
      ...StandardModel.buildPrimaryKey('bankSupplierId', DataTypes.INTEGER),
      bankId: DataTypes.INTEGER,
      companyParentId: DataTypes.INTEGER,
      companyId: DataTypes.INTEGER,
      bankSupplierCode: DataTypes.STRING(5),
      bankSupplierName: DataTypes.STRING(25),
      branch: DataTypes.STRING(50),
      accountNumber: DataTypes.STRING(30),
      currencyId: DataTypes.INTEGER
    },
    { withDbId: true, withIsactive: true, withIsdel: true, withCreate: true, withModify: true }
  ),
  StandardModel.buildStandardModelInformation('ms_supplier_bank', 'SupplierBank', sequelize)
);

SupplierBrand.init(
  StandardModel.buildPropertyWithOptions(
    {
      ...StandardModel.buildPrimaryKey('supplierBrandId', DataTypes.BIGINT),
      supplierId: DataTypes.BIGINT,
      brandId: DataTypes.BIGINT
    },
    { withCreate: true, withModify: true }
  ),
  StandardModel.buildStandardModelInformation('ms_supplier_brand', 'SupplierBrand', sequelize)
);

SupplierContact.init(
  StandardModel.buildPropertyWithOptions(
    {
      ...StandardModel.buildPrimaryKey('supplierContactId', DataTypes.BIGINT),
      companyParentId: DataTypes.INTEGER,
      supplierId: DataTypes.INTEGER,
      supplierContactName: DataTypes.STRING(25),
      supplierContactPosition: DataTypes.STRING(25),
      supplierContactEmail: DataTypes.STRING(30),
      countryCode: DataTypes.TEXT,
      supplierContactPhone: DataTypes.TEXT,
      status: DataTypes.TINYINT,
      note: DataTypes.TEXT,
      isdefault: DataTypes.TINYINT,
      phoneType: DataTypes.TEXT
    },
    { withDbId: true, withIsdel: true }
  ),
  StandardModel.buildStandardModelInformation('ms_supplier_contact', 'SupplierContact', sequelize)
);

SupplierCurrency.init(
  StandardModel.buildPropertyWithOptions(
    {
      ...StandardModel.buildPrimaryKey('supplierCurrencyId', DataTypes.BIGINT),
      supplierId: DataTypes.BIGINT,
      currencyId: DataTypes.BIGINT,
    },
    { withCreate: true, withModify: true }
  ),
  StandardModel.buildStandardModelInformation('ms_supplier_currency', 'SupplierCurrency', sequelize)
);

SupplierGroup.init(
  StandardModel.buildPropertyWithOptions(
    {
      ...StandardModel.buildPrimaryKey('supplierGroupId', DataTypes.BIGINT),
      companyParentId: DataTypes.INTEGER,
      supplierGroupCode: DataTypes.STRING(5),
      supplierGroupName: DataTypes.STRING(25)
    },
    { withDbId: true, withIsactive: true, withIsdel: true, withIsused: true, withCreate: true, withModify: true }
  ),
  StandardModel.buildStandardModelInformation('ms_supplier_group', 'SupplierGroup', sequelize)
);

SupplierPayment.init(
  StandardModel.buildPropertyWithOptions(
    {
      ...StandardModel.buildPrimaryKey('supplierPaymentId', DataTypes.BIGINT),
      companyParentId: DataTypes.INTEGER,
      supplierId: DataTypes.INTEGER,
      bankId: DataTypes.INTEGER,
      bankAccountName: DataTypes.STRING(150),
      bankAccountNo: DataTypes.STRING(25),
      branch: DataTypes.STRING(25),
      bankAddr: DataTypes.TEXT,
      countryId: DataTypes.INTEGER,
      supplierPaymentProvinceId: DataTypes.BIGINT,
      supplierPaymentCityId: DataTypes.BIGINT,
      supplierPaymentDistrictId: DataTypes.BIGINT,
      supplierPaymentSubdistrictId: DataTypes.BIGINT,
      swiftCode: DataTypes.STRING(20),
      iban: DataTypes.STRING(20),
      pic: DataTypes.STRING(25)
    },
    { withDbId: true, withIsdel: true }
  ),
  StandardModel.buildStandardModelInformation('ms_supplier_payment', 'SupplierPayment', sequelize)
);

SupplierPurchase.init(
  StandardModel.buildPropertyWithOptions(
    {
      ...StandardModel.buildPrimaryKey('supplierPurchaseId', DataTypes.BIGINT),
      companyParentId: DataTypes.INTEGER,
      salesmanId: DataTypes.INTEGER,
      supplierId: DataTypes.INTEGER,
      supplierTypeId: DataTypes.INTEGER,
      supplierGroupId: DataTypes.INTEGER,
      supplierSegmentationId: DataTypes.INTEGER,
      supplierRegionId: DataTypes.INTEGER,
      paymentTermId: DataTypes.INTEGER,
      paymentTermDays: DataTypes.INTEGER,
      currencyId: DataTypes.INTEGER,
      creditLimit: DataTypes.DOUBLE
    },
    { withDbId: true, withIsdel: true }
  ),
  StandardModel.buildStandardModelInformation('ms_supplier_purchase', 'SupplierPurchase', sequelize)
);

SupplierRegion.init(
  StandardModel.buildPropertyWithOptions(
    {
      ...StandardModel.buildPrimaryKey('supplierRegionId', DataTypes.BIGINT),
      companyParentId: DataTypes.INTEGER,
      supplierRegionCode: DataTypes.STRING(5),
      supplierRegionName: DataTypes.STRING(25)
    },
    { withDbId: true, withIsactive: true, withIsdel: true, withIsused: true, withModify: true, withCreate: true }
  ),
  StandardModel.buildStandardModelInformation('ms_supplier_region', 'SupplierRegion', sequelize)
);

SupplierSegmentation.init(
  StandardModel.buildPropertyWithOptions(
    {
      ...StandardModel.buildPrimaryKey('supplierSegmentationId', DataTypes.BIGINT),
      parentId: DataTypes.BIGINT,
      levelSegmentation: DataTypes.TINYINT,
      companyParentId: DataTypes.INTEGER,
      supplierSegmentationCode: DataTypes.STRING(25),
      supplierSegmentationName: DataTypes.STRING(25)
    },
    { withDbId: true, withIsactive: true, withIsdel: true, withIsused: true, withCreate: true, withModify: true }
  ),
  StandardModel.buildStandardModelInformation(
    'ms_supplier_segmentation',
    'SupplierSegmentation',
    sequelize
  )
);

SupplierTax.init(
  StandardModel.buildPropertyWithOptions(
    {
      ...StandardModel.buildPrimaryKey('supplierTaxId', DataTypes.BIGINT),
      companyParentId: DataTypes.INTEGER,
      supplierId: DataTypes.INTEGER,
      npwpName: DataTypes.STRING(100),
      npwp: DataTypes.STRING(25),
      pkp: DataTypes.STRING(25),
      supplierTaxAddr: DataTypes.TEXT,
      supplierTaxCountryId: DataTypes.INTEGER,
      supplierTaxProvinceId: DataTypes.INTEGER,
      supplierTaxCityId: DataTypes.INTEGER,
      supplierTaxDistrictId: DataTypes.INTEGER,
      supplierTaxSubdistrictId: DataTypes.INTEGER,
      supplierTaxPostalCode: DataTypes.STRING(7),
      supplierTaxPhone: DataTypes.TEXT,
      countryCode: DataTypes.TEXT,
      isdefault: DataTypes.TINYINT,
      pic: DataTypes.STRING(50)
    },
    { withDbId: true, withIsdel: true }
  ),
  StandardModel.buildStandardModelInformation('ms_supplier_tax', 'SupplierTax', sequelize)
);

SupplierType.init(
  StandardModel.buildPropertyWithOptions(
    {
      ...StandardModel.buildPrimaryKey('supplierTypeId', DataTypes.BIGINT),
      companyParentId: DataTypes.INTEGER,
      supplierTypeCode: DataTypes.STRING(5),
      supplierTypeName: DataTypes.STRING(25)
    },
    { withDbId: true, withIsactive: true, withIsdel: true, withIsused: true, withCreate: true, withModify: true }
  ),
  StandardModel.buildStandardModelInformation('ms_supplier_type', 'SupplierType', sequelize)
);

export {
  Supplier,
  SupplierBank,
  SupplierBrand,
  SupplierContact,
  SupplierCurrency,
  SupplierGroup,
  SupplierPayment,
  SupplierPurchase,
  SupplierRegion,
  SupplierSegmentation,
  SupplierTax,
  SupplierType
};
