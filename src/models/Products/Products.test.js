import Product from './Product';
import Products from './Products';
import { getSnapshot, onSnapshot } from 'mobx-state-tree';

it('Can add new product', () => {
  let item = Products.create();

  let states = [];

  onSnapshot(item, snapshot => {
    states.push(snapshot);
  });

  item.add(
    Product.create({
      name: 'test',
      price: 10,
      image: 'sdds'
    })
  );

  expect(item.products.length).toBe(1);

  expect(item.products[0].name).toBe('test');

  item.products[0].changeName('Shyam');
  expect(item.products[0].name).toBe('Shyam');

  expect(getSnapshot(item)).toEqual({
    products: [
      {
        name: 'Shyam',
        price: 10,
        image: 'sdds'
      }
    ]
  });

  expect(getSnapshot(item)).toMatchSnapshot();
  expect(states).toMatchSnapshot();
});

it('gives total price', () => {
  let item = Products.create({
    products: [
      {
        name: 'test',
        price: 10
      },
      {
        name: 'test1',
        price: 100
      }
    ]
  });
  expect(item.totalPrice).toBe(110);

  item.products[0].changePrice(20);

  expect(item.totalPrice).toBe(120);
});
