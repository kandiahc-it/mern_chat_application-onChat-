import { useState } from "react";
import { BiSend } from "react-icons/bi";
import useSendMessage from "../hooks/useSendMessage";



const MessageInput = () => {
  const [message,setMessage]=useState("");
  const {loading,sendMessage}=useSendMessage();
  const handleSubmit =async(e)=>{
    e.preventDefault();
    if(!message) return;
    await sendMessage(message);
    setMessage("");

  }
  return (
    <form className='px-4 my-3' onSubmit={handleSubmit}>
        <div className='w-full relative'>
            <input type='text' 
            className="border rounded-full w-full p-3 bg-gray-800 text-white placeholder-gray-400 focus:outline-none "

            placeholder='Send a Message'
            value={message}
            onChange={(e)=> setMessage(e.target.value)}
            />
            <button type='submit' className='absolute  inset-y-0 end-0 flex items-center p-2'>
                {loading? <div className="loading loading-spinner mx-auto"></div>: <BiSend size={24}/>}
            </button>
        </div>
    </form>
  )
}

export default MessageInput


//starter code
// import { BiSend } from "react-icons/bi";


// const MessageInput = () => {
//   return (
//     <form className='px-4 my-3'>
//         <div className='w-full'>
//             <input type='text' 
//             className='border text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 text-white'
//             placeholder='Send a Message'
//             />
//             <button type='submit' className='absolute inset-y-0 end-0 flex items-center'>
//                 <BiSend/>
//             </button>
//         </div>
//     </form>
//   )
// }

// export default MessageInput