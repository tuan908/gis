import { Model, Schema } from 'mongoose';

const WindowSchema = new Schema({
  altitude: Number,
  rings: Array,
  bid: String
});

const Window = Model('Window', WindowSchema);
export default Window;
