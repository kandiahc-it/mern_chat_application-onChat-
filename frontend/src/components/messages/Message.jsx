import {useAuthContext} from '../../context/AuthContext'
import { extractTime } from '../../utils/extractTime';
import useConversation from '../../zustand/useConversation';

const Message = ({message}) => {
    console.log();
    const {authuser} = useAuthContext();
    console.log(authuser)
    const {selectedConversation}=useConversation();
    const fromMe = message.senderId===authuser._id;
    const chatClassName= fromMe? 'chat-end' : 'chat-start';
    const time=extractTime(message.createdAt);
    const profilePic=authuser?authuser.profilePic: selectedConversation.profilePic;
    const bubbleBgColor=fromMe? 'bg-blue-500':"";
    
  return (
    <div className={`chat ${chatClassName}`}>
        <div className='chat-image avatar'>
            <div className='w-10 rounded-full'>
            <img
                alt="Tailwind CSS chat bubble component"
                src={profilePic} />
            </div>
        </div>
        <div className={`chat-bubble text-white bg-blue-500 ${bubbleBgColor} pb-2`}>
             {message.message}
        </div>
        <div className='chat-footer opacity-50 text-xs flex gap-1 items-center'>{time}</div>
        </div>
    
  )
}

export default Message

//starter


// const Message = () => {
//     return (
//       <div className='chat chat-end'>
//           <div className='chat-image avatar'>
//               <div className='w-10 rounded-full'>
//               <img
//                   alt="Tailwind CSS chat bubble component"
//                   src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
//               </div>
//           </div>
//           <div className='chat-bubble text-white bg-blue-500'>
//               Hi! Its me CK 
//           </div>
//           <div className='chat-footer opacity-50 text-xs flex gap-1 items-center'>11:11</div>
//           </div>
      
//     )
//   }
  
//   export default Message