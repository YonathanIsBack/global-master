import { DataTypes } from "sequelize";
import DatabaseConnectionSingleton from "../../configs/DatabaseConnection.js";
import StandardModel from "../StandardModel.js";

const sequelize = DatabaseConnectionSingleton.getConnection();

class IxFixedAssetBalance extends StandardModel { }
class IxFixedAssetBalanceDt extends StandardModel { }

IxFixedAssetBalance.init(
  StandardModel.buildPropertyWithOptions(
    {
      ...StandardModel.buildPrimaryKey('ixFixedAssetBalanceId', DataTypes.BIGINT),
      fileName: DataTypes.STRING(50),
      totalData: DataTypes.INTEGER,
      totalInsert: DataTypes.INTEGER,
      totalUpdate: DataTypes.INTEGER,
      status: DataTypes.TINYINT,
    },
    { withCreate: true }
  ),
  StandardModel.buildStandardModelInformation('ix_fixed_asset_balance', 'IxFixedAssetBalance', sequelize)
);

IxFixedAssetBalanceDt.init(
  StandardModel.buildPropertyWithOptions(
    {
      ...StandardModel.buildPrimaryKey('ixFixedAssetBalanceDtId', DataTypes.BIGINT),
      ixFixedAssetBalanceId: DataTypes.BIGINT,
      fixedAssetGroupId: DataTypes.BIGINT,
      fixedAssetGroupCode: DataTypes.STRING(50),
      fixedAssetGroupName: DataTypes.STRING(150),
      fixedAssetCategoryId: DataTypes.BIGINT,
      fixedAssetCategoryCode: DataTypes.STRING(50),
      fixedAssetCategoryName: DataTypes.STRING(150),
      fixedAssetCode: DataTypes.STRING(50),
      description: DataTypes.STRING(500),
      serialNumber: DataTypes.STRING(150),
      locationId: DataTypes.BIGINT,
      locationCode: DataTypes.STRING(50),
      locationName: DataTypes.STRING(150),
      user: DataTypes.STRING(50),
      purchaseDate: DataTypes.STRING(50),
      purchasePrice: DataTypes.STRING(50),
      qty: DataTypes.DOUBLE,
      bookValueDate: DataTypes.STRING(50),
      bookValue: DataTypes.STRING(50),
      depreciationMethod: DataTypes.STRING(50),
      depreciationRate: DataTypes.STRING(50),
      remainingServiceLife: DataTypes.STRING(50)
    },
    { withIsactive: true, withIsdel: true }
  ),
  StandardModel.buildStandardModelInformation('ix_fixed_asset_balance_dt', 'IxFixedAssetBalanceDt', sequelize)
);

export {
  IxFixedAssetBalance,
  IxFixedAssetBalanceDt
};

