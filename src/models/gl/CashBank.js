import { DataTypes } from 'sequelize';
import StandardModel from '../StandardModel.js';
import DatabaseConnectionSingleton from '../../configs/DatabaseConnection.js';

const sequelize = DatabaseConnectionSingleton.getConnection();

class CashBank extends StandardModel { }
class CashBankDt extends StandardModel { }
class CashBankImg extends StandardModel { }
class CashBankReject extends StandardModel { }
class CashBankRequest extends StandardModel { }

CashBank.init(
  StandardModel.buildPropertyWithOptions(
    {
      ...StandardModel.buildPrimaryKey('glCashBankId', DataTypes.BIGINT),
      glCashBankCode: DataTypes.STRING(50),
      glCashBankCodeTemp: DataTypes.STRING(50),
      glCashBankDate: DataTypes.DATE,
      type: DataTypes.TINYINT,
      departmentId: DataTypes.INTEGER,
      coaId: DataTypes.BIGINT,
      from: DataTypes.TEXT,
      reff: DataTypes.STRING(500),
      note: DataTypes.TEXT,
      paymentMethod: DataTypes.TINYINT,
      accountNo: DataTypes.STRING(50),
      currencyId: DataTypes.INTEGER,
      currencyRate: DataTypes.DOUBLE,
      isrecurring: DataTypes.TINYINT,
      recurringName: DataTypes.STRING(150),
      total: DataTypes.DOUBLE,
      status: DataTypes.TINYINT,
      statusNext: DataTypes.TINYINT,
      isedit: DataTypes.TINYINT,
      confirmtime: DataTypes.DATE,
      confirmby: DataTypes.INTEGER,
      confirmtimeF: DataTypes.DATE,
      confirmbyF: DataTypes.INTEGER
    },
    { withCreate: true, withModify: true }
  ),
  StandardModel.buildStandardModelInformation('gl_cash_bank', 'CashBank', sequelize)
);

CashBankDt.init(
  StandardModel.buildPropertyWithOptions(
    {
      ...StandardModel.buildPrimaryKey('glCashBankDtId', DataTypes.BIGINT),
      glCashBankId: DataTypes.BIGINT,
      coaId: DataTypes.BIGINT,
      departmentId: DataTypes.BIGINT,
      supplierId: DataTypes.BIGINT,
      customerId: DataTypes.BIGINT,
      keterangan: DataTypes.TEXT,
      credit: DataTypes.DOUBLE,
      debit: DataTypes.DOUBLE
    },
    {}
  ),
  StandardModel.buildStandardModelInformation('gl_cash_bank_dt', 'CashBankDt', sequelize)
);

CashBankImg.init(
  StandardModel.buildPropertyWithOptions(
    {
      ...StandardModel.buildPrimaryKey('glCashBankImgId', DataTypes.BIGINT),
      glCashBankId: DataTypes.BIGINT,
      imgName: DataTypes.TEXT,
      imgSrc: DataTypes.TEXT,
    },
    { withCreate: true, withModify: true }
  ),
  StandardModel.buildStandardModelInformation('gl_cash_bank_img', 'CashBankImg', sequelize)
);

CashBankReject.init(
  StandardModel.buildPropertyWithOptions(
    {
      ...StandardModel.buildPrimaryKey('cashBankRejectId', DataTypes.BIGINT),
      glCashBankId: DataTypes.BIGINT,
      note: DataTypes.TEXT,
      userId: DataTypes.BIGINT
    },
    { withCreate: true }
  ),
  StandardModel.buildStandardModelInformation('gl_cash_bank_reject', 'CashBankReject', sequelize)
);

CashBankRequest.init(
  StandardModel.buildPropertyWithOptions(
    {
      ...StandardModel.buildPrimaryKey('cashBankRequestId', DataTypes.BIGINT),
      glCashBankId: DataTypes.BIGINT,
      note: DataTypes.TEXT,
      statusRequest: DataTypes.INTEGER,
      userId: DataTypes.BIGINT
    },
    { withCreate: true }
  ),
  StandardModel.buildStandardModelInformation('gl_cash_bank_request', 'CashBankRequest', sequelize)
);

export { CashBank, CashBankDt, CashBankReject, CashBankRequest };
