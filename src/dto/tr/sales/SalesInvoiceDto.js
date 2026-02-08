import ObjectUtil from '../../../util/ObjectUtil.js';
import StandardDto from '../../StandardDto.js';

class SalesInvoiceDto extends StandardDto {
  #salesInvId;
  #salesInvCode;
  #salesInvCodeTemp;
  #noFakturPajakId;
  #noFakturType;
  #salesInvNoFaktur;
  #salesInvDate;
  #salesDepositId;
  #salesDepositCode;
  #salesDepositTotal;
  #salesAdvpayId;
  #salesAdvpayCode;
  #salesAdvpayTotal;
  #salesOrderId;
  #salesOrderCode;
  #salesDeliveryFixedId;
  #salesDeliveryFixedCode;
  #traceId;
  #taxNumber;
  #taxDate;
  #warehouseId;
  #dueDate;
  #customerId;
  #customerDeliveryId;
  #customerDelivery;
  #countryId;
  #provinceId;
  #cityId;
  #districtId;
  #subdistrictId;
  #creditLimit;
  #paymentTermId;
  #salesmanId;
  #salesDeposit;
  #customerInvNo;
  #customerInvDate;
  #customerInTotal;
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
  #taxPersenCoretax;
  #taxPersenOri;
  #shipping;
  #shippingPrice;
  #handlingPrice;
  #paymentCode;
  #dpAmount;
  #dpAmountPayment;
  #advAmount;
  #advAmountPayment;
  #dpReturnAmount;
  #sisaPay;
  #total;
  #grandTotal;
  #totalCreditNote;
  #totalPay;
  #totalReturn;
  #pphPersen;
  #pphAmount;
  #status;
  #statusNext;
  #isFinish;
  #note;
  #confirmtime;
  #confirmby;
  #confirmtimeF;
  #confirmbyF;
  #exportedTax;

  constructor(dto) {
    super(dto);
    this.#salesInvId = dto.sales_inv_id;
    this.#salesInvCode = dto.sales_inv_code;
    this.#salesInvCodeTemp = dto.sales_inv_code_temp;
    this.#noFakturPajakId = dto.no_faktur_pajak_id;
    this.#noFakturType = dto.no_faktur_type;
    this.#salesInvNoFaktur = dto.sales_inv_no_faktur;
    this.#salesInvDate = dto.sales_inv_date;
    this.#salesDepositId = dto.sales_deposit_id;
    this.#salesDepositTotal = dto.sales_deposit_total;
    this.#salesAdvpayId = dto.sales_advpay_id;
    this.#salesDepositCode = dto.sales_deposit_code;
    this.#salesAdvpayCode = dto.sales_advpay_code;
    this.#salesAdvpayTotal = dto.sales_advpay_total;
    this.#salesOrderId = dto.sales_order_id;
    this.#salesOrderCode = dto.sales_order_code;
    this.#salesDeliveryFixedId = dto.sales_delivery_fixed_id;
    this.#salesDeliveryFixedCode = dto.sales_delivery_fixed_code;
    this.#traceId = dto.trace_id;
    this.#taxNumber = dto.tax_number;
    this.#taxDate = dto.tax_date;
    this.#warehouseId = dto.warehouse_id;
    this.#dueDate = dto.due_date;
    this.#customerId = dto.customer_id;
    this.#customerDeliveryId = dto.customer_delivery_id;
    this.#customerDelivery = dto.customer_delivery;
    this.#countryId = dto.country_id;
    this.#provinceId = dto.province_id;
    this.#cityId = dto.city_id;
    this.#districtId = dto.district_id;
    this.#subdistrictId = dto.subdistrict_id;
    this.#creditLimit = dto.credit_limit;
    this.#paymentTermId = dto.payment_term_id;
    this.#salesmanId = dto.salesman_id;
    this.#salesDeposit = dto.sales_deposit;
    this.#customerInvNo = dto.customer_inv_no;
    this.#customerInvDate = dto.customer_inv_date;
    this.#customerInTotal = dto.customer_inv_total;
    this.#isvat = dto.isvat;
    this.#vatNo = dto.vat_no;
    this.#vatDate = dto.vat_date;
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
    this.#taxPersenCoretax = dto.tax_persen_coretax;
    this.#taxPersenOri = dto.tax_persen_ori;
    this.#shipping = dto.shipping;
    this.#shippingPrice = dto.shipping_price;
    this.#handlingPrice = dto.handling_price;
    this.#paymentCode = dto.payment_code;
    this.#dpAmount = dto.dp_amount;
    this.#dpAmountPayment = dto.dp_amount_payment;
    this.#advAmount = dto.adv_amount;
    this.#advAmountPayment = dto.adv_amount_payment;
    this.#dpReturnAmount = dto.dp_return_amount;
    this.#sisaPay = dto.sisa_pay;
    this.#total = dto.total;
    this.#grandTotal = dto.grand_total;
    this.#totalCreditNote = dto.total_credit_note;
    this.#totalPay = dto.total_pay;
    this.#totalReturn = dto.total_return;
    this.#pphPersen = dto.pph_persen;
    this.#pphAmount = dto.pph_amount;
    this.#status = dto.status;
    this.#statusNext = dto.status_next;
    this.#isFinish = dto.is_finish;
    this.#note = dto.note;
    this.#confirmtime = dto.confirmtime;
    this.#confirmby = dto.confirmby;
    this.#confirmtimeF = dto.confirmtime_f;
    this.#confirmbyF = dto.confirmby_f;
    this.#exportedTax = dto.exported_tax;
  }

