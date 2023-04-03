const Post = require('../models/Post')

exports.getAllPosts= async(req ,res , next)=>{
    try{
        const posts = await Post.findAll();
        res.status(200).json({count:posts[0].length , posts})
    }catch(error){
        console.log(error)
    }
}
exports.createNewPost= async(req ,res , next)=>{
    let {id,title , body} = req.body

    let post = new Post(id,title , body)

    post = await post.save()

    console.log(post)
    res.send("createNewPost")
}

exports.getPostById= async(req ,res , next)=>{
    try{
        let postId = req.params.id
    let [post , _] = await Post.findById(postId)

    res.status(200).json({post})
    }catch(err){
        console.log(err)
    }
}