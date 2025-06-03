import React,{useEffect,useState} from 'react'
import { useNavigate } from 'react-router-dom'
import { handleError,handleSuccess } from '../utils';
import { ToastContainer } from 'react-toastify';
function Home(){
    const [loggedInUser, setLoggedInUser] = useState('');
        const navigate = useNavigate();
        useEffect(()=>{
            setLoggedInUser(localStorage.getItem('loggedInUser'))
        },[])
    const handleLogout = (e)=>{
        localStorage.removeItem('token')
        localStorage.removeItem('loggenInUser')
        handleSuccess('user loggedout')
        setTimeout(()=>{
           navigate('/login')
        },1000)
    }
    return(
        <div>
            <h1>Hii,{loggedInUser}</h1>
            <button
            type="submit"
            className="bg-purple-600 text-white text-[20px] py-2 rounded cursor-pointer w-full hover:bg-purple-700 transition"
           onClick={handleLogout}>
            Logout
           </button>
           <ToastContainer/>
            </div>
    )
}

export default Home