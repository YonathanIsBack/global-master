import ObjectUtil from '../../../util/ObjectUtil.js';
import StandardDto from '../../StandardDto.js';

class PurchaseInvoiceDto extends StandardDto {
  #purchaseInvId;
  #purchaseInvCode;
  #purchaseInvCodeTemp;
  #purchaseInvDate;
  #purchaseOrderId;
  #purchaseOrderCode;
  #purchaseReceiveId;
  #purchaseReceiveCode;
  #traceId;
  #importAdvpayId;
  #purchaseAdvpayCode;
  #warehouseId;
  #paymentTermId;
  #dueDate;
  #supplierId;
  #suppInvNo;
  #suppInvDate;
  #suppInvTotal;
  #isvat;
  #vatNo;
  #vatDate;
  #currencyId;
  #currencyRate;
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
  #shipping;
  #shippingDate;
  #shippingPrice;
  #handlingPrice;
  #purchaseAdvpayId;
  #paymentCode;
  #dpAmount;
  #sisaPay;
  #total;
  #totalCreditNote;
  #totalAdvpay;
  #totalAdvpayPayment;
  #totalPay;
  #totalReturn;
  #pphPersen;
  #pphAmount;
  #status;
  #statusNext;
  #isFinish;
  #note;
  #cretime;
  #creby;
  #modtime;
  #modby;
  #confirmtime;
  #confirmby;
  #isedit;
  #type;
  #confirmtimeF;
  #confirmbyF;

  constructor(dto) {
    super(dto);
    this.#purchaseInvId = dto.purchase_inv_id;
    this.#purchaseInvCode = dto.purchase_inv_code;
    this.#purchaseInvCodeTemp = dto.purchase_inv_code_temp;
    this.#purchaseInvDate = dto.purchase_inv_date;
    this.#purchaseOrderId = dto.purchase_order_id;
    this.#purchaseOrderCode = dto.purchase_order_code;
    this.#purchaseReceiveId = dto.purchase_receive_id;
    this.#purchaseReceiveCode = dto.purchase_receive_code;
    this.#traceId = dto.trace_id;
    this.#importAdvpayId = dto.import_advpay_id;
    this.#purchaseAdvpayCode = dto.purchase_advpay_code;
    this.#warehouseId = dto.warehouse_id;
    this.#paymentTermId = dto.payment_term_id;
    this.#dueDate = dto.due_date;
    this.#supplierId = dto.supplier_id;
    this.#suppInvNo = dto.supp_inv_no;
    this.#suppInvDate = dto.supp_inv_date;
    this.#suppInvTotal = dto.supp_inv_total;
    this.#isvat = dto.isvat;
    this.#vatNo = dto.vat_no;
    this.#vatDate = ObjectUtil.defaultEmptyString(dto.vat_date);
    this.#currencyId = dto.currency_id;
    this.#currencyRate = dto.currency_rate;
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
    this.#shipping = dto.shipping;
    this.#shippingDate = dto.shipping_date;
    this.#shippingPrice = dto.shipping_price;
    this.#handlingPrice = dto.handling_price;
    this.#purchaseAdvpayId = dto.purchase_advpay_id;
    this.#paymentCode = dto.payment_code;
    this.#dpAmount = dto.dp_amount;
    this.#sisaPay = dto.sisa_pay;
    this.#total = dto.total;
    this.#totalCreditNote = dto.total_credit_note;
    this.#totalAdvpay = dto.total_advpay;
    this.#totalAdvpayPayment = dto.total_advpay_payment;
    this.#totalPay = dto.total_pay;
    this.#totalReturn = dto.total_return;
    this.#pphPersen = dto.pph_persen;
    this.#pphAmount = dto.pph_amount;
    this.#status = dto.status;
    this.#statusNext = dto.status_next;
    this.#isFinish = dto.is_finish;
    this.#note = dto.note;
    this.#cretime = dto.cretime;
    this.#creby = dto.creby;
    this.#modtime = dto.modtime;
    this.#modby = dto.modby;
    this.#confirmtime = dto.confirmtime;
    this.#confirmby = dto.confirmby;
    this.#isedit = dto.isedit;
    this.#type = dto.type;
    this.#confirmtimeF = dto.confirmtime_f;
    this.#confirmbyF = dto.confirmby_f;
  }

