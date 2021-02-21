import React from 'react';
import './Checkout.css';
import { Card } from '@material-ui/core';
import { useContextValue, useStateValue } from './context/Context';

function CheckOut({ id, title, image, rating, price }) {
  let [{ basket }, dispatch] = useStateValue();

  const removeFromBasket = () => {
    dispatch({
      type: 'Remove-From-Basket',
      id: id,
    });
  };
  return (
    <Card className='card'>
      <div className='checkout'>
        <img src={image} className='checkout-img' />
        <div className='checkout-info'>
          <p>{title}</p>
          <p>
            <small>$</small>
            {price}
          </p>
          <p>{rating}</p>
          <button onClick={removeFromBasket}>Remove from Basket</button>
        </div>
      </div>
    </Card>
  );
}

export default CheckOut;
