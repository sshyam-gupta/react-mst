import Product from './Product'

it('Can create instance of product', () => {
  const item = Product.create({
    name: 'Shyam',
    price: 10.9,
    image: 'test'
  })

  expect(item.name).toBe('Shyam')
  expect(item.price).toBe(10.9)
})

it('can change it properties', () => {
  const item = Product.create({
    name: 'Shyam',
    price: 10,
    image: 'test'
  })

  item.changeName('New Product')
  expect(item.name).toBe('New Product')
})
