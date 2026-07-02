import { DataTypes } from 'sequelize';
import DatabaseConnectionSingleton from '../configs/DatabaseConnection.js';
import StandardModel from './StandardModel.js';
import City from './City.js';
import Province from './Province.js';
import { Country } from './Country.js';
const sequelize = DatabaseConnectionSingleton.getConnection();

class District extends StandardModel {}

District.init(
  StandardModel.buildPropertyWithOptions(
    {
      ...StandardModel.buildPrimaryKey('districtId', DataTypes.BIGINT),
      rajaOngkirId: DataTypes.BIGINT,
      countryId: DataTypes.BIGINT,
      provinceId: DataTypes.BIGINT,
      cityId: DataTypes.BIGINT,
      districtCode: DataTypes.STRING(150),
      districtName: DataTypes.STRING(150),
      postalCode: DataTypes.STRING(15)
    },
    { withIsactive: true, withIsdel: true, withIsused: true, withCreate: true, withModify: true }
  ),
  StandardModel.buildStandardModelInformation('ms_district', 'District', sequelize)
);

District.hasOne(City, { foreignKey: "city_id" });
District.hasOne(Province, { foreignKey: "province_id" });
District.hasOne(Country, { foreignKey: "country_id" });

export default District;
