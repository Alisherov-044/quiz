export default function Container({ children, className }) {
  return (
    <div className={`container h-full mx-auto ${className}`}>{children}</div>
  );
}
