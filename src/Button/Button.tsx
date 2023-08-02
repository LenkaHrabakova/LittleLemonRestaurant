import { MouseEventHandler } from 'react';
import './Button.css';

export type ButtonType = 'button' | 'submit';

export function Button({
  title,
  disabled,
  type,
  className,
  imgSrc,
  imgAlt,
  onClick,
}: {
  title?: string;
  disabled?: boolean;
  type: ButtonType;
  className?: string;
  imgSrc?: string;
  imgAlt?: string;
  onClick?: MouseEventHandler;
}) {
  return (
    <button disabled={disabled} type={type} className={className} onClick={onClick}>
      {imgSrc && <img src={imgSrc} alt={imgAlt} className="button-icon" />}
      {title}
    </button>
  );
}
