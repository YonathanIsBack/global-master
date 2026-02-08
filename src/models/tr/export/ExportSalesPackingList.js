import { DataTypes } from 'sequelize';
import DatabaseConnectionSingleton from '../../../configs/DatabaseConnection.js';
import StandardModel from '../../StandardModel.js';
const sequelize = DatabaseConnectionSingleton.getConnection();

class ExportSalesPackingList extends StandardModel {}
class ExportSalesPackingListBc16 extends StandardModel {}
class ExportSalesPackingListDt extends StandardModel {}
class ExportSalesPackingListItemDt extends StandardModel {}
class ExportSalesPackingListReject extends StandardModel {}
class ExportSalesPackingListRequest extends StandardModel {}

ExportSalesPackingList.init(
  StandardModel.buildPropertyWithOptions(
    {
      ...StandardModel.buildPrimaryKey('exportSalesPackingListId', DataTypes.BIGINT),
      exportSalesPackingListCode: DataTypes.STRING(50),
      exportSalesPackingListCodeTemp: DataTypes.STRING(50),
      exportSalesPackingListDate: DataTypes.DATE,
      exportSalesOrderId: DataTypes.STRING(500),
      exportSalesOrderCode: DataTypes.STRING(500),
      traceId: DataTypes.STRING(150),
      customerId: DataTypes.INTEGER,
      creditLimit: DataTypes.DOUBLE,
      paymentTermId: DataTypes.BIGINT,
      customerDeliveryId: DataTypes.BIGINT,
      customerDeliveryAddr: DataTypes.TEXT,
      countryId: DataTypes.BIGINT,
      provinceId: DataTypes.BIGINT,
      cityId: DataTypes.BIGINT,
      districtId: DataTypes.BIGINT,
      subdistrictId: DataTypes.BIGINT,
      sendDate: DataTypes.DATE,
      warehouseId: DataTypes.INTEGER,
      salesmanId: DataTypes.BIGINT,
      shipping: DataTypes.TEXT,
      shippingNo: DataTypes.STRING(50),
      shippingDate: DataTypes.DATE,
      currencyId: DataTypes.INTEGER,
      currencyRate: DataTypes.DOUBLE,
      containerNo: DataTypes.STRING(150),
      sealNo: DataTypes.STRING(150),
      betNo: DataTypes.STRING(150),
      driver: DataTypes.STRING(50),
      ajuDate: DataTypes.DATE,
      ajuNumber: DataTypes.STRING(50),
      bc16: { type: DataTypes.STRING(150), field: 'bc_16' },
      licensePlate: DataTypes.STRING(15),
      note: DataTypes.TEXT,
      status: DataTypes.TINYINT,
      statusNext: DataTypes.TINYINT,
      isFinish: DataTypes.TINYINT,
      isvat: DataTypes.TINYINT,
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
      isBc16: { type: DataTypes.TINYINT, field: 'is_bc_16' },
      confirmtimeF: DataTypes.DATE,
      confirmbyF: DataTypes.INTEGER
    },
    { withCreate: true, withModify: true }
  ),
  StandardModel.buildStandardModelInformation('tr_export_sales_packing_list', 'ExportSalesPackingList', sequelize)
);

ExportSalesPackingListBc16.init(
  StandardModel.buildPropertyWithOptions(
    {
      exportSalesPackingListBc16Id: {
        type: DataTypes.BIGINT,
        field: 'export_sales_packing_list_bc16_id',
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
        validate: {
          isInt: { msg: 'Primary Key must be Integer' },
          notNull: { msg: 'Primary Key cannot be null' }
        }
      },
      exportSalesPackingListId: DataTypes.BIGINT,
      exportSalesPackingListDtId: DataTypes.BIGINT,
      exportSalesOrderBc16Id: DataTypes.BIGINT,
      bc16Id: { type: DataTypes.BIGINT, field: 'bc_16_id' },
      bc16: { type: DataTypes.STRING(150), field: 'bc16' },
      currencyId: DataTypes.BIGINT,
      itemId: DataTypes.BIGINT,
      qty: DataTypes.DOUBLE,
      qtyUsed: DataTypes.DOUBLE,
      qtyUsedApprove: DataTypes.DOUBLE
    },
    {}
  ),
  StandardModel.buildStandardModelInformation('tr_export_sales_packing_list_bc16', 'ExportSalesPackingListBc16', sequelize)
);

