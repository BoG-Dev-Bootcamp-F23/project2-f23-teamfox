import connectDB from '../index.js'
import TrainingLog from '../models/TrainingLog.js'
import Animal from '../models/Animal.js'
import updateAnimal from './updateAnimal.js'


export default async function createTrainingLog(data) {
    try {
        await connectDB()
        if (!User.exists({ _id: data.user })){
            throw new Error("User Not Found")
        }
        if (!Animal.exists({ _id: data.animal })){
            throw new Error("Animal Not Found")
        }
        const newTrainingLog = new TrainingLog(data)
        await newTrainingLog.save()

        updateAnimal(newTrainingLog.animal, newTrainingLog.hours)
    } catch (e) {
        throw new Error(e)
    }
}