  get salesInvId() {
    return this.#salesInvId;
  }

  toModel() {
    return {
      salesInvId: this.#salesInvId,
      salesInvCode: this.#salesInvCode,
      salesInvCodeTemp: this.#salesInvCodeTemp,
      noFakturPajakId: this.#noFakturPajakId,
      noFakturType: this.#noFakturType,
      salesInvNoFaktur: this.#salesInvNoFaktur,
      salesInvDate: this.#salesInvDate,
      salesDepositId: this.#salesDepositId,
      salesDepositCode: this.#salesDepositCode,
      salesDepositTotal: this.#salesDepositTotal,
      salesAdvpayId: this.#salesAdvpayId,
      salesAdvpayCode: this.#salesAdvpayCode,
      salesAdvpayTotal: this.#salesAdvpayTotal,
      salesOrderId: this.#salesOrderId,
      salesOrderCode: this.#salesOrderCode,
      salesDeliveryFixedId: this.#salesDeliveryFixedId,
      salesDeliveryFixedCode: this.#salesDeliveryFixedCode,
      traceId: this.#traceId,
      taxNumber: this.#taxNumber,
      taxDate: this.#taxDate,
      warehouseId: this.#warehouseId,
      dueDate: this.#dueDate,
      customerId: this.#customerId,
      customerDeliveryId: this.#customerDeliveryId,
      customerDelivery: this.#customerDelivery,
      countryId: this.#countryId,
      provinceId: this.#provinceId,
      cityId: this.#cityId,
      districtId: this.#districtId,
      subdistrictId: this.#subdistrictId,
      creditLimit: this.#creditLimit,
      paymentTermId: this.#paymentTermId,
      salesmanId: this.#salesmanId,
      salesDeposit: this.#salesDeposit,
      customerInvNo: this.#customerInvNo,
      customerInvDate: this.#customerInvDate,
      customerInTotal: this.#customerInTotal,
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
      taxPersenCoretax: this.#taxPersenCoretax,
      taxPersenOri: this.#taxPersenOri,
      shipping: this.#shipping,
      shippingPrice: this.#shippingPrice,
      handlingPrice: this.#handlingPrice,
      paymentCode: this.#paymentCode,
      dpAmount: this.#dpAmount,
      dpAmountPayment: this.#dpAmountPayment,
      advAmount: this.#advAmount,
      advAmountPayment: this.#advAmountPayment,
      dpReturnAmount: this.#dpReturnAmount,
      sisaPay: this.#sisaPay,
      total: this.#total,
      grandTotal: this.#grandTotal,
      totalCreditNote: this.#totalCreditNote,
      totalPay: this.#totalPay,
      totalReturn: this.#totalReturn,
      pphPersen: this.#pphPersen,
      pphAmount: this.#pphAmount,
      status: this.#status,
      statusNext: this.#statusNext,
      isFinish: this.#isFinish,
      note: this.#note,
      confirmtime: this.#confirmtime,
      confirmby: this.#confirmby,
      confirmtimeF: this.#confirmtimeF,
      confirmbyF: this.#confirmbyF,
      exportedTax: this.#exportedTax,
      ...super.toModel()
    };
  }
}

class SalesInvoiceAdvanceDto extends StandardDto {
  #salesInvAdvpayId;
  #salesInvId;
  #salesAdvpayId;
  #salesAdvpayCode;
  #totalDp;
  #totalUsed;
  #remaining;
  #isorder;

