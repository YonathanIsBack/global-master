import { DataTypes } from 'sequelize';
import DatabaseConnectionSingleton from '../../../configs/DatabaseConnection.js';
import StandardModel from '../../StandardModel.js';
const sequelize = DatabaseConnectionSingleton.getConnection();

class SalesDeposit extends StandardModel {}
class SalesDepositReject extends StandardModel {}
class SalesDepositRequest extends StandardModel {}

SalesDeposit.init(
  StandardModel.buildPropertyWithOptions(
    {
      ...StandardModel.buildPrimaryKey('salesDepositId', DataTypes.BIGINT),
      salesDepositCode: DataTypes.STRING(50),
      salesDepositCodeTemp: DataTypes.STRING(50),
      salesDepositDate: DataTypes.DATEONLY,
      salesDepositCloseDate: DataTypes.DATEONLY,
      traceId: DataTypes.STRING(150),
      customerId: DataTypes.INTEGER,
      note: DataTypes.STRING(2000),
      deposit: DataTypes.DOUBLE,
      used: DataTypes.DOUBLE,
      coaId: DataTypes.BIGINT,
      coaSubleadgerId: DataTypes.BIGINT,
      coaIdTo: DataTypes.BIGINT,
      coaSubleadgerIdTo: DataTypes.BIGINT,
      paymentType: DataTypes.TINYINT,
      status: DataTypes.TINYINT,
      statusNext: DataTypes.TINYINT,
      confirmtime: DataTypes.DATE,
      confirmby: DataTypes.INTEGER,
      isedit: DataTypes.TINYINT,
      confirmtimeF: DataTypes.DATE,
      confirmbyF: DataTypes.INTEGER
    },
    { withCreate: true, withModify: true }
  ),
  StandardModel.buildStandardModelInformation('tr_sales_deposit', 'salesDeposit', sequelize)
);

SalesDepositReject.init(
  StandardModel.buildPropertyWithOptions(
    {
      ...StandardModel.buildPrimaryKey('salesDepositRejectId', DataTypes.BIGINT),
      salesDepositId: DataTypes.BIGINT,
      note: DataTypes.TEXT,
      userId: DataTypes.BIGINT
    },
    { withCreateString: true }
  ),
  StandardModel.buildStandardModelInformation('tr_sales_deposit_reject', 'salesDepositReject', sequelize)
);

SalesDepositRequest.init(
  StandardModel.buildPropertyWithOptions(
    {
      ...StandardModel.buildPrimaryKey('salesDepositRequestId', DataTypes.BIGINT),
      salesDepositId: DataTypes.BIGINT,
      note: DataTypes.TEXT,
      statusRequest: DataTypes.INTEGER,
      userId: DataTypes.BIGINT
    },
    { withCreateString: true }
  ),
  StandardModel.buildStandardModelInformation('tr_sales_deposit_request', 'salesDepositRequest', sequelize)
);

export { SalesDeposit, SalesDepositReject, SalesDepositRequest };
