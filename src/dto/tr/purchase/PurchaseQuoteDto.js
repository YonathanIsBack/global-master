import StandardDto from '../../StandardDto.js';

class PurchaseQuoteDto extends StandardDto {
  #purchaseQuoteId;
  #traceId;
  #companyId;
  #warehouseId;
  #purchaseQuoteCode;
  #purchaseQuoteCodeTemp;
  #purchaseQuoteDate;
  #supplierId;
  #currencyId;
  #currencyRate;
  #paymentTermId;
  #shipping;
  #shippingDate;
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
  #totalAdvpay;
  #taxPersen;
  #taxAmount;
  #isvat;
  #total;
  #totalPayFinish;
  #confirmtime;
  #confirmby;
  #confirmtimeF;
  #confirmbyF;
  #excelUrl
  #isedit;

  constructor(dto) {
    super(dto);
    this.#purchaseQuoteId = dto.purchase_quote_id;
    this.#traceId = dto.trace_id;
    this.#companyId = dto.company_id;
    this.#warehouseId = dto.warehouse_id;
    this.#purchaseQuoteCode = dto.purchase_quote_code;
    this.#purchaseQuoteCodeTemp = dto.purchase_quote_code_temp;
    this.#purchaseQuoteDate = dto.purchase_quote_date;
    this.#supplierId = dto.supplier_id;
    this.#currencyId = dto.currency_id;
    this.#currencyRate = dto.currency_rate;
    this.#paymentTermId = dto.payment_term_id;
    this.#shipping = dto.shipping;
    this.#shippingDate = dto.shipping_date;
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
    this.#discPersen3 = dto.disc_Persen3;
    this.#discAmount3 = dto.disc_Amount3;
    this.#totalAdvpay = dto.total_advpay;
    this.#taxPersen = dto.tax_persen;
    this.#taxAmount = dto.tax_amount;
    this.#isvat = dto.isvat;
    this.#total = dto.total;
    this.#totalPayFinish = dto.total_pay_finish;
    this.#confirmtime = dto.confirmtime;
    this.#confirmby = dto.confirmby;
    this.#confirmtimeF = dto.confirmtime_f;
    this.#confirmbyF = dto.confirmby_f;
    this.#excelUrl = dto.excel_url;
    this.#isedit = dto.isedit;
  }

  get purchaseQuoteId() {
    return this.#purchaseQuoteId;
  }

  toModel() {
    return {
      purchaseQuoteId: this.#purchaseQuoteId,
      traceId: this.#traceId,
      companyId: this.#companyId,
      warehouseId: this.#warehouseId,
      purchaseQuoteCode: this.#purchaseQuoteCode,
      purchaseQuoteCodeTemp: this.#purchaseQuoteCodeTemp,
      purchaseQuoteDate: this.#purchaseQuoteDate,
      supplierId: this.#supplierId,
      currencyId: this.#currencyId,
      currencyRate: this.#currencyRate,
      paymentTermId: this.#paymentTermId,
      shipping: this.#shipping,
      shippingDate: this.#shippingDate,
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
      totalAdvpay: this.#totalAdvpay,
      taxPersen: this.#taxPersen,
      taxAmount: this.#taxAmount,
      isvat: this.#isvat,
      total: this.#total,
      totalPayFinish: this.#totalPayFinish,
      confirmtime: this.#confirmtime,
      confirmby: this.#confirmby,
      confirmtimeF: this.#confirmtimeF,
      confirmbyF: this.#confirmbyF,
      excelUrl: this.#excelUrl,
      isedit: this.#isedit,
      ...super.toModel()
    };
  }
}

class PurchaseQuoteAdvanceDto extends StandardDto {
  #purchaseQuoteAdvpayId;
  #purchaseQuoteId;
  #purchaseAdvpayId;
  #purchaseAdvpayCode;
  #totalDp;
  #totalUsed;
  #remaining;
  #isadv;

  constructor(dto) {
    super(dto);
    this.#purchaseQuoteAdvpayId = dto.purchase_advpay_dt_id;
    this.#purchaseQuoteId = dto.purchase_quote_id;
    this.#purchaseAdvpayId = dto.purchase_advpay_id;
    this.#purchaseAdvpayCode = dto.purchase_advpay_code;
    this.#totalDp = dto.total_dp;
    this.#totalUsed = dto.total_used;
    this.#remaining = dto.remaining;
    this.#isadv = dto.isadv;
  }
  get purchaseQuoteAdvpayId() {
    return this.#purchaseQuoteAdvpayId;
  }
  toModel() {
    return {
      purchaseQuoteAdvpayId: this.#purchaseQuoteAdvpayId,
      purchaseQuoteId: this.#purchaseQuoteId,
      purchaseAdvpayId: this.#purchaseAdvpayId,
      purchaseAdvpayCode: this.#purchaseAdvpayCode,
      totalDp: this.#totalDp,
      totalUsed: this.#totalUsed,
      remaining: this.#remaining,
      isadv: this.#isadv,
      ...super.toModel()
    };
  }
}

