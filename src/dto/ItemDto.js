import StandardDto from './StandardDto.js';

class ItemDto extends StandardDto {
  #itemId;
  #itemCategoryId;
  #itemCategorySubId;
  #coretaxCategoryId;
  #itemCode;
  #itemCodeTrans;
  #itemCodeTax;
  #codeXt;
  #itemName;
  #principalId;
  #brandId;
  #itemTypeId;
  #itemUomId;
  #itemUomConvertId;
  #rfid;
  #qrCode;
  #safetyStock;
  #countryId;
  #vintage;
  #size;
  #abv;
  #pack;
  #buyPrice;
  #avgPrice;
  #iscombo;
  #isbbd;

  constructor(dto) {
    super(dto);
    this.#itemId = dto.item_id;
    this.#itemCategoryId = dto.item_category_id;
    this.#itemCategorySubId = dto.item_category_sub_id;
    this.#coretaxCategoryId = dto.coretax_category_id;
    this.#itemCode = dto.item_code;
    this.#itemCodeTrans = dto.item_code_trans;
    this.#itemCodeTax = dto.item_code_tax;
    this.#codeXt = dto.code_xt;
    this.#itemName = dto.item_name;
    this.#principalId = dto.principal_id;
    this.#brandId = dto.brand_id;
    this.#itemTypeId = dto.item_type_id;
    this.#itemUomId = dto.item_uom_id;
    this.#itemUomConvertId = dto.item_uom_convert_id;
    this.#rfid = dto.rfid;
    this.#qrCode = dto.qr_code;
    this.#safetyStock = dto.safety_stock;
    this.#countryId = dto.country_id;
    this.#vintage = dto.vintage;
    this.#size = dto.size;
    this.#abv = dto.abv;
    this.#pack = dto.pack;
    this.#buyPrice = dto.buy_price;
    this.#avgPrice = dto.avg_price;
    this.#iscombo = dto.iscombo;
    this.#isbbd = dto.isbbd;
  }

  get itemId() {
    return this.#itemId;
  }

  toModel() {
    return {
      itemId: this.#itemId,
      itemCategoryId: this.#itemCategoryId,
      itemCategorySubId: this.#itemCategorySubId,
      coretaxCategoryId: this.#coretaxCategoryId,
      itemCode: this.#itemCode,
      itemCodeTrans: this.#itemCodeTrans,
      itemCodeTax: this.#itemCodeTax,
      codeXt: this.#codeXt,
      itemName: this.#itemName,
      principalId: this.#principalId,
      brandId: this.#brandId,
      itemTypeId: this.#itemTypeId,
      itemUomId: this.#itemUomId,
      itemUomConvertId: this.#itemUomConvertId,
      rfid: this.#rfid,
      qrCode: this.#qrCode,
      safetyStock: this.#safetyStock,
      countryId: this.#countryId,
      vintage: this.#vintage,
      size: this.#size,
      abv: this.#abv,
      pack: this.#pack,
      buyPrice: this.#buyPrice,
      avgPrice: this.#avgPrice,
      iscombo: this.#iscombo,
      isbbd: this.#isbbd,
      ...super.toModel()
    };
  }
}

class ItemBuyingDto extends StandardDto {
  #itemBuyingId;
  #companyParentId;
  #itemId;
  #supplierId;
  #price;

  constructor(dto) {
    super(dto);
    this.#itemBuyingId = dto.item_buying_id;
    this.#companyParentId = dto.company_parent_id;
    this.#itemId = dto.item_id;
    this.#supplierId = dto.supplier_id;
    this.#price = dto.price;
  }

  get itemBuyingId() {
    return this.#itemBuyingId;
  }

  toModel() {
    return {
      itemBuyingId: this.#itemBuyingId,
      companyParentId: this.#companyParentId,
      itemId: this.#itemId,
      supplierId: this.#supplierId,
      price: this.#price,
      ...super.toModel()
    };
  }
}

class ItemCategoryDto extends StandardDto {
  #itemCategoryId;
  #coretaxCategoryId;
  #companyParentId;
  #itemCategoryParentId;
  #itemCategoryCode;
  #itemCategoryName;
  #coaGroupName;
  #exciseRate;
  #importTaxOption;
  #importTaxValue;
  #cogsCoaId;
  #cogs2CoaId;
  #sellCoaId;
  #sell2CoaId;
  #inventoryCoaId;
  #numberNow;

