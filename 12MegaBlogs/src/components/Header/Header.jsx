import React from 'react' 
import {Logo, LogoutBtn, Container} from "../index.jsx"  
import { Link } from "react-router-dom" 
import {useSelector} from  "react-redux" 
import { useNavigate  } from 'react-router-dom'

const Header = () => { 
const authStatus = useSelector((state) => state.auth.status)

const navigate = useNavigate()

const navItem = [
  {
    name: "Home",
    slug: "/",
    active: true,
  }, 
  {
    name : "Login",
    slug: "/login",
    active:  !authStatus,
  },
 
  {
    name : "Signup",
    slug: "/signup",
    active:  !authStatus,
  },
  

   {
     name : "All Posts",
     slug: "/all-posts",
     active:  !authStatus,
   },
 
 
  {
    name : "Add Post",
    slug: "/add-post",
    active:  !authStatus,
  },


]
  return (
    <div>
      <header className='py-3 shadow bg-gray-600 '> 
      <Container> 
       <nav className='flex'> 
        <div className='m-4 '> 
        <link to="/">
         <Logo /> 
         </link>
         </div> 

         <ul className='flex mx-auto px-auto' >  
         {navItem.map((item) => item.active ? ( 
          <li key={item.name}>  
          <button  
           onClick={() => navigate(item.slug)} 
           className='inline-block px-6 py-2 duration-200 hover:bg-blue-100 rounded-full'

          >  
          {item.name}
          </button>
          </li>
         ) : null )} 
          
          {authStatus && (
          <li><LogoutBtn /></li>
          ) }
         </ul>
        </nav>
       </Container>
      </header>  
    </div>
  )
}

export default Header
