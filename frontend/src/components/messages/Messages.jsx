import { useEffect, useRef } from "react";
import useGetMessages from "../hooks/useGetMessages"
import MessageSkeleton from "../skeleton/MessagesSkeleton";
import Message from "./Message"


const Messages = () => {
  const {messages,loading}=useGetMessages();
  const lastmsgRef=useRef();
  useEffect(()=>{
    setTimeout(()=>{
    lastmsgRef.current?.scrollIntoView({behaviour:"smooth"})
  },100);
  },[messages])
  return (
    <div className='px-4 flex-1 overflow-auto'>
      {!loading && messages.length>0 && messages.map((message)=>(
        <div key={message._id} ref={lastmsgRef}>
        <Message  message={message}/>
        </div>
      ))}
      {loading && [...Array(3)].map((_,index)=> <MessageSkeleton key={index}/>) }    
      {!loading && messages.length ===0 && (
        <p className="text-center">Send A Message To Start the Conveersation</p>
      )}
    </div>
  )
}

export default Messages

//starter
// import Message from "./Message"


// const Messages = () => {
//   return (
//     <div className='px-4 flex-1 overflow-auto'>
//         <Message/>
//         <Message/>
//         <Message/>
//         <Message/>
//         <Message/>
//         <Message/>
//         <Message/>
//         <Message/>
//         </div>
//   )
// }

// export default Messages