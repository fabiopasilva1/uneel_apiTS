import { Request, Response } from 'express';
import { RabbitMQService } from '../services/RabbitMQService';

export class RabbitMQController {
  private rabbitService: RabbitMQService;
  constructor(rabbitService: RabbitMQService) {
    this.rabbitService = rabbitService;
  }
  sendMessage = (req: Request, res: Response) => {
    const { queue, message } = req.body;
    if (!message || !queue) {
      throw new Error(`Fila ${queue} ou mensagem ${message} invalida`);
    }
    try {
      this.rabbitService.sendToQueue(queue, message);
      res.status(200).json({
        success: true,
        message: 'Mensagem enviada ao RabbitMQ',
      });
    } catch (error) {
      if (error instanceof Error) res.status(500).json({ success: false, error: error.message });
    }
  };
}
