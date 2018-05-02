import mongoose from 'mongoose';
require('date-utils');

var dt = new Date();
var d = dt.toFormat('YYYY-MM-DD HH24:MI:SS');
console.log(d);

const Schema = mongoose.Schema;

const perchaseSchema = new Schema({
  date: { type: String, default: d },
  productName: String,
  productQuantity: Number,
  productPrice: Number,
});

export default mongoose.model('Perchase', perchaseSchema);
