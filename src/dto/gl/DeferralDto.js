import StandardDto from '../StandardDto.js';

class DeferralDto extends StandardDto {
  #glDeferralId;
  #glDeferralCode;
  #glDeferralCodeTemp;
  #glDeferralDate;
  #supplierId;
  #customerId;
  #note;
  #startDate;
  #continueDate;
  #periode;
  #status;
  #statusNext;
  #isedit;
  #glDeferral;
  #confirmtime;
  #confirmby;
  #confirmtimeF;
  #confirmbyF;

  constructor(request) {
    super(request);
    this.#glDeferralId = request.gl_deferral_id;
    this.#glDeferralCode = request.gl_deferral_code;
    this.#glDeferralCodeTemp = request.gl_deferral_code_temp;
    this.#glDeferralDate = request.gl_deferral_date;
    this.#supplierId = request.supplier_id;
    this.#customerId = request.customer_id;
    this.#note = request.note;
    this.#startDate = request.start_date;
    this.#continueDate = request.continue_date;
    this.#periode = request.periode;
    this.#status = request.status;
    this.#statusNext = request.status_next;
    this.#isedit = request.isedit;
    this.#glDeferral = request.gl_deferral;
    this.#confirmtime = request.confirmtime;
    this.#confirmby = request.confirmby;
    this.#confirmtimeF = request.confirmtimeF;
    this.#confirmbyF = request.confirmbyF;
  }

  get glDeferralId() {
    return this.#glDeferralId;
  }

  toModel() {
    return {
      glDeferralId: this.#glDeferralId,
      glDeferralCode: this.#glDeferralCode,
      glDeferralCodeTemp: this.#glDeferralCodeTemp,
      glDeferralDate: this.#glDeferralDate,
      supplierId: this.#supplierId,
      customerId: this.#customerId,
      note: this.#note,
      startDate: this.#startDate,
      continueDate: this.#continueDate,
      periode: this.#periode,
      status: this.#status,
      statusNext: this.#statusNext,
      isedit: this.#isedit,
      glDeferral: this.#glDeferral,
      confirmtime: this.#confirmtime,
      confirmby: this.#confirmby,
      confirmtimeF: this.#confirmtimeF,
      confirmbyF: this.#confirmbyF,
      ...super.toModel()
    };
  }
}
class DeferralDtDto extends StandardDto {}
class DeferralRejectDto extends StandardDto {}
class DeferralRequestDto extends StandardDto {}

export { DeferralDto, DeferralDtDto, DeferralRejectDto, DeferralRequestDto };
