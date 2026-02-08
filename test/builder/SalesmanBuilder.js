import { faker } from '@faker-js/faker/.';
import ObjectUtil from '../../src/util/ObjectUtil.js';

class SalesmanCommissionBuilder {
  static build() {
    return {
      salesmanCommissionId: faker.number.int({ min: 1, max: 10 }),
      companyParentId: faker.number.int({ min: 1, max: 10 }),
      name: faker.animal.bear(),
      salesmanId: faker.number.int({ min: 1, max: 10 }),
      salesCommission: faker.lorem.words({ min: 1, max: 50 }),
      productId: faker.number.int({ min: 1, max: 10 }),
      productCommission: faker.lorem.words({ min: 1, max: 50 }),
      supplierGroupId: faker.number.int({ min: 1, max: 10 }),
      supplierGroupCommission: faker.lorem.words({ min: 1, max: 50 }),
      categoryId: faker.number.int({ min: 1, max: 10 }),
      categoryCommission: faker.lorem.words({ min: 1, max: 50 }),
      isinvoice: faker.number.int({ min: 1, max: 2 }),
      invoiceCommission: faker.lorem.words({ min: 1, max: 50 }),
      term: faker.number.int({ min: 1, max: 2 }),
      termDay: faker.number.int({ min: 1, max: 2 }),
      termPercent: '1',
      commission: faker.number.int({ min: 1, max: 2 }),
      value: '1',
      calculation: faker.number.int({ min: 1, max: 2 })
    };
  }

  static buildDto() {
    return ObjectUtil.toSnakeCase(SalesmanCommissionBuilder.build());
  }
}

export default SalesmanCommissionBuilder;
