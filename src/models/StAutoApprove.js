import { DataTypes } from 'sequelize';
import DatabaseConnectionSingleton from '../configs/DatabaseConnection.js';
import StandardModel from './StandardModel.js';
const sequelize = DatabaseConnectionSingleton.getConnection();

class StAutoApprove extends StandardModel {}

StAutoApprove.init(
  StandardModel.buildPropertyWithOptions(
    {
      ...StandardModel.buildPrimaryKey('autoApproveId', DataTypes.BIGINT),
      transactionId: DataTypes.BIGINT,
      isauto: DataTypes.TINYINT,
      iscancel: DataTypes.TINYINT,
      limitTime: DataTypes.INTEGER
    },
    { withCreate: true, withModify: true }
  ),
  StandardModel.buildStandardModelInformation('st_auto_approve', 'StAutoApprove', sequelize)
);

export default StAutoApprove;
