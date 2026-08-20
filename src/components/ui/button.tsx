import type { ButtonHTMLAttributes } from 'react';

import { cn } from '@/lib/utils';

const variants = {
  default: 'bg-primary text-primary-foreground hover:bg-primary-light',
  accent: 'bg-accent text-primary hover:bg-accent-light',
  outline: 'border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground',
  'outline-light': 'border-2 border-white text-white hover:bg-white hover:text-primary',
  ghost: 'text-foreground hover:bg-accent-pale hover:text-primary',
};

const sizes = {
  default: 'h-11 px-6 py-3',
  sm: 'h-10 px-4 py-2 text-sm',
  lg: 'h-12 px-8 py-4 text-lg',
  icon: 'h-10 w-10',
};

type ButtonVariant = keyof typeof variants;
type ButtonSize = keyof typeof sizes;

export function buttonVariants({
  variant = 'default',
  size = 'default',
  className,
}: {
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
} = {}) {
  return cn(
    'inline-flex items-center justify-center gap-2 rounded-md font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
    variants[variant],
    sizes[size],
    className,
  );
}

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
}

export function Button({ className, variant, size, ...props }: ButtonProps) {
  return <button className={buttonVariants({ variant, size, className })} {...props} />;
}
