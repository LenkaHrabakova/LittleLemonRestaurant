export function TimeInput({
  label,
  id,
  min,
  max,
  isRequired,
  defaultValue,
}: {
  label: string;
  id: string;
  min?: string;
  max?: string;
  isRequired?: boolean;
  defaultValue?: string;
}) {
  return (
    <>
      <label htmlFor={id}>{label}</label>
      <input
        type="time"
        className=""
        value={defaultValue}
        id={id}
        min={min}
        max={max}
        required={isRequired}
      />
    </>
  );
}
