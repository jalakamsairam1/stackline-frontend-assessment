import React, { useEffect } from 'react';
import Grid from '@material-ui/core/Grid';
import { useDispatch, useSelector } from 'react-redux';
import { Sidenav,DataChart,DataTableOne } from '../Components';
import { getProductInfo } from '../State/actions';
import { Product } from '../State/reducers';

const HomeContainer = () => {
  const product = useSelector((state: Product) => state.product);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProductInfo())
  }, [dispatch]);

  console.log('----product', product);

  return (
    <Grid container spacing={2}>
        {product ? (
          <>
            <Grid item xs={3}>
              <Sidenav intro = {product}
              />
          </Grid>
          <Grid item xs={9}>
              <DataChart data={product}/>
              <DataTableOne data={product}/>
          </Grid>
          </>
        ) : null}
    </Grid>
  );
}

export default HomeContainer;