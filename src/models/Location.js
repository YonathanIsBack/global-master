import { DataTypes } from 'sequelize';
import DatabaseConnectionSingleton from '../configs/DatabaseConnection.js';
import StandardModel from './StandardModel.js';
const sequelize = DatabaseConnectionSingleton.getConnection();

class Location extends StandardModel {}

Location.init(
  StandardModel.buildPropertyWithOptions(
    {
      ...StandardModel.buildPrimaryKey('locationId', DataTypes.BIGINT),
      companyId: DataTypes.INTEGER,
      locationCode: DataTypes.STRING(5),
      locationName: DataTypes.STRING(25)
    },
    { withIsactive: true, withIsdel: true, withIsused: true, withCreate: true, withModify: true }
  ),
  StandardModel.buildStandardModelInformation('ms_location', 'Location', sequelize)
);

export default Location;
