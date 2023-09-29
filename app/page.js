import Image from 'next/image';
import eyeCream from '../public/eye-cream.jpeg';
import faceWash from '../public/face-wash.jpeg';
import moisturizer from '../public/moisturizer-cream.jpeg';
import retinol from '../public/retinol-cream.jpeg';

export default function HomePage() {
  return (
    <main>
      <h1>Skincare Products</h1>
      <Image src={faceWash} alt="face wash" width={300} height={300} />
      <Image src={moisturizer} alt="moisturizer" width={300} height={300} />
      <Image src={eyeCream} alt="eye cream" width={300} height={300} />
      <Image src={retinol} alt="retinol" width={300} height={300} />
    </main>
  );
}
