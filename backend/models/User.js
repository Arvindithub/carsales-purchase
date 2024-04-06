// models/User.js
import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  user_email: { type: String, required: true },
  user_id: { type: String, required: true },
  user_location: { type: String, required: true },
  user_info: { type: mongoose.Schema.Types.Mixed },
  password: { type: String, required: true },
  vehicle_info: [{ type: mongoose.Schema.Types.ObjectId, ref: 'SoldVehicle' }]
});

const User = mongoose.model('User', userSchema);

export default User;