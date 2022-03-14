
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Grid } from "@mui/material"
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import { useNavigate, Link } from "react-router-dom";
import CardMedia from '@mui/material/CardMedia';
import Menu from '@mui/material/Menu';
import AccountCircle from '@mui/icons-material/AccountCircle';
import Alert from '@mui/material/Alert';

import Cart from "./Cart";
import SwipeableTextMobileStepper from "./slider";




function ProductComponent() {
  const [productList, setProductList] = useState([]);
  const [aa, seta] = useState([]);
  const navigate = useNavigate();
  var [count, setCount] = useState(1);

  const token = localStorage.getItem("token")
  useEffect(async () => {

    var response = await axios.get("https://bikeservice12.herokuapp.com/product/get", {
      headers:
      {
        "access-token": token
      }
    })
    setProductList(response.data)
  }, [])

  const updateProduct = async (id, userQuantity) => {
    const token = localStorage.getItem("token")
    var response = await axios.put(`https://bikeservice12.herokuapp.com/product/update/${id}`, {
      userQuantity: userQuantity


    }, {
      headers: { "access-token": token }
    })
    var a = aa.push({ val1: response.data.value.userQuantity, val2: response.data.value.name });
    var b = [...aa]
    //    var sum = 0;
    //    for(var i = 0 ; i <b.length;i++)
    //    {
    //     sum = sum + b[i]
    //    }

    var c = b.filter(value => (
      value.val1

    )

    )

    var sum = 0;
    for (var i = 0; i < c.length; i++) {
      sum = Number(c[i]) + sum
    }
    //  console.log(sum)
    //   console.log(b)

    seta(b)
    console.log(aa)



    var index = productList.findIndex(row => row.id === id);
    var productListCopy = [...productList];
    productListCopy[index] = response.data.vaue;
    setProductList(productListCopy)

  }

  const login = async () => {
    navigate("/login")
  }

  const logout = async () => {
    await localStorage.removeItem("token");
    navigate("/")
  }
  const cart = async () => {
    navigate("/cart")
  }



  return (

    < >

      <Box sx={{ flexGrow: 1 }} >
        <AppBar position="static">
          <Toolbar>
            {/* <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton> */}
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              SERVICES PROVIDED
            </Typography>
            <Button color="inherit" onClick={cart} >Cart</Button>
            <Button color="inherit" onClick={login}>Login</Button>
            <Button color="inherit" onClick={logout}>Logout</Button>
            {/* <div>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
               
                color="inherit"
              >
                <AccountCircle />
              </IconButton>
              <Menu
                id="menu-appbar"
              
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
               
              >
               
              </Menu>
            </div> */}
            <Button><Link to="/">
            </Link></Button>


          </Toolbar>
        </AppBar>
      </Box>
      <br></br>
      <br></br>
      <Grid className="slider">
      <SwipeableTextMobileStepper></SwipeableTextMobileStepper>
      </Grid>
      <Alert variant="filled" severity="info">
        Check cart After successfull adding the service
      </Alert>


      <Grid container spacing={8} style={{ margin: "3%" }}>
        {productList.map(row => (
          <Grid item key={row._id}>
            <Card sx={{ width: 345 }}>
              <CardMedia
                component="img"
                alt="green iguana"
                height="300"
                image={row.image}
              />
              <CardContent>
                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                  {row.name}
                </Typography>
                <Typography variant="h5" component="div">
                  $&nbsp;{row.costofrepair}
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                  {row.type}
                </Typography>
                <Typography variant="body2">
                  {row.quantity}
                  <br />

                </Typography>
              </CardContent>
              <CardActions>
                <Button onClick={e => updateProduct(row._id, ++row.userQuantity)} disabled={row.userQuantity == 1}>&nbsp;Add service</Button>&nbsp;&nbsp;
                <Button onClick={e => updateProduct(row._id, --row.userQuantity)} disabled={row.userQuantity == 0}>&nbsp;&nbsp;Remove Service</Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
       


      </Grid>
    </>
  )
}
export default ProductComponent;

