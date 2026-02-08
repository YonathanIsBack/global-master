import ObjectUtil from '../../../util/ObjectUtil.js';
import StandardDto from '../../StandardDto.js';

class ImportReceiveDto extends StandardDto {
  #importReceiveId;
  #importReceiveCode;
  #importReceiveCodeTemp;
  #importReceiveDate;
  #importOrderId;
  #importOrderCode;
  #supplierInvNo;
  #supplierInvDate;
  #traceId;
  #supplierId;
  #warehouseId;
  #paymentTermId;
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
  #bcStatus;
  #bc16Rn;
  #blNumber;
  #licensePlate;
  #note;
  #status;
  #statusNext;
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
    this.#importReceiveId = dto.import_receive_id;
    this.#importReceiveCode = dto.import_receive_code;
    this.#importReceiveCodeTemp = dto.import_receive_code_temp;
    this.#importReceiveDate = ObjectUtil.defaultEmptyString(dto.import_receive_date);
    this.#importOrderId = ObjectUtil.defaultEmptyString(dto.import_order_id);
    this.#importOrderCode = dto.import_order_code;
    this.#supplierInvNo = dto.supplier_inv_no;
    this.#supplierInvDate = ObjectUtil.defaultEmptyString(dto.supplier_inv_date);
    this.#traceId = dto.trace_id;
    this.#supplierId = ObjectUtil.defaultEmptyString(dto.supplier_id);
    this.#warehouseId = ObjectUtil.defaultEmptyString(dto.warehouse_id);
    this.#paymentTermId = ObjectUtil.defaultEmptyString(dto.payment_term_id);
    this.#shippingId = ObjectUtil.defaultEmptyString(dto.shipping_id);
    this.#shipping = dto.shipping;
    this.#shippingNo = dto.shipping_no;
    this.#shippingDate = ObjectUtil.defaultEmptyString(dto.shipping_date);
    this.#currencyId = ObjectUtil.defaultEmptyString(dto.currency_id);
    this.#currencyRate = dto.currency_rate;
    this.#driver = dto.driver;
    this.#ajuDate = ObjectUtil.defaultEmptyString(dto.aju_date);
    this.#ajuNumber = dto.aju_number;
    this.#bc16 = dto.bc_16;
    this.#bcStatus = dto.bc_status;
    this.#bc16Rn = dto.bc_16_rn;
    this.#blNumber = dto.bl_number;
    this.#licensePlate = dto.license_plate;
    this.#note = dto.note;
    this.#status = dto.status;
    this.#statusNext = dto.status_next;
    this.#isFinish = dto.is_finish;
    this.#isvat = dto.isvat;
    this.#port = dto.port;
    this.#method = dto.method;
    this.#totalPacking = ObjectUtil.defaultEmptyString(dto.total_packing);
    this.#destination = dto.destination;
    this.#containerSize = dto.container_size;
    this.#grossWeight = dto.gross_weight;
    this.#regisNumber = dto.regis_number;
    this.#customesOffice = dto.customes_office;
    this.#submissionNumber = dto.submission_number;
    this.#storageLocation = dto.storage_location;
    this.#regisDate = ObjectUtil.defaultEmptyString(dto.regis_date);
    this.#submissionDate = ObjectUtil.defaultEmptyString(dto.submission_date);
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
    this.#isedit = dto.isedit;
    this.#confirmtime = dto.confirmtime;
    this.#confirmby = dto.confirmby;
    this.#isedit = dto.isedit;
    this.#isBc16 = dto.is_bc_16;
    this.#confirmtimeF = dto.confirmtime_f;
    this.#confirmbyF = dto.confirmby_f;
  }

  get importReceiveId() {
    return this.#importReceiveId;
  }

  toModel() {
    return {
      importReceiveId: this.#importReceiveId,
      importReceiveCode: this.#importReceiveCode,
      importReceiveCodeTemp: this.#importReceiveCodeTemp,
      importReceiveDate: this.#importReceiveDate,
      importOrderId: this.#importOrderId,
      importOrderCode: this.#importOrderCode,
      supplierInvNo: this.#supplierInvNo,
      supplierInvDate: this.#supplierInvDate,
      traceId: this.#traceId,
      supplierId: this.#supplierId,
      warehouseId: this.#warehouseId,
      paymentTermId: this.#paymentTermId,
      shippingId: this.#shippingId,
      shipping: this.#shipping,
      shippingNo: this.#shippingNo,
      shippingDate: this.#shippingDate,
      currencyId: this.#currencyId,
      currencyRate: this.#currencyRate,
      driver: this.#driver,
      ajuDate: this.#ajuDate,
      ajuNumber: this.#ajuNumber,
      bc_16: this.#bc16,
      bc_status: this.#bcStatus,
      bc_16_rn: this.#bc16Rn,
      blNumber: this.#blNumber,
      licensePlate: this.#licensePlate,
      note: this.#note,
      status: this.#status,
      statusNext: this.#statusNext,
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
      isedit: this.#isedit,
      confirmtime: this.#confirmtime,
      confirmby: this.#confirmby,
      isedit: this.#isedit,
      is_bc_16: this.#isBc16,
      confirmtimeF: this.#confirmtimeF,
      confirmbyF: this.#confirmbyF,
      ...super.toModel()
    };
  }
}

class ImportReceiveDtDto extends StandardDto {
  #importReceiveDtId;
  #importReceiveId;
  #importOrderId;
  #importOrderDtId;
  #importOrderCode;
  #itemId;
  #itemCode;
  #itemName;
  #qty;
  #qtyIt;
  #qtyIi;
  #qtyOrder;
  #price;
  #price2;
  #priceAvg;
  #currencyId;
  #currencyRate;
  #discPersen;
  #discAmount;
  #disc3;
  #taxPersen;
  #taxAmount;
  #total;

