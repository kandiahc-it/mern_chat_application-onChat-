import React from 'react'

const Login = () => {
  return (
    <div className='flex  items-center justify-center min-w-96  min-h-screen mx-auto'>
        <div className='w-full max-w-md p-6 rounded-lg shadow-md bg-clip-padding backdrop-filter backdrop-blur-lg'>
            <h1 className='text-3xl font-semibold text-center text-gray-300'>Login
              <span className='text-blue-500'> ChatApp</span>
            </h1>
            <form>
              <div>
              <label className='label p-2'>
              <span className='text-base label-text'>Username</span>
              </label>
              <input type='text' placeholder='Enter username' className='w-full input input-bordered h-10'/> 
              </div>
              <div>
              <label className='label p-2'>
              <span className='text-base label-text'>Password</span>
              </label>
              <input type='text' placeholder='Enter password' className='w-full input input-bordered h-10'/> 
              
              </div>
              <a href='#' className='text-5m hover:underline hover:text-blue-600 mt-2 inline-block'>
                {"Don't"} have an account?
              </a>
              <div>
                <button className='btn btn-block btn-sm mt-2'>Login</button>
              </div>


            </form>
            </div>
          </div>
  )
}

export default Login;





// import React from 'react'

// const Login = () => {
//   return (
//     <div className='flex  items-center justify-center min-w-96  min-h-screen mx-auto'>
//         <div className='w-full max-w-md p-6 rounded-lg shadow-md bg-clip-padding backdrop-filter backdrop-blur-lg'>
//             <h1 className='text-3xl font-semibold text-center text-gray-300'>Login
//               <span className='text-blue-500'> ChatApp</span>
//             </h1>
//             <form>
//               <div>
//               <label className='label p-2'>
//               <span className='text-base label-text'>Username</span>
//               </label>
//               <input type='text' placeholder='Enter username' className='w-full input input-bordered h-10'/> 
//               </div>
//               <div>
//               <label className='label p-2'>
//               <span className='text-base label-text'>Password</span>
//               </label>
//               <input type='text' placeholder='Enter password' className='w-full input input-bordered h-10'/> 
              
//               </div>
//               <a href='#' className='text-5m hover:underline hover:text-blue-600 mt-2 inline-block'>
//                 {"Don't"} have an account?
//               </a>
//               <div>
//                 <button className='btn btn-block btn-sm mt-2'>Login</button>
//               </div>


//             </form>
//             </div>
//           </div>
//   )
// }

// export default Login;