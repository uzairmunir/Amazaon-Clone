import React from 'react';
import './Cart.css';
import Subtotal from './Subtotal';
import Grid from '@material-ui/core/Grid';
import CheckOut from './CheckOut';
import { useContextValue, useStateValue } from './context/Context';
import { useAuth } from './context/AuthContext';

function Cart() {
  let [{ basket }, dispatch] = useStateValue();
  const { currentUser } = useAuth();
  return (
    <div className='cart-container'>
      <Grid container spacing={3}>
        <Grid item md={8} sm={10}>
          <div className='row-left'>
            <img
              src='https://www.webfx.com/internet-marketing/img/best-online-advertising3.png'
              className='add-img'
            />

            <h2 className='cart-title'>Your Shopping Basket</h2>
            <h3>{currentUser?.email}</h3>
            {basket.map((basketObj, index) => {
              return (
                <CheckOut
                  title={basketObj.title}
                  image={basketObj.image}
                  rating={basketObj.rating}
                  price={basketObj.price}
                  id={basketObj.id}
                />
              );
            })}
          </div>
        </Grid>
        <Grid item md={4} sm={10}>
          <div className='row-right'>
            <Subtotal />
          </div>
        </Grid>
      </Grid>
    </div>
  );
}

export default Cart;
