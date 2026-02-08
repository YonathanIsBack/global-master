import StandardDto from '../../StandardDto.js';

class ImportQuoteDto extends StandardDto {
  #importQuoteId;
  #traceId;
  #companyId;
  #warehouseId;
  #importQuoteCode;
  #importQuoteCodeTemp;
  #importQuoteDate;
  #supplierId;
  #currencyId;
  #currencyRate;
  #paymentTermId;
  #note;
  #status;
  #statusNext;
  #isFinish;
  #totalQty;
  #subtotal;
  #discPersen;
  #discAmount;
  #discPersen2;
  #discAmount2;
  #discPersen3;
  #discAmount3;
  #taxPersen;
  #taxAmount;
  #isvat;
  #total;
  #totalPayFinish;
  #advAmount;
  #totalCreditNote;
  #cretime;
  #creby;
  #modtime;
  #modby;
  #confirmtime;
  #confirmby;
  #isedit;
  #confirmtimeF;
  #confirmbyF;

  constructor(dto) {
    super(dto);
    this.#importQuoteId = dto.import_quote_id;
    this.#traceId = dto.trace_id;
    this.#companyId = dto.company_id;
    this.#warehouseId = dto.warehouse_id;
    this.#importQuoteCode = dto.import_quote_code;
    this.#importQuoteCodeTemp = dto.import_quote_code_temp;
    this.#importQuoteDate = dto.import_quote_date;
    this.#supplierId = dto.supplier_id;
    this.#currencyId = dto.currency_id;
    this.#currencyRate = dto.currency_rate;
    this.#paymentTermId = dto.payment_term_id;
    this.#note = dto.note;
    this.#status = dto.status;
    this.#statusNext = dto.status_next;
    this.#isFinish = dto.is_finish;
    this.#totalQty = dto.total_qty;
    this.#subtotal = dto.subtotal;
    this.#discPersen = dto.disc_persen;
    this.#discAmount = dto.disc_amount;
    this.#discPersen2 = dto.disc_persen2;
    this.#discAmount2 = dto.disc_amount2;
    this.#discPersen3 = dto.disc_persen3;
    this.#discAmount3 = dto.disc_amount3;
    this.#taxPersen = dto.tax_persen;
    this.#taxAmount = dto.tax_amount;
    this.#isvat = dto.isvat;
    this.#total = dto.total;
    this.#totalPayFinish = dto.total_pay_finish;
    this.#advAmount = dto.adv_amount;
    this.#totalCreditNote = dto.total_credit_note;
    this.#cretime = dto.cretime;
    this.#creby = dto.creby;
    this.#modtime = dto.modtime;
    this.#modby = dto.modby;
    this.#confirmtime = dto.confirmtime;
    this.#confirmby = dto.confirmby;
    this.#isedit = dto.isedit;
    this.#confirmtimeF = dto.confirmtime_f;
    this.#confirmbyF = dto.confirmby_f;
  }

  get importQuoteId() {
    return this.#importQuoteId;
  }

  toModel() {
    return {
      importQuoteId: this.#importQuoteId,
      traceId: this.#traceId,
      companyId: this.#companyId,
      warehouseId: this.#warehouseId,
      importQuoteCode: this.#importQuoteCode,
      importQuoteCodeTemp: this.#importQuoteCodeTemp,
      importQuoteDate: this.#importQuoteDate,
      supplierId: this.#supplierId,
      currencyId: this.#currencyId,
      currencyRate: this.#currencyRate,
      paymentTermId: this.#paymentTermId,
      note: this.#note,
      status: this.#status,
      statusNext: this.#statusNext,
      isFinish: this.#isFinish,
      totalQty: this.#totalQty,
      subtotal: this.#subtotal,
      discPersen: this.#discPersen,
      discAmount: this.#discAmount,
      discPersen2: this.#discPersen2,
      discAmount2: this.#discAmount2,
      discPersen3: this.#discPersen3,
      discAmount3: this.#discAmount3,
      taxPersen: this.#taxPersen,
      taxAmount: this.#taxAmount,
      isvat: this.#isvat,
      total: this.#total,
      totalPayFinish: this.#totalPayFinish,
      advAmount: this.#advAmount,
      totalCreditNote: this.#totalCreditNote,
      cretime: this.#cretime,
      creby: this.#creby,
      modtime: this.#modtime,
      modby: this.#modby,
      confirmtime: this.#confirmtime,
      confirmby: this.#confirmby,
      isedit: this.#isedit,
      confirmtimeF: this.#confirmtimeF,
      confirmbyF: this.#confirmbyF,
      ...super.toModel()
    };
  }
}

