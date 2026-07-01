import { DataTypes } from 'sequelize';
import DatabaseConnectionSingleton from '../../configs/DatabaseConnection.js';
import StandardModel from '../StandardModel.js';

const sequelize = DatabaseConnectionSingleton.getConnection();

class MsCk6Golongan extends StandardModel {}

MsCk6Golongan.init(
  StandardModel.buildPropertyWithOptions(
    {
      ck6GolonganId: {
        type: DataTypes.BIGINT,
        field: 'ck6_golongan_id',
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
        validate: {
          isInt: { msg: 'Primary Key must be Integer' },
          notNull: { msg: 'Primary Key cannot be null' }
        }
      },
      golonganName: DataTypes.STRING(100),
      fromAbv: DataTypes.DOUBLE,
      toAbv: DataTypes.DOUBLE,
      price: DataTypes.DOUBLE
    },
    { withIsactive: true, withIsdel: true, withCreate: true, withModify: true }
  ),
  StandardModel.buildStandardModelInformation('ms_ck6_golongan', 'MsCk6Golongan', sequelize)
);

export default MsCk6Golongan;
