import { RabbitMQService } from '../RabbitMQService';

import amqplib from 'amqplib';

jest.mock('amqplib');

describe('RabbitMQService', () => {
  it('Must send message to the queue', async () => {
    const connectMock = jest.spyOn(amqplib, 'connect').mockResolvedValue({
      createChannel: jest.fn().mockResolvedValue({
        assertQueue: jest.fn(),
        sendToQueue: jest.fn(),
        close: jest.fn(),
      }),
      close: jest.fn(),
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } as any);

    const service = new RabbitMQService(
      String(process.env.RABBITMQ_HOST),
      Number(process.env.RABBITMQ_PORT),
      String(process.env.RABBITMQ_USER),
      String(process.env.RABBITMQ_PASS),
    );
    await expect(service.sendToQueue('fila', 'message')).resolves.toBeUndefined();
    expect(connectMock).toHaveBeenCalled();
  });
});
