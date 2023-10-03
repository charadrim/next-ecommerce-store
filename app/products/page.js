import Image from 'next/image';
import Link from 'next/link';
import { getProducts } from '../database/products';

export const metadata = {
  title: 'Skincare Products',
  description: 'Skincare products for your clean-girl era.',
};

export default function ProductsPage() {
  const products = getProducts();
  return (
    <div>
      <h1>Skincare Products</h1>

      {products.map((product) => {
        const productUrl = `/products/${product.id}`;
        return (
          <a
            href={productUrl}
            data-test-id={`product-${product.id}`}
            key={`product-div-${product.id}`}
          >
            <div key={`product-div-${product.id}`}>
              <Link href={`/products/${product.id}`}>{product.name}</Link>
              <Image
                src={`/images/${product.name}.jpeg`}
                alt={product.name}
                width={300}
                height={300}
              />
            </div>
          </a>
        );
      })}
    </div>
  );
}
