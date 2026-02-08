import StandardDto from '../../StandardDto.js';

class InventoryAdjustmentDto extends StandardDto {
  #inventoryAdjustmentId;
  #dbId;
  #companyParentId;
  #companyId;
  #inventoryAdjustmentNo;
  #inventoryAdjustmentNoTemp;
  #warehouseId;
  #currencyId;
  #currencyRate;
  #bc16Code;
  #bcStatus;
  #inventoryAdjustmentDate;
  #refference;
  #note;
  #status;
  #statusNext;
  #subtotal;
  #totalcost;
  #total;
  #totalKurang;
  #type;
  #isedit;
  #confirmtime;
  #confirmby;
  #confirmtimeF;
  #confirmbyF;

  constructor(dto) {
    super(dto);
    this.#inventoryAdjustmentId = dto.inventory_adjustment_id;
    this.#dbId = dto.db_id;
    this.#companyParentId = dto.company_parent_id;
    this.#companyId = dto.company_id;
    this.#inventoryAdjustmentNo = dto.inventory_adjustment_no;
    this.#inventoryAdjustmentNoTemp = dto.inventory_adjustment_no_temp;
    this.#warehouseId = dto.warehouse_id;
    this.#currencyId = dto.currency_id;
    this.#currencyRate = dto.currency_rate;
    this.#bc16Code = dto.bc_16_code;
    this.#bcStatus = dto.bc_status;
    this.#inventoryAdjustmentDate = dto.inventory_adjustment_date;
    this.#refference = dto.refference;
    this.#note = dto.note;
    this.#status = dto.status;
    this.#statusNext = dto.status_next;
    this.#subtotal = dto.subtotal;
    this.#totalcost = dto.subtotal;
    this.#total = dto.total;
    this.#totalKurang = dto.total_kurang;
    this.#type = dto.type;
    this.#isedit = dto.isedit;
    this.#confirmtime = dto.confirmtime;
    this.#confirmby = dto.confirmby;
    this.#confirmtimeF = dto.confirmtime_f;
    this.#confirmbyF = dto.confirmby_f;
  }

  get inventoryAdjustmentId() {
    return this.#inventoryAdjustmentId;
  }

  toModel() {
    return {
      inventoryAdjustmentId: this.#inventoryAdjustmentId,
      dbId: this.#dbId,
      companyParentId: this.#companyParentId,
      companyId: this.#companyId,
      inventoryAdjustmentNo: this.#inventoryAdjustmentNo,
      inventoryAdjustmentNoTemp: this.#inventoryAdjustmentNoTemp,
      warehouseId: this.#warehouseId,
      currencyId: this.#currencyId,
      currencyRate: this.#currencyRate,
      bc16Code: this.#bc16Code,
      bcStatus: this.#bcStatus,
      inventoryAdjustmentDate: this.#inventoryAdjustmentDate,
      refference: this.#refference,
      note: this.#note,
      status: this.#status,
      statusNext: this.#statusNext,
      subtotal: this.#subtotal,
      totalcost: this.#totalcost,
      total: this.#total,
      totalKurang: this.#totalKurang,
      type: this.#type,
      isedit: this.#isedit,
      confirmtime: this.#confirmtime,
      confirmby: this.#confirmby,
      confirmtimeF: this.#confirmtimeF,
      confirmbyF: this.#confirmbyF,
      ...super.toModel()
    };
  }
}

class InventoryAdjustmentDtDto extends StandardDto {
  #inventoryAdjustmentDtId;
  #inventoryAdjustmentId;
  #itemId;
  #itemCode;
  #itemName;
  #size;
  #itemPack;
  #country;
  #vintage;
  #qty;
  #buyPrice;
  #priceAvg;
  #total;
  #coaId;
  #status;
  #type;

  constructor(dto) {
    super(dto);
    this.#inventoryAdjustmentDtId = dto.inventory_adjustment_dt_id;
    this.#inventoryAdjustmentId = dto.inventory_adjustment_id;
    this.#itemId = dto.item_id;
    this.#itemCode = dto.item_code;
    this.#itemName = dto.item_name;
    this.#size = dto.size;
    this.#itemPack = dto.item_pack;
    this.#country = dto.country;
    this.#vintage = dto.vintage;
    this.#qty = dto.qty;
    this.#buyPrice = dto.buy_price;
    this.#priceAvg = dto.price_avg;
    this.#total = dto.total;
    this.#coaId = dto.coa_id;
    this.#status = dto.status;
    this.#type = dto.type;
  }

  get inventoryAdjustmentDtId() {
    return this.#inventoryAdjustmentDtId;
  }

  toModel() {
    return {
      inventoryAdjustmentDtId: this.#inventoryAdjustmentDtId,
      inventoryAdjustmentId: this.#inventoryAdjustmentId,
      itemId: this.#itemId,
      itemCode: this.#itemCode,
      itemName: this.#itemName,
      size: this.#size,
      itemPack: this.#itemPack,
      country: this.#country,
      vintage: this.#vintage,
      qty: this.#qty,
      buyPrice: this.#buyPrice,
      priceAvg: this.#priceAvg,
      total: this.#total,
      coaId: this.#coaId,
      status: this.#status,
      type: this.#type,
      ...super.toModel()
    };
  }
}

