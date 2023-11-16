import updateTrainingLog from "../../../server/mongodb/actions/updateAnimal.js";

export default async function handler(req, res) {
    if (req.method === "PATCH") {
        try {
            const { trainingLogID, updates } = req.body;
            const response = await updateTrainingLog(trainingLogID, updates);
            // console.log(response);
            return res.status(200).json({"status": "success"});
        } catch (e) {
            console.log(e.message.toString());
            if (e.message.toString() === "Error: Training Log Not Found") {
                return res.status(400).json({"status": "Training Log Not Found."});
            }
            else return res.status(500).json({"status": "Failed to update training log due to database issues."});
        }
    }
}
