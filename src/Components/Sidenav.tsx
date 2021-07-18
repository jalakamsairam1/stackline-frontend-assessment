import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      backgroundColor: '#ffffff',
      height: '100%'
    },
    paper: {
      height: '100%'
    },
    image:{
      height: 150,
      alignContent: 'center',
      textAlign: 'center',
      paddingTop: 10,
      display: "block",
      marginLeft: "auto",
      marginRight: "auto"
      },
    heading5:{
      textAlign:'center'
    },
    subTitle:{
      textAlign:'center',
      color:'#d3d3d3',
    },
    button:{
      fontSize :8,
      borderRight :0,
    },
    tags:{
      display: 'flex',
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: 'center'
    },
    tag:{
      borderRadius:10,
      border:'2px solid grey',
      margin: 5,
      fontSize:9,
      padding: 5 
    }
  }),
);

const Sidenav = (props: any) => {
    const tags = props?.intro?.tags?props.intro.tags:[]
    const classes = useStyles();

  return (
    <div className={classes.root}>
        <Paper variant = "outlined" className={classes.paper}>
            <img src = {props.intro.image} className={classes.image} alt="Product Pic"/>
            <h5 className={classes.heading5}>{props.intro.title}</h5>
            <h6 className = {classes.subTitle}>{props.intro.subtitle}</h6>
            <div className={classes.tags}>
              {tags.map((tag:string,index:number) => {
               return <div className={classes.tag} key ={index}>{tag}</div>
                })   
              }
            </div>
        </Paper>
    </div>
  );
}

export default Sidenav;