  constructor(dto) {
    super(dto);
    this.#salesInvAdvpayId = dto.sales_inv_advpay_id;
    this.#salesInvId = dto.sales_inv_id;
    this.#salesAdvpayId = dto.sales_advpay_id;
    this.#salesAdvpayCode = dto.sales_advpay_code;
    this.#totalDp = dto.total_dp;
    this.#totalUsed = dto.total_used;
    this.#remaining = dto.remaining;
    this.#isorder = dto.isorder;
  }

  get salesInvAdvpayId() {
    return this.#salesInvAdvpayId;
  }

  toModel() {
    return {
      salesInvAdvpayId: this.#salesInvAdvpayId,
      salesInvId: this.#salesInvId,
      salesAdvpayId: this.#salesAdvpayId,
      salesAdvpayCode: this.#salesAdvpayCode,
      totalDp: this.#totalDp,
      totalUsed: this.#totalUsed,
      remaining: this.#remaining,
      isorder: this.#isorder,
      ...super.toModel()
    };
  }
}

class SalesInvoiceDepositDto extends StandardDto {
  #salesInvDepositId;
  #salesInvId;
  #salesDepositId;
  #salesDepositCode;
  #deposit;
  #total;
  #isorder;

  constructor(dto) {
    super(dto);
    this.#salesInvDepositId = dto.sales_inv_deposit_id;
    this.#salesInvId = dto.sales_inv_id;
    this.#salesDepositId = dto.sales_deposit_id;
    this.#salesDepositCode = dto.sales_deposit_code;
    this.#deposit = dto.deposit;
    this.#total = dto.total;
    this.#isorder = dto.isorder;
  }

  get salesInvDepositId() {
    return this.#salesInvDepositId;
  }

  toModel() {
    return {
      salesInvDepositId: this.#salesInvDepositId,
      salesInvId: this.#salesInvId,
      salesDepositId: this.#salesDepositId,
      salesDepositCode: this.#salesDepositCode,
      deposit: this.#deposit,
      total: this.#total,
      isorder: this.#isorder,
      ...super.toModel()
    };
  }
}

class SalesInvoiceDtDto extends StandardDto {
  #salesInvDtId;
  #salesInvId;
  #salesDeliveryFixedId;
  #salesDeliveryFixedDtId;
  #salesDeliveryFixed_code;
  #itemId;
  #itemCode;
  #itemName;
  #qty;
  #unit;
  #qtyOrder;
  #qtyDeliveryFixed;
  #qtySp;
  #qtySr;
  #price;
  #unitPrice;
  #price2;
  #priceAvg;
  #priceFifo;
  #priceLifo;
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
    this.#salesInvDtId = dto.sales_inv_dt_id;
    this.#salesInvId = dto.sales_inv_id;
    this.#salesDeliveryFixedId = dto.sales_delivery_fixed_id;
    this.#salesDeliveryFixedDtId = dto.sales_delivery_fixed_dt_id;
    this.#salesDeliveryFixed_code = dto.sales_delivery_fixed_code;
    this.#itemId = dto.item_id;
    this.#itemCode = dto.item_code;
    this.#itemName = dto.item_name;
    this.#qty = dto.qty;
    this.#unit = dto.unit;
    this.#qtyOrder = dto.qty_order;
    this.#qtyDeliveryFixed = dto.qty_delivery_fixed;
    this.#qtySp = dto.qty_sp;
    this.#qtySr = dto.qty_sr;
    this.#price = dto.price;
    this.#unitPrice = dto.unit_price;
    this.#price2 = dto.price2;
    this.#priceAvg = dto.price_avg;
    this.#priceFifo = dto.price_fifo;
    this.#priceLifo = dto.price_lifo;
    this.#discPersen = dto.disc_persen;
    this.#discAmount = dto.disc_amount;
    this.#discPersen2 = dto.disc_persen2;
    this.#discAmount2 = dto.disc_amount2;
    this.#disc3 = dto.disc3;
    this.#taxPersen = dto.tax_persen;
    this.#taxAmount = dto.tax_amount;
    this.#total = dto.total;
  }

  get salesInvDtId() {
    return this.#salesInvDtId;
  }

  toModel() {
    return {
      salesInvDtId: this.#salesInvDtId,
      salesInvId: this.#salesInvId,
      salesDeliveryFixedId: this.#salesDeliveryFixedId,
      salesDeliveryFixedDtId: this.#salesDeliveryFixedDtId,
      salesDeliveryFixed_code: this.#salesDeliveryFixed_code,
      itemId: this.#itemId,
      itemCode: this.#itemCode,
      itemName: this.#itemName,
      qty: this.#qty,
      unit: this.#unit,
      qtyOrder: this.#qtyOrder,
      qtyDeliveryFixed: this.#qtyDeliveryFixed,
      qtySp: this.#qtySp,
      qtySr: this.#qtySr,
      price: this.#price,
      unitPrice: this.#unitPrice,
      price2: this.#price2,
      priceAvg: this.#priceAvg,
      priceFifo: this.#priceFifo,
      priceLifo: this.#priceLifo,
      discPersen: this.#discPersen,
      discAmount: this.#discAmount,
      discPersen2: this.#discPersen2,
      discAmount2: this.#discAmount2,
      disc3: this.#disc3,
      taxPersen: this.#taxPersen,
      taxAmount: this.#taxAmount,
      total: this.#total,
      ...super.toModel()
    };
  }
}

