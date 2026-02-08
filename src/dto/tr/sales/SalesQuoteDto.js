import StandardDto from '../../StandardDto.js';

class SalesQuoteDto extends StandardDto {
  #salesQuoteId;
  #warehouseId;
  #salesQuoteCode;
  #salesQuoteCodeTemp;
  #salesQuoteDate;
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
  #salesmanId;
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
  #taxPersenCoretax;
  #taxPersenOri;
  #isvat;
  #total;
  #totalPayFinish;
  #confirmtime;
  #confirmby;
  #isedit;
  #confirmtimeF;
  #confirmbyF;

  constructor(dto) {
    super(dto);
    this.#salesQuoteId = dto.sales_quote_id;
    this.#warehouseId = dto.warehouse_id;
    this.#salesQuoteCode = dto.sales_quote_code;
    this.#salesQuoteCodeTemp = dto.sales_quote_code_temp;
    this.#salesQuoteDate = dto.sales_quote_date;
    this.#traceId = dto.trace_id;
    this.#customerId = dto.customer_id;
    this.#creditLimit = dto.credit_limit;
    this.#paymentTermId = dto.payment_term_id;
    this.#customerDeliveryId = dto.customer_delivery_id;
    this.#customerDeliveryAddr = dto.customer_delivery_addr;
    this.#countryId = dto.country_id;
    this.#provinceId = dto.province_id;
    this.#cityId = dto.city_id;
    this.#districtId = dto.district_id;
    this.#subdistrictId = dto.subdistrict_id;
    this.#postalCode = dto.postal_code;
    this.#sendDate = dto.send_date;
    this.#salesmanId = dto.salesman_id;
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
    this.#taxPersenCoretax = dto.tax_persen_coretax;
    this.#taxPersenOri = dto.tax_persen_ori;
    this.#isvat = dto.isvat;
    this.#total = dto.total;
    this.#totalPayFinish = dto.total_pay_finish;
    this.#confirmtime = dto.confirmtime;
    this.#confirmby = dto.confirmby;
    this.#isedit = dto.isedit;
    this.#confirmtimeF = dto.confirmtime_f;
    this.#confirmbyF = dto.confirmby_f;
  }

  get salesQuoteId() {
    return this.#salesQuoteId;
  }

  toModel() {
    return {
      salesQuoteId: this.#salesQuoteId,
      warehouseId: this.#warehouseId,
      salesQuoteCode: this.#salesQuoteCode,
      salesQuoteCodeTemp: this.#salesQuoteCodeTemp,
      salesQuoteDate: this.#salesQuoteDate,
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
      salesmanId: this.#salesmanId,
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
      taxPersenCoretax: this.#taxPersenCoretax,
      taxPersenOri: this.#taxPersenOri,
      isvat: this.#isvat,
      total: this.#total,
      totalPayFinish: this.#totalPayFinish,
      confirmtime: this.#confirmtime,
      confirmby: this.#confirmby,
      isedit: this.#isedit,
      confirmtimeF: this.#confirmtimeF,
      confirmbyF: this.#confirmbyF,
      ...super.toModel()
    };
  }
}

