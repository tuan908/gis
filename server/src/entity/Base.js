import { Schema, Model } from 'mongoose';

const BaseSchema = new Schema({
  altitude: Number,
  coordinates: Array,
  bid: String
});

const Base = Model('Base', BaseSchema);
export default Base;
