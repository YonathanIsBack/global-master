import ObjectUtil from "./ObjectUtil";

class QueryBuilderUtil {
  constructor() {}

  static buildQuery(columns, tableName) {
    return 'SELECT * FROM table_name';
  }

  static buildDeleteQuery(tableName, parameters) {
    if(ObjectUtil.isObjectEmpty(parameters)) {
      throw new Error("Delete parameter(s) cannot be empty");
    }

    const whereClause = Object.keys(parameters).map(column => `${column} = '${parameters[column]}'`);
  
    return `DELETE FROM ${tableName} WHERE ${whereClause.join(" AND ")}`;
  }

}

export default QueryBuilderUtil;
