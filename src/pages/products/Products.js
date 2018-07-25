import React, { Component } from 'react';
import Loader from '../../components/Loader';
import { Container } from './elements';

class Products extends Component {
  render() {
    return (
      <Container>
        <Loader />
      </Container>
    );
  }
}

export default Products;
