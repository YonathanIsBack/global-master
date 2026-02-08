import { DataTypes } from 'sequelize';
import DatabaseConnectionSingleton from '../configs/DatabaseConnection.js';
import StandardModel from './StandardModel.js';
const sequelize = DatabaseConnectionSingleton.getConnection();

class Action extends StandardModel { }
class ActionPage extends StandardModel { }

Action.init(
  StandardModel.buildPropertyWithOptions(
    {
      ...StandardModel.buildPrimaryKey('actionId', DataTypes.BIGINT),
      actionName: DataTypes.STRING(50),
      posisi: DataTypes.INTEGER,
      modtime: DataTypes.DATE
    },
    { withCreate: true, withModify: true }
  ),
  StandardModel.buildStandardModelInformation('ms_action', 'Action', sequelize)
);

ActionPage.init(
  StandardModel.buildPropertyWithOptions(
    {
      ...StandardModel.buildPrimaryKey('actionPageId', DataTypes.BIGINT),
      pageId: DataTypes.BIGINT,
      actionId: DataTypes.BIGINT
    },
    { withCreate: true, withModify: true }
  ),
  StandardModel.buildStandardModelInformation('ms_action_page', 'ActionPage', sequelize)
);

export { Action, ActionPage };
