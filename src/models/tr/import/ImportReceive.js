import { DataTypes } from 'sequelize';
import DatabaseConnectionSingleton from '../../../configs/DatabaseConnection.js';
import StandardModel from '../../StandardModel.js';
const sequelize = DatabaseConnectionSingleton.getConnection();

class ImportReceive extends StandardModel {}
class ImportReceiveDt extends StandardModel {}
class ImportReceiveItemDt extends StandardModel {}
class ImportReceiveReject extends StandardModel {}
class ImportReceiveRequest extends StandardModel {}

ImportReceive.init(
  StandardModel.buildPropertyWithOptions(
    {
      ...StandardModel.buildPrimaryKey('importReceiveId', DataTypes.BIGINT),
      importReceiveCode: DataTypes.STRING(50),
      importReceiveCodeTemp: DataTypes.STRING(50),
      importReceiveDate: DataTypes.DATE,
      importOrderId: DataTypes.BIGINT,
      importOrderCode: DataTypes.STRING(50),
      supplierInvNo: DataTypes.STRING(150),
      supplierInvDate: DataTypes.DATEONLY,
      traceId: DataTypes.STRING(150),
      supplierId: DataTypes.INTEGER,
      warehouseId: DataTypes.INTEGER,
      paymentTermId: DataTypes.INTEGER,
      shippingId: DataTypes.INTEGER,
      shipping: DataTypes.TEXT,
      shippingNo: DataTypes.STRING(50),
      shippingDate: DataTypes.DATEONLY,
      currencyId: DataTypes.INTEGER,
      currencyRate: DataTypes.DOUBLE,
      driver: DataTypes.STRING(50),
      ajuDate: DataTypes.DATE,
      ajuNumber: DataTypes.STRING(50),
      bc_16: DataTypes.STRING(150),
      bc_status: DataTypes.STRING(150),
      bc_16_rn: DataTypes.STRING(150),
      blNumber: DataTypes.STRING(150),
      licensePlate: DataTypes.STRING(15),
      note: DataTypes.TEXT,
      status: DataTypes.TINYINT,
      statusNext: DataTypes.TINYINT,
      isFinish: DataTypes.DOUBLE,
      isvat: DataTypes.TINYINT,
      port: DataTypes.STRING(150),
      method: DataTypes.STRING(150),
      totalPacking: DataTypes.DOUBLE,
      destination: DataTypes.STRING(250),
      containerSize: DataTypes.STRING(150),
      grossWeight: DataTypes.STRING(150),
      regisNumber: DataTypes.STRING(150),
      customesOffice: DataTypes.STRING(200),
      submissionNumber: DataTypes.STRING(150),
      storageLocation: DataTypes.STRING(150),
      regisDate: DataTypes.DATEONLY,
      submissionDate: DataTypes.DATE,
      totalQty: DataTypes.DOUBLE,
      subtotal: DataTypes.DOUBLE,
      // discPersen: DataTypes.FLOAT,
      // discAmount: DataTypes.DOUBLE,
      // discPersen2: DataTypes.FLOAT,
      // discAmount2: DataTypes.DOUBLE,
      // discPersen3: DataTypes.FLOAT,
      // discAmount3: DataTypes.DOUBLE,
      // taxPersen: DataTypes.FLOAT,
      // taxAmount: DataTypes.DOUBLE,
      total: DataTypes.DOUBLE,
      totalInv: DataTypes.DOUBLE,
      totalPayFinish: DataTypes.DOUBLE,
      confirmtime: DataTypes.DATE,
      confirmby: DataTypes.INTEGER,
      isedit: DataTypes.TINYINT,
      is_bc_16: DataTypes.TINYINT,
      confirmtimeF: DataTypes.DATE,
      confirmbyF: DataTypes.INTEGER
    },
    { withCreate: true, withModify: true }
  ),
  StandardModel.buildStandardModelInformation('tr_import_receive', 'ImportReceive', sequelize)
);

