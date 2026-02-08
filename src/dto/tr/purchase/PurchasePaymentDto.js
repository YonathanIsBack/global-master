import StandardDto from '../../StandardDto.js';

class PurchasePaymentDto extends StandardDto {
  #purchasePaymentId;
  #purchasePaymentCode;
  #purchasePaymentCodeTemp;
  #purchasePaymentDate;
  #purchaseOrderId;
  #purchaseOrderCode;
  #purchaseInvoiceId;
  #purchaseInvoiceCode;
  #typeColumn;
  #traceId;
  #warehouseId;
  #supplierId;
  #supplierBankId;
  #swiftCode;
  #supplierPaymentId;
  #supplierBankAccountNo;
  #supplierBankAccountName;
  #bankId;
  #bankCompanyId;
  #bankAccountId;
  #bankAccountNo;
  #bankAccountName;
  #branch;
  #currencyId;
  #currencyRate;
  #notes;
  #coaBankId;
  #coaId;
  #coaSubleadgerId;
  #paymentMethod;
  #paymentNo;
  #paymentDate;
  #paymentClearDate;
  #isvat;
  #totalCoa;
  #totalInvoice;
  #totalPayment;
  #sisaInvoice;
  #totalCreditNote;
  #totalAdvpay;
  #gain;
  #total;
  #status;
  #statusNext;
  #confirmtime;
  #confirmby;
  #confirmtimeF;
  #confirmbyF;
  #isedit;
  #isFinish;

  constructor(dto) {
    super(dto);
    this.#purchasePaymentId = dto.purchase_payment_id;
    this.#purchasePaymentCode = dto.purchase_payment_code;
    this.#purchasePaymentCodeTemp = dto.purchase_payment_code_temp;
    this.#purchasePaymentDate = dto.purchase_payment_date;
    this.#purchaseOrderId = dto.purchase_order_id;
    this.#purchaseOrderCode = dto.purchase_order_code;
    this.#purchaseInvoiceId = dto.purchase_invoice_id;
    this.#purchaseInvoiceCode = dto.purchase_invoice_code;
    this.#typeColumn = dto.type;
    this.#traceId = dto.trace_id;
    this.#warehouseId = dto.warehouse_id;
    this.#supplierId = dto.supplier_id;
    this.#supplierBankId = dto.supplier_bank_id;
    this.#swiftCode = dto.swift_code;
    this.#supplierPaymentId = dto.supplier_payment_id;
    this.#supplierBankAccountNo = dto.supplier_bank_account_no;
    this.#supplierBankAccountName = dto.supplier_bank_account_name;
    this.#bankId = dto.bank_id;
    this.#bankCompanyId = dto.bank_company_id;
    this.#bankAccountId = dto.bank_account_id;
    this.#bankAccountNo = dto.bank_account_no;
    this.#bankAccountName = dto.bank_account_name;
    this.#branch = dto.branch;
    this.#currencyId = dto.currency_id;
    this.#currencyRate = dto.currency_rate;
    this.#notes = dto.notes;
    this.#coaBankId = dto.coa_bank_id;
    this.#coaId = dto.coa_id;
    this.#coaSubleadgerId = dto.coa_subleadger_id;
    this.#paymentMethod = dto.payment_method;
    this.#paymentNo = dto.payment_no;
    this.#paymentDate = dto.payment_date;
    this.#paymentClearDate = dto.payment_clear_date;
    this.#isvat = dto.isvat;
    this.#totalCoa = dto.total_coa;
    this.#totalInvoice = dto.total_invoice;
    this.#totalPayment = dto.total_payment;
    this.#sisaInvoice = dto.sisa_invoice;
    this.#totalCreditNote = dto.total_credit_note;
    this.#totalAdvpay = dto.total_advpay;
    this.#gain = dto.gain;
    this.#total = dto.total;
    this.#status = dto.status;
    this.#statusNext = dto.status_next;
    this.#confirmtime = dto.confirmtime;
    this.#confirmby = dto.confirmby;
    this.#confirmtimeF = dto.confirmtime_f;
    this.#confirmbyF = dto.confirmby_f;
    this.#isedit = dto.isedit;
    this.#isFinish = dto.isFinish;
  }

  get purchasePaymentId() {
    return this.#purchasePaymentId;
  }

