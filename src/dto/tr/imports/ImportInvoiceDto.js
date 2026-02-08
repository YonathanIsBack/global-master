import ObjectUtil from '../../../util/ObjectUtil.js';
import StandardDto from '../../StandardDto.js';

class ImportInvoiceDto extends StandardDto {
  #importInvId;
  #importInvCode;
  #importInvCodeTemp;
  #importInvDate;
  #importOrderId;
  #importOrderCode;
  #importReceiveId;
  #importReceiveCode;
  #importAdvpayId;
  #traceId;
  #warehouseId;
  #paymentTermId;
  #dueDate;
  #supplierId;
  #suppInvNo;
  #suppInvDate;
  #suppInvTotal;
  #bc16;
  #bcStatus;
  #ajuNumber;
  #ajuDate;
  #customesOffice;
  #regisDate;
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
  #shippingPrice;
  #handlingPrice;
  #paymentCode;
  #total;
  #totalAdvpay;
  #totalAdvpayPayment;
  #totalCreditNote;
  #totalCreditNotePayment;
  #totalPay;
  #totalReturn;
  #sisaPay;
  #pphPersen;
  #pphAmount;
  #status;
  #statusNext;
  #isFinish;
  #note;
  #confirmtime;
  #confirmby;
  #isEdit;
  #type;
  #confirmtimeF;
  #confirmbyF;

  constructor(dto) {
    super(dto);
    this.#importInvId = dto.import_inv_id;
    this.#importInvCode = dto.import_inv_code;
    this.#importInvCodeTemp = dto.import_inv_code_temp;
    this.#importInvDate = dto.import_inv_date;
    this.#importOrderId = ObjectUtil.defaultEmptyString(dto.import_order_id);
    this.#importOrderCode = dto.import_order_code;
    this.#importReceiveId = ObjectUtil.defaultEmptyString(dto.import_receive_id);
    this.#importReceiveCode = dto.import_receive_code;
    this.#importAdvpayId = ObjectUtil.defaultEmptyString(dto.import_advpay_id);
    this.#traceId = dto.trace_id;
    this.#warehouseId = ObjectUtil.defaultEmptyString(dto.warehouse_id);
    this.#paymentTermId = ObjectUtil.defaultEmptyString(dto.payment_term_id);
    this.#dueDate = ObjectUtil.defaultEmptyString(dto.due_date);
    this.#supplierId = ObjectUtil.defaultEmptyString(dto.supplier_id);
    this.#suppInvNo = dto.supp_inv_no;
    this.#suppInvDate = ObjectUtil.defaultEmptyString(dto.supp_inv_date);
    this.#suppInvTotal = dto.supp_inv_total;
    this.#bc16 = dto.bc_16;
    this.#bcStatus = dto.bc_status;
    this.#ajuNumber = dto.aju_number;
    this.#ajuDate = ObjectUtil.defaultEmptyString(dto.aju_date);
    this.#customesOffice = dto.customes_office;
    this.#regisDate = ObjectUtil.defaultEmptyString(dto.regis_date);
    this.#isvat = dto.isvat;
    this.#vatNo = dto.vat_no;
    this.#vatDate = ObjectUtil.defaultEmptyString(dto.vat_date);
    this.#currencyId = ObjectUtil.defaultEmptyString(dto.currency_id);
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
    this.#shippingPrice = dto.shipping_price;
    this.#handlingPrice = dto.handling_price;
    this.#paymentCode = dto.payment_code;
    this.#total = dto.total;
    this.#totalAdvpay = dto.total_advpay;
    this.#totalAdvpayPayment = dto.total_advpay_payment;
    this.#totalCreditNote = dto.total_credit_note;
    this.#totalCreditNotePayment = dto.total_credit_note_payment;
    this.#totalPay = dto.total_pay;
    this.#totalReturn = dto.total_return;
    this.#sisaPay = dto.sisa_pay;
    this.#pphPersen = dto.pph_persen;
    this.#pphAmount = dto.pph_amount;
    this.#status = dto.status;
    this.#statusNext = dto.status_next;
    this.#isFinish = dto.is_finish;
    this.#note = dto.note;
    this.#confirmtime = dto.confirmtime;
    this.#confirmby = dto.confirmby;
    this.#isEdit = dto.isedit;
    this.#type = dto.type;
    this.#confirmtimeF = dto.confirmtime_f;
    this.#confirmbyF = dto.confirmby_f;
  }

