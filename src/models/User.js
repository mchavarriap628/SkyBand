const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            requiere: true,
            trim: true
        },
        email: {
            type: String,
            require: true,
            trim: true,
            unique: true,
            lowercase: true
        },
        password: {
            type: String,
            requiere: true,
        },
        role: {
            type: String,
            enum: ["admin","customer"],
            default: "customer"
        }
    },
    {
        timestamps: true
    }
);

module.exports = mongoose.model("User",userSchema);