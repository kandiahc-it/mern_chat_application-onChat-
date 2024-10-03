import User from "../models/dbmodels.js";

export const getUserSidebar=async(req,res)=>{
    try {
        const loggeduserId=req.user._id;
        const filteredusers=await User.find({_id:{$ne:loggeduserId}}).select("-password");

        res.status(200).json(filteredusers);
        
    } catch (error) {
        console.log("Error in user side bar",error.message);
        res.status(500).json({error:"Internal server error"});
    }


}