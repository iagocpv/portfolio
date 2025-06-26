import { cn } from "../../lib/utils";
import { Slot } from "@radix-ui/react-slot";
import * as React from "react";
import { useTheme } from "../../context/ThemeContext";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  asChild?: boolean;
  variant?: "default" | "outline" | "ghost" | "link";
  size?: "default" | "sm" | "lg";
}


const buttonSizes = {
  default: "px-4 py-2 text-base",
  sm: "px-3 py-1 text-sm",
  lg: "px-5 py-3 text-lg",
};

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "default", size = "default", asChild = false, ...props }, ref) => {
    const {isDark} = useTheme()
    const buttonVariants = {
      default: "bg-blue-600 text-white hover:bg-blue-700",
      outline: isDark
            ? "border border-gray-600 text-gray-100 hover:bg-gray-700"
            : "border border-gray-700 text-gray-900 hover:bg-gray-700 hover:text-white",
      ghost: "bg-transparent hover:bg-gray-100 dark:hover:bg-gray-800",
      link: "underline text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-600",
    };
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(
          "inline-flex items-center justify-center rounded-xl font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none",
          buttonVariants[variant],
          buttonSizes[size],
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);

Button.displayName = "Button";

export { Button };
