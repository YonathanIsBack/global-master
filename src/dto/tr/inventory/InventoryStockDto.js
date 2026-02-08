import StandardDto from './StandardDto.js';

class InventoryStockOpnameDto extends StandardDto {
  #inventoryStockOpnameId;
  #inventoryStockOpnameCode;
  #inventoryStockOpnameCodeTemp;
  #warehouseId;
  #inventoryStockOpnameDate;
  #note;
  #noteOpname;
  #status;
  #statusNext;
  #isedit;
  #type;
  #confirmtime;
  #confirmby;
  #opnameTime;
  #opnameBy;
  #confirmtimeF;
  #confirmbyF;

  constructor(dto) {
    super(dto);
    this.#inventoryStockOpnameId = dto.inventory_stock_opname_id;
    this.#inventoryStockOpnameCode = dto.inventory_stock_opname_code;
    this.#inventoryStockOpnameCodeTemp = dto.inventory_stock_opname_code;
    this.#warehouseId = dto.warehouse_id;
    this.#inventoryStockOpnameDate = dto.inventory_stock_opname_date;
    this.#note = dto.note;
    this.#noteOpname = dto.note_opname;
    this.#status = dto.status;
    this.#statusNext = dto.status_next;
    this.#isedit = dto.isedit;
    this.#type = dto.type;
    this.#confirmtime = dto.confirmtime;
    this.#confirmby = dto.confirmby;
    this.#opnameTime = dto.opnameTime;
    this.#opnameBy = dto.opnameBy;
    this.#confirmtimeF = dto.confirmtimeF;
    this.#confirmbyF = dto.confirmbyF;
  }

  get inventoryStockOpnameId() {
    return this.#inventoryStockOpnameId;
  }

  toModel() {
    return {
      inventoryStockOpnameId: this.#inventoryStockOpnameId,
      inventoryStockOpnameCode: this.#inventoryStockOpnameCode,
      inventoryStockOpnameCodeTemp: this.#inventoryStockOpnameCodeTemp,
      warehouseId: this.#warehouseId,
      inventoryStockOpnameDate: this.#inventoryStockOpnameDate,
      note: this.#note,
      noteOpname: this.#noteOpname,
      status: this.#status,
      statusNext: this.#statusNext,
      isedit: this.#isedit,
      type: this.#type,
      confirmtime: this.#confirmtime,
      confirmby: this.#confirmby,
      opnameTime: this.#opnameTime,
      opnameBy: this.#opnameBy,
      confirmtimeF: this.#confirmtimeF,
      confirmbyF: this.#confirmbyF,
      ...super.toModel()
    };
  }
}

class InventoryStockOpnameDtDto extends StandardDto {
  #inventoryStockOpnameDtId;
  #inventoryStockOpnameId;
  #itemId;
  #itemCode;
  #itemName;
  #qty;
  #qtyOpname;
  #ischeck;

  constructor(dto) {
    super(dto);
    this.#inventoryStockOpnameDtId = dto.inventory_stock_opname_dt_id;
    this.#inventoryStockOpnameId = dto.inventory_stock_opname_id;
    this.#itemId = dto.item_id;
    this.#itemCode = dto.item_code;
    this.#itemName = dto.item_name;
    this.#qty = dto.qty;
    this.#qtyOpname = dto.qty_opname;
    this.#ischeck = dto.ischeck;
  }

  get inventoryStockOpnameDtId() {
    return this.#inventoryStockOpnameDtId;
  }

  toModel() {
    return {
      inventoryStockOpnameDtId: this.#inventoryStockOpnameDtId,
      inventoryStockOpnameId: this.#inventoryStockOpnameId,
      itemId: this.#itemId,
      itemCode: this.#itemCode,
      itemName: this.#itemName,
      qty: this.#qty,
      qtyOpname: this.#qtyOpname,
      ischeck: this.#ischeck,
      ...super.toModel()
    };
  }
}

class InventoryStockOpnameItemDtDto extends StandardDto {
  #stockOpnameItemDtId;
  #stockOpnameDtId;
  #stockOpnameId;
  #itemStockDtId;
  #itemId;
  #expDay;
  #expMonth;
  #expYear;
  #qty;

  constructor(dto) {
    super(dto);
    this.#stockOpnameItemDtId = dto.stock_opname_item_dt_id;
    this.#stockOpnameDtId = dto.stock_opname_dt_id;
    this.#stockOpnameId = dto.stock_opname_id;
    this.#itemStockDtId = dto.item_stock_dt_id;
    this.#itemId = dto.item_id;
    this.#expDay = dto.exp_day;
    this.#expMonth = dto.exp_month;
    this.#expYear = dto.exp_year;
    this.#qty = dto.qty;
  }

  get stockOpnameItemDtId() {
    return this.#stockOpnameItemDtId;
  }
  
  toModel() {
    return {
      stockOpnameItemDtId: this.#stockOpnameItemDtId,
      stockOpnameDtId: this.#stockOpnameDtId,
      stockOpnameId: this.#stockOpnameId,
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
export { InventoryStockOpnameDto, InventoryStockOpnameDtDto, InventoryStockOpnameItemDtDto };
