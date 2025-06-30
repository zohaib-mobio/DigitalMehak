import { useEffect, useState } from 'react';
import Button from '../Compents/Button';


export function ButtonStyle(){ 
  const [button, setButton] = useState(true);
  
    
      // Function to handle button visibility based on window width
      const showButton = () => { 
        if (window.innerWidth <= 400) {
          
        } else {
          
        }
      };
    
      useEffect(() => {
        window.addEventListener('resize', showButton);
        showButton(); // Initial check
    
        return () => {
          window.removeEventListener('resize', showButton);
        };
      }, []);
      
  return button; 
}
 