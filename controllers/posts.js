const Post = require('../models/post');

module.exports = {
    saveResult,
    create,
    index
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

function index(req, res) {
    Post.find({}, function (err, posts) {
       res.status(200).json(posts)
    })
 }