import { DataTypes } from 'sequelize';
import DatabaseConnectionSingleton from '../configs/DatabaseConnection.js';
import StandardModel from './StandardModel.js';
const sequelize = DatabaseConnectionSingleton.getConnection();

class FixedAsset extends StandardModel { }
class FixedAssetCategory extends StandardModel { }
class FixedAssetGroup extends StandardModel { }
class FixedDepreciation extends StandardModel { }

FixedAsset.init(
  StandardModel.buildPropertyWithOptions(
    {
      ...StandardModel.buildPrimaryKey('fixedAssetId', DataTypes.BIGINT),
      companyParentId: DataTypes.INTEGER,
      companyId: DataTypes.INTEGER,
      fixedAssetGroupId: DataTypes.INTEGER,
      fixedAssetCategoryId: DataTypes.INTEGER,
      fixedAssetPurchaseId: DataTypes.BIGINT,
      fixedAssetPurchaseDtId: DataTypes.BIGINT,
      fixedAssetCode: DataTypes.STRING(10),
      fixedAssetName: DataTypes.STRING(25),
      isused: DataTypes.TINYINT,
      locationId: DataTypes.INTEGER,
      qrCode: DataTypes.STRING(25),
      user: DataTypes.STRING(25),
      isnewpurchase: DataTypes.TINYINT,
      acquisitionDate: DataTypes.DATE,
      acquisitionValue: DataTypes.STRING(25),
      quantity: DataTypes.DECIMAL(10, 0),
      serviceLife: DataTypes.STRING(25),
      salvageValue: DataTypes.STRING(25),
      serialNumber: DataTypes.STRING(250)
    },
    { withDbId: true, withIsactive: true, withIsdel: true, withCreate: true, withModify: true }
  ),
  StandardModel.buildStandardModelInformation('ms_fixed_asset', 'FixedAsset', sequelize)
);

FixedAssetCategory.init(
  StandardModel.buildPropertyWithOptions(
    {
      ...StandardModel.buildPrimaryKey('fixedAssetCategoryId', DataTypes.BIGINT),
      companyParentId: DataTypes.INTEGER,
      fixedAssetCategoryName: DataTypes.STRING(25),
      coaBiayaId: DataTypes.BIGINT,
      coaAkumulasiId: DataTypes.BIGINT,
      coaExpensesId: DataTypes.BIGINT
    },
    { withDbId: true, withIsactive: true, withIsdel: true, withIsused: true, withCreate: true, withModify: true }
  ),
  StandardModel.buildStandardModelInformation(
    'ms_fixed_asset_category',
    'FixedAssetCategory',
    sequelize
  )
);

FixedAssetGroup.init(
  StandardModel.buildPropertyWithOptions(
    {
      ...StandardModel.buildPrimaryKey('fixedAssetGroupId', DataTypes.BIGINT),
      companyParentId: DataTypes.INTEGER,
      fixedAssetGroupName: DataTypes.STRING(150),
      fixedAssetGroupCode: DataTypes.STRING(50),
      depreciationMethod: DataTypes.STRING(10),
      depreciationRate: DataTypes.DOUBLE,
      serviceLife: DataTypes.INTEGER,
      coaBiayaId: DataTypes.BIGINT,
      coaAkumulasiId: DataTypes.BIGINT
    },
    { withDbId: true, withIsactive: true, withIsdel: true, withIsused: true, withCreate: true, withModify: true }
  ),
  StandardModel.buildStandardModelInformation('ms_fixed_asset_group', 'FixedAssetGroup', sequelize)
);

FixedDepreciation.init(
  StandardModel.buildPropertyWithOptions(
    {
      ...StandardModel.buildPrimaryKey('depreciationId', DataTypes.BIGINT),
      depreciationName: DataTypes.STRING(150),
      depreciationRate: DataTypes.DECIMAL(11, 0)
    },
    { withIsactive: true, withIsdel: true, withCreate: true, withModify: true }
  ),
  StandardModel.buildStandardModelInformation(
    'ms_fixed_depreciation',
    'FixedDepreciation',
    sequelize
  )
);

export { FixedAsset, FixedAssetCategory, FixedAssetGroup, FixedDepreciation };
