import "./Button.css";

function Button({
  size = "md",
  variant = "primary",
  className = "",
  children,
  leftIcon = null,
  leftIconVisible = true,
  showLeftIcon,
  rightIcon = null,
  rightIconVisible = true,
  showRightIcon,
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
  const resolvedLeftVisible =
    showLeftIcon !== undefined ? showLeftIcon : leftIconVisible;

  const resolvedRightVisible =
    showRightIcon !== undefined ? showRightIcon : rightIconVisible;

  const shouldShowLeftIcon = leftIcon && resolvedLeftVisible;
  const shouldShowRightIcon = rightIcon && resolvedRightVisible;

  const hasText =
    typeof children === "string"
      ? children.trim().length > 0
      : Boolean(children);

  return (
    <button
      className={`btn ${sizeClass} ${variantClass} ${className}`}
      {...rest}
    >
      {shouldShowLeftIcon && <span className="btn-icon">{leftIcon}</span>}
      {hasText && (
        <span className="btn-text">
          <strong>{children}</strong>
        </span>
      )}
      {shouldShowRightIcon && <span className="btn-icon">{rightIcon}</span>}
    </button>
  );
}

export default Button;
