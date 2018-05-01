import express from 'express';
import contribution from './contribution';
import product from './product';

const router = express.Router();
router.use('/contribution', contribution);
router.use('/product', product);

export default router;
