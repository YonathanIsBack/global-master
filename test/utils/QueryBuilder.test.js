import QueryBuilderUtil from '../../src/util/QueryBuilderUtil';

describe('QueryBuilderUtil', () => {
    describe('buildDeleteQuery', () => {
        it('should return correct query', () => {
            const tableName = "tr_some_table";
            const parameters = {
                id: 1,
                nama: "Saya adalah manusia"
            }
            const expectedResult = `DELETE FROM ${tableName} WHERE id = '1' AND nama = 'Saya adalah manusia'`;

            const actualResult = QueryBuilderUtil.buildDeleteQuery(tableName, parameters);

            expect(actualResult).toEqual(expectedResult);
        });

    });
});
