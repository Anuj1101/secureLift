const getUser=(req,res)=>{
    res.status(200).send({
        message:'i have created some conteroller'
    })
}
const registerUser=async(req,res)=>{
    if(!req.body)return res.status(501).json({message:'data not found'})
    const {name,age}=req.body;
    console.log('hii i am ironman');
    res.json({
        message:'we have got your name '+name
    })
    // const user= await User.createone({name,age,email,phone,password})
}
module.exports={getUser,registerUser}