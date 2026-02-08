import { DataTypes } from 'sequelize';
import DatabaseConnectionSingleton from '../configs/DatabaseConnection.js';
import StandardModel from './StandardModel.js';
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

export default District;
