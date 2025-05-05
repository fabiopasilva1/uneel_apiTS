import { MSSQLService } from '../MSSQLService';
import sql from 'mssql';

jest.mock('mssql');

describe('MSSQLService', () => {
  let service: MSSQLService;
  const mockPool = {
    request: jest.fn(),
    close: jest.fn(),
  };

  beforeEach(() => {
    service = new MSSQLService({} as sql.config);
    jest.clearAllMocks();
  });

  it('should execute a query and return results', async () => {
    const mockQuery = jest.fn().mockResolvedValue({ recordset: [{ id: 1 }] });
    (mockPool.request as jest.Mock).mockReturnValue({ query: mockQuery });
    (sql.connect as jest.Mock).mockResolvedValue(mockPool);

    const result = await service.executeQuery('SELECT 1');
    expect(result).toEqual([{ id: 1 }]);
    expect(sql.connect).toHaveBeenCalled();
    expect(mockQuery).toHaveBeenCalledWith('SELECT 1');
  });

  it('should handle errors during query execution', async () => {
    const mockError = new Error('Query failed');
    (mockPool.request as jest.Mock).mockReturnValue({
      query: jest.fn().mockRejectedValue(mockError),
    });
    (sql.connect as jest.Mock).mockResolvedValue(mockPool);

    await expect(service.executeQuery('SELECT 1')).rejects.toThrow('Query failed');
  });

  it('should reinitialize the pool on connection error', async () => {
    const mockError = new Error('Connection error');
    (sql.connect as jest.Mock).mockRejectedValueOnce(mockError);
    await service.initializePool();
    expect(sql.connect).toHaveBeenCalled();
  });

  it('should handle abort signal correctly return throw with turn 3', async () => {
    const mockRequest = {
      input: jest.fn(),
      execute: jest.fn().mockImplementation(() => {
        // Simula uma execução que não é abortada
        return new Promise((resolve) => setTimeout(() => resolve({ recordset: [] }), 100));
      }),
      cancel: jest.fn(), // Mock da função cancel
    };
    (mockPool.request as jest.Mock).mockReturnValue(mockRequest);
    (sql.connect as jest.Mock).mockResolvedValue(mockPool);

    const abortController = new AbortController();
    const abortSignal = abortController.signal;

    const executePromise = service.executeSP('myProcedure', {}, abortSignal);
    abortController.abort(); // Aborta a execução

    await expect(executePromise).rejects.toThrow(
      'Execução de myProcedure falhou após 3 tentativas: Pool de conexões não disponível.',
    );
  });

  it('should throw an error after max retries', async () => {
    const mockRequest = {
      input: jest.fn(),
      execute: jest.fn().mockRejectedValue(new Error('Execution failed')),
      cancel: jest.fn(),
    };
    (mockPool.request as jest.Mock).mockReturnValue(mockRequest);
    (sql.connect as jest.Mock).mockResolvedValue(mockPool);
    const abortSignal = new AbortController();
    abortSignal.abort();
    await expect(service.executeSP('myProcedure', {}, abortSignal.signal)).rejects.toThrow(
      new RegExp(`Execução de myProcedure falhou após 3 tentativas:`),
    );
  });
});