class InventoryAdjustmentHppDto extends StandardDto {
  #inventoryAdjustmentHppId;
  #inventoryAdjustmentHppNo;
  #inventoryAdjustmentHppDate;
  #warehouseId;
  #refference;
  #note;
  #status;
  #statusNext;
  #subtotal;
  #subtotalT;
  #totalcost;
  #total;
  #totalKurang;
  #type;
  #isImport;
  #isedit;
  #confirmtime;
  #confirmby;
  #confirmtimeF;
  #confirmbyF;

  constructor(dto) {
    super(dto);
    this.#inventoryAdjustmentHppId = dto.inventory_adjustment_hpp_id;
    this.#inventoryAdjustmentHppNo = dto.inventory_adjustment_hpp_no;
    this.#inventoryAdjustmentHppDate = dto.inventory_adjustment_hpp_date;
    this.#warehouseId = dto.warehouse_id;
    this.#refference = dto.refference;
    this.#note = dto.note;
    this.#status = dto.status;
    this.#statusNext = dto.status_next;
    this.#subtotal = dto.subtotal;
    this.#subtotalT = dto.subtotal_t;
    this.#totalcost = dto.totalcost;
    this.#total = dto.total;
    this.#totalKurang = dto.total_kurang;
    this.#type = dto.type;
    this.#isImport = dto.is_import;
    this.#isedit = dto.isedit;
    this.#confirmtime = dto.confirmtime;
    this.#confirmby = dto.confirmby;
    this.#confirmtimeF = dto.confirmtime_f;
    this.#confirmbyF = dto.confirmby_f;
  }

  get inventoryAdjustmentHppId() {
    return this.#inventoryAdjustmentHppId;
  }

  toModel() {
    return {
      inventoryAdjustmentHppId: this.#inventoryAdjustmentHppId,
      inventoryAdjustmentHppNo: this.#inventoryAdjustmentHppNo,
      inventoryAdjustmentHppDate: this.#inventoryAdjustmentHppDate,
      warehouseId: this.#warehouseId,
      refference: this.#refference,
      note: this.#note,
      status: this.#status,
      statusNext: this.#statusNext,
      subtotal: this.#subtotal,
      subtotalT: this.#subtotalT,
      totalcost: this.#totalcost,
      total: this.#total,
      totalKurang: this.#totalKurang,
      type: this.#type,
      isImport: this.#isImport,
      isedit: this.#isedit,
      confirmtime: this.#confirmtime,
      confirmby: this.#confirmby,
      confirmtimeF: this.#confirmtimeF,
      confirmbyF: this.#confirmbyF,
      ...super.toModel()
    };
  }
}

class InventoryAdjustmentHppDtDto extends StandardDto {
  #inventoryAdjustmentHppDtId;
  #inventoryAdjustmentHppId;
  #itemId;
  #itemCode;
  #itemName;
  #qty;
  #buyPrice;
  #priceAvg;
  #priceAvgT;
  #priceT;
  #total;
  #coaId;
  #type;

  constructor(dto) {
    super(dto);
    this.#inventoryAdjustmentHppDtId = dto.inventoryAdjustmentHppDtId;
    this.#inventoryAdjustmentHppId = dto.inventory_adjustment_hpp_id;
    this.#itemId = dto.item_id;
    this.#itemCode = dto.item_code;
    this.#itemName = dto.item_name;
    this.#qty = dto.qty;
    this.#buyPrice = dto.buy_price;
    this.#priceAvg = dto.price_avg;
    this.#priceAvgT = dto.price_avg_t;
    this.#priceT = dto.price_t;
    this.#total = dto.total;
    this.#coaId = dto.coa_id;
    this.#type = dto.type;
  }

  get inventoryAdjustmentHppDtId() {
    return this.#inventoryAdjustmentHppDtId;
  }

  toModel() {
    return {
      inventoryAdjustmentHppDtId: this.#inventoryAdjustmentHppDtId,
      inventoryAdjustmentHppId: this.#inventoryAdjustmentHppId,
      itemId: this.#itemId,
      itemCode: this.#itemCode,
      itemName: this.#itemName,
      qty: this.#qty,
      buyPrice: this.#buyPrice,
      priceAvg: this.#priceAvg,
      priceAvgT: this.#priceAvgT,
      priceT: this.#priceT,
      total: this.#total,
      coaId: this.#coaId,
      type: this.#type,
      ...super.toModel()
    };
  }
}

class InventoryAdjustmentHppItemDtDto extends StandardDto {
  #inventoryAdjustmentItemHppDtId;
  #inventoryAdjustmentHppDtId;
  #inventoryAdjustmentHppId;
  #itemStockDtId;
  #itemId;
  #expDay;
  #expMonth;
  #expYear;
  #qty;

