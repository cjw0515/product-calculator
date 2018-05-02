import express from 'express';
import perchase from './perchases';

const router = express.Router();
router.use('/perchases', perchase);

export default router;
