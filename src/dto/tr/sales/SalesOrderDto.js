import ObjectUtil from '../../../util/ObjectUtil.js';
import StandardDto from '../../StandardDto.js';

class SalesOrderDto extends StandardDto {
  #salesOrderId;
  #salesOrderCode;
  #salesOrderCodeTemp;
  #salesOrderDate;
  #salesQuoteId;
  #salesQuoteCode;
  #salesDepositId;
  #salesDepositTotal;
  #salesDepositCode;
  #salesAdvpayId;
  #salesAdvpayTotal;
  #salesAdvpayCode;
  #traceId;
  #customerId;
  #creditLimit;
  #paymentTermId;
  #customerDeliveryId;
  #customerDeliveryAddr;
  #countryId;
  #provinceId;
  #cityId;
  #districtId;
  #subdistrictId;
  #sendDate;
  #warehouseId;
  #salesmanId;
  #shippingId;
  #shipping;
  #shippingDate;
  #dueDate;
  #customerBillingId;
  #accNumber;
  #accName;
  #isvat;
  #note;
  #status;
  #statusNext;
  #isFinish;
  #totalQty;
  #subtotal;
  #totalCashback;
  #discPersen;
  #discAmount;
  #discPersen2;
  #discAmount2;
  #discPersen3;
  #discAmount3;
  #taxPersen;
  #taxAmount;
  #taxPersenCoretax;
  #taxPersenOri;
  #total;
  #totalInv;
  #dpAmount;
  #advAmount;
  #totalPayFinish;
  #confirmtime;
  #confirmby;
  #isedit;
  #noInQuote;
  #confirmtimeF;
  #confirmbyF;

  constructor(dto) {
    super(dto);
    this.#salesOrderId = dto.sales_order_id;
    this.#salesOrderCode = dto.sales_order_code;
    this.#salesOrderCodeTemp = dto.sales_order_code_temp;
    this.#salesOrderDate = dto.sales_order_date;
    this.#salesQuoteId = ObjectUtil.defaultEmptyString(dto.sales_quote_id);
    this.#salesQuoteCode = dto.sales_quote_code;
    this.#salesDepositId = ObjectUtil.defaultEmptyString(dto.sales_deposit_id);
    this.#salesDepositTotal = dto.sales_deposit_total;
    this.#salesDepositCode = dto.sales_deposit_code;
    this.#salesAdvpayId = ObjectUtil.defaultEmptyString(dto.sales_advpay_id);
    this.#salesAdvpayTotal = dto.sales_advpay_total;
    this.#salesAdvpayCode = dto.sales_advpay_code;
    this.#traceId = dto.trace_id;
    this.#customerId = ObjectUtil.defaultEmptyString(dto.customer_id);
    this.#creditLimit = dto.credit_limit;
    this.#paymentTermId = ObjectUtil.defaultEmptyString(dto.payment_term_id);
    this.#customerDeliveryId = ObjectUtil.defaultEmptyString(dto.customer_delivery_id);
    this.#customerDeliveryAddr = dto.customer_delivery_addr;
    this.#countryId = dto.country_id;
    this.#provinceId = dto.province_id;
    this.#cityId = dto.city_id;
    this.#districtId = dto.district_id;
    this.#subdistrictId = dto.subdistrict_id;
    this.#sendDate = ObjectUtil.defaultEmptyString(dto.send_date);
    this.#warehouseId = ObjectUtil.defaultEmptyString(dto.warehouse_id);
    this.#salesmanId = ObjectUtil.defaultEmptyString(dto.salesman_id);
    this.#shippingId = ObjectUtil.defaultEmptyString(dto.shipping_id);
    this.#shipping = dto.shipping;
    this.#shippingDate = ObjectUtil.defaultEmptyString(dto.shipping_date);
    this.#dueDate = ObjectUtil.defaultEmptyString(dto.due_date);
    this.#customerBillingId = ObjectUtil.defaultEmptyString(dto.customer_billing_id);
    this.#accNumber = dto.acc_number;
    this.#accName = dto.acc_name;
    this.#isvat = dto.isvat;
    this.#note = dto.note;
    this.#status = dto.status;
    this.#statusNext = dto.status_next;
    this.#isFinish = dto.is_finish;
    this.#totalQty = dto.total_qty;
    this.#subtotal = dto.subtotal;
    this.#totalCashback = dto.total_cashback;
    this.#discPersen = dto.disc_persen;
    this.#discAmount = dto.disc_amount;
    this.#discPersen2 = dto.disc_persen2;
    this.#discAmount2 = dto.disc_amount2;
    this.#discPersen3 = dto.disc_persen3;
    this.#discAmount3 = dto.disc_amount3;
    this.#taxPersen = dto.tax_persen;
    this.#taxAmount = dto.tax_amount;
    this.#taxPersenCoretax = dto.tax_persen_coretax;
    this.#taxPersenOri = dto.tax_persen_ori;
    this.#total = dto.total;
    this.#totalInv = dto.total_inv;
    this.#dpAmount = dto.dp_amount;
    this.#advAmount = dto.adv_amount;
    this.#totalPayFinish = dto.total_pay_finish;
    this.#confirmtime = dto.confirmtime;
    this.#confirmby = dto.confirmby;
    this.#isedit = dto.isedit;
    this.#noInQuote = dto.noInQuote;
    this.#confirmtimeF = dto.confirmtime_f;
    this.#confirmbyF = dto.confirmby_f;
  }

