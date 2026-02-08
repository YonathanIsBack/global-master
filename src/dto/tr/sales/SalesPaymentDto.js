import StandardDto from '../../StandardDto.js';

class SalesPaymentDto extends StandardDto {
  #salesPaymentId;
  #salesPaymentCode;
  #salesPaymentCodeTemp;
  #salesPaymentDate;
  #salesOrderId;
  #salesOrderCode;
  #salesInvId;
  #salesInvCode;
  #type;
  #traceId;
  #warehouseId;
  #customerId;
  #customerBankId;
  #swiftCode;
  #customerPaymentId;
  #customerBankAccountNo;
  #customerBankAccountName;
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
  #totalAdvpay;
  #totalDeposit;
  #sisaInvoice;
  #gain;
  #total;
  #status;
  #statusNext;
  #confirmtime;
  #confirmtby;
  #isedit;
  #confirmtimeF;
  #confirmbyF;

  constructor(dto) {
    super(dto);
    this.#salesPaymentId = dto.sales_payment_id;
    this.#salesPaymentCode = dto.sales_payment_code;
    this.#salesPaymentCodeTemp = dto.sales_payment_code_temp;
    this.#salesPaymentDate = dto.sales_payment_date;
    this.#salesOrderId = dto.sales_order_id;
    this.#salesOrderCode = dto.sales_order_code;
    this.#salesInvId = dto.sales_inv_id;
    this.#salesInvCode = dto.sales_inv_code;
    this.#type = dto.type;
    this.#traceId = dto.trace_id;
    this.#warehouseId = dto.warehouse_id;
    this.#customerId = dto.customer_id;
    this.#customerBankId = dto.customer_bank_id;
    this.#swiftCode = dto.swift_code;
    this.#customerPaymentId = dto.customer_payment_id;
    this.#customerBankAccountNo = dto.customer_bank_account_no;
    this.#customerBankAccountName = dto.customer_bank_account_name;
    this.#bankId = dto.bank_id;
    this.#bankCompanyId = dto.bank_company_id;
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
    this.#totalAdvpay = dto.total_advpay;
    this.#totalDeposit = dto.total_deposit;
    this.#sisaInvoice = dto.sisa_invoice;
    this.#gain = dto.gain;
    this.#total = dto.total;
    this.#status = dto.status;
    this.#statusNext = dto.status_next;
    this.#confirmtime = dto.confirmtime;
    this.#confirmtby = dto.confirmtby;
    this.#isedit = dto.isedit;
    this.#confirmtimeF = dto.confirmtime_f;
    this.#confirmbyF = dto.confirmby_f;
  }

  get salesPaymentId() {
    return this.#salesPaymentId;
  }

  toModel() {
    return {
      salesPaymentId: this.#salesPaymentId,
      salesPaymentCode: this.#salesPaymentCode,
      salesPaymentCodeTemp: this.#salesPaymentCodeTemp,
      salesPaymentDate: this.#salesPaymentDate,
      salesOrderId: this.#salesOrderId,
      salesOrderCode: this.#salesOrderCode,
      salesInvId: this.#salesInvId,
      salesInvCode: this.#salesInvCode,
      type: this.#type,
      traceId: this.#traceId,
      warehouseId: this.#warehouseId,
      customerId: this.#customerId,
      customerBankId: this.#customerBankId,
      swiftCode: this.#swiftCode,
      customerPaymentId: this.#customerPaymentId,
      customerBankAccountNo: this.#customerBankAccountNo,
      customerBankAccountName: this.#customerBankAccountName,
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
      totalAdvpay: this.#totalAdvpay,
      totalDeposit: this.#totalDeposit,
      sisaInvoice: this.#sisaInvoice,
      gain: this.#gain,
      total: this.#total,
      status: this.#status,
      statusNext: this.#statusNext,
      confirmtime: this.#confirmtime,
      confirmtby: this.#confirmtby,
      isedit: this.#isedit,
      confirmtimeF: this.#confirmtimeF,
      confirmbyF: this.#confirmbyF,

      ...super.toModel()
    };
  }
}

class SalesPaymentAdvanceDto extends StandardDto {
  #salesPaymentAdvpayId;
  #salesPaymentId;
  #salesInvId;
  #salesAdvpayId;
  #salesAdvpayCode;
  #totalDp;
  #totalUsed;
  #remaining;
  #isadv;

  constructor(dto) {
    super(dto);
    this.#salesPaymentAdvpayId = dto.sales_order_advpay_id;
    this.#salesPaymentId = dto.sales_order_id;
    this.#salesInvId = dto.sales_inv_id;
    this.#salesAdvpayId = dto.sales_advpay_id;
    this.#salesAdvpayCode = dto.sales_advpay_code;
    this.#totalDp = dto.total_dp;
    this.#totalUsed = dto.total_used;
    this.#remaining = dto.remaining;
    this.#isadv = dto.isadv;
  }

