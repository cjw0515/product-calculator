import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const contributionSchema = new Schema({
  date: { type: Date, default: Date.now },
  email: String,
  coin: String,
  amount: Number,
  xco: Number,
});

export default mongoose.model('Contribution', contributionSchema);
