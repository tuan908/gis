import mongoose from 'mongoose';

const RoofSchema = new mongoose.Schema({
  altitude: Number,
  rings: Array,
  bid: String
});

const Roof = mongoose.model('Roof', RoofSchema);
export default Roof;
