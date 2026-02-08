import ObjectUtil from '../../../util/ObjectUtil.js';
import StandardDto from '../../StandardDto.js';

class ImportOrderDto extends StandardDto {
  #importOrderId;
  #importOrderCode;
  #importOrderCodeTemp;
  #importOrderDate;
  #importQuoteId;
  #importQuoteCode;
  #traceId;
  #supplierId;
  #warehouseId;
  #customerId;
  #shipping;
  #shippingDate;
  #shipToName;
  #shipToAddress;
  #currencyId;
  #currencyRate;
  #paymentTermId;
  #dueDate;
  #isvat;
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
  #taxPersen;
  #taxAmount;
  #total;
  #totalInv;
  #totalPayFinish;
  #advAmount;
  #totalCreditNote;
  #confirmtime;
  #confirmby;
  #isEdit;
  #noInQuote;
  #confirmtimeF;
  #confirmbyF;

  constructor(dto) {
    super(dto);
    this.#importOrderId = dto.import_order_id;
    this.#importOrderCode = dto.import_order_code;
    this.#importOrderCodeTemp = dto.import_order_code_temp;
    this.#importOrderDate = ObjectUtil.defaultEmptyString(dto.import_order_date);
    this.#importQuoteId = ObjectUtil.defaultEmptyString(dto.import_quote_id);
    this.#importQuoteCode = dto.import_quote_code;
    this.#traceId = dto.trace_id;
    this.#supplierId = ObjectUtil.defaultEmptyString(dto.supplier_id);
    this.#warehouseId = ObjectUtil.defaultEmptyString(dto.warehouse_id);
    this.#customerId = ObjectUtil.defaultEmptyString(dto.customer_id);
    this.#shipping = dto.shipping;
    this.#shippingDate = ObjectUtil.defaultEmptyString(dto.shipping_date);
    this.#shipToName = ObjectUtil.defaultEmptyString(dto.ship_to_name);
    this.#shipToAddress = ObjectUtil.defaultEmptyString(dto.ship_to_address);
    this.#currencyId = ObjectUtil.defaultEmptyString(dto.currency_id);
    this.#currencyRate = dto.currency_rate;
    this.#paymentTermId = ObjectUtil.defaultEmptyString(dto.payment_term_id);
    this.#dueDate = ObjectUtil.defaultEmptyString(dto.duedate);
    this.#isvat = dto.isvat;
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
    this.#taxPersen = dto.tax_persen;
    this.#taxAmount = dto.tax_amount;
    this.#total = dto.total;
    this.#totalInv = dto.total_inv;
    this.#totalPayFinish = dto.total_pay_finish;
    this.#advAmount = dto.adv_amount;
    this.#totalCreditNote = dto.total_credit_note;
    this.#confirmtime = dto.confirmtime;
    this.#confirmby = dto.confirmby;
    this.#isEdit = dto.isedit;
    this.#noInQuote = dto.no_in_quote;
    this.#confirmtimeF = dto.confirmtime_f;
    this.#confirmbyF = dto.confirmby_f;
  }

  get importOrderId() {
    return this.#importOrderId;
  }

  toModel() {
    return {
      importOrderId: this.#importOrderId,
      importOrderCode: this.#importOrderCode,
      importOrderCodeTemp: this.#importOrderCodeTemp,
      importOrderDate: this.#importOrderDate,
      importQuoteId: this.#importQuoteId,
      importQuoteCode: this.#importQuoteCode,
      traceId: this.#traceId,
      supplierId: this.#supplierId,
      warehouseId: this.#warehouseId,
      customerId: this.#customerId,
      shipping: this.#shipping,
      shippingDate: this.#shippingDate,
      shipToName: this.#shipToName,
      shipToAddress: this.#shipToAddress,
      currencyId: this.#currencyId,
      currencyRate: this.#currencyRate,
      paymentTermId: this.#paymentTermId,
      dueDate: this.#dueDate,
      isvat: this.#isvat,
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
      taxPersen: this.#taxPersen,
      taxAmount: this.#taxAmount,
      total: this.#total,
      totalInv: this.#totalInv,
      totalPayFinish: this.#totalPayFinish,
      advAmount: this.#advAmount,
      totalCreditNote: this.#totalCreditNote,
      confirmtime: this.#confirmtime,
      confirmby: this.#confirmby,
      isEdit: this.#isEdit,
      noInQuote: this.#noInQuote,
      confirmtimeF: this.#confirmtimeF,
      confirmbyF: this.#confirmbyF,
      ...super.toModel()
    };
  }
}

