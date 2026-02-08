import StandardDto from '../StandardDto.js';

class CashBankDto extends StandardDto {
  #glCashBankId;
  #glCashBankCode;
  #glCashBankCodeTemp;
  #glCashBankDate;
  #type;
  #departmentId;
  #coaId;
  #from;
  #reff;
  #note;
  #paymentMethod;
  #accountNo;
  #currencyId;
  #currencyRate;
  #isrecurring;
  #recurringName;
  #total;
  #status;
  #statusNext;
  #isedit;
  #confirmtime;
  #confirmby;
  #confirmtimeF;
  #confirmbyF;

  constructor(request) {
    super(request);
    this.#glCashBankId = request.gl_cash_bank_id;
    this.#glCashBankCode = request.gl_cash_bank_code;
    this.#glCashBankCodeTemp = request.gl_cash_bank_code_temp;
    this.#glCashBankDate = request.gl_cash_bank_date;
    this.#type = request.type;
    this.#departmentId = request.department_id;
    this.#coaId = request.coa_id;
    this.#from = request.from;
    this.#reff = request.reff;
    this.#note = request.note;
    this.#paymentMethod = request.payment_method;
    this.#accountNo = request.account_no;
    this.#currencyId = request.currency_id;
    this.#currencyRate = request.currency_rate;
    this.#isrecurring = request.isrecurring;
    this.#recurringName = request.recurring_name;
    this.#total = request.total;
    this.#status = request.status;
    this.#statusNext = request.status_next;
    this.#isedit = request.isedit;
    this.#confirmtime = request.confirmtime;
    this.#confirmby = request.confirmby;
    this.#confirmtimeF = request.confirmtimeF;
    this.#confirmbyF = request.confirmbyF;
  }

  get glCashBankId() {
    return this.#glCashBankId;
  }

  toModel() {
    return {
      glCashBankId: this.#glCashBankId,
      glCashBankCode: this.#glCashBankCode,
      glCashBankCodeTemp: this.#glCashBankCodeTemp,
      glCashBankDate: this.#glCashBankDate,
      type: this.#type,
      departmentId: this.#departmentId,
      coaId: this.#coaId,
      from: this.#from,
      reff: this.#reff,
      note: this.#note,
      paymentMethod: this.#paymentMethod,
      accountNo: this.#accountNo,
      currencyId: this.#currencyId,
      currencyRate: this.#currencyRate,
      isrecurring: this.#isrecurring,
      recurringName: this.#recurringName,
      total: this.#total,
      status: this.#status,
      statusNext: this.#statusNext,
      isedit: this.#isedit,
      confirmtime: this.#confirmtime,
      confirmby: this.#confirmby,
      confirmtimeF: this.#confirmtimeF,
      confirmbyF: this.#confirmbyF,
      ...super.toModel()
    };
  }
}
class CashBankDtDto extends StandardDto {
  #glCashBankDtId;
  #glCashBankId;
  #coaId;
  #departmentId;
  #supplierId;
  #customerId;
  #keterangan;
  #credit;
  #debit;

  constructor(request) {
    super(request);
    this.#glCashBankDtId = request.gl_cash_bank_dt_id;
    this.#glCashBankId = request.gl_cash_bank_id;
    this.#coaId = request.coa_id;
    this.#departmentId = request.department_id;
    this.#supplierId = request.supplier_id;
    this.#customerId = request.customer_id;
    this.#keterangan = request.keterangan;
    this.#credit = request.credit;
    this.#debit = request.debit;
  }

  get glCashBankDtId() {
    return this.#glCashBankDtId;
  }

  toModel() {
    return {
      glCashBankDtId: this.#glCashBankDtId,
      glCashBankId: this.#glCashBankId,
      coaId: this.#coaId,
      departmentId: this.#departmentId,
      supplierId: this.#supplierId,
      customerId: this.#customerId,
      keterangan: this.#keterangan,
      credit: this.#credit,
      debit: this.#debit,
      ...super.toModel()
    };
  }
}
class CashBankRejectDto extends StandardDto {
  #cashBankRejectId;
  #glCashBankId;
  #note;
  #userId;

  constructor(request) {
    super(request);
    this.#cashBankRejectId = request.cash_bank_reject_id;
    this.#glCashBankId = request.gl_cash_bank_id;
    this.#note = request.note;
    this.#userId = request.userId;
  }

  get cashBankRejectId() {
    return this.#cashBankRejectId;
  }

  toModel() {
    return {
      cashBankRejectId: this.#cashBankRejectId,
      glCashBankId: this.#glCashBankId,
      note: this.#note,
      userId: this.#userId,
      ...super.toModel()
    };
  }
}
class CashBankRequestDto extends StandardDto {
  #cashBankRequestId;
  #glCashBankId;
  #note;
  #statusRequest;
  #userId;

  constructor(request) {
    super(request);
    this.#cashBankRequestId = request.cash_bank_request_id;
    this.#glCashBankId = request.gl_cash_bank_id;
    this.#note = request.note;
    this.#statusRequest = request.status_request;
    this.#userId = request.user_id;
  }

  get cashBankRequestId() {
    return this.#cashBankRequestId;
  }

  toModel() {
    return {
      cashBankRequestId: this.#cashBankRequestId,
      glCashBankId: this.#glCashBankId,
      note: this.#note,
      statusRequest: this.#statusRequest,
      userId: this.#userId,
      ...super.toModel()
    };
  }
}

export { CashBankDtDto, CashBankDto, CashBankRejectDto, CashBankRequestDto };

