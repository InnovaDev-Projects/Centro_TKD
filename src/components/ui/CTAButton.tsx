import { CTAButtonProps } from "../../types";

export const CTAButton = ({
  href,
  children,
  size = "md",
  variant = "primary",
  className = "",
  onClick,
  ariaLabel,
}: CTAButtonProps) => {
  const base =
    "inline-flex items-center justify-center gap-2 font-semibold rounded-md transition-all duration-200 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-600 focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-950 active:scale-[0.98] font-body";

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-5 py-2.5 text-sm",
    lg: "px-6 py-3 text-base",
  };

  const variants = {
    primary:  "bg-red-600 hover:bg-red-700 text-white",
    whatsapp: "bg-emerald-600 hover:bg-emerald-700 text-white",
    outline:  "border border-zinc-700 text-zinc-200 hover:border-zinc-500 hover:bg-zinc-900",
  };

  const combinedClasses = `${base} ${sizes[size]} ${variants[variant]} ${className}`;

  if (onClick) {
    return (
      <button onClick={onClick} className={combinedClasses} aria-label={ariaLabel}>
        {children}
      </button>
    );
  }

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={combinedClasses}
      aria-label={ariaLabel}
    >
      {children}
    </a>
  );
};
