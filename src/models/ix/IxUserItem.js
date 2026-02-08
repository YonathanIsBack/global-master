import { DataTypes } from "sequelize";
import DatabaseConnectionSingleton from "../../configs/DatabaseConnection.js";
import StandardModel from "../StandardModel.js";

const sequelize = DatabaseConnectionSingleton.getConnection();

class IxUserItem extends StandardModel { }
class IxUserItemDt extends StandardModel { }

IxUserItem.init(
  StandardModel.buildPropertyWithOptions(
    {
      ...StandardModel.buildPrimaryKey('ixUserItemId', DataTypes.BIGINT),
      fileName: DataTypes.STRING(50),
      totalData: DataTypes.INTEGER,
      totalInsert: DataTypes.INTEGER,
      totalUpdate: DataTypes.INTEGER,
    },
    { withCreate: true }
  ),
  StandardModel.buildStandardModelInformation('ix_user_item', 'IxUserItem', sequelize)
);

IxUserItemDt.init(
  StandardModel.buildPropertyWithOptions(
    {
      ...StandardModel.buildPrimaryKey('ixUserItemDtId', DataTypes.BIGINT),
      ixUserItemId: DataTypes.BIGINT,
      username: DataTypes.STRING(150),
      itemCode: DataTypes.STRING(150),
      itemName: DataTypes.STRING(150),
    },
    {}
  ),
  StandardModel.buildStandardModelInformation('ix_user_item_dt', 'IxUserItemDt', sequelize)
);

export {
  IxUserItem,
  IxUserItemDt
};

