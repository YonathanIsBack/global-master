import StandardDto from '../StandardDto.js';

class MemoJurnalDto extends StandardDto {
  #glMemoJurnalId;
  #glMemoCode;
  #glMemoCodeTemp;
  #glMemoDate;
  #type;
  #reff;
  #note;
  #supplierId;
  #customerId;
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
    this.#glMemoJurnalId = request.gl_memo_jurnal_id;
    this.#glMemoCode = request.gl_memo_code;
    this.#glMemoCodeTemp = request.gl_memo_code_temp;
    this.#glMemoDate = request.gl_memo_date;
    this.#type = request.type;
    this.#reff = request.reff;
    this.#note = request.note;
    this.#supplierId = request.supplier_id;
    this.#customerId = request.customer_id;
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

  get glMemoJurnalId() {
    return this.#glMemoJurnalId;
  }

  toModel() {
    return {
      glMemoJurnalId: this.#glMemoJurnalId,
      glMemoCode: this.#glMemoCode,
      glMemoCodeTemp: this.#glMemoCodeTemp,
      glMemoDate: this.#glMemoDate,
      type: this.#type,
      reff: this.#reff,
      note: this.#note,
      supplierId: this.#supplierId,
      customerId: this.#customerId,
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
class MemoJurnalDtDto extends StandardDto {
  #glMemoJurnalDtId;
  #glMemoJurnalId;
  #coaId;
  #departmentId;
  #currencyId;
  #currencyRate;
  #keterangan;
  #total;
  #debit;
  #credit;

  constructor(request) {
    super(request);
    this.#glMemoJurnalDtId = request.gl_memo_jurnal_dt_id;
    this.#glMemoJurnalId = request.gl_memo_jurnal_id;
    this.#coaId = request.coa_id;
    this.#departmentId = request.department_id;
    this.#currencyId = request.currency_id;
    this.#currencyRate = request.currency_rate;
    this.#keterangan = request.keterangan;
    this.#total = request.total;
    this.#debit = request.debit;
    this.#credit = request.credit;
  }

  get glMemoJurnalDtId() {
    return this.#glMemoJurnalDtId;
  }

  toModel() {
    return {
      glMemoJurnalDtId: this.#glMemoJurnalDtId,
      glMemoJurnalId: this.#glMemoJurnalId,
      coaId: this.#coaId,
      departmentId: this.#departmentId,
      currencyId: this.#currencyId,
      currencyRate: this.#currencyRate,
      keterangan: this.#keterangan,
      total: this.#total,
      debit: this.#debit,
      credit: this.#credit,
      ...super.toModel()
    };
  }
}
class MemoJurnalRejectDto extends StandardDto {
  #memoJurnalRejectId;
  #glMemoJurnalId;
  #note;
  #userId;

  constructor(request) {
    super(request);
    this.#memoJurnalRejectId = request.memo_jurnal_reject_id;
    this.#glMemoJurnalId = request.gl_memo_jurnal_id;
    this.#note = request.note;
    this.#userId = request.user_id;
  }

  get memoJurnalRejectId() {
    return this.#memoJurnalRejectId;
  }

  toModel() {
    return {
      memoJurnalRejectId: this.#memoJurnalRejectId,
      glMemoJurnalId: this.#glMemoJurnalId,
      note: this.#note,
      userId: this.#userId,
      ...super.toModel()
    };
  }
}
class MemoJurnalRequestDto extends StandardDto {
  #memoJurnalRequestId;
  #glMemoJurnalId;
  #note;
  #statusRequest;
  #userId;

  constructor(request) {
    super(request);
    this.#memoJurnalRequestId = request.memoJurnalRequestId;
    this.#glMemoJurnalId = request.glMemoJurnalId;
    this.#note = request.note;
    this.#statusRequest = request.statusRequest;
    this.#userId = request.userId;
  }

  get memoJurnalRequestId() {
    return this.#memoJurnalRequestId();
  }

  toModel() {
    return {
      memoJurnalRequestId: this.#memoJurnalRequestId,
      glMemoJurnalId: this.#glMemoJurnalId,
      note: this.#note,
      statusRequest: this.#statusRequest,
      userId: this.#userId,
      ...super.toModel()
    };
  }
}

export { MemoJurnalDtDto, MemoJurnalDto, MemoJurnalRejectDto, MemoJurnalRequestDto };
