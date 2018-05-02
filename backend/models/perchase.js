import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const perchaseSchema = new Schema({
  date: { type: Date, default: Date.now },
  productName: String,
  productQuantity: Number,
  productPrice: Number,
});

export default mongoose.model('Perchase', perchaseSchema);