  constructor(dto) {
    super(dto);
    this.#inventoryAdjustmentItemHppDtId = dto.inventory_adjustment_item_hpp_dt_id;
    this.#inventoryAdjustmentHppDtId = dto.inventory_adjustment_hpp_dt_id;
    this.#inventoryAdjustmentHppId = dto.inventory_adjustment_hpp_id;
    this.#itemStockDtId = dto.item_stock_dt_id;
    this.#itemId = dto.item_id;
    this.#expDay = dto.exp_day;
    this.#expMonth = dto.exp_month;
    this.#expYear = dto.exp_year;
    this.#qty = dto.qty;
  }

  get inventoryAdjustmentItemHppDtId() {
    return this.#inventoryAdjustmentItemHppDtId;
  }

  toModel() {
    return {
      inventoryAdjustmentItemHppDtId: this.#inventoryAdjustmentItemHppDtId,
      inventoryAdjustmentHppDtId: this.#inventoryAdjustmentHppDtId,
      inventoryAdjustmentHppId: this.#inventoryAdjustmentHppId,
      itemStockDtId: this.#itemStockDtId,
      itemId: this.#itemId,
      expDay: this.#expDay,
      expMonth: this.#expMonth,
      expYear: this.#expYear,
      qty: this.#qty,
      ...super.toModel()
    };
  }
}

class InventoryAdjustmentItemDtDto extends StandardDto {
  #inventoryAdjustmentItemDtId;
  #inventoryAdjustmentDtId;
  #inventoryAdjustmentId;
  #itemStockDtId;
  #itemId;
  #expDay;
  #expMonth;
  #expYear;
  #qty;

  constructor(dto) {
    super(dto);
    this.#inventoryAdjustmentItemDtId = dto.inventory_adjustment_item_dt_id;
    this.#inventoryAdjustmentDtId = dto.inventory_adjustment_dt_id;
    this.#inventoryAdjustmentId = dto.inventory_adjustment_id;
    this.#itemStockDtId = dto.item_stock_dt_id;
    this.#itemId = dto.item_id;
    this.#expDay = dto.exp_day;
    this.#expMonth = dto.exp_month;
    this.#expYear = dto.exp_year;
    this.#qty = dto.qty;
  }

  get inventoryAdjustmentItemDtId() {
    return this.#inventoryAdjustmentItemDtId;
  }

  toModel() {
    return {
      inventoryAdjustmentItemDtId: this.#inventoryAdjustmentItemDtId,
      inventoryAdjustmentDtId: this.#inventoryAdjustmentDtId,
      inventoryAdjustmentId: this.#inventoryAdjustmentId,
      itemStockDtId: this.#itemStockDtId,
      itemId: this.#itemId,
      expDay: this.#expDay,
      expMonth: this.#expMonth,
      expYear: this.#expYear,
      qty: this.#qty,
      ...super.toModel()
    };
  }
}

class InventoryAdjustmentRejectDto extends StandardDto {
  #inventoryAdjustmentRejectId;
  #inventoryAdjustmentId;
  #note;
  #userId;

  constructor(dto) {
    super(dto);
    this.#inventoryAdjustmentRejectId = dto.inventory_adjustment_reject_id;
    this.inventoryAdjustmentId = dto.inventory_adjustment_id;
    this.note = dto.note;
    this.userId = dto.user_id;
    this.cretime = dto.cretime;
    this.creby = dto.creby;
  }

  get inventoryAdjustmentRejectId() {
    return this.#inventoryAdjustmentRejectId;
  }

  toModel() {
    return {
      inventoryAdjustmentRejectId: this.#inventoryAdjustmentRejectId,
      inventoryAdjustmentId: this.#inventoryAdjustmentId,
      note: this.#note,
      userId: this.#userId,
      ...super.toModel()
    };
  }
}

class InventoryAdjustmentRequestDto extends StandardDto {
  #inventoryAdjustmentRequestId;
  #inventoryAdjustmentId;
  #note;
  #statusRequest;
  #userId;

  constructor(dto) {
    super(dto);
    this.#inventoryAdjustmentRequestId = dto.inventory_adjustment_request_id;
    this.#inventoryAdjustmentId = dto.inventory_adjustment_request_id;
    this.#note = dto.note;
    this.#statusRequest = dto.status_request;
    this.#userId = dto.user_id;
  }

  get inventoryAdjustmentRequestId() {
    return this.#inventoryAdjustmentRequestId;
  }

  toModel() {
    return {
      inventoryAdjustmentRequestId: this.#inventoryAdjustmentRequestId,
      inventoryAdjustmentId: this.#inventoryAdjustmentId,
      note: this.#note,
      statusRequest: this.#statusRequest,
      userId: this.#userId,
      ...super.toModel()
    };
  }
}

export {
  InventoryAdjustmentDtDto,
  InventoryAdjustmentDto,
  InventoryAdjustmentHppDtDto,
  InventoryAdjustmentHppDto,
  InventoryAdjustmentHppItemDtDto,
  InventoryAdjustmentItemDtDto,
  InventoryAdjustmentRejectDto,
  InventoryAdjustmentRequestDto
};
