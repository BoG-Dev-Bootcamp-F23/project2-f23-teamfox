import connectDB from '../index.js'
import User from '../models/User.js'

export default async function verifyUser(email, password) {
    try {
        await connectDB()
        const user = User.find({ email: email, password: password })
        userID = user.ObjectId
        admin = user.admin
        return {'userID': userID, 'admin': admin}
    } catch (e) {
        console.log(e)
        throw new Error(e)
    }
}