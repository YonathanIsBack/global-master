import { DataTypes } from "sequelize";
import DatabaseConnectionSingleton from "../../configs/DatabaseConnection.js";
import StandardModel from "../StandardModel.js";

const sequelize = DatabaseConnectionSingleton.getConnection();

class IxCoretaxTax extends StandardModel { }
class IxCoretaxTaxDt extends StandardModel { }

IxCoretaxTax.init(
  StandardModel.buildPropertyWithOptions(
    {
      ...StandardModel.buildPrimaryKey('ixCoretaxTaxId', DataTypes.BIGINT),
      fileName: DataTypes.STRING(50),
      totalData: DataTypes.INTEGER,
      totalInsert: DataTypes.INTEGER,
      totalUpdate: DataTypes.INTEGER,
      status: DataTypes.TINYINT,
    },
    { withCreate: true }
  ),
  StandardModel.buildStandardModelInformation('ix_coretax_tax', 'IxCoretaxTax', sequelize)
);

IxCoretaxTaxDt.init(
  StandardModel.buildPropertyWithOptions(
    {
      ...StandardModel.buildPrimaryKey('ixCoretaxTaxDtId', DataTypes.BIGINT),
      ixCoretaxTaxId: DataTypes.BIGINT,
      coretaxTaxId: DataTypes.BIGINT,
      coretaxTaxName: DataTypes.STRING(150),
      percentage: DataTypes.FLOAT,
      note: DataTypes.TEXT,
      isdefault: DataTypes.STRING(50),
    },
    { withIsactive: true, withIsdel: true }
  ),
  StandardModel.buildStandardModelInformation('ix_coretax_tax_dt', 'IxCoretaxTaxDt', sequelize)
);

export {
  IxCoretaxTax,
  IxCoretaxTaxDt
};

