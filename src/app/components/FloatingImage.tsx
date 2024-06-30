import React, { useEffect, useState } from 'react';
import styles from './FloatingImage.module.css';

const FloatingImage: React.FC = () => {
  const [isFloating, setIsFloating] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const threshold = -1; // Adjust this value based on your preference

      setIsFloating(scrollPosition > threshold);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return <img className={isFloating ? styles.floatingImage : ''} src="/JPfloater.png" alt="Floating Image" />;
};

export default FloatingImage;

