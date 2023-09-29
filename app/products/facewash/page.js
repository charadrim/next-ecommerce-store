import faceWashImg from '/public/facewash.jpeg';
import Image from 'next/image';

export default function FaceWash() {
  return (
    <div>
      <Image src={faceWashImg} alt="Face Wash" width={300} height={200} />
      <p>Face Wash</p>
    </div>
  );
}
