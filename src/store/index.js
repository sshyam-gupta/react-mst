import { Products } from './Products';

class RootStore {
  constructor() {
    this.productStore = Products.create();

    //@TODO: To be removed
    var x = 0;

    var intervalID = setInterval(() => {
      if (x === 10) {
        clearInterval(intervalID);
      }
      this.productStore.add({
        name: 'test1',
        price: parseInt(Math.random() * 1000, 10),
        image:
          'https://i2.wp.com/beebom.com/wp-content/uploads/2016/01/Reverse-Image-Search-Engines-Apps-And-Its-Uses-2016.jpg?resize=640%2C426'
      });
      ++x;
    }, 800);
  }
}

export default new RootStore();
