import StandardDto from './StandardDto.js';

class TrSafetyStockDto extends StandardDto {
  #safetyStockId;
  #companyParentId;
  #itemId;
  #qty;

  constructor(dto) {
    super(dto);
    this.#safetyStockId = dto.safety_stock_id === undefined ? null : dto.safety_stock_id;
    this.#companyParentId = dto.company_parent_id;
    this.#itemId = dto.item_id;
    this.#qty = dto.qty;
  }

  get safetyStockId() {
    return this.#safetyStockId;
  }

  toModel() {
    return {
      safetyStockId: this.#safetyStockId,
      companyParentId: this.#companyParentId,
      itemId: this.#itemId,
      qty: this.#qty,
      ...super.toModel()
    };
  }
}

export default TrSafetyStockDto;