  toModel() {
    return {
      purchasePaymentId: this.#purchasePaymentId,
      purchasePaymentCode: this.#purchasePaymentCode,
      purchasePaymentCodeTemp: this.#purchasePaymentCodeTemp,
      purchasePaymentDate: this.#purchasePaymentDate,
      purchaseOrderId: this.#purchaseOrderId,
      purchaseOrderCode: this.#purchaseOrderCode,
      purchaseInvoiceId: this.#purchaseInvoiceId,
      purchaseInvoiceCode: this.#purchaseInvoiceCode,
      typeColumn: this.#typeColumn,
      traceId: this.#traceId,
      warehouseId: this.#warehouseId,
      supplierId: this.#supplierId,
      supplierBankId: this.#supplierBankId,
      swiftCode: this.#swiftCode,
      supplierPaymentId: this.#supplierPaymentId,
      supplierBankAccountNo: this.#supplierBankAccountNo,
      supplierBankAccountName: this.#supplierBankAccountName,
      bankId: this.#bankId,
      bankCompanyId: this.#bankCompanyId,
      bankAccountId: this.#bankAccountId,
      bankAccountNo: this.#bankAccountNo,
      bankAccountName: this.#bankAccountName,
      branch: this.#branch,
      currencyId: this.#currencyId,
      currencyRate: this.#currencyRate,
      notes: this.#notes,
      coaBankId: this.#coaBankId,
      coaId: this.#coaId,
      coaSubleadgerId: this.#coaSubleadgerId,
      paymentMethod: this.#paymentMethod,
      paymentNo: this.#paymentNo,
      paymentDate: this.#paymentDate,
      paymentClearDate: this.#paymentClearDate,
      isvat: this.#isvat,
      totalCoa: this.#totalCoa,
      totalInvoice: this.#totalInvoice,
      totalPayment: this.#totalPayment,
      sisaInvoice: this.#sisaInvoice,
      totalCreditNote: this.#totalCreditNote,
      totalAdvpay: this.#totalAdvpay,
      gain: this.#gain,
      total: this.#total,
      status: this.#status,
      statusNext: this.#statusNext,
      confirmtime: this.#confirmtime,
      confirmby: this.#confirmby,
      confirmtimeF: this.#confirmtimeF,
      confirmbyF: this.#confirmbyF,
      isedit: this.#isedit,
      isFinish: this.#isFinish,
      ...super.toModel()
    };
  }
}

class PurchasePaymentAdvanceDto extends StandardDto {
  #purchasePaymentAdvpayId;
  #purchasePaymentId;
  #purchaseInvId;
  #purchaseAdvpayId;
  #purchaseAdvpayCode;
  #totalDp;
  #totalUsed;
  #remaining;
  #isinvoice;

  constructor(dto) {
    super(dto);
    this.#purchasePaymentAdvpayId = dto.purchase_order_advpay_id;
    this.#purchasePaymentId = dto.purchase_payment_id;
    this.#purchaseInvId = dto.purchase_inv_id;
    this.#purchaseAdvpayId = dto.purchase_advpay_id;
    this.#purchaseAdvpayCode = dto.purchase_advpay_code;
    this.#totalDp = dto.total_dp;
    this.#totalUsed = dto.total_used;
    this.#remaining = dto.remaining;
    this.#isinvoice = dto.isinvoice;
  }
  get purchasePaymentAdvpayId() {
    return this.#purchasePaymentAdvpayId;
  }
  toModel() {
    return {
      purchasePaymentAdvpayId: this.#purchasePaymentAdvpayId,
      purchasePaymentId: this.#purchasePaymentId,
      purchasePaymentAdvpayId: this.#purchasePaymentAdvpayId,
      purchasePaymentId: this.#purchasePaymentId,
      purchaseInvId: this.#purchaseInvId,
      purchaseAdvpayId: this.#purchaseAdvpayId,
      purchaseAdvpayCode: this.#purchaseAdvpayCode,
      totalDp: this.#totalDp,
      totalUsed: this.#totalUsed,
      remaining: this.#remaining,
      isinvoice: this.#isinvoice,
      ...super.toModel()
    };
  }
}

class PurchasePaymentCoaDto extends StandardDto {
  #purchasePaymentCoaId;
  #purchasePaymentId;
  #coaId;
  #coaCode;
  #coaName;
  #coaSubleadgerId;
  #coaSubleadgerName;
  #coaSubleadgerCode;
  #payment;
  #paymentNumber;
  #paymentDate;
  #clearDate;
  #value;
  constructor(dto) {
    super(dto);
    this.#purchasePaymentCoaId = dto.purchase_payment_coa_id;
    this.#purchasePaymentId = dto.purchase_payment_id;
    this.#coaId = dto.coa_id;
    this.#coaCode = dto.coa_code;
    this.#coaName = dto.coa_name;
    this.#coaSubleadgerId = dto.coa_subleadger_id;
    this.#coaSubleadgerName = dto.coa_subleadger_name;
    this.#coaSubleadgerCode = dto.coa_subleadger_code;
    this.#payment = dto.payment;
    this.#paymentNumber = dto.payment_number;
    this.#paymentDate = dto.payment_date;
    this.#clearDate = dto.clear_date;
    this.#value = dto.value;
  }
  get purchasePaymentCoaId() {
    return this.purchaseOrderDtId;
  }
  toModel() {
    return {
      purchasePaymentCoaId: this.#purchasePaymentCoaId,
      purchasePaymentId: this.#purchasePaymentId,
      coaId: this.#coaId,
      coaCode: this.#coaCode,
      coaName: this.#coaName,
      coaSubleadgerId: this.#coaSubleadgerId,
      coaSubleadgerName: this.#coaSubleadgerName,
      coaSubleadgerCode: this.#coaSubleadgerCode,
      payment: this.#payment,
      paymentNumber: this.#paymentNumber,
      paymentDate: this.#paymentDate,
      clearDate: this.#clearDate,
      value: this.#value,
      ...super.toModel()
    };
  }
}

