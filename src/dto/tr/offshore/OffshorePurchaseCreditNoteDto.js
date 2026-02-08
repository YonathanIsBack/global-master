import StandardDto from '../../StandardDto.js';

class OffshorePurchaseCreditNoteDto extends StandardDto {
  #offshorePurchaseCreditNoteId;
  #offshorePurchaseCreditNoteCode;
  #offshorePurchaseCreditNoteCodeTemp;
  #offshorePurchaseCreditNoteName;
  #offshorePurchaseCreditNoteDate;
  #traceId;
  #supplierId;
  #currencyId;
  #currencyRate;
  #nominal;
  #used;
  #reff;
  #note;
  #status;
  #statusNext;
  #isedit;
  #confirmtime;
  #confirmby;
  #confirmtimeF;
  #confirmbyF;

  constructor(dto) {
    super(dto);
    this.#offshorePurchaseCreditNoteId = dto.offshore_purchase_credit_note_id;
    this.#offshorePurchaseCreditNoteCode = dto.offshore_purchase_credit_note_code;
    this.#offshorePurchaseCreditNoteCodeTemp = dto.offshore_purchase_credit_note_code_temp;
    this.#offshorePurchaseCreditNoteName = dto.offshore_purchase_credit_note_name;
    this.#offshorePurchaseCreditNoteDate = dto.offshore_purchase_credit_note_date;
    this.#traceId = dto.trace_id;
    this.#supplierId = dto.supplier_id;
    this.#currencyId = dto.currency_id;
    this.#currencyRate = dto.currency_rate;
    this.#nominal = dto.nominal;
    this.#used = dto.used;
    this.#reff = dto.reff;
    this.#note = dto.note;
    this.#status = dto.status;
    this.#statusNext = dto.status_next;
    this.#isedit = dto.isedit;
    this.#confirmtime = dto.confirmtime;
    this.#confirmby = dto.confirmby;
    this.#confirmtimeF = dto.confirmtime_f;
    this.#confirmbyF = dto.confirmby_f;
  }

  get offshorePurchaseCreditNoteId() {
    return this.#offshorePurchaseCreditNoteId;
  }

  toModel() {
    return {
      offshorePurchaseCreditNoteId: this.#offshorePurchaseCreditNoteId,
      offshorePurchaseCreditNoteCode: this.#offshorePurchaseCreditNoteCode,
      offshorePurchaseCreditNoteCodeTemp: this.#offshorePurchaseCreditNoteCodeTemp,
      offshorePurchaseCreditNoteName: this.#offshorePurchaseCreditNoteName,
      offshorePurchaseCreditNoteDate: this.#offshorePurchaseCreditNoteDate,
      traceId: this.#traceId,
      supplierId: this.#supplierId,
      currencyId: this.#currencyId,
      currencyRate: this.#currencyRate,
      nominal: this.#nominal,
      used: this.#used,
      reff: this.#reff,
      note: this.#note,
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

export default OffshorePurchaseCreditNoteDto;
