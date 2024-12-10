import { useState } from "react"
import toast from "react-hot-toast";
import { useAuthContext } from "../../context/AuthContext";


const useSignup = () => {
  const [loading,setLoading] =useState(false);

    const { setAuthuser} = useAuthContext();

  const signup = async({fullName,userName,password,confirmPassword,gender}) =>{
    const success=handleInputErrors({fullName,userName,password,confirmPassword,gender});
    if(!success) return;
    setLoading(true);
    try {
        const res=await fetch("api/auth/signup",{
            method:"POST",
            headers: {"Content-Type" : "application/json"},
            body: JSON.stringify({fullName,userName,password,confirmPassword,gender})
        })

        const data=await res.json();
        if(data.error){
            throw new Error(data.error);
        }
        
        localStorage.setItem("chat-user",JSON.stringify(data));
       setAuthuser(data);
        
    } catch (error) {
        toast.error(error.message);
    } finally{
        setLoading(false);
    }
  };

  return {loading, signup};
}

export default useSignup;


function handleInputErrors({fullName,userName,password,confirmPassword,gender}){
    if(!fullName || !password || !userName || !confirmPassword || !gender){
        toast.error("Please fill in all fields Buddy!");
        return false;
    }

    if(password != confirmPassword){
        toast.error("Passwords do not Match Buddy!");
        return false;
    }

    if(password.length <8){
        toast.error("password should be 8 characters long!!");
        return false;
    }
    return true;

}