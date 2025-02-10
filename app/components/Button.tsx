import { useState } from "react";
import Link from "next/link";

type Variant = "dark" | "light";

export function Button({
  text = "Get in Touch",
  variant = "dark",
  outline = false,
}: {
  text?: string;
  variant?: Variant;
  outline?: boolean;
}) {
  const [, setHovered] = useState(false);

  const variants = {
    dark: {
      base: "bg-green-800 text-white",
      hover: "hover:bg-green-700",
      outline:
        "border border-green-800 text-green-800 bg-transparent hover:bg-green-800 hover:text-white",
    },
    light: {
      base: "bg-green-300 text-green-900",
      hover: "hover:bg-green-400",
      outline:
        "border border-green-300 text-green-900 bg-transparent hover:bg-green-300 hover:text-green-900",
    },
  };

  const selectedVariant = variants[variant];
  const buttonClass = outline
    ? selectedVariant.outline
    : `${selectedVariant.base} ${selectedVariant.hover}`;

  return (
    <Link
      href="#contact"
      className={`relative overflow-hidden ${buttonClass} px-6 py-4 rounded-full text-md font-semibold transition-colors font-heading 
                 before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent before:via-white/30 before:to-transparent 
                 before:translate-x-[-100%] before:transition-transform before:duration-1000 hover:before:translate-x-[100%]`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {text}
    </Link>
  );
}
