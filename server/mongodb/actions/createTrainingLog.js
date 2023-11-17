import connectDB from '../index.js'
import TrainingLog from '../models/TrainingLog.js'
import User from '../models/Animal.js'
import Animal from '../models/Animal.js'
import updateAnimal from './updateAnimal.js'


export default async function createTrainingLog(data) {
    try {
        await connectDB()
        if (User.findOne({ _id: data.user }) === null){
            throw new Error("User Not Found")
        }
        if (Animal.findOne({ _id: data.animal }) === null){
            throw new Error("Animal Not Found")
        }
        const newTrainingLog = new TrainingLog(data)
        await newTrainingLog.save()

        updateAnimal({ "animalID": data.animal, "addValue": data.hours })
    } catch (e) {
        throw new Error(e)
    }
}