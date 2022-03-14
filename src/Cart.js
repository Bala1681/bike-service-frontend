
import {useNavigate, Link} from "react-router-dom";
import React , {useEffect , useState} from "react";
import axios from "axios";
import { Button , Grid } from "@mui/material";
import ButtonAppBar2 from "./navbar2";
import Register from "./Register";
function Cart(props)
{
    function register()
      {
         
         navigate("/register")
      }
    const [productList , setProductList] = useState([]);
    const [val , setval] = useState();
    const[sum , setSum] = useState([]);
    const[a , setvalue] = useState(0);
    const navigate = useNavigate();
   
    const token = localStorage.getItem("token")
  
    useEffect(async()=>
   {
    
       var response = await axios.get("https://bikeservice12.herokuapp.com/product/get",{
           headers:
           {
            "access-token":token
           }

       },[setSum])
       sum.push(response.data.userQuantity)
       
       setProductList(response.data)
       console.log(productList+"productList1")
    console.log(response.data)
    //    setval(response.data)
    //    console.log(val)
    setval(response.data.filter((data)=>(data.userQuantity==1)))
   var b =  response.data.filter((data)=>(data.userQuantity==1))
  var c = (response.data)
//   console.log()
//     console.log(val)
    // val?.map(a=>(
    //     <div> {a.name}</div>
    // ))
    // setSum(val.map((val)=>(sum=Number(sum)+Number(val.costofrepair))))
    // console.log(sum)
    // console.log(value3)
    // const value4 = value3[(value3.length-1)] 
    // setSum(value4)
       
    setProductList(response.data)
    
     
   
   
   
   
   
   
   
   
    },[])
//    console.log(val);
// //  const qty = val.reduce((a,b)=> b.userQ==1?parseInt(a)+parseInt(b):null)
// //  console.log(qty);
//   val?.reduce((a,b)=>a+Number(b.costofrepair) , a)
 


    return(
      <Grid className="cart">
         
      <ButtonAppBar2></ButtonAppBar2>
      <br></br> <br></br>
      <div className="cart1 center "  >
        { val?.map(a=>(
            <div >
        <div> <br></br> {a.name}&nbsp;&nbsp; Cost:&nbsp;&nbsp;${ Number(a.costofrepair) } </div>
      
        </div>
     ))
     }

<div> <br></br>  Total:${ val?.reduce((a,b)=>a+Number(b.costofrepair) , a)}</div><br></br>
<div>
    </div> 
<Button disabled = {val?.reduce((a,b)=>a+Number(b.costofrepair) , a) == 0 } onClick = {register} variant = "contained">Register</Button>
</div>
<div></div>
      </Grid>

    )
}
export default Cart;