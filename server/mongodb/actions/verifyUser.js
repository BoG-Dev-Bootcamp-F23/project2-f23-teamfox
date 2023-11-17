import connectDB from '../index.js'
import User from '../models/User.js'

export default async function verifyUser(data) {
    try {
        await connectDB()
        const user = User.find({ email: data.email, password: data.password })
        userID = user.ObjectId
        admin = user.admin
        return {'userID': userID, 'admin': admin}
    } catch (e) {
        console.log(e)
        throw new Error(e)
    }
}