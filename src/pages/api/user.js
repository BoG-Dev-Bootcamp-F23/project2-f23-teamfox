import deleteUser from "../../../server/mongodb/actions/deleteUser.js";
import createUser from "../../../server/mongodb/actions/createUser.js";

export default async function handler(req, res) {
    if (req.method === "POST") {
        // create user
        try {
            console.log("adsfadsf");
            const { userID } = req.body;
            const response = await createUser(userID); 
            return res.status(200).json({"status": "success"});
        } catch (e) {
            if (e.message.toString() === "Error: User exists already") {
                return res.status(400).json({"status": "Failed to create because user exists already"});
            } else {
                return res.status(500).json({"status": "Failed to create because external issues"});
            }
        }
    } else if (req.method === "DELETE") {
        // deletes a user
        try {
            const { userID } = req.query;
            const response = await deleteUser(userID);
            return res.status(200).json({"status": "success"});
        } catch (e) {
            if (e.message.toString() === "Error: User Not Found") {
                return res.status(400).json({"status": "User Not Found."});
            } else {
                return res.status(500).json({"status": "Failed to update animal due to database issues."});
            }
        }
        
    }
}