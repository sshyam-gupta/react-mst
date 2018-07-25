import React, { Component } from 'react';
import { observer } from 'mobx-react';
import ProductItem from './ProductItem';

class ProductList extends Component {
  render() {
    const { products } = this.props;
    return (
      <React.Fragment>
        {products.map((product, index) => (
          <ProductItem key={index} product={product} />
        ))}
      </React.Fragment>
    );
  }
}

export default observer(ProductList);
