import React from 'react';
import './Home.css';
import Products from './Products';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

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
function Home() {
  const classes = useStyles();

  return (
    <div className='home-container'>
      <img
        src='https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg'
        alt='home-image'
        className='home-img'
      />
      <div className='home-row'>
        {/* Row 1 */}
        <Grid container spacing={3}>
          <Grid item xs={12} lg={6}>
            <Products
              id='1'
              title='Learning React: Modern Patterns for Developing React Apps 2nd Edition'
              price='99.99'
              rating='⭐⭐⭐⭐'
              image='https://images-na.ssl-images-amazon.com/images/I/51Kwaw5nInL._SX379_BO1,204,203,200_.jpg'
            />
          </Grid>
          <Grid item xs={12} lg={6}>
            <Products
              id='2'
              title='Learning React: Modern Patterns for Developing React Apps 2nd Edition'
              price='99.99'
              rating='⭐⭐⭐⭐'
              image='https://images-na.ssl-images-amazon.com/images/I/51Kwaw5nInL._SX379_BO1,204,203,200_.jpg'
            />
          </Grid>
        </Grid>
        {/* Row 2 */}
        <Grid container spacing={3}>
          <Grid item xs={12} md={4}>
            <Products
              id='1'
              title='Learning React: Modern Patterns for Developing React Apps 2nd Edition'
              price='99.99'
              rating='⭐⭐⭐⭐'
              image='https://images-na.ssl-images-amazon.com/images/I/51Kwaw5nInL._SX379_BO1,204,203,200_.jpg'
            />
          </Grid>
          <Grid item xs={12} md={4}>
            <Products
              id='1'
              title='Learning React: Modern Patterns for Developing React Apps 2nd Edition'
              price='99.99'
              rating='⭐⭐⭐⭐'
              image='https://images-na.ssl-images-amazon.com/images/I/51Kwaw5nInL._SX379_BO1,204,203,200_.jpg'
            />
          </Grid>
          <Grid item xs={12} md={4}>
            <Products
              id='2'
              title='Learning React: Modern Patterns for Developing React Apps 2nd Edition'
              price='99.99'
              rating='⭐⭐⭐⭐'
              image='https://images-na.ssl-images-amazon.com/images/I/51Kwaw5nInL._SX379_BO1,204,203,200_.jpg'
            />
          </Grid>
        </Grid>
        {/* Row 3 */}
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Products
              id='2'
              title='Learning React: Modern Patterns for Developing React Apps 2nd Edition'
              price='99.99'
              rating='⭐⭐⭐⭐'
              image='https://images-na.ssl-images-amazon.com/images/I/51Kwaw5nInL._SX379_BO1,204,203,200_.jpg'
            />
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

export default Home;
