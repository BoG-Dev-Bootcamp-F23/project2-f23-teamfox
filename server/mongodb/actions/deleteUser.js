import User from '../models/User';
import Animal from '../models/Animal';
import TrainingLog from '../TrainingLog';
import connectDB from '../index';

async function deleteUser(data) {
    await connectDB();
    try {
        const {userId} = data;
        // Delete the user
        const user = await User.deleteOne({ _id: userId });
        if (user === null) {
            throw new error('User Not Found');
        }
        // Delete animals associated with user
        await Animal.deleteMany({ owner: userId });
        // Delete training logs associated with user
        await TrainingLog.deleteMany({ user: userId });
        return true;
    } catch (error) {
        console.error('Error deleting user:', error.message);
        return false;
    }
};

export default deleteUser;