class SalesInvoiceExportLogDto extends StandardDto {
  #exportLogId;
  #salesInvId;
  #username;

  constructor(dto) {
    super(dto);
    this.#exportLogId = dto.export_log_id;
    this.#salesInvId = dto.sales_inv_id;
    this.#username = dto.username;
  }

  get exportLogId() {
    return this.#exportLogId;
  }

  toModel() {
    return {
      exportLogId: this.#exportLogId,
      salesInvId: this.#salesInvId,
      username: this.#username,
      ...super.toModel()
    };
  }
}

class SalesInvoiceItemDtDto extends StandardDto {
  #salesInvItemDtId;
  #salesInvDtId;
  #salesInvId;
  #itemStockDtId;
  #salesDeliveryFixedItemDtId;
  #itemId;
  #expDay;
  #expMonth;
  #expYear;
  #qty;
  #qtyR;

  constructor(dto) {
    super(dto);
    this.#salesInvItemDtId = dto.sales_inv_item_dt_id;
    this.#salesInvDtId = dto.sales_inv_dt_id;
    this.#salesInvId = dto.sales_inv_id;
    this.#itemStockDtId = dto.item_stock_dt_id;
    this.#salesDeliveryFixedItemDtId = dto.sales_delivery_fixed_item_dt_id;
    this.#itemId = ObjectUtil.defaultEmptyString(dto.item_id);
    this.#expDay = dto.exp_day;
    this.#expMonth = dto.exp_month;
    this.#expYear = dto.exp_year;
    this.#qty = dto.qty;
    this.#qtyR = dto.qty_r;
  }

  get salesInvItemDtId() {
    return this.#salesInvItemDtId;
  }

  toModel() {
    return {
      salesInvItemDtId: this.#salesInvItemDtId,
      salesInvDtId: this.#salesInvDtId,
      salesInvId: this.#salesInvId,
      itemStockDtId: this.#itemStockDtId,
      salesDeliveryFixedItemDtId: this.#salesDeliveryFixedItemDtId,
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

class SalesInvoiceRejectDto extends StandardDto {
  #salesInvRejectId;
  #salesInvId;
  #note;
  #userId;

  constructor(dto) {
    super(dto);
    this.#salesInvRejectId = dto.sales_inv_reject_id;
    this.#salesInvId = dto.sales_inv_id;
    this.#note = dto.note;
    this.#userId = dto.userId;
  }

  get salesInvRejectId() {
    return this.#salesInvRejectId;
  }

  toModel() {
    return {
      salesInvRejectId: this.#salesInvRejectId,
      salesInvId: this.#salesInvId,
      note: this.#note,
      userId: this.#userId,
      ...super.toModel()
    };
  }
}

class SalesInvoiceReturnDto extends StandardDto {
  #salesDeliveryNoteRequestId;
  #salesInvId;
  #note;
  #statusRequest;
  #userId;

  constructor(dto) {
    super(dto);
    this.#salesDeliveryNoteRequestId = dto.sales_inv_request_id;
    this.#salesInvId = dto.sales_inv_id;
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
      salesInvId: this.#salesInvId,
      note: this.#note,
      userId: this.#userId,
      statusRequest: this.#statusRequest,
      ...super.toModel()
    };
  }
}

export {
  SalesInvoiceDto,
  SalesInvoiceAdvanceDto,
  SalesInvoiceDepositDto,
  SalesInvoiceDtDto,
  SalesInvoiceExportLogDto,
  SalesInvoiceItemDtDto,
  SalesInvoiceRejectDto,
  SalesInvoiceReturnDto
};
