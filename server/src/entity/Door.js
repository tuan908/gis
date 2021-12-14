import mongoose from 'mongoose';

const DoorSchema = new mongoose.Schema({
  altitude: Number,
  rings: Array,
  bid: String
});

const Door = mongoose.model('Door', DoorSchema);
export default Door;
