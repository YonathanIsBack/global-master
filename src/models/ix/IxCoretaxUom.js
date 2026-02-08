import { DataTypes } from "sequelize";
import DatabaseConnectionSingleton from "../../configs/DatabaseConnection.js";
import StandardModel from "../StandardModel.js";

const sequelize = DatabaseConnectionSingleton.getConnection();

class IxCoretaxUom extends StandardModel { }
class IxCoretaxUomDt extends StandardModel { }

IxCoretaxUom.init(
  StandardModel.buildPropertyWithOptions(
    {
      ...StandardModel.buildPrimaryKey('ixCoretaxUomId', DataTypes.BIGINT),
      fileName: DataTypes.STRING(50),
      totalData: DataTypes.INTEGER,
      totalInsert: DataTypes.INTEGER,
      totalUpdate: DataTypes.INTEGER,
      status: DataTypes.TINYINT,
    },
    { withCreate: true }
  ),
  StandardModel.buildStandardModelInformation('ix_coretax_uom', 'IxCoretaxUom', sequelize)
);

IxCoretaxUomDt.init(
  StandardModel.buildPropertyWithOptions(
    {
      ...StandardModel.buildPrimaryKey('ixCoretaxUomDtId', DataTypes.BIGINT),
      ixCoretaxUomId: DataTypes.BIGINT,
      coretaxUomId: DataTypes.BIGINT,
      coretaxUomCode: DataTypes.STRING(50),
      coretaxUomName: DataTypes.STRING(50),
      isservice: DataTypes.STRING(50),
    },
    { withIsactive: true, withIsdel: true }
  ),
  StandardModel.buildStandardModelInformation('ix_coretax_uom_dt', 'IxCoretaxUomDt', sequelize)
);

export {
  IxCoretaxUom,
  IxCoretaxUomDt
};

