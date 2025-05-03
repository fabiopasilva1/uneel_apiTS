import { Request, Response } from 'express';
import { RabbitMQController } from '../RabbitmqController';

describe('RabbitMQController', () => {
  const mockService = { sendToQueue: jest.fn().mockResolvedValue(undefined) };
  const controller = new RabbitMQController(mockService as any);

  it('should respond with success when sending a valid message to a valid queue', () => {
    const req = { body: { queue: 'queue1', message: 'hello' } } as Request;
    const res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    } as any as Response;
    controller.sendMessage(req, res);
    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.json).toHaveBeenCalledWith({
      success: true,
      message: 'Mensagem enviada ao RabbitMQ',
    });
  });

  it('should throw an error if queue is undefined', () => {
    const req = { body: { queue: undefined, message: 'test' } } as Request;
    const res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    } as any as Response;
    expect(() => controller.sendMessage(req, res)).toThrow('Fila undefined ou mensagem test invalida');
  });

  it('should throw an error if message is undefined', () => {
    const req = { body: { queue: 'queue1', message: undefined } } as Request;
    const res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    } as any as Response;
    expect(() => controller.sendMessage(req, res)).toThrow('Fila queue1 ou mensagem undefined invalida');
  });

  it('should throw an error if both queue and message are undefined', () => {
    const req = { body: { queue: undefined, message: undefined } } as Request;
    const res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    } as any as Response;
    expect(() => controller.sendMessage(req, res)).toThrow('Fila undefined ou mensagem undefined invalida');
  });
  it('should return 500 if sendToQueue throws an error', () => {
    const error = new Error('Falha no RabbitMQ');
    const mockService = {
      sendToQueue: jest.fn().mockImplementation(() => {
        throw error;
      }),
    };
    const controller = new RabbitMQController(mockService as any);
    const req = { body: { queue: 'queue1', message: 'msg' } } as Request;
    const res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    } as any as Response;
    controller.sendMessage(req, res);
    expect(res.status).toHaveBeenCalledWith(500);
    expect(res.json).toHaveBeenCalledWith({ success: false, error: 'Falha no RabbitMQ' });
  });
});
