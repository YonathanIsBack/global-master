import { DataTypes } from 'sequelize';
import DatabaseConnectionSingleton from '../configs/DatabaseConnection.js';
import StandardModel from './StandardModel.js';
const sequelize = DatabaseConnectionSingleton.getConnection();

class Bank extends StandardModel {}

Bank.init(
  StandardModel.buildPropertyWithOptions(
    {
      ...StandardModel.buildPrimaryKey('bankId', DataTypes.BIGINT),
      companyParentId: DataTypes.INTEGER,
      bankCode: DataTypes.STRING(10),
      bankName: DataTypes.STRING(150)
    },
    { withDbId: true, withIsactive: true, withIsdel: true, withIsused: true, withCreate: true, withModify: true }
  ),
  StandardModel.buildStandardModelInformation('ms_bank', 'Bank', sequelize)
);

export default Bank;
