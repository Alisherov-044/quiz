export default function Button({ text, className, onClick, type }) {
  switch (type) {
    case "primary":
      className =
        "py-2 px-4 border-2 border-solid rounded text-red-700 border-red-700 transition-all duration-200 ease-linear hover:bg-red-700 hover:text-white";
      break;
    case "secondary":
      className =
        "py-2 px-4 border-2 border-solid rounded border-blue-700 text-blue-700 border-bluetext-blue-700 transition-all duration-200 ease-linear hover:bg-blue-700 hover:text-white";
      break;
    default:
      className = "";
  }

  return (
    <button className={className} onClick={onClick}>
      {text}
    </button>
  );
}
