import { ChangeEventHandler } from "react";
import "../InputStyles.css";

export function Select({
  label,
  id,
  value,
  placeholder,
  selectOptions,
  onChange,
}: {
  label: string;
  id: string;
  value: string;
  placeholder?: string;
  selectOptions?: { name: string; value: string }[];
  onChange: ChangeEventHandler<HTMLSelectElement>;
}) {
  return (
    <div className="input">
      <label htmlFor={id}>{label}</label>
      <select
        className=""
        id={id}
        onChange={onChange}
        value={value}
        placeholder={placeholder}
      >
        <option />
        {selectOptions?.map((option, i) => (
          <option value={option.value} key={i}>
            {option.name}
          </option>
        ))}
      </select>
    </div>
  );
}
