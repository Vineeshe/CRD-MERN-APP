const mongoose = require("mongoose");

//create schema

const userSchema = new mongoose.Schema({

    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        unique: true, // same emai id repete will be error
        required: true,
    },

    age: {
        type: Number,

    }
}, { timestamps: true }); // timestamp help to show date and time on data created

//create model

const User = mongoose.model('User', userSchema)

module.exports = User;
//OR
// export const User=mongoose.model('User',userSchema);


