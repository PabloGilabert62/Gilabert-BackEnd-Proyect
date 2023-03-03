import * as path from "path"
import express from "express"
import mongoose from "mongoose"
import { __dirname } from "./path.js"
import {engine} from "express-handlebars"
import { Server } from "socket.io"
import userRouter from "./routes/userRouter.js"
import socketRouter from "./routes/socketRouter.js"

// Server
  const app = express()
  const PORT = 8080
  const server = app.listen(PORT, () => {
    console.log(`Server on port ${PORT}`
  )})
//

//Midlewares
  app.use(express.json())
  app.use(express.urlencoded({extended: true}))
  app.engine("handlebars", engine())
  app.set("view engine", "handlebars")
  app.set("views", path.resolve(__dirname, "./views"))
//

// IO Connections
  const io = new Server(server)
  const mensajes = []
  io.on("connection", (socket) => {
    console.log("Clience conectado")
    socket.on("mensaje", info => {
      mensajes.push(info)
      io.emit("mensajesLogs", mensajes)
    })
  })
//

// Mongoose connections
  mongoose.connect("mongodb+srv://gilabertpablo62:PanConNutella1313@Cluster0.kcvbwuv.mongodb.net/?retryWrites=true&w=majority")
  .then (message => console.log("MongoDB Atlas is connected"))
  .catch (error => console.log(error.message))
//

//Routes
  app.use("/", express.static(__dirname + "/public"))
  app.use("/", socketRouter)
  app.use("/users", userRouter)
//