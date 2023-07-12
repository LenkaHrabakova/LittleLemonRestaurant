export function Select({
  label,
  id,
  placeholder,
}: {
  label: string;
  id: string;
  placeholder: string;
}) {
  return (
    <>
      <label htmlFor={id}>{label}</label>
      <select className="" id={id}>
        <option value="">{placeholder}</option>
      </select>
    </>
  );
}
