
import { ArrowUpRight } from "lucide-react";

const Button = ({
  children,
  href,
  variant = "primary",
  icon = false,
  external = false,
  onClick,
  type = "button",
  className = "",
}) => {
  const buttonContent = (
    <>
      <span>{children}</span>

      {icon && <ArrowUpRight size={18} />}
    </>
  );

  const buttonClass = `btn btn-${variant} ${className}`.trim();

  if (href) {
    return (
      <a
        href={href}
        className={buttonClass}
        target={external ? "_blank" : undefined}
        rel={external ? "noreferrer" : undefined}
      >
        {buttonContent}
      </a>
    );
  }

  return (
    <button
      type={type}
      className={buttonClass}
      onClick={onClick}
    >
      {buttonContent}
    </button>
  );
};

export default Button;
