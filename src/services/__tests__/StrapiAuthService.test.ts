import { NextFunction, Request, Response } from 'express';
import { StrapiAuthService } from '../StrapiAuthService';
import axios from 'axios';

jest.mock('axios');

const mockedAxios = axios as jest.Mocked<typeof axios>;

describe('StrapiAuthService', () => {
  let service: StrapiAuthService;
  let req: Partial<Request>;
  let res: Partial<Response>;
  let next: jest.Mock;

  beforeEach(() => {
    service = new StrapiAuthService('http://localhost:1337');
    req = { headers: {} };
    res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    };
    next = jest.fn();
  });
  it('Should it return token or authenticate', async () => {
    mockedAxios.post.mockResolvedValue({ data: { jwt: 'token123' } });

    const token = await service.login('user', '12345');
    expect(token).toBe('token123');
    expect(mockedAxios.post).toHaveBeenCalled();
  });

  it('should return error if token is not provided', async () => {
    await service.tokenVerify(req as Request, res as Response, next as NextFunction);
    expect(res.status).toHaveBeenCalledWith(401);
    expect(res.json).toHaveBeenCalledWith({ Error: 'Token não informado' });
    expect(next).not.toHaveBeenCalled();
  });

  it('should return error if token is invalid', async () => {
    req.headers = { authorization: 'Bearer token_invalido' };
    mockedAxios.get.mockResolvedValue({ status: 401, statusText: 'Unauthorized' });
    await service.tokenVerify(req as Request, res as Response, next as NextFunction);
    expect(res.status).toHaveBeenCalledWith(401);
    expect(res.json).toHaveBeenCalledWith({ Error: 'Unauthorized' });
    expect(next).not.toHaveBeenCalled();
  });

  it('should call next() if token is valid', async () => {
    req.headers = { authorization: 'Bearer token_valido' };
    mockedAxios.get.mockResolvedValue({ status: 200 });
    await service.tokenVerify(req as Request, res as Response, next as NextFunction);
    expect(next).toHaveBeenCalled();
    expect(res.status).not.toHaveBeenCalled();
    expect(res.json).not.toHaveBeenCalled();
  });

  it('should throw error if url is not defined', () => {
    expect(() => new StrapiAuthService(undefined as any)).toThrow('Url do Strapi não definida!');
  });

  it('should throw error if login fails', async () => {
    const service = new StrapiAuthService('http://localhost:1337');

    jest.spyOn(require('axios'), 'post').mockRejectedValueOnce(new Error('fail'));
    await expect(service.login('user', 'wrongpass')).rejects.toThrow('Usuário ou senha invalidos');
  });

  it('should throw error if token is invalid', async () => {
    const service = new StrapiAuthService('http://localhost:1337');
    const req = { headers: { authorization: 'Bearer token_invalido' } } as any;
    const res = { status: jest.fn().mockReturnThis(), json: jest.fn() } as any;
    const next = jest.fn();

    jest.spyOn(require('axios'), 'get').mockResolvedValueOnce({ status: 401, statusText: 'Unauthorized' });

    await service.tokenVerify(req, res, next);

    expect(res.status).toHaveBeenCalledWith(401);
    expect(res.json).toHaveBeenCalledWith({ Error: 'Unauthorized' });
  });

  it('should return jwt on successful login', async () => {
    const service = new StrapiAuthService('http://localhost:1337');
    jest.spyOn(require('axios'), 'post').mockResolvedValueOnce({ data: { jwt: 'token123' } });
    const token = await service.login('user', 'pass');
    expect(token).toBe('token123');
  });

  it('should throw error if login fails', async () => {
    const service = new StrapiAuthService('http://localhost:1337');
    jest.spyOn(require('axios'), 'post').mockRejectedValueOnce(new Error('fail'));
    await expect(service.login('user', 'wrongpass')).rejects.toThrow('Usuário ou senha invalidos');
  });
});
