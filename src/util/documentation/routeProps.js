import Constant from '../../constants/Constant.js';
import Endpoint from '../../constants/Endpoint.js';

import Access from '../../models/Access.js';
import { Action, ActionPage } from '../../models/Action.js';
import { AutoCode, AutoCodeCount, AutoJurnal } from '../../models/Auto.js';
import Bank from '../../models/Bank.js';
import Brand from '../../models/Brand.js';
import City from '../../models/City.js';
import { Coa, CoaBank, CoaGroup, CoaSubGroup, CoaType } from '../../models/Coa.js';
import { Company, CompanyBank } from '../../models/Company.js';
import { Country } from '../../models/Country.js';
import Currency from '../../models/Currency.js';
import {
  Customer,
  CustomerBilling,
  CustomerCart,
  CustomerCode,
  CustomerContact,
  CustomerDelivery,
  CustomerDocument,
  CustomerGroup,
  CustomerImg,
  CustomerRegion,
  CustomerSales,
  CustomerSegmentation,
  CustomerTax,
  CustomerType
} from '../../models/Customer.js';
import Department from '../../models/Department.js';
import EndOfMonth from '../../models/EndOfMonth.js';
import EndOfMonthLog from '../../models/EndOfMonthLog.js';
import EndOfMonthSetting from '../../models/EndOfMonthSetting.js';
import FakturPajak from '../../models/FakturPajak.js';
import { FixedAsset, FixedAssetCategory, FixedAssetGroup, FixedDepreciation } from '../../models/FixedAsset.js';
import {
  Item,
  ItemBuying,
  ItemCategory,
  ItemCombo,
  ItemImg,
  ItemLabel,
  ItemLabelDetail,
  ItemPrice,
  ItemSubcategory,
  ItemType,
  ItemUom
} from '../../models/Item.js';
import KasbonPotongan from '../../models/KasbonPotongan.js';
import { Label, LabelSettinganPrint } from '../../models/Label.js';
import Location from '../../models/Location.js';
import { PageMenu, PageMenuTerbuka } from '../../models/PageMenu.js';
import PaymentTerm from '../../models/PaymentTerm.js';
import Periode from '../../models/Periode.js';
import PeriodeLog from '../../models/PeriodeLog.js';
import Preference from '../../models/Preference.js';
import Principal from '../../models/Principal.js';
import Province from '../../models/Province.js';
import { Salesman, SalesmanCommision, SalesmanTarget } from '../../models/Salesman.js';
import Shipping from '../../models/Shipping.js';
import StAutoApprove from '../../models/StAutoApprove.js';
import StCurrencyRate from '../../models/StCurrencyRate.js';
import StCurrencyRateDetail from '../../models/StCurrencyRateDetail.js';
import Stratum from '../../models/Stratum.js';
import {
  Supplier,
  SupplierBank,
  SupplierBrand,
  SupplierContact,
  SupplierGroup,
  SupplierPayment,
  SupplierPurchase,
  SupplierRegion,
  SupplierSegmentation,
  SupplierTax,
  SupplierType
} from '../../models/Supplier.js';
import { Tax, TaxForm } from '../../models/Tax.js';
import Transaction from '../../models/Transaction.js';
import { TransactionCode, TransCode, TransCodeGroup } from '../../models/TransCode.js';
import { TrPurchaseTarget, TrPurchaseTargetDt } from '../../models/tr/purchase/TrPurchaseTarget.js';
import TrSafetyStock from '../../models/tr/stock/TrSafetyStock.js';
import { TrSalesmanTarget, TrSalesmanTargetDt } from '../../models/tr/salesman/TrSalesmanTarget.js';
import { TrSalesTarget, TrSalesTargetDt } from '../../models/tr/sales/TrSalesTarget.js';
import {
  User,
  UserAksesCompany,
  UserCustomer,
  UserGroup,
  UserGroupAccess,
  UserGroupCustomer,
  UserItem,
  UserOtp,
  UserSalesman,
  UserSupplier,
  UserTableViewColumn,
  UserTurunan
} from '../../models/User.js';
import Vintage from '../../models/Vintage.js';
import { Warehouse, WarehouseLevel } from '../../models/Warehouse.js';

const withStandardRoute = [Endpoint.SAVE, Endpoint.DELETE, Endpoint.RESTORE];

const constWithTransactionRoute = [Endpoint.ADD_PROCESS, Endpoint.EDIT_PROCESS, Endpoint.CHANGE_STATUS];

const createRoute = (path, additionalPaths = [], model) => {
  if (additionalPaths.length > 0) {
    return additionalPaths.map((additionalPath) => ({
      path: path + additionalPath,
      model,
      tags: model.getTableName()
    }));
  }

  return [{ path, model, tags: model.getTableName() }];
};

const routeProps = () => {
  return [
    createRoute(Endpoint.MASTER + Endpoint.CURRENCY, withStandardRoute, Currency),
    createRoute(Endpoint.MASTER + Endpoint.COUNTRY, withStandardRoute, Country),
    createRoute(Endpoint.MASTER + Endpoint.COUNTRY, withStandardRoute, Country),
  ];
};

export default routeProps;
