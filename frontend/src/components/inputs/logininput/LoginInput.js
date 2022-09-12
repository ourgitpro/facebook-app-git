import React from 'react'
import { useField } from 'formik'
import './LoginInput.css'
const LoginInput = ({placeholder, ...props }) => {
    const [field,meta] = useField(props)
  return (
    <>
    <div className="input_wrap">
    <input
     type={field.type}
     name={field.name}
     placeholder={placeholder} {...field} {...props} />
    
    </div>
   
    </>
  )
}

export default LoginInput