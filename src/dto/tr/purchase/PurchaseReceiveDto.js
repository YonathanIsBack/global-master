import StandardDto from '../../StandardDto.js';

class PurchaseReceiveDto extends StandardDto {
  #purchaseReceiveId;
  #purchaseReceiveCode;
  #purchaseReceiveCodeTemp;
  #purchaseReceiveDate;
  #purchaseOrderId;
  #purchaseOrderCode;
  #traceId;
  #supInvNumber;
  #supInvTotal;
  #supInvDate;
  #supplierId;
  #deliveryMethod;
  #documentNumber;
  #deliveryDate;
  #warehouseId;
  #paymentTermId;
  #companyId;
  #shipping;
  #shippingNo;
  #shippingDate;
  #currencyId;
  #currencyRate;
  #driver;
  #ajuDate;
  #ajuNumber;
  #bc16;
  #bc16Rn;
  #blNumber;
  #licensePlate;
  #note;
  #status;
  #statusNext;
  #tinyint;
  #isFinish;
  #isvat;
  #port;
  #method;
  #totalPacking;
  #destination;
  #containerSize;
  #grossWeight;
  #regisNumber;
  #customesOffice;
  #submissionNumber;
  #storageLocation;
  #regisDate;
  #submissionDate;
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
  #confirmtime;
  #confirmby;
  #isedit;
  #isBc16;
  #confirmtimeF;
  #confirmbyF;

  constructor(dto) {
    super(dto);
    this.#purchaseReceiveId = dto.purchase_receive_id;
    this.#purchaseReceiveCode = dto.purchase_receive_code;
    this.#purchaseReceiveCodeTemp = dto.purchase_receive_code_temp;
    this.#purchaseReceiveDate = dto.purchase_receive_date;
    this.#purchaseOrderId = dto.purchase_order_id;
    this.#purchaseOrderCode = dto.purchase_order_code;
    this.#traceId = dto.trace_id;
    this.#supInvNumber = dto.sup_inv_number;
    this.#supInvTotal = dto.sup_inv_total;
    this.#supInvDate = dto.sup_inv_date;
    this.#supplierId = dto.supplier_id;
    this.#deliveryMethod = dto.delivery_method;
    this.#documentNumber = dto.document_number;
    this.#deliveryDate = dto.delivery_date;
    this.#warehouseId = dto.warehouse_id;
    this.#paymentTermId = dto.payment_term_id;
    this.#shipping = dto.shipping;
    this.#shippingNo = dto.shipping_no;
    this.#shippingDate = dto.shipping_date;
    this.#currencyId = dto.currency_id;
    this.#currencyRate = dto.currency_rate;
    this.#driver = dto.driver;
    this.#ajuDate = dto.aju_date;
    this.#ajuNumber = dto.aju_number;
    this.#bc16 = dto.bc_16;
    this.#bc16Rn = dto.bc_16_rn;
    this.#blNumber = dto.bl_number;
    this.#licensePlate = dto.license_plate;
    this.#note = dto.note;
    this.#status = dto.status;
    this.#statusNext = dto.status_next;
    this.#tinyint = dto.tinyint;
    this.#isFinish = dto.is_finish;
    this.#isvat = dto.isvat;
    this.#port = dto.port;
    this.#method = dto.method;
    this.#totalPacking = dto.total_packing;
    this.#destination = dto.destination;
    this.#containerSize = dto.container_size;
    this.#grossWeight = dto.gross_weight;
    this.#regisNumber = dto.regis_number;
    this.#customesOffice = dto.customes_office;
    this.#submissionNumber = dto.submission_number;
    this.#storageLocation = dto.storage_location;
    this.#regisDate = dto.regis_date;
    this.#submissionDate = dto.submission_date;
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
    this.#confirmtime = dto.confirmtime;
    this.#confirmby = dto.confirmby;
    this.#isedit = dto.isedit;
    this.#isBc16 = dto.is_bc_16;
    this.#confirmtimeF = dto.confirmtime_f;
    this.#confirmbyF = dto.confirmby_f;
  }

  get purchaseReceiveId() {
    return this.#purchaseReceiveId;
  }

