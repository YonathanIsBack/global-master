import { DataTypes } from "sequelize";
import DatabaseConnectionSingleton from "../../configs/DatabaseConnection.js";
import StandardModel from "../StandardModel.js";

const sequelize = DatabaseConnectionSingleton.getConnection();

class CoretaxCategory extends StandardModel { }
class CoretaxCountry extends StandardModel { }
class CoretaxFacility extends StandardModel { }
class CoretaxInfo extends StandardModel { }
class CoretaxJenisPembeli extends StandardModel { }
class CoretaxTax extends StandardModel { }
class CoretaxTransactionCode extends StandardModel { }
class CoretaxType extends StandardModel { }
class CoretaxUom extends StandardModel { }

CoretaxCategory.init(
  StandardModel.buildPropertyWithOptions(
    {
      ...StandardModel.buildPrimaryKey('coretaxCategoryId', DataTypes.BIGINT),
      coretaxCategoryCode: DataTypes.STRING(50),
      coretaxCategoryName: DataTypes.STRING(150),
    },
    { withIsactive: true, withIsdel: true, withCreate: true, withModify: true }
  ),
  StandardModel.buildStandardModelInformation('ms_coretax_category', 'CoretaxCategory', sequelize)
);

CoretaxCountry.init(
  StandardModel.buildPropertyWithOptions(
    {
      ...StandardModel.buildPrimaryKey('coretaxCountryId', DataTypes.BIGINT),
      coretaxCountryCode: DataTypes.STRING(50),
      coretaxCountryName: DataTypes.STRING(150),
    },
    { withIsactive: true, withIsdel: true, withCreate: true, withModify: true }
  ),
  StandardModel.buildStandardModelInformation('ms_coretax_country', 'CoretaxCountry', sequelize)
);

CoretaxFacility.init(
  StandardModel.buildPropertyWithOptions(
    {
      ...StandardModel.buildPrimaryKey('coretaxFacilityId', DataTypes.BIGINT),
      coretaxTransactionCodeId: DataTypes.BIGINT,
      coretaxFacilityCode: DataTypes.STRING(50),
      coretaxFacilityNumber: DataTypes.STRING(50),
      coretaxFacilityDesc: DataTypes.TEXT,
    },
    { withIsactive: true, withIsdel: true, withCreate: true, withModify: true }
  ),
  StandardModel.buildStandardModelInformation('ms_coretax_facility', 'CoretaxFacility', sequelize)
);

CoretaxInfo.init(
  StandardModel.buildPropertyWithOptions(
    {
      ...StandardModel.buildPrimaryKey('coretaxInfoId', DataTypes.INTEGER),
      coretaxTransactionCodeId: DataTypes.BIGINT,
      coretaxInfoCode: DataTypes.STRING(50),
      coretaxInfoNumber: DataTypes.STRING(50),
      coretaxInfoDesc: DataTypes.TEXT,
    },
    { withIsactive: true, withIsdel: true, withCreate: true, withModify: true }
  ),
  StandardModel.buildStandardModelInformation('ms_coretax_info', 'CoretaxInfo', sequelize)
);

CoretaxJenisPembeli.init(
  StandardModel.buildPropertyWithOptions(
    {
      ...StandardModel.buildPrimaryKey('coretaxJenisPembeliId', DataTypes.BIGINT),
      coretaxJenisPembeliName: DataTypes.STRING(150),
      coretaxJenisPembeliInfo: DataTypes.STRING(250),
    },
    { withIsactive: true, withIsdel: true, withCreate: true, withModify: true }
  ),
  StandardModel.buildStandardModelInformation('ms_coretax_jenis_pembeli', 'CoretaxJenisPembeli', sequelize)
);

CoretaxTax.init(
  StandardModel.buildPropertyWithOptions(
    {
      ...StandardModel.buildPrimaryKey('coretaxTaxId', DataTypes.BIGINT),
      coretaxTaxName: DataTypes.STRING(150),
      percentage: DataTypes.FLOAT,
      note: DataTypes.TEXT,
      isdefault: DataTypes.TINYINT
    },
    { withIsactive: true, withIsdel: true, withCreate: true, withModify: true }
  ),
  StandardModel.buildStandardModelInformation('ms_coretax_tax', 'CoretaxTax', sequelize)
);

CoretaxTransactionCode.init(
  StandardModel.buildPropertyWithOptions(
    {
      ...StandardModel.buildPrimaryKey('coretaxTransactionCodeId', DataTypes.BIGINT),
      coretaxTransactionCode: DataTypes.STRING(50),
      coretaxTransactionNumber: DataTypes.STRING(50),
      coretaxTransactionDesc: DataTypes.TEXT,
    },
    { withIsactive: true, withIsdel: true, withCreate: true, withModify: true }
  ),
  StandardModel.buildStandardModelInformation('ms_coretax_transaction_code', 'CoretaxTransactionCode', sequelize)
);

CoretaxType.init(
  StandardModel.buildPropertyWithOptions(
    {
      ...StandardModel.buildPrimaryKey('coretaxTypeId', DataTypes.BIGINT),
      coretaxTypeCode: DataTypes.STRING(50),
      coretaxTypeName: DataTypes.STRING(150),
      isdefault: DataTypes.TINYINT
    },
    { withIsactive: true, withIsdel: true, withCreate: true, withModify: true }
  ),
  StandardModel.buildStandardModelInformation('ms_coretax_type', 'CoretaxType', sequelize)
);

CoretaxUom.init(
  StandardModel.buildPropertyWithOptions(
    {
      ...StandardModel.buildPrimaryKey('coretaxUomId', DataTypes.BIGINT),
      coretaxUomCode: DataTypes.STRING(50),
      coretaxUomName: DataTypes.STRING(150),
      isservice: DataTypes.TINYINT
    },
    { withIsactive: true, withIsdel: true, withCreate: true, withModify: true }
  ),
  StandardModel.buildStandardModelInformation('ms_coretax_uom', 'CoretaxUom', sequelize)
);
export {
  CoretaxCategory,
  CoretaxCountry,
  CoretaxFacility,
  CoretaxInfo,
  CoretaxJenisPembeli,
  CoretaxTax,
  CoretaxTransactionCode,
  CoretaxType,
  CoretaxUom
};

