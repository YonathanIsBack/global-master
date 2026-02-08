import ObjectUtil from '../../../util/ObjectUtil.js';
import StandardDto from '../../StandardDto.js';

class ExportSalesOrderDto extends StandardDto {
  #exportSalesOrderId;
  #exportSalesOrderCode;
  #exportSalesOrderCodeTemp;
  #exportSalesOrderDate;
  #exportSalesQuoteId;
  #exportSalesQuoteCode;
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
  #postalCode;
  #sendDate;
  #currencyId;
  #currencyRate;
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
  #total;
  #totalInv;
  #totalPayFinish;
  #advAmount;
  #confirmtime;
  #confirmby;
  #isedit;
  #noInQuote;
  #confirmtimeF;
  #confirmbyF;

  constructor(dto) {
    super(dto);
    this.#exportSalesOrderId = dto.export_sales_order_id;
    this.#exportSalesOrderCode = dto.export_sales_order_code;
    this.#exportSalesOrderCodeTemp = dto.export_sales_order_code_temp;
    this.#exportSalesOrderDate = ObjectUtil.defaultEmptyString(dto.export_sales_order_date);
    this.#exportSalesQuoteId = ObjectUtil.defaultEmptyString(dto.export_sales_quote_id);
    this.#exportSalesQuoteCode = dto.export_sales_quote_code;
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
    this.#postalCode = dto.postal_code;
    this.#sendDate = dto.send_date;
    this.#currencyId = ObjectUtil.defaultEmptyString(dto.currency_id);
    this.#currencyRate = dto.currency_rate;
    this.#warehouseId = ObjectUtil.defaultEmptyString(dto.warehouse_id);
    this.#salesmanId = ObjectUtil.defaultEmptyString(dto.salesman_id);
    this.#shippingId = ObjectUtil.defaultEmptyString(dto.shipping_id);
    this.#shipping = dto.shipping;
    this.#shippingDate = ObjectUtil.defaultEmptyString(dto.shipping_date);
    this.#dueDate = ObjectUtil.defaultEmptyString(dto.duedate);
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
    this.#total = dto.total;
    this.#totalInv = dto.total_inv;
    this.#totalPayFinish = dto.total_pay_finish;
    this.#advAmount = dto.adv_amount;
    this.#confirmtime = dto.confirmtime;
    this.#confirmby = dto.confirmby;
    this.#isedit = dto.isedit;
    this.#noInQuote = dto.noInQuote;
    this.#confirmtimeF = dto.confirmtime_f;
    this.#confirmbyF = dto.confirmby_f;
  }
  get exportSalesOrderId() {
    return this.#exportSalesOrderId;
  }
  toModel() {
    return {
      exportSalesOrderId: this.#exportSalesOrderId,
      exportSalesOrderCode: this.#exportSalesOrderCode,
      exportSalesOrderCodeTemp: this.#exportSalesOrderCodeTemp,
      exportSalesOrderDate: this.#exportSalesOrderDate,
      exportSalesQuoteId: this.#exportSalesQuoteId,
      exportSalesQuoteCode: this.#exportSalesQuoteCode,
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
      postalCode: this.#postalCode,
      sendDate: this.#sendDate,
      currencyId: this.#currencyId,
      currencyRate: this.#currencyRate,
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
      total: this.#total,
      totalInv: this.#totalInv,
      totalPayFinish: this.#totalPayFinish,
      advAmount: this.#advAmount,
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

class ExportSalesOrderAdvanceDto extends StandardDto {
  #exportSalesOrderAdvpayId;
  #exportSalesOrderId;
  #exportSalesAdvpayId;
  #exportSalesAdvpayCode;
  #totalDp;
  #totalUsed;
  #remaining;
  #isadv;

  constructor(dto) {
    super(dto);
    this.#exportSalesOrderAdvpayId = dto.export_sales_inv_advpay_id;
    this.#exportSalesOrderId = dto.export_sales_order_id;
    this.#exportSalesAdvpayId = dto.export_sales_advpay_id;
    this.#exportSalesAdvpayCode = dto.export_sales_advpay_code;
    this.#totalDp = dto.total_dp;
    this.#totalUsed = dto.total_used;
    this.#remaining = dto.remaining;
    this.#isadv = dto.isadv;
  }
  get exportSalesOrderAdvpayId() {
    return this.#exportSalesOrderAdvpayId;
  }
  toModel() {
    return {
      exportSalesOrderAdvpayId: this.#exportSalesOrderAdvpayId,
      exportSalesOrderId: this.#exportSalesOrderId,
      exportSalesAdvpayId: this.#exportSalesAdvpayId,
      exportSalesAdvpayCode: this.#exportSalesAdvpayCode,
      totalDp: this.#totalDp,
      totalUsed: this.#totalUsed,
      remaining: this.#remaining,
      isadv: this.#isadv,
      ...super.toModel()
    };
  }
}

class ExportSalesOrderBc16Dto extends StandardDto {
  #exportSalesOrderBc16Id;
  #exportSalesOrderId;
  #exportSalesOrderDtId;
  #exportSalesQuoteBc16Id;
  #bc16Id;
  #bc16;
  #itemId;
  #qty;
  #qtyUsed;

  constructor(dto) {
    super(dto);
    this.#exportSalesOrderBc16Id = dto.export_sales_inv_bc16_id;
    this.#exportSalesOrderId = dto.export_sales_inv_id;
    this.#exportSalesOrderDtId = dto.export_sales_inv_dt_id;
    this.#exportSalesQuoteBc16Id = dto.export_sales_packing_list_bc16_id;
    this.#bc16Id = dto.bc_16_id;
    this.#bc16 = dto.bc16;
    this.#itemId = dto.item_id;
    this.#qty = dto.qty;
    this.#qtyUsed = dto.qty_used;
  }
  get exportSalesOrderBc16Id() {
    return this.#exportSalesOrderBc16Id;
  }
  toModel() {
    return {
      exportSalesOrderBc16Id: this.#exportSalesOrderBc16Id,
      exportSalesOrderId: this.#exportSalesOrderId,
      exportSalesOrderDtId: this.#exportSalesOrderDtId,
      exportSalesQuoteBc16Id: this.#exportSalesQuoteBc16Id,
      bc16Id: this.#bc16Id,
      bc16: this.#bc16,
      itemId: this.#itemId,
      qty: this.#qty,
      qtyUsed: this.#qtyUsed,
      ...super.toModel()
    };
  }
}

class ExportSalesOrderDtDto extends StandardDto {
  #exportSalesOrderDtId;
  #exportSalesOrderId;
  #exportSalesQuoteId;
  #exportSalesQuoteDtId;
  #quoteCode;
  #itemId;
  #itemCode;
  #itemName;
  #qty;
  #unit;
  #qtySp;
  #qtySr;
  #price;
  #price2;
  #unitPrice;
  #discPersen;
  #discAmount;
  #discPersen2;
  #discAmount2;
  #disc3;
  #taxPersen;
  #taxAmount;
  #cashback;
  #total;

  constructor(dto) {
    super(dto);
    this.#exportSalesOrderDtId = dto.export_sales_order_dt_id;
    this.#exportSalesOrderId = dto.export_sales_order_id;
    this.#exportSalesQuoteId = dto.export_sales_quote_id;
    this.#exportSalesQuoteDtId = dto.export_sales_quote_dt_id;
    this.#quoteCode = dto.quote_code;
    this.#itemId = dto.item_id;
    this.#itemCode = dto.item_code;
    this.#itemName = dto.item_name;
    this.#qty = dto.qty;
    this.#unit = dto.unit;
    this.#qtySp = dto.qty_sq;
    this.#qtySr = dto.qty_pl;
    this.#price = dto.price;
    this.#price2 = dto.price2;
    this.#unitPrice = dto.unit_price;
    this.#discPersen = dto.disc_persen;
    this.#discAmount = dto.disc_amount;
    this.#discPersen2 = dto.disc_persen2;
    this.#discAmount2 = dto.disc_amount2;
    this.#disc3 = dto.disc3;
    this.#taxPersen = dto.tax_persen;
    this.#taxAmount = dto.tax_amount;
    this.#cashback = dto.cashback;
    this.#total = dto.total;
  }

  get exportSalesOrderDtId() {
    return this.#exportSalesOrderDtId;
  }

  toModel() {
    return {
      exportSalesOrderDtId: this.#exportSalesOrderDtId,
      exportSalesOrderId: this.#exportSalesOrderId,
      exportSalesQuoteId: this.#exportSalesQuoteId,
      exportSalesQuoteDtId: this.#exportSalesQuoteDtId,
      quoteCode: this.#quoteCode,
      itemId: this.#itemId,
      itemCode: this.#itemCode,
      itemName: this.#itemName,
      qty: this.#qty,
      unit: this.#unit,
      qtySp: this.#qtySp,
      qtySr: this.#qtySr,
      price: this.#price,
      price2: this.#price2,
      unitPrice: this.#unitPrice,
      discPersen: this.#discPersen,
      discAmount: this.#discAmount,
      discPersen2: this.#discPersen2,
      discAmount2: this.#discAmount2,
      disc3: this.#disc3,
      taxPersen: this.#taxPersen,
      taxAmount: this.#taxAmount,
      cashback: this.#cashback,
      total: this.#total,
      ...super.toModel()
    };
  }
}

class ExportSalesOrderItemDtDto extends StandardDto {
  #exportSalesOrderItemDtId;
  #exportSalesOrderDtId;
  #exportSalesOrderId;
  #exportSalesOrderBc16Id;
  #itemStockDtId;
  #exportSalesQuoteItemDtId;
  #itemId;
  #expDay;
  #expMonth;
  #expYear;
  #qty;
  #qtyPl;

  constructor(dto) {
    super(dto);
    this.#exportSalesOrderItemDtId = dto.export_sales_inv_dt_id;
    this.#exportSalesOrderDtId = dto.export_sales_order_dt_id;
    this.#exportSalesOrderId = dto.export_sales_order_id;
    this.#exportSalesOrderBc16Id = dto.export_sales_order_bc16_id;
    this.#itemStockDtId = dto.item_stock_dt_id;
    this.#exportSalesQuoteItemDtId = dto.export_sales_packing_list_item_dt_id;
    this.#itemId = dto.item_id;
    this.#expDay = dto.exp_day;
    this.#expMonth = dto.exp_month;
    this.#expYear = dto.exp_year;
    this.#qty = dto.qty;
    this.#qtyPl = dto.qty_pl;
  }

  get exportSalesOrderItemDtId() {
    return this.#exportSalesOrderItemDtId;
  }

  toModel() {
    return {
      exportSalesOrderItemDtId: this.#exportSalesOrderItemDtId,
      exportSalesOrderDtId: this.#exportSalesOrderDtId,
      exportSalesOrderId: this.#exportSalesOrderId,
      exportSalesOrderBc16Id: this.#exportSalesOrderBc16Id,
      itemStockDtId: this.#itemStockDtId,
      exportSalesQuoteItemDtId: this.#exportSalesQuoteItemDtId,
      itemId: this.#itemId,
      expDay: this.#expDay,
      expMonth: this.#expMonth,
      expYear: this.#expYear,
      qty: this.#qty,
      qtyPl: this.#qtyPl,
      ...super.toModel()
    };
  }
}

class ExportSalesOrderRejectDto extends StandardDto {
  #exportSalesOrderRejectId;
  #exportSalesOrderId;
  #note;
  #userId;

  constructor(dto) {
    super(dto);
    this.#exportSalesOrderRejectId = dto.export_sales_order_reject_id;
    this.#exportSalesOrderId = dto.export_sales_order_id;
    this.#note = dto.note;
    this.#userId = dto.user_id;
  }

  get exportSalesOrderRejectId() {
    return this.#exportSalesOrderRejectId;
  }

  toModel() {
    return {
      exportSalesOrderRejectId: this.#exportSalesOrderRejectId,
      exportSalesOrderId: this.#exportSalesOrderId,
      note: this.#note,
      userId: this.#userId,
      ...super.toModel()
    };
  }
}

class ExportSalesOrderRequestDto extends StandardDto {
  #exportSalesOrderRequestId;
  #exportSalesOrderId;
  #note;
  #userId;
  #statusRequest;

  constructor(dto) {
    super(dto);
    this.#exportSalesOrderRequestId = dto.export_sales_order_request_id;
    this.#exportSalesOrderId = dto.export_sales_order_id;
    this.#note = dto.note;
    this.#userId = dto.user_id;
    this.#statusRequest = dto.status_request;
  }

  get exportSalesOrderRequestId() {
    return this.#exportSalesOrderRequestId;
  }

  toModel() {
    return {
      exportSalesOrderRequestId: this.#exportSalesOrderRequestId,
      exportSalesOrderId: this.#exportSalesOrderId,
      note: this.#note,
      userId: this.#userId,
      statusRequest: this.#statusRequest,
      ...super.toModel()
    };
  }
}

export {
  ExportSalesOrderDto,
  ExportSalesOrderAdvanceDto,
  ExportSalesOrderBc16Dto,
  ExportSalesOrderDtDto,
  ExportSalesOrderItemDtDto,
  ExportSalesOrderRejectDto,
  ExportSalesOrderRequestDto
};
