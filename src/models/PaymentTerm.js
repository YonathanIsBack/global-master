import { DataTypes } from 'sequelize';
import DatabaseConnectionSingleton from '../configs/DatabaseConnection.js';
import StandardModel from './StandardModel.js';
const sequelize = DatabaseConnectionSingleton.getConnection();

class PaymentTerm extends StandardModel { }

PaymentTerm.init(
  StandardModel.buildPropertyWithOptions(
    {
      ...StandardModel.buildPrimaryKey('paymentTermId', DataTypes.BIGINT),
      paymentTermName: DataTypes.STRING(25),
      dueDate: DataTypes.INTEGER,
      earlyPaymentDays: DataTypes.TINYINT,
      earlyPaymentDisc: DataTypes.FLOAT,
      isdefault: DataTypes.TINYINT,
      ispay: DataTypes.TINYINT
    },
    { withIsactive: true, withIsdel: true, withIsused: true, withCreate: true, withModify: true }
  ),
  StandardModel.buildStandardModelInformation('ms_payment_term', 'PaymentTerm', sequelize)
);

export default PaymentTerm;
