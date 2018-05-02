import express from 'express';
import contribution from './contribution';
import perchase from './perchase';

const router = express.Router();
router.use('/contribution', contribution);
router.use('/perchase', perchase);

export default router;
