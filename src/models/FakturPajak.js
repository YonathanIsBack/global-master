import { DataTypes } from 'sequelize';
import DatabaseConnectionSingleton from '../configs/DatabaseConnection.js';
import StandardModel from './StandardModel.js';
const sequelize = DatabaseConnectionSingleton.getConnection();

class FakturPajak extends StandardModel {}

FakturPajak.init(
  StandardModel.buildPropertyWithOptions(
    {
      ...StandardModel.buildPrimaryKey('noFakturPajakId', DataTypes.BIGINT),
      noFakturPajakName: DataTypes.STRING(50),
      fromNumber: DataTypes.STRING(50),
      toNumber: DataTypes.STRING(50),
      prefix: DataTypes.STRING(4),
      subfix: DataTypes.STRING(3),
      numberNow: DataTypes.STRING(50),
      ismax: DataTypes.TINYINT
    },
    { withIsactive: true, withIsdel: true, withCreate: true, withModify: true }
  ),
  StandardModel.buildStandardModelInformation('no_faktur_pajak', 'FakturPajak', sequelize)
);

export default FakturPajak;
