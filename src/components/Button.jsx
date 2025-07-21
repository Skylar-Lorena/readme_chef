const Button = ({ children, onClick, className }) => (
  <button
    onClick={onClick}
    className={`px-4 py-2 rounded text-white bg-green-600 hover:bg-green-700 transition ${className}`}
  >
    {children}
  </button>
);

export default Button;
