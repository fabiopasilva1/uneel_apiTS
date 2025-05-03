import amqplib, { ConsumeMessage } from 'amqplib';

export class RabbitMQService {
  private hostname: string;
  private port: number;
  private username: string;
  private password: string;

  constructor(url: string, port: number, username: string, password: string) {
    this.hostname = url;
    this.port = port;
    this.username = username;
    this.password = password;
  }

  async connector() {
    const conn = await amqplib.connect({
      heartbeat: 60,
      hostname: this.hostname,
      port: this.port,
      username: this.username,
      password: this.password,
      vhost: '/',
    });
    const channel = await conn.createChannel();
    return { conn, channel };
  }

  async sendToQueue(queue: string, message: string) {
    const msg = JSON.stringify(message);

    const { channel, conn } = await this.connector();
    await channel.assertQueue(queue, { durable: true });
    channel.sendToQueue(queue, Buffer.from(msg));

    await channel.close();
    await conn.close();
  }
}
