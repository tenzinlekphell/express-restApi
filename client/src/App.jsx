import React, { useState, useEffect } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import AddGroceries from './components/AddGroceries';
import axios from 'axios';

import { FiDelete } from 'react-icons/fi';

function App() {
  // RESTAPI States
  const [groceriesList, setGroceriesList] = useState([]);
  const [deleteMessage, setDeleteMessage] = useState('');

  // Get groceries item data from API
  useEffect(() => {
    fetch('http://localhost:5050/groceries')
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setGroceriesList(data);
      })
      .catch((err) => console.log(err));
  }, [groceriesList]);

  // Remove select groceries item
  const deleteItem = (id) => {
    axios.delete(`http://localhost:5050/groceries/${id}`);
    setDeleteMessage('Item removed');
  };

  return (
    <div className="App">
      <h1 style={{ textAlign: 'center' }}>Grocery Dictionary App</h1>
      <h5 style={{ textAlign: 'center' }}>All prices are listed here</h5>
      {/* Add groceries component */}
      <AddGroceries />
      <div className="message">
        {deleteMessage ? <p class="text-center">{deleteMessage}</p> : null}
      </div>
      <TableContainer component={Paper} class="mb-5">
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow style={{ backgroundColor: 'salmon' }}>
              <TableCell style={{ fontSize: '20px' }}>Food Name</TableCell>
              <TableCell align="right" style={{ fontSize: '20px' }}>
                Price
              </TableCell>
              <TableCell align="right" style={{ fontSize: '20px' }}>
                Store Name
              </TableCell>
              <TableCell align="right" style={{ fontSize: '20px' }}>
                Remove/Edit
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody style={{ backgroundColor: 'lightgreen' }}>
            {groceriesList.map((row) => {
              return (
                <TableRow
                  key={row.itemName}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {row.itemName}
                  </TableCell>
                  <TableCell align="right">${row.price}</TableCell>
                  <TableCell align="right">{row.storeName}</TableCell>
                  <TableCell align="right">
                    <FiDelete
                      style={{ cursor: 'pointer' }}
                      onClick={() => deleteItem(row._id)}
                    ></FiDelete>
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

export default App;
