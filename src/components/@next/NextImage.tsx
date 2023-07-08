'use client';

import { useState } from 'react';
import Image, { ImageProps } from 'next/image';

export type NextImageProps = Omit<ImageProps, 'alt' | 'src'> & {
  src: string;
  alt?: string;
};

const NextImage: React.FC<NextImageProps> = ({ alt = '', src, ...props }) => {
  const [imgSrc, setImgSrc] = useState<string>(src);

  return (
    <Image
      alt={alt}
      src={imgSrc}
      placeholder="blur"
      blurDataURL="/assets/image-placeholder.png"
      onError={() => setImgSrc('/assets/image-error.png')}
      {...props}
    />
  );
};

export default NextImage;
