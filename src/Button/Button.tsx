import "./Button.css";

export type ButtonType = "button" | "submit";

export function Button({
  title,
  disabled,
  type,
}: {
  title: string;
  disabled?: boolean;
  type: ButtonType;
}) {
  return (
    <button disabled={disabled} type={type}>
      {title}
    </button>
  );
}
