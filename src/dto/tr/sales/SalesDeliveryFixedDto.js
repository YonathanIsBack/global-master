import StandardDto from '../../StandardDto.js';

class SalesDeliveryFixedDto extends StandardDto {
  #salesDeliveryFixedId;
  #salesDeliveryFixedCode;
  #salesDeliveryFixedCodeTemp;
  #salesDeliveryFixedDate;
  #salesDeliveryNoteId;
  #salesDeliveryNoteCode;
  #salesOrderId;
  #salesOrderCode;
  #traceId;
  #customerId;
  #customerDeliveryId;
  #customerDeliveryAddr;
  #countryId;
  #provinceId;
  #cityId;
  #districtId;
  #subdistrictId;
  #postalCode;
  #deliveryDate;
  #returnDate;
  #warehouseId;
  #salesmanId;
  #shippingId;
  #shipping;
  #shippingNo;
  #shippingDate;
  #currencyId;
  #currencyRate;
  #driver;
  #ajuDate;
  #ajuNumber;
  #bc16;
  #licensePlate;
  #note;
  #status;
  #statusNext;
  #isFinish;
  #isvat;
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
  #confirmtime;
  #confirmby;
  #isedit;
  #isBc16;
  #confirmtimeF;
  #confirmbyF;

  constructor(dto) {
    super(dto);
    this.#salesDeliveryFixedId = dto.sales_delivery_fixed_id;
    this.#salesDeliveryFixedCode = dto.sales_delivery_fixed_code;
    this.#salesDeliveryFixedCodeTemp = dto.sales_delivery_fixed_code_temp;
    this.#salesDeliveryFixedDate = dto.sales_delivery_fixed_date;
    this.#salesDeliveryNoteId = dto.sales_delivery_note_id;
    this.#salesDeliveryNoteCode = dto.sales_delivery_note_code;
    this.#salesOrderId = dto.sales_order_id;
    this.#salesOrderCode = dto.sales_order_code;
    this.#traceId = dto.trace_id;
    this.#customerId = dto.customer_id;
    this.#customerDeliveryId = dto.customer_delivery_id;
    this.#customerDeliveryAddr = dto.customer_delivery_addr;
    this.#countryId = dto.country_id;
    this.#provinceId = dto.province_id;
    this.#cityId = dto.city_id;
    this.#districtId = dto.district_id;
    this.#subdistrictId = dto.subdistrict_id;
    this.#postalCode = dto.postal_code;
    this.#deliveryDate = dto.delivery_date;
    this.#returnDate = dto.return_date;
    this.#warehouseId = dto.warehouse_id;
    this.#salesmanId = dto.salesman_id;
    this.#shippingId = dto.shipping_id;
    this.#shipping = dto.shipping;
    this.#shippingNo = dto.shipping_no;
    this.#shippingDate = dto.shipping_date;
    this.#currencyId = dto.currency_id;
    this.#currencyRate = dto.currency_rate;
    this.#driver = dto.driver;
    this.#ajuDate = dto.aju_date;
    this.#ajuNumber = dto.aju_number;
    this.#bc16 = dto.bc16;
    this.#licensePlate = dto.license_plate;
    this.#note = dto.note;
    this.#status = dto.status;
    this.#statusNext = dto.status_next;
    this.#isFinish = dto.is_finish;
    this.#isvat = dto.isvat;
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
    this.#confirmtime = dto.confirmtime;
    this.#confirmby = dto.confirmby;
    this.#isedit = dto.isedit;
    this.#isBc16 = dto.is_bc_16;
    this.#confirmtimeF = dto.confirmtime_f;
    this.#confirmbyF = dto.confirmby_f;
  }

  get salesDeliveryFixedId() {
    return this.#salesDeliveryFixedId;
  }

