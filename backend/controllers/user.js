const {
    validationEmail,
    validateLength,
    validateUsername,
  } = require("../helpers/validation.js");
  const {
    generateToken
  } = require("../helpers/tokens.js");
  const {
    sendVerificationEmail
  } = require("../helpers/mailer.js");
  const jwt = require('jsonwebtoken');
  const bcrypt = require("bcrypt");
const User = require("../models/User.js");
exports.register= async(req,res)=>{
    try{
        const{
            first_name,
            last_name,
            email,
            password,
            username,
            bYear,
            bMonth,
            bDay,
            gender
    
        }=req.body
          // email validation
        if(!validationEmail(email)){
            return res.status(400).json({message: "Invaild email address"})
        }
         // user validation if user exits or not
        const check = await User.findOne({email})
        if(check){
            return res.status(400).json({message:"This email already acche"})
        }
           // text length check
        if(!validateLength(first_name,3,30)){
            return res.status(400).json({message: "First name must be 3 to 30 character"})
        }
        if(!validateLength(last_name,3,30)){
            return res.status(400).json({message: "Last name must be 3 to 30 character"})
        }
        if(!validateLength(password,3,30)){
            return res.status(400).json({message: "password must be 3 to -- character"})
        }
         // passowrd cryption
    const cryptedPassword = await bcrypt.hash(password, 12);
    //console.log(cryptedPassword )
    const tempUsername = first_name + last_name
    const newUsername = await validateUsername (tempUsername)
       // return;
        const user= await new User({
            first_name,
            last_name,
            email,
            password: cryptedPassword,
            username: newUsername,
            bYear,
            bMonth,
            bDay,
            gender
        }).save()
        const emailVerificationToken = generateToken({
            id:user._id.toString()
        },
        "30m"
        )
        //console.log( emailVerificationToken)
        const url = `${process.env.BASE_URL}/activate/${emailVerificationToken}`
        sendVerificationEmail(user.email,user.first_name,url);

     const token= generateToken({ id: user._id.toString()},"7d");
     res.send({
        id: user._id,
        username:user.username,
        picture:user.picture,
        first_name:user.first_name,
        last_name:user.last_name,
        token:token,
        verified:user.verified,
        message: "registration success! please active your email to start",
     })
    }
    catch(error){
        res.status(500).json({ message: error.message });
    }
    
}
exports.activateAccount = async (req,res) =>{
    const { token } = req.body;
    //console.log(token)
    const user = jwt.verify(token,process.env.TOKEN_SECRET )
    //console.log(user)
   const check= await User.findById(user.id);
   if (check.verified == true){
    return res.status(400).json({message:"this email is already activated"})
   }else{
    await User.findByIdAndUpdate(user.id,{ verified:true})
    return res.status(200).json({message:"account has been activated successfully"})
   }
}
exports.login = async (req,res)=>{
    try{
        const {email,password}=req.body;
        const user = await User.findOne({email})
        if(!user){
            return res.status(400).json({
                message: "the email address is not connected to an account"
            })
        }
        const check = await bcrypt.compare(password, user.password);
        if(!check){
            return res.status(400).json({message:"Invalid credentials. please try again."})
        }
        const token= generateToken({ id: user._id.toString()},"7d");
        res.send({
           id: user._id,
           username:user.username,
           picture:user.picture,
           first_name:user.first_name,
           last_name:user.last_name,
           token:token,
           verified:user.verified,
           message: "registration success! please active your email to start",
        })

    }catch(error){
        res.status(500).json({ message: error.message });
    }
}