class PurchasePaymentCoaTotalDto extends StandardDto {
  #purchasePaymentCoaTotalId;
  #purchasePaymentId;
  #coaId;
  #coaCode;
  #coaName;
  #note;
  #total;
  constructor(dto) {
    super(dto);
    this.#purchasePaymentCoaTotalId = dto.purchase_payment_coa_total_id;
    this.#purchasePaymentId = dto.purchase_payment_id;
    this.#coaId = dto.coa_id;
    this.#coaCode = dto.coa_code;
    this.#coaName = dto.coa_name;
    this.#note = dto.note;
    this.#total = dto.total;
  }
  get purchasePaymentCoaTotalId() {
    return this.purchasePaymentCoaTotalId;
  }
  toModel() {
    return {
      purchasePaymentCoaTotalId: this.#purchasePaymentCoaTotalId,
      purchasePaymentId: this.#purchasePaymentId,
      coaId: this.#coaId,
      coaCode: this.#coaCode,
      coaName: this.#coaName,
      note: this.#note,
      total: this.#total,
      ...super.toModel()
    };
  }
}

class PurchasePaymentCreditNoteDto extends StandardDto {
  #purchasePaymentCreditNoteId;
  #purchasePaymentId;
  #purchaseCreditNoteId;
  #purchaseCreditNoteName;
  #purchaseCreditNoteCode;
  #nominal;
  #isinv;
  #confirmtime;
  #confirmby;
  constructor(dto) {
    super(dto);
    this.#purchasePaymentCreditNoteId = dto.purchase_payment_credit_note_id;
    this.#purchasePaymentId = dto.purchase_payment_id;
    this.#purchaseCreditNoteId = dto.purchase_credit_note_id;
    this.#purchaseCreditNoteName = dto.purchase_credit_note_name;
    this.#purchaseCreditNoteCode = dto.purchase_credit_note_code;
    this.#nominal = dto.nominal;
    this.#isinv = dto.isinv;
    this.#confirmtime = dto.confirmtime;
    this.#confirmby = dto.confirmby;
  }
  get purchasePaymentCreditNoteId() {
    return this.purchasePaymentCreditNoteId;
  }
  toModel() {
    return {
      purchasePaymentCreditNoteId: this.#purchasePaymentCreditNoteId,
      purchasePaymentId: this.#purchasePaymentId,
      purchaseCreditNoteId: this.#purchaseCreditNoteId,
      purchaseCreditNoteName: this.#purchaseCreditNoteName,
      purchaseCreditNoteCode: this.#purchaseCreditNoteCode,
      nominal: this.#nominal,
      isinv: this.#isinv,
      confirmtime: this.#confirmtime,
      confirmby: this.#confirmby,
      ...super.toModel()
    };
  }
}

class PurchasePaymentDtDto extends StandardDto {
  #purchasePaymentDtId;
  #purchasePaymentId;
  #purchaseInvId;
  #purchaseInvDtId;
  #purchaseInvCode;
  #total;
  #totalAdvpay;
  #totalPay;
  #sisaPay;

  constructor(dto) {
    super(dto);
    this.#purchasePaymentDtId = dto.purchase_payment_dt_id;
    this.#purchasePaymentId = dto.purchase_payment_id;
    this.#purchaseInvId = dto.purchase_inv_id;
    this.#purchaseInvDtId = dto.purchase_inv_dt_id;
    this.#purchaseInvCode = dto.purchase_inv_code;
    this.#total = dto.total;
    this.#totalAdvpay = dto.total_advpay;
    this.#totalPay = dto.total_pay;
    this.#sisaPay = dto.sisa_pay;
  }
  get purchasePaymentDtId() {
    return this.#purchasePaymentDtId;
  }
  toModel() {
    return {
      purchasePaymentDtId: this.#purchasePaymentDtId,
      purchasePaymentId: this.#purchasePaymentId,
      purchaseInvId: this.#purchaseInvId,
      purchaseInvDtId: this.#purchaseInvDtId,
      purchaseInvCode: this.#purchaseInvCode,
      total: this.#total,
      totalAdvpay: this.#totalAdvpay,
      totalPay: this.#totalPay,
      sisaPay: this.#sisaPay,
      ...super.toModel()
    };
  }
}

