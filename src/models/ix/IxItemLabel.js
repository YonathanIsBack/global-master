import { DataTypes } from "sequelize";
import DatabaseConnectionSingleton from "../../configs/DatabaseConnection.js";
import StandardModel from "../StandardModel.js";

const sequelize = DatabaseConnectionSingleton.getConnection();

class IxItemLabel extends StandardModel { }
class IxItemLabelDt extends StandardModel { }

IxItemLabel.init(
  StandardModel.buildPropertyWithOptions(
    {
      ...StandardModel.buildPrimaryKey('ixItemLabelId', DataTypes.BIGINT),
      fileName: DataTypes.STRING(50),
      totalData: DataTypes.INTEGER,
      totalInsert: DataTypes.INTEGER,
      totalUpdate: DataTypes.INTEGER,
      status: DataTypes.TINYINT,
    },
    { withCreate: true }
  ),
  StandardModel.buildStandardModelInformation('ix_item_label', 'IxItemLabel', sequelize)
);

IxItemLabelDt.init(
  StandardModel.buildPropertyWithOptions(
    {
      ...StandardModel.buildPrimaryKey('ixItemLabelDtId', DataTypes.BIGINT),
      ixItemLabelId: DataTypes.BIGINT,
      itemLabelCode: DataTypes.STRING(50),
      itemLabelName: DataTypes.STRING(150),
      labelNotes: DataTypes.STRING(500),
      isstock: DataTypes.STRING(50),
      isused: DataTypes.STRING(50),
      urutan: DataTypes.STRING(50),
    },
    { withIsactive: true, withIsdel: true }
  ),
  StandardModel.buildStandardModelInformation('ix_item_label_dt', 'IxItemLabelDt', sequelize)
);

export {
  IxItemLabel,
  IxItemLabelDt
};

