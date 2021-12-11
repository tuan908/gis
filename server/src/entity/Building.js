import { Schema, Model } from 'mongoose';

const BuildingSchema = new Schema({
  id: Number,
  name: String,
  height: Number,
  floorCount: Number,
  buildingArea: Number,
  yearBuilt: String,
});

const Building = Model('Building', BuildingSchema);

export default Building;
