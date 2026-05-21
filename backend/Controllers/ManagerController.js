import ManagerSchema from "../Schemas/ManagerModel.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs"
import chalk from "chalk";




export const register = async (req, res) => {
    try {
    const {UserName, Password} = req.body;
    const hashedPass = bcrypt.hashSync(Password, 10);

    const createdManager = await ManagerSchema.create({UserName, Password: hashedPass });

    if(!UserName || !Password) {
        console.log(chalk.yellowBright("missing fields "));
    }
    res.status(201).json({message: "Manager Created Successfully", createdManager})
    } catch (error) {
        console.log(chalk.bgBlackBright(error))
    }
}

export const login = async (req, res) => {
    try {
        const Manager = await ManagerSchema.findOne({UserName: req.body.UserName})

        if(!Manager){
           return  res.status(404).json({message: "Manager Not Found😌"});
        }
        const compare = await  bcrypt.compare(req.body.Password, Manager.Password )

        if(!compare) {
           return  res.status(400).json({message: "Wrong password"});
        }
         
        console.log(process.env.SECRET_KEY)
        const token = jwt.sign({
            Manager: Manager._id,
            UserName: Manager.UserName
        },
        process.env.SECRET_KEY,
         {expiresIn: "7d"}
        )
        return res.status(200).json({
            message: "Login Successfully",
            token,
            manager: {
                id: Manager._id,
                username: Manager.UserName,
                role: "AdminStrator",
            }
        })
    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
}