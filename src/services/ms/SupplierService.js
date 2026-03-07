import { Supplier, SupplierContact, SupplierPayment, SupplierPurchase, SupplierTax } from '../../models/Supplier.js';
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

    Supplier.findAll({})

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

    return {
      general: supplier,
      contact: supplier.SupplierContact,
      payment: supplier.SupplierPayment,
      tax: supplier.SupplierTax,
      purchase: supplier.SupplierPurchase,
    };
  }
}

export default SupplierService;