class PurchasePaymentImgDto extends StandardDto {
  #purchasePaymentImgId;
  #purchasePaymentId;
  #imgName;
  #urlImg;

  constructor(dto) {
    super(dto);
    this.#purchasePaymentImgId = dto.purchase_payment_img_id;
    this.#purchasePaymentId = dto.purchase_payment_id;
    this.#imgName = dto.img_name;
    this.#urlImg = dto.url_img;
  }
  get purchasePaymentImgId() {
    return this.#purchasePaymentImgId;
  }
  toModel() {
    return {
      purchasePaymentImgId: this.#purchasePaymentImgId,
      purchasePaymentId: this.#purchasePaymentId,
      imgName: this.#imgName,
      urlImg: this.#urlImg,
      ...super.toModel()
    };
  }
}

class PurchasePaymentInvoiceDto extends StandardDto {
  #purchasePaymentInvoiceId;
  #purchasePaymentId;
  #invoiceId;
  #invoiceCode;
  #invoiceDate;
  #totalInvoice;
  #totalPay;
  #sisaPay;

  constructor(dto) {
    super(dto);
    this.#purchasePaymentInvoiceId = dto.purchase_payment_img_id;
    this.#purchasePaymentId = dto.purchase_payment_id;
    this.#invoiceId = dto.invoice_id;
    this.#invoiceCode = dto.invoice_code;
    this.#invoiceDate = dto.invoice_date;
    this.#totalInvoice = dto.total_invoice;
    this.#totalPay = dto.total_pay;
    this.#sisaPay = dto.sisa_pay;
  }
  get purchasePaymentInvoiceId() {
    return this.#purchasePaymentInvoiceId;
  }
  toModel() {
    return {
      purchasePaymentInvoiceId: this.#purchasePaymentInvoiceId,
      purchasePaymentId: this.#purchasePaymentId,
      invoiceId: this.#invoiceId,
      invoiceCode: this.#invoiceCode,
      invoiceDate: this.#invoiceDate,
      totalInvoice: this.#totalInvoice,
      totalPay: this.#totalPay,
      sisaPay: this.#sisaPay,
      ...super.toModel()
    };
  }
}

class PurchasePaymentRejectDto extends StandardDto {
  #purchasePaymentRejectId;
  #purchaseOrderId;
  #note;
  #userId;

  constructor(dto) {
    super(dto);
    this.#purchasePaymentRejectId = dto.purchase_payment_reject_id;
    this.#purchaseOrderId = dto.purchase_payment_id;
    this.#note = dto.note;
    this.#userId = dto.userId;
  }
  get purchasePaymentRejectId() {
    return this.#purchasePaymentRejectId;
  }
  toModel() {
    return {
      purchasePaymentRejectId: this.#purchasePaymentRejectId,
      purchaseOrderId: this.#purchaseOrderId,
      note: this.#note,
      userId: this.#userId,
      ...super.toModel()
    };
  }
}

class PurchasePaymentRequestDto extends StandardDto {
  #purchasePaymentRequestId;
  #purchaseOrderId;
  #note;
  #statusRequest;
  #userId;

  constructor(dto) {
    super(dto);
    this.purchasePaymentRequestId = dto.purchase_payment_request_id;
    this.purchaseOrderId = dto.purchase_payment_id;
    this.#note = dto.note;
    this.#userId = dto.user_id;
    this.#statusRequest = dto.status_request;
  }
  get purchasePaymentRequestId() {
    return this.purchasePaymentRequestId;
  }
  toModel() {
    return {
      purchasePaymentRequestId: this.#purchasePaymentRequestId,
      purchaseOrderId: this.#purchaseOrderId,
      note: this.#note,
      userId: this.#userId,
      statusRequest: this.#statusRequest,
      ...super.toModel()
    };
  }
}
export {
  PurchasePaymentDto,
  PurchasePaymentAdvanceDto,
  PurchasePaymentCoaDto,
  PurchasePaymentCoaTotalDto,
  PurchasePaymentCreditNoteDto,
  PurchasePaymentDtDto,
  PurchasePaymentImgDto,
  PurchasePaymentInvoiceDto,
  PurchasePaymentRejectDto,
  PurchasePaymentRequestDto
};
