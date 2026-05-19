import ExportSchema from "../Schemas/ExportModel.js";

//Food _Id (FK), ExportDate, Quantity
export const createExport = async (req, res) => {
    try{
        const { Food,  Quantity } = req.body;

        const createdExport = await ExportSchema.create({
            Food,
            Quantity
        })
        console.log(Food);
        console.log(Quantity);

        res.status(201).json({
            message: "Exports created Successfully🚛🚚",
            createdExport
        })
    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
}

export const  getExports = async (req, res) => {
    try {
        const gotExports = await ExportSchema.find().populate("Food");
        res.status(200).json({
            message: "Exports Retrieved Successfully🚛🚚",
           data: gotExports
        })
    }catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
}

export const updateExport = async (req, res) => {
    try {
        const { _id } = req.params;
        const {Food, Quantity } = req.body;
        
        const updatedExport = await ExportSchema.findByIdAndUpdate(_id, {
            Food,
            Quantity
        }, { new: true });

        if(!_id) {
            res.status(404).json({
                message: "Id Not Found"
            })
        }
        res.status(200).json({
            message: "Updated Successfully 🚛🚚",
            data: updatedExport
        })

    } catch(error) {
        res.status(500).json({
            message: error.message
        })
    }
}

export const deleteExport = async (req, res) => {
    try{
        const { _id } = req.params;

        const deletedExport = await ExportSchema.findByIdAndDelete(_id);

        if(!_id) {
            res.status(404).json({
                message: "Id Not Found"
            })
        }

        res.status(200).json({
            message: "Exports Deleted Successfully 🚛🚚->🗑️",
            deletedExport
        })
    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
}