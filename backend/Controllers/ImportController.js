import ImportSchema from "../Schemas/ImportModel.js";

//Food _Id (FK), ImportDate, Quantity
export const createImport = async (req, res) => {
    try{
        const { Food,  Quantity } = req.body;

        const createImport = await ImportSchema.create({
            Food,
            Quantity
        })
        console.log(Food);
        console.log(Quantity);

        res.status(201).json({
            message: "Import created Successfully🚛🚚",
            createImport
        })
    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
}

export const  getImports = async (req, res) => {
    try {
        const gotImports = await ImportSchema.find().populate("Food");
        res.status(200).json({
            message: "Import  Retrieved Successfully🚛🚚",
            data: gotImports
        })
    }catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
}

export const updateImport = async (req, res) => {
    try {
        const { _id } = req.params;
        const {Food, Quantity } = req.body;
        
        const updatedImport = await ImportSchema.findByIdAndUpdate(_id, {
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
            data: updatedImport
        })

    } catch(error) {
        res.status(500).json({
            message: error.message
        })
    }
}

export const deleteImport = async (req, res) => {
    try{
        const { _id } = req.params;

        const deletedImport = await ImportSchema.findByIdAndDelete(_id);

        if(!_id) {
            res.status(404).json({
                message: "Id Not Found"
            })
        }

        res.status(200).json({
            message: "Import Deleted Successfully 🚛🚚->🗑️",
            deletedImport
        })
    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
}