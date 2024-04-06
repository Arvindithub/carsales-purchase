// models/Car.js
import mongoose from 'mongoose';

const carSchema = new mongoose.Schema({
  car_id: { type: String, required: true },
  type: { type: String, required: true },
  name: { type: String, required: true },
  model: { type: String, required: true },
  car_info: { type: mongoose.Schema.Types.Mixed }
});

const Car = mongoose.model('Car', carSchema);

export default Car;