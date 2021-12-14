import mongoose from 'mongoose';

const BuildingSchema = new mongoose.Schema({
  name: String,
  height: Number,
  floorCount: Number,
  lineCount: Number,
  buildingArea: Number,
  yearBuilt: String,
});

const Building = mongoose.model('Building', BuildingSchema);

export default Building;
