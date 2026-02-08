import { DataTypes } from 'sequelize';
import DatabaseConnectionSingleton from '../configs/DatabaseConnection.js';
import StandardModel from './StandardModel.js';
const sequelize = DatabaseConnectionSingleton.getConnection();

class Country extends StandardModel {}
class CountryCode extends StandardModel {}

Country.init(
  StandardModel.buildPropertyWithOptions(
    {
      ...StandardModel.buildPrimaryKey('countryId', DataTypes.INTEGER),
      coretaxCountryId: DataTypes.INTEGER,
      rajaOngkirId: DataTypes.INTEGER,
      countryCode: DataTypes.STRING(5),
      countryName: DataTypes.STRING(25),
    },
    { withDbId: true, withIsactive: true, withIsdel: true, withIsused: true, withCreate: true, withModify: true }
  ),
  StandardModel.buildStandardModelInformation('ms_country', 'Country', sequelize)
);

CountryCode.init(
  StandardModel.buildPropertyWithOptions(
    {
      ...StandardModel.buildPrimaryKey('id', DataTypes.INTEGER),
      iso: DataTypes.CHAR,
      name: DataTypes.STRING(80),
      nicename: DataTypes.STRING(80),
      iso3: DataTypes.CHAR(3),
      numcode: DataTypes.SMALLINT,
      phonecode: DataTypes.INTEGER,
      isactive: DataTypes.TINYINT,
      isdel: DataTypes.TINYINT
    },
    { withIsactive: true, withIsdel: true }
  ),
  StandardModel.buildStandardModelInformation('ms_country_code', 'CountryCode', sequelize)
);

export { Country, CountryCode };
