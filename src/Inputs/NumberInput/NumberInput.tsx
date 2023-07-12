import { ChangeEventHandler } from "react";

export function NumberInput({
  label,
  id,
  isRequired,
  placeholder,
  value,
  min,
  max,
  defaultValue,
  onChange,
}: {
  label: string;
  id: string;
  isRequired?: boolean;
  placeholder?: string;
  value?: string;
  min?: number;
  max?: number;
  defaultValue?: number;
  onChange: ChangeEventHandler<HTMLInputElement>;
}) {
  return (
    <>
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
        defaultValue={defaultValue}
        onChange={onChange}
      />
    </>
  );
}
