import { CoaSubGroupDto, CoaTypeDto } from '../dto/CoaDto.js';
import {
  ItemBuyingDto,
  ItemCategoryDto,
  ItemComboDto,
  ItemDto,
  ItemImgDto,
  ItemLabelDetailDto,
  ItemLabelDto,
  ItemPriceDto,
  ItemSubCategoryDto,
  ItemTypeDto,
  ItemUomDto
} from '../dto/ItemDto.js';
import StandardController from './StandardController.js';

class ItemController extends StandardController {
  constructor(itemService) {
    super(itemService);
    this.create = this.create.bind(this);
    this.restore = this.restore.bind(this);
    this.delete = this.delete.bind(this);
  }

  async create(request, response) {
    const { body } = request;
    const itemDto = new ItemDto(body);

    return await super.insertTransaction(request, response, itemDto);
  }

  async restore(request, response) {
    const { body } = request;
    const itemDto = new ItemDto(body);

    return await super.restore(request, response, itemDto);
  }

  async delete(request, response) {
    const { body } = request;
    const itemDto = new ItemDto(body);

    return await super.delete(request, response, itemDto);
  }
}

class ItemBuyingController extends StandardController {
  constructor(itemBuyingService) {
    super(itemBuyingService);
    this.create = this.create.bind(this);
    this.restore = this.restore.bind(this);
    this.delete = this.delete.bind(this);
  }

  async create(request, response) {
    const { body } = request;
    const itemBuyingDto = new ItemBuyingDto(body);

    return await super.create(request, response, itemBuyingDto);
  }

  async restore(request, response) {
    const { body } = request;
    const itemBuyingDto = new ItemBuyingDto(body);

    return await super.restore(request, response, itemBuyingDto);
  }

  async delete(request, response) {
    const { body } = request;
    const itemBuyingDto = new ItemBuyingDto(body);

    return await super.delete(request, response, itemBuyingDto);
  }
}

class ItemCategoryController extends StandardController {
  constructor(itemCategoryService) {
    super(itemCategoryService);
    this.create = this.create.bind(this);
    this.restore = this.restore.bind(this);
    this.delete = this.delete.bind(this);
  }

  async create(request, response) {
    const { body } = request;
    const itemCategoryDto = new ItemCategoryDto(body);

    return await super.create(request, response, itemCategoryDto);
  }

  async restore(request, response) {
    const { body } = request;
    const itemCategoryDto = new ItemCategoryDto(body);

    return await super.restore(request, response, itemCategoryDto);
  }

  async delete(request, response) {
    const { body } = request;
    const itemCategoryDto = new ItemCategoryDto(body);

    return await super.delete(request, response, itemCategoryDto);
  }
}

class ItemComboController extends StandardController {
  constructor(itemComboService) {
    super(itemComboService);
    this.create = this.create.bind(this);
    this.restore = this.restore.bind(this);
    this.delete = this.delete.bind(this);
  }

  async create(request, response) {
    const { body } = request;
    const itemComboDto = new ItemComboDto(body);

    return await super.create(request, response, itemComboDto);
  }

  async restore(request, response) {
    const { body } = request;
    const itemComboDto = new ItemComboDto(body);

    return await super.restore(request, response, itemComboDto);
  }

  async delete(request, response) {
    const { body } = request;
    const itemComboDto = new ItemComboDto(body);

    return await super.delete(request, response, itemComboDto);
  }
}

class ItemImgController extends StandardController {
  constructor(itemImgService) {
    super(itemImgService);
    this.create = this.create.bind(this);
    this.restore = this.restore.bind(this);
    this.delete = this.delete.bind(this);
  }

  async create(request, response) {
    const { body } = request;
    const itemImgDto = new ItemImgDto(body);

    return await super.create(request, response, itemImgDto);
  }

  async restore(request, response) {
    const { body } = request;
    const itemImgDto = new ItemImgDto(body);

    return await super.restore(request, response, itemImgDto);
  }

  async delete(request, response) {
    const { body } = request;
    const itemImgDto = new ItemImgDto(body);

    return await super.delete(request, response, itemImgDto);
  }
}

class ItemLabelController extends StandardController {
  constructor(itemLabelService) {
    super(itemLabelService);
    this.create = this.create.bind(this);
    this.restore = this.restore.bind(this);
    this.delete = this.delete.bind(this);
  }

  async create(request, response) {
    const { body } = request;
    const itemLabelDto = new ItemLabelDto(body);

    return await super.create(request, response, itemLabelDto);
  }

