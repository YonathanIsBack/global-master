import StandardDto from './StandardDto.js';

class AccessDto extends StandardDto {
  #accessId;
  #userGroupId;
  #action;
  #pageController;

  constructor(dto) {
    super(dto);
    this.#accessId = dto.access_id;
    this.#userGroupId = dto.user_group_id;
    this.#action = dto.action;
    this.#pageController = dto.page_controller;
  }

  get accessId() {
    return this.#accessId;
  }

  toModel() {
    return {
      accessId: this.#accessId,
      userGroupId: this.#userGroupId,
      action: this.#action,
      pageController: this.#pageController,
      ...super.toModel()
    };
  }
}

export default AccessDto;
