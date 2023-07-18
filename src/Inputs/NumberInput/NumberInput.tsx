import { ChangeEventHandler } from "react";
import "../InputStyles.css";

export function NumberInput({
  label,
  id,
  isRequired,
  placeholder,
  value,
  min,
  max,
  onChange,
}: {
  label: string;
  id: string;
  isRequired?: boolean;
  placeholder?: string;
  value: string;
  min?: number;
  max?: number;

  onChange: ChangeEventHandler<HTMLInputElement>;
}) {
  return (
    <div className="input">
      <label htmlFor={id}>{label}</label>
      <input
        type="number"
        className=""
        placeholder={placeholder}
        id={id}
        required={isRequired}
        value={value}
        min={min}
        max={max}
        onChange={onChange}
      />
    </div>
  );
}
