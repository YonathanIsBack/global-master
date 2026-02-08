import ObjectUtil from '../../../util/ObjectUtil.js';
import StandardDto from '../../StandardDto.js';

class ImportStockTransferDto extends StandardDto {
  #importStockTransferId;
  #importStockTransferCode;
  #importStockTransferCodeTemp;
  #importStockTransferDate;
  #traceId;
  #supplierId;
  #warehouseId;
  #warehouseIdFrom;
  #warehouseIdTo;
  #importOrderId;
  #importOrderCode;
  #importReceiveId;
  #importReceiveCode;
  #ajuNumber;
  #ajuDate;
  #shipping;
  #shippingNo;
  #shippingDate;
  #currencyId;
  #currencyRate;
  #driver;
  #bc16;
  #bc16Rn;
  #licensePlate;
  #methodTransfer;
  #note;
  #status;
  #statusNext;
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
  #coaPibId;
  #coaBankId;
  #totalPib;
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
    this.#importStockTransferId = dto.import_stock_transfer_id;
    this.#importStockTransferCode = dto.import_stock_transfer_code;
    this.#importStockTransferCodeTemp = dto.import_stock_transfer_code_temp;
    this.#importStockTransferDate = ObjectUtil.defaultEmptyString(dto.import_stock_transfer_date);
    this.#traceId = dto.trace_id;
    this.#supplierId = ObjectUtil.defaultEmptyString(dto.supplier_id);
    this.#warehouseId = ObjectUtil.defaultEmptyString(dto.warehouse_id);
    this.#warehouseIdFrom = ObjectUtil.defaultEmptyString(dto.warehouse_id_from);
    this.#warehouseIdTo = ObjectUtil.defaultEmptyString(dto.warehouse_id_to);
    this.#importOrderId = ObjectUtil.defaultEmptyString(dto.import_order_id);
    this.#importOrderCode = dto.import_order_code;
    this.#importReceiveId = ObjectUtil.defaultEmptyString(dto.import_receive_id);
    this.#importReceiveCode = dto.import_receive_code;
    this.#ajuNumber = dto.aju_number;
    this.#ajuDate = ObjectUtil.defaultEmptyString(dto.aju_date);
    this.#shipping = dto.shipping;
    this.#shippingNo = dto.shipping_no;
    this.#shippingDate = ObjectUtil.defaultEmptyString(dto.shipping_date);
    this.#currencyId = ObjectUtil.defaultEmptyString(dto.currency_id);
    this.#currencyRate = dto.currency_rate;
    this.#driver = dto.driver;
    this.#bc16 = dto.bc_16;
    this.#bc16Rn = dto.bc_16_rn;
    this.#licensePlate = dto.license_plate;
    this.#methodTransfer = dto.method_transfer;
    this.#note = dto.note;
    this.#status = dto.status;
    this.#statusNext = dto.status_next;
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
    this.#coaPibId = ObjectUtil.defaultEmptyString(dto.coa_pib_id);
    this.#coaBankId = ObjectUtil.defaultEmptyString(dto.coa_bank_id);
    this.#totalPib = ObjectUtil.defaultEmptyString(dto.total_pib);
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

  get importStockTransferId() {
    return this.#importStockTransferId;
  }

