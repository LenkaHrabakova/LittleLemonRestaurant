import { ChangeEventHandler } from "react";

export function DateInput({
  label,
  id,
  value,
  min,
  max,
  isRequired,
  defaultValue,
  onChange,
}: {
  label: string;
  id: string;
  value: string;
  min?: string;
  max?: string;
  isRequired?: boolean;
  defaultValue?: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
}) {
  return (
    <>
      <label htmlFor={id}>{label}</label>
      <input
        type="date"
        className=""
        value={value}
        defaultValue={defaultValue}
        id={id}
        required={isRequired}
        min={min}
        max={max}
        onChange={onChange}
      />
    </>
  );
}
