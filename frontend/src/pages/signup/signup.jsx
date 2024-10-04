import GenderCheckbox from "./GenderCheckbox"


const Signup = () => {
  return (
    <div  className='flex  items-center justify-center min-w-96  min-h-screen mx-auto'>
      <div className='w-full max-w-md p-6 rounded-lg shadow-md bg-clip-padding backdrop-filter backdrop-blur-lg'>
      <h1 className='text-3xl font-semibold text-center text-gray-300'>Sign Up
              <span className='text-blue-500'> ChatApp</span>
            </h1>
            <form>
                <div>
                    <label className='label p-2'>
                        <span className='text-base label-text'>Full Name</span>
                    </label>
                    <input type='text' placeholder='Enter Your Name (Eg:Ragavi)' className='w-full input input-bordered h-18'/>
                </div>

                <div>
                    <label className='label p-2'>
                        <span className='text-base label-text'>User Name</span>
                    </label>
                    <input type='text' placeholder='Enter Your User Name' className='w-full input input-bordered h-18'/>
                </div>

                <div>
                    <label className='label '>
                        <span className='text-base label-text'>Password</span>
                    </label>
                    <input type='password' placeholder='Enter Your Pasword' className='w-full input input-bordered h-18'/>
                </div>

                <div>
                    <label className='label '>
                        <span className='text-base label-text'>Confirm Password</span>
                    </label>
                    <input type='password' placeholder='Enter Your Pasword Again!!' className='w-full input input-bordered h-18'/>
                </div>
                
                <GenderCheckbox/>

                <a href="#" className='text-5m hover:underline hover:text-blue-600 mt-2 inline-block'>
                    Already have an account?
                </a>

                <div className='btn btn-block btn-sm mt-2 border border-slate-700'>Sign Up</div>

            
            </form>
        </div>  
        
        
        
        </div>
  )
}

export default Signup


// import GenderCheckbox from "./GenderCheckbox"


// const Signup = () => {
//   return (
//     <div  className='flex  items-center justify-center min-w-96  min-h-screen mx-auto'>
//       <div className='w-full max-w-md p-6 rounded-lg shadow-md bg-clip-padding backdrop-filter backdrop-blur-lg'>
//       <h1 className='text-3xl font-semibold text-center text-gray-300'>Sign Up
//               <span className='text-blue-500'> ChatApp</span>
//             </h1>
//             <form>
//                 <div>
//                     <label className='label p-2'>
//                         <span className='text-base label-text'>Full Name</span>
//                     </label>
//                     <input type='text' placeholder='Enter Your Name (Eg:Ragavi)' className='w-full input input-bordered h-18'/>
//                 </div>

//                 <div>
//                     <label className='label p-2'>
//                         <span className='text-base label-text'>User Name</span>
//                     </label>
//                     <input type='text' placeholder='Enter Your User Name' className='w-full input input-bordered h-18'/>
//                 </div>

//                 <div>
//                     <label className='label '>
//                         <span className='text-base label-text'>Password</span>
//                     </label>
//                     <input type='password' placeholder='Enter Your Pasword' className='w-full input input-bordered h-18'/>
//                 </div>

//                 <div>
//                     <label className='label '>
//                         <span className='text-base label-text'>Confirm Password</span>
//                     </label>
//                     <input type='password' placeholder='Enter Your Pasword Again!!' className='w-full input input-bordered h-18'/>
//                 </div>
                
//                 <GenderCheckbox/>

//                 <a href="#" className='text-5m hover:underline hover:text-blue-600 mt-2 inline-block'>
//                     Already have an account?
//                 </a>

//                 <div className='btn btn-block btn-sm mt-2 border border-slate-700'>Sign Up</div>

            
//             </form>
//         </div>  
        
        
        
//         </div>
//   )
// }

// export default Signup





