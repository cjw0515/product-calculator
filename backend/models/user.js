import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const userSchema = new Schema({
  email: { type: String, required: true, unique: true, lowercase: true },
  password: { type: String, required: true, trim: true },
  contributions: [{ type: mongoose.Schema.Types.objectId, ref: 'Contribution'}]
});

export default mongoose.model('User', userSchema);
