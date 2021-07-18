import React from 'react';
import { DataGrid, GridColDef } from '@material-ui/data-grid';
import { Paper } from '@material-ui/core';

const columns: GridColDef[] = [
  { field:'weekEnding',headerName:'WEEK ENDING',width:150},
  { field: 'retailSales', headerName: 'RETAIL SALES', width: 150 },
  { field: 'wholesaleSales', headerName: 'WHOLESALE SALES', width: 150 },
  { field: 'unitsSold', headerName: 'UNITS SOLD', width: 150 },
  { field: 'retailerMargin', headerName: 'RETAILER MARGIN', width: 150 },
];

const DataTableOne=(props:any)=> {

    const data = props?.data?.sales?.map((item: any, index: number) => {
      return {
        ...item,
        retailSales: `$${item.retailSales.toLocaleString()}`,
        wholesaleSales: `$${item.wholesaleSales.toLocaleString()}`,
        retailerMargin: `$${item.retailerMargin.toLocaleString()}`,
        id: index + 1
      }
    }) || [];
  return (
    <Paper> 
      <div style={{ height: 300, width: '100%' }}>
        {data?.length ? <DataGrid rows={data} columns={columns} /> : null }
      </div>
    </Paper>
  );
}
export default DataTableOne;