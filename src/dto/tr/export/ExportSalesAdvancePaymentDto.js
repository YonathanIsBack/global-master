import StandardDto from '../../StandardDto.js';

class ExportSalesAdvancePaymentDto extends StandardDto {
  #exportSalesAdvpayId;
  #exportSalesOrderId;
  #exportSalesOrderCode;
  #exportSalesAdvpayCode;
  #exportSalesAdvpayCodeTemp;
  #exportSalesAdvpayDate;
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
  #persentVat;
  #totalVat;
  #total;
  #status;
  #statusNext;
  #notes;
  #isedit;
  #confirmtime;
  #confirmby;
  #confirmtimeF;
  #confirmbyF;

  constructor(dto) {
    super(dto);
    this.#exportSalesAdvpayId = dto.export_sales_advpay_id;
    this.#exportSalesOrderId = dto.export_sales_order_id;
    this.#exportSalesOrderCode = dto.export_sales_order_code;
    this.#exportSalesAdvpayCode = dto.export_sales_advpay_code;
    this.#exportSalesAdvpayCodeTemp = dto.export_sales_advpay_code_temp;
    this.#exportSalesAdvpayDate = dto.export_sales_advpay_date;
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
    this.#persentVat = dto.persen_vat;
    this.#totalVat = dto.total_vat;
    this.#total = dto.total;
    this.#status = dto.status;
    this.#statusNext = dto.status_next;
    this.#notes = dto.notes;
    this.#isedit = dto.isedit;
    this.#confirmtime = dto.confirmtime;
    this.#confirmby = dto.confirmby;
    this.#confirmtimeF = dto.confirmtime_f;
    this.#confirmbyF = dto.confirmby_f;
  }

  get exportSalesAdvpayId() {
    return this.#exportSalesAdvpayId;
  }

  toModel() {
    return {
      exportSalesAdvpayId: this.#exportSalesAdvpayId,
      exportSalesAdvpayId: this.#exportSalesAdvpayId,
      exportSalesOrderId: this.#exportSalesOrderId,
      exportSalesOrderCode: this.#exportSalesOrderCode,
      exportSalesAdvpayCode: this.#exportSalesAdvpayCode,
      exportSalesAdvpayCodeTemp: this.#exportSalesAdvpayCodeTemp,
      exportSalesAdvpayDate: this.#exportSalesAdvpayDate,
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
      persentVat: this.#persentVat,
      totalVat: this.#totalVat,
      total: this.#total,
      status: this.#status,
      statusNext: this.#statusNext,
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

class ExportSalesAdvancePaymentRejectDto extends StandardDto {
  #exportSalesAdvancedPaymentRejectId;
  #exportSalesAdvancePaymentId;
  #note;
  #userId;

  constructor(dto) {
    super(dto);
    this.#exportSalesAdvancedPaymentRejectId = dto.export_sales_advanced_payment_reject_id;
    this.#exportSalesAdvancePaymentId = dto.export_sales_advanced_payment_id;
    this.#note = dto.note;
    this.#userId = dto.user_id;
  }
  get exportSalesAdvancedPaymentRejectId() {
    return this.#exportSalesAdvancedPaymentRejectId;
  }
  toModel() {
    return {
      exportSalesAdvancedPaymentRejectId: this.#exportSalesAdvancedPaymentRejectId,
      exportSalesAdvancePaymentId: this.#exportSalesAdvancePaymentId,
      note: this.#note,
      userId: this.#userId,
      ...super.toModel()
    };
  }
}

class ExportSalesAdvancePaymentRequestDto extends StandardDto {
  #exportSalesAdvancedPaymentRequestId;
  #exportSalesAdvancePaymentId;
  #note;
  #statusRequest;
  #userId;

  constructor(dto) {
    super(dto);
    this.#exportSalesAdvancedPaymentRequestId = dto.export_sales_advanced_payment_reject_id;
    this.#exportSalesAdvancePaymentId = dto.export_sales_advanced_payment_id;
    this.#note = dto.note;
    this.#userId = dto.user_id;
    this.#statusRequest = dto.status_request;
  }
  get exportSalesAdvancedPaymentRequestId() {
    return this.#exportSalesAdvancedPaymentRequestId;
  }
  toModel() {
    return {
      exportSalesAdvancedPaymentRequestId: this.#exportSalesAdvancedPaymentRequestId,
      exportSalesAdvancePaymentId: this.#exportSalesAdvancePaymentId,
      note: this.#note,
      userId: this.#userId,
      statusRequest: this.#statusRequest,

      ...super.toModel()
    };
  }
}
export {
  ExportSalesAdvancePaymentDto,
  ExportSalesAdvancePaymentRejectDto,
  ExportSalesAdvancePaymentRequestDto
};
