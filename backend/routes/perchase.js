import express from 'express';
import Perchase from '../models/perchase';

const router = express.Router();

/*
    구매품목 리스트: GET /api/perchase
*/

router.get('/', (req, res) => {
  
    Perchase.find()
    .sort({_id: -1})
    .exec((err, Perchases) => {
      if(err) throw err;
      res.json(Perchases);
    })
  });
/*
    조건별 구매품목 리스트 : GET /api/perchase/:listType/:option
*/
router.get('/:listType/:option', (req, res) => {

  let listType = req.params.listType;
  let option = req.params.option;

  if(listType === "group" && option === "productName"){
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
  }
    
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
