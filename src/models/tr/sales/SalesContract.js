import { DataTypes } from 'sequelize';
import DatabaseConnectionSingleton from '../../../configs/DatabaseConnection.js';
import StandardModel from '../../StandardModel.js';
const sequelize = DatabaseConnectionSingleton.getConnection();

class SalesContract extends StandardModel {}
class SalesContractDt extends StandardModel {}
class SalesContractItemDt extends StandardModel {}
class SalesContractReject extends StandardModel {}
class SalesContractRequest extends StandardModel {}

SalesContract.init(
  StandardModel.buildPropertyWithOptions(
    {
      ...StandardModel.buildPrimaryKey('salesContractId', DataTypes.BIGINT),
      salesContractCode: DataTypes.STRING(50),
      salesContractCodeTemp: DataTypes.STRING(50),
      salesContractDate: DataTypes.DATEONLY,
      traceId: DataTypes.STRING(150),
      startDate: DataTypes.DATEONLY,
      endDate: DataTypes.DATEONLY,
      paymentTermId: DataTypes.INTEGER,
      customerId: DataTypes.INTEGER,
      addr: DataTypes.STRING(800),
      billingAddr: DataTypes.STRING(800),
      note: DataTypes.STRING(800),
      status: DataTypes.TINYINT,
      statusNext: DataTypes.TINYINT,
      total: DataTypes.DOUBLE,
      confirmtime: DataTypes.DATE,
      confirmby: DataTypes.INTEGER,
      isedit: DataTypes.TINYINT,
      confirmtimeF: DataTypes.DATE,
      confirmbyF: DataTypes.INTEGER
    },
    { withCreate: true, withModify: true }
  ),
  StandardModel.buildStandardModelInformation('tr_sales_contract', 'SalesContract', sequelize)
);

SalesContractDt.init(
  StandardModel.buildPropertyWithOptions(
    {
      ...StandardModel.buildPrimaryKey('salesContractDtId', DataTypes.BIGINT),
      salesContractId: DataTypes.BIGINT,
      itemId: DataTypes.INTEGER,
      itemName: DataTypes.STRING(50),
      itemCode: DataTypes.STRING(150),
      qty: DataTypes.DOUBLE,
      unit: DataTypes.DOUBLE,
      price: DataTypes.DOUBLE,
      price2: DataTypes.DOUBLE,
      priceAvg: DataTypes.DOUBLE,
      total: DataTypes.DOUBLE,
      isactive: DataTypes.TINYINT
    },
    { withIsactive: true }
  ),
  StandardModel.buildStandardModelInformation('tr_sales_contract_dt', 'SalesContractDt', sequelize)
);

SalesContractItemDt.init(
  StandardModel.buildPropertyWithOptions(
    {
      ...StandardModel.buildPrimaryKey('salesContractItemDtId', DataTypes.BIGINT),
      salesContractDtId: DataTypes.BIGINT,
      salesContractId: DataTypes.BIGINT,
      itemStockDtId: DataTypes.BIGINT,
      itemId: DataTypes.BIGINT,
      expDay: DataTypes.STRING(11),
      expMonth: DataTypes.STRING(11),
      expYear: DataTypes.STRING(11),
      qty: DataTypes.DOUBLE
    },
    {}
  ),
  StandardModel.buildStandardModelInformation(
    'tr_sales_contract_item_dt',
    'SalesContractItemDt',
    sequelize
  )
);

SalesContractReject.init(
  StandardModel.buildPropertyWithOptions(
    {
      ...StandardModel.buildPrimaryKey('salesContractRejectId', DataTypes.BIGINT),
      salesContractId: DataTypes.BIGINT,
      note: DataTypes.TEXT,
      userId: DataTypes.BIGINT
    },
    { withCreateString: true }
  ),
  StandardModel.buildStandardModelInformation(
    'tr_sales_contract_reject',
    'SalesContractReject',
    sequelize
  )
);

SalesContractRequest.init(
  StandardModel.buildPropertyWithOptions(
    {
      ...StandardModel.buildPrimaryKey('salesContractRequestId', DataTypes.BIGINT),
      salesContractId: DataTypes.BIGINT,
      note: DataTypes.TEXT,
      statusRequest: DataTypes.INTEGER,
      userId: DataTypes.BIGINT
    },
    { withCreateString: true }
  ),
  StandardModel.buildStandardModelInformation(
    'tr_sales_contract_request',
    'SalesContractRequest',
    sequelize
  )
);

export {
  SalesContract,
  SalesContractDt,
  SalesContractItemDt,
  SalesContractReject,
  SalesContractRequest
};
