import React, { useState } from 'react';
import axios from 'axios';

const AddGroceries = () => {
  const [groceryData, setGroceryData] = useState({
    itemName: '',
    price: '',
    storeName: '',
  });

  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setGroceryData((prevInput) => {
      return {
        ...prevInput,
        [name]: value,
      };
    });
  };
  let handleSubmit = async (e) => {
    e.preventDefault();
    const newGroceries = {
      itemName: groceryData.itemName,
      price: groceryData.price,
      storeName: groceryData.storeName,
    };
    setGroceryData({
      itemName: '',
      price: '',
      storeName: '',
    });
    setMessage(`${groceryData.itemName} has been added!`);
    axios.post('http://localhost:5050/groceries/buyfood', newGroceries);
  };

  return (
    <div>
      {/* NEW FORM BELOW */}
      <form onSubmit={handleSubmit}>
        <div class="mb-3 w-50 mx-auto">
          <label for="itemName" class="form-label">
            Food Item
          </label>
          <input
            name="itemName"
            type="text"
            value={groceryData.itemName}
            placeholder="Item name"
            onChange={handleChange}
            class="form-control justify-content-center"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
        </div>
        <div class="mb-3 w-50 mx-auto">
          <label for="exampleInputPassword1" class="form-label ">
            Price
          </label>
          <input
            name="price"
            type="number"
            value={groceryData.price}
            placeholder="Price"
            onChange={handleChange}
            class="form-control"
            id="exampleInputPassword1"
          />
        </div>
        <div class="mb-3 w-50 mx-auto">
          <label for="store" class="form-label">
            Store
          </label>
          <input
            name="storeName"
            type="text"
            value={groceryData.storeName}
            placeholder="Store"
            onChange={handleChange}
            class="form-control"
            id="exampleInputPassword1"
          />
        </div>
        <div class="mb-3 w-50 mx-auto">
          <button type="submit" class="btn btn-primary mb-5">
            Add To
          </button>
        </div>
        <div className="message">
          {message ? <p class="text-center">{message}</p> : null}
        </div>
      </form>
    </div>
  );
};

export default AddGroceries;
