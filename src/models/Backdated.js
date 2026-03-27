import { DataTypes } from 'sequelize';
import DatabaseConnectionSingleton from '../configs/DatabaseConnection.js';
import StandardModel from './StandardModel.js';
const sequelize = DatabaseConnectionSingleton.getConnection();

class BackDated extends StandardModel {}
class BackDatedLogs extends StandardModel {}
class BackDatedUser extends StandardModel {}

BackDated.init(
  StandardModel.buildPropertyWithOptions(
    {
      ...StandardModel.buildPrimaryKey('backdatedId', DataTypes.BIGINT),
      eomId: DataTypes.BIGINT,
      backdatedName: DataTypes.STRING(50),
      startDate: DataTypes.DATE,
      endDate: DataTypes.DATE,
      limitTime: DataTypes.INTEGER
    },
    { withCreate: true, withModify: true }
  ),
  StandardModel.buildStandardModelInformation('st_backdated', 'BackDated', sequelize)
);

BackDatedLogs.init(
  StandardModel.buildPropertyWithOptions(
    {
      ...StandardModel.buildPrimaryKey('backdatedLogsId', DataTypes.BIGINT),
      backdatedId: DataTypes.INTEGER,
      userId: DataTypes.BIGINT,
      username: DataTypes.STRING(50),
      logsType: DataTypes.INTEGER,
      logsId: DataTypes.INTEGER
    },
    {}
  ),
  StandardModel.buildStandardModelInformation('st_backdated_logs', 'BackDatedLogs', sequelize)
);

BackDatedUser.init(
  StandardModel.buildPropertyWithOptions(
    {
      ...StandardModel.buildPrimaryKey('backdatedUserId', DataTypes.BIGINT),
      backdatedId: DataTypes.INTEGER,
      userId: DataTypes.BIGINT
    },
    {}
  ),
  StandardModel.buildStandardModelInformation('st_backdated_user', 'BackDatedUser', sequelize)
);

BackDated.hasMany(BackDatedUser, { foreignKey: 'backdatedId' });

export { BackDated, BackDatedLogs, BackDatedUser };
