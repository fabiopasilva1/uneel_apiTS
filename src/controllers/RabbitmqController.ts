import { Request, Response } from 'express';
import { RabbitMQService } from '../services/RabbitMQService';

export class RabbitMQController {
  private rabbitService: RabbitMQService;
  constructor(rabbitService: RabbitMQService) {
    this.rabbitService = rabbitService;
  }
  sendMessage = (req: Request, res: Response) => {
    const { job } = req.body;
    const message = JSON.stringify({ ...req.body, job });

    if (!message || !job) {
      throw new Error(`Fila ${job} ou mensagem ${message} invalida`);
    }
    try {
      this.rabbitService.sendToQueue(job, message);
      res.status(200).json({
        success: true,
        message: 'Mensagem enviada ao RabbitMQ',
      });
    } catch (error) {
      if (error instanceof Error) res.status(500).json({ success: false, error: error.message });
    }
  };
}
