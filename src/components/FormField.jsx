function FormField({ label, name, type }) {
  return (
    <>
      <label htmlFor={name}>{label}</label>
      <input
        type={type}
        name={name}
        className="bg-transparent outline-none focus:outline-none  border-black rounded-md p-3 border"
      />
    </>
  );
}
export default FormField;
