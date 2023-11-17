import connectDB from "../index.js"
import Animal from "../models/Animal.js"

export default async function updateAnimal(data) {
    try {
        await connectDB();
        const animal = await Animal.updateOne(
            { _id: data.animalID },
            { $inc: { hoursTrained: data.addValue}}
        );
        if (animal.modifiedCount === 0) {
            throw new Error("Animal Not Found");
        }
    } catch (e) {
        throw new Error(e);
    }
}