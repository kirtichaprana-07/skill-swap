import React , {useState} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import { handleError, handleSuccess } from '../utils'

function Signup() {
    const [signupInfo,setSignupInfo] = useState({
        name:'',
        email:'',
        password:''
    })
    const navigate = useNavigate()
    const handleChange=(e) =>{
        const {name,value} = e.target;
        console.log(name,value);
        const copySignupInfo = { ...signupInfo};
        copySignupInfo[name] = value;
        setSignupInfo(copySignupInfo)

    }
    console.log('singupInfo -> ',signupInfo)

    const handleSignup = async(e) =>{
        e.preventDefault();
        const {name,email,password} = signupInfo;
        if(!name || !email || !password){
            return handleError('fields are required')
        }
        try{
            const url="https://skill-swap-roan.vercel.app//auth/signup";
            const response = await fetch(url ,{
                method: "POST",
                headers:{
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(signupInfo)
            })
        const result = await response.json();
        const {success,message,error} = result;
        if(success){
            handleSuccess(message);
            setTimeout(()=>{
              navigate('/login')
            },1000)
        }else if(error){
            const details = error?.details[0].message;
            handleError(details);
        }else if(!success){
            handleError(message)
        }
        console.log(result)
        } 
        catch(err){
            handleError(err)
        }
    }
  return (
    <div className="h-screen w-full flex justify-center items-center bg-gray-100">
      <div className="bg-white py-8 px-12 rounded-[10px] w-full max-w-[400px] shadow-[8px_8px_24px_9px_rgba(66,68,90,1)]">
        <h1 className="mb-5 text-2xl font-semibold">Signup</h1>
        <form onSubmit={handleSignup}>
          <div className="flex flex-col mb-4">
            <label htmlFor="name" className="text-[20px] mb-1">Name</label>
            <input
              onChange={handleChange}
              type="text"
              name="name"
              autoFocus
              placeholder="Enter your name.."
              value={signupInfo.name}
              className="border p-2 rounded placeholder:text-xs placeholder:italic"
            />
          </div>
          <div className="flex flex-col mb-4">
            <label htmlFor="email" className="text-[20px] mb-1">Email</label>
            <input
            onChange={handleChange}
              type="email"
              name="email"
              placeholder="Enter your email.."
               value={signupInfo.email}
              className="border p-2 rounded placeholder:text-xs placeholder:italic"
            />
          </div>
          <div className="flex flex-col mb-4">
            <label htmlFor="password" className="text-[20px] mb-1">Password</label>
            <input
            onChange={handleChange}
              type="password"
              name="password"
              placeholder="Enter your password.."
               value={signupInfo.password}
              className="border p-2 rounded placeholder:text-xs placeholder:italic"
            />
          </div>
          <button
            type="submit"
            className="bg-purple-600 text-white text-[20px] py-2 rounded cursor-pointer w-full hover:bg-purple-700 transition"
          >
            Signup
          </button>
          <span className="block mt-4 text-sm">
            Already have an account?
            <Link to="/login" className="text-purple-600 underline ml-1">Login</Link>
          </span>
        </form>
        <ToastContainer />
      </div>
    </div>
  )
}

export default Signup





// import React from 'react'
// import {Link } from 'react-router-dom'
// import { ToastContainer } from 'react-toastify'

// function Signup(){
    
    // const [loginInfo,setLoginInfo] = useState({
    //     name:'',
    //     email:'',
    //     password:''
    // })
    // const handleChange=(e) =>{
    //     const {name,value} = e.target;
    //     console.log(name,value);
    // }
//     return(
//         <div className='container'>
//             <h1>Signup</h1>
//             <form>
//                 <div>
//                     <label htmlFor='name'>Name</label>
//                     <input
//                     // onChange={handleChange}
//                     type="text"
//                     name="name"
//                     autoFocus
//                     placeholder='Enter your name.. '
//                     />
//                 </div>
//                 <div>
//                     <label htmlFor='email'>email</label>
//                     <input
//                     type="email"
//                     name="email"
//                     autoFocus
//                     placeholder='Enter your email.. '
//                     />
//                 </div>
//                 <div>
//                     <label htmlFor='name'>Password</label>
//                     <input
//                     type="password"
//                     name="password"
//                     autoFocus
//                     placeholder='Enter your password.. '
//                     />
//                 </div>
//                 <button>Signup</button>
//                 <span>Already have an account?
//                     <Link to="/login">Login</Link>
//                 </span>
//             </form>
//             <ToastContainer />
//         </div>
//     )
// }

// export default Signup
