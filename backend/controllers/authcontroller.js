import User from '../models/dbmodels.js'
import bcrypt from 'bcryptjs'
import generateTokenandSetCookie from '../utils/generatewebToken.js';
export const login=async(req,res)=>{
    console.log("login page");
    try {
        const {userName,password} =req.body;
        const user= await User.findOne({userName})
        const isPasswordCorrect= await bcrypt.compare(password,user?.password || " ");

        if(!user || !isPasswordCorrect){
            res.status(400).json({error:"Invalid Username or password"});
        }
        generateTokenandSetCookie(user._id, res),
        res.status(200).json({
            _id:user._id,
            fullName: user.fullName,
            userName:user.userName,
            profilePic: user.profilePic
        });

        
    } catch (error) {
        console.log("Error in login controller", error.message)
        res.status(500).json({error:"Internal server Error"})
    }
}
export const logout= (req,res)=>{

    //console.log("logout page");
    try {
        res.cookie("jwt","",{maxAge:0})
        res.status(200).json({message:"Logout sucessfully"})
        
    } catch (error) {
        console.log("Error in logout controller", error.message)
        res.status(500).json({error:"Internal server Error"})
    }
}
export const signup=async(req,res)=>{
   // res.send("signup");
    console.log("signup page");
   try{ 
    
    const {fullName,userName,password, confirmPassword, gender } = req.body;
    
    if(password!==confirmPassword){
        return res.status(400).json({error:"Passwors donot match"});
    }

    const user=await User.findOne({userName});

    if(user){
        return res.status(400).json({error:"Username already exists"});
    }
    //hash password
    const salt= await bcrypt.genSalt(10);
    const hashedpassword= await bcrypt.hash(password,salt);

    const boypicture=`https://avatar.iran.liara.run/public/boy?username=${userName}`;
    const girlpicture=`https://avatar.iran.liara.run/public/girl?username=${userName}`;

    const newUser= new User({
        fullName,
        userName,
        password:hashedpassword,
        gender,
        profilePic: gender==="male"? boypicture:girlpicture
    })
    if(newUser){

        generateTokenandSetCookie(newUser._id, res),
        await newUser.save(); 
        res.status(200).json({
            _id:newUser._id,
            fullName: newUser.fullName,
            userName: newUser.userName,
            profilePic: newUser.profilePic
        });
    }
    else{
        res.status(400).json({error:"Invalid user"});
    }

    }

    catch(error){
        console.log("Error in signup controller", error.message)
        res.status(500).json({error:"Internal server Error"})
    }
    console.log("signup page");
};