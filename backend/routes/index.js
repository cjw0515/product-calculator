import express from 'express';
import contribution from './contribution';

const router = express.Router();
router.use('/contribution', contribution);

export default router;
