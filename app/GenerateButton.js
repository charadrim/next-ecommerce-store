'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function GenerateButton() {
  const [color, setColor] = useState('#123fee');
  const router = useRouter();

  return (
    <div>
      <button onClick={() => console.log('Hello World')}>Generate</button>
    </div>
  );
}
