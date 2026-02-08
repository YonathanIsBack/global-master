import StandardDto from '../../StandardDto.js';

class PurchaseOrderDto extends StandardDto {
  #purchaseOrderId;
  #purchaseOrderCode;
  #purchaseOrderCodeTemp;
  #purchaseOrderDate;
  #purchaseQuoteId;
  #purchaseQuoteCode;
  #traceId;
  #supplierId;
  #warehouseId;
  #customerId;
  #shippingName;
  #shipping;
  #shippingDate;
  #shipToName;
  #shipToAddress;
  #currencyId;
  #currencyRate;
  #paymentTermId;
  #duedate;
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
  #discPersen3;
  #discAmount3;
  #taxPersen;
  #taxAmount;
  #total;
  #totalInv;
  #totalPayFinish;
  #totalAdvpay;
  #totalCreditNote;
  #confirmtime;
  #confirmby;
  #isedit;
  #type;
  #confirmtimeF;
  #confirmbyF;
  #excelUrl;
  #noInQuote;

  constructor(dto) {
    super(dto);
    this.#purchaseOrderId = dto.purchase_order_id;
    this.#purchaseOrderCode = dto.purchase_order_code;
    this.#purchaseOrderCodeTemp = dto.purchase_order_code_temp;
    this.#purchaseOrderDate = dto.purchase_order_date;
    this.#purchaseQuoteId = dto.purchase_quote_id;
    this.#purchaseQuoteCode = dto.purchase_quote_code;
    this.#traceId = dto.trace_id;
    this.#supplierId = dto.supplier_id;
    this.#warehouseId = dto.warehouse_id;
    this.#customerId = dto.customer_id;
    this.#shippingName = dto.shipping_name;
    this.#shipping = dto.shipping;
    this.#shippingDate = dto.shipping_date;
    this.#shipToName = dto.ship_to_name;
    this.#shipToAddress = dto.ship_to_address;
    this.#currencyId = dto.currency_id;
    this.#currencyRate = dto.currency_rate;
    this.#paymentTermId = dto.payment_term_id;
    this.#duedate = dto.duedate;
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
    this.#discPersen3 = dto.disc_persen3;
    this.#discAmount3 = dto.disc_amount3;
    this.#taxPersen = dto.tax_persen;
    this.#taxAmount = dto.tax_amount;
    this.#total = dto.total;
    this.#totalInv = dto.total_inv;
    this.#totalPayFinish = dto.total_pay_finish;
    this.#totalAdvpay = dto.total_advpay;
    this.#totalCreditNote = dto.total_credit_note;
    this.#confirmtime = dto.confirmtime;
    this.#confirmby = dto.confirmby;
    this.#isedit = dto.isedit;
    this.#type = dto.type;
    this.#confirmtimeF = dto.confirmtime_f;
    this.#confirmbyF = dto.confirmby_f;
    this.#excelUrl = dto.excel_url;
    this.#noInQuote = dto.no_in_quote;
  }

  get purchaseOrderId() {
    return this.#purchaseOrderId;
  }

  toModel() {
    return {
      purchaseOrderId: this.#purchaseOrderId,
      purchaseOrderCode: this.#purchaseOrderCode,
      purchaseOrderCodeTemp: this.#purchaseOrderCodeTemp,
      purchaseOrderDate: this.#purchaseOrderDate,
      purchaseQuoteId: this.#purchaseQuoteId,
      purchaseQuoteCode: this.#purchaseQuoteCode,
      traceId: this.#traceId,
      supplierId: this.#supplierId,
      warehouseId: this.#warehouseId,
      customerId: this.#customerId,
      shippingName: this.#shippingName,
      shipping: this.#shipping,
      shippingDate: this.#shippingDate,
      shipToName: this.#shipToName,
      shipToAddress: this.#shipToAddress,
      currencyId: this.#currencyId,
      currencyRate: this.#currencyRate,
      paymentTermId: this.#paymentTermId,
      duedate: this.#duedate,
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
      totalAdvpay: this.#totalAdvpay,
      totalCreditNote: this.#totalCreditNote,
      confirmtime: this.#confirmtime,
      confirmby: this.#confirmby,
      isedit: this.#isedit,
      type: this.#type,
      confirmtimeF: this.#confirmtimeF,
      confirmbyF: this.#confirmbyF,
      excelUrl: this.#excelUrl,
      noInQuote: this.#noInQuote,
      ...super.toModel()
    };
  }
}

