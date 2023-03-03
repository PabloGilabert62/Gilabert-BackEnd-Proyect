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

export default userRouter