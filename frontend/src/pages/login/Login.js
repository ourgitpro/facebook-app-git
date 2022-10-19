import React from 'react'
import "./Login.css"
import {Button,Container,Grid,TextField} from '@mui/material';
import { styled } from '@mui/material/styles';
//import { Formik, Form } from "formik";
import { Link } from "react-router-dom";
//import {useState} from 'react';
//import LoginInput from '../../components/inputs/logininput/LoginInput';
/*const loginInfos={
  email : '',
  password: '',
}*/
const Login = () => {

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
    [ "@media (min-width:375px) and (max-width:599px)"]:{
      padding:"15px 22px",
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
     <CssTextField id="outlined-basic" label="Email Adress" variant="outlined" />
     <CssTextField id="outlined-basic" label="password" variant="outlined" type="password" />
     <LoginButton>Log in</LoginButton>
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