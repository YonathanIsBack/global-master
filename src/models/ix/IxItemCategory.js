import { DataTypes } from "sequelize";
import DatabaseConnectionSingleton from "../../configs/DatabaseConnection.js";
import StandardModel from "../StandardModel.js";

const sequelize = DatabaseConnectionSingleton.getConnection();

class IxItemCategory extends StandardModel { }
class IxItemCategoryDt extends StandardModel { }

IxItemCategory.init(
  StandardModel.buildPropertyWithOptions(
    {
      ...StandardModel.buildPrimaryKey('ixItemCategoryId', DataTypes.BIGINT),
      fileName: DataTypes.STRING(50),
      totalData: DataTypes.INTEGER,
      totalInsert: DataTypes.INTEGER,
      totalUpdate: DataTypes.INTEGER,
      status: DataTypes.TINYINT,
    },
    { withCreate: true }
  ),
  StandardModel.buildStandardModelInformation('ix_item_category', 'IxItemCategory', sequelize)
);

IxItemCategoryDt.init(
  StandardModel.buildPropertyWithOptions(
    {
      ...StandardModel.buildPrimaryKey('ixItemCategoryDtId', DataTypes.BIGINT),
      ixItemCategoryId: DataTypes.BIGINT,
      itemCategoryParentId: DataTypes.BIGINT,
      itemCategoryParentCode: DataTypes.STRING(50),
      itemCategoryParentName: DataTypes.STRING(150),
      itemCategoryCode: DataTypes.STRING(50),
      itemCategoryName: DataTypes.STRING(150),
      coretaxCategoryId: DataTypes.BIGINT,
      coretaxCategoryCode: DataTypes.STRING(150),
      exciseRate: DataTypes.STRING(50),
      importTaxOption: DataTypes.STRING(50),
      importTaxValue: DataTypes.STRING(50),
      cogsCoaId: DataTypes.BIGINT,
      cogsCoaCode: DataTypes.STRING(50),
      cogsCoaName: DataTypes.STRING(150),
      cogs2CoaId: DataTypes.BIGINT,
      cogs2CoaCode: DataTypes.STRING(50),
      cogs2CoaName: DataTypes.STRING(150),
      inventoryCoaId: DataTypes.BIGINT,
      inventoryCoaCode: DataTypes.STRING(50),
      inventoryCoaName: DataTypes.STRING(150),
      isused: DataTypes.STRING(50),
      numberNow: DataTypes.STRING(50),
    },
    { withIsactive: true, withIsdel: true }
  ),
  StandardModel.buildStandardModelInformation('ix_item_category_dt', 'IxItemCategoryDt', sequelize)
);

export {
  IxItemCategory,
  IxItemCategoryDt
};

