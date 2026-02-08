import StandardDto from '../../StandardDto.js';

class SalesDeliveryNoteDto extends StandardDto {
  #salesDeliveryNoteId;
  #salesDeliveryNoteCode;
  #salesDeliveryNoteCodeTemp;
  #salesDeliveryNoteDate;
  #salesOrderId;
  #salesOrderCode;
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
  #discPersen3;
  #discAmount3;
  #taxPersen;
  #taxAmount;
  #taxPersenCoretax;
  #taxPersenOri;
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
    this.#salesDeliveryNoteId = dto.sales_delivery_note_id;
    this.#salesDeliveryNoteCode = dto.sales_delivery_note_code;
    this.#salesDeliveryNoteCodeTemp = dto.sales_delivery_note_code_temp;
    this.#salesDeliveryNoteDate = dto.sales_delivery_note_date;
    this.#salesOrderId = dto.sales_order_id;
    this.#salesOrderCode = dto.sales_order_code;
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
    this.#sendDate = dto.send_date;
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
    this.#discPersen3 = dto.disc_persen3;
    this.#discAmount3 = dto.disc_amount3;
    this.#taxPersen = dto.tax_persen;
    this.#taxAmount = dto.tax_amount;
    this.#taxPersenCoretax = dto.tax_persen_coretax;
    this.#taxPersenOri = dto.tax_persen_ori;
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

  get salesDeliveryNoteId() {
    return this.#salesDeliveryNoteId;
  }

