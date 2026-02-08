import { DataTypes } from "sequelize";
import DatabaseConnectionSingleton from "../../configs/DatabaseConnection.js";
import StandardModel from "../StandardModel.js";

const sequelize = DatabaseConnectionSingleton.getConnection();

class IxCoretaxCategory extends StandardModel { }
class IxCoretaxCategoryDt extends StandardModel { }

IxCoretaxCategory.init(
  StandardModel.buildPropertyWithOptions(
    {
      ...StandardModel.buildPrimaryKey('ixCoretaxCategoryId', DataTypes.BIGINT),
      fileName: DataTypes.STRING(50),
      totalData: DataTypes.INTEGER,
      totalInsert: DataTypes.INTEGER,
      totalUpdate: DataTypes.INTEGER,
      status: DataTypes.TINYINT,
    },
    { withCreate: true }
  ),
  StandardModel.buildStandardModelInformation('ix_coretax_category', 'IxCoretaxCategory', sequelize)
);

IxCoretaxCategoryDt.init(
  StandardModel.buildPropertyWithOptions(
    {
      ...StandardModel.buildPrimaryKey('ixCoretaxCategoryDtId', DataTypes.BIGINT),
      ixCoretaxCategoryId: DataTypes.BIGINT,
      coretaxCategoryId: DataTypes.BIGINT,
      coretaxCategoryCode: DataTypes.STRING(50),
      coretaxCategoryName: DataTypes.STRING(150),
    },
    { withIsactive: true, withIsdel: true }
  ),
  StandardModel.buildStandardModelInformation('ix_coretax_category_dt', 'IxCoretaxCategoryDt', sequelize)
);

export {
  IxCoretaxCategory,
  IxCoretaxCategoryDt
};

