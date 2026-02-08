import { DataTypes } from 'sequelize';
import StandardModel from '../StandardModel.js';
import DatabaseConnectionSingleton from '../../configs/DatabaseConnection.js';

const sequelize = DatabaseConnectionSingleton.getConnection();

class MemoJurnal extends StandardModel {}
class MemoJurnalDt extends StandardModel {}
class MemoJurnalReject extends StandardModel {}
class MemoJurnalRequest extends StandardModel {}

MemoJurnal.init(
  StandardModel.buildPropertyWithOptions(
    {
      ...StandardModel.buildPrimaryKey('glMemoJurnalId', DataTypes.BIGINT),
      glMemoCode: DataTypes.STRING(50),
      glMemoCodeTemp: DataTypes.STRING(50),
      glMemoDate: DataTypes.DATE,
      type: DataTypes.TINYINT,
      reff: DataTypes.STRING(500),
      note: DataTypes.TEXT,
      supplierId: DataTypes.BIGINT,
      customerId: DataTypes.BIGINT,
      currencyId: DataTypes.BIGINT,
      currencyRate: DataTypes.DOUBLE,
      isrecurring: DataTypes.TINYINT,
      recurringName: DataTypes.STRING(150),
      total: DataTypes.DOUBLE,
      status: DataTypes.TINYINT,
      statusNext: DataTypes.TINYINT,
      isedit: DataTypes.TINYINT,
      confirmtime: DataTypes.DATE,
      confirmby: DataTypes.INTEGER,
      confirmtimeF: DataTypes.DATE,
      confirmbyF: DataTypes.INTEGER
    },
    { withCreate: true, withModify: true }
  ),
  StandardModel.buildStandardModelInformation('gl_memo_jurnal', 'MemoJurnal', sequelize)
);

MemoJurnalDt.init(
  StandardModel.buildPropertyWithOptions(
    {
      ...StandardModel.buildPrimaryKey('glMemoJurnalDtId', DataTypes.BIGINT),
      glMemoJurnalId: DataTypes.BIGINT,
      coaId: DataTypes.BIGINT,
      departmentId: DataTypes.INTEGER,
      currencyId: DataTypes.INTEGER,
      currencyRate: DataTypes.DOUBLE,
      keterangan: DataTypes.TEXT,
      total: DataTypes.DOUBLE,
      debit: DataTypes.DOUBLE,
      credit: DataTypes.DOUBLE
    },
    {}
  ),
  StandardModel.buildStandardModelInformation('gl_memo_jurnal_dt', 'MemoJurnalDt', sequelize)
);

MemoJurnalReject.init(
  StandardModel.buildPropertyWithOptions(
    {
      ...StandardModel.buildPrimaryKey('memoJurnalRejectId', DataTypes.BIGINT),
      glMemoJurnalId: DataTypes.BIGINT,
      note: DataTypes.TEXT,
      userId: DataTypes.BIGINT
    },
    { withCreate: true }
  ),
  StandardModel.buildStandardModelInformation('gl_memo_jurnal_reject', 'MemoJurnalReject', sequelize)
);

MemoJurnalRequest.init(
  StandardModel.buildPropertyWithOptions(
    {
      ...StandardModel.buildPrimaryKey('memoJurnalRequestId', DataTypes.BIGINT),
      glMemoJurnalId: DataTypes.BIGINT,
      note: DataTypes.TEXT,
      statusRequest: DataTypes.INTEGER,
      userId: DataTypes.BIGINT
    },
    { withCreate: true }
  ),
  StandardModel.buildStandardModelInformation('gl_memo_jurnal_request', 'MemoJurnalRequest', sequelize)
);

export { MemoJurnal, MemoJurnalDt, MemoJurnalReject, MemoJurnalRequest };
