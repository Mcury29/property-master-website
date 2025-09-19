import { useInView } from "motion/react";
import { useRef, useEffect, useState } from "react";

// Check for reduced motion preference
const useReducedMotion = () => {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);

    const handleChange = (event: MediaQueryListEvent) => {
      setPrefersReducedMotion(event.matches);
    };

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  return prefersReducedMotion;
};

export const useScrollAnimation = (options = {}) => {
  const ref = useRef(null);
  const prefersReducedMotion = useReducedMotion();
  const isInView = useInView(ref, {
    once: false, // Allow animations on both scroll directions
    margin: "-10% 0px -10% 0px", // Trigger when element is 10% in view
    ...options
  });

  // Return visible immediately if user prefers reduced motion
  return { ref, isInView: prefersReducedMotion ? true : isInView };
};

// Apple-style easing curves
const appleEase = [0.25, 0.46, 0.45, 0.94] as const;

// Animation variants for consistent Apple-style effects
export const fadeInUp = {
  hidden: { 
    opacity: 0, 
    y: 30
  },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { 
      duration: 0.6, 
      ease: appleEase,
      opacity: { duration: 0.6 },
      y: { duration: 0.6 }
    }
  }
};

export const fadeInDown = {
  hidden: { 
    opacity: 0, 
    y: -30
  },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { 
      duration: 0.6, 
      ease: appleEase,
      opacity: { duration: 0.6 },
      y: { duration: 0.6 }
    }
  }
};

export const fadeInLeft = {
  hidden: { 
    opacity: 0, 
    x: -30
  },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: { 
      duration: 0.6, 
      ease: appleEase,
      opacity: { duration: 0.6 },
      x: { duration: 0.6 }
    }
  }
};

export const fadeInRight = {
  hidden: { 
    opacity: 0, 
    x: 30
  },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: { 
      duration: 0.6, 
      ease: appleEase,
      opacity: { duration: 0.6 },
      x: { duration: 0.6 }
    }
  }
};

export const scaleIn = {
  hidden: { 
    opacity: 0, 
    scale: 0.9
  },
  visible: { 
    opacity: 1, 
    scale: 1,
    transition: { 
      duration: 0.6, 
      ease: appleEase,
      opacity: { duration: 0.6 },
      scale: { duration: 0.6 }
    }
  }
};

export const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1
    }
  }
};

// Additional Apple-style configurations
export const appleSpring = {
  type: "spring" as const,
  damping: 20,
  stiffness: 100
};