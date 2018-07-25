import React, { Component } from 'react';
import { observer } from 'mobx-react';

class EditProduct extends Component {
  handleName = e => {
    this.props.product.changeName(e.target.value);
  };

  handlePrice = e => {
    if (!isNaN(e.target.value))
      this.props.product.changePrice(parseInt(e.target.value, 10));
  };

  handleImage = e => {
    this.props.product.changeImage(e.target.value);
  };

  render() {
    const { product, cancelEditing, saveEditing } = this.props;

    return (
      <React.Fragment>
        <div
          style={{
            display: 'block'
          }}
        >
          Name::
          <input
            type={'text'}
            name={'name'}
            onChange={this.handleName}
            value={product.name}
          />
          <br />
          Price::
          <input
            type={'text'}
            name={'price'}
            onChange={this.handlePrice}
            value={product.price}
          />
          <br />
          Image::
          <input
            type={'text'}
            name={'image'}
            onChange={this.handleImage}
            value={product.image}
          />
        </div>
        <br />
        <button type="submit" onClick={saveEditing}>
          Save
        </button>
        <br />
        <button onClick={cancelEditing}>Cancel</button>
      </React.Fragment>
    );
  }
}

export default observer(EditProduct);
