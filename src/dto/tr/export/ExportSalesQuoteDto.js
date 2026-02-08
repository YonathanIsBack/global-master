import StandardDto from '../../StandardDto.js';

class ExportSalesQuoteDto extends StandardDto {
  #exportSalesQuoteId;
  #warehouseId;
  #exportSalesQuoteCode;
  #exportSalesQuoteCodeTemp;
  #exportSalesQuoteDate;
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
  #isvat;
  #total;
  #totalPayFinish;
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
    this.#exportSalesQuoteId = dto.export_sales_quote_id;
    this.#warehouseId = dto.warehouse_id;
    this.#exportSalesQuoteCode = dto.export_sales_quote_code;
    this.#exportSalesQuoteCodeTemp = dto.export_sales_quote_code_temp;
    this.#exportSalesQuoteDate = dto.export_sales_quote_date;
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
    this.#currencyId = dto.currency_id;
    this.#currencyRate = dto.currency_rate;
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
    this.#isvat = dto.isvat;
    this.#total = dto.total;
    this.#totalPayFinish = dto.total_pay_finish;
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
  get exportSalesQuoteId() {
    return this.#exportSalesQuoteId;
  }
  toModel() {
    return {
      exportSalesQuoteId: this.#exportSalesQuoteId,
      warehouseId: this.#warehouseId,
      exportSalesQuoteCode: this.#exportSalesQuoteCode,
      exportSalesQuoteCodeTemp: this.#exportSalesQuoteCodeTemp,
      exportSalesQuoteDate: this.#exportSalesQuoteDate,
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
      isvat: this.#isvat,
      total: this.#total,
      totalPayFinish: this.#totalPayFinish,
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

class ExportSalesQuoteBc16Dto extends StandardDto {
  #export_sales_quote_bc16_id;
  #exportSalesQuoteId;
  #exportSalesQuoteDtId;
  #bc16Id;
  #bc16;
  #itemId;
  #qty;
  #qtyO;
  #cretime;
  #creby;
  #modtime;
  #modby;

  constructor(dto) {
    super(dto);
    this.#export_sales_quote_bc16_id = dto.export_sales_quote_bc16_id;
    this.#exportSalesQuoteId = dto.export_sales_quote_id;
    this.#exportSalesQuoteDtId = dto.export_sales_quote_dt_id;
    this.#bc16Id = dto.bc_16_id;
    this.#bc16 = dto.bc16;
    this.#itemId = dto.item_id;
    this.#qty = dto.qty;
    this.#qtyO = dto.qty_used;
    this.#cretime = dto.cretime;
    this.#creby = dto.#creby;
    this.#modtime = dto.modtime;
    this.#modby = dto.#modby;
  }
  get export_sales_quote_bc16_id() {
    return this.#export_sales_quote_bc16_id;
  }
  toModel() {
    return {
      export_sales_quote_bc16_id: this.#export_sales_quote_bc16_id,
      exportSalesQuoteId: this.#exportSalesQuoteId,
      exportSalesQuoteDtId: this.#exportSalesQuoteDtId,
      bc16Id: this.#bc16Id,
      bc16: this.#bc16,
      itemId: this.#itemId,
      qty: this.#qty,
      qtyO: this.#qtyO,
      cretime: this.#cretime,
      creby: this.#creby,
      modtime: this.#modtime,
      modby: this.#modby,

      ...super.toModel()
    };
  }
}

class ExportSalesQuoteDtDto extends StandardDto {
  #exportSalesQuoteDtId;
  #exportSalesQuoteId;
  #itemId;
  #itemCode;
  #itemName;
  #bc16;
  #unit;
  #qty;
  #qtySo;
  #UnitPrice;
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
  #cashback;
  #total;

  constructor(dto) {
    super(dto);
    this.#exportSalesQuoteDtId = dto.export_sales_quote_dt_id;
    this.#exportSalesQuoteId = dto.export_sales_quote_id;
    this.#itemId = dto.item_id;
    this.#itemCode = dto.item_code;
    this.#itemName = dto.item_name;
    this.#bc16 = dto.bc_16;
    this.#unit = dto.unit;
    this.#qty = dto.qty;
    this.#qtySo = dto.qty_so;
    this.#UnitPrice = dto.unit_price;
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
    this.#cashback = dto.cashback;
    this.#total = dto.total;
  }
  get exportSalesQuoteDtId() {
    return this.#exportSalesQuoteDtId;
  }
  toModel() {
    return {
      exportSalesQuoteDtId: this.#exportSalesQuoteDtId,
      exportSalesQuoteId: this.#exportSalesQuoteId,
      itemId: this.#itemId,
      itemCode: this.#itemCode,
      itemName: this.#itemName,
      bc16: this.#bc16,
      unit: this.#unit,
      qty: this.#qty,
      qtySo: this.#qtySo,
      UnitPrice: this.#UnitPrice,
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
      cashback: this.#cashback,
      total: this.#total,

      ...super.toModel()
    };
  }
}

class ExportSalesQuoteItemDtDto extends StandardDto {
  #exportSalesQuoteItemDtId;
  #exportSalesQuoteDtId;
  #exportSalesQuoteId;
  #itemStockDtId;
  #exportSalesQuoteBc16Id;
  #itemId;
  #expDay;
  #expMonth;
  #expYear;
  #qty;
  #qtyO;

  constructor(dto) {
    super(dto);
    this.#exportSalesQuoteItemDtId = dto.export_sales_quote_item_dt_id;
    this.#exportSalesQuoteDtId = dto.export_sales_quote_dt_id;
    this.#exportSalesQuoteId = dto.export_sales_quote_id;
    this.#itemStockDtId = dto.item_stock_dt_id;
    this.#exportSalesQuoteBc16Id = dto.export_sales_quote_bc16_id;
    this.#itemId = dto.item_id;
    this.#expDay = dto.exp_day;
    this.#expMonth = dto.exp_month;
    this.#expYear = dto.exp_year;
    this.#qty = dto.qty;
    this.#qtyO = dto.qty_o;
  }
  get exportSalesQuoteItemDtId() {
    return this.#exportSalesQuoteItemDtId;
  }
  toModel() {
    return {
      exportSalesQuoteItemDtId: this.#exportSalesQuoteItemDtId,
      exportSalesQuoteItemDtId: this.#exportSalesQuoteItemDtId,
      exportSalesQuoteDtId: this.#exportSalesQuoteDtId,
      exportSalesQuoteId: this.#exportSalesQuoteId,
      itemStockDtId: this.#itemStockDtId,
      exportSalesQuoteBc16Id: this.#exportSalesQuoteBc16Id,
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

class ExportSalesQuoteRejectDto extends StandardDto {
  #exportSalesQuoteRejectId;
  #exportSalesQuoteId;
  #note;
  #userId;
  #cretime;
  #creby;

  constructor(dto) {
    super(dto);
    this.#exportSalesQuoteRejectId = dto.export_sales_quote_reject_id;
    this.#exportSalesQuoteId = dto.export_sales_quote_id;
    this.#note = dto.note;
    this.#userId = dto.user_id;
    this.#cretime = dto.cretime;
    this.#creby = dto.creby;
  }
  get exportSalesQuoteRejectId() {
    return this.#exportSalesQuoteRejectId;
  }
  toModel() {
    return {
      exportSalesQuoteRejectId: this.#exportSalesQuoteRejectId,
      exportSalesQuoteId: this.#exportSalesQuoteId,
      note: this.#note,
      userId: this.#userId,
      cretime: this.#cretime,
      creby: this.#creby,

      ...super.toModel()
    };
  }
}

class ExportSalesQuoteRequestDto extends StandardDto {
  #exportSalesQuoteRequestId;
  #exportSalesQuoteId;
  #note;
  #userId;
  #statusRequest;
  #cretime;
  #creby;

  constructor(dto) {
    super(dto);
    this.#exportSalesQuoteRequestId = dto.export_sales_quote_request_id;
    this.#exportSalesQuoteId = dto.export_sales_quote_id;
    this.#note = dto.note;
    this.#userId = dto.user_id;
    this.#statusRequest = dto.status_request;
    this.#cretime = dto.cretime;
    this.#creby = dto.creby;
  }
  get exportSalesQuoteRequestId() {
    return this.#exportSalesQuoteRequestId;
  }
  toModel() {
    return {
      exportSalesQuoteRequestId: this.#exportSalesQuoteRequestId,
      exportSalesQuoteId: this.#exportSalesQuoteId,
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
  ExportSalesQuoteDto,
  ExportSalesQuoteBc16Dto,
  ExportSalesQuoteDtDto,
  ExportSalesQuoteItemDtDto,
  ExportSalesQuoteRejectDto,
  ExportSalesQuoteRequestDto
};
