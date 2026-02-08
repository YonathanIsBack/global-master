import { DataTypes } from "sequelize";
import DatabaseConnectionSingleton from "../../configs/DatabaseConnection.js";
import StandardModel from "../StandardModel.js";

const sequelize = DatabaseConnectionSingleton.getConnection();

class IxFixedAssetGroup extends StandardModel { }
class IxFixedAssetGroupDt extends StandardModel { }

IxFixedAssetGroup.init(
  StandardModel.buildPropertyWithOptions(
    {
      ...StandardModel.buildPrimaryKey('ixFixedAssetGroupId', DataTypes.BIGINT),
      fileName: DataTypes.STRING(50),
      totalData: DataTypes.INTEGER,
      totalInsert: DataTypes.INTEGER,
      totalUpdate: DataTypes.INTEGER,
      status: DataTypes.TINYINT,
    },
    { withCreate: true }
  ),
  StandardModel.buildStandardModelInformation('ix_fixed_asset_group', 'IxFixedAssetGroup', sequelize)
);

IxFixedAssetGroupDt.init(
  StandardModel.buildPropertyWithOptions(
    {
      ...StandardModel.buildPrimaryKey('ixFixedAssetGroupDtId', DataTypes.BIGINT),
      ixFixedAssetGroupId: DataTypes.BIGINT,
      fixedAssetGroupCode: DataTypes.STRING(50),
      fixedAssetGroupName: DataTypes.STRING(150),
      depreciationMethod: DataTypes.STRING(50),
      depreciationRate: DataTypes.STRING(50),
      serviceLife: DataTypes.STRING(50),
      coaBiayaId: DataTypes.BIGINT,
      coaBiayaCode: DataTypes.STRING(50),
      coaBiayaName: DataTypes.STRING(150),
      coaAkumulasiId: DataTypes.BIGINT,
      coaAkumulasiCode: DataTypes.STRING(50),
      coaAkumulasiName: DataTypes.STRING(150),
      isused: DataTypes.STRING(50),
    },
    { withIsactive: true, withIsdel: true }
  ),
  StandardModel.buildStandardModelInformation('ix_fixed_asset_group_dt', 'IxFixedAssetGroupDt', sequelize)
);

export {
  IxFixedAssetGroup,
  IxFixedAssetGroupDt
};