  async restore(request, response) {
    const { body } = request;
    const itemLabelDto = new ItemLabelDto(body);

    return await super.restore(request, response, itemLabelDto);
  }

  async delete(request, response) {
    const { body } = request;
    const itemLabelDto = new ItemLabelDto(body);

    return await super.delete(request, response, itemLabelDto);
  }
}

class ItemLabelDetailController extends StandardController {
  constructor(itemLabelDetailService) {
    super(itemLabelDetailService);
    this.create = this.create.bind(this);
    this.restore = this.restore.bind(this);
    this.delete = this.delete.bind(this);
  }

  async create(request, response) {
    const { body } = request;
    const itemLabelDetailDto = new ItemLabelDetailDto(body);

    return await super.create(request, response, itemLabelDetailDto);
  }

  async restore(request, response) {
    const { body } = request;
    const itemLabelDetailDto = new ItemLabelDetailDto(body);

    return await super.restore(request, response, itemLabelDetailDto);
  }

  async delete(request, response) {
    const { body } = request;
    const itemLabelDetailDto = new ItemLabelDetailDto(body);

    return await super.delete(request, response, itemLabelDetailDto);
  }
}

class ItemPriceController extends StandardController {
  constructor(itemPriceService) {
    super(itemPriceService);
    this.create = this.create.bind(this);
    this.restore = this.restore.bind(this);
    this.delete = this.delete.bind(this);
  }

  async create(request, response) {
    const { body } = request;
    const itemPriceDto = new ItemPriceDto(body);

    return await super.create(request, response, itemPriceDto);
  }

  async restore(request, response) {
    const { body } = request;
    const itemPriceDto = new ItemPriceDto(body);

    return await super.restore(request, response, itemPriceDto);
  }

  async delete(request, response) {
    const { body } = request;
    const itemPriceDto = new ItemPriceDto(body);

    return await super.delete(request, response, itemPriceDto);
  }
}

class ItemSubcategoryController extends StandardController {
  constructor(itemSubcategoryService) {
    super(itemSubcategoryService);
    this.create = this.create.bind(this);
    this.restore = this.restore.bind(this);
    this.delete = this.delete.bind(this);
  }

  async create(request, response) {
    const { body } = request;
    const itemSubcategoryDto = new ItemCategoryDto(body);

    return await super.create(request, response, itemSubcategoryDto);
  }

  async restore(request, response) {
    const { body } = request;
    const itemSubcategoryDto = new ItemCategoryDto(body);

    return await super.restore(request, response, itemSubcategoryDto);
  }

  async delete(request, response) {
    const { body } = request;
    const itemSubcategoryDto = new ItemCategoryDto(body);

    return await super.delete(request, response, itemSubcategoryDto);
  }
}

class ItemTypeController extends StandardController {
  constructor(itemTypeService) {
    super(itemTypeService);
    this.create = this.create.bind(this);
    this.restore = this.restore.bind(this);
    this.delete = this.delete.bind(this);
  }

  async create(request, response) {
    const { body } = request;
    const itemTypeDto = new ItemTypeDto(body);

    return await super.create(request, response, itemTypeDto);
  }

  async restore(request, response) {
    const { body } = request;
    const itemTypeDto = new ItemTypeDto(body);

    return await super.restore(request, response, itemTypeDto);
  }

  async delete(request, response) {
    const { body } = request;
    const itemTypeDto = new ItemTypeDto(body);

    return await super.delete(request, response, itemTypeDto);
  }
}

class ItemUomController extends StandardController {
  constructor(itemUomService) {
    super(itemUomService);
    this.create = this.create.bind(this);
    this.restore = this.restore.bind(this);
    this.delete = this.delete.bind(this);
  }

  async create(request, response) {
    const { body } = request;
    const itemUomDto = new ItemUomDto(body);

    return await super.create(request, response, itemUomDto);
  }

  async restore(request, response) {
    const { body } = request;
    const itemUomDto = new ItemUomDto(body);

    return await super.restore(request, response, itemUomDto);
  }

  async delete(request, response) {
    const { body } = request;
    const itemUomDto = new ItemUomDto(body);

    return await super.delete(request, response, itemUomDto);
  }
}

export {
  ItemBuyingController,
  ItemController,
  ItemCategoryController,
  ItemComboController,
  ItemImgController,
  ItemLabelController,
  ItemLabelDetailController,
  ItemPriceController,
  ItemSubcategoryController,
  ItemTypeController,
  ItemUomController
};
