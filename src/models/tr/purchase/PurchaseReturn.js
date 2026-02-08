import { DataTypes } from 'sequelize';
import DatabaseConnectionSingleton from '../../../configs/DatabaseConnection.js';
import StandardModel from '../../StandardModel.js';
const sequelize = DatabaseConnectionSingleton.getConnection();

class PurchaseReturn extends StandardModel {}
class PurchaseReturnDt extends StandardModel {}
class PurchaseReturnImg extends StandardModel {}
class PurchaseReturnItemDt extends StandardModel {}
class PurchaseReturnReject extends StandardModel {}
class PurchaseReturnRequest extends StandardModel {}

PurchaseReturn.init(
  StandardModel.buildPropertyWithOptions(
    {
      ...StandardModel.buildPrimaryKey('purchaseReturnId', DataTypes.BIGINT),
      purchaseReturnCode: DataTypes.STRING(50),
      purchaseReturnCodeTemp: DataTypes.STRING(50),
      purchaseReturnDate: DataTypes.DATE,
      traceId: DataTypes.STRING(150),
      warehouseId: DataTypes.INTEGER,
      supplierId: DataTypes.INTEGER,
      currencyId: DataTypes.INTEGER,
      currencyRate: DataTypes.DOUBLE,
      purchaseInvId: DataTypes.DOUBLE,
      purchaseInvCode: DataTypes.STRING(25),
      purchaseInvDate: DataTypes.DATEONLY,
      paymentMethod: DataTypes.DOUBLE,
      coaId: DataTypes.INTEGER,
      isvat: DataTypes.INTEGER,
      notes: DataTypes.TEXT,
      totalQty: DataTypes.DOUBLE,
      subtotal: DataTypes.DOUBLE,
      discPersen: DataTypes.FLOAT,
      discAmount: DataTypes.DOUBLE,
      discPersen2: DataTypes.FLOAT,
      discAmount2: DataTypes.DOUBLE,
      discPersen3: DataTypes.FLOAT,
      discAmount3: DataTypes.DOUBLE,
      vatPersen: DataTypes.FLOAT,
      vatAmount: DataTypes.FLOAT,
      taxPersen: DataTypes.FLOAT,
      taxAmount: DataTypes.DOUBLE,
      total: DataTypes.DOUBLE,
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
  StandardModel.buildStandardModelInformation('tr_purchase_return', 'PurchaseReturn', sequelize)
);

PurchaseReturnDt.init(
  StandardModel.buildPropertyWithOptions(
    {
      ...StandardModel.buildPrimaryKey('purchaseReturnDtId', DataTypes.BIGINT),
      purchaseReturnId: DataTypes.BIGINT,
      purchaseOrderDtId: DataTypes.BIGINT,
      purchaseOrderCode: DataTypes.STRING(150),
      purchaseInvDtId: DataTypes.BIGINT,
      purchaseInvId: DataTypes.BIGINT,
      purchaseInvCode: DataTypes.STRING(25),
      itemId: DataTypes.INTEGER,
      itemCode: DataTypes.STRING(50),
      itemName: DataTypes.STRING(150),
      qty: DataTypes.DOUBLE,
      price: DataTypes.DOUBLE,
      price2: DataTypes.DOUBLE,
      priceAvg: DataTypes.DOUBLE,
      discPersen: DataTypes.FLOAT,
      discAmount: DataTypes.DOUBLE,
      discPersen2: DataTypes.FLOAT,
      discAmount2: DataTypes.DOUBLE,
      disc3: DataTypes.DOUBLE,
      taxPersen: DataTypes.FLOAT,
      taxAmount: DataTypes.DOUBLE,
      adjInv: DataTypes.DOUBLE,
      adjInvPcs: DataTypes.DOUBLE,
      adjInvType: DataTypes.TINYINT,
      total: DataTypes.DOUBLE,
      isreturn: DataTypes.TINYINT
    },
    {}
  ),
  StandardModel.buildStandardModelInformation(
    'tr_purchase_return_dt',
    'PurchaseReturnDt',
    sequelize
  )
);

PurchaseReturnImg.init(
  StandardModel.buildPropertyWithOptions(
    {
      ...StandardModel.buildPrimaryKey('purchaseReturnImgId', DataTypes.BIGINT),
      imgName: DataTypes.BIGINT,
      urlImg: DataTypes.BIGINT
    },
    { withCreat: true, withModify: true }
  ),
  StandardModel.buildStandardModelInformation(
    'tr_purchase_return_img',
    'PurchaseReturnImg',
    sequelize
  )
);

PurchaseReturnItemDt.init(
  StandardModel.buildPropertyWithOptions(
    {
      ...StandardModel.buildPrimaryKey('purchaseReturnItemDtId', DataTypes.BIGINT),
      purchaseReturnDtId: DataTypes.BIGINT,
      purchaseReturnId: DataTypes.BIGINT,
      itemStockDtId: DataTypes.BIGINT,
      purchaseInvItemDtId: DataTypes.BIGINT,
      itemId: DataTypes.BIGINT,
      expDay: DataTypes.STRING(11),
      expMonth: DataTypes.STRING(11),
      expYear: DataTypes.STRING(11),
      qty: DataTypes.DOUBLE
    },
    {}
  ),
  StandardModel.buildStandardModelInformation(
    'tr_purchase_return_item_dt',
    'PurchaseReturnItemDt',
    sequelize
  )
);

PurchaseReturnReject.init(
  StandardModel.buildPropertyWithOptions(
    {
      ...StandardModel.buildPrimaryKey('purchaseReturnRejectId', DataTypes.BIGINT),
      purchaseReturnId: DataTypes.BIGINT,
      note: DataTypes.TEXT,
      userId: DataTypes.BIGINT
    },
    { withCreateString: true }
  ),
  StandardModel.buildStandardModelInformation(
    'tr_purchase_return_reject',
    'PurchaseReturnReject',
    sequelize
  )
);

PurchaseReturnRequest.init(
  StandardModel.buildPropertyWithOptions(
    {
      ...StandardModel.buildPrimaryKey('purchaseReturnRequestId', DataTypes.BIGINT),
      purchaseReturnId: DataTypes.BIGINT,
      note: DataTypes.TEXT,
      statusRequest: DataTypes.INTEGER,
      note: DataTypes.TEXT,
      userId: DataTypes.BIGINT
    },
    { withCreateString: true }
  ),
  StandardModel.buildStandardModelInformation(
    'tr_purchase_return_request',
    'PurchaseReturnRequest',
    sequelize
  )
);

export {
  PurchaseReturn,
  PurchaseReturnDt,
  PurchaseReturnItemDt,
  PurchaseReturnReject,
  PurchaseReturnRequest
};
