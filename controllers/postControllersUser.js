const User = require('../models/User')

exports.getAllUsers= async(req ,res , next)=>{
    try{
        const posts = await User.findAll();
        res.status(200).json({count:posts[0].length , posts})
    }catch(error){
        console.log(error)
    }
}

exports.createNewUser= async(req ,res , next)=>{
    let {email , password} = req.password

    let post = new User(email , password)

    post = await post.save()

    console.log(post)
    res.send("createNewUser")
}

exports.getUserById= async(req ,res , next)=>{
    try{
        let postId = req.params.id
    let [post , _] = await User.findById(postId)

    res.status(200).json({post})
    }catch(err){
        console.log(err)
    }
}