import StandardDto from '../../StandardDto.js';

class SalesReturnDto extends StandardDto {
  #salesReturnId;
  #salesReturnCode;
  #salesReturnCodeTemp;
  #salesReturnDate;
  #salesOrderId;
  #salesOrderCode;
  #traceId;
  #warehouseId;
  #customerId;
  #currencyId;
  #currencyRate;
  #salesInvId;
  #salesInvCode;
  #salesInvDate;
  #salesInvStatus;
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
  #status;
  #statusNext;
  #confirmtime;
  #confirmby;
  #isedit;
  #confirmtimeF;
  #confirmbyF;

  constructor(dto) {
    super(dto);
    this.#salesReturnId = dto.sales_return_id;
    this.#salesReturnCode = dto.sales_return_code;
    this.#salesReturnCodeTemp = dto.sales_return_code_temp;
    this.#salesReturnDate = dto.sales_return_date;
    this.#salesOrderId = dto.sales_order_id;
    this.#salesOrderCode = dto.sales_order_code;
    this.#traceId = dto.trace_id;
    this.#warehouseId = dto.warehouse_id;
    this.#customerId = dto.customer_id;
    this.#currencyId = dto.currency_id;
    this.#currencyRate = dto.currency_rate;
    this.#salesInvId = dto.sales_inv_id;
    this.#salesInvCode = dto.sales_inv_code;
    this.#salesInvDate = dto.sales_inv_date;
    this.#salesInvStatus = dto.sales_inv_status;
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
    this.#status = dto.status;
    this.#statusNext = dto.status_next;
    this.#confirmtime = dto.confirmtime;
    this.#confirmby = dto.confirmby;
    this.#isedit = dto.isedit;
    this.#confirmtimeF = dto.confirmtime_f;
    this.#confirmbyF = dto.confirmby_f;
  }

  get salesReturnId() {
    return this.#salesReturnId;
  }