class PurchaseOrderAdvanceDto extends StandardDto {
  #purchaseOrderAdvpayId;
  #purchaseOrderId;
  #purchaseAdvpayId;
  #purchaseAdvpayCode;
  #totalDp;
  #totalUsed;
  #remaining;
  #isquote;
  #isadv;
  constructor(dto) {
    super(dto);
    this.#purchaseOrderAdvpayId = dto.purchase_order_advpay_id;
    this.#purchaseOrderId = dto.purchase_order_id;
    this.#purchaseAdvpayId = dto.purchase_advpay_id;
    this.#purchaseAdvpayCode = dto.purchase_advpay_code;
    this.#totalDp = dto.total_dp;
    this.#totalUsed = dto.total_used;
    this.#remaining = dto.remaining;
    this.#isquote = dto.isquote;
    this.#isadv = dto.isadv;
  }
  get purchaseOrderAdvpayId() {
    return this.#purchaseOrderAdvpayId;
  }
  toModel() {
    return {
      purchaseOrderAdvpayId: this.#purchaseOrderAdvpayId,
      purchaseOrderId: this.#purchaseOrderId,
      purchaseAdvpayId: this.#purchaseAdvpayId,
      purchaseAdvpayCode: this.#purchaseAdvpayCode,
      totalDp: this.#totalDp,
      totalUsed: this.#totalUsed,
      remaining: this.#remaining,
      isquote: this.#isquote,
      isadv: this.#isadv,
      ...super.toModel()
    };
  }
}

class PurchaseOrderDtDto extends StandardDto {
  #purchaseOrderDtId;
  #purchaseOrderId;
  #purchaseQuoteId;
  #purchaseQuoteDtId;
  #itemId;
  #itemCode;
  #quoteCode;
  #itemName;
  #qty;
  #qtyQ;
  #qtyPr;
  #price;
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
  constructor(dto) {
    super(dto);
    this.#purchaseOrderDtId = dto.purchase_order_dt_id;
    this.#purchaseOrderId = dto.purchase_order_id;
    this.#purchaseQuoteId = dto.purchase_quote_id;
    this.#purchaseQuoteDtId = dto.purchase_quote_dt_id;
    this.#itemId = dto.itemId;
    this.#itemCode = dto.item_code;
    this.#quoteCode = dto.quote_code;
    this.#itemName = dto.item_name;
    this.#qty = dto.qty;
    this.#qtyQ = dto.qty_q;
    this.#qtyPr = dto.qty_pr;
    this.#price = dto.price;
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
  }
  get purchaseOrderDtId() {
    return this.purchaseOrderDtId;
  }
  toModel() {
    return {
      purchaseOrderDtId: this.#purchaseOrderDtId,
      purchaseOrderDtId: this.#purchaseOrderDtId,
      purchaseOrderId: this.#purchaseOrderId,
      purchaseQuoteId: this.#purchaseQuoteId,
      purchaseQuoteDtId: this.#purchaseQuoteDtId,
      itemId: this.#itemId,
      itemCode: this.#itemCode,
      quoteCode: this.#quoteCode,
      itemName: this.#itemName,
      qty: this.#qty,
      qtyQ: this.#qtyQ,
      qtyPr: this.#qtyPr,
      price: this.#price,
      price2: this.#price2,
      priceAvg: this.#priceAvg,
      discPersen: this.#discPersen,
      discAmount: this.#discAmount,
      discPersen2: this.#discPersen2,
      discAmount2: this.#discAmount2,
      disc3: this.#disc3,
      taxPersen: this.#taxPersen,
      taxAmount: this.#taxAmount,
      total: this.#total
    };
  }
}

