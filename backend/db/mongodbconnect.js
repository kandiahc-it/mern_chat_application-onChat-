import mongoose from 'mongoose';
const connectToMongodb= async()=>{
    try{
        mongoose.connect(process.env.MONGO_DB_URI);
        console.log("Connected to Mongodb");
    }
    catch(error){
        console.log("Error Occured",error.message);
    }
};
export default connectToMongodb;