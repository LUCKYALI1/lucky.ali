import { useEffect, useState } from 'react';

const useNavbarHeight = () => {
  const [navbarHeight, setNavbarHeight] = useState(0);

  useEffect(() => {
    const calculateHeight = () => {
      // Find the navbar by its class or data attribute
      const navbar = document.querySelector('[data-navbar="main"]') || 
                    document.querySelector('.bg-\\[\\#FF6AC2\\]') ||
                    document.querySelector('.fixed.z-50');
      
      if (navbar) {
        setNavbarHeight(navbar.offsetHeight);
      }
    };

    // Calculate initial height
    calculateHeight();

    // Recalculate on window resize
    window.addEventListener('resize', calculateHeight);

    // Create a MutationObserver to watch for changes in navbar
    const observer = new MutationObserver(calculateHeight);
    const navbar = document.querySelector('[data-navbar="main"]') || 
                  document.querySelector('.bg-\\[\\#FF6AC2\\]');
    
    if (navbar) {
      observer.observe(navbar, {
        attributes: true,
        childList: true,
        subtree: true
      });
    }

    return () => {
      window.removeEventListener('resize', calculateHeight);
      observer.disconnect();
    };
  }, []);

  return navbarHeight;
};

export default useNavbarHeight;
