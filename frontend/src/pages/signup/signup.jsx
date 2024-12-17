import { Link } from "react-router-dom"
import GenderCheckbox from "./GenderCheckbox"
import React,{useState} from 'react'
import useSignup from "../../components/hooks/useSignup";


const Signup = () => {

    const [inputs,setInputs] = useState({
        fullName: '',
        userName: '',
        password: '',
        confirmPassword: '',
        gender: ''
    });

    const {loading, signup} = useSignup();

    const handlegendercheckboxchange= (gender)=>{
        setInputs({...inputs,gender});
    }

    const handleSubmit= async (e)=>{
        e.preventDefault();
        await signup(inputs);
    }
  return (
    <div  className='flex  items-center justify-center min-w-96  min-h-screen mx-auto'>
      <div className='w-full max-w-md p-6 rounded-lg shadow-md bg-clip-padding backdrop-filter backdrop-blur-lg'>
      <h1 className='text-3xl font-semibold text-center text-gray-300'>Sign Up
              <span className='text-blue-500'> OnChat</span>
            </h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label className='label p-2'>
                        <span className='text-base label-text  text-gray-300'>Full Name</span>
                    </label>
                    <input type='text' placeholder='Enter Your Name (Eg:Ragavi)' className='w-full input input-bordered h-18'
                    value={inputs.fullName }
                    onChange={(e) => setInputs({...inputs,fullName: e.target.value})}/>
                </div>

                <div>
                    <label className='label p-2'>
                        <span className='text-base label-text  text-gray-300'>User Name</span>
                    </label>
                    <input type='text' placeholder='Enter Your User Name' className='w-full input input-bordered h-18'
                    value={inputs.userName }
                    onChange={(e) => setInputs({...inputs,userName: e.target.value})}/>
                </div>

                <div>
                    <label className='label '>
                        <span className='text-base label-text  text-gray-300'>Password</span>
                    </label>
                    <input type='password' placeholder='Enter Your Pasword' className='w-full input input-bordered h-18'
                    value={inputs.password}
                    onChange={(e) => setInputs({...inputs,password: e.target.value})}/>
                </div>

                <div>
                    <label className='label '>
                        <span className='text-base label-text  text-gray-300'>Confirm Password</span>
                    </label>
                    <input type='password' placeholder='Enter Your Pasword Again!!' className='w-full input input-bordered h-18'
                    value={inputs.confirmPassword}
                    onChange={(e) => setInputs({...inputs,confirmPassword: e.target.value})}/>
                </div>
                
                <GenderCheckbox onCheckboxChange={handlegendercheckboxchange} selectedGender={inputs.gender}/>

                <Link to={'/login'} className='text-5m hover:underline hover:text-blue-600 mt-2 inline-block  text-gray-300'>
                    Already have an account?
                </Link>

                <button className='btn btn-block btn-sm mt-2 border border-slate-700' type='submit'
                disabled={loading}>
                    {loading? <span className="loading loading-spinner"></span>  :  "Sign Up"}</button>

            
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






