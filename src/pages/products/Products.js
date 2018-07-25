import React, { Component } from 'react';
import Loader from '../../components/Loader';
import { Container } from './elements';
import ProductItem from './ProductItem';
import { inject, observer } from 'mobx-react';

class Products extends Component {
  render() {
    const { products } = this.props.productStore;

    return (
      <Container>
        {products.map((product, index) => (
          <ProductItem key={index} product={product} />
        ))}
      </Container>
    );
  }
}

export default inject('productStore')(observer(Products));
