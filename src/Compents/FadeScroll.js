import { useRef, useEffect } from "react";



const FadeInOnScroll = () => {
      const fadeRef = useRef(); 
     
      useEffect(() => { 
        const handleScroll = () => {
          if (fadeRef.current) {
            const rect = fadeRef.current.getBoundingClientRect();
            if (rect.top <= window.innerHeight && rect.bottom >= 0) {
              fadeRef.current.classList.add('box-animate');
              fadeRef.current.classList.add('element-animate');
              fadeRef.current.classList.add('show-animate');
              fadeRef.current.classList.add('text-animate');
              fadeRef.current.classList.add('services-animate');
              fadeRef.current.classList.add('foam-img-animate'); 
            } 
          }
        };
        
        window.addEventListener('scroll', handleScroll);
        
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, [])
   
        return fadeRef
    }
    
export default FadeInOnScroll
