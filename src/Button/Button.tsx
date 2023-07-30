import "./Button.css";

export type ButtonType = "button" | "submit";

export function Button({
  title,
  disabled,
  type,
  className,
  imgSrc,
  imgAlt,
}: {
  title?: string;
  disabled?: boolean;
  type: ButtonType;
  className?: string;
  imgSrc?: string;
  imgAlt?: string;
}) {
  return (
    <button disabled={disabled} type={type} className={className}>
      {imgSrc && <img src={imgSrc} alt={imgAlt} className="button-icon" />}
      {title}
    </button>
  );
}
