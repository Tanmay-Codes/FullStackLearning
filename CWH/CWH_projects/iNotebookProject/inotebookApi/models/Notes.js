import mongoose from 'mongoose';
const { Schema } = mongoose;

const NotesSchema = new Schema({
    title : {
        type: 'string',
        required: true,
    },
    desc: {
        type: 'string',
        required: true,
    },
    tag: {
        type: 'string',
        required: true,
    },
    date: {
        type: 'date',
        default: Date.now,
    },
});

module.exports = mongoose.model('notes', UsersSchema);