  get importInvId() {
    return this.#importInvId;
  }

  toModel() {
    return {
      importInvId: this.#importInvId,
      importInvCode: this.#importInvCode,
      importInvCodeTemp: this.#importInvCodeTemp,
      importInvDate: this.#importInvDate,
      importOrderId: this.#importOrderId,
      importOrderCode: this.#importOrderCode,
      importReceiveId: this.#importReceiveId,
      importReceiveCode: this.#importReceiveCode,
      importAdvpayId: this.#importAdvpayId,
      traceId: this.#traceId,
      warehouseId: this.#warehouseId,
      paymentTermId: this.#paymentTermId,
      dueDate: this.#dueDate,
      supplierId: this.#supplierId,
      suppInvNo: this.#suppInvNo,
      suppInvDate: this.#suppInvDate,
      suppInvTotal: this.#suppInvTotal,
      bc16: this.#bc16,
      bcStatus: this.#bcStatus,
      ajuNumber: this.#ajuNumber,
      ajuDate: this.#ajuDate,
      customesOffice: this.#customesOffice,
      regisDate: this.#regisDate,
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
      shippingPrice: this.#shippingPrice,
      handlingPrice: this.#handlingPrice,
      paymentCode: this.#paymentCode,
      total: this.#total,
      totalAdvpay: this.#totalAdvpay,
      totalAdvpayPayment: this.#totalAdvpayPayment,
      totalCreditNote: this.#totalCreditNote,
      totalCreditNotePayment: this.#totalCreditNotePayment,
      totalPay: this.#totalPay,
      totalReturn: this.#totalReturn,
      sisaPay: this.#sisaPay,
      pphPersen: this.#pphPersen,
      pphAmount: this.#pphAmount,
      status: this.#status,
      statusNext: this.#statusNext,
      isFinish: this.#isFinish,
      note: this.#note,
      confirmtime: this.#confirmtime,
      confirmby: this.#confirmby,
      isEdit: this.#isEdit,
      type: this.#type,
      confirmtimeF: this.#confirmtimeF,
      confirmbyF: this.#confirmbyF,
      ...super.toModel()
    };
  }
}

class ImportInvoiceAdvancePayDto extends StandardDto {
  #importInvAdvpayId;
  #importInvId;
  #importAdvpayId;
  #importAdvpayCode;
  #totalDp;
  #totalUsed;
  #remaining;
  #isorder;
  #type;

  constructor(dto) {
    super(dto);
    this.#importInvAdvpayId = dto.import_advpay_dt_id;
    this.#importInvId = dto.import_inv_id;
    this.#importAdvpayId = dto.import_advpay_id;
    this.#importAdvpayCode = dto.import_advpay_code;
    this.#totalDp = dto.total_dp;
    this.#totalUsed = dto.total_used;
    this.#remaining = dto.remaining;
    this.#isorder = dto.isorder;
    this.#type = dto.type;
  }

  get importInvAdvpayId() {
    return this.#importInvAdvpayId;
  }

  toModel() {
    return {
      importInvAdvpayId: this.#importInvAdvpayId,
      importInvId: this.#importInvId,
      importAdvpayId: this.#importAdvpayId,
      importAdvpayCode: this.#importAdvpayCode,
      totalDp: this.#totalDp,
      totalUsed: this.#totalUsed,
      remaining: this.#remaining,
      isorder: this.#isorder,
      type: this.#type,
      ...super.toModel()
    };
  }
}

