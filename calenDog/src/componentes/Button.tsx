import React from 'react' 
import './Button.css'

interface ButtonProps {
          
    /**
     * How large should the button be?
     */
    size?: 'small' | 'medium' | 'large';
    /**
     * Button contents
     */
    label: string;
    /**
     * Optional click handler
     */
    onClick?: () => void;
  }

  export function Button (props:ButtonProps) {
   function dog() {}
    return (
    <button onClick={dog}> {props.label}</button>
  )
  }