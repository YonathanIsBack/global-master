import { DataTypes } from 'sequelize';
import DatabaseConnectionSingleton from '../configs/DatabaseConnection.js';
import StandardModel from './StandardModel.js';
const sequelize = DatabaseConnectionSingleton.getConnection();

class Preference extends StandardModel {}

Preference.init(
  StandardModel.buildPropertyWithOptions(
    {
      ...StandardModel.buildPrimaryKey('preferenceId', DataTypes.BIGINT),
      companyParentId: DataTypes.INTEGER,
      companyId: DataTypes.BIGINT,
      preferenceCode: DataTypes.STRING(5),
      logo: DataTypes.STRING(10),
      accountingPeriod: DataTypes.TINYINT,
      preferencePhone: DataTypes.TEXT,
      basedCurrency: DataTypes.BIGINT,
      website: DataTypes.STRING(50),
      preferenceAddress: DataTypes.TEXT,
      preferenceCountryId: DataTypes.BIGINT,
      preferenceProvinceId: DataTypes.BIGINT,
      preferenceZipCode: DataTypes.STRING(10),
      npwpNo: DataTypes.STRING(30),
      kluNo: DataTypes.STRING(30),
      pkpDate: DataTypes.DATE,
      pkpNo: DataTypes.STRING(30),
      taxAddress: DataTypes.TEXT,
      taxCountryId: DataTypes.BIGINT,
      taxProvinceId: DataTypes.BIGINT,
      taxZipCode: DataTypes.BIGINT
    },
    { withIsactive: true, withIsdel: true, withCreate: true, withModify: true, withDbId: true }
  ),
  StandardModel.buildStandardModelInformation('ms_preference', 'Preference', sequelize)
);
export default Preference;
