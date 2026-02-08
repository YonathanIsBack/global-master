import StandardDto from './StandardDto.js';

class CompanyDto extends StandardDto {
  #companyId;
  #companyParentId;
  #companyIdentity;
  #companyCode;
  #companyCif;
  #companyName;
  #location;
  #logo;
  #accountingPeriod;
  #preferencePhonecode;
  #preferencePhone;
  #currencyId;
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
  #istax;
  #databaseHost;
  #databaseUsername;
  #databasePassword;
  #databaseName;
  #databaseUnofficialHost;
  #databaseUnofficialUsername;
  #databaseUnofficialPassword;
  #databaseUnofficialName;

  constructor(dto) {
    super(dto);
    this.#companyId = dto.company_id;
    this.#companyParentId = dto.company_parent_id;
    this.#companyIdentity = dto.company_identity;
    this.#companyCode = dto.company_code;
    this.#companyCif = dto.company_cif;
    this.#companyName = dto.company_name;
    this.#location = dto.location;
    this.#logo = dto.logo;
    this.#accountingPeriod = dto.accounting_period;
    this.#preferencePhonecode = dto.preference_phonecode;
    this.#preferencePhone = dto.preference_phone;
    this.#currencyId = dto.currency_id;
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
    this.#istax = dto.istax;
    this.#databaseHost = dto.database_host;
    this.#databaseUsername = dto.database_username;
    this.#databasePassword = dto.database_password;
    this.#databaseName = dto.database_name;
    this.#databaseUnofficialHost = dto.database_unofficial_host;
    this.#databaseUnofficialUsername = dto.database_unofficial_username;
    this.#databaseUnofficialPassword = dto.database_unofficial_password;
    this.#databaseUnofficialName = dto.database_unofficial_name;
  }

  get companyId() {
    return this.#companyId;
  }

  toModel() {
    return {
      companyId: this.#companyId,
      companyParentId: this.#companyParentId,
      companyIdentity: this.#companyIdentity,
      companyCode: this.#companyCode,
      companyCif: this.#companyCif,
      companyName: this.#companyName,
      location: this.#location,
      logo: this.#logo,
      accountingPeriod: this.#accountingPeriod,
      accountingPhonecode: this.#preferencePhonecode,
      prefencePhone: this.#preferencePhone,
      currency: this.#currencyId,
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
      istax: this.#istax,
      databaseHost: this.#databaseHost,
      databaseUsername: this.#databaseUsername,
      databasePassword: this.#databasePassword,
      databaseName: this.#databaseName,
      databaseUnofficialHost: this.#databaseUnofficialHost,
      databaseUnofficialUsername: this.#databaseUnofficialUsername,
      databaseUnofficialPassword: this.#databaseUnofficialPassword,
      databaseUnofficialName: this.#databaseUnofficialName,
      ...super.toModel()
    };
  }
}

class CompanyBankDto extends StandardDto {
  #bankCompanyId;
  #bankId;
  #companyParentId;
  #companyId;
  #bankCompanyCode;
  #bankCompanyName;
  #branch;
  #accountNumber;
  #currencyId;

  constructor(dto) {
    super(dto);
    this.#bankCompanyId = dto.bank_company_id;
    this.#bankId = dto.bank_id;
    this.#companyParentId = dto.company_parent_id;
    this.#companyId = dto.company_id;
    this.#bankCompanyCode = dto.bank_company_code;
    this.#bankCompanyName = dto.bank_company_name;
    this.#branch = dto.branch;
    this.#accountNumber = dto.account_number;
    this.#currencyId = dto.currency_id;
  }

  get bankCompanyId() {
    return this.#bankCompanyId;
  }

  toModel() {
    return {
      bankCompanyId: this.#bankCompanyId,
      bankId: this.#bankId,
      companyParentId: this.#companyParentId,
      companyId: this.#companyId,
      bankCompanyCode: this.#bankCompanyCode,
      bankCompanyName: this.#bankCompanyName,
      branch: this.#branch,
      accountNumber: this.#accountNumber,
      currencyId: this.#currencyId,
      ...super.toModel()
    };
  }
}

export { CompanyBankDto, CompanyDto };
