import { DataTypes } from 'sequelize';
import DatabaseConnectionSingleton from '../../../configs/DatabaseConnection.js';
import StandardModel from '../../StandardModel.js';
const sequelize = DatabaseConnectionSingleton.getConnection();

class PurchaseAdvancePayment extends StandardModel {}
class PurchaseAdvancePaymentDt extends StandardModel {}
class PurchaseAdvancePaymentImg extends StandardModel {}
class PurchaseAdvancePaymentReject extends StandardModel {}
class PurchaseAdvancePaymentRequest extends StandardModel {}

PurchaseAdvancePayment.init(
  StandardModel.buildPropertyWithOptions(
    {
      ...StandardModel.buildPrimaryKey('purchaseAdvpayId', DataTypes.BIGINT),
      purchaseOrderId: DataTypes.BIGINT,
      purchaseOrderCode: DataTypes.STRING(50),
      purchaseAdvpayCode: DataTypes.STRING(50),
      purchaseAdvpayCodeTemp: DataTypes.STRING(50),
      purchaseAdvpayDate: DataTypes.DATE,
      traceId: DataTypes.STRING(150),
      reffNumber: DataTypes.STRING(150),
      memoNumber: DataTypes.STRING(150),
      supplierId: DataTypes.INTEGER,
      supplierBankId: DataTypes.INTEGER,
      supplierBankAccountNo: DataTypes.STRING(25),
      supplierBankAccountName: DataTypes.STRING(150),
      bankId: DataTypes.INTEGER,
      bankCompanyId: DataTypes.INTEGER,
      bankAccountNo: DataTypes.STRING(25),
      bankAccountName: DataTypes.STRING(150),
      coaId: DataTypes.BIGINT,
      taxNo: DataTypes.STRING(25),
      currencyId: DataTypes.INTEGER,
      currencyRate: DataTypes.DOUBLE,
      percentOrder: DataTypes.DOUBLE,
      totalOrder: DataTypes.DOUBLE,
      totalDp: DataTypes.DOUBLE,
      totalDpUsed: DataTypes.DOUBLE,
      persenVat: DataTypes.FLOAT,
      totalVat: DataTypes.DOUBLE,
      total: DataTypes.DOUBLE,
      totalAfterVat: DataTypes.DOUBLE,
      status: DataTypes.TINYINT,
      statusNext: DataTypes.TINYINT,
      type: DataTypes.STRING(10),
      notes: DataTypes.TEXT,
      isedit: DataTypes.TINYINT,
      confirmtime: DataTypes.DATE,
      confirmby: DataTypes.INTEGER,
      confirmtimeF: DataTypes.DATE,
      confirmbyF: DataTypes.INTEGER
    },
    { withCreate: true, withModify: true }
  ),
  StandardModel.buildStandardModelInformation(
    'tr_purchase_advanced_payment',
    'PurchaseAdvancedPayment',
    sequelize
  )
);

PurchaseAdvancePaymentDt.init(
  StandardModel.buildPropertyWithOptions(
    {
      ...StandardModel.buildPrimaryKey('purchaseAdvpayDtId', DataTypes.BIGINT),
      purchaseAdvpayId: DataTypes.BIGINT,
      purchaseAdvpayCode: DataTypes.STRING(50),
      date: DataTypes.DATE,
      amount: DataTypes.DOUBLE
    },
    {}
  ),
  StandardModel.buildStandardModelInformation(
    'tr_purchase_advanced_payment_dt',
    'PurchaseAdvancedPaymentDt',
    sequelize
  )
);

PurchaseAdvancePaymentImg.init(
  StandardModel.buildPropertyWithOptions(
    {
      ...StandardModel.buildPrimaryKey('purchaseAdvpayImgId', DataTypes.BIGINT),
      purchaseAdvpayId: DataTypes.BIGINT,
      imgName: DataTypes.STRING(150),
      urlImg: DataTypes.STRING(500)
    },
    { withCreate: true, withModify: true }
  ),
  StandardModel.buildStandardModelInformation(
    'tr_purchase_advanced_payment_img',
    'PurchaseAdvancedPaymentImg',
    sequelize
  )
);

PurchaseAdvancePaymentReject.init(
  StandardModel.buildPropertyWithOptions(
    {
      ...StandardModel.buildPrimaryKey('purchaseAdvancedPaymentRejectId', DataTypes.BIGINT),
      purchaseAdvancedPaymentId: DataTypes.BIGINT,
      note: DataTypes.TEXT,
      userId: DataTypes.BIGINT
    },
    { withCreateString: true }
  ),
  StandardModel.buildStandardModelInformation(
    'tr_purchase_advanced_payment_reject',
    'PurchaseAdvancedPaymentReject',
    sequelize
  )
);

PurchaseAdvancePaymentRequest.init(
  StandardModel.buildPropertyWithOptions(
    {
      ...StandardModel.buildPrimaryKey('purchaseAdvancedPaymentRequestId', DataTypes.BIGINT),
      purchaseAdvancedPaymentId: DataTypes.BIGINT,
      note: DataTypes.TEXT,
      userId: DataTypes.BIGINT
    },
    { withCreateString: true }
  ),
  StandardModel.buildStandardModelInformation(
    'tr_purchase_advanced_payment_request',
    'PurchaseAdvancedPaymentRequest',
    sequelize
  )
);

export {
  PurchaseAdvancePayment,
  PurchaseAdvancePaymentDt,
  PurchaseAdvancePaymentImg,
  PurchaseAdvancePaymentReject,
  PurchaseAdvancePaymentRequest
};
