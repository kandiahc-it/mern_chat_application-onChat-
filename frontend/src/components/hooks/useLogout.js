import React, { useState } from 'react'
import { useAuthContext } from '../../context/AuthContext';
import toast from 'react-hot-toast';
//import { Navigate, useNavigate } from 'react-router-dom';

const useLogout = () => {
  const [loading,setLoading]=useState(false);
  const {setAuthuser} = useAuthContext();
    
  const logout=async()=>{
    setLoading(true);
    try {
        const res = await fetch("api/auth/logout",{
            method :"POST",
            headers: {"Content-Type": "application/json"},
        }
        
    );

    const data= await res.json();
    if(data.error){
        throw new Error(data.error);
    }
    localStorage.removeItem("chat-user");
    setAuthuser(null);
    toast.success("Logged out Sucessfully!");
//navigate('/login');

    } catch (error) {
        toast.error(error.message);
    }finally{
        setLoading(false);
    }
  };
  return {loading,logout};
}

export default useLogout