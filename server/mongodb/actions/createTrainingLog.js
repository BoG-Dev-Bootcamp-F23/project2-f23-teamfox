import connectDB from '../index.js'
import TrainingLog from '../models/TrainingLog.js'
import User from '../models/User.js'
import Animal from '../models/Animal.js'
import updateAnimal from './updateAnimal.js'


export default async function createTrainingLog(data) {
    try {
        await connectDB();
        
        const userExists = await User.findOne({ _id: data.user });
        if (userExists === null){
            throw new Error("User Not Found");
        }
        const animalExists = await Animal.findOne({ _id: data.animal });
        console.log(animalExists);
        if (animalExists === null){
            throw new Error("Animal Not Found");
        }
        // console.log(animalExists.owner);
        // console.log(data.user);
        if (animalExists.owner.toString() !== data.user) {
            throw new Error("Animal's user does not match passed in user")
        }
        const newTrainingLog = new TrainingLog(data);
        await newTrainingLog.save();

        await updateAnimal({ "animalID": data.animal, "addValue": data.hours })
    } catch (e) {
        throw new Error(e)
    }
}