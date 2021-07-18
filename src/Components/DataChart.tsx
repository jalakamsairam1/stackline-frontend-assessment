import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend
} from "recharts";
import Paper from '@material-ui/core/Paper';


export interface SalesType {
    retailSales: number;
    retailerMargin: number;
    unitsSold: number;
    weekEnding: string;
    wholesaleSales: number;
};

const useStyles = makeStyles({
    table: {
      minWidth: 500,
    },
    paper:{
      marginBottom:'20px'  
    }
  });

const DataChart = (props:any)=>{
    const classes = useStyles();
    const data = props?.data?.sales
    return (
      <Paper className={classes.paper}>
        <LineChart
          width={750}
          height={350}
          data={data}
          margin={{
            top: 30,
            right: 30,
            left: 30,
            bottom: 30
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="weekEnding" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line
            type="monotone"
            dataKey="retailSales"
            stroke="#82ca9d"
            strokeWidth={4}
          />
          <Line type="monotone" dataKey="wholesaleSales" stroke="#8884d8" strokeWidth={4} />
        </LineChart>
      </Paper>
    );
}

export default DataChart