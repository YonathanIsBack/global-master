import { DataTypes } from 'sequelize';
import DatabaseConnectionSingleton from '../../../configs/DatabaseConnection.js';
import StandardModel from '../../StandardModel.js';
const sequelize = DatabaseConnectionSingleton.getConnection();

class ImportReturn extends StandardModel { }
class ImportReturnDt extends StandardModel { }
class ImportReturnItemDt extends StandardModel { }
class ImportReturnReject extends StandardModel { }
class ImportReturnRequest extends StandardModel { }

ImportReturn.init(
  StandardModel.buildPropertyWithOptions(
    {
      ...StandardModel.buildPrimaryKey('importReturnId', DataTypes.BIGINT),
      importReturnCode: DataTypes.STRING(50),
      importReturnCodeTemp: DataTypes.STRING(50),
      importReturnDate: DataTypes.DATE,
      traceId: DataTypes.STRING(150),
      warehouseId: DataTypes.INTEGER,
      supplierId: DataTypes.INTEGER,
      currencyId: DataTypes.INTEGER,
      currencyRate: DataTypes.DOUBLE,
      importInvId: DataTypes.BIGINT,
      importInvCode: DataTypes.STRING(50),
      importInvDate: DataTypes.DATEONLY,
      paymentMethod: DataTypes.TINYINT,
      notes: DataTypes.TEXT,
      coaId: DataTypes.INTEGER,
      isvat: DataTypes.INTEGER,
      totalQty: DataTypes.DOUBLE,
      subtotal: DataTypes.DOUBLE,
      // discPersen: DataTypes.FLOAT,
      // discAmount: DataTypes.DOUBLE,
      // discPersen2: DataTypes.FLOAT,
      // discAmount2: DataTypes.DOUBLE,
      // discPersen3: DataTypes.FLOAT,
      // discAmount3: DataTypes.DOUBLE,
      vatPersen: DataTypes.FLOAT,
      vatAmount: DataTypes.DOUBLE,
      // taxPersen: DataTypes.FLOAT,
      // taxAmount: DataTypes.DOUBLE,
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
  StandardModel.buildStandardModelInformation('tr_import_return', 'ImportReturn', sequelize)
);

ImportReturnDt.init(
  StandardModel.buildPropertyWithOptions(
    {
      ...StandardModel.buildPrimaryKey('importReturnDtId', DataTypes.BIGINT),
      importReturnId: DataTypes.BIGINT,
      importOrderDtId: DataTypes.BIGINT,
      importOrderCode: DataTypes.STRING(150),
      importInvDtId: DataTypes.BIGINT,
      importInvId: DataTypes.BIGINT,
      importInvCode: DataTypes.STRING(25),
      itemId: DataTypes.INTEGER,
      itemCode: DataTypes.STRING(50),
      itemName: DataTypes.STRING(150),
      itemPack: DataTypes.DOUBLE,
      qty: DataTypes.DOUBLE,
      price: DataTypes.DOUBLE,
      price2: DataTypes.DOUBLE,
      priceAvg: DataTypes.DOUBLE,
      pricePack: DataTypes.DOUBLE,
      // discPersen: DataTypes.FLOAT,
      // discAmount: DataTypes.DOUBLE,
      // discPersen2: DataTypes.FLOAT,
      // discAmount2: DataTypes.DOUBLE,
      // disc3: DataTypes.DOUBLE,
      // taxPersen: DataTypes.FLOAT,
      // taxAmount: DataTypes.DOUBLE,
      adjInvType: DataTypes.INTEGER,
      adjInv: DataTypes.DOUBLE,
      total: DataTypes.DOUBLE,
      isreturn: DataTypes.TINYINT
    },
    {}
  ),
  StandardModel.buildStandardModelInformation('tr_import_return_dt', 'ImportReturnDt', sequelize)
);

ImportReturnItemDt.init(
  StandardModel.buildPropertyWithOptions(
    {
      ...StandardModel.buildPrimaryKey('importReturnItemDtId', DataTypes.BIGINT),
      importReturnDtId: DataTypes.BIGINT,
      importReturnId: DataTypes.BIGINT,
      importInvItemDtId: DataTypes.BIGINT,
      itemId: DataTypes.BIGINT,
      itemPack: DataTypes.DOUBLE,
      expDay: DataTypes.STRING(11),
      expMonth: DataTypes.STRING(11),
      expYear: DataTypes.STRING(11),
      qty: DataTypes.DOUBLE
    },
    {}
  ),
  StandardModel.buildStandardModelInformation(
    'tr_import_return_item_dt',
    'ImportReturnItemDt',
    sequelize
  )
);

ImportReturnReject.init(
  StandardModel.buildPropertyWithOptions(
    {
      ...StandardModel.buildPrimaryKey('importReturnRejectId', DataTypes.BIGINT),
      importReturnId: DataTypes.BIGINT,
      note: DataTypes.TEXT,
      userId: DataTypes.BIGINT
    },
    { withCreateString: true }
  ),
  StandardModel.buildStandardModelInformation(
    'tr_import_return_reject',
    'ImportReturnReject',
    sequelize
  )
);

ImportReturnRequest.init(
  StandardModel.buildPropertyWithOptions(
    {
      ...StandardModel.buildPrimaryKey('importReturnRequestId', DataTypes.BIGINT),
      importReturnId: DataTypes.BIGINT,
      note: DataTypes.TEXT,
      statusRequest: DataTypes.INTEGER,
      userId: DataTypes.BIGINT
    },
    { withCreateString: true }
  ),
  StandardModel.buildStandardModelInformation(
    'tr_import_return_request',
    'ImportReturnRequest',
    sequelize
  )
);
export {
  ImportReturn,
  ImportReturnDt,
  ImportReturnItemDt,
  ImportReturnReject,
  ImportReturnRequest
};

