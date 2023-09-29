import moisturizerImg from '/public/moisturizer.jpeg';
import Image from 'next/image';

export default function Moisturizer() {
  return (
    <div>
      <Image src={moisturizerImg} alt="Moisturizer" width={300} height={200} />
      <p>Moisturizer</p>
    </div>
  );
}
