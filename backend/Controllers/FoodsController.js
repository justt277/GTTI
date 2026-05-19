import FoodSchema from "../Schemas/FoodsModel.js"

//Food_Name, Food _OwnerName
export const createFood = async (req, res) => {
    try{
        const { Food_Name, OwnerName } = req.body;

        const createdFood = await FoodSchema.create({
            Food_Name,
            OwnerName
        })
        console.log(Food_Name);
        console.log(OwnerName);

        res.status(201).json({
            message: "Food created Successfully🍊🍓🍎🍎",
            createdFood
        })
    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
}

export const  getFoods = async (req, res) => {
    try {
        const gotFoods = await FoodSchema.find();
        res.status(200).json({
            message: "Food Retrieved Successfully🍊🍓🍎🍎",
            data: gotFoods
        })
    }catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
}

export const updateFood = async (req, res) => {
    try {
        const { _id } = req.params;
        const {Food_Name, OwnerName } = req.body;
        
        const updatedFood = await FoodSchema.findByIdAndUpdate(_id, {
            Food_Name,
            OwnerName
        }, { new: true });

        if(!_id) {
            res.status(404).json({
                message: "Id Not Found"
            })
        }
        res.status(200).json({
            message: "Updated Successfully 🍓-->🍎",
            data: updatedFood
        })

    } catch(error) {
        res.status(500).json({
            message: error.message
        })
    }
}

export const deleteFood = async (req, res) => {
    try{
        const { _id } = req.params;

        const deletedFood = await FoodSchema.findByIdAndDelete(_id);

        if(!_id) {
            res.status(404).json({
                message: "Id Not Found"
            })
        }

        res.status(200).json({
            message: "Food Deleted Successfully 🍎->🗑️"
        })
    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
}