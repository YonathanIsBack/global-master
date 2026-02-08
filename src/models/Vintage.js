import { DataTypes } from 'sequelize';
import DatabaseConnectionSingleton from '../configs/DatabaseConnection.js';
import StandardModel from './StandardModel.js';
const sequelize = DatabaseConnectionSingleton.getConnection();

class Vintage extends StandardModel {}

Vintage.init(
  StandardModel.buildPropertyWithOptions(
    {
      ...StandardModel.buildPrimaryKey('vintageId', DataTypes.BIGINT),
      companyParentId: DataTypes.INTEGER,
      vintageCode: DataTypes.STRING(10),
      vintageName: DataTypes.STRING(25)
    },
    { withDbId: true, withIsactive: true, withIsdel: true, withCreate: true, withModify: true }
  ),
  StandardModel.buildStandardModelInformation('ms_vintage', 'Vintage', sequelize)
);

export default Vintage;
