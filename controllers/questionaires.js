const Post = require('../models/post');

module.exports = {
    saveResult,
    create
}

function saveResult() {
    console.log("anything")
}

function create(req, res) {
    const post = new Post(req.user.id);
    Post.create(function(err) {
        res.status(201).json(post)
    }) 
}