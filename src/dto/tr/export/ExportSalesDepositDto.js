import StandardDto from '../../StandardDto.js';

class ExportDepositDto extends StandardDto {
  #exportSalesDepositId;
  #exportSalesDepositCode;
  #exportSalesDepositDate;
  #exportSalesDepositCloseDate;
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
  #cretime;
  #creby;
  #modtime;
  #modby;
  #confirmtime;
  #confirmby;
  #isedit;
  #confirmtimeF;
  #confirmbyF;

  constructor(dto) {
    super(dto);
    this.#exportSalesDepositId = dto.exportSalesDepositId;
    this.#exportSalesDepositCode = dto.export_sales_advanced_payment_id;
    this.#exportSalesDepositDate = dto.note;
    this.#exportSalesDepositCloseDate = dto.user_id;
    this.#traceId = dto.status_request;
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
    this.#cretime = dto.cretime;
    this.#creby = dto.creby;
    this.#modtime = dto.modtime;
    this.#modby = dto.modby;
    this.#confirmtime = dto.confirmtime;
    this.#confirmby = dto.confirmby;
    this.#isedit = dto.isedit;
    this.#confirmtimeF = dto.confirmtime_f;
    this.#confirmbyF = dto.confirmby_f;
  }
  get exportSalesDepositId() {
    return this.#exportSalesDepositId;
  }
  toModel() {
    return {
      exportSalesDepositId: this.#exportSalesDepositId,
      exportSalesDepositCode: this.#exportSalesDepositCode,
      exportSalesDepositDate: this.#exportSalesDepositDate,
      exportSalesDepositCloseDate: this.#exportSalesDepositCloseDate,
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
      cretime: this.#cretime,
      creby: this.#creby,
      modtime: this.#modtime,
      modby: this.#modby,
      confirmtime: this.#confirmtime,
      confirmby: this.#confirmby,
      isedit: this.#isedit,
      confirmtimeF: this.#confirmtimeF,
      confirmbyF: this.#confirmbyF,
      ...super.toModel()
    };
  }
}
export default ExportDepositDto;
