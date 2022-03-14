import React from "react";
import {Grid ,Typography , TextField , Button } from "@mui/material"
import axios from "axios"
import {useNavigate, Link} from "react-router-dom"
import ButtonAppBar1 from "./navbar1";




function LoginComponent(){
    const[email , setEmail] = React.useState("")
    const[password , setPassword] = React.useState("")
    const navigate = useNavigate();
    const[error , setError] = React.useState("") 
   


     const handleSubmit = async (e)=>{
          e.preventDefault();
          try{
              var response = await axios.post("https://bikeservice12.herokuapp.com/register/signin",{email:email ,password:password})
              console.log(response)
              if(response.data)
              {
                  await localStorage.setItem("token",response.data)
                  navigate("/product")
              }
          }catch(err)
          {
            console.log(err)
            setError("Email not Registered")
          }}
    


return(

      <Grid className="login">
       <ButtonAppBar1></ButtonAppBar1>   
        <div style={{margin:"5%"}}>
      
       <Typography variant = "h4" component="div" gutterBottom>
          
       </Typography>
       <form onSubmit={handleSubmit}>
        <TextField id = "email" required  type ="email" label ="Email" value = {email} onChange = {(e)=>setEmail(e.target.value)} variant="outlined"></TextField><br/><br/>
        <TextField id = "Password" required type = "password" label ="Password" value = {password} onChange = {(e)=>setPassword(e.target.value)} variant="outlined"></TextField><br/><br/>
        <Button type = "submit" variant = "contained">Sumbit</Button>
        <br></br><br></br>
        <div>Not an existing user <Link to="/"> SignUp</Link></div>
        <div>{error}</div>
       </form>
        
        </div>
        </Grid>


)

}
export default LoginComponent
