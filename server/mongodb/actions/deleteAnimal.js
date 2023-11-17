import User from '../models/User';
import Animal from '../models/Animal';
import TrainingLog from '../TrainingLog';
import connectDB from '../index';

async function deleteAnimal(data) {
    await connectDB();
    try {
        const { animalId } = data;
        // Delete the animal
        await Animal.deleteOne({ _id: animalId });
        // Delete training logs associated with the animal
        await TrainingLog.deleteMany({ animal: animalId });
        return true;
    } catch (error) {
        console.error('Error deleting animal:', error.message);
        return false;
    }
};

export default deleteAnimal;
