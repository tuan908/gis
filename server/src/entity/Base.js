import mongoose from 'mongoose';

const BaseSchema = new mongoose.Schema({
  altitude: Number,
  rings: Array,
  bid: String
});

const Base = mongoose.model('Base', BaseSchema);
export default Base;
