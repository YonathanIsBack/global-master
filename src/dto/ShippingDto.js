import StandardDto from './StandardDto.js';

class ShippingDto extends StandardDto {
  #shippingId;
  #shippingName;

  constructor(dto) {
    super(dto);
    this.#shippingId = dto.shipping_id;
    this.#shippingName = dto.shipping_name;
  }

  get shippingId() {
    return this.#shippingId;
  }

  toModel() {
    return {
      shippingId: this.#shippingId,
      shippingName: this.#shippingName,
      ...super.toModel()
    };
  }
}

export default ShippingDto;
