import connectDB from '../index.js'
import User from '../models/User.js'

export default async function verifyUser(data) {
    try {
        await connectDB()
        const user = await User.findOne({ email: data.email, password: data.password })
        if (user === null) {
            throw new Error('Invalid user info')
        }
        return {'userID': user._id, 'admin': user.admin}
    } catch (e) {
        console.log(e)
        throw new Error(e)
    }
}