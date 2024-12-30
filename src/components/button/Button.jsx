import PropTypes from 'prop-types'
const Button = ({
  type = "button",
  onClick,
  children,
  className = "",
  disabled = false,
  variant = "primary",
  size = "md",
  ariaLabel = "Button",
}) => {
  const baseStyle =
    "inline-flex items-center justify-center font-medium uppercase rounded-lg active:scale-95 active:translate-y-1 transition-all duration-200";

  const variants = {
    primary:
      "bg-[#E8E8E8] hover:bg-[#1F2937] text-primaryColor border-b-4 border-primaryColor hover:border-none",
    secondary:
      "bg-white hover:bg-[#E8E8E8] text-[#1F2937] border-b-4 active:border-b-2 border-[#1F2937]",
  };

  const sizes = { md: "px-8 py-3 h-[52px]" };

  const styles = `${baseStyle} ${variants[variant]} ${sizes[size]} ${className}`;
  return (
    <button
      type={type}
      onClick={onClick}
      className={styles}
      disabled={disabled}
      aria-label={ariaLabel}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
    type: PropTypes.string,
    onClick: PropTypes.func,
    children: PropTypes.node,
    className: PropTypes.string,
    disabled: PropTypes.bool,
    variant: PropTypes.oneOf(["primary", "secondary"]),
    size: PropTypes.oneOf(["md"]),
    ariaLabel: PropTypes.string,
  };

export default Button;
