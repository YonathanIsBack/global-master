import ObjectUtil from '../../../util/ObjectUtil.js';
import StandardDto from '../../StandardDto.js';

class ExportSalesInvDto extends StandardDto {
  #exportSalesInvId;
  #exportSalesInvCode;
  #exportSalesInvCodeTemp;
  #exportSalesInvDate;
  #exportSalesDepositId;
  #exportSalesDepositCode;
  #exportSalesAdvpayId;
  #exportSalesAdvpayCode;
  #exportSalesOrderId;
  #exportSalesOrderCode;
  #exportSalesPackingListId;
  #exportSalesPackingListCode;
  #companyBankId;
  #bankAccountNumber;
  #bankAccountName;
  #currencyRateCompany;
  #currencyIdCompany;
  #traceId;
  #containerNo;
  #sealNo;
  #betNo;
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
  #postalCode;
  #sendDate;
  #creditLimit;
  #paymentTermId;
  #salesmanId;
  #salesDeposit;
  #customerInvNo;
  #customerInvDate;
  #isvat;
  #vatNo;
  #vatDate;
  #currencyId;
  #currencyRate;
  #totalQty;
  #subtotal;
  #subtotalT;
  #discPersen;
  #discAmount;
  #discPersen2;
  #discAmount2;
  #discPersen3;
  #discAmount3;
  #taxPersen;
  #taxAmount;
  #shipping;
  #shippingPrice;
  #handlingPrice;
  #paymentCode;
  #dpAmount;
  #advAmount;
  #advAmountT;
  #advAmountS;
  #sisaPay;
  #total;
  #totalT;
  #totalCreditCode;
  #totalPay;
  #totalPayS;
  #totalPayT;
  #totalReturn;
  #pphPersen;
  #pphAmount;
  #status;
  #statusNext;
  #isFinish;
  #note;
  #confirmtime;
  #confirmby;
  #isedit;
  #type;
  #confirmtimeF;
  #confirmbyF;

