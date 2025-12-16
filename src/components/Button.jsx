import "./Button.css";

function Button({
  size = "md",
  variant = "primary",
  children,
  leftIcon = null,
  leftIconVisible = true,
  rightIcon = null,
  rightIconVisible = true,
  ...rest
}) {
  const ALLOWED_SIZES = ["sm", "md", "lg", "xl"];
  const resolvedSize = ALLOWED_SIZES.includes(size) ? size : "md";
  const sizeClass = `btn-${resolvedSize}`;
  const ALLOWED_VARIANTS = ["primary", "secondary", "ghost"];
  const resolvedVariant = ALLOWED_VARIANTS.includes(variant)
    ? variant
    : "primary";
  const variantClass = `btn-${resolvedVariant}`;
  const showLeftIcon = leftIcon && leftIconVisible;
  const showRightIcon = rightIcon && rightIconVisible;

  return (
    <button className={`btn ${sizeClass} ${variantClass}`} {...rest}>
      {showLeftIcon && <span className="btn-icon">{leftIcon}</span>}
      <span className="btn-text">
        <strong>{children}</strong>
      </span>
      {showRightIcon && <span className="btn-icon">{rightIcon}</span>}
    </button>
  );
}

export default Button;
