import { DataTypes } from 'sequelize';
import DatabaseConnectionSingleton from '../configs/DatabaseConnection.js';
import StandardModel from './StandardModel.js';
const sequelize = DatabaseConnectionSingleton.getConnection();

class TransCode extends StandardModel {}
class TransCodeGroup extends StandardModel {}
class TransactionCode extends StandardModel {}
class NoTransaction extends StandardModel {}

TransCode.init(
  StandardModel.buildPropertyWithOptions(
    {
      ...StandardModel.buildPrimaryKey('transCodeId', DataTypes.BIGINT),
      transCodeGroupId: DataTypes.BIGINT,
      transCodeName: DataTypes.STRING(200),
      transCode: DataTypes.STRING(500),
      numberNow: DataTypes.INTEGER
    },
    { withCreate: true, withModify: true }
  ),
  StandardModel.buildStandardModelInformation('ms_trans_code', 'TransCode', sequelize)
);

TransCodeGroup.init(
  StandardModel.buildPropertyWithOptions(
    {
      ...StandardModel.buildPrimaryKey('transCodeGroupId', DataTypes.BIGINT),
      transCodeGroupName: DataTypes.STRING(50)
    },
    { withIsactive: true, withCreate: true, withModify: true }
  ),
  StandardModel.buildStandardModelInformation('ms_trans_code_group', 'TransCodeGroup', sequelize)
);

TransactionCode.init(
  StandardModel.buildPropertyWithOptions(
    {
      ...StandardModel.buildPrimaryKey('transactionCodeId', DataTypes.BIGINT),
      companyParentId: DataTypes.INTEGER,
      pQuote: DataTypes.STRING(200),
      pOrder: DataTypes.STRING(200),
      pReciept: DataTypes.STRING(200),
      pInvoice: DataTypes.STRING(200),
      pInvoiceDirect: DataTypes.STRING(200),
      pReturn: DataTypes.STRING(200),
      pPayment: DataTypes.STRING(200),
      pAdvancePayment: DataTypes.STRING(200),
      iQuote: DataTypes.STRING(200),
      iOrder: DataTypes.STRING(200),
      iReciept: DataTypes.STRING(200),
      iInvoice: DataTypes.STRING(200),
      iStockTransfer: DataTypes.STRING(200),
      iClearance: DataTypes.STRING(200),
      iReturn: DataTypes.STRING(200),
      iPayment: DataTypes.STRING(200),
      iAdvancePayment: DataTypes.STRING(200),
      sQuote: DataTypes.STRING(200),
      sOrder: DataTypes.STRING(200),
      sDeliveryNote: DataTypes.STRING(200),
      sDeliveryFixed: DataTypes.STRING(200),
      sInvoice: DataTypes.STRING(200),
      sInvoiceDirect: DataTypes.STRING(200),
      sDeposit: DataTypes.STRING(200),
      sReciept: DataTypes.STRING(200),
      sReturn: DataTypes.STRING(200),
      sContract: DataTypes.STRING(200),
      eQuote: DataTypes.STRING(200),
      eOrder: DataTypes.STRING(200),
      ePackingList: DataTypes.STRING(200),
      eInvoice: DataTypes.STRING(200),
      eDeposit: DataTypes.STRING(200),
      eReciept: DataTypes.STRING(200),
      eReturn: DataTypes.STRING(200),
      oQuote: DataTypes.STRING(200),
      oOrder: DataTypes.STRING(200),
      oPackingList: DataTypes.STRING(200),
      oInvoice: DataTypes.STRING(200),
      oDeposit: DataTypes.STRING(200),
      oReciept: DataTypes.STRING(200),
      oReturn: DataTypes.STRING(200),
      isTransfer: DataTypes.STRING(200),
      isOpnameOrder: DataTypes.STRING(200),
      isOpnameResult: DataTypes.STRING(200),
      isAdjustment: DataTypes.STRING(200),
      fAdjustment: DataTypes.STRING(200),
      pcIn: DataTypes.STRING(200),
      pcOut: DataTypes.STRING(200),
      bIn: DataTypes.STRING(200),
      bOut: DataTypes.STRING(200),
      jGeneral: DataTypes.STRING(200),
      jDeferal: DataTypes.STRING(200),
      jPrepaid: DataTypes.STRING(200),
      jUndentifiedReciept: DataTypes.STRING(200),
      aPurchase: DataTypes.STRING(200),
      aPaymentRegister: DataTypes.STRING(200),
      aTransfer: DataTypes.STRING(200),
      aWriteOff: DataTypes.STRING(200),
      icCombo: DataTypes.STRING(200)
    },
    { withDbId: true }
  ),
  StandardModel.buildStandardModelInformation('ms_transaction_code', 'TransactionCode', sequelize)
);

NoTransaction.init(
  StandardModel.buildPropertyWithOptions(
    {
      ...StandardModel.buildPrimaryKey('noTransactionId', DataTypes.BIGINT),
      noTransactionName: DataTypes.STRING(50),
      noTransactionPrefix: DataTypes.STRING(25),
      digit: DataTypes.TINYINT,
      resetTime: DataTypes.TINYINT
    },
    { withCreate: true, withModify: true }
  ),
  StandardModel.buildStandardModelInformation('no_transaction', 'NoTransaction', sequelize)
);

export { TransactionCode, TransCode, TransCodeGroup, NoTransaction };
