import { DataTypes } from 'sequelize';
import DatabaseConnectionSingleton from '../../../configs/DatabaseConnection.js';
import StandardModel from '../../StandardModel.js';
const sequelize = DatabaseConnectionSingleton.getConnection();

class ImportClearance extends StandardModel {}
class ImportClearanceDt extends StandardModel {}
class ImportClearanceItemDt extends StandardModel {}
class ImportClearanceReject extends StandardModel {}
class ImportClearanceRequest extends StandardModel {}

ImportClearance.init(
  StandardModel.buildPropertyWithOptions(
    {
      ...StandardModel.buildPrimaryKey('importClearanceId', DataTypes.BIGINT),
      importClearanceCode: DataTypes.STRING(50),
      importClearanceCodeTemp: DataTypes.STRING(50),
      importClearanceDate: DataTypes.DATEONLY,
      importStockTransferId: DataTypes.INTEGER,
      importStockTransferCode: DataTypes.STRING(50),
      importOrderId: DataTypes.BIGINT,
      importOrderCode: DataTypes.STRING(50),
      traceId: DataTypes.STRING(150),
      supplierId: DataTypes.INTEGER,
      warehouseId: DataTypes.INTEGER,
      warehouseIdTo: DataTypes.INTEGER,
      currencyId: DataTypes.INTEGER,
      currencyRate: DataTypes.DOUBLE,
      ppn: DataTypes.DOUBLE,
      pph: DataTypes.DOUBLE,
      regisDate: DataTypes.DATEONLY,
      bc28: { type: DataTypes.STRING(150), field: 'bc_28' },
      ajuDate: DataTypes.DATEONLY,
      ajuNumber: DataTypes.STRING(100),
      customesOffice: DataTypes.STRING(100),
      note: DataTypes.TEXT,
      status: DataTypes.TINYINT,
      statusNext: DataTypes.TINYINT,
      isvat: DataTypes.TINYINT,
      totalQty: DataTypes.DOUBLE,
      subtotal: DataTypes.DOUBLE,
      subtotalIdr: DataTypes.DOUBLE,
      // discPersen: DataTypes.FLOAT,
      // discAmount: DataTypes.DOUBLE,
      // discAmountIdr: DataTypes.DOUBLE,
      // discPersen2: DataTypes.FLOAT,
      // discAmount2: DataTypes.DOUBLE,
      // discAmount2Idr: DataTypes.DOUBLE,
      // taxPersen: DataTypes.FLOAT,
      // taxAmount: DataTypes.DOUBLE,
      // taxAmountIdr: DataTypes.DOUBLE,
      total: DataTypes.DOUBLE,
      totalIdr: DataTypes.DOUBLE,
      coaPibId: DataTypes.BIGINT,
      totalPibDebit: DataTypes.DOUBLE,
      totalPibCredit: DataTypes.DOUBLE,
      totalPib: DataTypes.DOUBLE,
      coaId: DataTypes.BIGINT,
      totalFund: DataTypes.DOUBLE,
      totalPayFinish: DataTypes.DOUBLE,
      confirmtime: DataTypes.DATE,
      confirmby: DataTypes.INTEGER,
      isedit: DataTypes.TINYINT,
      confirmtimeF: DataTypes.DATE,
      confirmbyF: DataTypes.INTEGER
    },
    { withCreate: true, withModify: true }
  ),
  StandardModel.buildStandardModelInformation('tr_import_clearance', 'ImportClearance', sequelize)
);

