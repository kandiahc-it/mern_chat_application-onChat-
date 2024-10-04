
import Conversations_sidebar from "./Conversations_sidebar"
import Logoutbtn from "./Logout"
import SearchInput from "./SearchInput"


const Sidebar = () => {
  return (
    <div className='border-r border-slate-500 p-4 flex flex-col'>
        <SearchInput/>
        <div className='divider px-3'></div>
        <Conversations_sidebar/>
        <Logoutbtn/>
    </div>
  )
}

export default Sidebar

//Starter code
// import Conversation from "./Conversation"
// import Conversations_sidebar from "./Conversations_sidebar"
// import SearchInput from "./SearchInput"


// const Sidebar = () => {
//   return (
//     <div className='border-r border-slate-500 p-4 flex flex-col'>
//         <SearchInput/>
//         <div className='divider px-3'></div>
//         <Conversations_sidebar/>
//     </div>
//   )
// }

// export default Sidebar