import connectDB from '../index.js'
import Animal from '../models/Animal.js'


export default async function createAnimal(data) {
    try {
        await connectDB()
        if (User.findOne({ _id: data.owner }) === null) {
            throw new Error("Owner Not Found")
        }
        const newAnimal = new Animal(data)
        await newAnimal.save()
    } catch (e) {
        throw new Error(e)
    }
}