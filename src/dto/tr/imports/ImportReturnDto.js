import StandardDto from '../../StandardDto.js';

class ImportReturnDto extends StandardDto {
  #importReturnId;
  #importReturnCode;
  #importReturnCodeTemp;
  #importReturnDate;
  #traceId;
  #warehouseId;
  #supplierId;
  #currencyId;
  #currencyRate;
  #importInvId;
  #importInvCode;
  #importInvDate;
  #paymentMethod;
  #notes;
  #coaId;
  #isvat;
  #totalQty;
  #subtotal;
  #discPersen;
  #discAmount;
  #discPersen2;
  #discAmount2;
  #discPersen3;
  #discAmount3;
  #vatPersen;
  #vatAmount;
  #taxPersen;
  #taxAmount;
  #total;
  #status;
  #statusNext;
  #confirmtime;
  #confirmby;
  #isedit;
  #confirmtimeF;
  #confirmbyF;

  constructor(dto) {
    super(dto);
    this.#importReturnId = dto.import_return_id;
    this.#importReturnCode = dto.import_return_code;
    this.#importReturnCodeTemp = dto.import_return_code_temp;
    this.#importReturnDate = dto.import_return_date;
    this.#traceId = dto.trace_id;
    this.#warehouseId = dto.warehouse_id;
    this.#supplierId = dto.supplier_id;
    this.#currencyId = dto.currency_id;
    this.#currencyRate = dto.currency_rate;
    this.#importInvId = dto.import_inv_id;
    this.#importInvCode = dto.import_inv_code;
    this.#importInvDate = dto.import_inv_date;
    this.#paymentMethod = dto.payment_method;
    this.#notes = dto.notes;
    this.#coaId = dto.coa_id;
    this.#isvat = dto.isvat;
    this.#totalQty = dto.total_qty;
    this.#subtotal = dto.subtotal;
    this.#discPersen = dto.disc_persen;
    this.#discAmount = dto.disc_amount;
    this.#discPersen2 = dto.disc_persen2;
    this.#discAmount2 = dto.disc_amount2;
    this.#discPersen3 = dto.disc_persen3;
    this.#discAmount3 = dto.disc_amount3;
    this.#vatPersen = dto.vat_persen;
    this.#vatAmount = dto.vat_amount;
    this.#taxPersen = dto.tax_persen;
    this.#taxAmount = dto.tax_amount;
    this.#total = dto.total;
    this.#status = dto.status;
    this.#statusNext = dto.status_next;
    this.#confirmtime = dto.confirmtime;
    this.#confirmby = dto.confirmby;
    this.#isedit = dto.isedit;
    this.#confirmtimeF = dto.confirmtime_f;
    this.#confirmbyF = dto.confirmby_f;
  }

  get importReturnId() {
    return this.#importReturnId;
  }

  toModel() {
    return {
      importReturnId: this.#importReturnId,
      importReturnCode: this.#importReturnCode,
      importReturnCodeTemp: this.#importReturnCodeTemp,
      importReturnDate: this.#importReturnDate,
      traceId: this.#traceId,
      warehouseId: this.#warehouseId,
      supplierId: this.#supplierId,
      currencyId: this.#currencyId,
      currencyRate: this.#currencyRate,
      importInvId: this.#importInvId,
      importInvCode: this.#importInvCode,
      importInvDate: this.#importInvDate,
      paymentMethod: this.#paymentMethod,
      notes: this.#notes,
      coaId: this.#coaId,
      isvat: this.#isvat,
      totalQty: this.#totalQty,
      subtotal: this.#subtotal,
      discPersen: this.#discPersen,
      discAmount: this.#discAmount,
      discPersen2: this.#discPersen2,
      discAmount2: this.#discAmount2,
      discPersen3: this.#discPersen3,
      discAmount3: this.#discAmount3,
      vatPersen: this.#vatPersen,
      vatAmount: this.#vatAmount,
      taxPersen: this.#taxPersen,
      taxAmount: this.#taxAmount,
      total: this.#total,
      status: this.#status,
      statusNext: this.#statusNext,
      confirmtime: this.#confirmtime,
      confirmby: this.#confirmby,
      isedit: this.#isedit,
      confirmtimeF: this.#confirmtimeF,
      confirmbyF: this.#confirmbyF,
      ...super.toModel()
    };
  }
}

class ImportReturnDtDto extends StandardDto {
  #importReturnDtId;
  #importReturnId;
  #importInvDtId;
  #importInvId;
  #importInvCode;
  #itemId;
  #itemCode;
  #itemName;
  #qty;
  #price;
  #price2;
  #priceAvg;
  #pricePack;
  #discPersen;
  #discAmount;
  #discPersen2;
  #discAmount2;
  #disc3;
  #taxPersen;
  #taxAmount;
  #total;
  #isreturn;

