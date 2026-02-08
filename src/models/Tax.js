import { DataTypes } from 'sequelize';
import DatabaseConnectionSingleton from '../configs/DatabaseConnection.js';
import StandardModel from './StandardModel.js';
const sequelize = DatabaseConnectionSingleton.getConnection();

class Tax extends StandardModel {}
class TaxForm extends StandardModel {}

Tax.init(
  StandardModel.buildPropertyWithOptions(
    {
      ...StandardModel.buildPrimaryKey('taxId', DataTypes.BIGINT),
      companyParentId: DataTypes.INTEGER,
      taxName: DataTypes.STRING(25),
      taxType: DataTypes.INTEGER,
      publishDate: DataTypes.DATE,
      percentage: DataTypes.FLOAT,
      note: DataTypes.TEXT,
      defaults: DataTypes.TINYINT,
      iscoretax: DataTypes.TINYINT
    },
    { withDbId: true, withIsactive: true, withCreate: true, withModify: true, withIsdel: true }
  ),
  StandardModel.buildStandardModelInformation('ms_tax', 'Tax', sequelize)
);

TaxForm.init(
  StandardModel.buildPropertyWithOptions(
    {
      ...StandardModel.buildPrimaryKey('taxFormId', DataTypes.BIGINT),
      taxId: DataTypes.BIGINT,
      taxFormName: DataTypes.STRING(50)
    },
    { withCreate: true }
  ),
  StandardModel.buildStandardModelInformation('ms_tax_form', 'TaxForm', sequelize)
);

export { Tax, TaxForm };
