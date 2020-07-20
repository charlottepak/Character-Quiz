const Post = require('../models/post');

module.exports = {
    index,
    create,
    delete: deleteOne,
    update,
    show
  };


async function index(req, res) {
    const posts = await Post.find({});
    res.status(200).json(posts);
}
  
async function create(req, res) {
    req.body.userId = req.user._id;
    req.body.userName = req.user.name;
    const post = await Post.create(req.body);
    res.status(201).json(post)
}

async function deleteOne(req, res) {
    const deletePost = await Post.findByIdAndRemove(req.params.id);
    res.status(200).json(deletePost);
}
  
async function update(req,res) {
    const updatePost = await Post.findByIdAndUpdate(req.params.id, req.body, {new:true});
    res.status(200).json(updatePost)
}

async function show(req, res) {
    const post = await Post.findById(req.params.id);
    res.status(200).json(post)
};