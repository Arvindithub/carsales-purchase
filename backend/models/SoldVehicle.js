// models/SoldVehicle.js
import mongoose from 'mongoose';

const soldVehicleSchema = new mongoose.Schema({
  vehicle_id: { type: String, required: true },
  car_id: { type: String, required: true },
  vehicle_info: { type: mongoose.Schema.Types.Mixed }
});

const SoldVehicle = mongoose.model('SoldVehicle', soldVehicleSchema);

export default SoldVehicle;