  get salesOrderId() {
    return this.#salesOrderId;
  }

  toModel() {
    return {
      salesOrderId: this.#salesOrderId,
      salesOrderCode: this.#salesOrderCode,
      salesOrderCodeTemp: this.#salesOrderCodeTemp,
      salesOrderDate: this.#salesOrderDate,
      salesQuoteId: this.#salesQuoteId,
      salesQuoteCode: this.#salesQuoteCode,
      salesDepositId: this.#salesDepositId,
      salesDepositTotal: this.#salesDepositTotal,
      salesDepositCode: this.#salesDepositCode,
      salesAdvpayId: this.#salesAdvpayId,
      salesAdvpayTotal: this.#salesAdvpayTotal,
      salesAdvpayCode: this.#salesAdvpayCode,
      traceId: this.#traceId,
      customerId: this.#customerId,
      creditLimit: this.#creditLimit,
      paymentTermId: this.#paymentTermId,
      customerDeliveryId: this.#customerDeliveryId,
      customerDeliveryAddr: this.#customerDeliveryAddr,
      countryId: this.#countryId,
      provinceId: this.#provinceId,
      cityId: this.#cityId,
      districtId: this.#districtId,
      subdistrictId: this.#subdistrictId,
      sendDate: this.#sendDate,
      warehouseId: this.#warehouseId,
      salesmanId: this.#salesmanId,
      shippingId: this.#shippingId,
      shipping: this.#shipping,
      shippingDate: this.#shippingDate,
      dueDate: this.#dueDate,
      customerBillingId: this.#customerBillingId,
      accNumber: this.#accNumber,
      accName: this.#accName,
      isvat: this.#isvat,
      note: this.#note,
      status: this.#status,
      statusNext: this.#statusNext,
      isFinish: this.#isFinish,
      totalQty: this.#totalQty,
      subtotal: this.#subtotal,
      totalCashback: this.#totalCashback,
      discPersen: this.#discPersen,
      discAmount: this.#discAmount,
      discPersen2: this.#discPersen2,
      discAmount2: this.#discAmount2,
      discPersen3: this.#discPersen3,
      discAmount3: this.#discAmount3,
      taxPersen: this.#taxPersen,
      taxAmount: this.#taxAmount,
      taxPersenCoretax: this.#taxPersenCoretax,
      taxPersenOri: this.#taxPersenOri,
      total: this.#total,
      totalInv: this.#totalInv,
      dpAmount: this.#dpAmount,
      advAmount: this.#advAmount,
      totalPayFinish: this.#totalPayFinish,
      confirmtime: this.#confirmtime,
      confirmby: this.#confirmby,
      isedit: this.#isedit,
      noInQuote: this.#noInQuote,
      confirmtimeF: this.#confirmtimeF,
      confirmbyF: this.#confirmbyF,
      ...super.toModel()
    };
  }
}

class SalesOrderAdvanceDto extends StandardDto {
  #salesOrderAdvpayId;
  #salesOrderId;
  #salesAdvpayId;
  #salesAdvpayCode;
  #totalDp;
  #totalUsed;
  #remaining;
  #isadv;

  constructor(dto) {
    super(dto);
    this.#salesOrderAdvpayId = dto.sales_order_advpay_id;
    this.#salesOrderId = dto.sales_order_id;
    this.#salesAdvpayId = dto.sales_advpay_id;
    this.#salesAdvpayCode = dto.sales_advpay_code;
    this.#totalDp = dto.total_dp;
    this.#totalUsed = dto.total_used;
    this.#remaining = dto.remaining;
    this.#isadv = dto.isadv;
  }

  get salesOrderAdvpayId() {
    return this.#salesOrderAdvpayId;
  }

