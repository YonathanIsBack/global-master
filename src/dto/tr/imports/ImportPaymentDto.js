import ObjectUtil from '../../../util/ObjectUtil.js';
import StandardDto from '../../StandardDto.js';

class ImportPaymentDto extends StandardDto {
  #importPaymentId;
  #importPaymentCode;
  #importPaymentCodeTemp;
  #importPaymentDate;
  #importOrderId;
  #importOrderCode;
  #importInvoiceId;
  #importInvoiceCode;
  #type;
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
  #totalT;
  #status;
  #statusNext;
  #confirmtime;
  #confirmby;
  #isedit;
  #confirmtimeF;
  #confirmbyF;

  constructor(dto) {
    super(dto);
    this.#importPaymentId = dto.import_payment_id;
    this.#importPaymentCode = dto.import_payment_code;
    this.#importPaymentCodeTemp = dto.import_payment_code_temp;
    this.#importPaymentDate = dto.import_payment_date;
    this.#importOrderId = ObjectUtil.defaultEmptyString(dto.import_order_id);
    this.#importOrderCode = dto.import_order_code;
    this.#importInvoiceId = ObjectUtil.defaultEmptyString(dto.import_invoice_id);
    this.#importInvoiceCode = dto.import_invoice_code;
    this.#type = dto.type;
    this.#traceId = dto.trace_id;
    this.#warehouseId = ObjectUtil.defaultEmptyString(dto.warehouse_id);
    this.#supplierId = ObjectUtil.defaultEmptyString(dto.supplier_id);
    this.#supplierBankId = ObjectUtil.defaultEmptyString(dto.supplier_bank_id);
    this.#swiftCode = dto.swift_code;
    this.#supplierPaymentId = ObjectUtil.defaultEmptyString(dto.supplier_payment_id);
    this.#supplierBankAccountNo = dto.supplier_bank_account_no;
    this.#supplierBankAccountName = dto.supplier_bank_account_name;
    this.#bankId = ObjectUtil.defaultEmptyString(dto.bank_id);
    this.#bankCompanyId = ObjectUtil.defaultEmptyString(dto.bank_company_id);
    this.#bankAccountNo = dto.bank_account_no;
    this.#bankAccountName = dto.bank_account_name;
    this.#branch = dto.branch;
    this.#currencyId = ObjectUtil.defaultEmptyString(dto.currency_id);
    this.#currencyRate = dto.currency_rate;
    this.#notes = dto.notes;
    this.#coaBankId = ObjectUtil.defaultEmptyString(dto.coa_bank_id);
    this.#coaId = ObjectUtil.defaultEmptyString(dto.coa_id);
    this.#coaSubleadgerId = ObjectUtil.defaultEmptyString(dto.coa_subleadger_id);
    this.#paymentMethod = dto.payment_method;
    this.#paymentNo = dto.payment_no;
    this.#paymentDate = ObjectUtil.defaultEmptyString(dto.payment_date);
    this.#paymentClearDate = ObjectUtil.defaultEmptyString(dto.payment_clear_date);
    this.#isvat = dto.isvat;
    this.#totalCoa = dto.total_coa;
    this.#totalInvoice = dto.total_invoice;
    this.#totalPayment = dto.total_payment;
    this.#sisaInvoice = dto.sisa_invoice;
    this.#totalCreditNote = dto.total_credit_note;
    this.#totalAdvpay = dto.total_advpay;
    this.#gain = dto.gain;
    this.#total = dto.total;
    this.#totalT = dto.total_t;
    this.#status = dto.status;
    this.#statusNext = dto.status_next;
    this.#confirmtime = dto.confirmtime;
    this.#confirmby = dto.confirmby;
    this.#isedit = dto.isedit;
    this.#confirmtimeF = dto.confirmtime_f;
    this.#confirmbyF = dto.confirmby_f;
  }

  get importPaymentId() {
    return this.#importPaymentId;
  }

  toModel() {
    return {
      importPaymentId: this.#importPaymentId,
      importPaymentCode: this.#importPaymentCode,
      importPaymentCodeTemp: this.#importPaymentCodeTemp,
      importPaymentDate: this.#importPaymentDate,
      importOrderId: this.#importOrderId,
      importOrderCode: this.#importOrderCode,
      importInvoiceId: this.#importInvoiceId,
      importInvoiceCode: this.#importInvoiceCode,
      type: this.#type,
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
      totalT: this.#totalT,
      status: this.#status,
      statusNext: this.#statusNext,
      confirmtime: this.#confirmtime,
      confirmby: this.#confirmby,
      isedit: this.#isedit,
      confirmtimeF: this.#confirmtimeF,
      confirmbyF: this.#confirmbyF,
      ...super.toModel()
    };
  }
}

