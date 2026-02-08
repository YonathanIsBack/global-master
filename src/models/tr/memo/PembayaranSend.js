import { DataTypes } from 'sequelize';
import DatabaseConnectionSingleton from '../../../configs/DatabaseConnection.js';
import StandardModel from '../../StandardModel.js';
const sequelize = DatabaseConnectionSingleton.getConnection();

class PembayaranSend extends StandardModel { }
class PembayaranSendDt extends StandardModel { }

PembayaranSend.init(
  StandardModel.buildPropertyWithOptions(
    {
      ...StandardModel.buildPrimaryKey('memoPembayaranSendId', DataTypes.BIGINT),
      memoPembayaranSendCode: DataTypes.STRING(25),
      memoPembayaranSendDate: DataTypes.DATEONLY,
      shippingId: DataTypes.BIGINT,
      pic: DataTypes.STRING(250),
      status: DataTypes.TINYINT,
      total: DataTypes.DOUBLE,
      confirmtimeF: DataTypes.DATE,
      confirmbyF: DataTypes.INTEGER
    },
    { withCreate: true, withModify: true }
  ),

  StandardModel.buildStandardModelInformation(
    'tr_memo_pembayaran_send',
    'PembayaranSend',
    sequelize
  )
);

PembayaranSendDt.init(
  StandardModel.buildPropertyWithOptions(
    {
      ...StandardModel.buildPrimaryKey('memoPembayaranSendDtId', DataTypes.BIGINT),
      memoPembayaranSendId: DataTypes.BIGINT,
      memoPembayaranId: DataTypes.BIGINT,
      total: DataTypes.DOUBLE,
    },
    {}
  ),

  StandardModel.buildStandardModelInformation(
    'tr_memo_pembayaran_send_dt',
    'PembayaranSendDt',
    sequelize
  )
);

export { PembayaranSend, PembayaranSendDt };

