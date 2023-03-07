import { Router } from "express"
import { userModel } from "../models/user.js"

const userRouter = Router()

userRouter.get("/", async (req, res) => {
    try {
        const users = await userModel.find()
        res.send({result: "succes", values: users})
    } catch (error) {
        res.send("Error in users: " + error.message)
    }
})

userRouter.post("/", async (req, res) => {
    
    try {
        const {name, lastname, email, age} = req.body

        console.log(name, lastname, email, age)
        const resultado = await userModel.create({
            name,
            lastname,
            email,
            age
        })
        res.send({result: "succes", resultado : resultado})
    } catch (error) {
        res.send("Error in users: " + error.message)
    }
})

export default userRouter