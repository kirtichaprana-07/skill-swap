import { Navigate,Route,Routes } from 'react-router-dom'
import './App.css'
import Login from './pages/Login.jsx';
import Signup from './pages/Signup.jsx';
import Home from './pages/Home.jsx';

function App() {
  return (
      <div className='App'>
          <Routes>
            <Route path='/' element={<Navigate to="/login" />}  />
            <Route path='/login' element={<Login/>}  />
            <Route path='/signup' element={<Signup/>}  />
            <Route path='/home' element={<Home/>}  />
          </Routes>
      </div>
  )
}

export default App
