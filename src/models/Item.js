import { DataTypes } from 'sequelize';
import DatabaseConnectionSingleton from '../configs/DatabaseConnection.js';
import StandardModel from './StandardModel.js';
const sequelize = DatabaseConnectionSingleton.getConnection();

class Item extends StandardModel { }
class ItemBuying extends StandardModel { }
class ItemCategory extends StandardModel { }
class ItemCombo extends StandardModel { }
class ItemImg extends StandardModel { }
class ItemLabel extends StandardModel { }
class ItemLabelDetail extends StandardModel { }
class ItemPrice extends StandardModel { }
class ItemSubcategory extends StandardModel { }
class ItemType extends StandardModel { }
class ItemUom extends StandardModel { }

Item.init(
  StandardModel.buildPropertyWithOptions(
    {
      ...StandardModel.buildPrimaryKey('itemId', DataTypes.BIGINT),
      itemCategoryId: DataTypes.INTEGER,
      itemCategorySubId: DataTypes.INTEGER,
      coretaxCategoryId: DataTypes.BIGINT,
      itemCode: DataTypes.STRING(25),
      itemCodeTrans: DataTypes.STRING(25),
      itemCodeTax: DataTypes.STRING(50),
      codeXt: DataTypes.STRING(100),
      itemName: DataTypes.STRING(200),
      principalId: DataTypes.BIGINT,
      brandId: DataTypes.INTEGER,
      itemTypeId: DataTypes.INTEGER,
      itemUomId: DataTypes.INTEGER,
      itemUomConvertId: DataTypes.INTEGER,
      rfid: DataTypes.STRING(25),
      qrCode: DataTypes.STRING(25),
      safetyStock: DataTypes.INTEGER,
      countryId: DataTypes.INTEGER,
      vintage: DataTypes.INTEGER,
      size: DataTypes.INTEGER,
      abv: DataTypes.DOUBLE,
      pack: DataTypes.STRING,
      buyPrice: DataTypes.DOUBLE,
      avgPrice: DataTypes.DOUBLE,
      iscombo: DataTypes.TINYINT,
      isbbd: DataTypes.TINYINT
    },
    { withIsactive: true, withIsdel: true, withIsused: true, withCreate: true, withModify: true }
  ),
  StandardModel.buildStandardModelInformation('ms_item', 'Item', sequelize)
);

ItemBuying.init(
  StandardModel.buildPropertyWithOptions(
    {
      ...StandardModel.buildPrimaryKey('itemBuyingId', DataTypes.BIGINT),
      companyParentId: DataTypes.INTEGER,
      itemId: DataTypes.INTEGER,
      supplierId: DataTypes.INTEGER,
      price: DataTypes.DOUBLE
    },
    { withDbId: true }
  ),
  StandardModel.buildStandardModelInformation('ms_item_buying', 'ItemBuying', sequelize)
);

ItemCategory.init(
  StandardModel.buildPropertyWithOptions(
    {
      ...StandardModel.buildPrimaryKey('itemCategoryId', DataTypes.BIGINT),
      coretaxCategoryId: DataTypes.BIGINT,
      companyParentId: DataTypes.INTEGER,
      itemCategoryParentId: DataTypes.INTEGER,
      itemCategoryCode: DataTypes.STRING(25),
      itemCategoryName: DataTypes.STRING(50),
      exciseRate: DataTypes.DOUBLE,
      importTaxOption: DataTypes.TINYINT,
      importTaxValue: DataTypes.DOUBLE,
      cogsCoaId: DataTypes.BIGINT,
      cogs2CoaId: DataTypes.BIGINT,
      sellCoaId: DataTypes.BIGINT,
      sell2CoaId: DataTypes.BIGINT,
      inventoryCoaId: DataTypes.BIGINT,
      numberNow: DataTypes.INTEGER
    },
    { withDbId: true, withIsactive: true, withIsdel: true, withIsused: true, withCreate: true, withModify: true , withIsused:true }
  ),
  StandardModel.buildStandardModelInformation('ms_item_category', 'ItemCategory', sequelize)
);

ItemCombo.init(
  StandardModel.buildPropertyWithOptions(
    {
      ...StandardModel.buildPrimaryKey('itemComboId', DataTypes.INTEGER),
      itemId: DataTypes.INTEGER,
      itemDetailId: DataTypes.INTEGER,
      itemName: DataTypes.STRING(200),
      itemCode: DataTypes.STRING(20),
      qty: DataTypes.INTEGER
    },
    { withCreate: true, withModify: true }
  ),
  StandardModel.buildStandardModelInformation('ms_item_combo', 'ItemCombo', sequelize)
);

