import { Schema, Model } from 'mongoose';

const RoofSchema = new Schema({
  altitude: Number,
  rings: Array,
  bid: String
});

const Roof = Model('Roof', RoofSchema);
export default Roof;
