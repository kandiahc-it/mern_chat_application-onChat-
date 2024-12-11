import { useSocketContext } from "../../context/SocketContext";
import useConversation from "../../zustand/useConversation";

const Conversation = ({conversation,lastIdx}) => {
    // console.log(conversation.conversation.id);
    const {selectedConversation,setSelectedConversation}=useConversation();
    const isselected=selectedConversation?._id === conversation._id;
    const {onlineUsers} =useSocketContext();
    const isOnline=onlineUsers.includes(conversation._id);
  return (
    <>
    <div className={`flex gap-2 items-center hover:bg-sky-500 rounded p-2 py-1 cursor-pointer
        ${isselected? "bg-sky-500":""}
    `}
    onClick={()=> setSelectedConversation(conversation)}
    >
        <div className={`avatar ${isOnline? "online":""}`}>
            <div className='w-12 rounded-full'>
                <img src={conversation.profilePic} alt="user avatar"/>
            </div>
        </div>
        <div className='flex flex-col flex-1'>
            <div className='flex gap-1 justify-between'>
                <p className='font-bold text-gray-200'>{conversation.fullName}</p>
                <span className='text-xl'>😁</span>
            </div>
        </div>
        </div>
        {!lastIdx && 
        <div className='divider my-0 py-0 h-1'></div>
        }
        </>
  )
}

export default Conversation