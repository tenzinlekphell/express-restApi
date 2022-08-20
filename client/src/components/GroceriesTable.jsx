import * as React from 'react';
import { useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const GroceriesTable = ({ foodName, foodPrice, foodStore }) => {
  const [displayFood, setDisplayFood] = useState([
    foodName,
    foodPrice,
    foodStore,
  ]);

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Groceries Name</TableCell>
            <TableCell align="right">Price</TableCell>
            <TableCell align="right">Store</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {displayFood.map((food) => {
            return (
              <div>
                <p>{food.foodName}</p>
              </div>
            );
          })}
          <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
            <TableCell component="th" scope="row">
              {foodName}
            </TableCell>
            <TableCell align="right">{foodPrice}</TableCell>
            <TableCell align="right">{foodStore}</TableCell>
          </TableRow>
          <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
            <TableCell component="th" scope="row">
              {foodName}
            </TableCell>
            <TableCell align="right">{foodPrice}</TableCell>
            <TableCell align="right">{foodStore}</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default GroceriesTable;
