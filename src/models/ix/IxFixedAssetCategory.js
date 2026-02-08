import { DataTypes } from "sequelize";
import DatabaseConnectionSingleton from "../../configs/DatabaseConnection.js";
import StandardModel from "../StandardModel.js";

const sequelize = DatabaseConnectionSingleton.getConnection();

class IxFixedAssetCategory extends StandardModel { }
class IxFixedAssetCategoryDt extends StandardModel { }

IxFixedAssetCategory.init(
  StandardModel.buildPropertyWithOptions(
    {
      ...StandardModel.buildPrimaryKey('ixFixedAssetCategoryId', DataTypes.BIGINT),
      fileName: DataTypes.STRING(50),
      totalData: DataTypes.INTEGER,
      totalInsert: DataTypes.INTEGER,
      totalUpdate: DataTypes.INTEGER,
      status: DataTypes.TINYINT,
    },
    { withCreate: true }
  ),
  StandardModel.buildStandardModelInformation('ix_fixed_asset_category', 'IxFixedAssetCategory', sequelize)
);

IxFixedAssetCategoryDt.init(
  StandardModel.buildPropertyWithOptions(
    {
      ...StandardModel.buildPrimaryKey('ixFixedAssetCategoryDtId', DataTypes.BIGINT),
      ixFixedAssetCategoryId: DataTypes.BIGINT,
      fixedAssetCategoryName: DataTypes.STRING(150),
      coaBiayaId: DataTypes.STRING(50),
      coaBiayaCode: DataTypes.STRING(50),
      coaBiayaName: DataTypes.STRING(150),
      coaAkumulasiId: DataTypes.BIGINT,
      coaAkumulasiCode: DataTypes.STRING(50),
      coaAkumulasiName: DataTypes.STRING(150),
      coaExpensesId: DataTypes.BIGINT,
      coaExpensesCode: DataTypes.STRING(50),
      coaExpensesName: DataTypes.STRING(150),
      isused: DataTypes.STRING(50),
    },
    { withIsactive: true, withIsdel: true }
  ),
  StandardModel.buildStandardModelInformation('ix_fixed_asset_category_dt', 'IxFixedAssetCategoryDt', sequelize)
);

export {
  IxFixedAssetCategory,
  IxFixedAssetCategoryDt
};

