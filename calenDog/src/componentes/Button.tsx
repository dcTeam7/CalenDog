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

  function dog() {}

  export function Button (props:ButtonProps) {
    return (
      <button onClick={props.onClick}> {props.label}</button>
    )
  }