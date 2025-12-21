import { useEffect, useRef, useState } from 'react';

/**
 * Hook personnalisé pour déclencher des animations au scroll
 * @param {Object} options - Options pour l'Intersection Observer
 * @returns {Array} - [ref, isVisible]
 */
const useScrollAnimation = (options = {}) => {
  const elementRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        // Une fois visible, on arrête d'observer pour ne pas répéter l'animation
        if (elementRef.current) {
          observer.unobserve(elementRef.current);
        }
      }
    }, {
      threshold: 0.1,
      rootMargin: '0px 0px -100px 0px',
      ...options
    });

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  }, []);

  return [elementRef, isVisible];
};

export default useScrollAnimation;