  constructor(dto) {
    super(dto);
    this.#importReturnDtId = dto.import_receive_dt_id;
    this.#importReturnId = dto.import_return_id;
    this.#importInvDtId = dto.import_inv_dt_id;
    this.#importInvId = dto.import_inv_id;
    this.#importInvCode = dto.import_inv_code;
    this.#itemId = dto.item_id;
    this.#itemCode = dto.item_code;
    this.#itemName = dto.item_name;
    this.#qty = dto.qty;
    this.#price = dto.price;
    this.#price2 = dto.price2;
    this.#priceAvg = dto.price_avg;
    this.#pricePack = dto.price_pack;
    this.#discPersen = dto.disc_persen;
    this.#discAmount = dto.disc_amount;
    this.#discPersen2 = dto.disc_persen2;
    this.#discAmount2 = dto.disc_amount2;
    this.#disc3 = dto.disc3;
    this.#taxPersen = dto.tax_persen;
    this.#taxAmount = dto.tax_amount;
    this.#total = dto.total;
    this.#isreturn = dto.isreturn;
  }

  get importReturnDtId() {
    return this.#importReturnDtId;
  }

  toModel() {
    return {
      importReturnDtId: this.#importReturnDtId,
      importReturnId: this.#importReturnId,
      importInvDtId: this.#importInvDtId,
      importInvId: this.#importInvId,
      importInvCode: this.#importInvCode,
      itemId: this.#itemId,
      itemCode: this.#itemCode,
      itemName: this.#itemName,
      qty: this.#qty,
      price: this.#price,
      price2: this.#price2,
      priceAvg: this.#priceAvg,
      pricePack: this.#pricePack,
      discPersen: this.#discPersen,
      discAmount: this.#discAmount,
      discPersen2: this.#discPersen2,
      discAmount2: this.#discAmount2,
      disc3: this.#disc3,
      taxPersen: this.#taxPersen,
      taxAmount: this.#taxAmount,
      total: this.#total,
      isreturn: this.#isreturn,
      ...super.toModel()
    };
  }
}

class ImportReturnItemDtDto extends StandardDto {
  #importReturnItemDtId;
  #importReturnDtId;
  #importReturnId;
  #importInvItemDtId;
  #itemId;
  #expDay;
  #expMonth;
  #expYear;
  #qty;

  constructor(dto) {
    super(dto);
    this.#importReturnItemDtId = dto.import_return_item_dt_id;
    this.#importReturnDtId = dto.import_return_dt_id;
    this.#importReturnId = dto.import_return_id;
    this.#importInvItemDtId = dto.import_inv_item_dt_id;
    this.#itemId = dto.item_id;
    this.#expDay = dto.exp_day;
    this.#expMonth = dto.exp_month;
    this.#expYear = dto.exp_year;
    this.#qty = dto.qty;
  }

  get importReturnItemDtId() {
    return this.#importReturnItemDtId;
  }

  toModel() {
    return {
      importReturnItemDtId: this.#importReturnItemDtId,
      importReturnDtId: this.#importReturnDtId,
      importReturnId: this.#importReturnId,
      importInvItemDtId: this.#importInvItemDtId,
      itemId: this.#itemId,
      expDay: this.#expDay,
      expMonth: this.#expMonth,
      expYear: this.#expYear,
      qty: this.#qty,
      ...super.toModel()
    };
  }
}

class ImportReturnRejectDto extends StandardDto {
  #importReturnRejectId;
  #importReturnId;
  #note;
  #userId;

  constructor(dto) {
    super(dto);
    this.#importReturnRejectId = dto.import_return_reject_id;
    this.#importReturnId = dto.import_return_id;
    this.#note = dto.note;
    this.#userId = dto.userId;
  }

  get importReturnRejectId() {
    return this.#importReturnRejectId;
  }

  toModel() {
    return {
      importReturnRejectId: this.#importReturnRejectId,
      importReturnId: this.#importReturnId,
      note: this.#note,
      userId: this.#userId,
      ...super.toModel()
    };
  }
}

class ImportReturnRequestDto extends StandardDto {
  #importReturnRequestId;
  #importReturnId;
  #note;
  #statusRequest;
  #userId;

  constructor(dto) {
    super(dto);
    this.#importReturnRequestId = dto.import_return_request_id;
    this.importReturnId = dto.import_return_id;
    this.#note = dto.note;
    this.#userId = dto.userId;
    this.#statusRequest = dto.status_request;
  }

  get importReturnRequestId() {
    return this.#importReturnRequestId;
  }

  toModel() {
    return {
      importReturnRequestId: this.#importReturnRequestId,
      importReturnId: this.#importReturnId,
      note: this.#note,
      userId: this.#userId,
      statusRequest: this.#statusRequest,
      ...super.toModel()
    };
  }
}

export { ImportReturnDto, ImportReturnDtDto, ImportReturnItemDtDto, ImportReturnRejectDto, ImportReturnRequestDto };