class ImportOrderAdvanceDto extends StandardDto {
  #importOrderAdvpayId;
  #importOrderId;
  #importAdvpayId;
  #importAdvpayCode;
  #totalDp;
  #totalUsed;
  #remaining;
  #isquote;
  #isadv;
  #type;

  constructor(dto) {
    super(dto);
    this.#importOrderAdvpayId = dto.import_order_advpay_id;
    this.#importOrderId = dto.import_order_id;
    this.#importAdvpayId = dto.import_advpay_id;
    this.#importAdvpayCode = dto.import_advpay_code;
    this.#totalDp = dto.total_dp;
    this.#totalUsed = dto.total_used;
    this.#remaining = dto.remaining;
    this.#isquote = dto.isquote;
    this.#isadv = dto.isadv;
    this.#type = dto.type;
  }

  get importOrderAdvpayId() {
    return this.#importOrderAdvpayId;
  }

  toModel() {
    return {
      importOrderAdvpayId: this.#importOrderAdvpayId,
      importOrderId: this.#importOrderId,
      importAdvpayId: this.#importAdvpayId,
      importAdvpayCode: this.#importAdvpayCode,
      totalDp: this.#totalDp,
      totalUsed: this.#totalUsed,
      remaining: this.#remaining,
      isquote: this.#isquote,
      isadv: this.#isadv,
      type: this.#type,
      ...super.toModel()
    };
  }
}

class ImportOrderCreditNoteDto extends StandardDto {
  #importOrderCreditNoteId;
  #importOrderId;
  #importCreditNoteId;
  #importCreditNoteName;
  #importCreditNoteCode;
  #traceId;
  #isquote;
  #nominal;
  #used;
  #confirmtime;
  #confirmby;

  constructor(dto) {
    super(dto);
    this.#importOrderCreditNoteId = dto.import_order_credit_note_id;
    this.#importOrderId = dto.import_order_id;
    this.#importCreditNoteId = dto.import_credit_note_id;
    this.#importCreditNoteName = dto.import_cred;
    this.#importCreditNoteCode = dto.import_credit_note_code;
    this.#traceId = dto.trace_id;
    this.#isquote = dto.isquote;
    this.#nominal = dto.nominal;
    this.#used = dto.used;
    this.#confirmtime = dto.confirmtime;
    this.#confirmby = dto.confirmby;
  }

  get importOrderCreditNoteId() {
    return this.#importOrderCreditNoteId;
  }

  toModel() {
    return {
      importOrderCreditNoteId: this.#importOrderCreditNoteId,
      importOrderId: this.#importOrderId,
      importCreditNoteId: this.#importCreditNoteId,
      importCreditNoteName: this.#importCreditNoteName,
      importCreditNoteCode: this.#importCreditNoteCode,
      traceId: this.#traceId,
      isquote: this.#isquote,
      nominal: this.#nominal,
      used: this.#used,
      confirmtime: this.#confirmtime,
      confirmby: this.#confirmby,
      ...super.toModel()
    };
  }
}

class ImportOrderDtDto extends StandardDto {
  #importOrderDtId;
  #importOrderId;
  #importQuoteId;
  #importQuoteDtId;
  #quoteCode;
  #itemId;
  #itemCode;
  #itemName;
  #qty;
  #qtyQ;
  #qtyIr;
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
    this.#importOrderDtId = dto.import_order_dt_id;
    this.#importOrderId = ObjectUtil.defaultEmptyString(dto.import_order_id);
    this.#importQuoteId = ObjectUtil.defaultEmptyString(dto.import_quote_id);
    this.#importQuoteDtId = dto.import_quote_dt_id;
    this.#quoteCode = dto.quote_code;
    this.#itemId = dto.item_id;
    this.#itemCode = dto.item_code;
    this.#itemName = dto.item_name;
    this.#qty = dto.qty;
    this.#qtyQ = dto.qty_q;
    this.#qtyIr = dto.qty_ir;
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