  get purchaseInvId() {
    return this.#purchaseInvId;
  }

  toModel() {
    return {
      purchaseInvId: this.#purchaseInvId,
      purchaseInvCode: this.#purchaseInvCode,
      purchaseInvCodeTemp: this.#purchaseInvCodeTemp,
      purchaseInvDate: this.#purchaseInvDate,
      purchaseOrderId: this.#purchaseOrderId,
      purchaseOrderCode: this.#purchaseOrderCode,
      purchaseReceiveId: this.#purchaseReceiveId,
      purchaseReceiveCode: this.#purchaseReceiveCode,
      traceId: this.#traceId,
      importAdvpayId: this.#importAdvpayId,
      purchaseAdvpayCode: this.#purchaseAdvpayCode,
      warehouseId: this.#warehouseId,
      paymentTermId: this.#paymentTermId,
      dueDate: this.#dueDate,
      supplierId: this.#supplierId,
      suppInvNo: this.#suppInvNo,
      suppInvDate: this.#suppInvDate,
      suppInvTotal: this.#suppInvTotal,
      isvat: this.#isvat,
      vatNo: this.#vatNo,
      vatDate: this.#vatDate,
      currencyId: this.#currencyId,
      currencyRate: this.#currencyRate,
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
      shipping: this.#shipping,
      shippingDate: this.#shippingDate,
      shippingPrice: this.#shippingPrice,
      handlingPrice: this.#handlingPrice,
      purchaseAdvpayId: this.#purchaseAdvpayId,
      paymentCode: this.#paymentCode,
      dpAmount: this.#dpAmount,
      sisaPay: this.#sisaPay,
      total: this.#total,
      totalCreditNote: this.#totalCreditNote,
      totalAdvpay: this.#totalAdvpay,
      totalAdvpayPayment: this.#totalAdvpayPayment,
      totalPay: this.#totalPay,
      totalReturn: this.#totalReturn,
      pphPersen: this.#pphPersen,
      pphAmount: this.#pphAmount,
      status: this.#status,
      statusNext: this.#statusNext,
      isFinish: this.#isFinish,
      note: this.#note,
      cretime: this.#cretime,
      creby: this.#creby,
      modtime: this.#modtime,
      modby: this.#modby,
      confirmtime: this.#confirmtime,
      confirmby: this.#confirmby,
      isedit: this.#isedit,
      type: this.#type,
      confirmtimeF: this.#confirmtimeF,
      confirmbyF: this.#confirmbyF,
      ...super.toModel()
    };
  }
}

class PurchaseInvoiceAdvanceDto extends StandardDto {
  #purchaseInvAdvpayId;
  #purchaseInvId;
  #purchaseAdvpayId;
  #purchaseAdvpayCode;
  #totalDp;
  #totalUsed;
  #remaining;
  #isorder;
  #type;
  #cretime;
  #creby;
  #modtime;
  #modby;

  constructor(dto) {
    super(dto);
    this.#purchaseInvAdvpayId = dto.purchase_advpay_dt_id;
    this.#purchaseInvId = dto.purchase_inv_id;
    this.#purchaseAdvpayId = dto.purchase_advpay_id;
    this.#purchaseAdvpayCode = dto.purchase_advpay_code;
    this.#totalDp = dto.total_dp;
    this.#totalUsed = dto.total_used;
    this.#remaining = dto.remaining;
    this.#isorder = dto.isorder;
    this.#type = dto.type;
    this.#cretime = dto.cretime;
    this.#creby = dto.creby;
    this.#modtime = dto.modtime;
    this.#modby = dto.modby;
  }
  get purchaseInvAdvpayId() {
    return this.#purchaseInvAdvpayId;
  }
  toModel() {
    return {
      purchaseInvAdvpayId: this.#purchaseInvAdvpayId,
      purchaseAdvpayId: this.#purchaseAdvpayId,
      purchaseInvId: this.#purchaseInvId,
      purchaseAdvpayId: this.#purchaseAdvpayId,
      purchaseAdvpayCode: this.#purchaseAdvpayCode,
      totalDp: this.#totalDp,
      totalUsed: this.#totalUsed,
      remaining: this.#remaining,
      isorder: this.#isorder,
      type: this.#type,
      cretime: this.#cretime,
      creby: this.#creby,
      modtime: this.#modtime,
      modby: this.#modby,
      ...super.toModel()
    };
  }
}