class SalesQuoteDtDto extends StandardDto {
  #salesQuoteDtId;
  #salesQuoteId;
  #itemId;
  #itemCode;
  #itemName;
  #qty;
  #qtyApprove;
  #qtyInput;
  #qtyFoc;
  #qtySo;
  #qtyFocSo;
  #status;
  #price;
  #price2;
  #discPersen;
  #discAmount;
  #discPersen2;
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
    this.#salesQuoteDtId = dto.sales_quote_dt_id;
    this.#salesQuoteId = dto.sales_quote_id;
    this.#itemId = dto.item_id;
    this.#itemCode = dto.item_code;
    this.#itemName = dto.item_name;
    this.#qty = dto.qty;
    this.#qtyApprove = dto.qty_approve;
    this.#qtyInput = dto.qty_input;
    this.#qtyFoc = dto.qty_foc;
    this.#qtySo = dto.qty_so;
    this.#qtyFocSo = dto.qty_foc_so;
    this.#status = dto.status;
    this.#price = dto.price;
    this.#price2 = dto.price2;
    this.#discPersen = dto.disc_persen;
    this.#discAmount = dto.disc_amount;
    this.#discPersen2 = dto.disc_persen2;
    this.#discAmount2 = dto.disc_amount2;
    this.#disc3 = dto.disc3;
    this.#taxPersen = dto.tax_persen;
    this.#taxAmount = dto.tax_amount;
    this.#cashback = dto.cashback;
    this.#total = dto.total;
    this.#approveby = dto.approveby;
    this.#approvetime = dto.approvetime;
  }

  get salesQuoteDtId() {
    return this.#salesQuoteDtId;
  }

  toModel() {
    return {
      salesQuoteDtId: this.#salesQuoteDtId,
      salesQuoteId: this.#salesQuoteId,
      itemId: this.#itemId,
      itemCode: this.#itemCode,
      itemName: this.#itemName,
      qty: this.#qty,
      qtyApprove: this.#qtyApprove,
      qtyInput: this.#qtyInput,
      qtyFoc: this.#qtyFoc,
      qtySo: this.#qtySo,
      qtyFocSo: this.#qtyFocSo,
      status: this.#status,
      price: this.#price,
      price2: this.#price2,
      discPersen: this.#discPersen,
      discAmount: this.#discAmount,
      discPersen2: this.#discPersen2,
      discAmount2: this.#discAmount2,
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

class SalesQuoteItemDtDto extends StandardDto {
  #salesQuoteItemDtId;
  #salesQuoteDtId;
  #salesQuoteId;
  #itemStockDtId;
  #itemId;
  #expDay;
  #expMonth;
  #expYear;
  #qty;
  #qtyO;
  constructor(dto) {
    super(dto);
    this.#salesQuoteItemDtId = dto.sales_quote_item_dt_id;
    this.#salesQuoteDtId = dto.sales_quote_dt_id;
    this.#salesQuoteId = dto.sales_quote_id;
    this.#itemStockDtId = dto.item_stock_dt_id;
    this.#itemId = dto.item_id;
    this.#expDay = dto.exp_day;
    this.#expMonth = dto.exp_month;
    this.#expYear = dto.exp_year;
    this.#qty = dto.qty;
    this.#qtyO = dto.qty_o;
  }

  get salesQuoteItemDtId() {
    return this.#salesQuoteItemDtId;
  }

  toModel() {
    return {
      salesQuoteItemDtId: this.#salesQuoteItemDtId,
      salesQuoteDtId: this.#salesQuoteDtId,
      salesQuoteId: this.#salesQuoteId,
      itemStockDtId: this.#itemStockDtId,
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

class SalesQuoteRejectDto extends StandardDto {
  #salesQuoteRejectId;
  #salesQuoteId;
  #note;
  #userId;

  constructor(dto) {
    super(dto);
    this.#salesQuoteRejectId = dto.sales_quote_reject_id;
    this.#salesQuoteId = dto.sales_quote_id;
    this.#note = dto.note;
    this.#userId = dto.userId;
  }

  get salesQuoteRejectId() {
    return this.#salesQuoteRejectId;
  }

  toModel() {
    return {
      salesQuoteRejectId: this.#salesQuoteRejectId,
      salesQuoteId: this.#salesQuoteId,
      note: this.#note,
      userId: this.#userId,
      ...super.toModel()
    };
  }
}

class SalesQuoteRequestDto extends StandardDto {
  #salesQuoteRequestId;
  #salesQuoteId;
  #note;
  #statusRequest;
  #userId;

  constructor(dto) {
    super(dto);
    this.#salesQuoteRequestId = dto.sales_quote_request_id;
    this.#salesQuoteId = dto.sales_quote_id;
    this.#note = dto.note;
    this.#userId = dto.userId;
    this.#statusRequest = dto.status_request;
  }

  get salesQuoteRequestId() {
    return this.#salesQuoteRequestId;
  }

  toModel() {
    return {
      salesQuoteRequestId: this.#salesQuoteRequestId,
      salesQuoteId: this.#salesQuoteId,
      note: this.#note,
      userId: this.#userId,
      statusRequest: this.#statusRequest,
      ...super.toModel()
    };
  }
}

export { SalesQuoteDto, SalesQuoteDtDto, SalesQuoteItemDtDto, SalesQuoteRejectDto, SalesQuoteRequestDto };
