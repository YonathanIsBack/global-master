import StandardDto from '../../StandardDto.js';

class SalesAdvancePaymentDto extends StandardDto {
  #salesAdvpayId;
  #salesOrderId;
  #salesOrderCode;
  #salesAdvpayCode;
  #salesAdvpayCodeTemp;
  #salesAdvpayDate;
  #traceId;
  #customerId;
  #customerBankId;
  #customerBankAccountNo;
  #customerBankAccountName;
  #bankId;
  #bankCompanyId;
  #bankAccountNo;
  #bankAccountName;
  #coaId;
  #taxNo;
  #currencyId;
  #currencyRate;
  #percentOrder;
  #totalOrder;
  #totalDp;
  #totalDpUsed;
  #persenVat;
  #totalVat;
  #total;
  #status;
  #statusNext;
  #type;
  #notes;
  #isedit;
  #confirmtime;
  #confirmby;
  #confirmtimeF;
  #confirmbyF;

  constructor(dto) {
    super(dto);
    this.#salesAdvpayId = dto.sales_advpay_id;
    this.#salesOrderId = dto.sales_order_id;
    this.#salesOrderCode = dto.sales_order_code;
    this.#salesAdvpayCode = dto.sales_advpay_code;
    this.#salesAdvpayCodeTemp = dto.sales_advpay_code_temp;
    this.#salesAdvpayDate = dto.sales_advpay_date;
    this.#traceId = dto.trace_id;
    this.#customerId = dto.customer_id;
    this.#customerBankId = dto.customer_bank_id;
    this.#customerBankAccountNo = dto.customer_bank_account_no;
    this.#customerBankAccountName = dto.customer_bank_account_name;
    this.#bankId = dto.bank_id;
    this.#bankCompanyId = dto.bank_company_id;
    this.#bankAccountNo = dto.bank_account_no;
    this.#bankAccountName = dto.bank_account_name;
    this.#coaId = dto.coa_id;
    this.#taxNo = dto.tax_no;
    this.#currencyId = dto.currency_id;
    this.#currencyRate = dto.currency_rate;
    this.#percentOrder = dto.percent_order;
    this.#totalOrder = dto.total_order;
    this.#totalDp = dto.total_dp;
    this.#totalDpUsed = dto.total_dp_used;
    this.#persenVat = dto.persen_vat;
    this.#totalVat = dto.total_vat;
    this.#total = dto.total;
    this.#status = dto.status;
    this.#statusNext = dto.status_next;
    this.#type = dto.type;
    this.#notes = dto.notes;
    this.#isedit = dto.isedit;
    this.#confirmtime = dto.confirmtime;
    this.#confirmby = dto.confirmby;
    this.#confirmtimeF = dto.confirmtime_f;
    this.#confirmbyF = dto.confirmby_f;
  }

  get salesAdvpayId() {
    return this.#salesAdvpayId;
  }

  toModel() {
    return {
      salesAdvpayId: this.#salesAdvpayId,
      salesOrderId: this.#salesOrderId,
      salesOrderCode: this.#salesOrderCode,
      salesAdvpayCode: this.#salesAdvpayCode,
      salesAdvpayCodeTemp: this.#salesAdvpayCodeTemp,
      salesAdvpayDate: this.#salesAdvpayDate,
      traceId: this.#traceId,
      customerId: this.#customerId,
      customerBankId: this.#customerBankId,
      customerBankAccountNo: this.#customerBankAccountNo,
      customerBankAccountName: this.#customerBankAccountName,
      bankId: this.#bankId,
      bankCompanyId: this.#bankCompanyId,
      bankAccountNo: this.#bankAccountNo,
      bankAccountName: this.#bankAccountName,
      coaId: this.#coaId,
      taxNo: this.#taxNo,
      currencyId: this.#currencyId,
      currencyRate: this.#currencyRate,
      percentOrder: this.#percentOrder,
      totalOrder: this.#totalOrder,
      totalDp: this.#totalDp,
      totalDpUsed: this.#totalDpUsed,
      persenVat: this.#persenVat,
      totalVat: this.#totalVat,
      total: this.#total,
      status: this.#status,
      statusNext: this.#statusNext,
      type: this.#type,
      notes: this.#notes,
      isedit: this.#isedit,
      confirmtime: this.#confirmtime,
      confirmby: this.#confirmby,
      confirmtimeF: this.#confirmtimeF,
      confirmbyF: this.#confirmbyF,
      ...super.toModel()
    };
  }
}

class SalesAdvancePaymentRejectDto extends StandardDto {
  #salesAdvancedPaymentRejectId;
  #salesAdvancedPaymentId;
  #note;
  #userId;

  constructor(dto) {
    super(dto);
    this.#salesAdvancedPaymentRejectId = dto.sales_advanced_payment_reject_id;
    this.#salesAdvancedPaymentId = dto.sales_advanced_payment_id;
    this.#note = dto.note;
    this.#userId = dto.userId;
  }

  get salesAdvancedPaymentRejectId() {
    return this.#salesAdvancedPaymentRejectId;
  }

  toModel() {
    return {
      salesAdvancedPaymentRejectId: this.#salesAdvancedPaymentRejectId,
      salesAdvancedPaymentId: this.#salesAdvancedPaymentId,
      note: this.#note,
      userId: this.#userId,
      ...super.toModel()
    };
  }
}

class SalesAdvancePaymentRequestDto extends StandardDto {
  #salesAdvancedPaymentRequestId;
  #salesAdvancedPaymentId;
  #note;
  #statusRequest;
  #userId;

  constructor(dto) {
    super(dto);
    this.salesAdvancedPaymentRequestId = dto.sales_advanced_payment_request_id;
    this.salesAdvancedPaymentId = dto.sales_advanced_payment_id;
    this.#note = dto.note;
    this.#userId = dto.user_id;
    this.#statusRequest = dto.status_request;
  }

  get salesAdvancedPaymentRequestId() {
    return this.#salesAdvancedPaymentRequestId;
  }

  toModel() {
    return {
      salesAdvancedPaymentRequestId: this.#salesAdvancedPaymentRequestId,
      salesAdvancedPaymentId: this.#salesAdvancedPaymentId,
      note: this.#note,
      userId: this.#userId,
      statusRequest: this.#statusRequest,
      ...super.toModel()
    };
  }
}
export { SalesAdvancePaymentDto, SalesAdvancePaymentRejectDto, SalesAdvancePaymentRequestDto };
