import connectDB from "../index.js"
import Animal from "../models/Animal.js"

export default async function updateAnimal(animalID, addValue) {
    try {
        await connectDB();
        const animal = await Animal.updateOne(
            { _id: animalID },
            { $inc: { hoursTrained: addValue}}
        );
        if (animal.modifiedCount === 0) {
            throw new Error("Animal Not Found");
        }
    } catch (e) {
        throw new Error(e);
    }
}