import { Schema, Model } from 'mongoose';

const DoorSchema = new Schema({
  altitude: Number,
  rings: Array,
  bid: String
});

const Door = Model('Door', DoorSchema);
export default Door;
