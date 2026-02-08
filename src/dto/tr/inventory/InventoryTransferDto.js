import StandardDto from '../../StandardDto.js';

class InventoryTransferDto extends StandardDto {
  #inventoryTransferId;
  #dbId;
  #companyParentId;
  #companyId;
  #inventoryTransferNo;
  #inventoryTransferNoTemp;
  #warehouseIdFrom;
  #warehouseIdTo;
  #inventoryTransferDate;
  #bc27Code;
  #refference;
  #note;
  #status;
  #statusNext;
  #isedit;
  #confirmtime;
  #confirmby;
  #confirmtimeF;
  #confirmbyF;

  constructor(dto) {
    super(dto);
    this.#inventoryTransferId = dto.inventory_transfer_id;
    this.#dbId = dto.db_id;
    this.#companyParentId = dto.company_parent_id;
    this.#companyId = dto.company_id;
    this.#inventoryTransferNo = dto.inventory_transfer_no;
    this.#inventoryTransferNoTemp = dto.inventory_transfer_no_temp;
    this.#warehouseIdFrom = dto.warehouse_id_from;
    this.#warehouseIdTo = dto.warehouse_id_to;
    this.#inventoryTransferDate = dto.inventory_transfer_date;
    this.#bc27Code = dto.bc_27_code;
    this.#refference = dto.refference;
    this.#note = dto.note;
    this.#status = dto.status;
    this.#statusNext = dto.status_next;
    this.#isedit = dto.isedit;
    this.#confirmtime = dto.confirmtime;
    this.#confirmby = dto.confirmby;
    this.#confirmtimeF = dto.confirmtime_f;
    this.#confirmbyF = dto.confirmby_f;
  }

  get inventoryTransferId() {
    return this.#inventoryTransferId;
  }

  toModel() {
    return {
      inventoryTransferId: this.#inventoryTransferId,
      dbId: this.#dbId,
      companyParentId: this.#companyParentId,
      companyId: this.#companyId,
      inventoryTransferNo: this.#inventoryTransferNo,
      inventoryTransferNoTemp: this.#inventoryTransferNoTemp,
      warehouseIdFrom: this.#warehouseIdFrom,
      warehouseIdTo: this.#warehouseIdTo,
      inventoryTransferDate: this.#inventoryTransferDate,
      bc27Code: this.#bc27Code,
      refference: this.#refference,
      note: this.#note,
      status: this.#status,
      statusNext: this.#statusNext,
      isedit: this.#isedit,
      confirmtime: this.#confirmtime,
      confirmby: this.#confirmby,
      confirmtimeF: this.#confirmtimeF,
      confirmbyF: this.#confirmbyF,
      ...super.toModel()
    };
  }
}

class InventoryTransferDtDto extends StandardDto {
  #inventoryTransferDtId;
  #dbId;
  #companyParentId;
  #inventoryTransferId;
  #itemId;
  #itemCode;
  #itemName;
  #stockQty;
  #qty;
  constructor(dto) {
    super(dto);
    this.#inventoryTransferDtId = dto.inventory_transfer_dt_id;
    this.#dbId = dto.db_id;
    this.#companyParentId = dto.company_parent_id;
    this.#inventoryTransferId = dto.inventory_transfer_id;
    this.#itemId = dto.item_id;
    this.#itemCode = dto.item_code;
    this.#itemName = dto.item_name;
    this.#stockQty = dto.stock_qty;
    this.#qty = dto.qty;
  }

  get inventoryTransferDtId() {
    return this.#inventoryTransferDtId;
  }

  toModel() {
    return {
      inventoryTransferDtId: this.#inventoryTransferDtId,
      dbId: this.#dbId,
      companyParentId: this.#companyParentId,
      inventoryTransferId: this.#inventoryTransferId,
      itemId: this.#itemId,
      itemCode: this.#itemCode,
      itemName: this.#itemName,
      stockQty: this.#stockQty,
      qty: this.#qty,
      ...super.toModel()
    };
  }
}

class InventoryTransferItemDtDto extends StandardDto {
  #inventoryTransferItemDtId;
  #inventoryTransferDtId;
  #inventoryTransferId;
  #itemStockDtId;
  #itemId;
  #expDay;
  #expMonth;
  #expYear;
  #qty;

  constructor(dto) {
    super(dto);
    this.#inventoryTransferItemDtId = dto.stock_opname_item_dt_id;
    this.#inventoryTransferDtId = dto.inventory_transfer_dt_id;
    this.#inventoryTransferId = dto.inventory_transfer_id;
    this.#itemStockDtId = dto.item_stock_dt_id;
    this.#itemId = dto.item_id;
    this.#expDay = dto.exp_day;
    this.#expMonth = dto.exp_month;
    this.#expYear = dto.exp_year;
    this.#qty = dto.qty;
  }

  get inventoryTransferItemDtId() {
    return this.#inventoryTransferItemDtId;
  }

  toModel() {
    return {
      inventoryTransferItemDtId: this.#inventoryTransferItemDtId,
      inventoryTransferDtId: this.#inventoryTransferDtId,
      inventoryTransferId: this.#inventoryTransferId,
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
export { InventoryTransferDtDto, InventoryTransferDto, InventoryTransferItemDtDto };

