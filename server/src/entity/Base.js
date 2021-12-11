import { Schema, Model } from 'mongoose';

const BaseSchema = new Schema({
  id: Number,
  altitude: Number,
  coordinates: Array,
});

const Base = Model('Base', BaseSchema);
export default Base;
