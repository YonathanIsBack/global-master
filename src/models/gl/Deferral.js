import { DataTypes } from 'sequelize';
import StandardModel from '../StandardModel.js';
import DatabaseConnectionSingleton from '../../configs/DatabaseConnection.js';

const sequelize = DatabaseConnectionSingleton.getConnection();

class Deferral extends StandardModel {}
class DeferralDt extends StandardModel {}
class DeferralReject extends StandardModel {}
class DeferralRequest extends StandardModel {}

Deferral.init(
  StandardModel.buildPropertyWithOptions(
    {
      ...StandardModel.buildPrimaryKey('glDeferralId', DataTypes.BIGINT),
      glDeferralCode: DataTypes.STRING(50),
      glDeferralCodeTemp: DataTypes.STRING(50),
      glDeferralDate: DataTypes.DATE,
      supplierId: DataTypes.INTEGER,
      customerId: DataTypes.INTEGER,
      note: DataTypes.TEXT,
      startDate: DataTypes.DATE,
      continueDate: DataTypes.DATE,
      periode: DataTypes.INTEGER,
      status: DataTypes.TINYINT,
      statusNext: DataTypes.TINYINT,
      isedit: DataTypes.TINYINT,
      glDeferral: DataTypes.TINYINT,
      confirmtime: DataTypes.DATE,
      confirmby: DataTypes.INTEGER,
      confirmtimeF: DataTypes.DATE,
      confirmbyF: DataTypes.INTEGER
    },
    { withCreate: true, withModify: true }
  ),
  StandardModel.buildStandardModelInformation('gl_deferral', 'Deferral', sequelize)
);

DeferralDt.init(
  StandardModel.buildPropertyWithOptions(
    {
      ...StandardModel.buildPrimaryKey('glDeferralDtId', DataTypes.BIGINT),
      glDeferralId: DataTypes.BIGINT,
      coaDebetId: DataTypes.INTEGER,
      amount: DataTypes.DOUBLE,
      coaCreditId: DataTypes.INTEGER
    },
    {}
  ),
  StandardModel.buildStandardModelInformation('gl_deferral_dt', 'DeferralDt', sequelize)
);

DeferralReject.init(
  StandardModel.buildPropertyWithOptions(
    {
      ...StandardModel.buildPrimaryKey('glReferralRejectId', DataTypes.BIGINT),
      glReferralId: DataTypes.BIGINT,
      note: DataTypes.TEXT,
      userId: DataTypes.BIGINT
    },
    { withCreate: true }
  ),
  StandardModel.buildStandardModelInformation('gl_deferral_reject', 'DeferralReject', sequelize)
);

DeferralRequest.init(
  StandardModel.buildPropertyWithOptions(
    {
      ...StandardModel.buildPrimaryKey('glReferralRequestId', DataTypes.BIGINT),
      glReferralId: DataTypes.BIGINT,
      note: DataTypes.TEXT,
      statusRequest: DataTypes.INTEGER,
      userId: DataTypes.BIGINT
    },
    { withCreate: true }
  ),
  StandardModel.buildStandardModelInformation('gl_deferral_request', 'DeferralRequest', sequelize)
);

export { Deferral, DeferralDt, DeferralReject, DeferralRequest };
