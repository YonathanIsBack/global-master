import StandardDto from '../../StandardDto.js';

class ExportSalesPaymentDto extends StandardDto {
  #exportSalesPaymentId;
  #exportSalesPaymentCode;
  #exportSalesPaymentCode_temp;
  #exportSalesPaymentDate;
  #exportSalesOrderId;
  #exportSalesOrderCode;
  #exportSalesInvId;
  #exportSalesInvCode;
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
  #confirmby;
  #isedit;
  #confirmtimeF;
  #confirmbyF;

  constructor(dto) {
    super(dto);
    this.#exportSalesPaymentId = dto.export_sales_payment_id;
    this.#exportSalesPaymentCode = dto.export_sales_payment_code;
    this.#exportSalesPaymentCode_temp = dto.export_sales_payment_code_temp;
    this.#exportSalesPaymentDate = dto.export_sales_payment_date;
    this.#exportSalesOrderId = dto.export_sales_order_id;
    this.#exportSalesOrderCode = dto.export_sales_order_code;
    this.#exportSalesInvId = dto.export_sales_inv_id;
    this.#exportSalesInvCode = dto.export_sales_inv_code;
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
    this.#bankAccountNo = dto.customer_bank_account_no;
    this.#bankAccountName = dto.customer_bank_account_name;
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
    this.#confirmby = dto.confirmby;
    this.#isedit = dto.isedit;
    this.#confirmtimeF = dto.confirmtime_f;
    this.#confirmbyF = dto.confirmby_f;
  }

  get exportSalesPaymentId() {
    return this.#exportSalesPaymentId;
  }

  toModel() {
    return {
      exportSalesPaymentId: this.#exportSalesPaymentId,
      exportSalesPaymentCode: this.#exportSalesPaymentCode,
      exportSalesPaymentCode_temp: this.#exportSalesPaymentCode_temp,
      exportSalesPaymentDate: this.#exportSalesPaymentDate,
      exportSalesOrderId: this.#exportSalesOrderId,
      exportSalesOrderCode: this.#exportSalesOrderCode,
      exportSalesInvId: this.#exportSalesInvId,
      exportSalesInvCode: this.#exportSalesInvCode,
      type: this.#type,
      traceId: this.#traceId,
      warehouseId: this.#warehouseId,
      customerId: this.#customerId,
      customerBankId: this.#customerBankId,
      switchCode: this.#swiftCode,
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
      confirmby: this.#confirmby,
      isedit: this.#isedit,
      confirmtimeF: this.#confirmtimeF,
      confirmbyF: this.#confirmbyF,
      ...super.toModel()
    };
  }
}

class ExportSalesPaymentAdvanceDto extends StandardDto {
  #exportSalesPaymentAdvpayId;
  #exportSalesPaymentId;
  #exportSalesInvId;
  #exportSalesAdvpayId;
  #exportSalesAdvpayCode;
  #totalDp;
  #totalUsed;
  #remaining;
  #isinv;

  constructor(dto) {
    super(dto);
    this.#exportSalesPaymentAdvpayId = dto.export_sales_payment_advpay_id;
    this.#exportSalesPaymentId = dto.export_sales_payment_id;
    this.#exportSalesInvId = dto.export_sales_inv_id;
    this.#exportSalesAdvpayId = dto.export_sales_advpay_id;
    this.#exportSalesAdvpayCode = dto.export_sales_advpay_code;
    this.#totalDp = dto.total_dp;
    this.#totalUsed = dto.total_used;
    this.#remaining = dto.remaining;
    this.#isinv = dto.isadv;
  }

  get exportSalesPaymentAdvpayId() {
    return this.#exportSalesPaymentAdvpayId;
  }

  toModel() {
    return {
      exportSalesPaymentAdvpayId: this.#exportSalesPaymentAdvpayId,
      exportSalesPaymentId: this.#exportSalesPaymentId,
      exportSalesInvId: this.#exportSalesInvId,
      exportSalesAdvpayId: this.#exportSalesAdvpayId,
      exportSalesAdvpayCode: this.#exportSalesAdvpayCode,
      totalDp: this.#totalDp,
      totalUsed: this.#totalUsed,
      remaining: this.#remaining,
      isinv: this.#isinv,
      ...super.toModel()
    };
  }
}