  get importOrderDtId() {
    return this.#importOrderDtId;
  }

  toModel() {
    return {
      importOrderDtId: this.#importOrderDtId,
      importOrderId: this.#importOrderId,
      importQuoteId: this.#importQuoteId,
      importQuoteDtId: this.#importQuoteDtId,
      quoteCode: this.#quoteCode,
      itemId: this.#itemId,
      itemCode: this.#itemCode,
      itemName: this.#itemName,
      qty: this.#qty,
      qtyQ: this.#qtyQ,
      qtyIr: this.#qtyIr,
      price: this.#price,
      price2: this.#price2,
      priceAvg: this.#priceAvg,
      discPersen: this.#discPersen,
      discAmount: this.#discAmount,
      disc3: this.#disc3,
      taxPersen: this.#taxPersen,
      taxAmount: this.#taxAmount,
      total: this.#total,
      ...super.toModel()
    };
  }
}

class ImportOrderItemDtDto extends StandardDto {
  #importOrderItemDtId;
  #importOrderDtId;
  #importOrderId;
  #importQuoteItemDtId;
  #itemId;
  #expDay;
  #expMonth;
  #expYear;
  #qty;
  #qtyR;

  constructor(dto) {
    super(dto);
    this.#importOrderItemDtId = dto.import_inv_item_dt_id;
    this.#importOrderDtId = dto.import_order_id;
    this.#importOrderId = dto.import_quote_id;
    this.#importQuoteItemDtId = dto.import_quote_dt_id;
    this.#itemId = dto.item_id;
    this.#expDay = dto.exp_day;
    this.#expMonth = dto.exp_month;
    this.#expYear = dto.exp_year;
    this.#qty = dto.qty;
    this.#qtyR = dto.qty_r;
  }

  get importOrderItemDtId() {
    return this.#importOrderItemDtId;
  }

  toModel() {
    return {
      importOrderItemDtId: this.#importOrderItemDtId,
      importOrderDtId: this.#importOrderDtId,
      importOrderId: this.#importOrderId,
      importQuoteItemDtId: this.#importQuoteItemDtId,
      itemId: this.#itemId,
      expDay: this.#expDay,
      expMonth: this.#expMonth,
      expYear: this.#expYear,
      qty: this.#qty,
      qtyR: this.#qtyR,
      ...super.toModel()
    };
  }
}

class ImportOrderRejectDto extends StandardDto {
  #importOrderRejectId;
  #importOrderId;
  #note;
  #userId;

  constructor(dto) {
    super(dto);
    this.#importOrderRejectId = dto.import_order_reject_id;
    this.#importOrderId = dto.import_order_id;
    this.#note = dto.note;
    this.#userId = dto.user_id;
  }

  get importOrderRejectId() {
    return this.#importOrderRejectId;
  }

  toModel() {
    return {
      importOrderRejectId: this.#importOrderRejectId,
      importOrderId: this.#importOrderId,
      note: this.#note,
      userId: this.#userId,
      ...super.toModel()
    };
  }
}

class ImportOrderRequestDto extends StandardDto {
  #importOrderRequestId;
  #importOrderId;
  #note;
  #statusRequest;
  #userId;

  constructor(dto) {
    super(dto);
    this.#importOrderRequestId = dto.import_order_request_id;
    this.#importOrderId = dto.import_order_id;
    this.#note = dto.note;
    this.#userId = dto.user_id;
    this.#statusRequest = dto.status_request;
  }

  get importOrderRequestId() {
    return this.importOrderRequestId;
  }

  toModel() {
    return {
      importOrderRequestId: this.#importOrderRequestId,
      importOrderId: this.#importOrderId,
      note: this.#note,
      userId: this.#userId,
      statusRequest: this.#statusRequest,
      ...super.toModel()
    };
  }
}
export {
  ImportOrderDto,
  ImportOrderAdvanceDto,
  ImportOrderCreditNoteDto,
  ImportOrderDtDto,
  ImportOrderItemDtDto,
  ImportOrderRejectDto,
  ImportOrderRequestDto
};
