import connectDB from '../index.js'
import TrainingLog from '../models/TrainingLog.js'
import updateAnimal from './updateAnimal.js'


export default async function createTrainingLog(data) {
    try {
        await connectDB()
        const newTrainingLog = new TrainingLog(data)
        await newTrainingLog.save()

        updateAnimal(newTrainingLog.animal, newTrianingLog.hours)
    } catch (e) {
        throw new Error(e)
    }
}