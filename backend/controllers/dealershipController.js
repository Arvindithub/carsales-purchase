// controllers/dealershipController.js
import Dealership from '../models/Dealership.js';

const createDealership = async (req, res) => {
  const session = await Dealership.startSession();
  session.startTransaction();
  
  try {
    // Perform database operations within the transaction
    await Dealership.create(req.body, { session });
    await session.commitTransaction();
    session.endSession();
    
    res.status(201).json({ message: 'Dealership created successfully' });
  } catch (error) {
    console.error(error);
    await session.abortTransaction();
    session.endSession();
    res.status(500).json({ message: 'Server Error' });
  }
};

export { createDealership };