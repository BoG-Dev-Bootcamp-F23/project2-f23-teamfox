import connectDB from '../index.js'
import User from '../models/User.js'


export default async function createUser(data) {
    try {
        await connectDB()
        const newUser = new User(data)
        await newUser.save()
    } catch (e) {
        throw new Error(e)
    }
}