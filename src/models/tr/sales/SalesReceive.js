import { DataTypes } from 'sequelize';
import DatabaseConnectionSingleton from '../../../configs/DatabaseConnection.js';
import StandardModel from '../../StandardModel.js';
const sequelize = DatabaseConnectionSingleton.getConnection();

class SalesReceive extends StandardModel {}
class SalesReceiveDt extends StandardModel {}

SalesReceive.init(
  StandardModel.buildPropertyWithOptions(
    {
      ...StandardModel.buildPrimaryKey('salesRecieveId', DataTypes.BIGINT),
      traceId: DataTypes.STRING(100),
      companyId: DataTypes.INTEGER,
      companyParentId: DataTypes.INTEGER,
      salesRecieveCode: DataTypes.STRING(100),
      whId: DataTypes.INTEGER,
      supplierId: DataTypes.INTEGER,
      shipping: DataTypes.TEXT,
      shippingNo: DataTypes.STRING(100),
      shippingDate: DataTypes.DATE,
      driver: DataTypes.STRING(50),
      licensePlate: DataTypes.STRING(15),
      status: DataTypes.INTEGER,
      notes: DataTypes.TEXT
    },
    { withCreate: true, withModify: true, withDbId: true }
  ),
  StandardModel.buildStandardModelInformation('tr_sales_receive', 'SalesReceive', sequelize)
);

SalesReceiveDt.init(
  StandardModel.buildPropertyWithOptions(
    {
      ...StandardModel.buildPrimaryKey('salesRecieveDtId', DataTypes.BIGINT),
      salesRecieveId: DataTypes.BIGINT,
      salesInvId: DataTypes.BIGINT,
      invCode: DataTypes.STRING(12),
      itemId: DataTypes.INTEGER,
      itemCode: DataTypes.STRING(50),
      itemName: DataTypes.STRING(150),
      qty: DataTypes.FLOAT
    },
    {}
  ),
  StandardModel.buildStandardModelInformation('tr_sales_receive_dt', 'SalesReceiveDt', sequelize)
);

export { SalesReceive, SalesReceiveDt };
