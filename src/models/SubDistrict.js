import { DataTypes } from 'sequelize';
import DatabaseConnectionSingleton from '../configs/DatabaseConnection.js';
import StandardModel from './StandardModel.js';
import District from './District.js';
import City from './City.js';
import Province from './Province.js';
import { Country } from './Country.js';
const sequelize = DatabaseConnectionSingleton.getConnection();

class SubDistrict extends StandardModel { }

SubDistrict.init(
  StandardModel.buildPropertyWithOptions(
    {
      ...StandardModel.buildPrimaryKey('subdistrictId', DataTypes.BIGINT),
      rajaOngkirId: DataTypes.BIGINT,
      countryId: DataTypes.BIGINT,
      provinceId: DataTypes.BIGINT,
      cityId: DataTypes.BIGINT,
      districtId: DataTypes.BIGINT,
      subdistrictCode: DataTypes.STRING(150),
      subdistrictName: DataTypes.STRING(150),
      postalCode: DataTypes.STRING(15)
    },
    { withIsactive: true, withIsdel: true, withIsused: true, withCreate: true, withModify: true }
  ),
  StandardModel.buildStandardModelInformation('ms_subdistrict', 'SubDistrict', sequelize)
);

SubDistrict.hasOne(District, { foreignKey: "district_id" });
SubDistrict.hasOne(City, { foreignKey: "city_id" });
SubDistrict.hasOne(Province, { foreignKey: "province_id" });
SubDistrict.hasOne(Country, { foreignKey: "country_id" });

export default SubDistrict;
