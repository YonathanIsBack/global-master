import { DataTypes } from 'sequelize';
import DatabaseConnectionSingleton from '../../../configs/DatabaseConnection.js';
import StandardModel from '../../StandardModel.js';
const sequelize = DatabaseConnectionSingleton.getConnection();

class ImportQuote extends StandardModel {}
class ImportQuoteAdvancePay extends StandardModel {}
class ImportQuoteCreditNote extends StandardModel {}
class ImportQuoteDt extends StandardModel {}
class ImportQuoteItemDt extends StandardModel {}
class ImportQuoteReject extends StandardModel {}
class ImportQuoteRequest extends StandardModel {}

ImportQuote.init(
  StandardModel.buildPropertyWithOptions(
    {
      ...StandardModel.buildPrimaryKey('importQuoteId', DataTypes.BIGINT),
      traceId: DataTypes.STRING(150),
      companyId: DataTypes.INTEGER,
      warehouseId: DataTypes.INTEGER,
      importQuoteCode: DataTypes.STRING(50),
      importQuoteCodeTemp: DataTypes.STRING(50),
      importQuoteDate: DataTypes.DATE,
      supplierId: DataTypes.INTEGER,
      currencyId: DataTypes.INTEGER,
      currencyRate: DataTypes.DOUBLE,
      paymentTermId: DataTypes.BIGINT,
      note: DataTypes.TEXT,
      status: DataTypes.TINYINT,
      statusNext: DataTypes.TINYINT,
      isFinish: DataTypes.TINYINT,
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
      isvat: DataTypes.TINYINT,
      total: DataTypes.DOUBLE,
      totalPayFinish: DataTypes.DOUBLE,
      advAmount: DataTypes.DOUBLE,
      totalCreditNote: DataTypes.DOUBLE,
      confirmtime: DataTypes.DATE,
      confirmby: DataTypes.INTEGER,
      isedit: DataTypes.TINYINT,
      confirmtimeF: DataTypes.DATE,
      confirmbyF: DataTypes.INTEGER
    },
    { withCreate: true, withModify: true }
  ),
  StandardModel.buildStandardModelInformation('tr_import_quote', 'ImportQuote', sequelize)
);

ImportQuoteAdvancePay.init(
  StandardModel.buildPropertyWithOptions(
    {
      ...StandardModel.buildPrimaryKey('importQuoteAdvpayId', DataTypes.BIGINT),
      importQuoteId: DataTypes.BIGINT,
      importAdvpayId: DataTypes.BIGINT,
      importAdvpayCode: DataTypes.STRING(50),
      totalDp: DataTypes.DOUBLE,
      totalUsed: DataTypes.DOUBLE,
      remaining: DataTypes.DOUBLE,
      isadv: DataTypes.TINYINT,
      type: DataTypes.STRING(20)
    },
    { withCreate: true, withModify: true }
  ),
  StandardModel.buildStandardModelInformation(
    'tr_import_quote_advpay',
    'ImportQuoteAdvancePay',
    sequelize
  )
);

ImportQuoteCreditNote.init(
  StandardModel.buildPropertyWithOptions(
    {
      ...StandardModel.buildPrimaryKey('importQuoteCreditNoteId', DataTypes.BIGINT),
      importQuoteId: DataTypes.BIGINT,
      importCreditNoteId: DataTypes.BIGINT,
      importCreditNoteName: DataTypes.STRING(150),
      importCreditNoteCode: DataTypes.STRING(50),
      traceId: DataTypes.STRING(150),
      nominal: DataTypes.DOUBLE,
      used: DataTypes.DOUBLE,
      confirmtime: DataTypes.DATE,
      confirmby: DataTypes.INTEGER
    },
    { withCreate: true, withModify: true }
  ),
  StandardModel.buildStandardModelInformation(
    'tr_import_quote_credit_note',
    'ImportQuoteCreditNote',
    sequelize
  )
);

ImportQuoteDt.init(
  StandardModel.buildPropertyWithOptions(
    {
      ...StandardModel.buildPrimaryKey('importQuoteDtId', DataTypes.BIGINT),
      importQuoteId: DataTypes.BIGINT,
      itemId: DataTypes.INTEGER,
      itemCode: DataTypes.STRING(50),
      itemName: DataTypes.STRING(150),
      itemPack: DataTypes.DOUBLE,
      qty: DataTypes.FLOAT,
      qtyIo: DataTypes.FLOAT,
      price: DataTypes.DOUBLE,
      priceSuggest: DataTypes.DOUBLE,
      price2: DataTypes.DOUBLE,
      priceAvg: DataTypes.DOUBLE,
      pricePack: DataTypes.DOUBLE,
      // discPersen: DataTypes.FLOAT,
      // discAmount: DataTypes.DOUBLE,
      // discPersen2: DataTypes.FLOAT,
      // discAmount2: DataTypes.DOUBLE,
      // disc3: DataTypes.DOUBLE,
      taxPersen: DataTypes.FLOAT,
      taxAmount: DataTypes.DOUBLE,
      total: DataTypes.DOUBLE
    },
    {}
  ),
  StandardModel.buildStandardModelInformation('tr_import_quote_dt', 'ImportQuoteDt', sequelize)
);

ImportQuoteItemDt.init(
  StandardModel.buildPropertyWithOptions(
    {
      ...StandardModel.buildPrimaryKey('importQuoteItemDtId', DataTypes.BIGINT),
      importQuoteDtId: DataTypes.BIGINT,
      importQuoteId: DataTypes.BIGINT,
      itemId: DataTypes.BIGINT,
      itemPack: DataTypes.DOUBLE,
      expDay: DataTypes.STRING(11),
      expMonth: DataTypes.STRING(11),
      expYear: DataTypes.STRING(11),
      qty: DataTypes.DOUBLE,
      qtyO: DataTypes.DOUBLE,
      qtyOApprove: DataTypes.DOUBLE
    },
    {}
  ),
  StandardModel.buildStandardModelInformation(
    'tr_import_quote_item_dt',
    'ImportQuoteItemDt',
    sequelize
  )
);

ImportQuoteReject.init(
  StandardModel.buildPropertyWithOptions(
    {
      ...StandardModel.buildPrimaryKey('importQuoteRejectId', DataTypes.BIGINT),
      importQuoteId: DataTypes.BIGINT,
      note: DataTypes.TEXT,
      userId: DataTypes.BIGINT
    },
    { withCreateString: true }
  ),
  StandardModel.buildStandardModelInformation(
    'tr_import_quote_reject',
    'ImportQuoteReject',
    sequelize
  )
);

ImportQuoteRequest.init(
  StandardModel.buildPropertyWithOptions(
    {
      ...StandardModel.buildPrimaryKey('importQuoteRequestId', DataTypes.BIGINT),
      importQuoteId: DataTypes.BIGINT,
      note: DataTypes.TEXT,
      statusRequest: DataTypes.INTEGER,
      userId: DataTypes.BIGINT
    },
    { withCreateString: true }
  ),
  StandardModel.buildStandardModelInformation(
    'tr_import_quote_request',
    'ImportQuoteRequest',
    sequelize
  )
);
export {
  ImportQuote,
  ImportQuoteAdvancePay,
  ImportQuoteCreditNote,
  ImportQuoteDt,
  ImportQuoteItemDt,
  ImportQuoteReject,
  ImportQuoteRequest
};
