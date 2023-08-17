const Button = ({ label, onClick, className = "", ...props }) => {
  return (
    <button className={`shared-button ${className}`} onClick={onClick} {...props}>
      {label}
    </button>
  );
};

export default Button;