class PurchaseOrderImgDto extends StandardDto {
  #purchaseOrderImgId;
  #purchaseOrderId;
  #imgName;
  #urlImg;

  constructor(dto) {
    super(dto);
    this.#purchaseOrderImgId = dto.purchase_order_img_id;
    this.#purchaseOrderId = dto.purchase_order_id;
    this.#imgName = dto.img_name;
    this.#urlImg = dto.url_img;
  }
  get purchaseOrderImgId() {
    return this.#purchaseOrderImgId;
  }
  toModel() {
    return {
      purchaseOrderImgId: this.#purchaseOrderImgId,
      purchaseOrderId: this.#purchaseOrderId,
      imgName: this.#imgName,
      urlImg: this.#urlImg,
      ...super.toModel()
    };
  }
}

class PurchaseOrderItemDtDto extends StandardDto {
  #purchaseOrderItemDtId;
  #purchaseOrderDtId;
  #purchaseOrderId;
  #purchaseQuoteItemDtId;
  #itemId;
  #expDay;
  #expMonth;
  #expYear;
  #qty;
  #qtyR;

  constructor(dto) {
    super(dto);
    this.#purchaseOrderItemDtId = dto.purchase_order_item_dt_id;
    this.#purchaseOrderDtId = dto.purchase_order_dt_id;
    this.#purchaseOrderId = dto.purchase_order_id;
    this.#purchaseQuoteItemDtId = dto.purchase_quote_item_dt_id;
    this.#itemId = dto.item_id;
    this.#expDay = dto.exp_day;
    this.#expMonth = dto.exp_month;
    this.#expYear = dto.exp_year;
    this.#qty = dto.qty;
    this.#qtyR = dto.qty_r;
  }
  get purchaseOrderItemDtId() {
    return this.#purchaseOrderItemDtId;
  }
  toModel() {
    return {
      purchaseOrderItemDtId: this.#purchaseOrderItemDtId,
      purchaseOrderDtId: this.#purchaseOrderDtId,
      purchaseOrderId: this.#purchaseOrderId,
      purchaseQuoteItemDtId: this.#purchaseQuoteItemDtId,
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

class PurchaseOrderRejectDto extends StandardDto {
  #purchaseOrderRejectId;
  #purchaseOrderId;
  #note;
  #userId;

  constructor(dto) {
    super(dto);
    this.#purchaseOrderRejectId = dto.purchase_order_reject_id;
    this.#purchaseOrderId = dto.purchase_order_id;
    this.#note = dto.note;
    this.#userId = dto.userId;
  }
  get purchaseOrderRejectId() {
    return this.#purchaseOrderRejectId;
  }
  toModel() {
    return {
      purchaseOrderRejectId: this.#purchaseOrderRejectId,
      purchaseOrderId: this.#purchaseOrderId,
      note: this.#note,
      userId: this.#userId,
      ...super.toModel()
    };
  }
}

class PurchaseOrderRequestDto extends StandardDto {
  #purchaseOrderRequestId;
  #purchaseOrderId;
  #note;
  #statusRequest;
  #userId;

  constructor(dto) {
    super(dto);
    this.purchaseOrderRequestId = dto.purchase_order_request_id;
    this.purchaseOrderId = dto.purchase_order_id;
    this.#note = dto.note;
    this.#userId = dto.user_id;
    this.#statusRequest = dto.status_request;
  }
  get purchaseOrderRequestId() {
    return this.purchaseOrderRequestId;
  }
  toModel() {
    return {
      purchaseOrderRequestId: this.#purchaseOrderRequestId,
      purchaseOrderId: this.#purchaseOrderId,
      note: this.#note,
      userId: this.#userId,
      statusRequest: this.#statusRequest,
      ...super.toModel()
    };
  }
}
export {
  PurchaseOrderDto,
  PurchaseOrderAdvanceDto,
  PurchaseOrderDtDto,
  PurchaseOrderImgDto,
  PurchaseOrderItemDtDto,
  PurchaseOrderRejectDto,
  PurchaseOrderRequestDto
};
