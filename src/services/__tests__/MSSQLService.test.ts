import { MSSQLService } from '../MSSQLService';
import sql from 'mssql';

jest.mock('mssql');

describe('MSSQLService', () => {
  it('Must return query and return result', async () => {
    const mockQuery = jest.fn().mockResolvedValue({ recordset: [{ id: 1 }] });
    const mockRequest = jest.fn().mockReturnValue({ query: mockQuery });
    const mockPool = { request: mockRequest, close: jest.fn() };

    // @ts-expect-error: Mocking sql.connect return type for test compatibility
    const mockConnect = jest.spyOn(sql, 'connect').mockResolvedValue(mockPool as unknown as sql.ConnectionPool);
    const service = new MSSQLService({} as sql.config);
    const result = await service.executeQuery('SELECT 1');
    expect(result).toEqual([{ id: 1 }]);
    expect(mockConnect).toHaveBeenCalled();
  });
});
