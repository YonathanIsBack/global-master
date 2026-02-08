import { DataTypes } from "sequelize";
import DatabaseConnectionSingleton from "../../configs/DatabaseConnection.js";
import StandardModel from "../StandardModel.js";

const sequelize = DatabaseConnectionSingleton.getConnection();

class IxPaymentTerm extends StandardModel { }
class IxPaymentTermDt extends StandardModel { }

IxPaymentTerm.init(
  StandardModel.buildPropertyWithOptions(
    {
      ...StandardModel.buildPrimaryKey('ixPaymentTermId', DataTypes.BIGINT),
      fileName: DataTypes.STRING(50),
      totalData: DataTypes.INTEGER,
      totalInsert: DataTypes.INTEGER,
      totalUpdate: DataTypes.INTEGER,
      status: DataTypes.TINYINT,
    },
    { withCreate: true }
  ),
  StandardModel.buildStandardModelInformation('ix_payment_term', 'IxPaymentTerm', sequelize)
);

IxPaymentTermDt.init(
  StandardModel.buildPropertyWithOptions(
    {
      ...StandardModel.buildPrimaryKey('ixPaymentTermDtId', DataTypes.BIGINT),
      ixPaymentTermId: DataTypes.BIGINT,
      dueDate: DataTypes.STRING(50),
      paymentTermName: DataTypes.STRING(150),
      earlyPaymentDays: DataTypes.STRING(50),
      earlyPaymentDisc: DataTypes.STRING(50),
      isdefault: DataTypes.STRING(50),
      ispay: DataTypes.STRING(50),
      isstock: DataTypes.STRING(50),
      isactive: DataTypes.STRING(50),
      isdel: DataTypes.STRING(50),
      isused: DataTypes.STRING(50),
    },
    {}
  ),
  StandardModel.buildStandardModelInformation('ix_payment_term_dt', 'IxPaymentTermDt', sequelize)
);

export {
  IxPaymentTerm,
  IxPaymentTermDt
};

