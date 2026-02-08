import { DataTypes } from 'sequelize';
import DatabaseConnectionSingleton from '../../../configs/DatabaseConnection.js';
import StandardModel from './StandardModel.js';
const sequelize = DatabaseConnectionSingleton.getConnection();

class TRImport extends StandardModel {}
class PageMenuTerbuka extends StandardModel {}

TRImport.init(
  StandardModel.buildPropertyWithOptions(
    {
      ...StandardModel.buildPrimaryKey('pageId', DataTypes.BIGINT),
      pagePath: DataTypes.STRING(500),
      pageName: DataTypes.STRING(50),
      pageUrl: DataTypes.STRING(500),
      urutan: DataTypes.INTEGER
    },
    { withIsactive: true, withCreate: true, withModify: true }
  ),
  StandardModel.buildStandardModelInformation('ms_page', 'Page', sequelize)
);

PageMenuTerbuka.init(
  StandardModel.buildPropertyWithOptions(
    {
      ...StandardModel.buildPrimaryKey('pageId', DataTypes.BIGINT),
      pagePath: DataTypes.STRING(500),
      pageName: DataTypes.STRING(50),
      pageUrl: DataTypes.STRING(500),
      urutan: DataTypes.INTEGER
    },
    { withIsactive: true, withCreate: true, withModify: true }
  ),
  StandardModel.buildStandardModelInformation('ms_page_menu_terbuka', 'PageMenuTerbuka', sequelize)
);
export { TRImport as PageMenu, PageMenuTerbuka };
