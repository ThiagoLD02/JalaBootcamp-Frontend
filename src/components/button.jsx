export function Button({ backgroundcolor, textColor, message, handleClick }) {
  return (
    <button
      style={{
        width: "100%",
        maxWidth: 450,
        padding: 8,
        borderRadius: 8,
        backgroundColor: backgroundcolor,
        color: textColor,
        borderWidth: 0,
        textAlign: "center",
        cursor: "pointer",
        marginTop: 24,
      }}
      onClick={handleClick}
    >
      {message}
    </button>
  );
}
