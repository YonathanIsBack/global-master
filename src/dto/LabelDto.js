import StandardDto from './StandardDto.js';

class LabelDto extends StandardDto {
  #labelId;
  #companyParentId;
  #labelName;
  #labelValue;
  #labelNotes;
  #urutan;

  constructor(dto) {
    super(dto);
    this.#labelId = dto.label_id;
    this.#companyParentId = dto.company_parent_id;
    this.#labelName = dto.label_name;
    this.#labelValue = dto.label_value;
    this.#labelNotes = dto.label_notes;
    this.#urutan = dto.urutan;
  }

  get labelId() {
    return this.#labelId;
  }

  toModel() {
    return {
      labelId: this.#labelId,
      companyParentId: this.#companyParentId,
      labelName: this.#labelName,
      labelValue: this.#labelValue,
      labelNotes: this.#labelNotes,
      urutan: this.#urutan,
      ...super.toModel()
    };
  }
}

class LabelSettinganPrintDto extends StandardDto {
  #labelSettingPrint;
  #labelId;

  constructor(dto) {
    super(dto);
    this.#labelSettingPrint = dto.label_setting_print;
    this.#labelId = dto.label_id;
  }

  get labelSettingPrint() {
    return this.#labelSettingPrint;
  }

  toModel() {
    return {
      labelSettingPrint: this.#labelSettingPrint,
      userGroupId: this.#labelId,
      ...super.toModel()
    };
  }
}

export { LabelDto, LabelSettinganPrintDto };
