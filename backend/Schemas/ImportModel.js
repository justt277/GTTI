import mongoose, { Schema } from "mongoose";

//Food _Id (FK), ImportDate, Quantity
const ImportSchema = new mongoose.Schema({
    Food: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Food",
        required: true
    },
    ImportDate: {
        type: Date,
        default: Date.now
    },
    Quantity: {
        type: Number,
        required: true,
        default: 0
    }
}, { timestamps: true });

export default mongoose.model('Import', ImportSchema);