class ImportInvoiceCreditNoteDto extends StandardDto {
  #importInvCreditNoteId;
  #importInvId;
  #importCreditNoteId;
  #importCreditNoteName;
  #importCreditNoteCode;
  #traceId;
  #isorder;
  #nominal;
  #used;
  #isinv;
  #confirmtime;
  #confirmby;

  constructor(dto) {
    super(dto);
    this.#importInvCreditNoteId = dto.import_inv_credit_note_id;
    this.#importInvId = dto.import_inv_id;
    this.#importCreditNoteId = dto.import_credit_note_id;
    this.#importCreditNoteName = dto.import_credit_note_name;
    this.#importCreditNoteCode = dto.import_credit_note_code;
    this.#traceId = dto.trace_id;
    this.#isorder = dto.isorder;
    this.#nominal = dto.nominal;
    this.#used = dto.used;
    this.#isinv = dto.isinv;
    this.#confirmtime = dto.confirmtime;
    this.#confirmby = dto.confirmby;
  }

  get importInvCreditNoteId() {
    return this.#importInvCreditNoteId;
  }

  toModel() {
    return {
      importInvCreditNoteId: this.#importInvCreditNoteId,
      importInvId: this.#importInvId,
      importCreditNoteId: this.#importCreditNoteId,
      importCreditNoteName: this.#importCreditNoteName,
      importCreditNoteCode: this.#importCreditNoteCode,
      traceId: this.#traceId,
      isorder: this.#isorder,
      nominal: this.#nominal,
      used: this.#used,
      isinv: this.#isinv,
      confirmtime: this.#confirmtime,
      confirmby: this.#confirmby,
      ...super.toModel()
    };
  }
}

class ImportInvoiceDtDto extends StandardDto {
  #importInvDtId;
  #importInvId;
  #importReceiveId;
  #importReceiveDtId;
  #importReceiveCode;
  #itemId;
  #itemCode;
  #itemName;
  #qty;
  #qtyOrder;
  #qtyReceive;
  #qtyIp;
  #qtyIr;
  #price;
  #price2;
  #priceAvg;
  #discPersen;
  #discAmount;
  #disc3;
  #taxPersen;
  #taxAmount;
  #total;

  constructor(dto) {
    super(dto);
    this.#importInvDtId = dto.import_inv_dt_id;
    this.#importInvId = dto.import_inv_id;
    this.#importReceiveId = dto.import_receive_id;
    this.#importReceiveDtId = dto.import_receive_dt_id;
    this.#importReceiveCode = dto.import_receive_code;
    this.#itemId = dto.item_id;
    this.#itemCode = dto.item_code;
    this.#itemName = dto.item_name;
    this.#qty = dto.qty;
    this.#qtyOrder = dto.qty_order;
    this.#qtyReceive = dto.qty_receive;
    this.#qtyIp = dto.qty_ip;
    this.#qtyIr = dto.qty_ir;
    this.#price = dto.price;
    this.#price2 = dto.price2;
    this.#priceAvg = dto.price_avg;
    this.#discPersen = dto.disc_persen;
    this.#discAmount = dto.disc_amount;
    this.#disc3 = dto.disc3;
    this.#taxPersen = dto.tax_persen;
    this.#taxAmount = dto.tax_amount;
    this.#total = dto.total;
  }

  get importInvDtId() {
    return this.#importInvDtId;
  }

