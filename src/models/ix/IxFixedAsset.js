import { DataTypes } from "sequelize";
import DatabaseConnectionSingleton from "../../configs/DatabaseConnection.js";
import StandardModel from "../StandardModel.js";

const sequelize = DatabaseConnectionSingleton.getConnection();

class IxFixedAsset extends StandardModel { }
class IxFixedAssetDt extends StandardModel { }

IxFixedAsset.init(
  StandardModel.buildPropertyWithOptions(
    {
      ...StandardModel.buildPrimaryKey('ixFixedAssetId', DataTypes.BIGINT),
      fileName: DataTypes.STRING(50),
      totalData: DataTypes.INTEGER,
      totalInsert: DataTypes.INTEGER,
      totalUpdate: DataTypes.INTEGER,
      status: DataTypes.TINYINT,
    },
    { withCreate: true }
  ),
  StandardModel.buildStandardModelInformation('ix_fixed_asset', 'IxFixedAsset', sequelize)
);

IxFixedAssetDt.init(
  StandardModel.buildPropertyWithOptions(
    {
      ...StandardModel.buildPrimaryKey('ixFixedAssetDtId', DataTypes.BIGINT),
      ixFixedAssetId: DataTypes.BIGINT,
      fixedAssetGroupId: DataTypes.BIGINT,
      fixedAssetGroupCode: DataTypes.STRING(50),
      fixedAssetGroupName: DataTypes.STRING(150),
      fixedAssetCategoryId: DataTypes.BIGINT,
      fixedAssetCategoryCode: DataTypes.STRING(50),
      fixedAssetCategoryName: DataTypes.STRING(150),
      fixedAssetPurchaseId: DataTypes.BIGINT,
      fixedAssetPurchaseDtId: DataTypes.BIGINT,
      fixedAssetPurchaseCode: DataTypes.STRING(50),
      fixedAssetCode: DataTypes.STRING(50),
      fixedAssetName: DataTypes.STRING(150),
      locationId: DataTypes.BIGINT,
      locationCode: DataTypes.STRING(50),
      locationName: DataTypes.STRING(150),
      qrCode: DataTypes.STRING(150),
      user: DataTypes.STRING(50),
      isnewpurchase: DataTypes.STRING(50),
      acquisitionDate: DataTypes.STRING(50),
      acquisitionValue: DataTypes.STRING(50),
      quantity: DataTypes.STRING(50),
      serviceLife: DataTypes.STRING(50),
      salvageValue: DataTypes.STRING(50),
      serialNumber: DataTypes.STRING(50),
      isstock: DataTypes.STRING(50),
      isused: DataTypes.STRING(50),
    },
    { withIsactive: true, withIsdel: true }
  ),
  StandardModel.buildStandardModelInformation('ix_fixed_asset_dt', 'IxFixedAssetDt', sequelize)
);

export {
  IxFixedAsset,
  IxFixedAssetDt
};

