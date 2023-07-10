export function TextInput({
  label,
  id,
  isRequired,
  placeholder,
}: {
  label: string;
  id: string;
  isRequired?: boolean;
  placeholder?: string;
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
      />
    </>
  );
}
