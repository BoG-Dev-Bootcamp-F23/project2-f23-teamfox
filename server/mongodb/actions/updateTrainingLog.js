import connectDB from "../index.js"
import TrainingLog from "../models/TrainingLog.js"

export default async function updateTrainingLog(trainingLogID, updates) {
    try {
        await connectDB();
        const updatedTrainingLog = await TrainingLog.findByIdAndUpdate(
            trainingLogID,
            { $set: updates },
            { new: true }
        );
        if (updatedTrainingLog === null) {
            throw new Error("Training Log Not Found");
        }
        return updatedTrainingLog;
    } catch (e) {
        throw new Error(e);
    }
}