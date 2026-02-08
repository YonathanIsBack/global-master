import StandardDto from '../../StandardDto.js';

class SalesDepositDto extends StandardDto {
  #salesDepositId;
  #salesDepositCode;
  #salesDepositCodeTemp;
  #salesDepositDate;
  #salesDepositClose_date;
  #traceId;
  #customerId;
  #note;
  #deposit;
  #used;
  #coaId;
  #coaSubleadgerId;
  #coaIdTo;
  #coaSubleadgerIdTo;
  #paymentType;
  #status;
  #statusNext;
  #confirmtime;
  #confirmby;
  #isedit;
  #confirmtimeF;
  #confirmbyF;

  constructor(dto) {
    super(dto);
    this.#salesDepositId = dto.sales_deposit_id;
    this.#salesDepositCode = dto.sales_deposit_code;
    this.#salesDepositCodeTemp = dto.sales_deposit_code_temp;
    this.#salesDepositDate = dto.sales_deposit_date;
    this.#salesDepositClose_date = dto.sales_deposit_close_date;
    this.#traceId = dto.trace_id;
    this.#customerId = dto.customer_id;
    this.#note = dto.note;
    this.#deposit = dto.deposit;
    this.#used = dto.used;
    this.#coaId = dto.coa_id;
    this.#coaSubleadgerId = dto.coa_subleadger_id;
    this.#coaIdTo = dto.coa_id_to;
    this.#coaSubleadgerIdTo = dto.coa_subleadger_id_to;
    this.#paymentType = dto.payment_type;
    this.#status = dto.status;
    this.#statusNext = dto.status_next;
    this.#confirmtime = dto.confirmtime;
    this.#confirmby = dto.confirmby;
    this.#isedit = dto.isedit;
    this.#confirmtimeF = dto.confirmtime_f;
    this.#confirmbyF = dto.confirmby_f;
  }

  get salesDepositId() {
    return this.#salesDepositId;
  }

  toModel() {
    return {
      salesDepositId: this.#salesDepositId,
      salesDepositId: this.#salesDepositId,
      salesDepositCode: this.#salesDepositCode,
      salesDepositCodeTemp: this.#salesDepositCodeTemp,
      salesDepositDate: this.#salesDepositDate,
      salesDepositCloseDate: this.#salesDepositClose_date,
      traceId: this.#traceId,
      customerId: this.#customerId,
      note: this.#note,
      deposit: this.#deposit,
      used: this.#used,
      coaId: this.#coaId,
      coaSubleadgerId: this.#coaSubleadgerId,
      coaIdTo: this.#coaIdTo,
      coaSubleadgerIdTo: this.#coaSubleadgerIdTo,
      paymentType: this.#paymentType,
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

class SalesDepositRejectDto extends StandardDto {
  #salesDepositRejectId;
  #salesDepositId;
  #note;
  #userId;

  constructor(dto) {
    super(dto);
    this.#salesDepositRejectId = dto.sales_deposit_reject_id;
    this.#salesDepositId = dto.sales_deposit_id;
    this.#note = dto.note;
    this.#userId = dto.userId;
  }

  get salesDepositRejectId() {
    return this.#salesDepositRejectId;
  }

  toModel() {
    return {
      salesDepositRejectId: this.#salesDepositRejectId,
      salesDepositId: this.#salesDepositId,
      note: this.#note,
      userId: this.#userId,
      ...super.toModel()
    };
  }
}

class SalesDepositRequestDto extends StandardDto {
  #salesDepositRequestId;
  #salesDepositId;
  #note;
  #statusRequest;
  #userId;

  constructor(dto) {
    super(dto);
    this.salesDepositRequestId = dto.sales_deposit_request_id;
    this.salesDepositId = dto.sales_deposit_id;
    this.#note = dto.note;
    this.#userId = dto.user_id;
    this.#statusRequest = dto.status_request;
  }

  get salesDepositRequestId() {
    return this.salesDepositRequestId;
  }

  toModel() {
    return {
      salesDepositRequestId: this.#salesDepositRequestId,
      salesDepositId: this.#salesDepositId,
      note: this.#note,
      userId: this.#userId,
      statusRequest: this.#statusRequest,
      ...super.toModel()
    };
  }
}
export { SalesDepositDto, SalesDepositRejectDto, SalesDepositRequestDto };
