import mongoose from "mongoose";

//Food_Id (PK), Food_Name, Food _OwnerName
const FoodSchema = new mongoose.Schema({
    Food_Name: {
        type: String,
        required: true
    },
    OwnerName: {
        type: String,
        required: true
    }

}, { timestamps: true});


export default mongoose.model('Food', FoodSchema)