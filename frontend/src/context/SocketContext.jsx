import { createContext, useContext, useEffect, useState } from "react";
import { useAuthContext } from "./AuthContext";
import io from 'socket.io-client'
export const SocketContext=createContext();

export const useSocketContext = () => {
	return useContext(SocketContext);
};

export const SocketContextProvider=({children})=>{
    const [socket,setSocket]=useState(null);
    const [onlineUsers,setOnlineUsers]=useState([]);
    const {authuser}=useAuthContext();
    useEffect(()=>{
        if(authuser){
            const socket =io("https://onchat-productio.onrender.com",{
                query:{
                    userId: authuser._id
                }
            });

            setSocket(socket);
            socket.on("getonlineusers",(users)=>{
                setOnlineUsers(users);
            })
            return ()=> socket.close();
        }else{
            if(socket){
                socket.close();
                setSocket(null);
            }
        }
    },[authuser])
   return( <SocketContext.Provider value={{socket,onlineUsers}}>
        {children}
    </SocketContext.Provider>)
}
