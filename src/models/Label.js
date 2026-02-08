import { DataTypes } from 'sequelize';
import DatabaseConnectionSingleton from '../configs/DatabaseConnection.js';
import StandardModel from './StandardModel.js';
const sequelize = DatabaseConnectionSingleton.getConnection();

class Label extends StandardModel { }
class LabelSettinganPrint extends StandardModel { }

Label.init(
  StandardModel.buildPropertyWithOptions(
    {
      ...StandardModel.buildPrimaryKey('labelId', DataTypes),
      companyParentId: DataTypes.INTEGER,
      labelName: DataTypes.STRING(25),
      labelValue: DataTypes.TINYINT,
      labelNotes: DataTypes.TEXT,
      urutan: DataTypes.INTEGER
    },
    { withDbId: true, withIsactive: true, withIsdel: true, withIsused: true, withCreate: true, withModify: true }
  ),
  StandardModel.buildStandardModelInformation('ms_label', 'Label', sequelize)
);

LabelSettinganPrint.init(
  StandardModel.buildPropertyWithOptions(
    {
      ...StandardModel.buildPrimaryKey('labelSettingPrint', DataTypes.INTEGER),
      labelId: DataTypes.INTEGER
    },
    { withIsactive: true, withCreate: true, withModify: true }
  ),
  StandardModel.buildStandardModelInformation(
    'ms_label_setting_print',
    'LabelSettinganPrint',
    sequelize
  )
);

export { Label, LabelSettinganPrint };
