import React, { useRef, useEffect, FC } from "react";

type Props = {
  href: string;
  onLoad?: () => void;
  className?: string;
  style?: any;
  alt?: string;
};

const CustomImage: FC<Props> = ({ href, onLoad, className, style, alt }) => {
  const imgRef = useRef<HTMLImageElement>(null);

  const onImageLoad = () => {
    if (onLoad) onLoad();
  };

  useEffect(() => {
    if (imgRef.current?.complete) {
      onImageLoad();
    }
  }, []);

  return (
    <img
      style={style}
      ref={imgRef}
      className={className ?? ""}
      src={href}
      onLoad={onImageLoad}
      decoding="async"
      alt={alt}
    />
  );
};

export default CustomImage;
