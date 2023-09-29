import retinolImg from '/public/retinol.jpeg';
import Image from 'next/image';

export default function Retinol() {
  return (
    <div>
      <Image src={retinolImg} alt="Retinol" width={300} height={200} />
      <p>Retinol</p>
    </div>
  );
}
