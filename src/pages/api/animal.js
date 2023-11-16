import updateAnimal from "../../../server/mongodb/actions/updateAnimal.js";

export default async function handler(req, res) {
    if (req.method === "PATCH") {
        try {
            const { animalID, addValue } = req.body;
            const response = await updateAnimal(animalID, addValue);
            // console.log(response);
            return res.status(200).json({"status": "success"});
        } catch (e) {
            console.log(e.message.toString());
            if (e.message.toString() === "Error: Animal Not Found") {
                return res.status(400).json({"status": "User Not Found."});
            }
            else return res.status(500).json({"status": "Failed to update animal due to database issues."});
        }
    }
}
