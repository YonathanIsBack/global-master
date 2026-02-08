import StandardDto from './StandardDto.js';

class EndOfMonthDto extends StandardDto {
  #eomId;
  #eomName;
  #eomMonth;
  #eomYear;
  #status;

  constructor(dto) {
    super(dto);
    this.#eomId = dto.eom_id;
    this.#eomName = dto.eom_name;
    this.#eomMonth = dto.eom_month;
    this.#eomYear = dto.eom_year;
    this.#status = dto.status;
  }

  get eomId() {
    return this.#eomId;
  }

  toModel() {
    return {
      eomId: this.#eomId,
      eomName: this.#eomName,
      eomMonth: this.#eomMonth,
      eomYear: this.#eomYear,
      status: this.#status,
      ...super.toModel()
    };
  }
}

export default EndOfMonthDto;