ItemImg.init(
  StandardModel.buildPropertyWithOptions(
    {
      ...StandardModel.buildPrimaryKey('itemImgId', DataTypes.BIGINT),
      companyParentId: DataTypes.INTEGER,
      itemId: DataTypes.INTEGER,
      imgName: DataTypes.STRING(150),
      urlImg: DataTypes.STRING(500),
      isdefault: DataTypes.TINYINT
    },
    { withDbId: true, withIsactive: true }
  ),
  StandardModel.buildStandardModelInformation('ms_item_img', 'ItemImg', sequelize)
);

ItemLabel.init(
  StandardModel.buildPropertyWithOptions(
    {
      ...StandardModel.buildPrimaryKey('itemLabelId', DataTypes.BIGINT),
      companyParentId: DataTypes.INTEGER,
      itemId: DataTypes.INTEGER,
      labelId: DataTypes.INTEGER,
      labelValue: DataTypes.STRING(100)
    },
    { withDbId: true }
  ),
  StandardModel.buildStandardModelInformation('ms_item_label', 'ItemLabel', sequelize)
);

ItemLabelDetail.init(
  StandardModel.buildPropertyWithOptions(
    {
      ...StandardModel.buildPrimaryKey('itemLabelDetailId', DataTypes.BIGINT),
      companyParentId: DataTypes.INTEGER,
      itemLabelId: DataTypes.INTEGER,
      labelId: DataTypes.INTEGER,
      labelValue: DataTypes.TEXT
    },
    { withDbId: true }
  ),
  StandardModel.buildStandardModelInformation('ms_item_label_detail', 'ItemLabelDetail', sequelize)
);

ItemPrice.init(
  StandardModel.buildPropertyWithOptions(
    {
      ...StandardModel.buildPrimaryKey('itemPriceId', DataTypes.BIGINT),
      dbId: DataTypes.INTEGER,
      companyParentId: DataTypes.INTEGER,
      itemId: DataTypes.INTEGER,
      customerTypeId: DataTypes.INTEGER,
      price: DataTypes.DOUBLE
    },
    { withDbId: true }
  ),
  StandardModel.buildStandardModelInformation('ms_item_price', 'ItemPrice', sequelize)
);

ItemSubcategory.init(
  StandardModel.buildPropertyWithOptions(
    {
      ...StandardModel.buildPrimaryKey('itemSubcategoryId', DataTypes.BIGINT),
      companyParentId: DataTypes.INTEGER,
      itemSubcategoryParentId: DataTypes.INTEGER,
      itemSubcategoryCode: DataTypes.STRING(5),
      itemSubcategoryName: DataTypes.STRING(25)
    },
    { withDbId: true, withIsactive: true, withIsdel: true, withCreate: true, withModify: true }
  ),
  StandardModel.buildStandardModelInformation('ms_item_subcategory', 'ItemSubcategory', sequelize)
);

ItemType.init(
  StandardModel.buildPropertyWithOptions(
    {
      ...StandardModel.buildPrimaryKey('itemTypeId', DataTypes.BIGINT),
      coretaxTypeId: DataTypes.BIGINT,
      companyParentId: DataTypes.INTEGER,
      itemTypeCode: DataTypes.STRING(5),
      itemTypeName: DataTypes.STRING(25),
      isstock: DataTypes.TINYINT
    },
    { withDbId: true, withIsactive: true, withIsdel: true, withIsused: true, withCreate: true, withModify: true }
  ),
  StandardModel.buildStandardModelInformation('ms_item_type', 'ItemType', sequelize)
);

ItemUom.init(
  StandardModel.buildPropertyWithOptions(
    {
      ...StandardModel.buildPrimaryKey('itemUomId', DataTypes.BIGINT),
      companyParentId: DataTypes.INTEGER,
      itemUomCode: DataTypes.STRING(25),
      itemUomName: DataTypes.STRING(50),
      coretaxUomId: DataTypes.BIGINT
    },
    { withDbId: true, withIsactive: true, withIsdel: true, withIsused: true, withCreate: true, withModify: true }
  ),
  StandardModel.buildStandardModelInformation('ms_item_uom', 'ItemUom', sequelize)
);

export {
  Item,
  ItemBuying,
  ItemCategory,
  ItemCombo,
  ItemImg,
  ItemLabel,
  ItemLabelDetail,
  ItemPrice,
  ItemSubcategory,
  ItemType,
  ItemUom
};
