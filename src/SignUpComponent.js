import React from "react";
import {Grid ,Typography , TextField , Button,Alert } from "@mui/material"
import axios from "axios"
import {useNavigate , Link} from "react-router-dom";
import ButtonAppBar from "./navbar";




function SignUpComponent(){
    const[username,setuserName] =  React.useState("")
    const[email , setEmail] = React.useState("")
    const[name,setName] =  React.useState("")
    const[phone,setPhone]= React.useState("")
    const[password , setPassword] = React.useState("")
    const[error , setError] = React.useState("") 
    const navigate = useNavigate();
   


     const handleSubmit = async (e)=>{
          e.preventDefault();
          try{
              var response = await axios.post("https://bikeservice12.herokuapp.com/register/signup",{username:username , email:email , name:name , phone:phone , password:password})
              console.log(response)
              if(response.data)
              {
                 
                navigate("/product")
              }
          }catch(err)
          {
            console.log(err)
            setError("Email Already Registered")
            console.log(error)
          }}
    


return(
     <Grid>
         <div className="signup">
          < ButtonAppBar></ButtonAppBar>
        <div style={{margin:"5%"}} >
          <Alert variant="filled" severity="success">
       SIGNUP FOR SERVICE
      </Alert> <br></br> <br></br>
      
        
       <Typography variant = "h4" component="div" gutterBottom>
     
       </Typography>
       <form onSubmit={handleSubmit}>
       
       <TextField id = "username" required  type ="text" label ="UserName" value = {username} onChange = {(e)=>setuserName(e.target.value)} variant="outlined"></TextField><br/><br/>
        <TextField id = "email" required  type ="email" label ="Email" value = {email} onChange = {(e)=>setEmail(e.target.value)} variant="outlined"></TextField><br/><br/>
        <TextField id = "name" required q type ="text" label ="Name" value = {name} onChange = {(e)=>setName(e.target.value)} variant="outlined"></TextField><br/><br/>
        <TextField id = "phone" required  type ="tel" label ="phone" value = {phone} onChange = {(e)=>  setPhone(e.target.value)} variant="outlined"></TextField><br/><br/>
        <TextField id = "Password" required type = "password" label ="Password" value = {password} onChange = {(e)=>setPassword(e.target.value)} variant="outlined"></TextField><br/><br/>
        <Button type = "submit" variant = "contained">Sumbit</Button>
        <br></br><br></br>
        <div>Already a User <Link to="/login"> Login</Link></div>
       </form>
        <div style={{color:"red"}}>{error}</div>
        <div className="val1" id = "val2"></div>
        </div>
        </div>
        </Grid>
    

  


)

}
export default SignUpComponent