  toModel() {
    return {
      salesOrderAdvpayId: this.#salesOrderAdvpayId,
      salesOrderId: this.#salesOrderId,
      salesAdvpayId: this.#salesAdvpayId,
      salesAdvpayCode: this.#salesAdvpayCode,
      totalDp: this.#totalDp,
      totalUsed: this.#totalUsed,
      remaining: this.#remaining,
      isadv: this.#isadv,
      ...super.toModel()
    };
  }
}

class SalesOrderDepositDto extends StandardDto {
  #salesOrderDepositId;
  #salesOrderId;
  #salesDepositId;
  #salesDepositCode;
  #deposit;
  #totalUsed;
  #remaining;

  constructor(dto) {
    super(dto);
    this.#salesOrderDepositId = dto.sales_order_deposit_id;
    this.#salesOrderId = dto.sales_order_id;
    this.#salesDepositId = dto.sales_deposit_id;
    this.#salesDepositCode = dto.sales_deposit_code;
    this.#deposit = dto.deposit;
    this.#totalUsed = dto.total_used;
    this.#remaining = dto.remaining;
  }

  get salesOrderDepositId() {
    return this.#salesOrderDepositId;
  }

  toModel() {
    return {
      salesOrderDepositId: this.#salesOrderDepositId,
      salesOrderId: this.#salesOrderId,
      salesDepositId: this.#salesDepositId,
      salesDepositCode: this.#salesDepositCode,
      deposit: this.#deposit,
      totalUsed: this.#totalUsed,
      remaining: this.#remaining,
      ...super.toModel()
    };
  }
}

class SalesOrderDtDto extends StandardDto {
  #salesOrderDtId;
  #salesOrderId;
  #salesQuoteId;
  #salesQuoteDtId;
  #quoteCode;
  #itemId;
  #itemCode;
  #itemName;
  #qty;
  #qtyApprove;
  #qtyInput;
  #qtyFoc;
  #qtyReturn;
  #unit;
  #qtySq;
  #qtySdn;
  #status;
  #statusNext;
  #price;
  #price2;
  #unitPrice;
  #discPersen;
  #discAmount;
  #discPersen2;
  #changeDisc2;
  #discAmount2;
  #disc3;
  #taxPersen;
  #taxAmount;
  #cashback;
  #total;
  #approveby;
  #approvetime;

  constructor(dto) {
    super(dto);
    this.#salesOrderDtId = dto.sales_order_dt_id;
    this.#salesOrderId = dto.sales_order_id;
    this.#salesQuoteId = dto.sales_quote_id;
    this.#salesQuoteDtId = dto.sales_quote_dt_id;
    this.#quoteCode = dto.quote_code;
    this.#itemId = dto.item_id;
    this.#itemCode = dto.item_code;
    this.#itemName = dto.item_name;
    this.#qty = dto.qty;
    this.#qtyApprove = dto.qty_approve;
    this.#qtyInput = dto.qty_input;
    this.#qtyFoc = dto.qty_foc;
    this.#qtyReturn = dto.qty_return;
    this.#unit = dto.unit;
    this.#qtySq = dto.qty_sq;
    this.#qtySdn = dto.qty_sdn;
    this.#status = dto.status;
    this.#statusNext = dto.status_next;
    this.#price = dto.price;
    this.#price2 = dto.price2;
    this.#unitPrice = dto.unit_price;
    this.#discPersen = dto.disc_persen;
    this.#discAmount = dto.disc_amount;
    this.#discPersen2 = dto.disc_persen2;
    this.#discAmount2 = dto.disc_amount2;
    this.#changeDisc2 = dto.change_disc2;
    this.#disc3 = dto.disc3;
    this.#taxPersen = dto.tax_persen;
    this.#taxAmount = dto.tax_amount;
    this.#cashback = dto.cashback;
    this.#total = dto.total;
    this.#approveby = dto.approveby;
    this.#approvetime = dto.approvetime;
  }

  get salesOrderDtId() {
    return this.#salesOrderDtId;
  }

