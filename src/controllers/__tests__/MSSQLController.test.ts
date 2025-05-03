import { Connection } from 'mssql';
import { MSSQLController } from '../MSSQLController';
import { Request, Response } from 'express';

describe('MSSQLController', () => {
  const mockService = {
    executeQuery: jest.fn().mockResolvedValue([{ id: 1 }]),
  };
  const controller = new MSSQLController(mockService as unknown as Connection);
  it('It should return with result when querying bank', async () => {
    const req = { query: { sql: 'SELECT 1' } } as unknown as Request;
    const res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    } as unknown as Response;
    await controller.queryDatabase(req, res);
    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.json).toHaveBeenCalledWith({
      success: true,
      result: [{ id: 1 }],
    });
  });
  it('It should return error status 400', async () => {
    const req = { query: { sql: null } } as unknown as Request;
    const res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    } as unknown as Response;
    await controller.queryDatabase(req, res);
    expect(res.status).toHaveBeenCalledWith(400);
    expect(res.json).toHaveBeenCalledWith({ success: false, error: 'SQL não informado' });
  });
});
