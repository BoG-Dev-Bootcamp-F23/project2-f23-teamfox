import updateAnimal from "../../../server/mongodb/actions/updateAnimal.js";
import updateAnimal from "../../../server/mongodb/actions/deleteAnimal.js";

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
                return res.status(400).json({"status": "Animal Not Found."});
            }
            else return res.status(500).json({"status": "Failed to update animal due to database issues."});
        }
    } else if (req.method === 'DELETE') {
        try {
            const { animalID } = req.body;
            const response = await deleteAnimal(animalID);
            // console.log(response);
            return res.status(200).json({"status": "success"});
        } catch (e) {
            console.log(e.message.toString());
            if (e.message.toString() === "Error: Animal Not Found") {
                return res.status(400).json({"status": "Animal Not Found."});
            }
            else return res.status(500).json({"status": "Failed to delete animal due to database issues."});
        }
    } else if (req.method === 'POST') {
        try {
            // const { animalID, addValue } = req.body;
            const response = await createAnimal(req.body);
            // console.log(response);
            return res.status(200).json({"status": "success"});
        } catch (e) {
            console.log(e.message.toString());
            if (e.message.toString() === "Error: Owner Not Found") {
                return res.status(400).json({"status": "Owner Not Found."});
            }
            else return res.status(500).json({"status": "Failed to update animal due to database issues."});
        }
    }
}
