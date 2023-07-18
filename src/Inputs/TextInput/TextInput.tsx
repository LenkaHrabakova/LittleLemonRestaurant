import { ChangeEventHandler } from "react";
import "../InputStyles.css";

export type TextInputType = "text" | "email" | "tel";

export function TextInput({
  label,
  id,
  isRequired,
  placeholder,
  value,
  onChange,
  type,
}: {
  label: string;
  id: string;
  isRequired?: boolean;
  placeholder?: string;
  value: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
  type: TextInputType;
}) {
  return (
    <div className="input">
      <label htmlFor={id}>{label}</label>
      <input
        type={type}
        className=""
        placeholder={placeholder}
        id={id}
        required={isRequired}
        value={value}
        onChange={onChange}
      />
    </div>
  );
}