class ImportPaymentAdvancePayDto extends StandardDto {
  #importPaymentAdvpayId;
  #importPaymentId;
  #importInvId;
  #importAdvpayId;
  #importAdvpayCode;
  #totalDp;
  #totalUsed;
  #remaining;
  #isinv;

  constructor(dto) {
    super(dto);
    this.#importPaymentAdvpayId = dto.import_order_advpay_id;
    this.#importPaymentId = dto.import_payment_id;
    this.#importInvId = dto.import_inv_id;
    this.#importAdvpayId = dto.import_advpay_id;
    this.#importAdvpayCode = dto.import_advpay_code;
    this.#totalDp = dto.total_dp;
    this.#totalUsed = dto.total_used;
    this.#remaining = dto.remaining;
    this.#isinv = dto.isinv;
  }
  get importPaymentAdvpayId() {
    return this.#importPaymentAdvpayId;
  }
  toModel() {
    return {
      importPaymentAdvpayId: this.#importPaymentAdvpayId,
      importPaymentId: this.#importPaymentId,
      importInvId: this.#importInvId,
      importAdvpayId: this.#importAdvpayId,
      importAdvpayCode: this.#importAdvpayCode,
      totalDp: this.#totalDp,
      totalUsed: this.#totalUsed,
      remaining: this.#remaining,
      isinv: this.#isinv,
      ...super.toModel()
    };
  }
}

