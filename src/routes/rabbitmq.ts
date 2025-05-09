import { Router } from 'express';
import { RabbitMQController } from '../controllers/RabbitmqController';
import { rabbitService } from '../config/rabbitmq';

const router = Router();

const rabbitController = new RabbitMQController(rabbitService);

router.post('/', rabbitController.sendMessage);

export default router;
