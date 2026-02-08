import { DataTypes } from 'sequelize';
import DatabaseConnectionSingleton from '../configs/DatabaseConnection.js';
import StandardModel from './StandardModel.js';
const sequelize = DatabaseConnectionSingleton.getConnection();

class ApiAuth extends StandardModel {}

ApiAuth.init(
  StandardModel.buildPropertyWithOptions(
    {
      ...StandardModel.buildPrimaryKey('apiAuthId', DataTypes.BIGINT),
      apiUsername: DataTypes.STRING(500),
      apiPassword: DataTypes.STRING(500)
    },
    { withIsactive: true }
  ),
  StandardModel.buildStandardModelInformation('api_auth', 'ApiAuth', sequelize)
);

export default ApiAuth;
