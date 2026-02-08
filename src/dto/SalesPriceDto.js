import StandardDto from './StandardDto.js';

class SalesPriceDto extends StandardDto {
  #salesPriceId;
  #companyParentId;
  #companyId;
  #name;
  #publishTime;
  #note;

  constructor(dto) {
    super(dto);
    this.#salesPriceId = dto.sales_price_id;
    this.#companyParentId = dto.company_parent_id;
    this.#companyId = dto.company_id;
    this.#name = dto.name;
    this.#publishTime = dto.publish_time;
    this.#note = dto.note;
  }
  get salesPriceId() {
    return this.#salesPriceId;
  }

  toModel() {
    return {
      salesPriceId: this.#salesPriceId,
      companyParentId: this.#companyParentId,
      companyId: this.#companyId,
      name: this.#name,
      publishTime: this.#publishTime,
      note: this.#note,
      ...super.toModel()
    };
  }
}

class SalesPriceDtDto extends StandardDto {
  #salesPriceDtId;
  #companyParentId;
  #salesPriceId;
  #itemId;
  #size;
  #pack;
  #country;
  #vintage;
  #customerTypeId;
  #price;
  #priceAvg;

  constructor(dto) {
    super(dto);
    this.#salesPriceDtId = dto.sales_price_dt_id;
    this.#companyParentId = dto.company_parent_id;
    this.#salesPriceId = dto.sales_price_id;
    this.#itemId = dto.item_id;
    this.#size = dto.size;
    this.#pack = dto.pack;
    this.#country = dto.country;
    this.#vintage = dto.vintage;
    this.#customerTypeId = dto.customer_type_id;
    this.#price = dto.price;
    this.#priceAvg = dto.price_avg;
  }

  get salesPriceDtId() {
    return this.#salesPriceDtId;
  }

  toModel() {
    return {
      salesPriceDtId: this.#salesPriceDtId,
      companyParentId: this.#companyParentId,
      salesPriceId: this.#salesPriceId,
      itemId: this.#itemId,
      size: this.#size,
      pack: this.#pack,
      country: this.#country,
      vintage: this.#vintage,
      customerTypeId: this.#customerTypeId,
      price: this.#price,
      priceAvg: this.#priceAvg,
      ...super.toModel()
    };
  }
}

export { SalesPriceDto, SalesPriceDtDto };
