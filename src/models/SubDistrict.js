import { DataTypes } from 'sequelize';
import DatabaseConnectionSingleton from '../configs/DatabaseConnection.js';
import StandardModel from './StandardModel.js';
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

export default SubDistrict;
