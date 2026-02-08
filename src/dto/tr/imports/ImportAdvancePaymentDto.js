import StandardDto from '../../StandardDto.js';

class ImportAdvancedPaymentDto extends StandardDto {
  #importAdvpayId;
  #traceId;
  #companyId;
  #importOrderId;
  #importOrderCode;
  #importAdvpayCode;
  #importAdvpayCodeTemp;
  #importAdvpayDate;
  #coaId;
  #supplierId;
  #supplierBankId;
  #supplierBankAccountNo;
  #supplierBankAccountName;
  #bankId;
  #bankCompanyId;
  #bankAccountNo;
  #bankAccountName;
  #taxNo;
  #reffNumber;
  #memoNumber;
  #currencyId;
  #currencyRate;
  #percentOrder;
  #totalOrder;
  #totalDp;
  #totalDpUsed;
  #persentVat;
  #totalVat;
  #total;
  #status;
  #statusNext;
  #type;
  #notes;
  #isedit;
  #isvat;
  #confirmtime;
  #confirmby;
  #confirmtimeF;
  #confirmbyF;

  constructor(dto) {
    super(dto);
    this.#importAdvpayId = dto.import_advpay_id;
    this.#traceId = dto.trace_id;
    this.#companyId = dto.company_id;
    this.#importOrderId = dto.import_order_id;
    this.#importOrderCode = dto.import_order_code;
    this.#importAdvpayCode = dto.import_advpay_code;
    this.#importAdvpayCodeTemp = dto.import_advpay_code_temp;
    this.#importAdvpayDate = dto.import_advpay_date;
    this.#coaId = dto.coa_id;
    this.#supplierId = dto.supplier_id;
    this.#supplierBankId = dto.supplier_bank_id;
    this.#supplierBankAccountNo = dto.supplier_bank_account_no;
    this.#supplierBankAccountName = dto.supplier_bank_account_name;
    this.#bankId = dto.bank_id;
    this.#bankCompanyId = dto.bank_company_id;
    this.#bankAccountNo = dto.bank_account_no;
    this.#bankAccountName = dto.bank_account_name;
    this.#taxNo = dto.tax_no;
    this.#reffNumber = dto.reff_number;
    this.#memoNumber = dto.memo_number;
    this.#currencyId = dto.currency_id;
    this.#currencyRate = dto.currency_rate;
    this.#percentOrder = dto.percent_order;
    this.#totalOrder = dto.total_order;
    this.#totalDp = dto.total_dp;
    this.#totalDpUsed = dto.total_dp_used;
    this.#persentVat = dto.persen_vat;
    this.#totalVat = dto.total_vat;
    this.#total = dto.total;
    this.#status = dto.status;
    this.#statusNext = dto.status_next;
    this.#type = dto.type;
    this.#notes = dto.notes;
    this.#isedit = dto.isedit;
    this.#isvat = dto.isvat;
    this.#confirmtime = dto.confirmtime;
    this.#confirmby = dto.confirmby;
    this.#confirmtimeF = dto.confirmtime_f;
    this.#confirmbyF = dto.confirmby_f;
  }

  get importAdvpayId() {
    return this.#importAdvpayId;
  }

  toModel() {
    return {
      importAdvpayId: this.#importAdvpayId,
      importAdvpayId: this.#importAdvpayId,
      traceId: this.#traceId,
      companyId: this.#companyId,
      importOrderId: this.#importOrderId,
      importOrderCode: this.#importOrderCode,
      importAdvpayCode: this.#importAdvpayCode,
      importAdvpayCodeTemp: this.#importAdvpayCodeTemp,
      importAdvpayDate: this.#importAdvpayDate,
      coaId: this.#coaId,
      supplierId: this.#supplierId,
      supplierBankId: this.#supplierBankId,
      supplierBankAccountNo: this.#supplierBankAccountNo,
      supplierBankAccountName: this.#supplierBankAccountName,
      bankId: this.#bankId,
      bankCompanyId: this.#bankCompanyId,
      bankAccountNo: this.#bankAccountNo,
      bankAccountName: this.#bankAccountName,
      taxNo: this.#taxNo,
      reffNumber: this.#reffNumber,
      memoNumber: this.#memoNumber,
      currencyId: this.#currencyId,
      currencyRate: this.#currencyRate,
      percentOrder: this.#percentOrder,
      totalOrder: this.#totalOrder,
      totalDp: this.#totalDp,
      totalDpUsed: this.#totalDpUsed,
      persentVat: this.#persentVat,
      totalVat: this.#totalVat,
      total: this.#total,
      status: this.#status,
      statusNext: this.#statusNext,
      type: this.#type,
      notes: this.#notes,
      isedit: this.#isedit,
      isvat: this.#isvat,
      confirmtime: this.#confirmtime,
      confirmby: this.#confirmby,
      confirmtimeF: this.#confirmtimeF,
      confirmbyF: this.#confirmbyF,
      ...super.toModel()
    };
  }
}

class ImportAdvancedPaymentDtDto extends StandardDto {
  #importAdvpayDtId;
  #importAdvpayId;
  #date;
  #amount;

  constructor(dto) {
    super(dto);
    this.#importAdvpayDtId = dto.import_advpay_dt_id;
    this.#importAdvpayId = dto.import_advpay_id;
    this.#date = date;
    this.#amount = amount;
  }

  get importAdvpayDtId() {
    return this.#importAdvpayDtId;
  }

  toModel() {
    return {
      importAdvpayDtId: this.#importAdvpayDtId,
      importAdvpayId: this.#importAdvpayId,
      date: this.#date,
      amount: this.#amount,
      ...super.toModel()
    };
  }
}

class ImportAdvancedPaymentRejectDto extends StandardDto {
  #importAdvancedPaymentRejectId;
  #importAdvancedPaymentId;
  #note;
  #userId;

  constructor(dto) {
    super(dto);
    this.#importAdvancedPaymentRejectId = dto.import_advanced_payment_reject_id;
    this.#importAdvancedPaymentId = dto.import_advanced_payment_id;
    this.#note = dto.note;
    this.#userId = dto.user_id;
  }

  get importAdvancedPaymentRejectId() {
    return this.#importAdvancedPaymentRejectId;
  }

  toModel() {
    return {
      importAdvancedPaymentRejectId: this.#importAdvancedPaymentRejectId,
      importAdvancedPaymentId: this.#importAdvancedPaymentId,
      note: this.#note,
      userId: this.#userId,
      ...super.toModel()
    };
  }
}

class ImportAdvancedPaymentRequestDto extends StandardDto {
  importAdvancedPaymentRequestId;
  importAdvancedPaymentId;
  #note;
  #statusRequest;
  #userId;

  constructor(dto) {
    super(dto);
    this.importAdvancedPaymentRequestId = dto.import_advanced_payment_request_id;
    this.importAdvancedPaymentId = dto.import_advanced_payment_id;
    this.#note = dto.note;
    this.#userId = dto.user_id;
    this.#statusRequest = dto.status_request;
  }

  get importAdvancedPaymentRequestId() {
    return this.importAdvancedPaymentRequestId;
  }

  toModel() {
    return {
      importAdvancedPaymentRequestId: this.importAdvancedPaymentRequestId,
      importAdvancedPaymentId: this.importAdvancedPaymentId,
      note: this.#note,
      userId: this.#userId,
      statusRequest: this.#statusRequest,
      ...super.toModel()
    };
  }
}
export { ImportAdvancedPaymentDto, ImportAdvancedPaymentDtDto, ImportAdvancedPaymentRejectDto, ImportAdvancedPaymentRequestDto };
