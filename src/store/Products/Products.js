import { types, destroy } from 'mobx-state-tree';

import Product from './Product';

const Products = types
  .model({
    products: types.optional(types.array(Product), [])
  })
  .actions(self => ({
    add(product) {
      self.products.push(product);
    },
    remove(product) {
      destroy(product);
    }
  }))
  .views(self => ({
    get totalPrice() {
      return self.products.reduce((sum, product) => sum + product.price, 0);
    }
  }));

export default Products;
