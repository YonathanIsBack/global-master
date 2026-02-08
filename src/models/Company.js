import { DataTypes } from 'sequelize';
import DatabaseConnectionSingleton from '../configs/DatabaseConnection.js';
import StandardModel from './StandardModel.js';
const sequelize = DatabaseConnectionSingleton.getConnection();

class Company extends StandardModel {}
class CompanyBank extends StandardModel {}

Company.init(
  StandardModel.buildPropertyWithOptions(
    {
      ...StandardModel.buildPrimaryKey('companyId', DataTypes.BIGINT),
      companyParentId: DataTypes.BIGINT,
      companyIdentity: DataTypes.STRING(10),
      companyCode: DataTypes.STRING(10),
      companyCif: DataTypes.STRING(10),
      companyName: DataTypes.STRING(50),
      location: DataTypes.STRING(25),
      logo: DataTypes.STRING(100),
      accountingPeriod: DataTypes.STRING(150),
      preferencePhonecode: DataTypes.TEXT,
      preferencePhone: DataTypes.TEXT,
      currencyId: DataTypes.BIGINT,
      website: DataTypes.STRING(100),
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
      taxZipCode: DataTypes.STRING(10),
      istax: DataTypes.TINYINT,
      databaseHost: DataTypes.TEXT,
      databaseUsername: DataTypes.TEXT,
      databasePassword: DataTypes.TEXT,
      databaseName: DataTypes.TEXT,
      databaseUnofficialHost: DataTypes.TEXT,
      databaseUnofficialUsername: DataTypes.TEXT,
      databaseUnofficialPassword: DataTypes.TEXT,
      databaseUnofficialName: DataTypes.TEXT
    },
    { withDbId: true, withIsactive: true, withIsdel: true, withCreate: true, withModify: true }
  ),
  StandardModel.buildStandardModelInformation('ms_company', 'Company', sequelize)
);

CompanyBank.init(
  StandardModel.buildPropertyWithOptions(
    {
      ...StandardModel.buildPrimaryKey('bankCompanyId', DataTypes.BIGINT),
      bankId: DataTypes.INTEGER,
      companyParentId: DataTypes.INTEGER,
      companyId: DataTypes.INTEGER,
      bankCompanyCode: DataTypes.STRING(5),
      bankCompanyName: DataTypes.STRING(25),
      branch: DataTypes.STRING(50),
      accountNumber: DataTypes.STRING(30),
      currencyId: DataTypes.INTEGER
    },
    { withDbId: true, withIsactive: true, withIsdel: true, withCreate: true, withModify: true }
  ),
  StandardModel.buildStandardModelInformation('ms_company_bank', 'CompanyBank', sequelize)
);

export { Company, CompanyBank };