class ImportQuoteAdvancePayDto extends StandardDto {
  #importQuoteAdvpayId;
  #importQuoteId;
  #importAdvpayId;
  #importAdvpayCode;
  #totalDp;
  #totalUsed;
  #remaining;
  #isadv;
  #type;
  #cretime;
  #creby;
  #modtime;
  #modby;

  constructor(dto) {
    super(dto);
    this.#importQuoteAdvpayId = dto.import_order_advpay_id;
    this.#importQuoteId = dto.import_quote_id;
    this.#importAdvpayId = dto.import_advpay_id;
    this.#importAdvpayCode = dto.import_advpay_code;
    this.#totalDp = dto.total_dp;
    this.#totalUsed = dto.total_used;
    this.#remaining = dto.remaining;
    this.#isadv = dto.isadv;
    this.#type = dto.type;
    this.#cretime = dto.cretime;
    this.#creby = dto.creby;
    this.#modtime = dto.modtime;
    this.#modby = dto.modby;
  }
  get importQuoteAdvpayId() {
    return this.#importQuoteAdvpayId;
  }
  toModel() {
    return {
      importQuoteAdvpayId: this.#importQuoteAdvpayId,
      importQuoteId: this.#importQuoteId,
      importAdvpayId: this.#importAdvpayId,
      importAdvpayCode: this.#importAdvpayCode,
      totalDp: this.#totalDp,
      totalUsed: this.#totalUsed,
      remaining: this.#remaining,
      isadv: this.#isadv,
      type: this.#type,
      cretime: this.#cretime,
      creby: this.#creby,
      modtime: this.#modtime,
      modby: this.#modby,
      ...super.toModel()
    };
  }
}

class ImportQuoteCreditNoteDto extends StandardDto {
  #importQuoteCreditNoteId;
  #importQuoteId;
  #importCreditNoteId;
  #importCreditNoteName;
  #importCreditNoteCode;
  #traceId;
  #nominal;
  #used;
  #cretime;
  #creby;
  #modtime;
  #modby;
  #confirmtime;
  #confirmby;

  constructor(dto) {
    super(dto);
    this.#importQuoteCreditNoteId = dto.import_order_credit_note_id;
    this.#importQuoteId = dto.import_quote_id;
    this.#importCreditNoteId = dto.import_credit_note_id;
    this.#importCreditNoteName = dto.import_credit_note_name;
    this.#importCreditNoteCode = dto.import_credit_note_code;
    this.#traceId = dto.trace_id;
    this.#nominal = dto.nominal;
    this.#used = dto.this.#cretime = dto.cretime;
    this.#creby = dto.creby;
    this.#modtime = dto.modtime;
    this.#modby = dto.modby;
    this.#confirmtime = dto.confirmtime;
    this.#confirmby = dto.confirmby;
  }
  get importPaymentCoaId() {
    return this.#importQuoteCreditNoteId;
  }
  toModel() {
    return {
      importPaymentCoaId: this.#importQuoteCreditNoteId,
      importQuoteId: this.#importQuoteId,
      importCreditNoteId: this.#importCreditNoteId,
      importCreditNoteName: this.#importCreditNoteName,
      importCreditNoteCode: this.#importCreditNoteCode,
      traceId: this.#traceId,
      nominal: this.#nominal,
      used: this.#used,
      cretime: this.#cretime,
      creby: this.#creby,
      modtime: this.#modtime,
      modby: this.#modby,
      confirmtime: this.#confirmtime,
      confirmby: this.#confirmby,
      ...super.toModel()
    };
  }
}

class ImportQuoteDtDto extends StandardDto {
  #importQuoteDtId;
  #importQuoteId;
  #itemId;
  #itemCode;
  #itemName;
  #qty;
  #qtyIo;
  #price;
  #price2;
  #priceAvg;
  #discPersen;
  #discAmount;
  #disc3;
  #taxPersen;
  #taxAmount;
  #total;

