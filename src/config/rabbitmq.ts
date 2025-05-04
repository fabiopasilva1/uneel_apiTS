import dotenv from 'dotenv';
dotenv.config();
import { RabbitMQService } from '../services/RabbitMQService';
export const rabbitService = new RabbitMQService(
  String(process.env.RABBITMQ_HOST),
  Number(process.env.RABBITMQ_PORT || 5872),
  String(process.env.RABBITMQ_USER),
  String(process.env.RABBITMQ_PASS),
);
