import StandardDto from '../StandardDto.js';

class MsCk6GolonganDto extends StandardDto {
  #ck6GolonganId;
  #golonganName;
  #fromAbv;
  #toAbv;
  #price;

  constructor(body) {
    super(body);
    this.#ck6GolonganId = body.ck6_golongan_id;
    this.#golonganName = body.golongan_name;
    this.#fromAbv = body.from_abv;
    this.#toAbv = body.to_abv;
    this.#price = body.price;
  }

  get ck6GolonganId() {
    return this.#ck6GolonganId;
  }

  toModel() {
    return {
      ck6GolonganId: this.#ck6GolonganId,
      golonganName: this.#golonganName,
      fromAbv: this.#fromAbv,
      toAbv: this.#toAbv,
      price: this.#price,
      ...super.toModel()
    };
  }
}

export default MsCk6GolonganDto;
