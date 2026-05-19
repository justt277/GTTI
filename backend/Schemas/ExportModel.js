import mongoose from "mongoose";

// Food _Id (FK), ExportDate, Quantity

const ExportSchema = new mongoose.Schema({
    Food: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Food',
        required: true
    },
    ExportDate: {
        type: Date,
        default: Date.now
    },
    Quantity: {
        type: Number,
        required: true,
        default: 0
    }
}, { timestamps: true });

export default mongoose.model('Export', ExportSchema);