import { DataTypes } from 'sequelize';
import DatabaseConnectionSingleton from '../../../configs/DatabaseConnection.js';
import StandardModel from '../../StandardModel.js';
const sequelize = DatabaseConnectionSingleton.getConnection();

class ImportAdvancedPayment extends StandardModel {}
class ImportAdvancedPaymentDt extends StandardModel {}
class ImportAdvancedPaymentReject extends StandardModel {}
class ImportAdvancedPaymentRequest extends StandardModel {}

ImportAdvancedPayment.init(
  StandardModel.buildPropertyWithOptions(
    {
      ...StandardModel.buildPrimaryKey('importAdvpayId', DataTypes.BIGINT),
      traceId: DataTypes.STRING(150),
      companyId: DataTypes.BIGINT,
      importOrderId: DataTypes.BIGINT,
      importOrderCode: DataTypes.STRING(50),
      importAdvpayCode: DataTypes.STRING(50),
      importAdvpayCodeTemp: DataTypes.STRING(50),
      importAdvpayDate: DataTypes.DATE,
      coaId: DataTypes.BIGINT,
      supplierId: DataTypes.INTEGER,
      supplierBankId: DataTypes.INTEGER,
      supplierBankAccountNo: DataTypes.STRING(25),
      supplierBankAccountName: DataTypes.STRING(150),
      bankId: DataTypes.INTEGER,
      bankCompanyId: DataTypes.INTEGER,
      bankAccountNo: DataTypes.STRING(25),
      bankAccountName: DataTypes.STRING(150),
      taxNo: DataTypes.STRING(25),
      reffNumber: DataTypes.STRING(150),
      memoNumber: DataTypes.STRING(150),
      currencyId: DataTypes.INTEGER,
      currencyRate: DataTypes.DOUBLE,
      percentOrder: DataTypes.DOUBLE,
      totalOrder: DataTypes.DOUBLE,
      totalDp: DataTypes.DOUBLE,
      totalDpUsed: DataTypes.DOUBLE,
      persenVat: DataTypes.FLOAT,
      totalVat: DataTypes.DOUBLE,
      total: DataTypes.DOUBLE,
      status: DataTypes.TINYINT,
      statusNext: DataTypes.TINYINT,
      type: DataTypes.STRING(20),
      notes: DataTypes.TEXT,
      isedit: DataTypes.TINYINT,
      isvat: DataTypes.TINYINT,
      confirmtime: DataTypes.DATE,
      confirmby: DataTypes.INTEGER,
      confirmtimeF: DataTypes.DATE,
      confirmbyF: DataTypes.INTEGER
    },
    { withCreate: true, withModify: true }
  ),
  StandardModel.buildStandardModelInformation(
    'tr_import_advanced_payment',
    'ImportAdvancedPayment',
    sequelize
  )
);

ImportAdvancedPaymentDt.init(
  StandardModel.buildPropertyWithOptions(
    {
      ...StandardModel.buildPrimaryKey('importAdvpayDtId', DataTypes.BIGINT),
      importAdvpayId: DataTypes.BIGINT,
      date: DataTypes.DATE,
      amount: DataTypes.DOUBLE
    },
    { withCreate: true, withModify: true }
  ),
  StandardModel.buildStandardModelInformation(
    'tr_import_advanced_payment_dt',
    'ImportAdvancedPaymentDt',
    sequelize
  )
);

ImportAdvancedPaymentReject.init(
  StandardModel.buildPropertyWithOptions(
    {
      ...StandardModel.buildPrimaryKey('importAdvancedPaymentRejectId', DataTypes.BIGINT),
      importAdvancedPaymentId: DataTypes.BIGINT,
      note: DataTypes.TEXT,
      userId: DataTypes.BIGINT
    },
    { withCreate: true }
  ),
  StandardModel.buildStandardModelInformation(
    'tr_import_advanced_payment_reject',
    'ImportAdvancedPaymentReject',
    sequelize
  )
);

ImportAdvancedPaymentRequest.init(
  StandardModel.buildPropertyWithOptions(
    {
      ...StandardModel.buildPrimaryKey('importAdvancedPaymentRequestId', DataTypes.BIGINT),
      importAdvancedPaymentId: DataTypes.BIGINT,
      note: DataTypes.TEXT,
      statusRequest: DataTypes.INTEGER,
      userId: DataTypes.BIGINT
    },
    { withCreate: true }
  ),
  StandardModel.buildStandardModelInformation(
    'tr_import_advanced_payment_request',
    'ImportAdvancedPaymentRequest',
    sequelize
  )
);
export {
  ImportAdvancedPayment,
  ImportAdvancedPaymentDt,
  ImportAdvancedPaymentReject,
  ImportAdvancedPaymentRequest
};
