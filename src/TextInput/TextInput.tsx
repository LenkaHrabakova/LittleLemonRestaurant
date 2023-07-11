import { ChangeEventHandler } from "react";

export function TextInput({
  label,
  id,
  isRequired,
  placeholder,
  value,
  defaultValue,
  onChange,
}: {
  label: string;
  id: string;
  isRequired?: boolean;
  placeholder?: string;
  value?: string;
  defaultValue?: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
}) {
  return (
    <>
      <label htmlFor={id}>{label}</label>
      <input
        type="text"
        className=""
        placeholder={placeholder}
        id={id}
        required={isRequired}
        value={value}
        defaultValue={defaultValue}
        onChange={onChange}
      />
    </>
  );
}
