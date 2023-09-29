import eyeCreamImg from '/public/eyecream.jpeg';
import Image from 'next/image';

export default function EyeCream() {
  return (
    <div>
      <Image src={eyeCreamImg} alt="Eye Cream" width={300} height={200} />
      <p>Eye Cream</p>
    </div>
  );
}
