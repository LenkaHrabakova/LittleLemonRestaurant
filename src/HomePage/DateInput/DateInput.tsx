export function DateInput({
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
        type="date"
        className=""
        value={defaultValue}
        id={id}
        required={isRequired}
      />
    </>
  );
}
