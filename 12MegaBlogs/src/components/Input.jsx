import React, { useId } from 'react'
 
 
const Input = React.forwardRef( function Input ({
    label,
    type="text",
    className="",
    ...props
    
}, ref) 
{ 
    const id = useId();  

    return (
       <div className='w-full'>  
       {label && <label className='mb-1 pt-1 inline-block' 
       htmlFor="id">  
       {label}
        </label> 
        } 
        <Input 
        type={type}
        id={id}
        ref={ref} 
        {...props}
         className={` px-3 py-2 rounded-lg bg-white text-black focus:bg-gray-50 outline-none duration-200 border border-gray-200 w-full 
          ${className}`}
           />
       </div> 
       )
}) 



export default Input