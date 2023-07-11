import "./Button.css";

export function Button({
  title,
  disabled,
}: {
  title: string;
  disabled?: boolean;
}) {
  return <button disabled={disabled}>{title}</button>;
}
