import express from 'express';
import Perchase from '../models/perchase';

const router = express.Router();
/* 
  test
 */
router.get('/test', (req, res) => {
  res.send(req.query)
})
/*
    구매품목 리스트: GET /api/perchase
*/

// router.get('/', (req, res) => {
  

//   });
/*
    조건별 구매품목 리스트 : GET /api/perchase/:listType/:option 
    ex) /api/perchases?group=productName
*/
router.get('/', (req, res) => {
  
  let field = req.query.group;
  
  if(field === "productName"){
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
  console.log(req.body);
})

export default router;