class ExportSalesPaymentCoaDto extends StandardDto {
  #exportSalesPaymentCoaId;
  #exportSalesPaymentId;
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
    this.#exportSalesPaymentCoaId = dto.export_sales_inv_bc16_id;
    this.#exportSalesPaymentId = dto.export_sales_payment_id;
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

  get exportSalesPaymentCoaId() {
    return this.#exportSalesPaymentCoaId;
  }

  toModel() {
    return {
      exportSalesPaymentCoaId: this.#exportSalesPaymentCoaId,
      exportSalesPaymentId: this.#exportSalesPaymentId,
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

class ExportSalesPaymentCoaSDto extends StandardDto {
  #exportSalesPaymentCoaSId;
  #exportSalesPaymentId;
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
    this.#exportSalesPaymentCoaSId = dto.export_sales_order_dt_id;
    this.#exportSalesPaymentId = dto.export_sales_payment_id;
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

  get exportSalesPaymentCoaSId() {
    return this.#exportSalesPaymentCoaSId;
  }

  toModel() {
    return {
      exportSalesPaymentCoaSId: this.#exportSalesPaymentCoaSId,
      exportSalesPaymentId: this.#exportSalesPaymentId,
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

class ExportSalesPaymentCoaTDto extends StandardDto {
  #exportSalesPaymentCoaTId;
  #exportSalesPaymentId;
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
    this.#exportSalesPaymentCoaTId = dto.export_sales_order_dt_id;
    this.#exportSalesPaymentId = dto.export_sales_payment_id;
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

  get exportSalesPaymentCoaTId() {
    return this.#exportSalesPaymentCoaTId;
  }

  toModel() {
    return {
      exportSalesPaymentCoaTId: this.#exportSalesPaymentCoaTId,
      exportSalesPaymentId: this.#exportSalesPaymentId,
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

class ExportSalesPaymentCoaTotalDto extends StandardDto {
  #exportSalesPaymentCoaTotalId;
  #exportSalesPaymentId;
  #coaId;
  #coaCode;
  #coaName;
  #note;
  #total;

  constructor(dto) {
    super(dto);
    this.#exportSalesPaymentCoaTotalId = dto.export_sales_payment_coa_total_id;
    this.#exportSalesPaymentId = dto.export_sales_payment_id;
    this.#coaId = dto.coa_id;
    this.#coaCode = dto.coa_code;
    this.#coaName = dto.coa_name;
    this.#note = dto.note;
    this.#total = dto.total;
  }

  get exportSalesPaymentCoaTotalId() {
    return this.#exportSalesPaymentCoaTotalId;
  }

  toModel() {
    return {
      exportSalesPaymentCoaTotalId: this.#exportSalesPaymentCoaTotalId,
      exportSalesPaymentId: this.#exportSalesPaymentId,
      coaId: this.#coaId,
      coaCode: this.#coaCode,
      coaName: this.#coaName,
      note: this.#note,
      total: this.#total,
      ...super.toModel()
    };
  }
}

class ExportSalesPaymentDepositDto extends StandardDto {
  #exportSalesPaymentDepositId;
  #exportSalesPaymentId;
  #exportSalesDepositId;
  #exportSalesDepositDate;
  #exportSalesDepositCode;
  #nominal;
  #confirmtime;
  #confirmby;

  constructor(dto) {
    super(dto);
    this.#exportSalesPaymentDepositId = dto.export_sales_payment_coa_total_id;
    this.#exportSalesPaymentId = dto.export_sales_payment_id;
    this.#exportSalesDepositId = dto.export_sales_deposit_id;
    this.#exportSalesDepositDate = dto.export_sales_deposit_date;
    this.#exportSalesDepositCode = dto.export_sales_deposit_code;
    this.#nominal = dto.nominal;
    this.#confirmtime = dto.confirmtime;
    this.#confirmby = dto.confirmby;
  }

  get exportSalesPaymentDepositId() {
    return this.#exportSalesPaymentDepositId;
  }

  toModel() {
    return {
      exportSalesPaymentDepositId: this.#exportSalesPaymentDepositId,
      exportSalesPaymentId: this.#exportSalesPaymentId,
      exportSalesDepositId: this.#exportSalesDepositId,
      exportSalesDepositDate: this.#exportSalesDepositDate,
      exportSalesDepositCode: this.#exportSalesDepositCode,
      nominal: this.#nominal,
      confirmtime: this.#confirmtime,
      confirmby: this.#confirmby,
      ...super.toModel()
    };
  }
}

class ExportSalesPaymentDtDto extends StandardDto {
  #exportSalesPaymentDtId;
  #exportSalesPaymentId;
  #exportSalesInvId;
  #exportSalesInvDtId;
  #exportSalesInvCode;
  #exportSalesInvDate;
  #total;
  #totalPay;
  #sisaPay;

  constructor(dto) {
    super(dto);
    this.#exportSalesPaymentDtId = dto.export_sales_payment_dt_id;
    this.#exportSalesPaymentId = dto.export_sales_payment_id;
    this.#exportSalesInvId = dto.export_sales_inv_id;
    this.#exportSalesInvDtId = dto.export_sales_inv_dt_id;
    this.#exportSalesInvCode = dto.export_sales_inv_code;
    this.#exportSalesInvDate = dto.export_sales_inv_date;
    this.#total = dto.total;
    this.#totalPay = dto.total_pay;
    this.#sisaPay = dto.sisa_pay;
  }

  get exportSalesPaymentDtId() {
    return this.#exportSalesPaymentDtId;
  }

  toModel() {
    return {
      exportSalesPaymentDtId: this.#exportSalesPaymentDtId,
      exportSalesPaymentId: this.#exportSalesPaymentId,
      exportSalesInvId: this.#exportSalesInvId,
      exportSalesInvDtId: this.#exportSalesInvDtId,
      exportSalesInvCode: this.#exportSalesInvCode,
      exportSalesInvDate: this.#exportSalesInvDate,
      total: this.#total,
      totalPay: this.#totalPay,
      sisaPay: this.#sisaPay,
      ...super.toModel()
    };
  }
}
class ExportSalesPaymentRejectDto extends StandardDto {
  #exportSalesPaymentRejectId;
  #exportPalesPackingListId;
  #note;
  #userId;

  constructor(dto) {
    super(dto);
    this.#exportSalesPaymentRejectId = dto.export_sales_payment_reject_id;
    this.#exportPalesPackingListId = dto.export_sales_packing_list_id;
    this.#note = dto.note;
    this.#userId = dto.user_id;
  }

  get exportSalesPaymentRejectId() {
    return this.#exportSalesPaymentRejectId;
  }

  toModel() {
    return {
      exportSalesPaymentRejectId: this.#exportSalesPaymentRejectId,
      exportPalesPackingListId: this.#exportPalesPackingListId,
      note: this.#note,
      userId: this.#userId,
      ...super.toModel()
    };
  }
}

class ExportSalesPaymentRequestDto extends StandardDto {
  #exportSalesPackingListRequestId;
  #exportSalesPackingListId;
  #note;
  #userId;
  #statusRequest;

  constructor(dto) {
    super(dto);
    this.#exportSalesPackingListRequestId = dto.export_sales_payment_request_id;
    this.#exportSalesPackingListId = dto.export_sales_packing_list_id;
    this.#note = dto.note;
    this.#userId = dto.user_id;
    this.#statusRequest = dto.status_request;
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
      ...super.toModel()
    };
  }
}

export {
  ExportSalesPaymentDto,
  ExportSalesPaymentAdvanceDto,
  ExportSalesPaymentCoaDto,
  ExportSalesPaymentCoaSDto,
  ExportSalesPaymentCoaTDto,
  ExportSalesPaymentCoaTotalDto,
  ExportSalesPaymentDepositDto,
  ExportSalesPaymentDtDto,
  ExportSalesPaymentRejectDto,
  ExportSalesPaymentRequestDto
};
