import { Schema, Model } from 'mongoose';

const RoofSchema = new Schema({
  id: Number,
  altitude: Number,
  coordinates: Array,
});

const Roof = Model('Roof', RoofSchema);
export default Roof;
