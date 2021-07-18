import React from 'react';
import logo from './logo.svg';
import { HomeContainer } from './Containers';
import './App.css';
// import {Sidenav, DataTable} from '../Components'
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import { Container } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    container: {
      display: 'flex',
      flexDirection: 'column',
      backgroundColor: '#f5f7f9'
    },
    header: {
      height: 70,
      backgroundColor: '#06243f',
      display: 'flex',
      alignItems: 'center',
      paddingLeft: theme.spacing(2),
      marginBottom: theme.spacing(5)
    },
    logo: {
      height: 40,
    },
  }),
);

const App = () => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
        <header className={classes.header}>
          <img src={logo} alt="Stackline Logo" className={classes.logo}/>
        </header>
        <Container>
          <HomeContainer />
        </Container>
    </div>
  );
}

export default App;
