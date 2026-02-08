import StandardDto from '../../StandardDto.js';

class ExportSalesPackingListDto extends StandardDto {
  #exportSalesPackingListId;
  #exportSalesPackingListCode;
  #exportSalesPackingListCodeTemp;
  #exportSalesPackingListDate;
  #exportSalesOrderId;
  #exportSalesOrderCode;
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
  #warehouseId;
  #salesmanId;
  #shipping;
  #shippingNo;
  #shippingDate;
  #currencyId;
  #currencyRate;
  #containerNo;
  #sealNo;
  #betNo;
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
  #total;
  #totalInv;
  #totalPayFinish;
  #cretime;
  #creby;
  #modtime;
  #modby;
  #confirmtime;
  #confirmby;
  #isedit;
  #isBc16;
  #confirmtimeF;
  #confirmbyF;

  constructor(dto) {
    super(dto);
    this.#exportSalesPackingListId = dto.export_sales_packing_list_id;
    this.#exportSalesPackingListCode = dto.export_sales_packing_list_code;
    this.#exportSalesPackingListCodeTemp = dto.export_sales_packing_list_code_temp;
    this.#exportSalesPackingListDate = dto.export_sales_packing_list_date;
    this.#exportSalesOrderId = dto.export_sales_order_id;
    this.#exportSalesOrderCode = dto.export_sales_order_code;
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
    this.#warehouseId = dto.warehouse_id;
    this.#salesmanId = dto.salesman_id;
    this.#shipping = dto.shipping;
    this.#shippingNo = dto.shipping_no;
    this.#shippingDate = dto.shipping_date;
    this.#currencyId = dto.currency_id;
    this.#currencyRate = dto.currency_rate;
    this.#containerNo = dto.container_no;
    this.#sealNo = dto.seal_no;
    this.#betNo = dto.bet_no;
    this.#driver = dto.driver;
    this.#ajuDate = dto.aju_date;
    this.#ajuNumber = dto.aju_number;
    this.#bc16 = dto.bc_16;
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
    this.#total = dto.total;
    this.#totalInv = dto.total_inv;
    this.#totalPayFinish = dto.total_pay_finish;
    this.#cretime = dto.cretime;
    this.#creby = dto.creby;
    this.#modtime = dto.modtime;
    this.#modby = dto.modby;
    this.#confirmtime = dto.confirmtime;
    this.#confirmby = dto.confirmby;
    this.#isedit = dto.isedit;
    this.#isBc16 = dto.is_bc_16;
    this.#confirmtimeF = dto.confirmtime_f;
    this.#confirmbyF = dto.confirmby_f;
  }

  get exportSalesPackingListId() {
    return this.#exportSalesPackingListId;
  }

  toModel() {
    return {
      exportSalesPackingListId: this.#exportSalesPackingListId,
      exportSalesPackingListCode: this.#exportSalesPackingListCode,
      exportSalesPackingListCodeTemp: this.#exportSalesPackingListCodeTemp,
      exportSalesPackingListDate: this.#exportSalesPackingListDate,
      exportSalesOrderId: this.#exportSalesOrderId,
      exportSalesOrderCode: this.#exportSalesOrderCode,
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
      warehouseId: this.#warehouseId,
      salesmanId: this.#salesmanId,
      shipping: this.#shipping,
      shippingNo: this.#shippingNo,
      shippingDate: this.#shippingDate,
      currencyId: this.#currencyId,
      currencyRate: this.#currencyRate,
      containerNo: this.#containerNo,
      sealNo: this.#sealNo,
      betNo: this.#betNo,
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
      total: this.#total,
      totalInv: this.#totalInv,
      totalPayFinish: this.#totalPayFinish,
      cretime: this.#cretime,
      creby: this.#creby,
      modtime: this.#modtime,
      modby: this.#modby,
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

class ExportSalesPackingListBc16Dto extends StandardDto {
  #exportSalesOrderAdvpayId;
  #exportSalesOrderId;
  #exportSalesAdvpayId;
  #exportSalesAdvpayCode;
  #totalDp;
  #totalUsed;
  #remaining;
  #isadv;
  #cretime;
  #creby;
  #modtime;
  #modby;

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
    this.#cretime = dto.cretime;
    this.#creby = dto.#creby;
    this.#modtime = dto.modtime;
    this.#modby = dto.#modby;
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
      cretime: this.#cretime,
      creby: this.#creby,
      modtime: this.#modtime,
      modby: this.#modby,
      ...super.toModel()
    };
  }
}

class ExportSalesPackingListDtDto extends StandardDto {
  #exportSalesPackingListDtId;
  #exportSalesPackingListId;
  #exportSalesOrderId;
  #exportSalesOrderDtId;
  #exportSalesOrderCode;
  #itemId;
  #itemCode;
  #itemName;
  #warehouseId;
  #qty;
  #qtyEsi;
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
  #taxPesen;
  #taxAmount;
  #total;

  constructor(dto) {
    super(dto);
    this.#exportSalesPackingListDtId = dto.export_sales_inv_bc16_id;
    this.#exportSalesPackingListId = dto.export_sales_packing_list_id;
    this.#exportSalesOrderId = dto.export_sales_order_id;
    this.#exportSalesOrderDtId = dto.export_sales_order_dt_id;
    this.#exportSalesOrderCode = dto.export_sales_order_code;
    this.#itemId = dto.item_id;
    this.#itemCode = dto.item_code;
    this.#itemName = dto.item_name;
    this.#warehouseId = dto.warehouse_id;
    this.#qty = dto.qty;
    this.#qtyEsi = dto.qty_esi;
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
    this.#discPersen2 = dto.disc_persen2;
    this.#discAmount2 = dto.disc_amount2;
    this.#disc3 = dto.disc3;
    this.#taxPesen = dto.tax_persen;
    this.#taxAmount = dto.tax_amount;
    this.#total = dto.total;
  }

