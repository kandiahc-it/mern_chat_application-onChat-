import useGetConversations from "../hooks/useGetConversations"
import Conversation from "./Conversation"


const Conversations_sidebar = () => {
  const {loading,conversation}=useGetConversations();
  console.log(conversation);
  return (
    <div className='py-2 flex flex-col overflow-auto'>
      {conversation.map((item,index)=>(
        <Conversation
        key={index}
        conversation={item}
        lastIdx={index === conversation.length -1}
        />
      ))}
      {loading? <span className="loading loading-spinner mx-auto"></span>:null}
      </div>
  )
}

export default Conversations_sidebar

//Starter code
// import Conversation from "./Conversation"


// const Conversations_sidebar = () => {
//   return (
//     <div className='py-2 flex flex-col overflow-auto'>
//       <Conversation/>
//       <Conversation/>
//       <Conversation/>
//       <Conversation/>
//       <Conversation/>
      
      
//       </div>
//   )
// }

// export default Conversations_sidebar