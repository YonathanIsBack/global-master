import StandardDto from './StandardDto.js';

class KasbonPotonganDto extends StandardDto {
  #kasbonPotonganId;
  #kasbonPotonganName;
  #total;

  constructor(dto) {
    super(dto);
    this.#kasbonPotonganId = dto.kasbon_potongan_id;
    this.#kasbonPotonganName = dto.kasbon_potongan_name;
    this.#total = dto.total;
  }

  get kasbonPotonganId() {
    return this.#kasbonPotonganId;
  }

  toModel() {
    return {
      kasbonPotonganId: this.#kasbonPotonganId,
      kasbonPotonganName: this.#kasbonPotonganName,
      total: this.#total,
      ...super.toModel()
    };
  }
}

export default KasbonPotonganDto;
