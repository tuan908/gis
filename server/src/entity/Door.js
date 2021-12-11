import { Schema, Model } from 'mongoose';

const DoorSchema = new Schema({
  id: Number,
  altitude: Number,
  coordinates: Array,
});

const Door = Model('Door', DoorSchema);
export default Door;