  toModel() {
    return {
      salesDeliveryNoteId: this.#salesDeliveryNoteId,
      salesDeliveryNoteCode: this.#salesDeliveryNoteCode,
      salesDeliveryNoteCodeTemp: this.#salesDeliveryNoteCodeTemp,
      salesDeliveryNoteDate: this.#salesDeliveryNoteDate,
      salesOrderId: this.#salesOrderId,
      salesOrderCode: this.#salesOrderCode,
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
      discPersen3: this.#discPersen3,
      discAmount3: this.#discAmount3,
      taxPersen: this.#taxPersen,
      taxAmount: this.#taxAmount,
      taxPersenCoretax: this.#taxPersenCoretax,
      taxPersenOri: this.#taxPersenOri,
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

class SalesDeliveryNoteDtDto extends StandardDto {
  #salesDeliveryNoteDtId;
  #salesDeliveryNoteId;
  #salesOrderId;
  #salesOrderDtId;
  #salesOrderCode;
  #itemId;
  #itemCode;
  #itemName;
  #warehouseId;
  #qty;
  #unit;
  #qtyOrder;
  #qtyRemain;
  #deliver;
  #remain;
  #qtyStock;
  #qtySdf;
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

  constructor(dto) {
    super(dto);
    this.#salesDeliveryNoteDtId = dto.sales_delivery_note_dt_id;
    this.#salesDeliveryNoteId = dto.sales_delivery_note_id;
    this.#salesOrderId = dto.sales_order_id;
    this.#salesOrderDtId = dto.sales_order_dt_id;
    this.#salesOrderCode = dto.sales_order_code;
    this.#itemId = dto.item_id;
    this.#itemCode = dto.item_code;
    this.#itemName = dto.item_name;
    this.#warehouseId = dto.warehouse_id;
    this.#qty = dto.qty;
    this.#unit = dto.unit;
    this.#qtyOrder = dto.qty_order;
    this.#qtyRemain = dto.qty_remain;
    this.#deliver = dto.deliver;
    this.#remain = dto.remain;
    this.#qtyStock = dto.qty_stock;
    this.#qtySdf = dto.qty_sdf;
    this.#price = dto.price;
    this.#price2 = dto.price2;
    this.#currencyId = dto.currency_id;
    this.#currencyRate = dto.currency_rate;
    this.#discPersen = dto.disc_persen;
    this.#discAmount = dto.disc_amount;
    this.#discPersen2 = dto.disc_persen;
    this.#discAmount2 = dto.disc_amount;
    this.#disc3 = dto.disc3;
    this.#taxPersen = dto.tax_persen;
    this.#taxAmount = dto.tax_amount;
    this.#total = dto.total;
  }

  get salesDeliveryNoteDtId() {
    return this.#salesDeliveryNoteDtId;
  }

  toModel() {
    return {
      salesDeliveryNoteDtId: this.#salesDeliveryNoteDtId,
      salesDeliveryNoteId: this.#salesDeliveryNoteId,
      salesOrderId: this.#salesOrderId,
      salesOrderDtId: this.#salesOrderDtId,
      salesOrderCode: this.#salesOrderCode,
      itemId: this.#itemId,
      itemCode: this.#itemCode,
      itemName: this.#itemName,
      warehouseId: this.#warehouseId,
      qty: this.#qty,
      unit: this.#unit,
      qtyOrder: this.#qtyOrder,
      qtyRemain: this.#qtyRemain,
      deliver: this.#deliver,
      remain: this.#remain,
      qtyStock: this.#qtyStock,
      qtySdf: this.#qtySdf,
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
      ...super.toModel()
    };
  }
}

class SalesDeliveryNoteItemDtDto extends StandardDto {
  #salesDeliveryNoteItemDtId;
  #salesDeliveryNote_dtId;
  #salesDeliveryNoteId;
  #itemStockDtId;
  #salesOrderItemDtId;
  #itemId;
  #expDay;
  #expMonth;
  #expYear;
  #qty;
  #qtyDn;

  constructor(dto) {
    super(dto);
    this.#salesDeliveryNoteItemDtId = dto.sales_delivery_note_item_dt_id;
    this.#salesDeliveryNote_dtId = dto.sales_delivery_note_dt_id;
    this.#salesDeliveryNoteId = dto.sales_delivery_note_id;
    this.#itemStockDtId = dto.item_stock_dt_id;
    this.#salesOrderItemDtId = dto.sales_order_item_dt_id;
    this.#itemId = dto.item_id;
    this.#expDay = dto.exp_day;
    this.#expMonth = dto.exp_month;
    this.#expYear = dto.exp_year;
    this.#qty = dto.qty;
    this.#qtyDn = dto.qty_dn;
  }

  get salesDeliveryNoteItemDtId() {
    return this.#salesDeliveryNoteItemDtId;
  }

  toModel() {
    return {
      salesDeliveryNoteItemDtId: this.#salesDeliveryNoteItemDtId,
      salesDeliveryNoteDtId: this.#salesDeliveryNote_dtId,
      salesDeliveryNoteId: this.#salesDeliveryNoteId,
      itemStockDtId: this.#itemStockDtId,
      salesOrderItemDtId: this.#salesOrderItemDtId,
      itemId: this.#itemId,
      expDay: this.#expDay,
      expMonth: this.#expMonth,
      expYear: this.#expYear,
      qty: this.#qty,
      qtyDn: this.#qtyDn,
      ...super.toModel()
    };
  }
}

class SalesDeliveryNoteRejectDto extends StandardDto {
  #salesDeliveryNoteRejectId;
  #salesDeliveryNoteId;
  #note;
  #userId;

  constructor(dto) {
    super(dto);
    this.#salesDeliveryNoteRejectId = dto.sales_delivery_note_reject_id;
    this.#salesDeliveryNoteId = dto.sales_delivery_note_id;
    this.#note = dto.note;
    this.#userId = dto.userId;
  }

  get salesDeliveryNoteRejectId() {
    return this.#salesDeliveryNoteRejectId;
  }

  toModel() {
    return {
      salesDeliveryNoteRejectId: this.#salesDeliveryNoteRejectId,
      salesDeliveryNoteId: this.#salesDeliveryNoteId,
      note: this.#note,
      userId: this.#userId,
      ...super.toModel()
    };
  }
}

class SalesDeliveryNoteRequestDto extends StandardDto {
  #salesDeliveryNoteRequestId;
  #salesDeliveryNoteId;
  #note;
  #statusRequest;
  #userId;

  constructor(dto) {
    super(dto);
    this.#salesDeliveryNoteRequestId = dto.sales_delivery_fixed_request_id;
    this.#salesDeliveryNoteId = dto.sales_delivery_fixed_id;
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
      salesDeliveryNoteId: this.#salesDeliveryNoteId,
      note: this.#note,
      userId: this.#userId,
      statusRequest: this.#statusRequest,
      ...super.toModel()
    };
  }
}

export { SalesDeliveryNoteDto, SalesDeliveryNoteDtDto, SalesDeliveryNoteItemDtDto, SalesDeliveryNoteRejectDto, SalesDeliveryNoteRequestDto };
