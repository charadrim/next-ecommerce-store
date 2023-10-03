import 'server-only';

const products = [
  {
    id: 1,
    name: 'face-wash',
    type: 'facewash',
    slug: 'facewash-product',
    price: '9.99',
  },
  {
    id: 2,
    name: 'moisturizer-cream',
    type: 'moisturizer',
    slug: 'moisturizer-product',
    price: '11.99',
  },
  {
    id: 3,
    name: 'eye-cream',
    type: 'eyecream',
    slug: 'eyecream-product',
    price: '7.99',
  },
  {
    id: 4,
    name: 'retinol-cream',
    type: 'retinol',
    slug: 'retinol-product',
    price: '13.99',
  },
];

export function getProducts() {
  return products;
}

export function getProduct(id) {
  return products.find((product) => product.id === id);
}
