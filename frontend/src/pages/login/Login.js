import React from 'react'
import "./Login.css"
import {Button,Container,Grid,TextField,Alert, ListSubheader,List,ListItemButton, ListItemText,ListItemIcon} from '@mui/material';
import { styled } from '@mui/material/styles';
//import { Formik, Form } from "formik";
import { Link } from "react-router-dom";
import {useState} from 'react';
import { ImCross } from 'react-icons/im';
import { ImCheckmark } from 'react-icons/im';
//import LoginInput from '../../components/inputs/logininput/LoginInput';
/*const loginInfos={
  email : '',
  password: '',
  id="outlined-basic"
  value={password}
  //console.log("year", new Date().getFullYear())
}*/
const Login = () => {
 let [email,setEmail] =useState('')
 let [emailerr,setEmailerr] =useState('')
 let [password,setPassword] =useState('')
 let [passworderr,setPassworderr] =useState('')
 let [lowercase,setLowercase] =useState(false)
 let [uppercase,setUppercase] =useState(false)
 let [number,setNumber] =useState(false)
 let [symbol,setSymbol] =useState(false)
 let [length,setLength] =useState(false)

 let handleEmail=(e)=>{
  setEmail(e.target.value)
  setEmailerr("")
  
 }
 let handlePassword=(e)=>{
  setPassword(e.target.value)
  setPassworderr('')
  if(!/^(?=.*[a-z])/.test(password)){
    setPassworderr('have a lower case letter only')
    setLowercase(false)
  }else if(!/^(?=.*[A-Z])/.test(password)){
    setPassworderr('The string must contain at least 1 uppercase alphabetical character')
    setUppercase(false)
    setLowercase(true)
  }else if(!/^(?=.*[0-9])/.test(password)){
    setPassworderr('	The string must contain at least 1 numeric character')
    setNumber(false)
    setUppercase(true)
  }else if(!/^(?=.*[!@#$%^&*])/.test(password)){
    setPassworderr('	The string must contain at least one special character, but we are escaping reserved RegEx characters to avoid conflict')
    setSymbol(false)
    setNumber(true)
  }else if(!/^(?=.{8,})/.test(password)){
    setPassworderr('	The string must be eight characters or longer')
    setLength(false)
    setSymbol(true)
  }else{
    setLength(true)
  }
 }
 let handleSubmit=(e)=>{
  if(!email){
    setEmailerr("Please select your Email")
  }else{if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)){
    setEmailerr('Required Full requirment Please')
  }
  }

  if(!password){
    setPassworderr('password not fill in the box')
  }else if(!/^(?=.*[a-z])/.test(password)){
    setPassworderr('have a lower case letter only')
    
  }else if(!/^(?=.*[A-Z])/.test(password)){
    setPassworderr('The string must contain at least 1 uppercase alphabetical character')
    
  }else if(!/^(?=.*[0-9])/.test(password)){
    setPassworderr('	The string must contain at least 1 numeric character')
  }else if(!/^(?=.*[!@#$%^&*])/.test(password)){
    setPassworderr('	The string must contain at least one special character, but we are escaping reserved RegEx characters to avoid conflict')
  }else if(!/^(?=.{8,})/.test(password)){
    setPassworderr('	The string must be eight characters or longer')
  }
 }
  const CssTextField = styled(TextField)({
    width: "100%",
    marginBottom: 15,
    
  });
  const LoginButton = styled(Button)({
    backgroundColor:"#166FE5",
    color:"#fff",
    width:"100%",
    padding:"15px 0",
    fontFamily: ["'Poppins', sans-serif;"],
    fontSize:20,
    fontWeight:700,
    "&:hover":
    {
      backgroundColor:"#166FE5",
    },
  })
  const RegistrationButton = styled(Button)({
    backgroundColor:"#36A420",
    color:"#fff",
    
    padding:"15px 32px",
    fontFamily: ["'Poppins', sans-serif;"],
    fontSize:20,
    fontWeight:700,
    "&:hover":
    {
      backgroundColor:"#36A420",
    },
    
  })
 
  return (
   
  <>
  <Container fixed className="login">
  <Grid container spacing={2}>
  <Grid item sm={5} lg={5}>
    <div className="imgbox">
    <img src="icons/facebook.svg" alt="facebook" />
    <p>Facebook helps you connect and share with the people in your life.</p>
    </div>
  </Grid>
  <Grid item sm={7} lg={7} >
     <div className="box">
     <CssTextField   id="outlined-basic" label="Email Adress" value={email} variant="outlined" onChange={handleEmail} />
   {emailerr && <Alert style={{marginBottom:"10px"}} variant="filled" severity="error">
   {emailerr}
 </Alert>}
    
     <CssTextField id="outlined-basic" label="password" value={password} type="password" onChange={handlePassword} />
     {passworderr &&  <Alert style={{marginBottom:"10px"}} variant="filled" severity="error">
     {passworderr}
   </Alert>}
   <List
   sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
   component="nav"
   aria-labelledby="nested-list-subheader"
   subheader={
     <ListSubheader component="div" id="nested-list-subheader">
       Password Check
     </ListSubheader>
   }
 >
   <ListItemButton>
     
   <ListItemIcon>
  
   {lowercase ? <ImCheckmark /> : <ImCross />  }
  
  
 </ListItemIcon>
     
     <ListItemText primary="Lowercase" />
   </ListItemButton>
   <ListItemButton>
     
   <ListItemIcon>
   {uppercase ? <ImCheckmark /> : <ImCross />  }
 </ListItemIcon>
     
     <ListItemText primary="Uppercase" />
   </ListItemButton>
   <ListItemButton>
     
   <ListItemIcon>
   {number ? <ImCheckmark /> : <ImCross />  }
 </ListItemIcon>
     
     <ListItemText primary="Number" />
   </ListItemButton>
   <ListItemButton>
     
   <ListItemIcon>
   {symbol ? <ImCheckmark /> : <ImCross />  }
 </ListItemIcon>
     
     <ListItemText primary="Symbol" />
   </ListItemButton>
   
   <ListItemButton>
     
  <ListItemIcon>
  {length ? <ImCheckmark /> : <ImCross />  }
 </ListItemIcon>
     
     <ListItemText primary="Length" />
   </ListItemButton>
   
   
 </List>
     <LoginButton onClick={handleSubmit}>Log in</LoginButton>
     <Link to="/" className="forgot">Forgot Password?</Link>
     <div className="line"></div>
     <div className="ragButton">
     <RegistrationButton>Create New Account</RegistrationButton>
     </div>
     </div>
   
  </Grid>
  
  
</Grid>
  
</Container>

   
    
  </>
  )
}

export default Login
