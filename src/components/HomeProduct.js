import React, { useContext } from 'react';
import data from './../data.json';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import './Products.css';
import { ContextValue } from './context/ContextApi';

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
function HomeProduct() {
  const classes = useStyles();
  const { addToBasket } = useContext(ContextValue);
  console.log(addToBasket);

  return (
    <div>
      {/* Row 1 */}
      <Grid container spacing={3}>
        {Object.keys(data)
          .slice(0, 2)
          .map((keyName) => {
            return (
              <Grid item xs={12} md={6} key={keyName}>
                <Paper className={classes.paper}>
                  <div className='products'>
                    <p className='id'>{data[keyName].id}</p>
                    <p>{data[keyName].title}</p>
                    <p>{data[keyName].price}</p>
                    <p>{data[keyName].rating}</p>
                    <img src={data[keyName].img} />
                    <button onClick={addToBasket(data[keyName].id)}>
                      Add To Basket
                    </button>
                  </div>
                </Paper>
              </Grid>
            );
          })}
      </Grid>
      {/* Row 2 */}
      <Grid container spacing={3}>
        {Object.keys(data)
          .slice(2, 5)
          .map((keyName) => {
            return (
              <Grid item xs={12} md={4} key={keyName}>
                <Paper className={classes.paper}>
                  <div className='products'>
                    <p className='id'>{data[keyName].id}</p>
                    <p>{data[keyName].title}</p>
                    <p>{data[keyName].price}</p>
                    <p>{data[keyName].rating}</p>
                    <img src={data[keyName].img} />
                    <button>Add To Basket</button>
                  </div>
                </Paper>
              </Grid>
            );
          })}
      </Grid>
      {/* Row 3 */}
      <Grid container spacing={3}>
        {Object.keys(data)
          .slice(5, 6)
          .map((keyName) => {
            return (
              <Grid item xs={12} key={keyName}>
                <Paper className={classes.paper}>
                  <div className='products'>
                    <p className='id'>{data[keyName].id}</p>
                    <p>{data[keyName].title}</p>
                    <p>{data[keyName].price}</p>
                    <p>{data[keyName].rating}</p>
                    <img src={data[keyName].img} />
                    <button>Add To Basket</button>
                  </div>
                </Paper>
              </Grid>
            );
          })}
      </Grid>
    </div>
  );
}

export default HomeProduct;