  get exportSalesPackingListDtId() {
    return this.#exportSalesPackingListDtId;
  }

  toModel() {
    return {
      exportSalesPackingListDtId: this.#exportSalesPackingListDtId,
      exportSalesPackingListId: this.#exportSalesPackingListId,
      exportSalesOrderId: this.#exportSalesOrderId,
      exportSalesOrderDtId: this.#exportSalesOrderDtId,
      exportSalesOrderCode: this.#exportSalesOrderCode,
      itemId: this.#itemId,
      itemCode: this.#itemCode,
      itemName: this.#itemName,
      warehouseId: this.#warehouseId,
      qty: this.#qty,
      qtyEsi: this.#qtyEsi,
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
      taxPesen: this.#taxPesen,
      taxAmount: this.#taxAmount,
      total: this.#total,
      ...super.toModel()
    };
  }
}

class ExportSalesPackingListItemDtDto extends StandardDto {
  #exportSalesPackingListItemDtId;
  #exportSalesPackingListDtId;
  #exportSalesPackingListId;
  #exportSalesPackingListBc16Id;
  #itemStockDtId;
  #exportSalesOrderItemDtId;
  #itemId;
  #expDay;
  #expMonth;
  #expYear;
  #qty;
  #qtyI;

  constructor(dto) {
    super(dto);
    this.#exportSalesPackingListItemDtId = dto.export_sales_order_dt_id;
    this.#exportSalesPackingListDtId = dto.export_sales_packing_list_dt_id;
    this.#exportSalesPackingListId = dto.export_sales_packing_list_id;
    this.#exportSalesPackingListBc16Id = dto.export_sales_packing_list_bc16_id;
    this.#itemStockDtId = dto.item_stock_dt_id;
    this.#exportSalesOrderItemDtId = dto.export_sales_order_item_dt_id;
    this.#itemId = dto.item_id;
    this.#expDay = dto.exp_day;
    this.#expMonth = dto.exp_month;
    this.#expYear = dto.exp_year;
    this.#qty = dto.qty;
    this.#qtyI = dto.qty_i;
  }

  get exportSalesPackingListItemDtId() {
    return this.#exportSalesPackingListItemDtId;
  }

  toModel() {
    return {
      exportSalesPackingListItemDtId: this.#exportSalesPackingListItemDtId,
      exportSalesPackingListDtId: this.#exportSalesPackingListDtId,
      exportSalesPackingListId: this.#exportSalesPackingListId,
      exportSalesPackingListBc16Id: this.#exportSalesPackingListBc16Id,
      itemStockDtId: this.#itemStockDtId,
      exportSalesOrderItemDtId: this.#exportSalesOrderItemDtId,
      itemId: this.#itemId,
      expDay: this.#expDay,
      expMonth: this.#expMonth,
      expYear: this.#expYear,
      qty: this.#qty,
      qtyI: this.#qtyI,
      ...super.toModel()
    };
  }
}

class ExportSalesPackingListRejectDto extends StandardDto {
  #exportSalesPackingListRejectId;
  #exportPalesPackingListId;
  #note;
  #userId;
  #cretime;
  #creby;

  constructor(dto) {
    super(dto);
    this.#exportSalesPackingListRejectId = dto.export_sales_packing_list_reject_id;
    this.#exportPalesPackingListId = dto.export_sales_packing_list_id;
    this.#note = dto.note;
    this.#userId = dto.user_id;
    this.#cretime = dto.cretime;
    this.#creby = dto.creby;
  }

  get exportSalesPackingListRejectId() {
    return this.#exportSalesPackingListRejectId;
  }

  toModel() {
    return {
      exportSalesPackingListRejectId: this.#exportSalesPackingListRejectId,
      exportPalesPackingListId: this.#exportPalesPackingListId,
      note: this.#note,
      userId: this.#userId,
      cretime: this.#cretime,
      creby: this.#creby,
      ...super.toModel()
    };
  }
}

class ExportSalesPackingListRequestDto extends StandardDto {
  #exportSalesPackingListRequestId;
  #exportSalesPackingListId;
  #note;
  #userId;
  #statusRequest;
  #cretime;
  #creby;

  constructor(dto) {
    super(dto);
    this.#exportSalesPackingListRequestId = dto.export_sales_packing_list_request_id;
    this.#exportSalesPackingListId = dto.export_sales_packing_list_id;
    this.#note = dto.note;
    this.#userId = dto.user_id;
    this.#statusRequest = dto.status_request;
    this.#cretime = dto.cretime;
    this.#creby = dto.creby;
  }

  get exportSalesPackingListRequestId() {
    return this.#exportSalesPackingListRequestId;
  }

  toModel() {
    return {
      exportSalesPackingListRequestId: this.#exportSalesPackingListRequestId,
      exportSalesPackingListId: this.#exportSalesPackingListId,
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
  ExportSalesPackingListDto,
  ExportSalesPackingListBc16Dto,
  ExportSalesPackingListDtDto,
  ExportSalesPackingListItemDtDto,
  ExportSalesPackingListRejectDto,
  ExportSalesPackingListRequestDto
};
