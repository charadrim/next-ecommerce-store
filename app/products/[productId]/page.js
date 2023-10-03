import Image from 'next/image';
import { notFound } from 'next/navigation';
import { getProduct } from '../../database/products';
import AddToCartButton from './AddToCartButton';
import ClientComponent from './ClientComponent';

export function generateMetadata({ params }) {
  const singleProduct = getProduct(Number(params.productId));

  return {
    title: singleProduct ? singleProduct.name : '',
  };
}

export default function ProductPage(props) {
  const singleProduct = getProduct(Number(props.params.productId));

  if (!singleProduct) {
    return notFound();
  }

  return (
    <div>
      <div>
        <a>
          <h1>{singleProduct.name}</h1>
          <Image
            src={`/images/${singleProduct.name}.jpeg`}
            alt={singleProduct.name}
            width={500}
            height={500}
            data-test-id="product-image"
          />
          <p data-test-id="product-quantity">Price: {singleProduct.price}</p>
          <AddToCartButton dataTestId="product-add-to-cart" />
        </a>
      </div>
      <ClientComponent />
    </div>
  );
}
