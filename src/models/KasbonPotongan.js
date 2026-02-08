import { DataTypes } from 'sequelize';
import DatabaseConnectionSingleton from '../configs/DatabaseConnection.js';
import StandardModel from './StandardModel.js';
const sequelize = DatabaseConnectionSingleton.getConnection();

class KasbonPotongan extends StandardModel { }

KasbonPotongan.init(
  StandardModel.buildPropertyWithOptions(
    {
      ...StandardModel.buildPrimaryKey('kasbonPotonganId', DataTypes.INTEGER),
      kasbonPotonganName: DataTypes.STRING(50),
      total: DataTypes.DOUBLE
    },
    { withIsactive: true, withCreate: true, withIsused: true, withModify: true }
  ),
  StandardModel.buildStandardModelInformation('ms_kasbon_potongan', 'KasbonPotongan', sequelize)
);
export default KasbonPotongan;