  toModel() {
    return {
      purchaseReceiveId: this.#purchaseReceiveId,
      purchaseReceiveCode: this.#purchaseReceiveCode,
      purchaseReceiveCodeTemp: this.#purchaseReceiveCodeTemp,
      purchaseReceiveDate: this.#purchaseReceiveDate,
      purchaseOrderId: this.#purchaseOrderId,
      purchaseOrderCode: this.#purchaseOrderCode,
      traceId: this.#traceId,
      supInvNumber: this.#supInvNumber,
      supInvTotal: this.#supInvTotal,
      supInvDate: this.#supInvDate,
      supplierId: this.#supplierId,
      deliveryMethod: this.#deliveryMethod,
      documentNumber: this.#documentNumber,
      deliveryDate: this.#deliveryDate,
      warehouseId: this.#warehouseId,
      paymentTermId: this.#paymentTermId,
      shipping: this.#shipping,
      shippingNo: this.#shippingNo,
      shippingDate: this.#shippingDate,
      currencyId: this.#currencyId,
      currencyRate: this.#currencyRate,
      driver: this.#driver,
      ajuDate: this.#ajuDate,
      ajuNumber: this.#ajuNumber,
      bc16: this.#bc16,
      bc16Rn: this.#bc16Rn,
      blNumber: this.#blNumber,
      licensePlate: this.#licensePlate,
      note: this.#note,
      status: this.#status,
      statusNext: this.#statusNext,
      tinyint: this.#tinyint,
      isFinish: this.#isFinish,
      isvat: this.#isvat,
      port: this.#port,
      method: this.#method,
      totalPacking: this.#totalPacking,
      destination: this.#destination,
      containerSize: this.#containerSize,
      grossWeight: this.#grossWeight,
      regisNumber: this.#regisNumber,
      customesOffice: this.#customesOffice,
      submissionNumber: this.#submissionNumber,
      storageLocation: this.#storageLocation,
      regisDate: this.#regisDate,
      submissionDate: this.#submissionDate,
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

class PurchaseReceiveDtDto extends StandardDto {
  #purchaseReceiveDtId;
  #purchaseReceiveId;
  #purchaseOrderId;
  #purchaseOrderDtId;
  #purchaseOrderCode;
  #itemId;
  #itemCode;
  #itemName;
  #qty;
  #qtyPt;
  #qtyPi;
  #qtyOrder;
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
  #total;

  constructor(dto) {
    super(dto);
    this.#purchaseReceiveDtId = dto.purchase_receive_dt_id;
    this.#purchaseReceiveId = dto.purchase_receive_id;
    this.#purchaseOrderId = dto.purchase_order_id;
    this.#purchaseOrderDtId = dto.purchase_order_dt_id;
    this.#purchaseOrderCode = dto.purchase_order_code;
    this.#itemId = dto.item_id;
    this.#itemCode = dto.item_code;
    this.#itemName = dto.item_name;
    this.#qty = dto.qty;
    this.#qtyPt = dto.qty_pt;
    this.#qtyPi = dto.qty_pi;
    this.#qtyOrder = dto.qty_order;
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
    this.#total = dto.total;
  }
  get purchaseReceiveDtId() {
    return this.#purchaseReceiveDtId;
  }
  toModel() {
    return {
      purchaseReceiveDtId: this.#purchaseReceiveDtId,
      purchaseReceiveId: this.#purchaseReceiveId,
      purchaseOrderId: this.#purchaseOrderId,
      purchaseOrderDtId: this.#purchaseOrderDtId,
      purchaseOrderCode: this.#purchaseOrderCode,
      itemId: this.#itemId,
      itemCode: this.#itemCode,
      itemName: this.#itemName,
      qty: this.#qty,
      qtyPt: this.#qtyPt,
      qtyPi: this.#qtyPi,
      qtyOrder: this.#qtyOrder,
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
      total: this.#total,
      ...super.toModel()
    };
  }
}

class PurchaseReceiveItemDtDto extends StandardDto {
  #purchaseReceiveItemDtId;
  #purchaseReceiveDtId;
  #purchaseReceiveId;
  #itemStockDtId;
  #purchaseOrderItemDtId;
  #itemId;
  #expDay;
  #expMonth;
  #expYear;
  #qty;
  #qtyI;
  constructor(dto) {
    super(dto);
    this.#purchaseReceiveItemDtId = dto.purchase_receive_item_dt_id;
    this.#purchaseReceiveDtId = dto.purchase_receive_dt_id;
    this.#purchaseReceiveId = dto.purchase_receive_id;
    this.#itemStockDtId = dto.item_stock_dt_id;
    this.#purchaseOrderItemDtId = dto.purchase_order_item_dt_id;
    this.#itemId = dto.item_id;
    this.#expDay = dto.exp_day;
    this.#expMonth = dto.exp_month;
    this.#expYear = dto.exp_year;
    this.#qty = dto.qty;
    this.#qtyI = dto.qty_i;
  }
  get purchaseReceiveItemDtId() {
    return this.#purchaseReceiveItemDtId;
  }
  toModel() {
    return {
      purchaseReceiveItemDtId: this.#purchaseReceiveItemDtId,
      purchaseReceiveDtId: this.#purchaseReceiveDtId,
      purchaseReceiveId: this.#purchaseReceiveId,
      itemStockDtId: this.#itemStockDtId,
      purchaseOrderItemDtId: this.#purchaseOrderItemDtId,
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

class PurchaseReceiveRejectDto extends StandardDto {
  #purchaseReceiveRejectId;
  #purchaseReceiveId;
  #note;
  #userId;

  constructor(dto) {
    super(dto);
    this.#purchaseReceiveRejectId = dto.purchase_receive_reject_id;
    this.#purchaseReceiveId = dto.purchase_receive_id;
    this.#note = dto.note;
    this.#userId = dto.userId;
  }
  get purchaseReceiveRejectId() {
    return this.#purchaseReceiveRejectId;
  }
  toModel() {
    return {
      purchaseReceiveRejectId: this.#purchaseReceiveRejectId,
      purchaseReceiveId: this.#purchaseReceiveId,
      note: this.#note,
      userId: this.#userId,
      ...super.toModel()
    };
  }
}

class PurchaseReceiveRequestDto extends StandardDto {
  #purchaseReceiveRequestId;
  #purchaseReceiveId;
  #note;
  #statusRequest;
  #userId;

  constructor(dto) {
    super(dto);
    this.purchaseReceiveRequestId = dto.purchase_receive_request_id;
    this.purchaseReceiveId = dto.purchase_receive_id;
    this.#note = dto.note;
    this.#userId = dto.user_id;
    this.#statusRequest = dto.status_request;
  }
  get purchaseReceiveRequestId() {
    return this.purchaseReceiveRequestId;
  }
  toModel() {
    return {
      purchaseReceiveRequestId: this.#purchaseReceiveRequestId,
      purchaseReceiveId: this.#purchaseReceiveId,
      note: this.#note,
      userId: this.#userId,
      statusRequest: this.#statusRequest,
      ...super.toModel()
    };
  }
}
export { PurchaseReceiveDto, PurchaseReceiveDtDto, PurchaseReceiveItemDtDto, PurchaseReceiveRejectDto, PurchaseReceiveRequestDto };
