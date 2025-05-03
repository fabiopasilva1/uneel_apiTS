import { MSSQLController } from '../MSSQLController';
import { Request, Response } from 'express';

describe('MSSQLController', () => {
  const mockService = {
    executeQuery: jest.fn().mockResolvedValue([{ id: 1 }]),
  };
  const controller = new MSSQLController(mockService as any);
  it('It should return with result when querying bank', async () => {
    const req = { query: { sql: 'SELECT 1' } } as any as Request;
    const res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    } as any as Response;
    await controller.queryDatabase(req, res);
    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.json).toHaveBeenCalledWith({
      success: true,
      result: [{ id: 1 }],
    });
  });
  it('It should return error status 400', async () => {
    const req = { query: { sql: null } } as any as Request;
    const res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    } as any as Response;
    await controller.queryDatabase(req, res);
    expect(res.status).toHaveBeenCalledWith(400);
    expect(res.json).toHaveBeenCalledWith({ success: false, error: 'SQL não informado' });
  });
});
