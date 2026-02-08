import StandardDto from './StandardDto.js';

class BuyingPriceListDto extends StandardDto {
  #purchasePriceId;
  #traceId;
  #companyParentId;
  #companyId;
  #currencyId;
  #name;
  #publishTime;
  #status;
  #statusNext;

  constructor(dto) {
    super(dto);
    this.#purchasePriceId = dto.purchase_price_id;
    this.#traceId = dto.trace_id;
    this.#companyParentId = dto.company_parent_id;
    this.#companyId = dto.company_id;
    this.#currencyId = dto.currency_id;
    this.#name = dto.name;
    this.#publishTime = dto.publish_time;
    this.#status = dto.status;
    this.#statusNext = dto.status_next;
  }
  get purchasePriceId() {
    return this.#purchasePriceId;
  }

  toModel() {
    return {
      purchasePriceId: this.#purchasePriceId,
      traceId: this.#traceId,
      companyParentId: this.#companyParentId,
      companyId: this.#companyId,
      currencyId: this.#currencyId,
      name: this.#name,
      publishTime: this.#publishTime,
      status: this.#status,
      statusNext: this.#statusNext,
      ...super.toModel()
    };
  }
}

class BuyingPriceListDetailDto extends StandardDto {
  #purchasePriceDtId;
  #purchasePriceId;
  #itemId;
  #price;

  constructor(dto) {
    super(dto);
    this.#purchasePriceDtId = dto.purchase_price_dt_id;
    this.#purchasePriceId = dto.purchase_price_id;
    this.#itemId = dto.item_id;
    this.#price = dto.price;
  }

  get purchasePriceDtId() {
    return this.#purchasePriceDtId;
  }

  toModel() {
    return {
      purchasePriceDtId: this.#purchasePriceDtId,
      purchasePriceId: this.#purchasePriceId,
      itemId: this.#itemId,
      price: this.#price,
      ...super.toModel()
    };
  }
}

export { BuyingPriceListDto, BuyingPriceListDetailDto };