class PurchaseInvoiceDtDto extends StandardDto {
  #purchaseInvDtId;
  #purchaseInvId;
  #purchaseReceiveId;
  #purchaseReceiveDtId;
  #purchaseReceiveCode;
  #itemId;
  #itemCode;
  #itemName;
  #qty;
  #qtyOrder;
  #qtyReceive;
  #qtyIp;
  #qtyPp;
  #qtyPr;
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
    this.#purchaseInvDtId = dto.purchase_inv_dt_id;
    this.#purchaseInvId = dto.purchase_inv_id;
    this.#purchaseReceiveId = dto.purchase_receive_id;
    this.#purchaseReceiveDtId = dto.purchase_receive_dt_id;
    this.#purchaseReceiveCode = dto.purchase_receive_code;
    this.#itemId = dto.item_id;
    this.#itemCode = dto.item_code;
    this.#itemName = dto.item_name;
    this.#qty = dto.qty;
    this.#qtyOrder = dto.qty_order;
    this.#qtyReceive = dto.qty_receive;
    this.#qtyIp = dto.qty_ip;
    this.#qtyPp = dto.qty_pp;
    this.#qtyPr = dto.qty_pr;
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
  get purchaseInvDtId() {
    return this.#purchaseInvDtId;
  }
  toModel() {
    return {
      purchaseInvDtId: this.#purchaseInvDtId,
      purchaseInvDtId: this.#purchaseInvDtId,
      purchaseInvId: this.#purchaseInvId,
      purchaseReceiveId: this.#purchaseReceiveId,
      purchaseReceiveDtId: this.#purchaseReceiveDtId,
      purchaseReceiveCode: this.#purchaseReceiveCode,
      itemId: this.#itemId,
      itemCode: this.#itemCode,
      itemName: this.#itemName,
      qty: this.#qty,
      qtyOrder: this.#qtyOrder,
      qtyReceive: this.#qtyReceive,
      qtyIp: this.#qtyIp,
      qtyPp: this.#qtyPp,
      qtyPr: this.#qtyPr,
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

class PurchaseInvoiceImgDto extends StandardDto {
  #purchaseInvImgId;
  #purchaseInvId;
  #imgName;
  #urlImg;
  #cretime;
  #creby;
  #modtime;
  #modby;

  constructor(dto) {
    super(dto);
    this.#purchaseInvImgId = dto.purchase_advanced_payment_reject_id;
    this.#purchaseInvId = dto.purchase_advanced_payment_id;
    this.#imgName = dto.img_name;
    this.#urlImg = dto.url_img;
    this.#cretime = dto.cretime;
    this.#creby = dto.creby;
    this.#modtime = dto.modtime;
    this.#modby = dto.modby;
  }
  get purchaseInvImgId() {
    return this.#purchaseInvImgId;
  }
  toModel() {
    return {
      purchaseAdvancedPaymentRejectId: this.#purchaseInvImgId,
      purchaseInvId: this.#purchaseInvId,
      imgName: this.#imgName,
      urlImg: this.#urlImg,
      cretime: this.#cretime,
      creby: this.#creby,
      modtime: this.#modtime,
      modby: this.#modby,
      ...super.toModel()
    };
  }
}

class PurchaseInvoiceItemDtDto extends StandardDto {
  #purchaseInvItemDtId;
  #purchaseInvDtId;
  #purchaseInvId;
  #itemStockDtId;
  #purchaseReceiveItemDtId;
  #itemId;
  #expDay;
  #expMonth;
  #expYear;
  #qty;
  #qtyR;

  constructor(dto) {
    super(dto);
    this.#purchaseInvItemDtId = dto.purchase_inv_item_dt_id;
    this.#purchaseInvDtId = dto.purchase_inv_dt_id;
    this.#purchaseInvId = dto.purchase_inv_id;
    this.#itemStockDtId = dto.item_stock_dt_id;
    this.#purchaseReceiveItemDtId = dto.purchase_receive_item_dt_id;
    this.#itemId = dto.item_id;
    this.#expDay = dto.exp_day;
    this.#expMonth = dto.exp_month;
    this.#expYear = dto.exp_year;
    this.#qty = dto.qty;
    this.#qtyR = dto.qty_r;
  }
  get purchaseInvItemDtId() {
    return this.#purchaseInvItemDtId;
  }
  toModel() {
    return {
      purchaseInvItemDtId: this.#purchaseInvItemDtId,
      purchaseInvDtId: this.#purchaseInvDtId,
      purchaseInvId: this.#purchaseInvId,
      itemStockDtId: this.#itemStockDtId,
      purchaseReceiveItemDtId: this.#purchaseReceiveItemDtId,
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

class PurchaseInvoicePaymentDto extends StandardDto {
  #purchaseInvPaymentId;
  #purchaseInvId;
  #purchaseAdvpayId;
  #paymentCode;
  #dpAmount;
  #dpUsed;

  constructor(dto) {
    super(dto);
    this.#purchaseInvPaymentId = dto.purchase_inv_payment_id;
    this.#purchaseInvId = dto.purchase_inv_id;
    this.#purchaseAdvpayId = dto.purchase_advpay_id;
    this.#paymentCode = dto.payment_code;
    this.#dpAmount = dto.dp_amount;
    this.#dpUsed = dto.dp_used;
  }
  get purchaseInvPaymentId() {
    return this.purchaseInvPaymentId;
  }
  toModel() {
    return {
      purchaseInvPaymentId: this.#purchaseInvPaymentId,
      purchaseInvId: this.#purchaseInvId,
      purchaseAdvpayId: this.#purchaseAdvpayId,
      paymentCode: this.#paymentCode,
      dpAmount: this.#dpAmount,
      dpUsed: this.#dpUsed,
      ...super.toModel()
    };
  }
}

class PurchaseInvoiceRejectDto extends StandardDto {
  #purchaseInvRejectId;
  #purchaseInvId;
  #note;
  #userId;
  #cretime;
  #creby;

  constructor(dto) {
    super(dto);
    this.#purchaseInvRejectId = dto.purchase_inv_reject_id;
    this.#purchaseInvId = dto.purchase_inv_id;
    this.#note = dto.note;
    this.#userId = dto.userId;
    this.#cretime = dto.cretime;
    this.#creby = dto.creby;
  }
  get purchaseInvRejectId() {
    return this.#purchaseInvRejectId;
  }
  toModel() {
    return {
      purchaseInvRejectId: this.#purchaseInvRejectId,
      purchaseInvId: this.#purchaseInvId,
      note: this.#note,
      userId: this.#userId,
      cretime: this.#cretime,
      creby: this.#creby,
      ...super.toModel()
    };
  }
}

class PurchaseInvoiceRequestDto extends StandardDto {
  #purchaseInvRequestId;
  #purchaseInvId;
  #note;
  #statusRequest;
  #userId;
  #cretime;
  #creby;

  constructor(dto) {
    super(dto);
    this.purchaseInvRequestId = dto.purchase_inv_request_id;
    this.purchaseInvId = dto.purchase_inv_id;
    this.#note = dto.note;
    this.#userId = dto.user_id;
    this.#statusRequest = dto.status_request;
    this.#cretime = dto.cretime;
    this.#creby = dto.creby;
  }
  get purchaseInvRequestId() {
    return this.purchaseInvRequestId;
  }
  toModel() {
    return {
      purchaseInvRequestId: this.#purchaseInvRequestId,
      purchaseInvId: this.#purchaseInvId,
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
  PurchaseInvoiceDto,
  PurchaseInvoiceAdvanceDto,
  PurchaseInvoiceDtDto,
  PurchaseInvoiceImgDto,
  PurchaseInvoiceItemDtDto,
  PurchaseInvoicePaymentDto,
  PurchaseInvoiceRejectDto,
  PurchaseInvoiceRequestDto
};
