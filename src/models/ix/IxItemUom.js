import { DataTypes } from "sequelize";
import DatabaseConnectionSingleton from "../../configs/DatabaseConnection.js";
import StandardModel from "../StandardModel.js";

const sequelize = DatabaseConnectionSingleton.getConnection();

class IxItemUom extends StandardModel { }
class IxItemUomDt extends StandardModel { }

IxItemUom.init(
  StandardModel.buildPropertyWithOptions(
    {
      ...StandardModel.buildPrimaryKey('ixItemUomId', DataTypes.BIGINT),
      fileName: DataTypes.STRING(50),
      totalData: DataTypes.INTEGER,
      totalInsert: DataTypes.INTEGER,
      totalUpdate: DataTypes.INTEGER,
      status: DataTypes.TINYINT,
    },
    { withCreate: true }
  ),
  StandardModel.buildStandardModelInformation('ix_item_uom', 'IxItemUom', sequelize)
);

IxItemUomDt.init(
  StandardModel.buildPropertyWithOptions(
    {
      ...StandardModel.buildPrimaryKey('ixItemUomDtId', DataTypes.BIGINT),
      ixItemUomId: DataTypes.BIGINT,
      itemUomId: DataTypes.BIGINT,
      itemUomCode: DataTypes.STRING(50),
      itemUomName: DataTypes.STRING(150),
      coretaxUomId: DataTypes.BIGINT,
      coretaxUomCode: DataTypes.STRING(150),
      isstock: DataTypes.STRING(50),
      isused: DataTypes.STRING(50),
    },
    { withIsactive: true, withIsdel: true }
  ),
  StandardModel.buildStandardModelInformation('ix_item_uom_dt', 'IxItemUomDt', sequelize)
);

export {
  IxItemUom,
  IxItemUomDt
};

