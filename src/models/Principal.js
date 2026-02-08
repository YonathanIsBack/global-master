import { DataTypes } from 'sequelize';
import DatabaseConnectionSingleton from '../configs/DatabaseConnection.js';
import StandardModel from './StandardModel.js';
const sequelize = DatabaseConnectionSingleton.getConnection();

class Principal extends StandardModel {}

Principal.init(
  StandardModel.buildPropertyWithOptions(
    {
      ...StandardModel.buildPrimaryKey('principalId', DataTypes.INTEGER),
      principalCode: DataTypes.STRING(100),
      principalName: DataTypes.STRING(150)
    },
    { withIsactive: true, withIsdel: true, withIsused: true, withCreate: true, withModify: true }
  ),
  StandardModel.buildStandardModelInformation('ms_principal', 'Principal', sequelize)
);

export default Principal;
