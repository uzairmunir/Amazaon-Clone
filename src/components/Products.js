import React, { useContext } from 'react';
import './Products.css';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { useStateValue } from './context/Context';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));
function Products({ id, title, price, rating, image }) {
  const classes = useStyles();
  const [{ basket }, dispatch] = useStateValue();
  console.log('This Is Basket', basket);
  const addToBasket = () => {
    dispatch({
      type: 'Add-To-Basket',
      item: {
        id: id,
        title: title,
        price: price,
        rating: rating,
        image: image,
      },
    });
  };
  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <div className='products'>
          <p>{title}</p>
          <p>${price}</p>
          <p>{rating}</p>
          <img src={image} />
          <button onClick={addToBasket}>Add To Basket</button>
        </div>
      </Paper>
    </div>
  );
}

export default Products;