  constructor(dto) {
    super(dto);
    this.#itemCategoryId = dto.item_category_id;
    this.#coretaxCategoryId = dto.coretax_category_id;
    this.#companyParentId = dto.company_parent_id;
    this.#itemCategoryParentId = dto.item_category_parent_id;
    this.#itemCategoryCode = dto.item_category_code;
    this.#itemCategoryName = dto.item_category_name;
    this.#coaGroupName = dto.coa_group_name;
    this.#exciseRate = dto.exices_rate;
    this.#importTaxOption = dto.import_tax_option;
    this.#importTaxValue = dto.import_tax_value;
    this.#cogsCoaId = dto.cogs_coa_id;
    this.#cogs2CoaId = dto.cogs2_coa_id;
    this.#sellCoaId = dto.sell_coa_id;
    this.#sell2CoaId = dto.sell2_coa_id;
    this.#inventoryCoaId = dto.inventory_coa_id;
    this.#numberNow = dto.number_now;
  }

  get itemCategoryId() {
    return this.#itemCategoryId;
  }

  toModel() {
    return {
      itemCategoryId: this.#itemCategoryId,
      coretaxCategoryId: this.#coretaxCategoryId,
      companyParentId: this.#companyParentId,
      itemCategoryParentId: this.#itemCategoryParentId,
      itemCategoryCode: this.#itemCategoryCode,
      itemCategoryName: this.#itemCategoryName,
      coaGroupName: this.#coaGroupName,
      exciseRate: this.#exciseRate,
      importTaxOption: this.#importTaxOption,
      importTaxValue: this.#importTaxValue,
      cogsCoaId: this.#cogsCoaId,
      cogs2CoaId: this.#cogs2CoaId,
      sellCoaId: this.#sellCoaId,
      sell2CoaId: this.#sell2CoaId,
      inventoryCoaId: this.#inventoryCoaId,
      numberNow: this.#numberNow,
      ...super.toModel()
    };
  }
}

class ItemComboDto extends StandardDto {
  #itemComboId;
  #itemId;
  #itemDetailId;
  #itemName;
  #itemCode;
  #qty;

  constructor(dto) {
    super(dto);
    this.#itemComboId = dto.item_combo_id;
    this.#itemId = dto.item_id;
    this.#itemDetailId = dto.item_detail_id;
    this.#itemName = dto.item_name;
    this.#itemCode = dto.item_code;
    this.#qty = dto.qty;
  }

  get itemComboId() {
    return this.#itemComboId;
  }

  toModel() {
    return {
      itemComboId: this.#itemComboId,
      itemId: this.#itemId,
      itemDetailId: this.#itemDetailId,
      itemName: this.#itemName,
      itemCode: this.#itemCode,
      qty: this.#qty,
      ...super.toModel()
    };
  }
}

class ItemImgDto extends StandardDto {
  #itemImgId;
  #companyParentId;
  #itemId;
  #imgName;
  #urlImg;
  #isdefault;
  #isactive;

  constructor(dto) {
    super(dto);
    this.#itemImgId = dto.item_img_id;
    this.#companyParentId = dto.company_parent_id;
    this.#itemId = dto.item_id;
    this.#imgName = dto.img_name;
    this.#urlImg = dto.url_img;
    this.#isdefault = dto.isdefault;
    this.#isactive = dto.isactive;
  }

  get itemImgId() {
    return this.#itemImgId;
  }

  toModel() {
    return {
      itemImgId: this.#itemImgId,
      companyParentId: this.#companyParentId,
      itemId: this.#itemId,
      imgName: this.#imgName,
      urlImg: this.#urlImg,
      isdefault: this.#isdefault,
      isactive: this.#isactive,
      ...super.toModel()
    };
  }
}

class ItemLabelDto extends StandardDto {
  #itemLabelId;
  #companyParentId;
  #itemId;
  #labelId;
  #labelValue;

  constructor(dto) {
    super(dto);
    this.#itemLabelId = dto.item_label_id;
    this.#companyParentId = dto.company_parent_id;
    this.#itemId = dto.item_id;
    this.#labelId = dto.label_id;
    this.#labelValue = dto.label_value;
  }

  get itemLabelId() {
    return this.#itemLabelId;
  }

  toModel() {
    return {
      itemLabelId: this.#itemLabelId,
      companyParentId: this.#companyParentId,
      itemId: this.#itemId,
      imgName: this.#labelId,
      labelValue: this.#labelValue,
      ...super.toModel()
    };
  }
}

class ItemLabelDetailDto extends StandardDto {
  #itemLabelDetailId;
  #companyParentId;
  #itemLabelId;
  #labelId;
  #labelValue;

  constructor(dto) {
    super(dto);
    this.#itemLabelDetailId = dto.item_label_detail_id;
    this.#companyParentId = dto.company_parent_id;
    this.#itemLabelId = dto.item_label_id;
    this.#labelId = dto.label_id;
    this.#labelValue = dto.label_value;
  }

