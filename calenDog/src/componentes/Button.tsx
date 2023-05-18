import { useState } from 'react'
import './Button.css'

interface ButtonProps {
  /**
   * Estado boleano do botão
   */
  stateBtn: boolean
  /**
   * Tamanho do botão
   */
  size?: 'small' | 'medium' | 'large';
  /**
   * Conteudo do botão
   */
  label: string;
  /**
   * Tipo de uso do botão
   */
  type?: 'button' | 'submit' | 'reset';
  /**
   * Clique opcional
   */
  onClick?: (b: boolean) => void;
}

export function Button(props: ButtonProps) {

  const [clicked, setClicked] = useState(props.stateBtn);

  function handleClick() {
    setClicked(!clicked)
    if (props.onClick) {
      props.onClick(!clicked)
    }
  }
  return (
    <button
      onClick={handleClick}
      type={props.type}
      className={['button', `storybook-button--${props.size}`].join(' ')}>
      {props.label}
    </button>
  )
}