class PurchaseQuoteDtDto extends StandardDto {
  #purchaseQuoteDtId;
  #purchaseQuoteId;
  #itemId;
  #itemCode;
  #itemName;
  #qty;
  #qtyApprove;
  #qtyPo;
  #staus;
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
    this.#purchaseQuoteDtId = dto.purchase_quote_dt_id;
    this.#purchaseQuoteId = dto.purchase_quote_id;
    this.#itemId = dto.item_id;
    this.#itemCode = dto.item_code;
    this.#itemName = dto.item_name;
    this.#qty = dto.qty;
    this.#qtyApprove = dto.qty_approve;
    this.#qtyPo = dto.qty_po;
    this.#staus = dto.status;
    this.#price = dto.price;
    this.#price2 = dto.price2;
    this.#priceAvg = dto.price_avg;
    this.#discPersen = dto.disc_persen;
    this.#discAmount = dto.disc_amount;
    this.#disc3 = dto.disc3;
    this.#taxPersen = dto.tac_persen;
    this.#taxAmount = dto.tac_amount;
    this.#total = dto.total;
  }
  get purchaseQuoteDtId() {
    return this.#purchaseQuoteDtId;
  }
  toModel() {
    return {
      purchaseQuoteDtId: this.#purchaseQuoteDtId,
      purchaseQuoteId: this.#purchaseQuoteId,
      itemId: this.#itemId,
      itemCode: this.#itemCode,
      itemName: this.#itemName,
      qty: this.#qty,
      qtyApprove: this.#qtyApprove,
      qtyPo: this.#qtyPo,
      staus: this.#staus,
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

class PurchaseQuoteImgDto extends StandardDto {
  #purchaseQuoteImgId;
  #purchaseQuoteId;
  #imgName;
  #urlImg;

  constructor(dto) {
    super(dto);
    this.#purchaseQuoteImgId = dto.purchase_quote_img_id;
    this.#purchaseQuoteId = dto.purchase_quote_id;
    this.#imgName = dto.img_name;
    this.#urlImg = dto.url_img;
  }
  get purchaseQuoteImgId() {
    return this.#purchaseQuoteImgId;
  }
  toModel() {
    return {
      purchaseQuoteImgId: this.#purchaseQuoteImgId,
      purchaseQuoteId: this.#purchaseQuoteId,
      imgName: this.#imgName,
      urlImg: this.#urlImg,
      ...super.toModel()
    };
  }
}

class PurchaseQuoteItemDtDto extends StandardDto {
  #purchaseQuoteItemDtId;
  #purchaseQuoteDtId;
  #purchaseQuoteId;
  #itemId;
  #expDay;
  #expMonth;
  #expYear;
  #qty;
  #qtyO;

  constructor(dto) {
    super(dto);
    this.#purchaseQuoteItemDtId = dto.purchase_quote_item_dt_id;
    this.#purchaseQuoteDtId = dto.purchase_quote_dt_id;
    this.#purchaseQuoteId = dto.purchase_quote_id;
    this.#itemId = dto.item_id;
    this.#expDay = dto.exp_day;
    this.#expMonth = dto.exp_month;
    this.#expYear = dto.exp_year;
    this.#qty = dto.qty;
    this.#qtyO = dto.qty_o;
  }
  get purchaseQuoteItemDtId() {
    return this.#purchaseQuoteItemDtId;
  }
  toModel() {
    return {
      purchaseQuoteItemDtId: this.#purchaseQuoteItemDtId,
      purchaseQuoteDtId: this.#purchaseQuoteDtId,
      purchaseQuoteId: this.#purchaseQuoteId,
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

class PurchaseQuoteRejectDto extends StandardDto {
  #purchaseQuoteRejectId;
  #purchaseQuoteId;
  #note;
  #userId;

  constructor(dto) {
    super(dto);
    this.#purchaseQuoteRejectId = dto.purchase_quote_reject_id;
    this.#purchaseQuoteId = dto.purchase_quote_id;
    this.#note = dto.note;
    this.#userId = dto.userId;
  }
  get purchaseQuoteRejectId() {
    return this.#purchaseQuoteRejectId;
  }
  toModel() {
    return {
      purchaseQuoteRejectId: this.#purchaseQuoteRejectId,
      purchaseQuoteId: this.#purchaseQuoteId,
      note: this.#note,
      userId: this.#userId,
      ...super.toModel()
    };
  }
}

class PurchaseQuoteRequestDto extends StandardDto {
  #purchaseQuoteRequestId;
  #purchaseQuoteId;
  #note;
  #statusRequest;
  #userId;

  constructor(dto) {
    super(dto);
    this.purchaseQuoteRequestId = dto.purchase_quote_request_id;
    this.purchaseQuoteId = dto.purchase_quote_id;
    this.#note = dto.note;
    this.#userId = dto.user_id;
    this.#statusRequest = dto.status_request;
  }
  get purchaseQuoteRequestId() {
    return this.purchaseQuoteRequestId;
  }
  toModel() {
    return {
      purchaseQuoteRequestId: this.#purchaseQuoteRequestId,
      purchaseQuoteId: this.#purchaseQuoteId,
      note: this.#note,
      userId: this.#userId,
      statusRequest: this.#statusRequest,
      ...super.toModel()
    };
  }
}
export {
  PurchaseQuoteDto,
  PurchaseQuoteAdvanceDto,
  PurchaseQuoteDtDto,
  PurchaseQuoteImgDto,
  PurchaseQuoteItemDtDto,
  PurchaseQuoteRejectDto,
  PurchaseQuoteRequestDto
};
