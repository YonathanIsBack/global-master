import StandardDto from './StandardDto.js';

class PreferenceDto extends StandardDto {
  #preferenceId;
  #companyParentId;
  #companyId;
  #preferenceCode;
  #logo;
  #accountingPeriod;
  #preferencePhone;
  #basedCurrency;
  #website;
  #preferenceAddress;
  #preferenceCountryId;
  #preferenceProvinceId;
  #preferenceZipCode;
  #npwpNo;
  #kluNo;
  #pkpDate;
  #pkpNo;
  #taxAddress;
  #taxCountryId;
  #taxProvinceId;
  #taxZipCode;

  constructor(dto) {
    super(dto);
    this.#preferenceId = dto.preference_id;
    this.#companyParentId = dto.company_parent_id;
    this.#companyId = dto.company_id;
    this.#preferenceCode = dto.preference_code;
    this.#logo = dto.logo;
    this.#accountingPeriod = dto.accounting_period;
    this.#preferencePhone = dto.preference_phone;
    this.#basedCurrency = dto.based_currency;
    this.#website = dto.website;
    this.#preferenceAddress = dto.preference_address;
    this.#preferenceCountryId = dto.preference_country_id;
    this.#preferenceProvinceId = dto.preference_province_id;
    this.#preferenceZipCode = dto.preference_zip_code;
    this.#npwpNo = dto.npwp_no;
    this.#kluNo = dto.klu_no;
    this.#pkpDate = dto.pkp_date;
    this.#pkpNo = dto.pkp_no;
    this.#taxAddress = dto.tax_address;
    this.#taxCountryId = dto.tax_country_id;
    this.#taxProvinceId = dto.tax_province_id;
    this.#taxZipCode = dto.tax_zip_code;
  }

  get preferenceId() {
    return this.#preferenceId;
  }

  toModel() {
    return {
      preferenceId: this.#preferenceId,
      companyParentId: this.#companyParentId,
      companyId: this.#companyId,
      preferenceCode: this.#preferenceCode,
      logo: this.#logo,
      accountingPeriod: this.#accountingPeriod,
      preferencePhone: this.#preferencePhone,
      basedCurrency: this.#basedCurrency,
      website: this.#website,
      preferenceAddress: this.#preferenceAddress,
      preferenceCountryId: this.#preferenceCountryId,
      preferenceProvinceId: this.#preferenceProvinceId,
      preferenceZipCode: this.#preferenceZipCode,
      npwpNo: this.#npwpNo,
      kluNo: this.#kluNo,
      pkpDate: this.#pkpDate,
      pkpNo: this.#pkpNo,
      taxAddress: this.#taxAddress,
      taxCountryId: this.#taxCountryId,
      taxProvinceId: this.#taxProvinceId,
      taxZipCode: this.#taxZipCode,
      ...super.toModel()
    };
  }
}

export default PreferenceDto;