  toModel() {
    return {
      salesOrderDtId: this.#salesOrderDtId,
      salesOrderId: this.#salesOrderId,
      salesQuoteId: this.#salesQuoteId,
      salesQuoteDtId: this.#salesQuoteDtId,
      quoteCode: this.#quoteCode,
      itemId: this.#itemId,
      itemCode: this.#itemCode,
      itemName: this.#itemName,
      qty: this.#qty,
      qtyApprove: this.#qtyApprove,
      qtyInput: this.#qtyInput,
      qtyFoc: this.#qtyFoc,
      qtyReturn: this.#qtyReturn,
      unit: this.#unit,
      qtySq: this.#qtySq,
      qtySdn: this.#qtySdn,
      status: this.#status,
      statusNext: this.#statusNext,
      price: this.#price,
      price2: this.#price2,
      unitPrice: this.#unitPrice,
      discPersen: this.#discPersen,
      discAmount: this.#discAmount,
      discPersen2: this.#discPersen2,
      discAmount2: this.#discAmount2,
      changeDisc2: this.#changeDisc2,
      disc3: this.#disc3,
      taxPersen: this.#taxPersen,
      taxAmount: this.#taxAmount,
      cashback: this.#cashback,
      total: this.#total,
      approveby: this.#approveby,
      approvetime: this.#approvetime,
      ...super.toModel()
    };
  }
}

class SalesOrderItemDtDto extends StandardDto {
  #salesOrderItemDtId;
  #salesOrderDtId;
  #salesOrderId;
  #itemStockDtId;
  #salesQuoteItemDtId;
  #itemId;
  #expDay;
  #expMonth;
  #expYear;
  #qty;
  #qtyInput;
  #qtyFoc;
  #qtyDn;
  #qtyReturn;

  constructor(dto) {
    super(dto);
    this.#salesOrderItemDtId = dto.sales_order_item_dt_id;
    this.#salesOrderDtId = dto.sales_order_dt_id;
    this.#salesOrderId = dto.sales_order_id;
    this.#itemStockDtId = dto.item_stock_dt_id;
    this.#salesQuoteItemDtId = dto.sales_quote_item_dt_id;
    this.#itemId = dto.item_id;
    this.#expDay = dto.exp_day;
    this.#expMonth = dto.exp_month;
    this.#expYear = dto.exp_year;
    this.#qty = dto.qty;
    this.#qtyInput = dto.qty_input;
    this.#qtyFoc = dto.qty_foc;
    this.#qtyDn = dto.qty_dn;
    this.#qtyReturn = dto.qty_return;
  }

  get salesOrderItemDtId() {
    return this.#salesOrderItemDtId;
  }

  toModel() {
    return {
      salesOrderItemDtId: this.#salesOrderItemDtId,
      salesOrderDtId: this.#salesOrderDtId,
      salesOrderId: this.#salesOrderId,
      itemStockDtId: this.#itemStockDtId,
      salesQuoteItemDtId: this.#salesQuoteItemDtId,
      itemId: this.#itemId,
      expDay: this.#expDay,
      expMonth: this.#expMonth,
      expYear: this.#expYear,
      qty: this.#qty,
      qtyInput: this.#qtyInput,
      qtyFoc: this.#qtyFoc,
      qtyDn: this.#qtyDn,
      qtyReturn: this.#qtyReturn,
      ...super.toModel()
    };
  }
}

class SalesOrderRejectDto extends StandardDto {
  #salesOrderRejectid;
  #salesOrderId;
  #note;
  #userId;

  constructor(dto) {
    super(dto);
    this.#salesOrderRejectid = dto.sales_order_reject_id;
    this.#salesOrderId = dto.sales_order_id;
    this.#note = dto.note;
    this.#userId = dto.userId;
  }

  get salesOrderRejectid() {
    return this.#salesOrderRejectid;
  }

  toModel() {
    return {
      salesOrderRejectid: this.#salesOrderRejectid,
      salesOrderId: this.#salesOrderId,
      note: this.#note,
      userId: this.#userId,
      ...super.toModel()
    };
  }
}

class SalesOrderRequestDto extends StandardDto {
  #salesDeliveryNoteRequestId;
  #salesOrderId;
  #note;
  #statusRequest;
  #userId;

  constructor(dto) {
    super(dto);
    this.#salesDeliveryNoteRequestId = dto.sales_order_request_id;
    this.#salesOrderId = dto.sales_order_id;
    this.#note = dto.note;
    this.#userId = dto.userId;
    this.#statusRequest = dto.status_request;
  }

  get salesDeliveryNoteRequestId() {
    return this.#salesDeliveryNoteRequestId;
  }

  toModel() {
    return {
      salesDeliveryNoteRequestId: this.#salesDeliveryNoteRequestId,
      salesOrderId: this.#salesOrderId,
      note: this.#note,
      userId: this.#userId,
      statusRequest: this.#statusRequest,
      ...super.toModel()
    };
  }
}

export { SalesOrderDto, SalesOrderAdvanceDto, SalesOrderDepositDto, SalesOrderDtDto, SalesOrderItemDtDto, SalesOrderRejectDto, SalesOrderRequestDto };
