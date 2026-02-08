import { DataTypes } from 'sequelize';
import DatabaseConnectionSingleton from '../configs/DatabaseConnection.js';
import StandardModel from './StandardModel.js';
const sequelize = DatabaseConnectionSingleton.getConnection();

class Notification extends StandardModel {}
class NotificationDetail extends StandardModel {}

Notification.init(
  StandardModel.buildPropertyWithOptions(
    {
      ...StandardModel.buildPrimaryKey('notificationId', DataTypes.BIGINT),
      transactionId: DataTypes.BIGINT,
      transactionCode: DataTypes.STRING(150),
      transactionDate: DataTypes.DATE,
      transactionType: DataTypes.INTEGER,
      userId: DataTypes.TEXT,
      userGroupId: DataTypes.TEXT,
      pageId: DataTypes.BIGINT,
      note: DataTypes.TEXT,
      notificationDate: DataTypes.DATE,
      isread: DataTypes.TINYINT,
      status: DataTypes.INTEGER,
      statusUpdate: DataTypes.INTEGER,
      modifiedTime: DataTypes.DATE
    },
    {}
  ),
  StandardModel.buildStandardModelInformation('nt_notification', 'Notification', sequelize)
);

NotificationDetail.init(
  StandardModel.buildPropertyWithOptions(
    {
      ...StandardModel.buildPrimaryKey('notificationDtId', DataTypes.BIGINT),
      notificationId: DataTypes.BIGINT,
      userId: DataTypes.TEXT,
      userGroupId: DataTypes.TEXT,
      isread: DataTypes.TINYINT,
      status: DataTypes.INTEGER,
      statusUpdate: DataTypes.INTEGER,
      modifiedTime: DataTypes.DATE
    },
    {}
  ),
  StandardModel.buildStandardModelInformation('nt_notification_dt', 'NotificationDetail', sequelize)
);

export { Notification, NotificationDetail };