class ImportPaymentCoaDto extends StandardDto {
  #importPaymentCoaId;
  #importPaymentId;
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
    this.#importPaymentCoaId = dto.import_order_credit_note_id;
    this.#importPaymentId = dto.import_payment_id;
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
  get importPaymentCoaId() {
    return this.#importPaymentCoaId;
  }
  toModel() {
    return {
      importPaymentCoaId: this.#importPaymentCoaId,
      importPaymentId: this.#importPaymentId,
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

class ImportPaymentCoaTotalDto extends StandardDto {
  #importPaymentCoaTotalId;
  #importPaymentId;
  #coaId;
  #coaCode;
  #coaName;
  #note;
  #total;

  constructor(dto) {
    super(dto);
    this.#importPaymentCoaTotalId = dto.import_payment_coa_total_id;
    this.#importPaymentId = dto.import_payment_id;
    this.#coaId = dto.coa_id;
    this.#coaCode = dto.coa_code;
    this.#coaName = dto.coa_name;
    this.#note = dto.note;
    this.#total = dto.total;
  }
  get importPaymentCoaTotalId() {
    return this.#importPaymentCoaTotalId;
  }
  toModel() {
    return {
      importPaymentCoaTotalId: this.#importPaymentCoaTotalId,
      importPaymentId: this.#importPaymentId,
      coaId: this.#coaId,
      coaCode: this.#coaCode,
      coaName: this.#coaName,
      note: this.#note,
      total: this.#total,
      ...super.toModel()
    };
  }
}

class ImportPaymentCreditNoteDto extends StandardDto {
  #importPaymentCreditNoteId;
  #importPaymentId;
  #importInvId;
  #importCreditNoteId;
  #importCreditNoteName;
  #importCreditNoteCode;
  #isinv;
  #nominal;
  #used;
  #confirmtime;
  #confirmby;

  constructor(dto) {
    super(dto);
    this.#importPaymentCreditNoteId = dto.import_payment_credit_note_id;
    this.#importPaymentId = dto.import_payment_id;
    this.#importInvId = dto.import_inv_id;
    this.#importCreditNoteId = dto.import_credit_note_id;
    this.#importCreditNoteName = dto.import_credit_note_name;
    this.#importCreditNoteCode = dto.import_credit_note_code;
    this.#isinv = dto.isinv;
    this.#nominal = dto.nominal;
    this.#used = dto.used;
    this.#confirmtime = dto.confirmtime;
    this.#confirmby = dto.confirmby;
  }
  get importPaymentCreditNoteId() {
    return this.#importPaymentCreditNoteId;
  }
  toModel() {
    return {
      importPaymentCreditNoteId: this.#importPaymentCreditNoteId,
      importPaymentId: this.#importPaymentId,
      importInvId: this.#importInvId,
      importCreditNoteId: this.#importCreditNoteId,
      importCreditNoteName: this.#importCreditNoteName,
      importCreditNoteCode: this.#importCreditNoteCode,
      isinv: this.#isinv,
      nominal: this.#nominal,
      used: this.#used,
      confirmtime: this.#confirmtime,
      confirmby: this.#confirmby,
      ...super.toModel()
    };
  }
}

class ImportPaymentDtDto extends StandardDto {
  #importPaymentDtId;
  #importPaymentId;
  #importInvId;
  #importInvDtId;
  #importInvCode;
  #importCreditNoteId;
  #importCreditNoteCode;
  #importCreditNoteHeader;
  #creditNoteTotal;
  #total;
  #totalAdvpay;
  #totalPay;
  #sisaPay;
  constructor(dto) {
    super(dto);
    this.#importPaymentDtId = dto.import_payment_dt_id;
    this.#importPaymentId = dto.import_payment_id;
    this.#importInvId = dto.import_inv_id;
    this.#importInvDtId = dto.import_inv_dt_id;
    this.#importInvCode = dto.import_inv_code;
    this.#importCreditNoteId = dto.import_credit_note_id;
    this.#importCreditNoteCode = dto.import_credit_note_code;
    this.#importCreditNoteHeader = dto.import_credit_note_header;
    this.#creditNoteTotal = dto.credit_note_total;
    this.#total = dto.total;
    this.#totalAdvpay = dto.total_advpay;
    this.#totalPay = dto.total_pay;
    this.#sisaPay = dto.sisa_pay;
  }
  get importPaymentDtId() {
    return this.#importPaymentDtId;
  }
  toModel() {
    return {
      importPaymentDtId: this.#importPaymentDtId,
      importPaymentId: this.#importPaymentId,
      importInvId: this.#importInvId,
      importInvDtId: this.#importInvDtId,
      importInvCode: this.#importInvCode,
      importCreditNoteId: this.#importCreditNoteId,
      importCreditNoteCode: this.#importCreditNoteCode,
      importCreditNoteHeader: this.#importCreditNoteHeader,
      creditNoteTotal: this.#creditNoteTotal,
      total: this.#total,
      totalAdvpay: this.#totalAdvpay,
      totalPay: this.#totalPay,
      sisaPay: this.#sisaPay,
      ...super.toModel()
    };
  }
}

class ImportPaymentInvoiceDto extends StandardDto {
  #importPaymentInvId;
  #importPaymentId;
  #importInvId;
  #importInvCode;
  #importInvDate;
  #totalInv;
  #totalPay;
  #sisaPay;

  constructor(dto) {
    super(dto);
    this.#importPaymentInvId = dto.import_payment_inv_id;
    this.#importPaymentId = dto.import_payment_id;
    this.#importInvId = dto.import_inv_id;
    this.#importInvCode = dto.import_inv_code;
    this.#importInvDate = dto.import_inv_date;
    this.#totalInv = dto.total_inv;
    this.#totalPay = dto.total_pay;
    this.#sisaPay = dto.sisa_pay;
  }
  get importPaymentInvId() {
    return this.#importPaymentInvId;
  }
  toModel() {
    return {
      importPaymentInvId: this.#importPaymentInvId,
      importPaymentId: this.#importPaymentId,
      importInvId: this.#importInvId,
      importInvCode: this.#importInvCode,
      importInvDate: this.#importInvDate,
      totalInv: this.#totalInv,
      totalPay: this.#totalPay,
      sisaPay: this.#sisaPay,
      ...super.toModel()
    };
  }
}

class ImportPaymentRejectDto extends StandardDto {
  #importPaymentRejectId;
  #importPaymentId;
  #note;
  #userId;

  constructor(dto) {
    super(dto);
    this.#importPaymentRejectId = dto.import_payment_reject_id;
    this.#importPaymentId = dto.import_payment_id;
    this.#note = dto.note;
    this.#userId = dto.user_id;
  }
  get importPaymentRejectId() {
    return this.#importPaymentRejectId;
  }
  toModel() {
    return {
      importPaymentRejectId: this.#importPaymentRejectId,
      importPaymentId: this.#importPaymentId,
      note: this.#note,
      userId: this.#userId,
      ...super.toModel()
    };
  }
}

class ImportPaymentRequestDto extends StandardDto {
  #importPayemntRequestId;
  #importPaymentId;
  #note;
  #statusRequest;
  #userId;
  constructor(dto) {
    super(dto);
    this.#importPayemntRequestId = dto.import_payment_reject_id;
    this.#importPaymentId = dto.import_payment_id;
    this.#note = dto.note;
    this.#userId = dto.user_id;
    this.#statusRequest = dto.status_request;
  }
  get importPayemntRequestId() {
    return this.importPayemntRequestId;
  }
  toModel() {
    return {
      importPayemntRequestId: this.#importPayemntRequestId,
      importPaymentId: this.#importPaymentId,
      note: this.#note,
      userId: this.#userId,
      statusRequest: this.#statusRequest,
      ...super.toModel()
    };
  }
}
export {
  ImportPaymentDto,
  ImportPaymentAdvancePayDto,
  ImportPaymentCoaDto,
  ImportPaymentCoaTotalDto,
  ImportPaymentCreditNoteDto,
  ImportPaymentDtDto,
  ImportPaymentInvoiceDto,
  ImportPaymentRejectDto,
  ImportPaymentRequestDto
};
