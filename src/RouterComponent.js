import React from "react";
import {BrowserRouter , Route , Routes} from "react-router-dom";
import Cart from "./Cart";
import LoginComponent from "./LoginComponent";
import ProductComponent from "./ProductComponent";
import Register from "./Register";
import SignUpComponent from "./SignUpComponent";



function RouterComponent()
{
    return(
         <>
         <div>

       <BrowserRouter >
        <Routes>
        <Route path = "/" element ={<SignUpComponent></SignUpComponent>}></Route>
            <Route path = "/login" element ={<LoginComponent></LoginComponent>}></Route>
            <Route path = "/cart" element = {<Cart></Cart>}></Route>
            <Route path = "/product" element = {<ProductComponent></ProductComponent>}></Route>
            <Route path = "/register" element = {<Register></Register>}></Route>
            
          
        
        
        </Routes>
       </BrowserRouter>



         </div>
         
         
         </>

    )
}
export default RouterComponent