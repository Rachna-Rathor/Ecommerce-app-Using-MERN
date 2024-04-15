
import './App.css'
import Home from './Home/Home';
import Shoping from './shop/Shoping';
import Mens from './men/Mens';
import { Navigate, Route, Routes } from 'react-router-dom';
import Womens from './women/Womens';
import Kids from './kids/Kids';
import Signup from './components/Signup';
import Login from './components/Login';
import { Toaster } from 'react-hot-toast';
import { useAuth } from './context/AuthProvider';


function App() {
  const [authUser,setauthUser]=useAuth();
  console.log(authUser);

  return (
    <>
   {/* Defininng Routes */}
   <div>
   <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path='/shop' element={<Shoping/>}/>
    {/* <Route path="/shop" element={authUser?<Shoping/>:<Navigate to="/signup"/>}/> */}
    <Route path="/men" element={<Mens/>}/>
    <Route path="/women" element={<Womens/>}/>
    <Route path="/kids" element={<Kids/>}/>
    <Route path="/signup" element={<Signup/>}/>
    <Route path="/login" element={<Login />} /> 
 

   </Routes>
   <Toaster/>
   </div>
    </>
  )
}

export default App
