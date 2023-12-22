import {useDispatch} from "react-redux";
import { useEffect, useLayoutEffect, useState } from 'react'
import './App.css'
import authService from "./appwrite/auth";
import { login, logout } from "./store/authSlice"; 
import Header from "./components/Header/Header" ;
import Footer from "./components/Footer/Footer";
import { Outlet } from "react-router-dom";

function App() {
 
 const [loading, setLoading] = useState(true)
const dispatch = useDispatch();   



useEffect(() => { 
  authService.getCurrentUsers() 
  .then((userData) => {
    if (userData) {
      dispatch(login({userData}))
    } else {
      dispatch(logout)
    }
  }) 
  .finally(() => setLoading(false))
} , [])


  return  !loading ? (
    <div className="w-full bg-gray-500 min-h-screen content-between flex flex-wrap "> 
    <div className="w-full block" > 
     <Header />  
     <main> 
     1000: <Outlet />
      </main>
     <Footer />
     </div>
    </div>
  ) : (null)  
  
  
}

export default App
