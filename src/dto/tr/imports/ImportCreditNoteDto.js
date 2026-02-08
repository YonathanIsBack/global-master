import StandardDto from '../../StandardDto.js';

class ImportCreditNoteDto extends StandardDto {
  #importCreditNoteId;
  #importCreditNoteCode;
  #importCreditNoteCodeTemp;
  #importCreditNoteName;
  #importCreditNoteDate;
  #traceId;
  #supplierId;
  #currencyId;
  #rate;
  #nominal;
  #used;
  #reff;
  #note;
  #status;
  #statusNext;
  #isvat;
  #confirmby;
  #confirmtime;
  #isedit;
  #confirmtimeF;
  #confirmbyF;

  constructor(dto) {
    super(dto);
    this.#importCreditNoteId = dto.import_credit_note_id;
    this.#importCreditNoteCode = dto.import_credit_note_code;
    this.#importCreditNoteCodeTemp = dto.import_credit_note_code_temp;
    this.#importCreditNoteName = dto.import_credit_note_name;
    this.#importCreditNoteDate = dto.import_credit_note_date;
    this.#traceId = dto.trace_id;
    this.#supplierId = dto.supplier_id;
    this.#currencyId = dto.currency_id;
    this.#rate = dto.rate;
    this.#nominal = dto.nominal;
    this.#used = dto.used;
    this.#reff = dto.reff;
    this.#note = dto.note;
    this.#status = dto.status;
    this.#statusNext = dto.status_next;
    this.#isvat = dto.isvat;
    this.#confirmby = dto.confirmby;
    this.#confirmtime = dto.confirmtime;
    this.#isedit = dto.isedit;
    this.#confirmtimeF = dto.confirmtime_f;
    this.#confirmbyF = dto.confirmby_f;
  }

  get importCreditNoteId() {
    return this.#importCreditNoteId;
  }

  toModel() {
    return {
      importCreditNoteId: this.#importCreditNoteId,
      importCreditNoteCode: this.#importCreditNoteCode,
      importCreditNoteCodeTemp: this.#importCreditNoteCodeTemp,
      importCreditNoteName: this.#importCreditNoteName,
      importCreditNoteDate: this.#importCreditNoteDate,
      traceId: this.#traceId,
      supplierId: this.#supplierId,
      currencyId: this.#currencyId,
      rate: this.#rate,
      nominal: this.#nominal,
      used: this.#used,
      reff: this.#reff,
      note: this.#note,
      status: this.#status,
      statusNext: this.#statusNext,
      isvat: this.#isvat,
      confirmby: this.#confirmby,
      confirmtime: this.#confirmtime,
      isedit: this.#isedit,
      confirmtimeF: this.#confirmtimeF,
      confirmbyF: this.#confirmbyF,
      ...super.toModel()
    };
  }
}

class ImportCreditNoteDtDto extends StandardDto {
  #importCreditNoteDtId;
  #importCreditNoteId;
  #date;
  #amount;
  #cretime;
  #creby;
  #modtime;
  #modby;

  constructor(dto) {
    super(dto);
    this.#importCreditNoteDtId = dto.import_clearance_dt_id;
    this.#importCreditNoteId = dto.import_credit_note_id;
    this.#date = dto.date;
    this.#amount = dto.amount;
  }

  get importCreditNoteDtId() {
    return this.#importCreditNoteDtId;
  }

  toModel() {
    return {
      importCreditNoteDtId: this.#importCreditNoteDtId,
      importCreditNoteId: this.#importCreditNoteId,
      date: this.#date,
      amount: this.#amount,
      ...super.toModel()
    };
  }
}

class ImportCreditNoteRejectDto extends StandardDto {
  #importCreditNoteRejectId;
  #importCreditNoteId;
  #note;
  #userId;

  constructor(dto) {
    super(dto);
    this.#importCreditNoteRejectId = dto.import_clearance_reject_id;
    this.#importCreditNoteId = dto.import_credit_note_id;
    this.#note = dto.note;
    this.#userId = dto.userId;
  }

  get importCreditNoteRejectId() {
    return this.#importCreditNoteRejectId;
  }

  toModel() {
    return {
      importCreditNoteRejectId: this.#importCreditNoteRejectId,
      importCreditNoteId: this.#importCreditNoteId,
      note: this.#note,
      userId: this.#userId,
      ...super.toModel()
    };
  }
}

class ImportCreditNoteRequestDto extends StandardDto {
  #importCreditNoteRequestId;
  #importClearanceId;
  #note;
  #statusRequest;
  #userId;

  constructor(dto) {
    super(dto);
    this.#importCreditNoteRequestId = dto.import_clearance_request_id;
    this.#importClearanceId = dto.import_credit_note_id;
    this.#note = dto.note;
    this.#userId = dto.userId;
    this.#statusRequest = dto.status_request;
  }

  get importCreditNoteRequestId() {
    return this.#importCreditNoteRequestId;
  }

  toModel() {
    return {
      importCreditNoteRequestId: this.#importCreditNoteRequestId,
      importClearanceId: this.#importClearanceId,
      note: this.#note,
      userId: this.#userId,
      statusRequest: this.#statusRequest,

      ...super.toModel()
    };
  }
}

export { ImportCreditNoteDto, ImportCreditNoteDtDto, ImportCreditNoteRejectDto, ImportCreditNoteRequestDto };
