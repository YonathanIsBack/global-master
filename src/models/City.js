import { DataTypes } from 'sequelize';
import DatabaseConnectionSingleton from '../configs/DatabaseConnection.js';
import StandardModel from './StandardModel.js';
import { Country } from './Country.js';
import Province from './Province.js';
const sequelize = DatabaseConnectionSingleton.getConnection();

class City extends StandardModel {}

City.init(
  StandardModel.buildPropertyWithOptions(
    {
      ...StandardModel.buildPrimaryKey('cityId', DataTypes.INTEGER),
      companyParentId: DataTypes.INTEGER,
      rajaOngkirId: DataTypes.INTEGER,
      countryId: DataTypes.BIGINT,
      provinceId: DataTypes.INTEGER,
      cityCode: DataTypes.STRING(5),
      cityName: DataTypes.STRING(25),
      postalCode: DataTypes.STRING(10)
    },
    { withDbId: true, withIsactive: true, withIsdel: true, withCreate: true, withModify: true }
  ),
  StandardModel.buildStandardModelInformation('ms_city', 'City', sequelize)
);

City.hasOne(Country, { foreignKey: "country_id" });
City.hasOne(Province, { foreignKey: "province_id" });

export default City;
