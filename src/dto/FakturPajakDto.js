import StandardDto from './StandardDto.js';

class FakturPajakDto extends StandardDto {
  #noFakturPajakId;
  #noFakturPajakName;
  #fromNumber;
  #toNumber;
  #prefix;
  #subfix;
  #numberNow;
  #ismax;

  constructor(dto) {
    super(dto);
    this.#noFakturPajakId = dto.no_faktur_pajak_id;
    this.#noFakturPajakName = dto.no_faktur_pajak_name;
    this.#fromNumber = dto.from_number;
    this.#toNumber = dto.to_number;
    this.#prefix = dto.prefix;
    this.#subfix = dto.subfix;
    this.#numberNow = dto.number_now;
    this.#ismax = dto.ismax;
  }

  get noFakturPajakId() {
    return this.#noFakturPajakId;
  }

  toModel() {
    return {
      noFakturPajakId: this.#noFakturPajakId,
      noFakturPajakName: this.#noFakturPajakName,
      fromNumber: this.#fromNumber,
      toNumber: this.#toNumber,
      prefix: this.#prefix,
      subfix: this.#subfix,
      numberNow: this.#numberNow,
      ismax: this.#ismax,
      ...super.toModel()
    };
  }
}

export default FakturPajakDto;
