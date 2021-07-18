import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';



const useStyles = makeStyles({
  table: {
    minWidth: 500,
  },
});

const createStrings=(num:number) =>{
   return "$"+num.toLocaleString()
}



export interface SalesType {
    retailSales: number;
    retailerMargin: number;
    unitsSold: number;
    weekEnding: string;
    wholesaleSales: number;
};

export const DataTable = (props: any) => {
  const { sales} = props;
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Week Ending</TableCell>
            <TableCell align="right">Retail Sales</TableCell>
            <TableCell align="right">WholeSale Sales</TableCell>
            <TableCell align="right">Units Sold</TableCell>
            <TableCell align="right">Retailer Margin</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {sales?.length ? sales.map((row: any, index: number) => (
            <TableRow key={index}>
              <TableCell component="th" scope="row">
                {row.weekEnding}
              </TableCell>
              <TableCell align="right">{createStrings(row.retailSales)}</TableCell>
              <TableCell align="right">{createStrings(row.wholesaleSales)}</TableCell>
              <TableCell align="right">{row.unitsSold}</TableCell>
              <TableCell align="right">{createStrings(row.retailerMargin)}</TableCell>
            </TableRow>
          )) : null}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default DataTable;