  constructor(dto) {
    super(dto);
    this.#exportSalesInvId = dto.export_sales_inv_id;
    this.#exportSalesInvCode = dto.export_sales_inv_code;
    this.#exportSalesInvCodeTemp = dto.export_sales_inv_code_temp;
    this.#exportSalesInvDate = ObjectUtil.defaultEmptyString(dto.export_sales_inv_date);
    this.#exportSalesDepositId = ObjectUtil.defaultEmptyString(dto.export_sales_deposit_id);
    this.#exportSalesDepositCode = dto.export_sales_deposit_code;
    this.#exportSalesAdvpayId = ObjectUtil.defaultEmptyString(dto.export_sales_advpay_id);
    this.#exportSalesAdvpayCode = dto.export_sales_advpay_code;
    this.#exportSalesOrderId = ObjectUtil.defaultEmptyString(dto.export_sales_order_id);
    this.#exportSalesOrderCode = dto.export_sales_order_code;
    this.#exportSalesPackingListId = ObjectUtil.defaultEmptyString(dto.export_sales_packing_list_id);
    this.#exportSalesPackingListCode = dto.export_sales_packing_list_code;
    this.#companyBankId = dto.company_bank_id;
    this.#bankAccountNumber = dto.bank_account_number;
    this.#bankAccountName = dto.bank_account_name;
    this.#currencyRateCompany = dto.currency_rate_company;
    this.#currencyIdCompany = dto.currency_id_company;
    this.#traceId = dto.trace_id;
    this.#containerNo = dto.container_no;
    this.#sealNo = dto.seal_no;
    this.#betNo = dto.bet_no;
    this.#taxNumber = dto.tax_number;
    this.#taxDate = dto.tax_date;
    this.#warehouseId = ObjectUtil.defaultEmptyString(dto.warehouse_id);
    this.#dueDate = dto.due_date;
    this.#customerId = ObjectUtil.defaultEmptyString(dto.customer_id);
    this.#customerDeliveryId = ObjectUtil.defaultEmptyString(dto.customer_delivery_id);
    this.#customerDelivery = dto.customer_delivery;
    this.#countryId = dto.country_id;
    this.#provinceId = dto.province_id;
    this.#cityId = dto.city_id;
    this.#districtId = dto.district_id;
    this.#subdistrictId = dto.subdistrict_id;
    this.#postalCode = dto.postal_code;
    this.#sendDate = dto.send_date;
    this.#creditLimit = dto.credit_limit;
    this.#paymentTermId = ObjectUtil.defaultEmptyString(dto.payment_term_id);
    this.#salesmanId = ObjectUtil.defaultEmptyString(dto.salesman_id);
    this.#salesDeposit = dto.sales_deposit;
    this.#customerInvNo = dto.customer_inv_no;
    this.#customerInvDate = ObjectUtil.defaultEmptyString(dto.customer_inv_date);
    this.#isvat = dto.isvat;
    this.#vatNo = dto.vat_no;
    this.#vatDate = ObjectUtil.defaultEmptyString(dto.vat_date);
    this.#currencyId = ObjectUtil.defaultEmptyString(dto.currency_id);
    this.#currencyRate = dto.currency_rate;
    this.#totalQty = dto.total_qty;
    this.#subtotal = dto.subtotal;
    this.#subtotalT = dto.subtotal_t;
    this.#discPersen = dto.disc_persen;
    this.#discAmount = dto.disc_amount;
    this.#discPersen2 = dto.disc_persen2;
    this.#discAmount2 = dto.disc_amount2;
    this.#discPersen3 = dto.disc_persen3;
    this.#discAmount3 = dto.disc_amount3;
    this.#taxPersen = dto.tax_persen;
    this.#taxAmount = dto.tax_amount;
    this.#shipping = dto.shipping;
    this.#shippingPrice = dto.shipping_price;
    this.#handlingPrice = dto.handling_price;
    this.#paymentCode = dto.payment_code;
    this.#dpAmount = dto.dp_amount;
    this.#advAmount = dto.adv_amount;
    this.#advAmountT = dto.adv_amount_t;
    this.#advAmountS = dto.adv_amount_s;
    this.#sisaPay = dto.sisa_pay;
    this.#total = dto.total;
    this.#totalT = dto.totalT;
    this.#totalCreditCode = dto.total_credit_note;
    this.#totalPay = dto.total_pay;
    this.#totalPayS = dto.total_pay_s;
    this.#totalPayT = dto.total_pay_t;
    this.#totalReturn = dto.total_return;
    this.#pphPersen = dto.pph_persen;
    this.#pphAmount = dto.pph_amount;
    this.#status = dto.status;
    this.#statusNext = dto.status_next;
    this.#isFinish = dto.is_finish;
    this.#note = dto.note;
    this.#confirmtime = dto.confirmtime;
    this.#confirmby = dto.confirmby;
    this.#isedit = dto.isedit;
    this.#type = dto.type;
    this.#confirmtimeF = dto.confirmtime_f;
    this.#confirmbyF = dto.confirmby_f;
  }
  get exportSalesInvId() {
    return this.#exportSalesInvId;
  }
  toModel() {
    return {
      exportSalesInvId: this.#exportSalesInvId,
      exportSalesInvCode: this.#exportSalesInvCode,
      exportSalesInvCodeTemp: this.#exportSalesInvCodeTemp,
      exportSalesInvDate: this.#exportSalesInvDate,
      exportSalesDepositId: this.#exportSalesDepositId,
      exportSalesDepositCode: this.#exportSalesDepositCode,
      exportSalesAdvpayId: this.#exportSalesAdvpayId,
      exportSalesAdvpayCode: this.#exportSalesAdvpayCode,
      exportSalesOrderId: this.#exportSalesOrderId,
      exportSalesOrderCode: this.#exportSalesOrderCode,
      exportSalesPackingListId: this.#exportSalesPackingListId,
      exportSalesPackingListCode: this.#exportSalesPackingListCode,
      companyBankId: this.#companyBankId,
      bankAccountNumber: this.#bankAccountNumber,
      bankAccountName: this.#bankAccountName,
      currencyRateCompany: this.#currencyRateCompany,
      currencyIdCompany: this.#currencyIdCompany,
      traceId: this.#traceId,
      containerNo: this.#containerNo,
      sealNo: this.#sealNo,
      betNo: this.#betNo,
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
      postalCode: this.#postalCode,
      sendDate: this.#sendDate,
      creditLimit: this.#creditLimit,
      paymentTermId: this.#paymentTermId,
      salesmanId: this.#salesmanId,
      salesDeposit: this.#salesDeposit,
      customerInvNo: this.#customerInvNo,
      customerInvDate: this.#customerInvDate,
      isvat: this.#isvat,
      vatNo: this.#vatNo,
      vatDate: this.#vatDate,
      currencyId: this.#currencyId,
      currencyRate: this.#currencyRate,
      totalQty: this.#totalQty,
      subtotal: this.#subtotal,
      subtotalT: this.#subtotalT,
      discPersen: this.#discPersen,
      discAmount: this.#discAmount,
      discPersen2: this.#discPersen2,
      discAmount2: this.#discAmount2,
      discPersen3: this.#discPersen3,
      discAmount3: this.#discAmount3,
      taxPersen: this.#taxPersen,
      taxAmount: this.#taxAmount,
      shipping: this.#shipping,
      shippingPrice: this.#shippingPrice,
      handlingPrice: this.#handlingPrice,
      paymentCode: this.#paymentCode,
      dpAmount: this.#dpAmount,
      advAmount: this.#advAmount,
      advAmountT: this.#advAmountT,
      advAmountS: this.#advAmountS,
      sisaPay: this.#sisaPay,
      total: this.#total,
      totalT: this.#totalT,
      totalCreditCode: this.#totalCreditCode,
      totalPay: this.#totalPay,
      totalPayS: this.#totalPayS,
      totalPayT: this.#totalPayT,
      totalReturn: this.#totalReturn,
      pphPersen: this.#pphPersen,
      pphAmount: this.#pphAmount,
      status: this.#status,
      statusNext: this.#statusNext,
      isFinish: this.#isFinish,
      note: this.#note,
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

class ExportSalesInvoiceAdvanceDto extends StandardDto {
  #exportSalesInvAdvpayId;
  #exportSalesInvId;
  #exportSalesAdvpayId;
  #exportSalesAdvpayCode;
  #totalDp;
  #totalUsed;
  #remaining;
  #isorder;

  constructor(dto) {
    super(dto);
    this.#exportSalesInvAdvpayId = dto.export_sales_inv_advpay_id;
    this.#exportSalesInvId = dto.export_sales_inv_id;
    this.#exportSalesAdvpayId = dto.export_sales_advpay_id;
    this.#exportSalesAdvpayCode = dto.export_sales_advpay_code;
    this.#totalDp = dto.total_dp;
    this.#totalUsed = dto.total_used;
    this.#remaining = dto.remaining;
    this.#isorder = dto.isorder;
  }
  get exportSalesInvAdvpayId() {
    return this.#exportSalesInvAdvpayId;
  }
  toModel() {
    return {
      exportSalesInvAdvpayId: this.#exportSalesInvAdvpayId,
      exportSalesInvId: this.#exportSalesInvId,
      exportSalesAdvpayId: this.#exportSalesAdvpayId,
      exportSalesAdvpayCode: this.#exportSalesAdvpayCode,
      totalDp: this.#totalDp,
      totalUsed: this.#totalUsed,
      remaining: this.#remaining,
      isorder: this.#isorder,

      ...super.toModel()
    };
  }
}

class ExportSalesInvoiceBc16Dto extends StandardDto {
  #exportSalesInvBc16Id;
  #exportSalesInvId;
  #exportSalesInvDtId;
  #exportSalesPackingListBc16Id;
  #bc16Id;
  #itemId;
  #bc16;
  #qty;
  #qtyUsed;

  constructor(dto) {
    super(dto);
    this.#exportSalesInvBc16Id = dto.export_sales_inv_bc16_id;
    this.#exportSalesInvId = dto.export_sales_inv_id;
    this.#exportSalesInvDtId = dto.export_sales_inv_dt_id;
    this.#exportSalesPackingListBc16Id = dto.export_sales_packing_list_bc16_id;
    this.#bc16Id = dto.bc_16_id;
    this.#itemId = dto.item_id;
    this.#bc16 = dto.bc16;
    this.#qty = dto.qty;
    this.#qtyUsed = dto.qty_used;
  }
  get exportSalesInvBc16Id() {
    return this.#exportSalesInvBc16Id;
  }
  toModel() {
    return {
      exportSalesInvBc16Id: this.#exportSalesInvBc16Id,
      exportSalesInvId: this.#exportSalesInvId,
      exportSalesInvDtId: this.#exportSalesInvDtId,
      exportSalesPackingListBc16Id: this.#exportSalesPackingListBc16Id,
      bc16Id: this.#bc16Id,
      itemId: this.#itemId,
      bc16: this.#bc16,
      qty: this.#qty,
      qtyUsed: this.#qtyUsed,
      ...super.toModel()
    };
  }
}

class ExportSalesInvoiceDtDto extends StandardDto {
  #exportSalesInvDtId;
  #exportSalesInvId;
  #exportSalesPackingListId;
  #exportSalesPackingListDtId;
  #exportSalesPackingListCode;
  #itemId;
  #itemCode;
  #itemName;
  #bc16;
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
    this.#exportSalesInvDtId = dto.export_sales_inv_dt_id;
    this.#exportSalesInvId = dto.export_sales_inv_id;
    this.#exportSalesPackingListId = dto.export_sales_packing_list_id;
    this.#exportSalesPackingListDtId = dto.export_sales_packing_list_dt_id;
    this.#exportSalesPackingListCode = dto.export_sales_packing_list_code;
    this.#itemId = dto.item_id;
    this.#itemCode = dto.item_code;
    this.#itemName = dto.item_name;
    this.#bc16 = dto.bc_16;
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
    this.#discPersen = dto.disc_persen;
    this.#discAmount = dto.disc_amount;
    this.#discPersen2 = dto.disc_persen2;
    this.#discAmount2 = dto.disc_amount2;
    this.#disc3 = dto.disc3;
    this.#taxPersen = dto.tax_persen;
    this.#taxAmount = dto.tax_amount;
    this.#total = dto.total;
  }
  get exportSalesInvDtId() {
    return this.#exportSalesInvDtId;
  }
  toModel() {
    return {
      exportSalesInvDtId: this.#exportSalesInvDtId,
      exportSalesInvId: this.#exportSalesInvId,
      exportSalesPackingListId: this.#exportSalesPackingListId,
      exportSalesPackingListDtId: this.#exportSalesPackingListDtId,
      exportSalesPackingListCode: this.#exportSalesPackingListCode,
      itemId: this.#itemId,
      itemCode: this.#itemCode,
      itemName: this.#itemName,
      bc16: this.#bc16,
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

class ExportSalesInvoiceItemDtDto extends StandardDto {
  #exportSalesInvItemDtId;
  #exportSalesInvDtId;
  #exportSalesInvId;
  #exportSalesInvBc16Id;
  #bc16;
  #itemStockDtId;
  #exportSalesPackingListItemDtId;
  #itemId;
  #expDay;
  #expMonth;
  #expYear;
  #qty;
  #qtyR;

  constructor(dto) {
    super(dto);
    this.#exportSalesInvItemDtId = dto.export_sales_inv_dt_id;
    this.#exportSalesInvDtId = dto.export_sales_inv_dt_id;
    this.#exportSalesInvId = dto.export_sales_inv_id;
    this.#exportSalesInvBc16Id = dto.export_sales_inv_bc16_id;
    this.#bc16 = dto.bc16;
    this.#itemStockDtId = dto.item_stock_dt_id;
    this.#exportSalesPackingListItemDtId = dto.export_sales_packing_list_item_dt_id;
    this.#itemId = dto.item_id;
    this.#expDay = dto.exp_day;
    this.#expMonth = dto.exp_month;
    this.#expYear = dto.exp_year;
    this.#qty = dto.qty;
    this.#qtyR = dto.qty_r;
  }
  get exportSalesInvItemDtId() {
    return this.#exportSalesInvItemDtId;
  }
  toModel() {
    return {
      exportSalesInvItemDtId: this.#exportSalesInvItemDtId,
      exportSalesInvItemDtId: this.#exportSalesInvItemDtId,
      exportSalesInvDtId: this.#exportSalesInvDtId,
      exportSalesInvId: this.#exportSalesInvId,
      exportSalesInvBc16Id: this.#exportSalesInvBc16Id,
      bc16: this.#bc16,
      itemStockDtId: this.#itemStockDtId,
      exportSalesPackingListItemDtId: this.#exportSalesPackingListItemDtId,
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

class ExportSalesInvoiceRejectDto extends StandardDto {
  #exportSalesInvRejectId;
  #exportSalesInvId;
  #note;
  #userId;

  constructor(dto) {
    super(dto);
    this.#exportSalesInvRejectId = dto.export_sales_inv_reject_id;
    this.#exportSalesInvId = dto.export_sales_inv_id;
    this.#note = dto.note;
    this.#userId = dto.user_id;
  }
  get exportSalesInvRejectId() {
    return this.#exportSalesInvRejectId;
  }
  toModel() {
    return {
      exportSalesInvRejectId: this.#exportSalesInvRejectId,
      exportSalesInvId: this.#exportSalesInvId,
      note: this.#note,
      userId: this.#userId,
      ...super.toModel()
    };
  }
}

class ExportSalesInvoiceRequestDto extends StandardDto {
  #exportSalesInvRequestId;
  #exportSalesInvId;
  #note;
  #statusRequest;
  #userId;

  constructor(dto) {
    super(dto);
    this.#exportSalesInvRequestId = dto.export_sales_inv_request_id;
    this.#exportSalesInvId = dto.export_sales_inv_id;
    this.#note = dto.note;
    this.#statusRequest = dto.status_request;
    this.#userId = dto.user_id;
  }
  get exportSalesInvRequestId() {
    return this.#exportSalesInvRequestId;
  }
  toModel() {
    return {
      exportSalesInvRequestId: this.#exportSalesInvRequestId,
      exportSalesInvId: this.#exportSalesInvId,
      note: this.#note,
      statusRequest: this.#statusRequest,
      userId: this.#userId,
      ...super.toModel()
    };
  }
}

export {
  ExportSalesInvDto,
  ExportSalesInvoiceAdvanceDto,
  ExportSalesInvoiceBc16Dto,
  ExportSalesInvoiceDtDto,
  ExportSalesInvoiceItemDtDto,
  ExportSalesInvoiceRejectDto,
  ExportSalesInvoiceRequestDto
};
