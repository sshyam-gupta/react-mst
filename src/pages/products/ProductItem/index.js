import React, { Component } from 'react';

import { clone, applySnapshot, getSnapshot } from 'mobx-state-tree';

import {
  ProductItemContainer,
  ProductImage,
  ProductName,
  ProductPrice,
  BtnEditProduct,
  BtnDeleteProduct
} from './elements';
import EditProduct from '../EditProduct';
class ProductItem extends Component {
  state = {
    isEditing: false
  };

  render() {
    const { product } = this.props;
    return (
      <ProductItemContainer>
        {this.state.isEditing ? (
          <EditProduct
            product={this.state.clonedProduct}
            cancelEditing={this.cancelEditing}
            saveEditing={this.saveEditing}
          />
        ) : (
          <React.Fragment>
            <ProductImage src={product.image} />
            <ProductName>Name: {product.name}</ProductName>
            <ProductPrice>Price: {product.price}</ProductPrice>
            <BtnEditProduct onClick={this.handleEdit}>Edit</BtnEditProduct>
            <BtnDeleteProduct onClick={this.handleDelete}>
              Delete
            </BtnDeleteProduct>
          </React.Fragment>
        )}
      </ProductItemContainer>
    );
  }

  handleEdit = () => {
    this.setState({
      isEditing: true,
      clonedProduct: clone(this.props.product)
    });
  };

  handleDelete = () => {
    this.props.product.removeProduct();
  };

  cancelEditing = () => {
    this.setState({
      isEditing: false,
      clonedProduct: null
    });
  };

  saveEditing = () => {
    applySnapshot(this.props.product, getSnapshot(this.state.clonedProduct));
    this.setState({
      isEditing: false,
      clonedProduct: null
    });
  };
}

export default ProductItem;
