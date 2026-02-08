import { DataTypes } from "sequelize";
import DatabaseConnectionSingleton from "../../configs/DatabaseConnection.js";
import StandardModel from "../StandardModel.js";

const sequelize = DatabaseConnectionSingleton.getConnection();

class IxItem extends StandardModel { }
class IxItemDt extends StandardModel { }

IxItem.init(
  StandardModel.buildPropertyWithOptions(
    {
      ...StandardModel.buildPrimaryKey('ixItemId', DataTypes.BIGINT),
      fileName: DataTypes.STRING(50),
      totalData: DataTypes.INTEGER,
      totalInsert: DataTypes.INTEGER,
      totalUpdate: DataTypes.INTEGER,
      status: DataTypes.TINYINT,
    },
    { withCreate: true }
  ),
  StandardModel.buildStandardModelInformation('ix_item', 'IxItem', sequelize)
);

IxItemDt.init(
  StandardModel.buildPropertyWithOptions(
    {
      ...StandardModel.buildPrimaryKey('ixItemDtId', DataTypes.BIGINT),
      ixItemId: DataTypes.BIGINT,
      itemCode: DataTypes.TEXT('tiny'),
      codeXt: DataTypes.STRING(100),
      itemName: DataTypes.STRING(100),
      category: DataTypes.STRING(200),
      subCategory: DataTypes.STRING(200),
      coretaxCategoryId: DataTypes.BIGINT,
      coretaxCategoryCode: DataTypes.STRING(100),
      itemTypeId: DataTypes.BIGINT,
      itemType: DataTypes.STRING(100),
      brandId: DataTypes.BIGINT,
      brand: DataTypes.STRING(100),
      vintage: DataTypes.STRING(20),
      pack: DataTypes.STRING(50),
      size: DataTypes.STRING(50),
      country: DataTypes.STRING(25),
      abv: DataTypes.STRING(20),
      bbd: DataTypes.STRING(50),
      itemUomId: DataTypes.BIGINT,
      unit: DataTypes.STRING(50),
      itemUomConvertId: DataTypes.BIGINT,
      unitConvert: DataTypes.STRING(100),
      principalId: DataTypes.BIGINT,
      principal: DataTypes.STRING(100),
      brandManager: DataTypes.STRING(100),
      status: DataTypes.TINYINT,
      keterangan: DataTypes.STRING(250),
      statusDb: DataTypes.STRING(50)
    },
    {}
  ),
  StandardModel.buildStandardModelInformation('ix_item_dt', 'IxItemDt', sequelize)
);

export {
  IxItem,
  IxItemDt
}

