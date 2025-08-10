import { useEffect, useRef } from 'react';

export const useAnimations = () => {
  const elementRef = useRef(null);

  const animateOnScroll = (delay = 0) => {
    return {
      className: 'animate-fade-in-up',
      style: { animationDelay: `${delay}s` }
    };
  };

  const useIntersectionObserver = (options = {}) => {
    const ref = useRef(null);

    useEffect(() => {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in-up');
          }
        });
      }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px',
        ...options
      });

      if (ref.current) {
        observer.observe(ref.current);
      }

      return () => {
        if (ref.current) {
          observer.unobserve(ref.current);
        }
      };
    }, [options]);

    return ref;
  };

  const staggerAnimation = (index, baseDelay = 0.1) => {
    return {
      className: 'animate-fade-in-up',
      style: { animationDelay: `${index * baseDelay}s` }
    };
  };

  return {
    elementRef,
    animateOnScroll,
    useIntersectionObserver,
    staggerAnimation
  };
};
