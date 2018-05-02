import express from 'express';
import Perchase from '../models/perchase';

const router = express.Router();

/*
    구매품목 리스트: GET /api/perchase
*/
router.get('/', (req, res) => {
    Perchase.find()
    .exec((err, Perchases) => {
      if(err) throw err;
      res.json(Perchases);
    })
  });

/*
    구매품목 삽입: POST /api/perchase
*/
router.post('/', (req, res) => {
  const perchase = req.body;
  Perchase.insertMany(perchase, (err, result) => {
    if(err)throw err;
    return res.json(result);
  })
  console.log(req.body);
})

router.get('/s', (req, res) => {
  Perchase.aggregate([
        //{ $unwind: "$records" },
        { $group: {
            _id: "$productName",
            productPrice: { $sum: "$productPrice"  },
            productQuantity: { $sum: "$productQuantity"  }
        }}
    ], (err, result) => {
    if (err) throw err;
    res.json(result);
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

export default router;
