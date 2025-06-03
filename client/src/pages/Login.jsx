import React , {useState} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import { handleError, handleSuccess } from '../utils'

function Login() {
    const [loginInfo,setLoginInfo] = useState({
        email:'',
        password:''
    })
    const navigate = useNavigate()
    const handleChange=(e) =>{
        const {name,value} = e.target;
        console.log(name,value);
        const copyLoginInfo = { ...loginInfo};
        copyLoginInfo[name] = value;
        setLoginInfo(copyLoginInfo)

    }
    console.log('LoginInfo -> ',loginInfo)

    const handleLogin = async(e) =>{
        e.preventDefault();
        const {email,password} = loginInfo;
        if(!email || !password){
            return handleError('fields are required')
        }
        try{
            const url="https://skill-swap-roan.vercel.app//auth/login";
            const response = await fetch(url ,{
                method: "POST",
                headers:{
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(loginInfo)
            })
        const result = await response.json();
        const {success,message,jwtToken,name,error} = result;
        if(success){
            handleSuccess(message);
            localStorage.setItem('token',jwtToken)
            localStorage.setItem('loggedInUser',name)
            // handleSuccess('user loggedout')
            setTimeout(()=>{
              navigate('/home')
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
        <h1 className="mb-5 text-2xl font-semibold">Login</h1>
        <form onSubmit={handleLogin}>
          
          <div className="flex flex-col mb-4">
            <label htmlFor="email" className="text-[20px] mb-1">Email</label>
            <input
            onChange={handleChange}
              type="email"
              name="email"
              placeholder="Enter your email.."
               value={loginInfo.email}
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
               value={loginInfo.password}
              className="border p-2 rounded placeholder:text-xs placeholder:italic"
            />
          </div>
          <button
            type="submit"
            className="bg-purple-600 text-white text-[20px] py-2 rounded cursor-pointer w-full hover:bg-purple-700 transition"
          >
            Login
          </button>
          <span className="block mt-4 text-sm">
            Don't have an account?
            <Link to="/signup" className="text-purple-600 underline ml-1">Signup</Link>
          </span>
        </form>
        <ToastContainer />
      </div>
    </div>
  )
}

export default Login




