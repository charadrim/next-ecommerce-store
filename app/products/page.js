import Link from 'next/link';

export const metadata = {
  title: 'Skincare Products',
  description: 'Skincare products for your clean-girl era.',
};

export default function ProductsPage() {
  return (
    <div>
      <h1>Skincare Products</h1>
      <a href="/facewash" data-test-id="product-facewash">
        <FaceWash />
      </a>
      <a href="/moisturizer" data-test-id="product-moisturizer">
        <div>Moisturizer</div>
      </a>
      <a href="/eyecream" data-test-id="product-eyecream">
        <div>Eye Cream</div>
      </a>
      <a href="/retinol" data-test-id="product-retinol">
        <div>Retinol</div>
      </a>
    </div>
  );
}
