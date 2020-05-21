import React, { useEffect, useState, useRef } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import style from './ImageIcon.scss';

const cx = classNames.bind(style);

const useIsMounted = () => {
  const isMounted = useRef(true);

  useEffect(() => {
    return () => {
      isMounted.current = false;
    };
  }, []);

  return isMounted;
};

const ImageIcon = ({ src, alt, width, height, margin, onErrorFunc, customClass, observer }) => {
  const isMounted = useIsMounted();
  
  const [imgWidth, setImgWidth] = useState(width);
  const [imgHeight, setImgHeight] = useState(height);

  useEffect(() => {
    const img = new Image();

    img.src = src;

    img.onload = () => {
      if (width || height) return;

      if (img.width === img.height) {
        if (isMounted.current) {
          setImgHeight('100%');
          setImgWidth('100%');
        }
      } else if (img.width < img.height) {
        if (isMounted.current) {
          setImgHeight('auto');
          setImgWidth('100%');
        }
      } else if (img.width > img.height) {
        if (isMounted.current) {
          setImgHeight('100%');
          setImgWidth('auto');
        }
      }
    };
  }, [observer]);

  return (
    <img
      src={src}
      alt={alt}
      className={cx('ImageIcon', customClass)}
      style={{ width: imgWidth, height: imgHeight, margin: margin }}
      onError={onErrorFunc}
    />
  );
};

ImageIcon.propTypes = {
  src: PropTypes.string,
  alt: PropTypes.string,
  width: PropTypes.string,
  height: PropTypes.string,
  margin: PropTypes.string,
  onErrorFunc: PropTypes.func,
  customClass: PropTypes.string,
  observer: PropTypes.any
};

export default ImageIcon;
