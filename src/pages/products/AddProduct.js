import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const BtnAddProduct = styled(Link)`
  width: 150px;
  text-align: center;
  padding: 20px;
  border: 1px solid #000;
  border-radius: 5px;
  margin-top: 10px;
  align-self: flex-end;
  text-decoration: none;
  color: #000;

  &:hover {
    color: blue;
    border: 1px solid blue;
  }
`;

class AddProduct extends Component {
  render() {
    return <BtnAddProduct to={'/addProduct'}>Add Product</BtnAddProduct>;
  }
}

export default AddProduct;
