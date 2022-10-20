import React from 'react'
import "./Registration.css"
import { Link } from "react-router-dom";
import {Button,Container,Grid,TextField,Alert,  Box, InputLabel,MenuItem,FormControl,Select} from '@mui/material';
import { styled } from '@mui/material/styles';
//import { Formik, Form } from "formik";

import {useState} from 'react';
import { ImCross } from 'react-icons/im';
import { ImCheckmark } from 'react-icons/im';

const Registration = () => {
    let [email,setEmail] =useState('')
 let [emailerr,setEmailerr] =useState('')
 let [password,setPassword] =useState('')
 let [passworderr,setPassworderr] =useState('')
 let [lowercase,setLowercase] =useState(false)
 let [uppercase,setUppercase] =useState(false)
 let [number,setNumber] =useState(false)
 let [symbol,setSymbol] =useState(false)
 let [length,setLength] =useState(false)
 let [year,setYear] = useState(new Date().getFullYear())

 let [selectyear,setSelectyear]=("");
 let [selectmonth,setSelectmonth]=('')
 const [age, setAge] = React.useState('');

 const handleChange = (event) => {
   setAge(event.target.value );
 };

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
   
   let years = Array.from(new Array(60),(val,index)=>
    year-index
   );
   let months = Array.from(new Array(12),(val,index)=> 1+ index)
   let dates = Array.from(new Array(31),(val,index)=> 1+ index)
   console.log(months)
   console.log(years)
   let handleYearChange=(e)=>{
      setSelectyear(e.target.value)
   }
   let handleMonthChange=(e)=>{
    setSelectmonth(e.target.value)
 }
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
       <CssTextField   id="outlined-basic" label="First Name"  variant="outlined" onChange={handleEmail} />
     {emailerr && <Alert style={{marginBottom:"10px"}} variant="filled" severity="error">
     {emailerr}
   </Alert>}
   <CssTextField   id="outlined-basic" label="Last Name"  variant="outlined" onChange={handleEmail} />
     {emailerr && <Alert style={{marginBottom:"10px"}} variant="filled" severity="error">
     {emailerr}
   </Alert>}
       <CssTextField   id="outlined-basic" label="Email Adress" value={email} variant="outlined" onChange={handleEmail} />
     {emailerr && <Alert style={{marginBottom:"10px"}} variant="filled" severity="error">
     {emailerr}
   </Alert>}
      
       <CssTextField id="outlined-basic" label="password" value={password} type="password" onChange={handlePassword} />
       {passworderr &&  <Alert style={{marginBottom:"10px"}} variant="filled" severity="error">
       {passworderr}
     </Alert>}
     <p style={{marginTop:"20px"}}>Date Of Birth</p>
    <div className="dateof"> <Box style={{width:"133px"}}>
    <FormControl style={{width:"133px"}}>
      <InputLabel style={{width:"133px"}} id="demo-simple-select-label">Day</InputLabel>
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={age}
        label="Age"
        onChange={handleChange}
        style={{width:"133px"}}
      >
      {dates.map(item =>(
        <MenuItem value={item}>{item}</MenuItem>
      ))}
        
      </Select>
    </FormControl>
  </Box>
  <Box style={{width:"133px"}}>
  <FormControl style={{width:"133px"}}>
    <InputLabel style={{width:"133px"}} id="demo-simple-select-label">Month</InputLabel>
    <Select
      labelId="demo-simple-select-label"
      id="demo-simple-select"
      value={selectmonth}
      label="Age"
      onChange={handleMonthChange}
      style={{width:"133px"}}
    >
    {months.map(item =>(
      <MenuItem value={item}>
      {item ===1 && "January"}
      {item ===2 && "February"}
      {item ===3 && "March"}
      {item ===4 && "April"}
      {item ===5 && "May"}
      {item ===6 && "June"}
      {item ===7 && "July"}
      {item ===8 && "August"}
      {item ===9 && "September"}
      {item ===10 && "October"}
      {item ===11 && "November"}
      {item ===12 && "December"}

      </MenuItem>
    ))}
   

    </Select>
  </FormControl>
</Box>
<Box style={{width:"133px"}}>
<FormControl style={{width:"133px"}}>
  <InputLabel style={{width:"133px"}} id="demo-simple-select-label">Year</InputLabel>
  <Select
    labelId="demo-simple-select-label"
    id="demo-simple-select"
    value={selectyear}
    label="Age"
    onChange={handleYearChange}
    style={{width:"133px"}}
  >
  {years.map(item =>(
    <MenuItem value={item}>{item}</MenuItem>
  ))}
    
   
  </Select>
</FormControl>
</Box>
  </div>
       <LoginButton onClick={handleSubmit}>Log in</LoginButton>
       <Link to="/" className="forgot">Forgot Password?</Link>
       <div className="line"></div>
       <div className="ragButton">
       <RegistrationButton>Already Have Account?</RegistrationButton>
       </div>
       </div>
     
    </Grid>
    
    
  </Grid>
    
  </Container>
  
     
      
    </>
  )
}

export default Registration