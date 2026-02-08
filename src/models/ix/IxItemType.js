import { DataTypes } from "sequelize";
import DatabaseConnectionSingleton from "../../configs/DatabaseConnection.js";
import StandardModel from "../StandardModel.js";

const sequelize = DatabaseConnectionSingleton.getConnection();

class IxItemType extends StandardModel { }
class IxItemTypeDt extends StandardModel { }

IxItemType.init(
  StandardModel.buildPropertyWithOptions(
    {
      ...StandardModel.buildPrimaryKey('ixItemTypeId', DataTypes.BIGINT),
      fileName: DataTypes.STRING(50),
      totalData: DataTypes.INTEGER,
      totalInsert: DataTypes.INTEGER,
      totalUpdate: DataTypes.INTEGER,
      status: DataTypes.TINYINT,
    },
    { withCreate: true }
  ),
  StandardModel.buildStandardModelInformation('ix_item_type', 'IxItemType', sequelize)
);

IxItemTypeDt.init(
  StandardModel.buildPropertyWithOptions(
    {
      ...StandardModel.buildPrimaryKey('ixItemTypeDtId', DataTypes.BIGINT),
      ixItemTypeId: DataTypes.BIGINT,
      itemTypeCode: DataTypes.STRING(50),
      itemTypeName: DataTypes.STRING(150),
      coretaxTypeId: DataTypes.BIGINT,
      coretaxTypeCode: DataTypes.STRING(150),
      coretaxTypeName: DataTypes.STRING(150),
      isstock: DataTypes.STRING(50),
      isused: DataTypes.STRING(50),
    },
    { withIsactive: true, withIsdel: true }
  ),
  StandardModel.buildStandardModelInformation('ix_item_type_dt', 'IxItemTypeDt', sequelize)
);

export {
  IxItemType,
  IxItemTypeDt
};

