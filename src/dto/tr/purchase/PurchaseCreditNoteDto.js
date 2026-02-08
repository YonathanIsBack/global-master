import StandardDto from '../../StandardDto.js';

class PurchaseCreditNoteDto extends StandardDto {
  #purchaseCreditNoteId;
  #purchaseCreditNoteCode;
  #purchaseCreditNoteCodeTemp;
  #purchaseCreditNoteName;
  #purchaseCreditNoteDate;
  #traceId;
  #supplierId;
  #currencyId;
  #rate;
  #nominal;
  #reff;
  #note;
  #status;
  #statusNext;
  #confirmtime;
  #confirmby;
  #isedit;
  #confirmtimeF;
  #confirmbyF;

  constructor(dto) {
    super(dto);
    this.#purchaseCreditNoteId = dto.purchase_credit_note_id;
    this.#purchaseCreditNoteCode = dto.purchase_credit_note_code;
    this.#purchaseCreditNoteCodeTemp = dto.purchase_credit_note_code_temp;
    this.#purchaseCreditNoteName = dto.purchase_credit_note_name;
    this.#purchaseCreditNoteDate = dto.purchase_credit_note_date;
    this.#traceId = dto.trace_id;
    this.#supplierId = dto.supplier_id;
    this.#currencyId = dto.currency_id;
    this.#rate = dto.rate;
    this.#nominal = dto.nominal;
    this.#reff = dto.reff;
    this.#note = dto.note;
    this.#status = dto.status;
    this.#statusNext = dto.status_next;
    this.#confirmtime = dto.confirmtime;
    this.#confirmby = dto.confirmby;
    this.#isedit = dto.isedit;
    this.#confirmtimeF = dto.confirmtime_f;
    this.#confirmbyF = dto.confirmby_f;
  }

  get purchaseCreditNoteId() {
    return this.#purchaseCreditNoteId;
  }

  toModel() {
    return {
      purchaseCreditNoteId: this.#purchaseCreditNoteId,
      purchaseCreditNoteId: this.#purchaseCreditNoteId,
      purchaseCreditNoteCode: this.#purchaseCreditNoteCode,
      purchaseCreditNoteCodeTemp: this.#purchaseCreditNoteCodeTemp,
      purchaseCreditNoteName: this.#purchaseCreditNoteName,
      purchaseCreditNoteDate: this.#purchaseCreditNoteDate,
      traceId: this.#traceId,
      supplierId: this.#supplierId,
      currencyId: this.#currencyId,
      rate: this.#rate,
      nominal: this.#nominal,
      reff: this.#reff,
      note: this.#note,
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

class PurchaseCreditNoteDtDto extends StandardDto {
  #purchaseCreditNoteDtId;
  #purchaseCreditNoteId;
  #date;
  #amount;

  constructor(dto) {
    super(dto);
    this.#purchaseCreditNoteDtId = dto.purchase_credit_note_dt_id;
    this.#purchaseCreditNoteId = dto.purchase_credit_note_id;
    this.#date = date;
    this.#amount = amount;
  }
  get purchaseCreditNoteDtId() {
    return this.#purchaseCreditNoteDtId;
  }
  toModel() {
    return {
      purchaseCreditNoteDtId: this.#purchaseCreditNoteDtId,
      purchaseCreditNoteId: this.#purchaseCreditNoteId,
      date: this.#date,
      amount: this.#amount,
      ...super.toModel()
    };
  }
}
export { PurchaseCreditNoteDto, PurchaseCreditNoteDtDto };
