import { DataTypes } from 'sequelize';
import DatabaseConnectionSingleton from '../configs/DatabaseConnection.js';
import StandardModel from './StandardModel.js';
const sequelize = DatabaseConnectionSingleton.getConnection();

class Access extends StandardModel {}

Access.init(
  StandardModel.buildPropertyWithOptions(
    {
      ...StandardModel.buildPrimaryKey('accessId', DataTypes.BIGINT),
      userGroupId: DataTypes.BIGINT,
      action: DataTypes.TEXT,
      pageController: DataTypes.STRING(50)
    },
    { withCreate: true, withModify: true }
  ),

  StandardModel.buildStandardModelInformation('ms_access', 'Access', sequelize)
);

export default Access;