  toModel() {
    return {
      salesReturnId: this.#salesReturnId,
      salesReturnCode: this.#salesReturnCode,
      salesReturnCodeTemp: this.#salesReturnCodeTemp,
      salesReturnDate: this.#salesReturnDate,
      salesOrderId: this.#salesOrderId,
      salesOrderCode: this.#salesOrderCode,
      traceId: this.#traceId,
      warehouseId: this.#warehouseId,
      customerId: this.#customerId,
      currencyId: this.#currencyId,
      currencyRate: this.#currencyRate,
      salesInvId: this.#salesInvId,
      salesInvCode: this.#salesInvCode,
      salesInvDate: this.#salesInvDate,
      salesInvStatus: this.#salesInvStatus,
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

class SalesReturnCoaDto extends StandardDto {
  #salesReturnCoaId;
  #salesReturnId;
  #coaId;
  #coaCode;
  #coaName;
  #coaSubleadgerId;
  #coaSubleadgerCode;
  #coaSubleadgerName;
  #payment;
  #paymentNumber;
  #paymentDate;
  #confirmtime;
  #confirmby;

  constructor(dto) {
    super(dto);
    this.#salesReturnCoaId = dto.sales_return_coa_id;
    this.#salesReturnId = dto.sales_return_id;
    this.#coaId = dto.coa_id;
    this.#coaCode = dto.coa_code;
    this.#coaName = dto.coa_name;
    this.#coaSubleadgerId = dto.coa_subleadger_id;
    this.#coaSubleadgerCode = dto.coa_subleadger_code;
    this.#coaSubleadgerName = dto.coa_subleadger_name;
    this.#payment = dto.payment;
    this.#paymentNumber = dto.payment_number;
    this.#paymentDate = dto.payment_date;
    this.#confirmtime = dto.confirmtime;
    this.#confirmby = dto.confirmby;
  }

  get salesReturnCoaId() {
    return this.#salesReturnCoaId;
  }

  toModel() {
    return {
      salesReturnCoaId: this.#salesReturnCoaId,
      salesReturnId: this.#salesReturnId,
      coaId: this.#coaId,
      coaCode: this.#coaCode,
      coaName: this.#coaName,
      coaSubleadgerId: this.#coaSubleadgerId,
      coaSubleadgerCode: this.#coaSubleadgerCode,
      coaSubleadgerName: this.#coaSubleadgerName,
      payment: this.#payment,
      paymentNumber: this.#paymentNumber,
      paymentDate: this.#paymentDate,
      confirmtime: this.#confirmtime,
      confirmby: this.#confirmby,
      ...super.toModel()
    };
  }
}

class SalesReturnDirectDto extends StandardDto {
  #salesReturnDirectId;
  #salesReturnDirectCode;
  #salesReturnDirectDate;
  #traceId;
  #warehouseId;
  #customerId;
  #currencyId;
  #currencyRate;
  #salesInvCode;
  #salesInvDate;
  #notaDate;
  #nota;
  #notes;
  #isvat;
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
  #totalT;
  #status;
  #statusNext;
  #confirmtime;
  #confirmby;
  #isedit;
  #confirmtimeF;
  #confirmbyF;

  constructor(dto) {
    super(dto);
    this.#salesReturnDirectId = dto.sales_return_direct_id;
    this.#salesReturnDirectCode = dto.sales_return_direct_code;
    this.#salesReturnDirectDate = dto.sales_return_direct_date;
    this.#traceId = dto.trace_id;
    this.#warehouseId = dto.warehouse_id;
    this.#customerId = dto.customer_id;
    this.#currencyId = dto.currency_id;
    this.#currencyRate = dto.currency_rate;
    this.#salesInvCode = dto.sales_inv_code;
    this.#salesInvDate = dto.sales_inv_date;
    this.#notaDate = dto.nota_date;
    this.#nota = dto.nota;
    this.#notes = dto.notes;
    this.#isvat = dto.isvat;
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
    this.#totalT = dto.total_t;
    this.#status = dto.status;
    this.#statusNext = dto.status_next;
    this.#confirmtime = dto.confirmtime;
    this.#confirmby = dto.confirmby;
    this.#isedit = dto.isedit;
    this.#confirmtimeF = dto.confirmtime_f;
    this.#confirmbyF = dto.confirmby_f;
  }

  get salesReturnDirectId() {
    return this.#salesReturnDirectId;
  }

  toModel() {
    return {
      salesReturnDirectId: this.#salesReturnDirectId,
      salesReturnDirectCode: this.#salesReturnDirectCode,
      salesReturnDirectDate: this.#salesReturnDirectDate,
      traceId: this.#traceId,
      warehouseId: this.#warehouseId,
      customerId: this.#customerId,
      currencyId: this.#currencyId,
      currencyRate: this.#currencyRate,
      salesInvCode: this.#salesInvCode,
      salesInvDate: this.#salesInvDate,
      notaDate: this.#notaDate,
      nota: this.#nota,
      notes: this.#notes,
      isvat: this.#isvat,
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
      totalT: this.#totalT,
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

class SalesReturnDirectCoaDto extends StandardDto {
  #salesReturnDirectCoaId;
  #salesReturnDirectId;
  #coaId;
  #coaCode;
  #coaName;
  #coaSubleadgerId;
  #coaSubleadgerCode;
  #coaSubleadgerName;
  #payment;
  #paymentNumber;
  #paymentDate;
  #confirmtime;
  #confirmby;

  constructor(dto) {
    super(dto);
    this.#salesReturnDirectCoaId = dto.sales_return_direct_coa_id;
    this.#salesReturnDirectId = dto.sales_return_direct_id;
    this.#coaId = dto.coa_id;
    this.#coaCode = dto.coa_code;
    this.#coaName = dto.coa_name;
    this.#coaSubleadgerId = dto.coa_subleadger_id;
    this.#coaSubleadgerCode = dto.coa_subleadger_code;
    this.#coaSubleadgerName = dto.coa_subleadger_name;
    this.#payment = dto.payment;
    this.#paymentNumber = dto.payment_number;
    this.#paymentDate = dto.payment_date;
    this.#confirmtime = dto.confirmtime;
    this.#confirmby = dto.confirmby;
  }

  get salesReturnDirectCoaId() {
    return this.#salesReturnDirectCoaId;
  }

  toModel() {
    return {
      salesReturnDirectCoaId: this.#salesReturnDirectCoaId,
      salesReturnDirectId: this.#salesReturnDirectId,
      coaId: this.#coaId,
      coaCode: this.#coaCode,
      coaName: this.#coaName,
      coaSubleadgerId: this.#coaSubleadgerId,
      coaSubleadgerCode: this.#coaSubleadgerCode,
      coaSubleadgerName: this.#coaSubleadgerName,
      payment: this.#payment,
      paymentNumber: this.#paymentNumber,
      paymentDate: this.#paymentDate,
      confirmtime: this.#confirmtime,
      confirmby: this.#confirmby,
      ...super.toModel()
    };
  }
}

class SalesReturnDirectDtDto extends StandardDto {
  #salesReturnDirectDtId;
  #salesReturnDirectId;
  #salesInvCode;
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
  #priceAvgT;
  #priceT;
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
  #totalT;
  #isreturn;

  constructor(dto) {
    super(dto);
    this.#salesReturnDirectDtId = dto.sales_return_direct_dt_id;
    this.#salesReturnDirectId = dto.sales_return_direct_id;
    this.#salesInvCode = dto.sales_inv_code;
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
    this.#priceAvgT = dto.price_avg_t;
    this.#priceT = dto.price_t;
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
    this.#totalT = dto.total_t;
    this.#isreturn = dto.isretun;
  }

  get salesReturnDirectDtId() {
    return this.#salesReturnDirectDtId;
  }

  toModel() {
    return {
      salesReturnDirectDtId: this.#salesReturnDirectDtId,
      salesReturnDirectId: this.#salesReturnDirectId,
      salesInvCode: this.#salesInvCode,
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
      priceAvgT: this.#priceAvgT,
      priceT: this.#priceT,
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
      totalT: this.#totalT,
      isreturn: this.#isreturn,
      ...super.toModel()
    };
  }
}

class SalesReturnDirectItemDtDto extends StandardDto {
  #salesReturnDirectItemDtId;
  #salesReturnDirectDtId;
  #salesReturnDirectId;
  #itemStockDtId;
  #itemId;
  #expDay;
  #expMonth;
  #expYear;
  #qty;

  constructor(dto) {
    super(dto);
    this.#salesReturnDirectItemDtId = dto.sales_return_direct_item_dt_id;
    this.#salesReturnDirectDtId = dto.sales_return_direct_dt_id;
    this.#salesReturnDirectId = dto.sales_return_direct_id;
    this.#itemStockDtId = dto.item_stock_dt_id;
    this.#itemId = dto.item_id;
    this.#expDay = dto.exp_day;
    this.#expMonth = dto.exp_month;
    this.#expYear = dto.exp_year;
    this.#qty = dto.qty;
  }

  get salesReturnDirectItemDtId() {
    return this.#salesReturnDirectItemDtId;
  }

  toModel() {
    return {
      salesReturnDirectItemDtId: this.#salesReturnDirectItemDtId,
      salesReturnDirectDtId: this.#salesReturnDirectDtId,
      salesReturnDirectId: this.#salesReturnDirectId,
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

class SalesReturnDtDto extends StandardDto {
  #salesReturnDtId;
  #salesReturnId;
  #salesInvDtId;
  #salesInvId;
  #salesInvCode;
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
  #priceAvgT;
  #priceT;
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
  #totalT;
  #isreturn;
  constructor(dto) {
    super(dto);
    this.#salesReturnDtId = dto.sales_return_dt_id;
    this.#salesReturnId = dto.sales_return_id;
    this.#salesInvDtId = dto.sales_inv_dt_id;
    this.#salesInvId = dto.sales_inv_id;
    this.#salesInvCode = dto.sales_inv_code;
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
    this.#priceAvgT = dto.price_avg_t;
    this.#priceT = dto.price_t;
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
    this.#totalT = dto.total_t;
    this.#isreturn = dto.isreturn;
  }

  get salesReturnDtId() {
    return this.#salesReturnDtId;
  }

  toModel() {
    return {
      salesReturnDtId: this.#salesReturnDtId,
      salesReturnId: this.#salesReturnId,
      salesInvDtId: this.#salesInvDtId,
      salesInvId: this.#salesInvId,
      salesInvCode: this.#salesInvCode,
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
      priceAvgT: this.#priceAvgT,
      priceT: this.#priceT,
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
      totalT: this.#totalT,
      isreturn: this.#isreturn,
      ...super.toModel()
    };
  }
}

class SalesReturnItemDtDto extends StandardDto {
  #salesReturnItemDtId;
  #salesReturnDtId;
  #salesReturnId;
  #itemStockDtId;
  #salesInvItemDtId;
  #itemId;
  #expDay;
  #expMonth;
  #expYear;
  #qty;

  constructor(dto) {
    super(dto);
    this.#salesReturnItemDtId = dto.sales_return_item_dt_id;
    this.#salesReturnDtId = dto.sales_return_dt_id;
    this.#salesReturnId = dto.sales_return_id;
    this.#itemStockDtId = dto.item_stock_dt_id;
    this.#salesInvItemDtId = dto.sales_inv_item_dt_id;
    this.#itemId = dto.item_id;
    this.#expDay = dto.exp_day;
    this.#expMonth = dto.exp_month;
    this.#expYear = dto.exp_year;
    this.#qty = dto.qty;
  }

  get salesReturnItemDtId() {
    return this.#salesReturnItemDtId;
  }

  toModel() {
    return {
      salesReturnItemDtId: this.#salesReturnItemDtId,
      salesReturnDtId: this.#salesReturnDtId,
      salesReturnId: this.#salesReturnId,
      itemStockDtId: this.#itemStockDtId,
      salesInvItemDtId: this.#salesInvItemDtId,
      itemId: this.#itemId,
      expDay: this.#expDay,
      expMonth: this.#expMonth,
      expYear: this.#expYear,
      qty: this.#qty,
      ...super.toModel()
    };
  }
}

class SalesReturnRejectDto extends StandardDto {
  #salesReturnRejectId;
  #salesReturnId;
  #note;
  #userId;

  constructor(dto) {
    super(dto);
    this.#salesReturnRejectId = dto.sales_return_reject_id;
    this.#salesReturnId = dto.sales_return_id;
    this.#note = dto.note;
    this.#userId = dto.userId;
  }

  get salesReturnRejectId() {
    return this.#salesReturnRejectId;
  }

  toModel() {
    return {
      salesReturnRejectId: this.#salesReturnRejectId,
      salesReturnId: this.#salesReturnId,
      note: this.#note,
      userId: this.#userId,
      ...super.toModel()
    };
  }
}

class SalesReturnRequestDto extends StandardDto {
  #salesReturnRequestId;
  #salesPaymentId;
  #note;
  #statusRequest;
  #userId;

  constructor(dto) {
    super(dto);
    this.#salesReturnRequestId = dto.sales_return_request_id;
    this.#salesPaymentId = dto.sales_return_id;
    this.#note = dto.note;
    this.#userId = dto.userId;
    this.#statusRequest = dto.status_request;
  }

  get salesReturnRequestId() {
    return this.#salesReturnRequestId;
  }

  toModel() {
    return {
      salesReturnRequestId: this.#salesReturnRequestId,
      salesReturnId: this.#salesPaymentId,
      note: this.#note,
      userId: this.#userId,
      statusRequest: this.#statusRequest,
      ...super.toModel()
    };
  }
}

export {
  SalesReturnDto,
  SalesReturnCoaDto,
  SalesReturnDirectDto,
  SalesReturnDirectCoaDto,
  SalesReturnDirectDtDto,
  SalesReturnDirectItemDtDto,
  SalesReturnDtDto,
  SalesReturnItemDtDto,
  SalesReturnRejectDto,
  SalesReturnRequestDto
};
