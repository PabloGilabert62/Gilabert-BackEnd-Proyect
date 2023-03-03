import mongoose from "mongoose" //I brought only the modules of mongoose that I need

const userCollection = "users" //Name of my collection

const userSchema = new mongoose.Schema({ //Schema of user
    name: String,
    lastname: String,
    email: {
        type: String,
        unique: true
    },
    age: Number
})

export const userModel = mongoose.model(userCollection, userSchema)