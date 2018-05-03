import express from 'express';
import Perchase from '../models/perchase';

const router = express.Router();

/*
    구매품목 리스트       : GET /api/perchase
    조건별 구매품목 리스트 : GET /api/perchases?group=productName    
*/
router.get('/', (req, res) => {
  
  let field = req.query.group;
  
  if(field === "productName"){
    Perchase.aggregate([
      { $group: {
          _id: "$productName",
          productPrice: { $sum: "$productPrice"  },
          productQuantity: { $sum: "$productQuantity"  }
      }},
      { "$sort": { "productPrice": -1 }}
  ], (err, result) => {
    if (err) throw err;
    res.json(result);
    });
  }

   if(field === undefined){
    Perchase.find()
    .sort({_id: -1})
    .exec((err, Perchases) => {
      if(err) throw err;
      res.json(Perchases);
    })
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
})

export default router;