  toModel() {
    return {
      importInvDtId: this.#importInvDtId,
      importInvId: this.#importInvId,
      importReceiveId: this.#importReceiveId,
      importReceiveDtId: this.#importReceiveDtId,
      importReceiveCode: this.#importReceiveCode,
      itemId: this.#itemId,
      itemCode: this.#itemCode,
      itemName: this.#itemName,
      qty: this.#qty,
      qtyOrder: this.#qtyOrder,
      qtyReceive: this.#qtyReceive,
      qtyIp: this.#qtyIp,
      qtyIr: this.#qtyIr,
      price: this.#price,
      price2: this.#price2,
      priceAvg: this.#priceAvg,
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

class ImportInvoiceItemDtDto extends StandardDto {
  #importInvItemDtId;
  #importInvDtId;
  #importInvId;
  #importReceiveItemDtId;
  #itemId;
  #expDay;
  #expMonth;
  #expYear;
  #qty;
  #qtyR;

  constructor(dto) {
    super(dto);
    this.#importInvItemDtId = dto.import_inv_item_dt_id;
    this.#importInvDtId = dto.import_inv_dt_id;
    this.#importInvId = dto.import_inv_id;
    this.#importReceiveItemDtId = dto.import_receive_item_dt_id;
    this.#itemId = dto.item_id;
    this.#expDay = dto.exp_day;
    this.#expMonth = dto.exp_month;
    this.#expYear = dto.exp_year;
    this.#qty = dto.qty;
    this.#qtyR = dto.qty_r;
  }

  get importInvItemDtId() {
    return this.#importInvItemDtId;
  }

  toModel() {
    return {
      importInvItemDtId: this.#importInvItemDtId,
      importInvDtId: this.#importInvDtId,
      importInvId: this.#importInvId,
      importReceiveItemDtId: this.#importReceiveItemDtId,
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

class ImportInvoicePaymentDto extends StandardDto {
  #importInvPaymentId;
  #importInvId;
  #importAdvpayId;
  #traceId;
  #paymentCode;
  #dpAmount;
  #dpUsed;

  constructor(dto) {
    super(dto);
    this.#importInvPaymentId = dto.import_inv_payment_id;
    this.#importInvId = dto.import_inv_id;
    this.#importAdvpayId = dto.import_advpay_id;
    this.#traceId = dto.trace_id;
    this.#paymentCode = dto.payment_code;
    this.#dpAmount = dto.dp_amount;
    this.#dpUsed = dto.dp_used;
  }

  get importInvPaymentId() {
    return this.#importInvPaymentId;
  }

  toModel() {
    return {
      importInvPaymentId: this.#importInvPaymentId,
      importInvPaymentId: this.#importInvPaymentId,
      importInvId: this.#importInvId,
      importAdvpayId: this.#importAdvpayId,
      traceId: this.#traceId,
      paymentCode: this.#paymentCode,
      dpAmount: this.#dpAmount,
      dpUsed: this.#dpUsed,
      ...super.toModel()
    };
  }
}

class ImportInvoiceRejectDto extends StandardDto {
  #importInvRejectId;
  #importInvId;
  #note;
  #userId;

  constructor(dto) {
    super(dto);
    this.#importInvRejectId = dto.import_inv_reject_id;
    this.#importInvId = dto.import_inv_id;
    this.#note = dto.note;
    this.#userId = dto.user_id;
  }

  get importInvRejectId() {
    return this.#importInvRejectId;
  }

  toModel() {
    return {
      importInvRejectId: this.#importInvRejectId,
      importInvId: this.#importInvId,
      note: this.#note,
      userId: this.#userId,
      ...super.toModel()
    };
  }
}

class ImportInvoiceRequestDto extends StandardDto {
  #importInvRequestId;
  #importInvId;
  #note;
  #statusRequest;
  #userId;

  constructor(dto) {
    super(dto);
    this.#importInvRequestId = dto.import_inv_request_id;
    this.#importInvId = dto.import_inv_id;
    this.#note = dto.note;
    this.#userId = dto.user_id;
    this.#statusRequest = dto.status_request;
  }

  get importInvRequestId() {
    return this.importInvRequestId;
  }

  toModel() {
    return {
      importInvRequestId: this.#importInvRequestId,
      importInvId: this.#importInvId,
      note: this.#note,
      userId: this.#userId,
      statusRequest: this.#statusRequest,
      ...super.toModel()
    };
  }
}
export {
  ImportInvoiceDto,
  ImportInvoiceAdvancePayDto,
  ImportInvoiceCreditNoteDto,
  ImportInvoiceDtDto,
  ImportInvoiceItemDtDto,
  ImportInvoicePaymentDto,
  ImportInvoiceRejectDto,
  ImportInvoiceRequestDto
};
