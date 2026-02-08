import { DataTypes } from "sequelize";
import DatabaseConnectionSingleton from "../../configs/DatabaseConnection.js";
import StandardModel from "../StandardModel.js";

const sequelize = DatabaseConnectionSingleton.getConnection();

class IxSupplier extends StandardModel { }
class IxSupplierDt extends StandardModel { }

IxSupplier.init(
  StandardModel.buildPropertyWithOptions(
    {
      ...StandardModel.buildPrimaryKey('ixSupplierId', DataTypes.BIGINT),
      fileName: DataTypes.STRING(50),
      totalData: DataTypes.INTEGER,
      totalInsert: DataTypes.INTEGER,
      totalUpdate: DataTypes.INTEGER,
      status: DataTypes.TINYINT,
    },
    { withCreate: true }
  ),
  StandardModel.buildStandardModelInformation('ix_supplier', 'IxSupplier', sequelize)
);

IxSupplierDt.init(
  StandardModel.buildPropertyWithOptions(
    {
      ...StandardModel.buildPrimaryKey('ixSupplierDtId', DataTypes.BIGINT),
      ixSupplierId: DataTypes.BIGINT,
      code: DataTypes.TEXT,
      name: DataTypes.STRING(150),
      nickname: DataTypes.STRING(150),
      addr: DataTypes.STRING(200),
      countryId: DataTypes.BIGINT,
      provinceId: DataTypes.BIGINT,
      provinceCode: DataTypes.STRING(150),
      provinceName: DataTypes.STRING(150),
      cityId: DataTypes.BIGINT,
      cityCode: DataTypes.STRING(150),
      cityName: DataTypes.STRING(150),
      districtId: DataTypes.BIGINT,
      districtCode: DataTypes.STRING(150),
      districtName: DataTypes.STRING(150),
      subdistrictId: DataTypes.BIGINT,
      subdistrictCode: DataTypes.STRING(150),
      subdistrictName: DataTypes.STRING(150),
      typeSupplier: DataTypes.STRING(50),
      post: DataTypes.STRING(50),
      country: DataTypes.STRING(50),
      province: DataTypes.STRING(100),
      phone: DataTypes.STRING(150),
      owner: DataTypes.STRING(150),
      fax: DataTypes.STRING(50),
      class: DataTypes.STRING(20),
      nibno: DataTypes.STRING(50),
      nppbkcno: DataTypes.STRING(50),
      siupmbno: DataTypes.STRING(50),
      addinfo: DataTypes.STRING(50),
      active: DataTypes.STRING(150),
      contact: DataTypes.STRING(500),
      contactName: DataTypes.STRING(150),
      position: DataTypes.STRING(150),
      email: DataTypes.STRING(150),
      phoneType: DataTypes.STRING(150),
      phoneNumber: DataTypes.STRING(150),
      status: DataTypes.STRING(150),
      note: DataTypes.STRING(150),
      default: DataTypes.STRING(150),
      payment: DataTypes.STRING(500),
      bankName: DataTypes.STRING(150),
      bankAccountName: DataTypes.STRING(150),
      bankAccountBranch: DataTypes.STRING(150),
      branch: DataTypes.STRING(150),
      bankAddress: DataTypes.STRING(150),
      paymentCountryId: DataTypes.BIGINT,
      paymentProvinceId: DataTypes.BIGINT,
      paymentProvinceCode: DataTypes.STRING(150),
      paymentProvinceName: DataTypes.STRING(150),
      paymentCityId: DataTypes.BIGINT,
      paymentCityCode: DataTypes.STRING(150),
      paymentCityName: DataTypes.STRING(150),
      paymentDistrictId: DataTypes.BIGINT,
      paymentDistrictCode: DataTypes.STRING(150),
      paymentDistrictName: DataTypes.STRING(150),
      paymentSubdistrictId: DataTypes.BIGINT,
      paymentSubdistrictCode: DataTypes.STRING(150),
      paymentSubdistrictName: DataTypes.STRING(150),
      paymentCountry: DataTypes.STRING(150),
      swiftCode: DataTypes.STRING(150),
      ibanNo: DataTypes.STRING(150),
      taxPic: DataTypes.STRING(50),
      npwpName: DataTypes.STRING(50),
      npwp: DataTypes.STRING(50),
      npwpAddr: DataTypes.STRING(200),
      taxCountryId: DataTypes.BIGINT,
      taxZip: DataTypes.STRING(150),
      taxPhone: DataTypes.STRING(150),
      taxCountryName: DataTypes.STRING(150),
      taxProvinceId: DataTypes.BIGINT,
      taxProvinceCode: DataTypes.STRING(150),
      taxProvinceName: DataTypes.STRING(150),
      taxCityId: DataTypes.BIGINT,
      taxCityCode: DataTypes.STRING(150),
      taxCityName: DataTypes.STRING(150),
      taxDistrictId: DataTypes.BIGINT,
      taxDistrictCode: DataTypes.STRING(150),
      taxDistrictName: DataTypes.STRING(150),
      taxCountryCode: DataTypes.STRING(150),
      pkp: DataTypes.STRING(50),
      sameWithMain: DataTypes.STRING(150),
      supplierType: DataTypes.STRING(50),
      groupId: DataTypes.BIGINT,
      groupName: DataTypes.STRING(50),
      segmentationId: DataTypes.BIGINT,
      segmentation: DataTypes.STRING(50),
      regionId: DataTypes.BIGINT,
      region: DataTypes.STRING(50),
      tos: DataTypes.STRING(50),
      currency: DataTypes.STRING(50),
      creditLimit: DataTypes.STRING(50),
      type: DataTypes.TINYINT,
    },
    { withIsactive: true, withIsdel: true }
  ),
  StandardModel.buildStandardModelInformation('ix_supplier_dt', 'IxSupplierDt', sequelize)
);

export {
  IxSupplier,
  IxSupplierDt
};

