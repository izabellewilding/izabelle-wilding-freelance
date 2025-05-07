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
      base: "bg-[#1f0421] text-white spacing-md tracking-wide antialiased text-[16px] bg-[#041d36] transition-colors duration-300",
      hover: "hover:bg-[#370c39]",
      outline:
        "border border-[#fdd0a0] text-[#fdd0a0] bg-transparent spacing-md tracking-wide hover:bg-slate-800 hover:text-white text-[16px]",
    },
    light: {
      base: "bg-slate-400 text-white",
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
      className={`group relative overflow-hidden font-medium rounded-lg ${buttonClass} px-5 py-4 font-heading transition-transform duration-300 hover:scale-105`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <span className="relative z-10">{text}</span>
      {/* Sheen effect */}
      <div className="absolute inset-0 flex h-full w-full justify-center transform skew-x-[-12deg] -translate-x-full transition-transform duration-700 group-hover:translate-x-full">
        <div className="relative h-full w-8 bg-white/20" />
      </div>
    </Link>
  );
}
