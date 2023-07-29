import "./Button.css";

export type ButtonType = "button" | "submit";

export function Button({
  title,
  disabled,
  type,
  className,
}: {
  title: string;
  disabled?: boolean;
  type: ButtonType;
  className?: string;
}) {
  return (
    <button disabled={disabled} type={type} className={className}>
      {title}
    </button>
  );
}
