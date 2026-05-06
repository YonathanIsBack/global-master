import { Supplier, SupplierContact, SupplierPayment, SupplierPurchase, SupplierTax } from '../../models/Supplier.js';
import ObjectUtil from '../../util/ObjectUtil.js';
import StandardService from '../StandardService.js';

class SupplierService extends StandardService {
  columnOrder = ['', 'supplier_name', 'supplier_code', 'isactive'];
  columnSearch = ['cretime', 'supplier_name', 'supplier_code'];

  constructor() {
    super(Supplier);
  }

  async getAll(params) {
    const { whereClause, limit = 1, offset = 0, orderIndex, orderDirection } = params;

    const results = await this.model.findAll({
      where: whereClause,
      raw: true,
      limit: Number(limit),
      offset: Number(offset),
      order: this.buildOrderClause(orderIndex, orderDirection),
      nest: true,
      include: [
        {
          model: SupplierContact,
          required: false
        },
        {
          model: SupplierPayment,
          required: false,
        },
        {
          model: SupplierTax,
          required: false
        },
        {
          model: SupplierPurchase,
          required: false
        },
      ]
    });

    return results.map((result) => ({
      ...result,
    }));
  }

  async getDataApi(params) {
    const { whereClause, limit = 1, offset = 0, orderIndex, orderDirection } = params;

    const supplier =  await this.model.findAll({
      where: whereClause,
      raw: true,
      limit: Number(limit),
      offset: Number(offset),
      order: this.buildOrderClause(orderIndex, orderDirection),
      nest: true,
      include: [
        {
          model: SupplierContact,
          required: false
        },
        {
          model: SupplierPayment,
          required: false,
        },
        {
          model: SupplierTax,
          required: false
        },
        {
          model: SupplierPurchase,
          required: false
        },
      ]
    });

    const foundSupplier = supplier[0];
    const contact = foundSupplier.SupplierContact;
    const payment = foundSupplier.SupplierPayment;
    const tax = foundSupplier.SupplierTax;
    const purchase = foundSupplier.SupplierPurchase;
    delete foundSupplier.SupplierContact;
    delete foundSupplier.SupplierPayment;
    delete foundSupplier.SupplierTax;
    delete foundSupplier.SupplierPurchase;

    return {
      general: ObjectUtil.toSnakeCase(foundSupplier),
      contact: ObjectUtil.toSnakeCase(contact),
      payment: ObjectUtil.toSnakeCase(payment),
      tax: ObjectUtil.toSnakeCase(tax),
      purchase: ObjectUtil.toSnakeCase(purchase),
    };
  }
}

export default SupplierService;
