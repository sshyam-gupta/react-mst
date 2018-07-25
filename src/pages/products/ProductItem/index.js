import React, { Component } from 'react';
import {
  ProductItemContainer,
  ProductImage,
  ProductName,
  ProductPrice
} from './elements';

class ProductItem extends Component {
  render() {
    const { product } = this.props;
    return (
      <ProductItemContainer>
        <ProductImage src={product.image || ''} />
        <ProductName>Name: {product.name}</ProductName>
        <ProductPrice>Price: {product.price}</ProductPrice>
      </ProductItemContainer>
    );
  }
}

export default ProductItem;
