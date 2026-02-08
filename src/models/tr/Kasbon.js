import { DataTypes } from 'sequelize';
import DatabaseConnectionSingleton from '../../configs/DatabaseConnection.js';
import StandardModel from '../StandardModel.js';
const sequelize = DatabaseConnectionSingleton.getConnection();

class Kasbon extends StandardModel { }

Kasbon.init(
  StandardModel.buildPropertyWithOptions(
    {
      ...StandardModel.buildPrimaryKey('trKasbonId', DataTypes.BIGINT),
      trKasbonCode: DataTypes.STRING(50),
      trKasbonDate: DataTypes.DATEONLY,
      namaKaryawan: DataTypes.STRING(500),
      nik: DataTypes.STRING(25),
      departementId: DataTypes.BIGINT,
      tanggalMasukKerja: DataTypes.DATEONLY,
      totalPinjaman: DataTypes.DOUBLE,
      keperluanPinjaman: DataTypes.TEXT,
      totalPotongan: DataTypes.DOUBLE,
      totalPotonganLain: DataTypes.DOUBLE,
      confirmtimeF: DataTypes.DATE,
      confirmbyF: DataTypes.INTEGER,
    },
    { withCreate: true, withModify: true }
  ),

  StandardModel.buildStandardModelInformation('tr_kasbon', 'Kasbon', sequelize)
);

export default Kasbon;
