import StandardDto from '../../StandardDto.js';

class ExportSalesReturnDto extends StandardDto {
  #exportSalesReturnId;
  #exportSalesReturnCode;
  #exportSalesReturnCodeTemp;
  #exportSalesReturnDate;
  #exportSalesOrderId;
  #exportSalesOrderCode;
  #traceId;
  #warehouseId;
  #customerId;
  #currencyId;
  #currencyRate;
  #exportSalesInvId;
  #exportSalesInvCode;
  #exportSalesInvDate;
  #exportSalesInvStatus;
  #paymentMethod;
  #notaDate;
  #nota;
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
  #arReturn;
  #status;
  #statusNext;
  #confirmtime;
  #confirmby;
  #isedit;
  #confirmtimeF;
  #confirmbyF;

  constructor(dto) {
    super(dto);
    this.#exportSalesReturnId = dto.export_sales_return_id;
    this.#exportSalesReturnCode = dto.export_sales_return_code;
    this.#exportSalesReturnCodeTemp = dto.export_sales_return_code_temp;
    this.#exportSalesReturnDate = dto.export_sales_return_date;
    this.#exportSalesOrderId = dto.export_sales_order_id;
    this.#exportSalesOrderCode = dto.export_sales_order_code;
    this.#traceId = dto.trace_id;
    this.#warehouseId = dto.warehouse_id;
    this.#customerId = dto.customer_id;
    this.#currencyId = dto.currency_id;
    this.#currencyRate = dto.currency_rate;
    this.#exportSalesInvId = dto.export_sales_inv_id;
    this.#exportSalesInvCode = dto.export_sales_inv_code;
    this.#exportSalesInvDate = dto.export_sales_inv_date;
    this.#exportSalesInvStatus = dto.export_sales_inv_status;
    this.#paymentMethod = dto.payment_method;
    this.#notaDate = dto.nota_date;
    this.#nota = dto.nota;
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
    this.#arReturn = dto.ar_return;
    this.#status = dto.status;
    this.#statusNext = dto.status_next;
    this.#confirmtime = dto.confirmtime;
    this.#confirmby = dto.confirmby;
    this.#isedit = dto.isedit;
    this.#confirmtimeF = dto.confirmtime_f;
    this.#confirmbyF = dto.confirmby_f;
  }

  get exportSalesReturnId() {
    return this.#exportSalesReturnId;
  }

