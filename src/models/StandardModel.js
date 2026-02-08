import { DataTypes, Model } from 'sequelize';

class StandardModel extends Model {
  delete() {
    this.isdel = true;
  }
  restore() {
    this.isdel = false;
  }
  isdelExist() {
    return Object.keys(this.getAttributes()).includes('isdel');
  }

  static buildPrimaryKey(name, type) {
    if (type === DataTypes.INTEGER || type === DataTypes.BIGINT) {
      return {
        [name]: {
          type,
          primaryKey: true,
          autoIncrement: true,
          allowNull: false,
          validate: {
            isInt: { msg: 'Primary Key must be Integer' },
            notNull: { msg: 'Primary Key cannot be null' }
          }
        }
      };
    }
    return {
      [name]: {
        type,
        primaryKey: true
      }
    };
  }

  static buildPropertyWithOptions(
    columns,
    {
      withDbId = false,
      withIsdel = false,
      withIsused = false,
      withIsactive = false,
      withCreate = false,
      withModify = false,
      withCreateString = false,
      withModifyString = false
    }
  ) {
    return {
      ...columns,
      ...(withDbId ? { dbId: DataTypes.INTEGER } : null),
      ...(withIsdel ? { isdel: DataTypes.TINYINT } : null),
      ...(withIsused ? { isused: DataTypes.TINYINT } : null),
      ...(withIsactive ? { isactive: DataTypes.TINYINT } : null),
      ...(withCreate ? { cretime: DataTypes.DATE, creby: DataTypes.INTEGER } : null),
      ...(withCreateString ? { cretime: DataTypes.DATE, creby: DataTypes.STRING(150) } : null),
      ...(withModify ? { modtime: DataTypes.DATE, modby: DataTypes.INTEGER } : null),
      ...(withModifyString ? { modtime: DataTypes.DATE, modby: DataTypes.STRING(150) } : null)
    };
  }

  static buildStandardProperty(primaryKey, columns) {
    return {
      ...primaryKey,
      dbId: DataTypes.INTEGER,
      ...columns,
      isactive: { type: DataTypes.TINYINT, defaultValue: true },
      isdel: { type: DataTypes.TINYINT, defaultValue: false },
      cretime: DataTypes.DATE,
      creby: DataTypes.BIGINT,
      modtime: DataTypes.DATE,
      modby: DataTypes.BIGINT
    };
  }

  static buildStandardModelInformation(tableName, modelName, sequelize) {
    return {
      tableName,
      underscored: true,
      timestamps: false,
      sequelize,
      modelName
    };
  }
}

export default StandardModel;