ExportSalesPackingListDt.init(
  StandardModel.buildPropertyWithOptions(
    {
      ...StandardModel.buildPrimaryKey('exportSalesPackingListDtId', DataTypes.BIGINT),
      exportSalesPackingListId: DataTypes.BIGINT,
      exportSalesOrderId: DataTypes.BIGINT,
      exportSalesOrderDtId: DataTypes.BIGINT,
      exportSalesOrderCode: DataTypes.BIGINT,
      itemId: DataTypes.INTEGER,
      itemCode: DataTypes.STRING(50),
      itemName: DataTypes.STRING(150),
      warehouseId: DataTypes.BIGINT,
      qty: DataTypes.DOUBLE,
      qtyEsi: DataTypes.DOUBLE,
      qtyEsiApprove: DataTypes.DOUBLE,
      unit: DataTypes.STRING(150),
      qtyOrder: DataTypes.DOUBLE,
      qtyRemain: DataTypes.DOUBLE,
      deliver: DataTypes.STRING(150),
      remain: DataTypes.FLOAT,
      qtyStock: DataTypes.DOUBLE,
      qtySdf: DataTypes.DOUBLE,
      price: DataTypes.DOUBLE,
      price2: DataTypes.DOUBLE,
      currencyId: DataTypes.INTEGER,
      currencyRate: DataTypes.DOUBLE,
      // discPersen: DataTypes.FLOAT,
      // discAmount: DataTypes.DOUBLE,
      // discPersen2: DataTypes.FLOAT,
      // discAmount2: DataTypes.DOUBLE,
      // disc3: DataTypes.DOUBLE,
      // taxPesen: DataTypes.FLOAT,
      // taxAmount: DataTypes.DOUBLE,
      adjInv: DataTypes.DOUBLE,
      adjInvType: DataTypes.TINYINT,
      total: DataTypes.DOUBLE
    },
    {}
  ),
  StandardModel.buildStandardModelInformation('tr_export_sales_packing_list_dt', 'ExportSalesPackingListDt', sequelize)
);

ExportSalesPackingListItemDt.init(
  StandardModel.buildPropertyWithOptions(
    {
      ...StandardModel.buildPrimaryKey('exportSalesPackingListItemDtId', DataTypes.BIGINT),
      exportSalesPackingListDtId: DataTypes.BIGINT,
      exportSalesPackingListId: DataTypes.BIGINT,
      exportSalesPackingListBc16Id: DataTypes.BIGINT,
      itemStockDtId: DataTypes.BIGINT,
      exportSalesOrderItemDtId: DataTypes.BIGINT,
      exportSalesPackingListBc16Id: { type: DataTypes.BIGINT, field: 'export_sales_packing_list_bc16_id' },
      itemId: DataTypes.BIGINT,
      expDay: DataTypes.STRING(11),
      expMonth: DataTypes.STRING(11),
      expYear: DataTypes.STRING(11),
      qty: DataTypes.DOUBLE,
      qtyI: DataTypes.DOUBLE,
      qtyIApprove: DataTypes.DOUBLE
    },
    {}
  ),
  StandardModel.buildStandardModelInformation('tr_export_sales_packing_list_item_dt', 'ExportSalesPackingListItemDt', sequelize)
);

ExportSalesPackingListReject.init(
  StandardModel.buildPropertyWithOptions(
    {
      ...StandardModel.buildPrimaryKey('exportSalesPackingListRejectId', DataTypes.BIGINT),
      exportSalesPackingListId: DataTypes.BIGINT,
      note: DataTypes.TEXT,
      userId: DataTypes.BIGINT
    },
    { withCreateString: true }
  ),
  StandardModel.buildStandardModelInformation('tr_export_sales_packing_list_reject', 'ExportSalesPackingListReject', sequelize)
);

ExportSalesPackingListRequest.init(
  StandardModel.buildPropertyWithOptions(
    {
      ...StandardModel.buildPrimaryKey('exportSalesPackingListRequestId', DataTypes.BIGINT),
      exportSalesPackingListId: DataTypes.BIGINT,
      note: DataTypes.TEXT,
      statusRequest: DataTypes.INTEGER,
      userId: DataTypes.BIGINT
    },
    { withCreateString: true }
  ),
  StandardModel.buildStandardModelInformation('tr_export_sales_packing_list_request', 'ExportSalesPackingListRequest', sequelize)
);

export {
  ExportSalesPackingList,
  ExportSalesPackingListBc16,
  ExportSalesPackingListDt,
  ExportSalesPackingListItemDt,
  ExportSalesPackingListReject,
  ExportSalesPackingListRequest
};
