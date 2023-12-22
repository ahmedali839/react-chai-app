import React from 'react'
import appwriteService from "../appwrite/config"  
import {Link} from "react-router-dom" 


function PostCard({$id, featuredImage, title}) {
     
  return (
    <Link to={`/post/${$id}`}> 
    <div className='wa-full bg-gray-500 rounded-xl p-4'>  
    <div  className='w-full mb-=4 justify-center'> 
     <img src={appwriteService.getFilePr(featuredImage)} alt={title} className='rounded-xl' />
     </div> 
     <h2 className='text-2xl font-bold '>{title}</h2>
     </div>
    
    </Link>
  )
}

export default PostCard 