import { types, getParent } from 'mobx-state-tree';

const Product = types
  .model({
    name: types.string,
    price: types.number,
    image: types.optional(types.string, '')
  })
  .actions(self => ({
    changeName(newName) {
      self.name = newName;
    },
    changePrice(newPrice) {
      self.price = newPrice;
    },
    changeImage(newImage) {
      self.image = newImage;
    },
    removeProduct() {
      getParent(self, 2).remove(self);
    }
  }));

export default Product;
