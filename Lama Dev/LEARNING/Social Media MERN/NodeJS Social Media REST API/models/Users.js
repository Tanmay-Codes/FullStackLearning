const mongoose = require("mongoose");

const UsersSchema = new mongoose.Schema({
    username: {
        type: String,
        require: true,
        min:3,
        max:40,
        unique: true
    },
    email:{
        type: String,
        required: true,
        min:6
    },
    password:{
        type: String,
        required: true,
        min:5
    },
    profilePicture:{
        type: String,
        default: ""
    },
    coverPicture:{
        type: String,
        default: ""
    },
    followers:{
        type: Array,
        default: []
    },
    following:{
        type: Array,
        default: []
    },
    isAdmin:{
        type: Boolean,
        default: false
    },
    desc:{
        type: String,
        max: 50
    },
    city:{
        type: String,
        max: 50
    },
    from:{
        type: String,
        max: 50
    },
    relationship:{
        type: Number,
        enum: [1,2,3]
    },
},
{timestamps:true}
);

module.exports = mongoose.model("Users", UsersSchema);