import express from 'express';
import Contribution from '../models/contribution';

const router = express.Router();


router.get('/', (req, res) => {
  Contribution.find()
    .exec((err, Contributions) => {
      if (err) throw err;
      res.json(Contributions);
    });
});


router.get('/sum', (req, res) => {
  Contribution.aggregate([
        //{ $unwind: "$records" },
        { $group: {
            _id: "$coin",
            amount: { $sum: "$amount"  },
            xco: { $sum: "$xco"  }
        }}
    ], (err, result) => {
    if (err) throw err;
    res.json(result);
  });
});

// 리스트
router.post('/', (req, res) => {
  const contribution = new Contribution({
    email: req.body.email,
    coin: req.body.coin,
    amount: req.body.amount,
    xco:req.body.xco
  });

  contribution.save((err) => {
    if (err) throw err;
    return res.json({ success: true });
  });
});

export default router;
