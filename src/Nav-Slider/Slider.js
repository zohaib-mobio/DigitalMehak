// src/Nav-Slider/Slider.js
import { useState } from 'react';

export function useNavToggle(initialState = false) {
    const [isOpen, setIsOpen] = useState(initialState);
    const [isDisable, setDisable] = useState(initialState);

    const CloseNav = () => {  
        setIsOpen(!isOpen);  
        setDisable(!isDisable); 
    };  

    return { isOpen, isDisable, CloseNav, setIsOpen };
}