  get salesPaymentAdvpayId() {
    return this.#salesPaymentAdvpayId;
  }

  toModel() {
    return {
      salesPaymentAdvpayId: this.#salesPaymentAdvpayId,
      salesPaymentId: this.#salesPaymentId,
      salesInvId: this.#salesInvId,
      salesAdvpayId: this.#salesAdvpayId,
      salesAdvpayCode: this.#salesAdvpayCode,
      totalDp: this.#totalDp,
      totalUsed: this.#totalUsed,
      remaining: this.#remaining,
      isadv: this.#isadv,
      ...super.toModel()
    };
  }
}

class SalesPaymentCoaDto extends StandardDto {
  #salesPaymentCoaId;
  #salesPaymentId;
  #coaId;
  #coaName;
  #coaCode;
  #coaSubleadgerId;
  #coaSubleadgerCode;
  #coaSubleadgerName;
  #payment;
  #paymentNumber;
  #paymentDate;
  #clearDate;
  #value;

  constructor(dto) {
    super(dto);
    this.#salesPaymentCoaId = dto.sales_payment_coa_id;
    this.#salesPaymentId = dto.sales_payment_id;
    this.#coaId = dto.coa_id;
    this.#coaName = dto.coa_name;
    this.#coaCode = dto.coa_code;
    this.#coaSubleadgerId = dto.coa_subleadger_id;
    this.#coaSubleadgerCode = dto.coa_subleadger_code;
    this.#coaSubleadgerName = dto.coa_subleadger_name;
    this.#payment = dto.payment;
    this.#paymentNumber = dto.payment_number;
    this.#paymentDate = dto.payment_date;
    this.#clearDate = dto.clear_date;
    this.#value = dto.value;
  }

  get salesPaymentCoaId() {
    return this.#salesPaymentCoaId;
  }

  toModel() {
    return {
      salesPaymentCoaId: this.#salesPaymentCoaId,
      salesPaymentId: this.#salesPaymentId,
      coaId: this.#coaId,
      coaName: this.#coaName,
      coaCode: this.#coaCode,
      coaSubleadgerId: this.#coaSubleadgerId,
      coaSubleadgerCode: this.#coaSubleadgerCode,
      coaSubleadgerName: this.#coaSubleadgerName,
      payment: this.#payment,
      paymentNumber: this.#paymentNumber,
      paymentDate: this.#paymentDate,
      clearDate: this.#clearDate,
      value: this.#value,
      ...super.toModel()
    };
  }
}

class SalesPaymentCoaTotalDto extends StandardDto {
  #salesPaymentCoaTotalId;
  #salesPaymentId;
  #coaId;
  #coaCode;
  #coaName;
  #note;
  #total;

  constructor(dto) {
    super(dto);
    this.#salesPaymentCoaTotalId = dto.sales_payment_coa_total_id;
    this.#salesPaymentId = dto.sales_payment_id;
    this.#coaId = dto.coa_id;
    this.#coaCode = dto.coa_code;
    this.#coaName = dto.coa_name;
    this.#note = dto.note;
    this.#total = dto.total;
  }

  get salesPaymentCoaTotalId() {
    return this.#salesPaymentCoaTotalId;
  }

  toModel() {
    return {
      salesPaymentCoaTotalId: this.#salesPaymentCoaTotalId,
      salesPaymentId: this.#salesPaymentId,
      coaId: this.#coaId,
      coaCode: this.#coaCode,
      coaName: this.#coaName,
      note: this.#note,
      total: this.#total,
      ...super.toModel()
    };
  }
}

class SalesPaymentDepositDto extends StandardDto {
  #salesPaymentDepositId;
  #salesPaymentId;
  #salesInvId;
  #salesDepositId;
  #salesDepositDate;
  #salesDepositCode;
  #nominal;
  #totalUsed;
  #remaining;
  #isinv;
  #confirmtime;
  #confirmby;

  constructor(dto) {
    super(dto);
    this.#salesPaymentDepositId = dto.sales_payment_deposit_id;
    this.#salesPaymentId = dto.sales_payment_id;
    this.#salesInvId = dto.sales_inv_id;
    this.#salesDepositId = dto.sales_deposit_id;
    this.#salesDepositDate = dto.sales_deposit_date;
    this.#salesDepositCode = dto.sales_deposit_code;
    this.#nominal = dto.nominal;
    this.#totalUsed = dto.total_used;
    this.#remaining = dto.remaining;
    this.#isinv = dto.isiniv;
    this.#confirmtime = dto.confirmtime;
    this.#confirmby = dto.confirmby;
  }

  get salesPaymentDepositId() {
    return this.#salesPaymentDepositId;
  }

