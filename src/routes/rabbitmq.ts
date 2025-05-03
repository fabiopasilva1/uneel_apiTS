import dotenv from 'dotenv';
import { Router } from 'express';
import { RabbitMQController } from '../controllers/RabbitmqController';
import { RabbitMQService } from '../services/RabbitMQService';
dotenv.config();
const router = Router();
const rabbitService = new RabbitMQService(
  String(process.env.RABBITMQ_HOST),
  Number(process.env.RABBITMQ_PORT || 5872),
  String(process.env.RABBITMQ_USER),
  String(process.env.RABBITMQ_PASS),
);

const rabbitController = new RabbitMQController(rabbitService);

router.post('/send', rabbitController.sendMessage);

export default router;
