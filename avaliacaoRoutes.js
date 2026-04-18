import { Router } from 'express';
import AvaliacaoController from '../controllers/AvaliacaoController.js';

const router = Router();

router.post('/', AvaliacaoController.store);

export default router;