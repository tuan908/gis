import mongoose from 'mongoose';

const WindowSchema = new mongoose.Schema({
  altitude: Number,
  rings: Array,
  bid: String
});

const Window = mongoose.model('Window', WindowSchema);
export default Window;
