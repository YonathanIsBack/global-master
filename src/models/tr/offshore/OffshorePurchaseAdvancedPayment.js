import { DataTypes } from 'sequelize';
import DatabaseConnectionSingleton from '../../../configs/DatabaseConnection.js';
import StandardModel from '../../StandardModel.js';
const sequelize = DatabaseConnectionSingleton.getConnection();

class OffshorePurchaseAdvancedPayment extends StandardModel { }
class OffshorePurchaseAdvancedPaymentReject extends StandardModel { }
class OffshorePurchaseAdvancedPaymentRequest extends StandardModel { }

OffshorePurchaseAdvancedPayment.init(
  StandardModel.buildPropertyWithOptions(
    {
      ...StandardModel.buildPrimaryKey('offshorePurchaseAdvpayId', DataTypes.BIGINT),
      offshorePurchaseOrderId: DataTypes.BIGINT,
      offshorePurchaseOrderCode: DataTypes.STRING(150),
      offshorePurchaseAdvpayCode: DataTypes.STRING(150),
      offshorePurchaseAdvpayCodeTemp: DataTypes.STRING(150),
      offshorePurchaseAdvpayDate: DataTypes.DATEONLY,
      traceId: DataTypes.STRING(150),
      coaId: DataTypes.BIGINT,
      currencyId: DataTypes.BIGINT,
      currencyRate: DataTypes.DOUBLE,
      supplierId: DataTypes.BIGINT,
      supplierBankId: DataTypes.BIGINT,
      supplierBankAccountNo: DataTypes.STRING(100),
      supplierBankAccountName: DataTypes.STRING(150),
      bankId: DataTypes.BIGINT,
      bankCompanyId: DataTypes.BIGINT,
      bankAccountNo: DataTypes.STRING(150),
      bankAccountName: DataTypes.STRING(150),
      reffNumber: DataTypes.STRING(150),
      notes: DataTypes.TEXT,
      percentOrder: DataTypes.FLOAT,
      totalOrder: DataTypes.DOUBLE,
      totalDp: DataTypes.DOUBLE,
      totalDpUsed: DataTypes.DOUBLE,
      persenVat: DataTypes.FLOAT,
      totalVat: DataTypes.DOUBLE,
      total: DataTypes.DOUBLE,
      statusNext: DataTypes.TINYINT,
      isedit: DataTypes.TINYINT,
      status: DataTypes.TINYINT,
      confirmtime: DataTypes.DATE,
      confirmby: DataTypes.BIGINT,
      confirmtimeF: DataTypes.DATE,
      confirmbyF: DataTypes.BIGINT,
    },
    { withCreate: true, withModify: true }
  ),
  StandardModel.buildStandardModelInformation('tr_offshore_purchase_advanced_payment', 'OffshorePurchaseAdvancedPayment', sequelize)
);

OffshorePurchaseAdvancedPaymentReject.init(
  StandardModel.buildPropertyWithOptions(
    {
      ...StandardModel.buildPrimaryKey('offshorePurchaseAdvancedPayment', DataTypes.BIGINT),
      offshorePurchaseAdvpayId: DataTypes.BIGINT,
      note: DataTypes.TEXT,
      userId: DataTypes.BIGINT
    },
    { withCreate: true }
  ),
  StandardModel.buildStandardModelInformation(
    'tr_offshore_purchase_advanced_payment_reject',
    'OffshorePurchaseAdvancedPaymentReject',
    sequelize
  )
);

OffshorePurchaseAdvancedPaymentRequest.init(
  StandardModel.buildPropertyWithOptions(
    {
      ...StandardModel.buildPrimaryKey('offshorePurchaseAdvancedPayment', DataTypes.BIGINT),
      offshorePurchaseAdvpayId: DataTypes.BIGINT,
      statusRequest: DataTypes.INTEGER,
      note: DataTypes.TEXT,
      userId: DataTypes.BIGINT
    },
    { withCreate: true }
  ),
  StandardModel.buildStandardModelInformation(
    'tr_offshore_purchase_advanced_payment_request',
    'OffshorePurchaseAdvancedPaymentRequest',
    sequelize
  )
);

export {
  OffshorePurchaseAdvancedPayment as OffshorePurchaseAdvancePayment,
  OffshorePurchaseAdvancedPaymentReject as OffshorePurchaseAdvancePaymentReject,
  OffshorePurchaseAdvancedPaymentRequest as OffshorePurchaseAdvancePaymentRequest
};
