import { DataTypes } from "sequelize";
import DatabaseConnectionSingleton from "../../configs/DatabaseConnection.js";
import StandardModel from "../StandardModel.js";

const sequelize = DatabaseConnectionSingleton.getConnection();

class IxTax extends StandardModel { }
class IxTaxDt extends StandardModel { }

IxTax.init(
  StandardModel.buildPropertyWithOptions(
    {
      ...StandardModel.buildPrimaryKey('ixTaxId', DataTypes.BIGINT),
      fileName: DataTypes.STRING(50),
      totalData: DataTypes.INTEGER,
      totalInsert: DataTypes.INTEGER,
      totalUpdate: DataTypes.INTEGER,
      status: DataTypes.TINYINT,
    },
    { withCreate: true }
  ),
  StandardModel.buildStandardModelInformation('ix_tax', 'IxTax', sequelize)
);

IxTaxDt.init(
  StandardModel.buildPropertyWithOptions(
    {
      ...StandardModel.buildPrimaryKey('ixTaxDtId', DataTypes.BIGINT),
      ixTaxId: DataTypes.BIGINT,
      taxType: DataTypes.STRING(50),
      publishDate: DataTypes.DATE,
      taxName: DataTypes.STRING(50),
      percentage: DataTypes.STRING(50),
      note: DataTypes.STRING(50),
      defaults: DataTypes.STRING(50),
      isused: DataTypes.STRING(50)
    },
    { withIsactive: true, withIsdel: true }
  ),
  StandardModel.buildStandardModelInformation('ix_tax_dt', 'IxTaxDt', sequelize)
);

export {
  IxTax,
  IxTaxDt
};

