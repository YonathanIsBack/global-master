import { DataTypes } from 'sequelize';
import DatabaseConnectionSingleton from '../configs/DatabaseConnection.js';
import { Country } from './Country.js';
import StandardModel from './StandardModel.js';
const sequelize = DatabaseConnectionSingleton.getConnection();

class Province extends StandardModel { }

Province.init(
  StandardModel.buildPropertyWithOptions(
    {
      ...StandardModel.buildPrimaryKey('provinceId', DataTypes.BIGINT),
      companyParentId: DataTypes.INTEGER,
      rajaOngkirId: DataTypes.INTEGER,
      countryId: DataTypes.BIGINT,
      provinceCode: DataTypes.STRING(5),
      provinceName: DataTypes.STRING(25)
    },
    { withDbId: true, withIsactive: true, withIsdel: true, withIsused: true, withCreate: true, withModify: true }
  ),
  StandardModel.buildStandardModelInformation('ms_province', 'Province', sequelize)
);

Province.hasOne(Country, { foreignKey: "country_id" });

export default Province;
