
import { useState } from "react";
import { ImSearch } from "react-icons/im";
import useConversation from "../../zustand/useConversation";
import useGetConversations from '../hooks/useGetConversations'
import toast from "react-hot-toast";
const SearchInput = () => {
  const [search,setSearch]=useState("");
  const {setSelectedConversation}=useConversation();
  const {conversation}=useGetConversations()
  const handleSubmit=(e)=>{
    e.preventDefault();
    if(!search) return;
    if (search.length < 3) {
      toast.error('search characters must be 3 characters long')
    }
    const conversations=conversation.find((c)=> c.fullName.toLowerCase().includes(search.toLowerCase()));
    if(conversations){
      setSelectedConversation(conversations);
      setSearch('');
    }
    else{
      toast.error("No such User Found!!");
    }
  }
  return (
    <form className='flex items-center gap-2 ' onSubmit={handleSubmit}>
        <input type='text' placeholder='Search..' className='input input-bordered rounded-full'
        value={search}
        onChange={(e)=> setSearch(e.target.value)}/>
    <button type='submit' className='btn btn-circle bg-sky-500 text-white'>
    <ImSearch />
    </button>
    
    </form>
  )
}

export default SearchInput
//Starter code

// import { ImSearch } from "react-icons/im";
// const SearchInput = () => {
//   return (
//     <form className='flex items-center gap-2 '>
//         <input type='text' placeholder='Search..' className='input input-bordered rounded-full'/>
//     <button type='submit' className='btn btn-circle bg-sky-500 text-white'>
//     <ImSearch />
//     </button>
    
//     </form>
//   )
// }

// export default SearchInput