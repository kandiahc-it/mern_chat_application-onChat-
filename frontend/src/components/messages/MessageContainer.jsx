import { useEffect } from "react";
import useConversation from "../../zustand/useConversation";
import MessageInput from "./MessageInput"
import Messages from "./Messages"
import { TiMessages } from "react-icons/ti";
import { useAuthContext } from "../../context/AuthContext";


const MessageContainer = () => {
    const {selectedConversation,setSelectedConversation}=useConversation();
    useEffect(()=>{
      return ()=> setSelectedConversation(null)
    },[setSelectedConversation])
  return (
    <div className='md:min-w-[450px] flex flex-col'>
        {!selectedConversation?(
        <NoChatSelected/>
    ):(
        
        <>
        <div className="bg-gray-800 px-4 py-2 mb-2 flex items-center gap-3">
  <img 
    src={selectedConversation.profilePic || '/default-profile.png'} 
    alt="Profile" 
    className="w-10 h-10 rounded-full object-cover" 
  />
  <span className="text-white font-bold">{selectedConversation.fullName}</span>
</div>
                <Messages/>
                <MessageInput/>
                </>
                )}
    </div>
  )
}

export default MessageContainer

const NoChatSelected = () => {
	const{authuser}=useAuthContext();
	return (
		<div className='flex items-center justify-center w-full h-full'>
			<div className='px-4 text-center sm:text-lg md:text-xl text-gray-200 font-semibold flex flex-col items-center gap-2'>
				<p>Welcome 👋 {authuser.fullName} ❄</p>
				<p>Select a chat to start messaging</p>
				<TiMessages className='text-3xl md:text-6xl text-center' />
			</div>
		</div>
	);
};