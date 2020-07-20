const mongoose = require('mongoose');
// const bcrypt = require('bcrypt');
const Schema = mongoose.Schema;

const postSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    character: {
        type: String,
        required: true
    },
    userName: {
        type: String
    },
    comments: {
        type: String
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('Post', postSchema)