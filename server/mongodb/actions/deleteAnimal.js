import User from '../models/User';
import Animal from '../models/Animal';
import TrainingLog from '../models/TrainingLog';
import connectDB from '../index';

async function deleteAnimal(data) {
    await connectDB();
    try {
        const { animalID } = data;
        // Delete the animal
        const deletedAnimal = await Animal.deleteOne({ _id: animalID });
        if (deletedAnimal === null) {
            throw new error('Animal Not Found')
        }
        // Delete training logs associated with the animal
        await TrainingLog.deleteMany({ animal: animalID });
        return true;
    } catch (error) {
        console.error('Error deleting animal:', error.message);
        return false;
    }
};

export default deleteAnimal;