  toModel() {
    return {
      salesDeliveryFixedId: this.#salesDeliveryFixedId,
      salesDeliveryFixedCode: this.#salesDeliveryFixedCode,
      salesDeliveryFixedCodeTemp: this.#salesDeliveryFixedCodeTemp,
      salesDeliveryFixedDate: this.#salesDeliveryFixedDate,
      salesDeliveryNoteId: this.#salesDeliveryNoteId,
      salesDeliveryNoteCode: this.#salesDeliveryNoteCode,
      salesOrderId: this.#salesOrderId,
      salesOrderCode: this.#salesOrderCode,
      traceId: this.#traceId,
      customerId: this.#customerId,
      customerDeliveryId: this.#customerDeliveryId,
      customerDeliveryAddr: this.#customerDeliveryAddr,
      countryId: this.#countryId,
      provinceId: this.#provinceId,
      cityId: this.#cityId,
      districtId: this.#districtId,
      subdistrictId: this.#subdistrictId,
      postalCode: this.#postalCode,
      deliveryDate: this.#deliveryDate,
      returnDate: this.#returnDate,
      warehouseId: this.#warehouseId,
      salesmanId: this.#salesmanId,
      shippingId: this.#shippingId,
      shipping: this.#shipping,
      shippingNo: this.#shippingNo,
      shippingDate: this.#shippingDate,
      currencyId: this.#currencyId,
      currencyRate: this.#currencyRate,
      driver: this.#driver,
      ajuDate: this.#ajuDate,
      ajuNumber: this.#ajuNumber,
      bc16: this.#bc16,
      licensePlate: this.#licensePlate,
      note: this.#note,
      status: this.#status,
      statusNext: this.#statusNext,
      isFinish: this.#isFinish,
      isvat: this.#isvat,
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
      confirmtime: this.#confirmtime,
      confirmby: this.#confirmby,
      isedit: this.#isedit,
      isBc16: this.#isBc16,
      confirmtimeF: this.#confirmtimeF,
      confirmbyF: this.#confirmbyF,
      ...super.toModel()
    };
  }
}

class SalesDeliveryFixedDtDto extends StandardDto {
  #salesDeliveryFixedDtId;
  #salesDeliveryFixedId;
  #salesDeliveryNoteId;
  #salesDeliveryNoteDtId;
  #salesDeliveryNoteCode;
  #itemId;
  #itemName;
  #itemCode;
  #warehouseId;
  #qty;
  #unit;
  #qtyDeliver;
  #return;
  #qtyReceived;
  #qtySi;
  #price;
  #price2;
  #currencyId;
  #currencyRate;
  #discPersen;
  #discAmount;
  #discPersen2;
  #discAmount2;
  #disc3;
  #taxPersen;
  #taxAmount;
  #total;
  #totalInv;

  constructor(dto) {
    super(dto);
    this.#salesDeliveryFixedDtId = dto.sales_delivery_fixed_dt_id;
    this.#salesDeliveryFixedId = dto.sales_delivery_fixed_id;
    this.#salesDeliveryNoteId = dto.sales_delivery_note_id;
    this.#salesDeliveryNoteDtId = dto.sales_delivery_note_dt_id;
    this.#salesDeliveryNoteCode = dto.sales_delivery_note_code;
    this.#itemId = dto.item_id;
    this.#itemName = dto.item_name;
    this.#itemCode = dto.item_code;
    this.#warehouseId = dto.warehouse_id;
    this.#qty = dto.qty;
    this.#unit = dto.unit;
    this.#qtyDeliver = dto.qty_deliver;
    this.#return = dto.return;
    this.#qtyReceived = dto.qty_received;
    this.#qtySi = dto.qty_si;
    this.#price = dto.price;
    this.#price2 = dto.price2;
    this.#currencyId = dto.currency_id;
    this.#currencyRate = dto.currency_rate;
    this.#discPersen = dto.disc_persen;
    this.#discAmount = dto.disc_amount;
    this.#discPersen2 = dto.disc_persen2;
    this.#discAmount2 = dto.disc_amount2;
    this.#disc3 = dto.disc3;
    this.#taxPersen = dto.tax_persen;
    this.#taxAmount = dto.tax_amount;
    this.#total = dto.total;
    this.#totalInv = dto.total_inv;
  }

  get salesDeliveryFixedDtId() {
    return this.#salesDeliveryFixedDtId;
  }

  toModel() {
    return {
      salesDeliveryFixedDtId: this.#salesDeliveryFixedDtId,
      salesDeliveryFixedId: this.#salesDeliveryFixedId,
      salesDeliveryNoteId: this.#salesDeliveryNoteId,
      salesDeliveryNoteDtId: this.#salesDeliveryNoteDtId,
      salesDeliveryNoteCode: this.#salesDeliveryNoteCode,
      itemId: this.#itemId,
      itemName: this.#itemName,
      itemCode: this.#itemCode,
      warehouseId: this.#warehouseId,
      qty: this.#qty,
      unit: this.#unit,
      qtyDeliver: this.#qtyDeliver,
      return: this.#return,
      qtyReceived: this.#qtyReceived,
      qtySi: this.#qtySi,
      price: this.#price,
      price2: this.#price2,
      currencyId: this.#currencyId,
      currencyRate: this.#currencyRate,
      discPersen: this.#discPersen,
      discAmount: this.#discAmount,
      discPersen2: this.#discPersen2,
      discAmount2: this.#discAmount2,
      disc3: this.#disc3,
      taxPersen: this.#taxPersen,
      taxAmount: this.#taxAmount,
      total: this.#total,
      totalInv: this.#totalInv,
      ...super.toModel()
    };
  }
}

