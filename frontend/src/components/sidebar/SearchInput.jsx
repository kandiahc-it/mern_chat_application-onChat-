
import { ImSearch } from "react-icons/im";
const SearchInput = () => {
  return (
    <form className='flex items-center gap-2 '>
        <input type='text' placeholder='Search..' className='input input-bordered rounded-full'/>
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