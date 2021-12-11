import { Model, Schema } from 'mongoose';

const WindowSchema = new Schema({
  id: Number,
  altitude: Number,
  coordinates: Array,
});

const Window = Model('Window', WindowSchema);
export default Window;
