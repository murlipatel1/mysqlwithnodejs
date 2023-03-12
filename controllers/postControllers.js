const Post = require('../models/Post')

exports.getAllPosts= async(req ,res , next)=>{

    res.send("getallpost")
}
exports.createNewPost= async(req ,res , next)=>{
    let {title , body} = req.body

    let post = new Post(title , body)

    post = await post.save()

    console.log(post)
    res.send("createNewPost")
}
exports.getPostById= async(req ,res , next)=>{
    res.send("getPostById")
}