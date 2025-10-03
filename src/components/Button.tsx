import { ReactNode } from 'react';

interface ButtonProps {
  children: ReactNode;
  onClick?: () => void;
  variant?: 'primary' | 'secondary';
  type?: 'button' | 'submit';
  className?: string;
}

export default function Button({
  children,
  onClick,
  variant = 'primary',
  type = 'button',
  className = ''
}: ButtonProps) {
  const baseStyles = 'relative px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 overflow-hidden group';

  const variantStyles = variant === 'primary'
    ? 'bg-[#DA0037] text-[#EDEDED] hover:bg-[#DA0037]/90 hover:scale-105'
    : 'bg-[#444444] text-[#EDEDED] hover:bg-[#444444]/80 hover:scale-105';

  return (
    <button
      type={type}
      onClick={onClick}
      className={`${baseStyles} ${variantStyles} ${className}`}
    >
      <span className="relative z-10">{children}</span>

      <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/30 to-transparent"></div>
    </button>
  );
}
