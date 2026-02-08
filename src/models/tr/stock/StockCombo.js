import { DataTypes } from 'sequelize';
import StandardModel from '../../StandardModel.js';
import DatabaseConnectionSingleton from '../../../configs/DatabaseConnection.js';
const sequelize = DatabaseConnectionSingleton.getConnection();

class StockCombo extends StandardModel {}
class StockComboDt extends StandardModel {}
class StockComboRecord extends StandardModel {}
class StockComboRecordDt extends StandardModel {}
class StockComboReject extends StandardModel {}
class StockComboRequest extends StandardModel {}
class StockComboReverse extends StandardModel {}
class StockComboReverseDt extends StandardModel {}
class StockComboReverseReject extends StandardModel {}
class StockComboReverseRequest extends StandardModel {}

StockCombo.init(
  StandardModel.buildPropertyWithOptions(
    {
      ...StandardModel.buildPrimaryKey('stockComboId', DataTypes.BIGINT),
      stockComboCode: DataTypes.STRING(50),
      stockComboCodeTemp: DataTypes.STRING(50),
      stockComboDate: DataTypes.DATE,
      itemId: DataTypes.BIGINT,
      itemName: DataTypes.STRING(50),
      itemCode: DataTypes.STRING(25),
      whId: DataTypes.BIGINT,
      qty: DataTypes.FLOAT,
      price: DataTypes.DOUBLE,
      startDate: DataTypes.DATE,
      endDate: DataTypes.DATE,
      reff: DataTypes.STRING(50),
      note: DataTypes.TEXT,
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
  StandardModel.buildStandardModelInformation('tr_stock_combo', 'StockCombo', sequelize)
);

StockComboDt.init(
  StandardModel.buildPropertyWithOptions(
    {
      ...StandardModel.buildPrimaryKey('stockComboDtId', DataTypes.BIGINT),
      stockComboId: DataTypes.BIGINT,
      itemId: DataTypes.BIGINT,
      itemCode: DataTypes.STRING(50),
      itemName: DataTypes.STRING(150),
      qty: DataTypes.FLOAT
    },
    {}
  ),
  StandardModel.buildStandardModelInformation('tr_stock_combo_dt', 'StockComboDt', sequelize)
);

StockComboRecord.init(
  StandardModel.buildPropertyWithOptions(
    {
      ...StandardModel.buildPrimaryKey('stockComboRecordId', DataTypes.BIGINT),
      stockComboId: DataTypes.BIGINT,
      itemId: DataTypes.BIGINT,
      itemName: DataTypes.STRING(50),
      itemCode: DataTypes.STRING(25),
      whId: DataTypes.BIGINT,
      qty: DataTypes.FLOAT,
      used: DataTypes.DOUBLE,
      price: DataTypes.DOUBLE,
      hargaFix: DataTypes.DOUBLE,
      priceT: DataTypes.DOUBLE,
      hargaFixT: DataTypes.DOUBLE
    },
    { withCreateString: true, withModifyString: true }
  ),
  StandardModel.buildStandardModelInformation(
    'tr_stock_combo_record',
    'StockComboRecord',
    sequelize
  )
);

StockComboRecordDt.init(
  StandardModel.buildPropertyWithOptions(
    {
      ...StandardModel.buildPrimaryKey('stockComboRecordDtId', DataTypes.BIGINT),
      stockComboRecordId: DataTypes.BIGINT,
      stockComboId: DataTypes.BIGINT,
      stockComboDtId: DataTypes.BIGINT,
      whId: DataTypes.INTEGER,
      itemId: DataTypes.BIGINT,
      itemCode: DataTypes.STRING(50),
      itemName: DataTypes.STRING(150),
      qty: DataTypes.DOUBLE,
      used: DataTypes.DOUBLE,
      hargaFix: DataTypes.DOUBLE
    },
    {}
  ),
  StandardModel.buildStandardModelInformation(
    'tr_stock_combo_record_dt',
    'StockComboRecordDt',
    sequelize
  )
);

StockComboReject.init(
  StandardModel.buildPropertyWithOptions(
    {
      ...StandardModel.buildPrimaryKey('stockComboRejectId', DataTypes.BIGINT),
      stockComboId: DataTypes.BIGINT,
      note: DataTypes.TEXT,
      userId: DataTypes.BIGINT
    },
    { withCreateString: true }
  ),
  StandardModel.buildStandardModelInformation(
    'tr_stock_combo_reject',
    'StockComboReject',
    sequelize
  )
);

StockComboRequest.init(
  StandardModel.buildPropertyWithOptions(
    {
      ...StandardModel.buildPrimaryKey('stockComboRequestId', DataTypes.BIGINT),
      stockComboId: DataTypes.BIGINT,
      note: DataTypes.TEXT,
      statusRequest: DataTypes.INTEGER,
      userId: DataTypes.BIGINT
    },
    { withCreateString: true }
  ),
  StandardModel.buildStandardModelInformation(
    'tr_stock_combo_request',
    'StockComboRequest',
    sequelize
  )
);

StockComboReverse.init(
  StandardModel.buildPropertyWithOptions(
    {
      ...StandardModel.buildPrimaryKey('stockComboReverseId', DataTypes.BIGINT),
      stockComboReverseCode: DataTypes.STRING(50),
      stockComboReverseCodeTemp: DataTypes.STRING(50),
      stockComboReverseDate: DataTypes.DATE,
      itemId: DataTypes.BIGINT,
      itemName: DataTypes.STRING(50),
      itemCode: DataTypes.STRING(25),
      whId: DataTypes.BIGINT,
      qty: DataTypes.FLOAT,
      price: DataTypes.DECIMAL(10, 0),
      startDate: DataTypes.DATE,
      endDate: DataTypes.DATE,
      reff: DataTypes.STRING(50),
      note: DataTypes.TEXT,
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
  StandardModel.buildStandardModelInformation(
    'tr_stock_combo_reverse',
    'StockComboReverse',
    sequelize
  )
);

StockComboReverseDt.init(
  StandardModel.buildPropertyWithOptions(
    {
      ...StandardModel.buildPrimaryKey('stockComboReverseDtId', DataTypes.BIGINT),
      stockComboReverseId: DataTypes.BIGINT,
      itemId: DataTypes.BIGINT,
      itemCode: DataTypes.STRING(25),
      itemName: DataTypes.STRING(50),
      qty: DataTypes.FLOAT
    },
    {}
  ),
  StandardModel.buildStandardModelInformation(
    'tr_stock_combo_reverse_dt',
    'StockComboReverseDt',
    sequelize
  )
);

StockComboReverseReject.init(
  StandardModel.buildPropertyWithOptions(
    {
      ...StandardModel.buildPrimaryKey('stockComboReverseRejectId', DataTypes.BIGINT),
      stockComboReverseId: DataTypes.BIGINT,
      note: DataTypes.TEXT,
      userId: DataTypes.BIGINT
    },
    { withCreate: true }
  ),
  StandardModel.buildStandardModelInformation(
    'tr_stock_combo_reverse_reject',
    'StockComboReverse',
    sequelize
  )
);

StockComboReverseReject.init(
  StandardModel.buildPropertyWithOptions(
    {
      ...StandardModel.buildPrimaryKey('stockComboReverseRequestId', DataTypes.BIGINT),
      stockComboReverseId: DataTypes.BIGINT,
      note: DataTypes.TEXT,
      statusRequest: DataTypes.INTEGER,
      userId: DataTypes.BIGINT
    },
    { withCreate: true }
  ),
  StandardModel.buildStandardModelInformation(
    'tr_stock_combo_reverse_request',
    'StockComboReverseRequest',
    sequelize
  )
);

export {
  StockCombo,
  StockComboDt,
  StockComboRecord,
  StockComboRecordDt,
  StockComboReject,
  StockComboRequest,
  StockComboReverse,
  StockComboReverseDt,
  StockComboReverseReject,
  StockComboReverseRequest
};
