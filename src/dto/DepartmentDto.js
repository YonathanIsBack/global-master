import StandardDto from './StandardDto.js';

class DepartmentDto extends StandardDto {
  #departmentId;
  #companyParentId;
  #departmentCode;
  #departmentName;

  constructor(dto) {
    super(dto);
    this.#departmentId = dto.department_id;
    this.#companyParentId = dto.company_parent_id;
    this.#departmentCode = dto.department_code;
    this.#departmentName = dto.department_name;
  }

  get departmentId() {
    return this.#departmentId;
  }

  toModel() {
    return {
      departmentId: this.#departmentId,
      companyParentId: this.#companyParentId,
      departmentCode: this.#departmentCode,
      departmentName: this.#departmentName,
      ...super.toModel()
    };
  }
}

export default DepartmentDto;
