import { Router } from "express"

const socketRouter = Router()

socketRouter.get("/", (req, res) => {
    res.render("chat", {})
})

export default socketRouter