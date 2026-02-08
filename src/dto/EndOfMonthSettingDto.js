import StandardDto from './StandardDto.js';

class EndOfMonthSettingDto extends StandardDto {
  #eomSettingId;
  #tanggal;
  #startMonthEom;
  #startYearEom;

  constructor(dto) {
    super(dto);
    this.#eomSettingId = dto.eom_setting_id;
    this.#tanggal = dto.tanggal;
    this.#startMonthEom = dto.start_month_eom;
    this.#startYearEom = dto.start_year_eom;
  }

  get eomSettingId() {
    return this.#eomSettingId;
  }

  toModel() {
    return {
      eomSettingId: this.#eomSettingId,
      tanggal: this.#tanggal,
      startMonthEom: this.#startMonthEom,
      startYearEom: this.#startYearEom,
      ...super.toModel()
    };
  }
}

export default EndOfMonthSettingDto;
