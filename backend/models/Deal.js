// models/Deal.js
import mongoose from 'mongoose';

const dealSchema = new mongoose.Schema({
  deal_id: { type: String, required: true },
  car_id: { type: String, required: true },
  deal_info: { type: mongoose.Schema.Types.Mixed }
});

const Deal = mongoose.model('Deal', dealSchema);

export default Deal;