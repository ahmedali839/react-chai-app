import React, {useState} from 'react'
import { Container, PostCard } from '../components'   
import appwriteService from "../appwrite/config" 



function AllPosts() { 
    const [posts, setPosts] = useState([]) 
    useEffect(() => {}, []) 
    appwriteService.getPosts([]) .then((posts) => { 
        if (posts) {
            setPosts(posts.documents) 
        }
    }) 
    
  return (
    <div className='w-full p-8'> 
     <Container> 
      <div className='flex flex-wrap'> 
      {posts.map((post) => ( 
      <div key={post.$id} className='w-full '>
   <PostCard post={post} />
      </div>
      ))}
       </div>
      </Container>
     </div>
  )
}

export default AllPosts