  constructor(dto) {
    super(dto);
    this.#importReceiveDtId = dto.import_receive_dt_id;
    this.#importReceiveId = dto.import_receive_id;
    this.#importOrderId = dto.import_order_id;
    this.#importOrderDtId = dto.import_order_dt_id;
    this.#importOrderCode = dto.import_order_code;
    this.#itemId = dto.item_id;
    this.#itemCode = dto.item_code;
    this.#itemName = dto.item_name;
    this.#qty = dto.qty;
    this.#qtyIt = dto.qty_it;
    this.#qtyIi = dto.qty_ii;
    this.#qtyOrder = dto.qty_order;
    this.#price = dto.price;
    this.#price2 = dto.price2;
    this.#priceAvg = dto.price_avg;
    this.#currencyId = dto.currency_id;
    this.#currencyRate = dto.currency_rate;
    this.#discPersen = dto.disc_persen;
    this.#discAmount = dto.disc_amount;
    this.#disc3 = dto.disc3;
    this.#taxPersen = dto.tax_persen;
    this.#taxAmount = dto.tax_amount;
    this.#total = dto.total;
  }
  get importReceiveDtId() {
    return this.#importReceiveDtId;
  }
  toModel() {
    return {
      importReceiveDtId: this.#importReceiveDtId,
      importReceiveId: this.#importReceiveId,
      importOrderId: this.#importOrderId,
      importOrderDtId: this.#importOrderDtId,
      importOrderCode: this.#importOrderCode,
      itemId: this.#itemId,
      itemCode: this.#itemCode,
      itemName: this.#itemName,
      qty: this.#qty,
      qtyIt: this.#qtyIt,
      qtyIi: this.#qtyIi,
      qtyOrder: this.#qtyOrder,
      price: this.#price,
      price2: this.#price2,
      priceAvg: this.#priceAvg,
      currencyId: this.#currencyId,
      currencyRate: this.#currencyRate,
      discPersen: this.#discPersen,
      discAmount: this.#discAmount,
      disc3: this.#disc3,
      taxPersen: this.#taxPersen,
      taxAmount: this.#taxAmount,
      total: this.#total,
      ...super.toModel()
    };
  }
}

class ImportReceiveItemDtDto extends StandardDto {
  #importReceiveItemDtId;
  #importReceiveDtId;
  #importReceiveId;
  #importOrderItemDtId;
  #itemId;
  #expDay;
  #expMonth;
  #expYear;
  #qty;
  #qtyI;
  #qtySt;

  constructor(dto) {
    super(dto);
    this.#importReceiveItemDtId = dto.import_receive_dt_id;
    this.#importReceiveDtId = dto.import_receive_id;
    this.#importReceiveId = dto.import_receive_id;
    this.#importOrderItemDtId = dto.import_order_item_dt_id;
    this.#itemId = dto.item_id;
    this.#expDay = dto.exp_day;
    this.#expMonth = dto.exp_month;
    this.#expYear = dto.exp_year;
    this.#qty = dto.qty;
    this.#qtyI = dto.qty_i;
    this.#qtySt = dto.qty_st;
  }
  get importReceiveItemDtId() {
    return this.#importReceiveItemDtId;
  }
  toModel() {
    return {
      importReceiveItemDtId: this.#importReceiveItemDtId,
      importReceiveDtId: this.#importReceiveDtId,
      importReceiveId: this.#importReceiveId,
      importOrderItemDtId: this.#importOrderItemDtId,
      itemId: this.#itemId,
      expDay: this.#expDay,
      expMonth: this.#expMonth,
      expYear: this.#expYear,
      qty: this.#qty,
      qtyI: this.#qtyI,
      qtySt: this.#qtySt,
      ...super.toModel()
    };
  }
}

class ImportReceiveRejectDto extends StandardDto {
  #importReceiveRejectId;
  #importReceiveId;
  #note;
  #userId;
  constructor(dto) {
    super(dto);
    this.#importReceiveRejectId = dto.import_receive_reject_id;
    this.#importReceiveId = dto.import_receive_id;
    this.#note = dto.note;
    this.#userId = dto.userId;
  }
  get importReceiveRejectId() {
    return this.#importReceiveRejectId;
  }
  toModel() {
    return {
      importReceiveRejectId: this.#importReceiveRejectId,
      importReceiveId: this.#importReceiveId,
      note: this.#note,
      userId: this.#userId,
      ...super.toModel()
    };
  }
}

class ImportReceiveRequestDto extends StandardDto {
  #importReceiveRequestId;
  #importReceiveId;
  #note;
  #statusRequest;
  #userId;

  constructor(dto) {
    super(dto);
    this.#importReceiveRequestId = dto.import_receive_request_id;
    this.importReceiveId = dto.import_receive_id;
    this.#note = dto.note;
    this.#userId = dto.userId;
    this.#statusRequest = dto.status_request;
  }
  get importReceiveRequestId() {
    return this.#importReceiveRequestId;
  }
  toModel() {
    return {
      importReceiveRequestId: this.#importReceiveRequestId,
      importReceiveId: this.#importReceiveId,
      note: this.#note,
      userId: this.#userId,
      statusRequest: this.#statusRequest,
      ...super.toModel()
    };
  }
}

export {
  ImportReceiveDto,
  ImportReceiveDtDto,
  ImportReceiveItemDtDto,
  ImportReceiveRejectDto,
  ImportReceiveRequestDto
};
