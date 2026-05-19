import mongoose from "mongoose";

//ManagerId (PK), UserName, Password

const ManagerSchema = new mongoose.Schema({
    UserName: {
        type: String,
        required: true,
        unique: true
    },
    Password: {
        type: String,
        required: true
    }
}, { timestamps: true })

export default mongoose.model('Manager', ManagerSchema);