  toModel() {
    return {
      salesPaymentDepositId: this.#salesPaymentDepositId,
      salesPaymentId: this.#salesPaymentId,
      salesInvId: this.#salesInvId,
      salesDepositId: this.#salesDepositId,
      salesDepositDate: this.#salesDepositDate,
      salesDepositCode: this.#salesDepositCode,
      nominal: this.#nominal,
      totalUsed: this.#totalUsed,
      remaining: this.#remaining,
      isinv: this.#isinv,
      confirmtime: this.#confirmtime,
      confirmby: this.#confirmby,
      ...super.toModel()
    };
  }
}

class SalesPaymentDtDto extends StandardDto {
  #salesPaymentDtId;
  #salesPaymentId;
  #salesInvId;
  #salesInvDtId;
  #salesInvCode;
  #salesInvDate;
  #total;
  #totalAdvPayment;
  #totalDeposit;
  #totalPay;
  #sisaPay;

  constructor(dto) {
    super(dto);
    this.#salesPaymentDtId = dto.sales_payment_deposit_id;
    this.#salesPaymentId = dto.sales_payment_id;
    this.#salesInvId = dto.sales_inv_id;
    this.#salesInvDtId = dto.sales_inv_dt_id;
    this.#salesInvCode = dto.sales_inv_code;
    this.#salesInvDate = dto.sales_inv_date;
    this.#total = dto.total;
    this.#totalAdvPayment = dto.total_adv_payment;
    this.#totalDeposit = dto.total_deposit;
    this.#totalPay = dto.total_pay;
    this.#sisaPay = dto.sisa_pay;
  }

  get salesPaymentDtId() {
    return this.#salesPaymentDtId;
  }

  toModel() {
    return {
      salesPaymentDtId: this.#salesPaymentDtId,
      salesPaymentId: this.#salesPaymentId,
      salesInvId: this.#salesInvId,
      salesInvDtId: this.#salesInvDtId,
      salesInvCode: this.#salesInvCode,
      salesInvDate: this.#salesInvDate,
      total: this.#total,
      totalAdvPayment: this.#totalAdvPayment,
      totalDeposit: this.#totalDeposit,
      totalPay: this.#totalPay,
      sisaPay: this.#sisaPay,
      ...super.toModel()
    };
  }
}

class SalesPaymentInvoiceDto extends StandardDto {
  #salesPaymentInvoiceId;
  #salesPaymentId;
  #invoiceId;
  #invoiceCode;
  #invoiceDate;
  #totalPay;
  #sisaPay;

  constructor(dto) {
    super(dto);
    this.#salesPaymentInvoiceId = dto.sales_payment_invoice_id;
    this.#salesPaymentId = dto.sales_payment_id;
    this.#invoiceId = dto.sales_inv_id;
    this.#invoiceCode = dto.sales_inv_code;
    this.#invoiceDate = dto.sales_inv_date;
    this.#totalPay = dto.total_pay;
    this.#sisaPay = dto.sisa_pay;
  }

  get salesPaymentInvoiceId() {
    return this.#salesPaymentInvoiceId;
  }

  toModel() {
    return {
      salesPaymentInvoiceId: this.#salesPaymentInvoiceId,
      salesPaymentId: this.#salesPaymentId,
      invoiceId: this.#invoiceId,
      invoiceCode: this.#invoiceCode,
      invoiceDate: this.#invoiceDate,
      totalPay: this.#totalPay,
      sisaPay: this.#sisaPay,
      ...super.toModel()
    };
  }
}

class SalesPaymentRejectDto extends StandardDto {
  #salesPaymentRejectId;
  #salesPaymentId;
  #note;
  #userId;

  constructor(dto) {
    super(dto);
    this.#salesPaymentRejectId = dto.sales_order_reject_id;
    this.#salesPaymentId = dto.sales_payment_id;
    this.#note = dto.note;
    this.#userId = dto.userId;
  }

  get salesPaymentRejectId() {
    return this.#salesPaymentRejectId;
  }

  toModel() {
    return {
      salesPaymentRejectId: this.#salesPaymentRejectId,
      salesPaymentId: this.#salesPaymentId,
      note: this.#note,
      userId: this.#userId,
      ...super.toModel()
    };
  }
}

class SalesPaymentRequestDto extends StandardDto {
  #salesDeliveryNoteRequestId;
  #salesPaymentId;
  #note;
  #statusRequest;
  #userId;

  constructor(dto) {
    super(dto);
    this.#salesDeliveryNoteRequestId = dto.sales_order_request_id;
    this.#salesPaymentId = dto.sales_payment_id;
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
      salesPaymentId: this.#salesPaymentId,
      note: this.#note,
      userId: this.#userId,
      statusRequest: this.#statusRequest,
      ...super.toModel()
    };
  }
}

export {
  SalesPaymentDto,
  SalesPaymentAdvanceDto,
  SalesPaymentCoaDto,
  SalesPaymentCoaTotalDto,
  SalesPaymentDepositDto,
  SalesPaymentDtDto,
  SalesPaymentInvoiceDto,
  SalesPaymentRejectDto,
  SalesPaymentRequestDto
};
