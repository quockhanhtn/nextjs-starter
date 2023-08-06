'use client';

import { useState } from 'react';
import Image, { ImageProps } from 'next/image';

export type NextImageProps = Omit<ImageProps, 'alt' | 'src' | 'onError'> & {
  src: string;
  alt?: string;
};

const IMAGE_ERROR_PLACEHOLDER = '/assets/image-error-placeholder.png';
const IMAGE_BLUR_PLACEHOLDER = '/assets/image-blur-placeholder.png';

const NextImage: React.FC<NextImageProps> = ({
  alt = '',
  src,
  placeholder = 'blur',
  blurDataURL = IMAGE_BLUR_PLACEHOLDER,
  ...otherProps
}) => {
  const [imgSrc, setImgSrc] = useState<string>(src);

  return (
    <Image
      alt={alt}
      src={imgSrc}
      placeholder={placeholder}
      blurDataURL={blurDataURL}
      onError={() => setImgSrc(IMAGE_ERROR_PLACEHOLDER)}
      {...otherProps}
    />
  );
};

export default NextImage;
