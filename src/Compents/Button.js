import React from 'react'
import {Link} from 'react-router-dom'
import '../CompentsCss/Button.css'

const STYLES = ['btn--primary','btn--outline']
const SIZES = ['btn--medium','btn--large']

export const Button =({
    children,
    type,
    onclick,
    buttonStyle,
    buttonSize
})=>{
    const checkButtonStyle= STYLES.includes(buttonStyle) ? buttonStyle:STYLES[0]
    ? buttonStyle
    : STYLES[0];

    const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0]
    return (
        <Link className='btn-Mobile'>
        <button 
        className={`btn ${checkButtonStyle} ${checkButtonSize}`}
        // onclick={onclick}
        type={type}
        > 
        {children}
        </button>
        </Link>
        
    )
} 
export default Button