  toModel() {
    return {
      importStockTransferId: this.#importStockTransferId,
      importStockTransferCode: this.#importStockTransferCode,
      importStockTransferCodeTemp: this.#importStockTransferCodeTemp,
      importStockTransferDate: this.#importStockTransferDate,
      traceId: this.#traceId,
      supplierId: this.#supplierId,
      warehouseId: this.#warehouseId,
      warehouseIdFrom: this.#warehouseIdFrom,
      warehouseIdTo: this.#warehouseIdTo,
      importOrderId: this.#importOrderId,
      importOrderCode: this.#importOrderCode,
      importReceiveId: this.#importReceiveId,
      importReceiveCode: this.#importReceiveCode,
      ajuNumber: this.#ajuNumber,
      ajuDate: this.#ajuDate,
      shipping: this.#shipping,
      shippingNo: this.#shippingNo,
      shippingDate: this.#shippingDate,
      currencyId: this.#currencyId,
      currencyRate: this.#currencyRate,
      driver: this.#driver,
      bc_16: this.#bc16,
      bc_16_rn: this.#bc16Rn,
      licensePlate: this.#licensePlate,
      methodTransfer: this.#methodTransfer,
      note: this.#note,
      status: this.#status,
      statusNext: this.#statusNext,
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
      coaPibId: this.#coaPibId,
      coaBankId: this.#coaBankId,
      totalPib: this.#totalPib,
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

class ImportStockTransferDtDto extends StandardDto {
  #importStockTransferDtId;
  #importStockTransferId;
  #bc16Id;
  #importReceiveId;
  #importReceiveDtId;
  #importReceiveCode;
  #importOrderId;
  #importOrderCode;
  #submissionNo;
  #itemId;
  #itemCode;
  #itemName;
  #bc16;
  #qty;
  #qtyReceive;
  #qtyRemain;
  #qtyStock;
  #qtyClearance;
  #qtyIc;
  #price;
  #price2;
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
    this.#importStockTransferDtId = dto.import_stock_transfer_dt_id;
    this.#importStockTransferId = dto.import_stock_transfer_id;
    this.#bc16Id = dto.bc_16_id;
    this.#importReceiveId = dto.import_receive_id;
    this.#importReceiveDtId = dto.import_receive_dt_id;
    this.#importReceiveCode = dto.import_receive_code;
    this.#importOrderId = dto.import_order_id;
    this.#importOrderCode = dto.import_order_code;
    this.#submissionNo = dto.submission_no;
    this.#itemId = dto.item_id;
    this.#itemCode = dto.item_code;
    this.#itemName = dto.item_name;
    this.#bc16 = dto.bc16;
    this.#qty = dto.qty;
    this.#qtyReceive = dto.qty_receive;
    this.#qtyRemain = dto.qty_remain;
    this.#qtyStock = ObjectUtil.defaultEmptyString(dto.qty_stock);
    this.#qtyClearance = ObjectUtil.defaultEmptyString(dto.qty_clearance);
    this.#qtyIc = dto.qty_ic;
    this.#price = dto.price;
    this.#price2 = dto.price2;
    this.#currencyId = dto.currency_id;
    this.#currencyRate = dto.currency_rate;
    this.#discPersen = dto.disc_persen;
    this.#discAmount = dto.disc_amount;
    this.#disc3 = dto.disc3;
    this.#taxPersen = dto.tax_persen;
    this.#taxAmount = dto.tax_amount;
    this.#total = dto.total;
  }
  get importStockTransferDtId() {
    return this.#importStockTransferDtId;
  }
  toModel() {
    return {
      importStockTransferDtId: this.#importStockTransferDtId,
      importStockTransferId: this.#importStockTransferId,
      bc_16_id: this.#bc16Id,
      importReceiveId: this.#importReceiveId,
      importReceiveDtId: this.#importReceiveDtId,
      importReceiveCode: this.#importReceiveCode,
      importOrderId: this.#importOrderId,
      importOrderCode: this.#importOrderCode,
      submissionNo: this.#submissionNo,
      itemId: this.#itemId,
      itemCode: this.#itemCode,
      itemName: this.#itemName,
      bc16: this.#bc16,
      qty: this.#qty,
      qtyReceive: this.#qtyReceive,
      qtyRemain: this.#qtyRemain,
      qtyStock: this.#qtyStock,
      qtyClearance: this.#qtyClearance,
      qtyIc: this.#qtyIc,
      price: this.#price,
      price2: this.#price2,
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

class ImportStockTransferItemDtDto extends StandardDto {
  #importStockTransferItemDtId;
  #importStockTransferDtId;
  #importStockTransferId;
  #importReceiveItemDtId;
  #bc16Id;
  #bc16DtId;
  #itemId;
  #expDay;
  #expMonth;
  #expYear;
  #qty;
  #qtyC;

  constructor(dto) {
    super(dto);
    this.#importStockTransferItemDtId = dto.import_stock_transfer_item_dt_id;
    this.#importStockTransferDtId = dto.import_stock_transfer_dt_id;
    this.#importStockTransferId = dto.import_stock_transfer_id;
    this.#importReceiveItemDtId = dto.import_receive_item_dt_id;
    this.#bc16Id = dto.bc_16_id;
    this.#bc16DtId = dto.bc_16_dt_id;
    this.#itemId = dto.item_id;
    this.#expDay = dto.exp_day;
    this.#expMonth = dto.exp_month;
    this.#expYear = dto.exp_year;
    this.#qty = dto.qty;
  }
  get importStockTransferItemDtId() {
    return this.#importStockTransferItemDtId;
  }
  toModel() {
    return {
      importStockTransferItemDtId: this.#importStockTransferItemDtId,
      importStockTransferDtId: this.#importStockTransferDtId,
      importStockTransferId: this.#importStockTransferId,
      importReceiveItemDtId: this.#importReceiveItemDtId,
      bc_16_id: this.#bc16Id,
      bc_16_dt_id: this.#bc16DtId,
      itemId: this.#itemId,
      itemId: this.#itemId,
      expDay: this.#expDay,
      expMonth: this.#expMonth,
      expYear: this.#expYear,
      qty: this.#qty
    };
  }
}

class ImportStockTransferRejectDto extends StandardDto {
  importStockTransferRejectId;
  importStockTransferId;
  #note;
  #userId;
  #cretime;
  #creby;

  constructor(dto) {
    super(dto);
    this.importStockTransferRejectId = dto.import_stock_transfer_reject_id;
    this.importStockTransferId = dto.import_stock_transfer_id;
    this.#note = dto.note;
    this.#userId = dto.userId;
    this.#cretime = dto.cretime;
    this.#creby = dto.creby;
  }
  get importStockTransferRejectId() {
    return this.importStockTransferRejectId;
  }
  toModel() {
    return {
      importStockTransferRejectId: this.importStockTransferRejectId,
      importStockTransferId: this.importStockTransferId,
      note: this.#note,
      userId: this.#userId,
      cretime: this.#cretime,
      creby: this.#creby,
      ...super.toModel()
    };
  }
}

class ImportStockTransferRequestDto extends StandardDto {
  #importStockTransferRequestId;
  #importStockTransferId;
  #note;
  #statusRequest;
  #userId;
  #cretime;
  #creby;

  constructor(dto) {
    super(dto);
    this.#importStockTransferRequestId = dto.import_stock_transfer_request_id;
    this.importReturnId = dto.import_stock_transfer_id;
    this.#note = dto.note;
    this.#userId = dto.userId;
    this.#statusRequest = dto.status_request;
    this.#cretime = dto.cretime;
    this.#creby = dto.creby;
  }
  get importStockTransferRequestId() {
    return this.#importStockTransferRequestId;
  }
  toModel() {
    return {
      importStockTransferRequestId: this.#importStockTransferRequestId,
      importStockTransferId: this.#importStockTransferId,
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
  ImportStockTransferDto,
  ImportStockTransferDtDto,
  ImportStockTransferItemDtDto,
  ImportStockTransferRejectDto,
  ImportStockTransferRequestDto
};
