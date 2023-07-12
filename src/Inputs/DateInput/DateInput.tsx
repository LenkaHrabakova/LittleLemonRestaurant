import { ChangeEventHandler } from "react";

export function DateInput({
  label,
  id,
  value,
  min,
  max,
  isRequired,
  onChange,
}: {
  label: string;
  id: string;
  value: string;
  min?: string;
  max?: string;
  isRequired?: boolean;
  onChange: ChangeEventHandler<HTMLInputElement>;
}) {
  return (
    <>
      <label htmlFor={id}>{label}</label>
      <input
        type="date"
        className=""
        value={value}
        id={id}
        required={isRequired}
        min={min}
        max={max}
        onChange={onChange}
      />
    </>
  );
}
