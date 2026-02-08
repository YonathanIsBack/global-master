import StandardDto from '../../StandardDto.js';

class StockOpnameDto extends StandardDto {
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
  #confirmtime;
  #confirmby;
  #opnametime;
  #opnameby;
  #confirmtimeF;
  #confirmbyF;

  constructor(body) {
    super(body);
    this.#inventoryStockOpnameId = body.inventory_stock_opname_id;
    this.#inventoryStockOpnameCode = body.inventory_stock_opname_code;
    this.#inventoryStockOpnameCodeTemp = body.inventory_stock_opname_code_temp;
    this.#warehouseId = body.warehouse_id;
    this.#inventoryStockOpnameDate = body.inventory_stock_opname_date;
    this.#note = body.note;
    this.#noteOpname = body.note_opname;
    this.#status = body.status;
    this.#statusNext = body.status_next;
    this.#isedit = body.isedit;
    this.#confirmtime = body.confirmtime;
    this.#confirmby = body.confirmby;
    this.#opnametime = body.opnametime;
    this.#opnameby = body.opnameby;
    this.#confirmtimeF = body.confirmtime_f;
    this.#confirmbyF = body.confirmby_f;
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
      confirmtime: this.#confirmtime,
      confirmby: this.#confirmby,
      opnametime: this.#opnametime,
      opnameby: this.#opnameby,
      confirmtimeF: this.#confirmtimeF,
      confirmbyF: this.#confirmbyF,
      ...super.toModel()
    };
  }
}

class StockOpnameDtDto extends StandardDto {
  #inventoryStockOpnameDtId;
  #inventoryStockOpnameId;
  #itemId;
  #itemCode;
  #itemName;
  #qty;
  #qtyOpname;
  #ischeck;

  constructor(body) {
    super(body);
    this.#inventoryStockOpnameDtId = body.inventory_stock_opname_dt_id;
    this.#inventoryStockOpnameId = body.inventory_stock_opname_id;
    this.#itemId = body.item_id;
    this.#itemCode = body.item_code;
    this.#itemName = body.item_name;
    this.#qty = body.qty;
    this.#qtyOpname = body.qty_opname;
    this.#ischeck = body.ischeck;
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

class StockOpnameItemDtDto extends StandardDto {
  #stocpOpnameItemDtId;
  #stockOpnameDtId;
  #stockOpnameId;
  #itemStockDtId;
  #itemId;
  #expDay;
  #expMonth;
  #expYear;
  #qty;

  constructor(body) {
    super(body);
    this.#stocpOpnameItemDtId = body.stock_opname_item_dt_id;
    this.#stockOpnameDtId = body.stock_opname_dt_id;
    this.#stockOpnameId = body.stock_opname_id;
    this.#itemStockDtId = body.item_stock_dt_id;
    this.#itemId = body.item_id;
    this.#expDay = body.exp_day;
    this.#expMonth = body.exp_month;
    this.#expYear = body.exp_year;
    this.#qty = body.qty;
  }

  get stocpOpnameItemDtId() {
    return this.#stocpOpnameItemDtId;
  }

  toModel() {
    return {
      stocpOpnameItemDtId: this.#stocpOpnameItemDtId,
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

export { StockOpnameDto, StockOpnameDtDto, StockOpnameItemDtDto };
