import React, { Component } from 'react';

import { Container } from './elements';
import { inject } from 'mobx-react';
import ProductList from './ProductList';
import AddProduct from './AddProduct';

class Products extends Component {
  render() {
    const { products } = this.props.productStore;

    return (
      <Container>
        <AddProduct />
        <ProductList products={products} />
      </Container>
    );
  }
}

export default inject('productStore')(Products);
