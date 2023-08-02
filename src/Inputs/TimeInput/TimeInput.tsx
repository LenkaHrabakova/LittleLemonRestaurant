import { ChangeEventHandler } from 'react';

export function TimeInput({
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
        type="time"
        className=""
        value={value}
        id={id}
        min={min}
        max={max}
        required={isRequired}
        onChange={onChange}
      />
    </>
  );
}