  constructor(dto) {
    super(dto);
    this.#importQuoteDtId = dto.import_quote_dt_id;
    this.#importQuoteId = dto.import_quote_id;
    this.#itemId = dto.item_id;
    this.#itemCode = dto.item_code;
    this.#itemName = dto.item_name;
    this.#qty = dto.qty;
    this.#qtyIo = dto.qty_io;
    this.#price = dto.price;
    this.#price2 = dto.price2;
    this.#priceAvg = dto.price_avg;
    this.#discPersen = dto.disc_persen;
    this.#discAmount = dto.disc_amount;
    this.#disc3 = dto.disc3;
    this.#taxPersen = dto.tax_persen;
    this.#taxAmount = dto.tax_amount;
    this.#total = dto.total;
  }
  get importQuoteDtId() {
    return this.#importQuoteDtId;
  }
  toModel() {
    return {
      importQuoteDtId: this.#importQuoteDtId,
      importQuoteId: this.#importQuoteId,
      itemId: this.#itemId,
      itemCode: this.#itemCode,
      itemName: this.#itemName,
      qty: this.#qty,
      qtyIo: this.#qtyIo,
      price: this.#price,
      price2: this.#price2,
      priceAvg: this.#priceAvg,
      discPersen: this.#discPersen,
      discAmount: this.#discAmount,
      disc3: this.#disc3,
      taxPersen: this.#taxPersen,
      taxAmount: this.#taxAmount,
      total: this.#total,

      total: this.#total,
      ...super.toModel()
    };
  }
}

class ImportQuoteItemDtDto extends StandardDto {
  #importOrderItemDtId;
  #importOrderDtId;
  #importOrderId;
  #itemId;
  #expDay;
  #expMonth;
  #expYear;
  #qty;
  #qtyO;

  constructor(dto) {
    super(dto);
    this.#importOrderItemDtId = dto.import_quote_item_dt_id;
    this.#importOrderDtId = dto.import_quote_dt_id;
    this.#importOrderId = dto.import_quote_id;
    this.#itemId = dto.item_id;
    this.#expDay = dto.exp_day;
    this.#expMonth = dto.exp_month;
    this.#expYear = dto.exp_year;
    this.#qty = dto.qty;
    this.#qtyO = dto.qty_o;
  }
  get importPaymentCreditNoteId() {
    return this.#importOrderItemDtId;
  }
  toModel() {
    return {
      importPaymentCreditNoteId: this.#importOrderItemDtId,
      importOrderDtId: this.#importOrderDtId,
      importOrderId: this.#importOrderId,
      itemId: this.#itemId,
      expDay: this.#expDay,
      expMonth: this.#expMonth,
      expYear: this.#expYear,
      qty: this.#qty,
      qtyO: this.#qtyO,
      ...super.toModel()
    };
  }
}

class ImportQuoteRejectDto extends StandardDto {
  #importQuoteRejectId;
  #importQuoteId;
  #note;
  #userId;
  #cretime;
  #creby;

  constructor(dto) {
    super(dto);
    this.#importQuoteRejectId = dto.import_quote_reject_id;
    this.#importQuoteId = dto.import_quote_id;
    this.#note = dto.note;
    this.#userId = dto.user_id;
    this.#cretime = dto.cretime;
    this.#creby = dto.creby;
  }
  get importQuoteRejectId() {
    return this.#importQuoteRejectId;
  }
  toModel() {
    return {
      importQuoteRejectId: this.#importQuoteRejectId,
      importQuoteId: this.#importQuoteId,
      note: this.#note,
      userId: this.#userId,
      cretime: this.#cretime,
      creby: this.#creby,
      ...super.toModel()
    };
  }
}

class ImportQuoteRequestDto extends StandardDto {
  #importQuoteRequestId;
  #importQuoteId;
  #note;
  #statusRequest;
  #userId;
  #cretime;
  #creby;

  constructor(dto) {
    super(dto);
    this.#importQuoteRequestId = dto.import_quote_request_id;
    this.#importQuoteId = dto.import_quote_id;
    this.#note = dto.note;
    this.#userId = dto.user_id;
    this.#statusRequest = dto.status_request;
    this.#cretime = dto.cretime;
    this.#creby = dto.creby;
  }
  get importQuoteRequestId() {
    return this.importQuoteRequestId;
  }
  toModel() {
    return {
      importQuoteRequestId: this.#importQuoteRequestId,
      importQuoteId: this.#importQuoteId,
      note: this.#note,
      userId: this.#userId,
      statusRequest: this.#statusRequest,
      cretime: this.#cretime,
      creby: this.#creby,
      ...super.toModel()
    };
  }
}
export {
  ImportQuoteDto,
  ImportQuoteAdvancePayDto,
  ImportQuoteCreditNoteDto,
  ImportQuoteDtDto,
  ImportQuoteItemDtDto,
  ImportQuoteRejectDto,
  ImportQuoteRequestDto
};
