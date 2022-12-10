const mongoose = require('mongoose');
const { Schema } = mongoose;

const UsersSchema = new Schema({
    username : {
        type: 'string',
        required: true,
        unique: true,
    },
    email: {
        type: 'string',
        required: true,
        unique: true,
    },
    password: {
        type: 'string',
        required: true,
    },
    date: {
        type: 'date',
        default: Date.now,
    },
});

module.exports = mongoose.model('users', UsersSchema);