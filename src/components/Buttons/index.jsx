import "./style.css";

export function Button({ onClick, type, text, className }) {
  const defaultClass = className || "button";

  return (
    <button onClick={onClick} type={type} className={defaultClass}>
      {text}
    </button>
  );
}