  get itemLabelDetailId() {
    return this.#itemLabelDetailId;
  }

  toModel() {
    return {
      itemLabelDetailId: this.#itemLabelDetailId,
      companyParentId: this.#companyParentId,
      itemLabelId: this.#itemLabelId,
      labelId: this.#labelId,
      labelValue: this.#labelValue,
      ...super.toModel()
    };
  }
}

class ItemPriceDto extends StandardDto {
  #itemPriceId;
  #companyParentId;
  #itemId;
  #customerTypeId;
  #price;

  constructor(dto) {
    super(dto);
    this.#itemPriceId = dto.item_price_id;
    this.#companyParentId = dto.company_parent_id;
    this.#itemId = dto.item_id;
    this.#customerTypeId = dto.customer_type_id;
    this.#price = dto.price;
  }

  get itemPriceId() {
    return this.#itemPriceId;
  }

  toModel() {
    return {
      itemPriceId: this.#itemPriceId,
      companyParentId: this.#companyParentId,
      itemId: this.#itemId,
      customerTypeId: this.#customerTypeId,
      price: this.#price,
      ...super.toModel()
    };
  }
}
class ItemSubCategoryDto extends StandardDto {
  #itemSubcategoryId;
  #companyParentId;
  #itemSubcategoryParentId;
  #itemSubcategoryCode;
  #itemSubcategoryName;

  constructor(dto) {
    super(dto);
    this.#itemSubcategoryId = dto.item_subcategory_id;
    this.#companyParentId = dto.company_parent_id;
    this.#itemSubcategoryParentId = dto.item_subcategory_parent_id;
    this.#itemSubcategoryCode = dto.item_subcategory_code;
    this.#itemSubcategoryName = dto.item_subcategory_name;
  }

  get itemSubcategoryId() {
    return this.#itemSubcategoryId;
  }

  toModel() {
    return {
      itemSubcategoryId: this.#itemSubcategoryId,
      companyParentId: this.#companyParentId,
      itemSubcategoryParentId: this.#itemSubcategoryParentId,
      itemSubcategoryCode: this.#itemSubcategoryCode,
      itemSubcategoryName: this.#itemSubcategoryName,
      ...super.toModel()
    };
  }
}
class ItemTypeDto extends StandardDto {
  #itemTypeId;
  #coretaxTypeId;
  #companyParentId;
  #itemTypeCode;
  #itemTypeName;
  #isstock;

  constructor(dto) {
    super(dto);
    this.#itemTypeId = dto.item_type_id;
    this.#coretaxTypeId = dto.coretax_type_id;
    this.#companyParentId = dto.company_parent_id;
    this.#itemTypeCode = dto.item_type_code;
    this.#itemTypeName = dto.item_type_name;
    this.#isstock = dto.isstock;
  }

  get itemTypeId() {
    return this.#itemTypeId;
  }

  toModel() {
    return {
      itemTypeId: this.#itemTypeId,
      coretaxTypeId: this.#coretaxTypeId,
      companyParentId: this.#companyParentId,
      itemTypeCode: this.#itemTypeCode,
      itemTypeName: this.#itemTypeName,
      isstock: this.#isstock,
      ...super.toModel()
    };
  }
}
class ItemUomDto extends StandardDto {
  #itemUomId;
  #companyParentId;
  #itemUomCode;
  #itemUomName;
  #isstock;
  #coretaxUomId;

  constructor(dto) {
    super(dto);
    this.#itemUomId = dto.item_uom_id;
    this.#companyParentId = dto.company_parent_id;
    this.#itemUomCode = dto.item_uom_code;
    this.#itemUomName = dto.item_uom_name;
    this.#isstock = dto.isstock;
    this.#coretaxUomId = dto.coretax_uom_id;
  }

  get itemUomId() {
    return this.#itemUomId;
  }

  toModel() {
    return {
      itemUomId: this.#itemUomId,
      companyParentId: this.#companyParentId,
      itemUomCode: this.#itemUomCode,
      itemUomName: this.#itemUomName,
      isstock: this.#isstock,
      coretaxUomId: this.#coretaxUomId,
      ...super.toModel()
    };
  }
}

export {
  ItemDto,
  ItemBuyingDto,
  ItemCategoryDto,
  ItemComboDto,
  ItemImgDto,
  ItemLabelDto,
  ItemLabelDetailDto,
  ItemPriceDto,
  ItemSubCategoryDto,
  ItemTypeDto,
  ItemUomDto
};