class SalesDeliveryFixeditemDtDto extends StandardDto {
  #salesDeliveryFixedItemDtId;
  #salesDeliveryFixedDtId;
  #salesDeliveryFixedId;
  #itemStockDtId;
  #salesDeliveryNoteItemDtId;
  #itemId;
  #expDay;
  #expMonth;
  #expYear;
  #qty;
  #qtyDeliver;
  #return;
  #qtyI;

  constructor(dto) {
    super(dto);
    this.#salesDeliveryFixedItemDtId = dto.sales_delivery_fixed_item_dt_id;
    this.#salesDeliveryFixedDtId = dto.sales_delivery_fixed_dt_id;
    this.#salesDeliveryFixedId = dto.sales_delivery_fixed_id;
    this.#itemStockDtId = dto.item_stock_dt_id;
    this.#salesDeliveryNoteItemDtId = dto.sales_delivery_note_item_dt_id;
    this.#itemId = dto.item_id;
    this.#expDay = dto.exp_day;
    this.#expMonth = dto.exp_month;
    this.#expYear = dto.exp_year;
    this.#qty = dto.qty;
    this.#qtyDeliver = dto.qty_deliver;
    this.#return = dto.return;
    this.#qtyI = dto.qty_i;
  }

  get salesDeliveryFixedItemDtId() {
    return this.#salesDeliveryFixedItemDtId;
  }

  toModel() {
    return {
      salesDeliveryFixedItemDtId: this.#salesDeliveryFixedItemDtId,
      salesDeliveryFixedDtId: this.#salesDeliveryFixedDtId,
      salesDeliveryFixedId: this.#salesDeliveryFixedId,
      itemStockDtId: this.#itemStockDtId,
      salesDeliveryNoteItemDtId: this.#salesDeliveryNoteItemDtId,
      itemId: this.#itemId,
      expDay: this.#expDay,
      expMonth: this.#expMonth,
      expYear: this.#expYear,
      qty: this.#qty,
      qtyDeliver: this.#qtyDeliver,
      return: this.#return,
      qtyI: this.#qtyI,
      ...super.toModel()
    };
  }
}

class SalesDeliveryFixedRejectDto extends StandardDto {
  #salesDeliveryFixedRejectId;
  #salesDeliveryFixedId;
  #note;
  #userId;

  constructor(dto) {
    super(dto);
    this.#salesDeliveryFixedRejectId = dto.sales_delivery_fixed_reject_id;
    this.#salesDeliveryFixedId = dto.sales_delivery_fixed_id;
    this.#note = dto.note;
    this.#userId = dto.userId;
  }

  get salesDeliveryFixedRejectId() {
    return this.#salesDeliveryFixedRejectId;
  }

  toModel() {
    return {
      salesDeliveryFixedRejectId: this.#salesDeliveryFixedRejectId,
      salesDeliveryFixedId: this.#salesDeliveryFixedId,
      note: this.#note,
      userId: this.#userId,
      ...super.toModel()
    };
  }
}

class SalesDeliveryFixedRequestDto extends StandardDto {
  #salesDeliveryFixedRequestId;
  #salesDeliveryFixedId;
  #note;
  #statusRequest;
  #userId;

  constructor(dto) {
    super(dto);
    this.#salesDeliveryFixedRequestId = dto.sales_delivery_fixed_request_id;
    this.#salesDeliveryFixedId = dto.sales_delivery_fixed_id;
    this.#note = dto.note;
    this.#userId = dto.userId;
    this.#statusRequest = dto.status_request;
  }

  get salesDeliveryFixedRequestId() {
    return this.#salesDeliveryFixedRequestId;
  }

  toModel() {
    return {
      salesDeliveryFixedRequestId: this.#salesDeliveryFixedRequestId,
      salesDeliveryFixedId: this.#salesDeliveryFixedId,
      note: this.#note,
      userId: this.#userId,
      statusRequest: this.#statusRequest,
      ...super.toModel()
    };
  }
}

export { SalesDeliveryFixedDto, SalesDeliveryFixedDtDto, SalesDeliveryFixeditemDtDto, SalesDeliveryFixedRejectDto, SalesDeliveryFixedRequestDto };