  toModel() {
    return {
      exportSalesReturnId: this.#exportSalesReturnId,
      exportSalesReturnCode: this.#exportSalesReturnCode,
      exportSalesReturnCodeTemp: this.#exportSalesReturnCodeTemp,
      exportSalesReturnDate: this.#exportSalesReturnDate,
      exportSalesOrderId: this.#exportSalesOrderId,
      exportSalesOrderCode: this.#exportSalesOrderCode,
      traceId: this.#traceId,
      warehouseId: this.#warehouseId,
      customerId: this.#customerId,
      currencyId: this.#currencyId,
      currencyRate: this.#currencyRate,
      exportSalesInvId: this.#exportSalesInvId,
      exportSalesInvCode: this.#exportSalesInvCode,
      exportSalesInvDate: this.#exportSalesInvDate,
      exportSalesInvStatus: this.#exportSalesInvStatus,
      paymentMethod: this.#paymentMethod,
      notaDate: this.#notaDate,
      nota: this.#nota,
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
      arReturn: this.#arReturn,
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

class ExportSalesReturnBc16Dto extends StandardDto {
  #exportSalesReturnBc16Id;
  #exportSalesReturnId;
  #exportSalesReturnDtId;
  #exportSalesInvBc16Id;
  #bc16Id;
  #bc16;
  #itemId;
  #qty;
  #qtyO;

  constructor(dto) {
    super(dto);
    this.#exportSalesReturnBc16Id = dto.export_sales_return_bc16_id;
    this.#exportSalesReturnId = dto.export_sales_return_id;
    this.#exportSalesReturnDtId = dto.export_sales_return_dt_id;
    this.#exportSalesInvBc16Id = dto.export_sales_inv_bc16_id;
    this.#bc16Id = dto.bc_16_id;
    this.#bc16 = dto.bc16;
    this.#itemId = dto.item_id;
    this.#qty = dto.qty;
    this.#qtyO = dto.qty_used;
  }

  get exportSalesReturnBc16Id() {
    return this.#exportSalesReturnBc16Id;
  }

  toModel() {
    return {
      exportSalesReturnBc16Id: this.#exportSalesReturnBc16Id,
      exportSalesReturnId: this.#exportSalesReturnId,
      exportSalesReturnDtId: this.#exportSalesReturnDtId,
      exportSalesInvBc16Id: this.#exportSalesInvBc16Id,
      bc16Id: this.#bc16Id,
      bc16: this.#bc16,
      itemId: this.#itemId,
      qty: this.#qty,
      qtyO: this.#qtyO,
      ...super.toModel()
    };
  }
}

class ExportSalesReturnCoaDto extends StandardDto {
  #exportSalesReturnCoaId;
  #exportSalesReturnId;
  #coaId;
  #coaCode;
  #coaName;
  #coaSubleadgerId;
  #coaSubleadgerName;
  #coaSubleadgerCode;
  #payment;
  #paymentNumber;
  #paymentDate;
  #confirmtime;
  #confirmby;

  constructor(dto) {
    super(dto);
    this.#exportSalesReturnCoaId = dto.export_sales_inv_bc16_id;
    this.#exportSalesReturnId = dto.export_sales_return_id;
    this.#coaId = dto.coa_id;
    this.#coaCode = dto.coa_code;
    this.#coaName = dto.coa_name;
    this.#coaSubleadgerId = dto.coa_subleadger_id;
    this.#coaSubleadgerName = dto.coa_subleadger_code;
    this.#coaSubleadgerCode = dto.coa_subleadger_name;
    this.#payment = dto.payment;
    this.#paymentNumber = dto.payment_number;
    this.#paymentDate = dto.payment_date;
    this.#confirmtime = dto.confirmtime;
    this.#confirmby = dto.confirmby;
  }

  get exportSalesReturnCoaId() {
    return this.#exportSalesReturnCoaId;
  }

  toModel() {
    return {
      exportSalesReturnCoaId: this.#exportSalesReturnCoaId,
      exportSalesReturnId: this.#exportSalesReturnId,
      coaId: this.#coaId,
      coaCode: this.#coaCode,
      coaName: this.#coaName,
      coaSubleadgerId: this.#coaSubleadgerId,
      coaSubleadgerName: this.#coaSubleadgerName,
      coaSubleadgerCode: this.#coaSubleadgerCode,
      payment: this.#payment,
      paymentNumber: this.#paymentNumber,
      paymentDate: this.#paymentDate,
      confirmtime: this.#confirmtime,
      confirmby: this.#confirmby,
      ...super.toModel()
    };
  }
}

class ExportSalesReturnDtDto extends StandardDto {
  #exportSalesReturnDtId;
  #exportSalesReturnId;
  #exportSalesInvDtId;
  #exportSalesInvId;
  #exportSalesInvCode;
  #itemId;
  #itemCode;
  #itemName;
  #warehouseId;
  #qty;
  #unit;
  #qtyInv;
  #price;
  #unitPrice;
  #price2;
  #priceAvg;
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
    this.#exportSalesReturnDtId = dto.export_sales_order_dt_id;
    this.#exportSalesReturnId = dto.export_sales_return_id;
    this.#exportSalesInvDtId = dto.export_sales_inv_dt_id;
    this.#exportSalesInvId = dto.export_sales_inv_id;
    this.#exportSalesInvCode = dto.export_sales_inv_code;
    this.#itemId = dto.item_id;
    this.#itemCode = dto.item_code;
    this.#itemName = dto.item_name;
    this.#warehouseId = dto.warehouse_id;
    this.#qty = dto.qty;
    this.#unit = dto.unit;
    this.#qtyInv = dto.qty_inv;
    this.#price = dto.price;
    this.#unitPrice = dto.unit_price;
    this.#price2 = dto.price2;
    this.#priceAvg = dto.price_avg;
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

  get exportSalesReturnDtId() {
    return this.#exportSalesReturnDtId;
  }

  toModel() {
    return {
      exportSalesReturnDtId: this.#exportSalesReturnDtId,
      exportSalesReturnId: this.#exportSalesReturnId,
      exportSalesInvDtId: this.#exportSalesInvDtId,
      exportSalesInvId: this.#exportSalesInvId,
      exportSalesInvCode: this.#exportSalesInvCode,
      itemId: this.#itemId,
      itemCode: this.#itemCode,
      itemName: this.#itemName,
      warehouseId: this.#warehouseId,
      qty: this.#qty,
      unit: this.#unit,
      qtyInv: this.#qtyInv,
      price: this.#price,
      unitPrice: this.#unitPrice,
      price2: this.#price2,
      priceAvg: this.#priceAvg,
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

class ExportSalesReturnItemDtDto extends StandardDto {
  #exportSalesReturnItemDtId;
  #exportSalesReturnDtId;
  #exportSalesReturnId;
  #exportSalesReturnBc16Id;
  #itemStockDtId;
  #exportSalesInvItemDtId;
  #itemId;
  #expDay;
  #expMonth;
  #expYear;
  #qty;

  constructor(dto) {
    super(dto);
    this.#exportSalesReturnItemDtId = dto.export_sales_return_item_dt_id;
    this.#exportSalesReturnDtId = dto.export_sales_return_dt_id;
    this.#exportSalesReturnId = dto.export_sales_return_id;
    this.#exportSalesReturnBc16Id = dto.export_sales_return_bc16_id;
    this.#itemStockDtId = dto.item_stock_dt_id;
    this.#exportSalesInvItemDtId = dto.export_sales_inv_item_dt_id;
    this.#itemId = dto.item_id;
    this.#expDay = dto.exp_day;
    this.#expMonth = dto.exp_month;
    this.#expYear = dto.exp_year;
    this.#qty = dto.qty;
  }

  get exportSalesReturnItemDtId() {
    return this.#exportSalesReturnItemDtId;
  }

  toModel() {
    return {
      exportSalesReturnItemDtId: this.#exportSalesReturnItemDtId,
      exportSalesReturnDtId: this.#exportSalesReturnDtId,
      exportSalesReturnId: this.#exportSalesReturnId,
      exportSalesReturnBc16Id: this.#exportSalesReturnBc16Id,
      itemStockDtId: this.#itemStockDtId,
      exportSalesInvItemDtId: this.#exportSalesInvItemDtId,
      itemId: this.#itemId,
      expDay: this.#expDay,
      expMonth: this.#expMonth,
      expYear: this.#expYear,
      qty: this.#qty,
      ...super.toModel()
    };
  }
}

class ExportSalesReturnRejectDto extends StandardDto {
  #exportSalesReturnRejectId;
  #exportSalesReturnId;
  #note;
  #userId;

  constructor(dto) {
    super(dto);
    this.#exportSalesReturnRejectId = dto.export_sales_packing_list_request_id;
    this.#exportSalesReturnId = dto.export_sales_return_id;
    this.#note = dto.note;
    this.#userId = dto.userId;
  }

  get exportSalesReturnRejectId() {
    return this.#exportSalesReturnRejectId;
  }

  toModel() {
    return {
      exportSalesReturnRejectId: this.#exportSalesReturnRejectId,
      exportSalesReturnId: this.#exportSalesReturnId,
      note: this.#note,
      userId: this.#userId,
      ...super.toModel()
    };
  }
}

class ExportSalesReturnRequestDto extends StandardDto {
  #exportSalesReturnRequestId;
  #exportSalesReturnId;
  #note;
  #userId;
  #statusRequest;

  constructor(dto) {
    super(dto);
    this.#exportSalesReturnRequestId = dto.export_sales_packing_list_request_id;
    this.#exportSalesReturnId = dto.export_sales_packing_list_id;
    this.#note = dto.note;
    this.#userId = dto.user_id;
    this.#statusRequest = dto.status_request;
  }

  get exportSalesReturnRequestId() {
    return this.#exportSalesReturnRequestId;
  }

  toModel() {
    return {
      exportSalesReturnRequestId: this.#exportSalesReturnRequestId,
      exportSalesReturnId: this.#exportSalesReturnId,
      note: this.#note,
      userId: this.#userId,
      statusRequest: this.#statusRequest,
      ...super.toModel()
    };
  }
}

export {
  ExportSalesReturnDto,
  ExportSalesReturnBc16Dto,
  ExportSalesReturnCoaDto,
  ExportSalesReturnDtDto,
  ExportSalesReturnItemDtDto,
  ExportSalesReturnRejectDto,
  ExportSalesReturnRequestDto
};
