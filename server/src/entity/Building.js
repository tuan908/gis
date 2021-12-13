import { Schema, Model } from 'mongoose';

const BuildingSchema = new Schema({
  name: String,
  height: Number,
  floorCount: Number,
  lineCount: Number,
  buildingArea: Number,
  yearBuilt: String,
});

const Building = Model('Building', BuildingSchema);

export default Building;
