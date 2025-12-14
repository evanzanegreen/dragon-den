import React from "react";

function Button({
  size = "md",
  leftIcon = null,
  leftIconVisible = true,
  rightIcon = null,
  rightIconVisible = true,
  variant = primary,
  children,
}) {
  const showLeftIcon = leftIcon && leftIconVisible;
  const showRightIcon = rightIcon && rightIconVisible;

  return (
    <>
      <button className="btn">
        {showLeftIcon && <span className="btn-icon">{leftIcon}</span>}
        <span className="btn-text">
          <strong>{children}</strong>
        </span>
        {showRightIcon && <span className="btn-icon">{rightIcon}</span>}
      </button>
    </>
  );
}

export default Button;
