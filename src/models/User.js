import { DataTypes } from 'sequelize';
import DatabaseConnectionSingleton from '../configs/DatabaseConnection.js';
import StandardModel from './StandardModel.js';
const sequelize = DatabaseConnectionSingleton.getConnection();

class User extends StandardModel { }
class UserAksesCompany extends StandardModel { }
class UserCustomer extends StandardModel { }
class UserGroup extends StandardModel { }
class UserGroupAccess extends StandardModel { }
class UserGroupCustomer extends StandardModel { }
class UserItem extends StandardModel { }
class UserOtp extends StandardModel { }
class UserSalesman extends StandardModel { }
class UserSupplier extends StandardModel { }
class UserTableViewColumn extends StandardModel { }
class UserTurunan extends StandardModel { }

User.init(
  StandardModel.buildPropertyWithOptions(
    {
      ...StandardModel.buildPrimaryKey('userId', DataTypes.BIGINT),
      companyParentId: DataTypes.INTEGER,
      userGroupId: DataTypes.INTEGER,
      userCode: DataTypes.STRING(50),
      username: DataTypes.STRING(25),
      telegramUsername: DataTypes.STRING(150),
      telegramChatId: DataTypes.STRING(250),
      password: DataTypes.STRING(50),
      passwordApprove: DataTypes.STRING(50),
      initial: DataTypes.STRING(50),
      userBirthdate: DataTypes.DATE,
      userPhone: DataTypes.TEXT,
      userGender: DataTypes.TINYINT,
      userEmail: DataTypes.STRING(100),
      locationId: DataTypes.INTEGER,
      stratumId: DataTypes.INTEGER,
      userFunction: DataTypes.TINYINT,
      groupId: DataTypes.INTEGER,
      urlImg: DataTypes.STRING(200),
      companyId: DataTypes.INTEGER,
      issettingprice: DataTypes.TINYINT,
      creditTermId: DataTypes.INTEGER,
      creditTermLimit: DataTypes.INTEGER,
      creditLimit: DataTypes.DOUBLE,
      creditLimitUsed: DataTypes.DOUBLE,
      ispin: DataTypes.TINYINT
    },
    { withDbId: true, withIsactive: true, withIsdel: true, withCreate: true, withModify: true }
  ),
  StandardModel.buildStandardModelInformation('ms_user', 'User', sequelize)
);

UserAksesCompany.init(
  StandardModel.buildPropertyWithOptions(
    {
      ...StandardModel.buildPrimaryKey('userAksesCompanyId', DataTypes.BIGINT),
      userId: DataTypes.BIGINT,
      companyId: DataTypes.BIGINT,
      userLocalId: DataTypes.BIGINT
    },
    { withIsactive: true }
  ),
  StandardModel.buildStandardModelInformation(
    'ms_user_akses_company',
    'UserAksesCompany',
    sequelize
  )
);

UserCustomer.init(
  StandardModel.buildPropertyWithOptions(
    {
      ...StandardModel.buildPrimaryKey('userCustomerId', DataTypes.BIGINT),
      userId: DataTypes.BIGINT,
      customerId: DataTypes.BIGINT
    },
    {}
  ),
  StandardModel.buildStandardModelInformation('ms_user_customer', 'UserCustomer', sequelize)
);

UserGroup.init(
  StandardModel.buildPropertyWithOptions(
    {
      ...StandardModel.buildPrimaryKey('userGroupId', DataTypes.BIGINT),
      userId: DataTypes.INTEGER,
      companyParentId: DataTypes.INTEGER,
      userGroupName: DataTypes.STRING(25),
      userAkses: DataTypes.TEXT
    },
    { withDbId: true, withIsactive: true, withIsdel: true, withIsused: true, withCreate: true, withModify: true }
  ),
  StandardModel.buildStandardModelInformation('ms_user_group', 'UserGroup', sequelize)
);

UserGroupAccess.init(
  StandardModel.buildPropertyWithOptions(
    {
      ...StandardModel.buildPrimaryKey('userGroupAccessId', DataTypes.BIGINT),
      userGroupId: DataTypes.BIGINT,
      pageId: DataTypes.BIGINT,
      actionId: DataTypes.BIGINT,
      isaccess: DataTypes.BIGINT
    },
    {}
  ),
  StandardModel.buildStandardModelInformation('ms_user_group_access', 'UserGroupAccess', sequelize)
);

UserGroupCustomer.init(
  StandardModel.buildPropertyWithOptions(
    {
      ...StandardModel.buildPrimaryKey('userGroupCustomerId', DataTypes.BIGINT),
      userGroupId: DataTypes.BIGINT,
      customerId: DataTypes.BIGINT
    },
    {}
  ),
  StandardModel.buildStandardModelInformation(
    'ms_user_group_customer',
    'UserGroupCustomer',
    sequelize
  )
);

UserItem.init(
  StandardModel.buildPropertyWithOptions(
    {
      ...StandardModel.buildPrimaryKey('userItemId', DataTypes.BIGINT),
      userId: DataTypes.BIGINT,
      itemId: DataTypes.BIGINT
    },
    {}
  ),
  StandardModel.buildStandardModelInformation('ms_user_item', 'UserItem', sequelize)
);

UserOtp.init(
  StandardModel.buildPropertyWithOptions(
    {
      ...StandardModel.buildPrimaryKey('userOtpId', DataTypes.BIGINT),
      userId: DataTypes.BIGINT,
      otp: DataTypes.STRING(20),
      expire: DataTypes.INTEGER,
      ip: DataTypes.STRING(50)
    },
    { withCreate: true, withModify: true }
  ),
  StandardModel.buildStandardModelInformation('ms_user_otp', 'UserOtp', sequelize)
);

UserSalesman.init(
  StandardModel.buildPropertyWithOptions(
    {
      ...StandardModel.buildPrimaryKey('userSalesmanId', DataTypes.BIGINT),
      userId: DataTypes.BIGINT,
      salesmanId: DataTypes.BIGINT
    },
    {}
  ),
  StandardModel.buildStandardModelInformation('ms_user_salesman', 'UserSalesman', sequelize)
);

UserSupplier.init(
  StandardModel.buildPropertyWithOptions(
    {
      ...StandardModel.buildPrimaryKey('userSupplierId', DataTypes.BIGINT),
      userId: DataTypes.BIGINT,
      supplierId: DataTypes.BIGINT
    },
    {}
  ),
  StandardModel.buildStandardModelInformation('ms_user_supplier', 'UserSupplier', sequelize)
);

UserTableViewColumn.init(
  StandardModel.buildPropertyWithOptions(
    {
      ...StandardModel.buildPrimaryKey('userViewId', DataTypes.BIGINT),
      userId: DataTypes.BIGINT,
      page: DataTypes.STRING(50),
      fieldView: DataTypes.TEXT
    },
    {}
  ),
  StandardModel.buildStandardModelInformation(
    'ms_user_table_view_column',
    'UserTableViewColumn',
    sequelize
  )
);

UserTurunan.init(
  StandardModel.buildPropertyWithOptions(
    {
      ...StandardModel.buildPrimaryKey('turunanId', DataTypes.BIGINT),
      userId: DataTypes.BIGINT,
      userTurunanId: DataTypes.BIGINT
    },
    {}
  ),
  StandardModel.buildStandardModelInformation('ms_user_turunan', 'UserTurunan', sequelize)
);

export {
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
};
