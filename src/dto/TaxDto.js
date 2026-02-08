import StandardDto from './StandardDto.js';

class TaxDto extends StandardDto {
  #taxId;
  #companyParentId;
  #taxName;
  #taxType;
  #publishDate;
  #percentage;
  #note;
  #defaults;
  #iscoretax;

  constructor(dto) {
    super(dto);
    this.#taxId = dto.tax_id;
    this.#companyParentId = dto.company_parent_id;
    this.#taxName = dto.tax_name;
    this.#taxType = dto.tax_type;
    this.#publishDate = dto.publish_date;
    this.#percentage = dto.percentage;
    this.#note = dto.note;
    this.#defaults = dto.defaults;
    this.#iscoretax = dto.iscoretax;
  }

  get taxId() {
    return this.#taxId;
  }

  toModel() {
    return {
      taxId: this.#taxId,
      companyParentId: this.#companyParentId,
      taxName: this.#taxName,
      taxType: this.#taxType,
      publishDate: this.#publishDate,
      percentage: this.#percentage,
      note: this.#note,
      defaults: this.#defaults,
      iscoretax: this.#iscoretax,
      ...super.toModel()
    };
  }
}

class TaxFormDto extends StandardDto {
  #taxFormId;
  #taxId;
  #taxFormName;

  constructor(dto) {
    super(dto);
    this.#taxFormId = dto.tax_form_id;
    this.#taxId = dto.tax_id;
    this.#taxFormName = dto.tax_form_name;
  }

  get taxFormId() {
    return this.#taxFormId;
  }

  toModel() {
    return {
      taxFormId: this.#taxFormId,
      taxId: this.#taxId,
      taxFormName: this.#taxFormName,
      ...super.toModel()
    };
  }
}

export { TaxDto, TaxFormDto };
