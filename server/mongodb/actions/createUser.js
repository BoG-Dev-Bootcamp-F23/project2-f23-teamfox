import connectDB from '../index.js'
import User from '../models/User.js'


export default async function createUser(data) {
    try {
        await connectDB()
        // const findUser = User.find({ email: data.email })
        // console.log(findUser);
        // if (findUser !== null) {
        //     throw new Error("User exists already")
        // }
        const newUser = new User(data)
        await newUser.save()
    } catch (e) {
        throw new Error(e)
    }
}