ImportReceiveDt.init(
  StandardModel.buildPropertyWithOptions(
    {
      ...StandardModel.buildPrimaryKey('importReceiveDtId', DataTypes.BIGINT),
      importReceiveId: DataTypes.BIGINT,
      importOrderId: DataTypes.BIGINT,
      importOrderDtId: DataTypes.BIGINT,
      importOrderCode: DataTypes.STRING(25),
      itemId: DataTypes.INTEGER,
      itemCode: DataTypes.STRING(50),
      itemName: DataTypes.STRING(150),
      itemPack: DataTypes.DOUBLE,
      qty: DataTypes.DOUBLE,
      qtyIt: DataTypes.DOUBLE,
      qtyIi: DataTypes.DOUBLE,
      qtyOrder: DataTypes.DOUBLE,
      price: DataTypes.DOUBLE,
      price2: DataTypes.DOUBLE,
      priceAvg: DataTypes.DOUBLE,
      pricePack: DataTypes.DOUBLE,
      currencyId: DataTypes.INTEGER,
      currencyRate: DataTypes.DOUBLE,
      // discPersen: DataTypes.FLOAT,
      // discAmount: DataTypes.DOUBLE,
      // discPersen2: DataTypes.FLOAT,
      // discAmount2: DataTypes.DOUBLE,
      // disc3: DataTypes.DOUBLE,
      // taxPersen: DataTypes.FLOAT,
      // taxAmount: DataTypes.DOUBLE,
      adjInvType: DataTypes.INTEGER,
      adjInv: DataTypes.DOUBLE,
      total: DataTypes.DOUBLE
    },
    {}
  ),
  StandardModel.buildStandardModelInformation('tr_import_receive_dt', 'ImportReceiveDt', sequelize)
);

ImportReceiveItemDt.init(
  StandardModel.buildPropertyWithOptions(
    {
      ...StandardModel.buildPrimaryKey('importReceiveItemDtId', DataTypes.BIGINT),
      importReceiveDtId: DataTypes.BIGINT,
      importReceiveId: DataTypes.BIGINT,
      importOrderItemDtId: DataTypes.BIGINT,
      itemId: DataTypes.BIGINT,
      itemPack: DataTypes.DOUBLE,
      expDay: DataTypes.STRING(11),
      expMonth: DataTypes.STRING(11),
      expYear: DataTypes.STRING(11),
      qty: DataTypes.DOUBLE,
      qtyI: DataTypes.DOUBLE,
      qtySt: DataTypes.DOUBLE
    },
    {}
  ),
  StandardModel.buildStandardModelInformation(
    'tr_import_receive_item_dt',
    'ImportReceiveItemDt',
    sequelize
  )
);

ImportReceiveReject.init(
  StandardModel.buildPropertyWithOptions(
    {
      ...StandardModel.buildPrimaryKey('importReceiveRejectId', DataTypes.BIGINT),
      importReceiveId: DataTypes.BIGINT,
      note: DataTypes.TEXT,
      userId: DataTypes.BIGINT
    },
    { withCreateString: true }
  ),
  StandardModel.buildStandardModelInformation(
    'tr_import_receive_reject',
    'ImportReceiveReject',
    sequelize
  )
);

ImportReceiveRequest.init(
  StandardModel.buildPropertyWithOptions(
    {
      ...StandardModel.buildPrimaryKey('importReceiveRequestId', DataTypes.BIGINT),
      importReceiveId: DataTypes.BIGINT,
      note: DataTypes.TEXT,
      statusRequest: DataTypes.INTEGER,
      userId: DataTypes.BIGINT
    },
    { withCreateString: true }
  ),
  StandardModel.buildStandardModelInformation(
    'tr_import_receive_request',
    'ImportReceiveRequest',
    sequelize
  )
);
export {
  ImportReceive,
  ImportReceiveDt,
  ImportReceiveItemDt,
  ImportReceiveReject,
  ImportReceiveRequest
};
