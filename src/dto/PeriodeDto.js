import StandardDto from "./StandardDto.js";

class PeriodeDto extends StandardDto{
  #periodeId;
  #periodeName;
  #startPeriode;
  #endPeriode;
  #status;
  #cretime;
  #creby;
  #modtime;
  #modby;

  constructor(dto) {
    super(dto)
    this.#periodeId = dto.periode_id;
    this.#periodeName = dto.periode_name;
    this.#startPeriode = dto.start_periode;
    this.#endPeriode = dto.end_periode;
    this.#status = dto.status;
    this.#cretime = dto.cretime;
    this.#creby = dto.creby;
    this.#modtime = dto.modtime;
    this.#modby = dto.modby;
  }

  get periodeId() {
    return this.#periodeId;
  }

  toModel() {
    return {
      periodeId: this.#periodeId,
      periodeName: this.#periodeName,
      startPeriode: this.#startPeriode,
      endPeriode: this.#endPeriode,
      status: this.#status,
      cretime: this.#cretime,
      creby: this.#creby,
      modtime: this.#modtime,
      modby: this.#modby,
      ...super.toModel()
    };
  }
}

export default PeriodeDto;
