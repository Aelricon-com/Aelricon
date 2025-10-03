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
    ? 'bg-[#DA0037] text-[#EDEDED] hover:bg-[#DA0037]/90 hover:scale-105 hover:shadow-[0_0_30px_rgba(218,0,55,0.7)]'
    : 'bg-[#444444] text-[#EDEDED] hover:bg-[#444444]/80 hover:scale-105 hover:shadow-[0_0_20px_rgba(218,0,55,0.5)]';

  return (
    <button
      type={type}
      onClick={onClick}
      className={`${baseStyles} ${variantStyles} ${className}`}
    >
      <span className="relative z-10">{children}</span>

      <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/30 to-transparent"></div>

      <div className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-r from-transparent via-white/10 to-transparent blur-sm"></div>
    </button>
  );
}
