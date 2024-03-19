export function InputField({ title, inputType, placeholder, updateData }) {
  return (
    <div>
      <h3>{title}</h3>
      <input
        required
        style={{
          padding: 8,
          borderRadius: 8,
          backgroundColor: "whitesmoke",
        }}
        type={inputType}
        placeholder={placeholder}
        name={title}
        onChange={(value) => updateData(title, value.target.value)}
      />
    </div>
  );
}