ImportClearanceDt.init(
  StandardModel.buildPropertyWithOptions(
    {
      ...StandardModel.buildPrimaryKey('importClearanceDtId', DataTypes.BIGINT),
      importClearanceId: DataTypes.BIGINT,
      importStockTransferId: DataTypes.BIGINT,
      importStockTransferDtId: DataTypes.BIGINT,
      importStockTransferType: DataTypes.TINYINT,
      importStockTransferCode: DataTypes.STRING(50),
      bc16: { type: DataTypes.STRING(50), field: 'bc_16' },
      itemId: DataTypes.INTEGER,
      itemCode: DataTypes.STRING(50),
      itemName: DataTypes.STRING(150),
      itemPack: DataTypes.DOUBLE,
      poNumber: DataTypes.STRING(50),
      qtyImport: DataTypes.DOUBLE,
      qty: DataTypes.DOUBLE,
      qtyIi: DataTypes.DOUBLE,
      currencyId: DataTypes.INTEGER,
      price: DataTypes.DOUBLE,
      priceIdr: DataTypes.DOUBLE,
      price2: DataTypes.DOUBLE,
      priceAvg: DataTypes.DOUBLE,
      rate: DataTypes.DOUBLE,
      rateExcise: DataTypes.DOUBLE,
      rateTax: DataTypes.DOUBLE,
      ppn: DataTypes.DOUBLE,
      pph: DataTypes.DOUBLE,
      // discPersen: DataTypes.FLOAT,
      // discAmount: DataTypes.DOUBLE,
      // discAmountIdr: DataTypes.DOUBLE,
      // disc3: DataTypes.DOUBLE,
      // taxPersen: DataTypes.FLOAT,
      // taxAmount: DataTypes.DOUBLE,
      // taxAmountIdr: DataTypes.DOUBLE,
      adjInv: DataTypes.DOUBLE,
      adjInvPcs: DataTypes.DOUBLE,
      adjInvType: DataTypes.TINYINT,
      total: DataTypes.DOUBLE,
      totalIdr: DataTypes.DOUBLE,
      costBtl: DataTypes.DOUBLE,
      pibBtl: DataTypes.DOUBLE
    },
    {}
  ),
  StandardModel.buildStandardModelInformation(
    'tr_import_clearance_dt',
    'ImportClearanceDt',
    sequelize
  )
);

ImportClearanceItemDt.init(
  StandardModel.buildPropertyWithOptions(
    {
      ...StandardModel.buildPrimaryKey('importClearanceItemDtId', DataTypes.BIGINT),
      importClearanceDtId: DataTypes.BIGINT,
      importClearanceId: DataTypes.BIGINT,
      importStockTransferItemDtId: DataTypes.BIGINT,
      itemId: DataTypes.BIGINT,
      itemPack: DataTypes.DOUBLE,
      expDayImport: DataTypes.STRING(11),
      expMonthImport: DataTypes.STRING(11),
      expYearImport: DataTypes.STRING(11),
      expDay: DataTypes.STRING(11),
      expMonth: DataTypes.STRING(11),
      expYear: DataTypes.STRING(11),
      qtyImport: DataTypes.DOUBLE,
      qty: DataTypes.DOUBLE
    },
    {}
  ),
  StandardModel.buildStandardModelInformation(
    'tr_import_clearance_item_dt',
    'ImportClearanceItemDt',
    sequelize
  )
);

ImportClearanceReject.init(
  StandardModel.buildPropertyWithOptions(
    {
      ...StandardModel.buildPrimaryKey('importClearanceRejectId', DataTypes.BIGINT),
      importClearanceId: DataTypes.BIGINT,
      note: DataTypes.TEXT,
      userId: DataTypes.BIGINT
    },
    { withCreateString: true }
  ),
  StandardModel.buildStandardModelInformation(
    'tr_import_clearance_reject',
    'ImportClearanceReject',
    sequelize
  )
);

ImportClearanceRequest.init(
  StandardModel.buildPropertyWithOptions(
    {
      ...StandardModel.buildPrimaryKey('importClearanceRequestId', DataTypes.BIGINT),
      importClearanceId: DataTypes.BIGINT,
      note: DataTypes.TEXT,
      statusRequest: DataTypes.INTEGER,
      userId: DataTypes.BIGINT
    },
    { withCreate: true }
  ),
  StandardModel.buildStandardModelInformation(
    'tr_import_clearance_request',
    'ImportClearanceRequest',
    sequelize
  )
);

export {
  ImportClearance,
  ImportClearanceDt,
  ImportClearanceItemDt,
  ImportClearanceReject,
  ImportClearanceRequest
};
